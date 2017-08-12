---
title: COSC1285 Algorithms Week 1 Notes
date: 2017-07-20 19:26:16
categories: Uni Notes
tags:
- COSC1285
- javascript
---

Some Javascript implementations of two algorithms from the ***Introduction to the Design and Analysis of Algorithms*** textbook.

<!--more-->

### ALGORITHM Euclid(m, n)
```
//Computes gcd(m, n) by Euclid’s algorithm
//Input: Two nonnegative, not-both-zero integers m and n
//Output: Greatest common divisor of m and n
while n = 0 do
  r ← m mod n
  m ← n
  n ← r
return m
```

In javascript this would look like this. We can make use of an implicit return and ternary function to have a rather compact one-liner.

```javascript
const gcd = (m, n) => (n > 0 ? gcd(n, m % n) : m);
console.log(gcd(process.argv[2], process.argv[3]));
```

Testing the output it appears to work.
```bash
# node gcd.js 60 24
12
```

---

### ALGORITHM Sieve(n)
```
//Implements the sieve of Eratosthenes
//Input: A positive integer n > 1
//Output: Array L of all prime numbers less than or equal to n
1.1 What Is an Algorithm? 7
for p ← 2 to n do A[p] ← p
for p ← 2 to √n do //see note before pseudocode
  if A[p] = 0 //p hasn’t been eliminated on previous passes
    j ← p ∗ p
    while j ≤ n do
      A[j] ← 0 //mark element as eliminated
      j ← j + p
//copy the remaining elements of A to array L of the primes
i ← 0
for p ← 2 to n do
  if A[p] = 0
    L[i]← A[p]
    i ← i + 1
return L
```

If I was trying to create a function to find primes, I would like to do this differently (say with a linked list), but I wanted to implement the example exactly. I also ignored the section at the end to copy the array to a new array L because it isn't necessary.

```javascript
const sieve = n => {
  const array = [];
  const limit = Math.floor(Math.sqrt(n));
  const iterations = {
    outerLoop: 0,
    innerLoop: 0
  };
  let j, p;

  for (p = 2; p <= n; p++) array[p] = p;

  for (p = 2; p <= limit; p++) {
    iterations.outerLoop++;
    if (array[p]) {
      j = p * p;
      while (j <= n) {
        iterations.innerLoop++;
        array[j] = 0;
        j += p;
      }
    }
  }

  console.log(iterations);
  return array.filter(value => value);
};

console.log(sieve(process.argv[2]).join(", "));
```

And it appears to work. Fantastic :)

```bash
# node sieve.js 100
{ outerLoop: 9, innerLoop: 104 }
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
```
