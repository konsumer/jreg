# jreg

Simple stdin/stdout javascript replacement

Think of it like a really simple `grep` and `sed`, with [javascript RegExp syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

## installation

```
npm i -g jreg
```

## usage

```
jreg [SEARCH] <REPLACE>

Options:
  --help, -h     Show help                                             [boolean]
  --version, -v  Show version number                                   [boolean]
  -g             global match; find all matches rather than stopping after the
                 first match                                           [boolean]
  -i             ignore case                                           [boolean]
  -m             multiline; treat beginning and end characters (^ and $) as
                 working over multiple lines (i.e., match the beginning or end
                 of each line (delimited by \n or \r), not only the very
                 beginning or end of the whole input string)           [boolean]
  -u             unicode; treat pattern as a sequence of unicode code points
                                                                       [boolean]
  -y             sticky; matches only from the index indicated by the lastIndex
                 property of this regular expression in the target string (and
                 does not attempt to match from any later indexes).    [boolean]

Examples:
  cat myfile | jreg -g cool ok  Replace first instance, on each line, of
                                   "cool" with "ok"
  cat myfile | jreg -g cool ok  Replace all instances of "cool" with "ok"
```
