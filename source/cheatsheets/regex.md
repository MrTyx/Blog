---
title: Regex (Javascript)
---

## Quantifiers
|||
|-|-|
|`*`|0 or more|
|`+`|1 or more|
|`?`|0 or 1 (turns greedy to reluctant)|
|`{2}`|Exactly 2|
|`{2, 5}`|Between 2 and 5|
|`{2,}`|2 or more|

## Character
|||
|-|-|
|`^`|Start of string|
|`$`|End of string|
|`\b`|Word boundary|
|`\B`|Non-word boundary|
|`[\b]`|Backspace character|
|`\d`|One digit|
|`\D`|One non-digit|
|`\s`|One whitespace|
|`\S`|One non-whitespace|
|`\w`|One word character|
|`\W`|One non-word character|
|`(?=...)`|Positive lookahead|
|`(?!...)`|Negative lookahead|

## Replacement
|||
|-|-|
|`$$`|Inserts $|
|`$&`|Insert entire match|
|``$` `` |Insert preceding string|
|`$'`|Insert following string|
|`$Y`|Insert Y'th captured group|
