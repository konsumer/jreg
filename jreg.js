#!/usr/bin/env node

var readline = require('readline')
var yargs = require('yargs')

var argv = yargs
  .usage('$0 [SEARCH] <REPLACE>')
  .help()
  .version()
  .alias('version', 'v')
  .alias('help', 'h')
  .example('cat myfile | $0 -g cool ok', 'Replace first instance, on each line, of "cool" with "ok"')
  .example('cat myfile | $0 -g cool ok', 'Replace all instances of "cool" with "ok"')
  .boolean('g')
  .describe('g', 'global match; find all matches rather than stopping after the first match')
  .boolean('i')
  .describe('i', 'ignore case')
  .boolean('m')
  .describe('m', 'multiline; treat beginning and end characters (^ and $) as working over multiple lines (i.e., match the beginning or end of each line (delimited by \\n or \\r), not only the very beginning or end of the whole input string)')
  .boolean('u')
  .describe('u', 'unicode; treat pattern as a sequence of unicode code points')
  .boolean('y')
  .describe('y', 'sticky; matches only from the index indicated by the lastIndex property of this regular expression in the target string (and does not attempt to match from any later indexes).')
  .argv

if (argv._.length < 1) {
  console.error('You must at least specify SEARCH.\n')
  yargs.showHelp()
  process.exit(1)
}

var flags = ['g', 'i', 'm', 'u', 'y']
  .filter(a => argv[a])
  .join('')

const search = new RegExp(argv._.shift(), flags)
var replace = argv._.shift()

function dojob (line) {
  if (replace) {
    console.log(line.replace(search, replace))
  } else {
    if (line.test(search)) {
      console.log(line)
    }
  }
}

if (argv.m) {
  dojob(process.stdin.read())
} else {
  var rl = readline.createInterface({
    input: process.stdin,
    terminal: false
  })
  rl.on('line', dojob)
}
