---
title: INTE2401 Cloud Security Week 4 Notes
date: 2017-08-11 20:02:33
categories: Uni Notes
tags:
- INTE2401
---

Implementation of a Vigenere Cipher in javascript.


<!--more-->

At first, it appears scary. But really it is just an addition table.

```javascript
const key = process.argv[2].toUpperCase();
const string = process.argv[3].toUpperCase();

const encode = str_i => {
  const k = key.charCodeAt(str_i % key.length) - 65;
  let c = string.charCodeAt(str_i) + k;
  if (c > 90) c -= 26;
  process.stdout.write(String.fromCharCode(c));
};

for (let i = 0; i < string.length; i++) encode(i);
```

I'm using the example from Wikipedia. Running it we get;
```bash
# node encode lemon attackatdawn
LXFOPVEFRNHR
```

That matches perfectly. Now we just invert the logic.
```javascript
const key = process.argv[2].toUpperCase();
const string = process.argv[3].toUpperCase();

const decode = str_i => {
  const k = key.charCodeAt(str_i % key.length) - 65;
  let c = string.charCodeAt(str_i) - k;
  if (c < 65) c += 26;
  process.stdout.write(String.fromCharCode(c));
};

for (let i = 0; i < string.length; i++) decode(i);
```

Which we run similarly as
```bash
# node decode lemon LXFOPVEFRNHR
ATTACKATDAWN
```

Cool beans. Like I wrote at the start, it seems like a scary cipher, but its rather toothless.

---

### To Study - Simplified DES Cipher
- https://terenceli.github.io/assets/file/mimaxue/SDES.pdf
- http://homepage.smc.edu/morgan_david/vpn/C-SDES.pdf
