---
title: INTE2401 Cloud Security Week 2 Notes
date: 2017-07-28 20:02:33
categories: Uni Notes
tags:
- INTE2401
---

Implementation of a Spartan Scytale Cipher in javascript.

<!--more-->

Ok, so this is a pretty straight forward cipher.

```javascript
const string = process.argv[2];

const run = columns => {
  let rows = Math.ceil(string.length / columns);

  process.stdout.write(`${columns}: "`);

  for (let col = 0; col < columns; col++) {
    for (let row = 0; row < rows; row++) {
      let i = row * columns + col;
      let char = i < string.length ? string[i] : "_";
      process.stdout.write(char);
    }
  }
  process.stdout.write('"\n');
};

console.log(`\nNumber of columns`);
for (let columns = 2; columns <= 9; columns++) run(columns);
```

Testing that output it looks correct.

```bash
# node encode "Cloud Security"

Number of columns
2: "CodScrtlu euiy"
3: "CuSutlderyo ci_"
4: "Cdctl uyoSr_uei_"
5: "C rlSioetucydu_"
6: "CStleyoc_uu_dr_ i_"
7: "Celcouurdi tSy"
8: "Ccluoruidt yS_e_"
9: "Culroiutdy _S_e_c_"
```

Lets go with 7 columns, which is "Celcouurdi tSy"

---

The decode process is the mirror, except we iterate over the columns rather than rows. Also if we assume that the cipher will be padded, then we don't need to bother with ciphers where the characters divided by columns has a remainder.

```javascript
const string = process.argv[2];

const run = columns => {
  let rows = Math.ceil(string.length / columns);
  if (rows !== string.length / columns) return;

  process.stdout.write(`${columns}: `);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      let i = col * rows + row;
      process.stdout.write(string[i]);
    }
  }
  process.stdout.write("\n");
};

console.log(`\nNumber of columns`);
for (let columns = 2; columns <= 9; columns++) run(columns);
```

Looking at the output it appears to work.

```bash
# node decode "Celcouurdi tSy"

Number of columns
2: Credlic otuSuy
7: Cloud Security
```

---

I did some more testing to verify my results against examples I found online, but this is limit of what I wanted to post.
