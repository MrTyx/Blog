---
title: COSC1285 Algorithms Week 3 Notes
date: 2017-08-02 12:50:02
categories: Uni Notes
mathjax: true
tags:
- COSC1285
---

Notes from lecture on algorithmic orders of growth, and javascript implementations of selection sort and bubble sort.

<!--more-->

### Rule of thumb for comparing orders of growth.

$$ O(n^n) > O(n!) > O(a^n) > O(n^a) > O(\log{(n)}) > O(1)$$

*Note*: Don't forget that $\log_a{b}^c= c \cdot \log_a{b}$ so be careful about assuming two log functions have the same order of growth.

<!-- Tutorial example solution (ordered from lowest to highest)
- $(n-2)!$
- $5\log(n+100)^10$
- $2^{2n}$
- $0.0001n^4 + 3n^3 + 1$
- $\log_e^2{n}$
- $\sqrt[3]{n}$
- $3^n$ -->

---

### Selection Sort

This algorithm is to iterate over an array, finding the smallest value along the way, then at the end swap it with the first position. Repeat for the second position, etc.

```
ALGORITHM SelectionSort(A[0..n − 1])
//Sorts a given array by selection sort
//Input: An array A[0..n − 1] of orderable elements
//Output: Array A[0..n − 1] sorted in nondecreasing order
for i ← 0 to n − 2 do
  min ← i
  for j ← i + 1 to n − 1 do
    if A[j] < A[min] min ← j
  swap A[i] and A[min]
```

I wanted to make sure I matched the textbook output;

![](/images/cosc1285/table3_1.jpg)

This was my implementation.

```javascript
const array = [89, 45, 68, 90, 29, 34, 17];

// Format table like in book.
const print = done => {
  for (let i = 0; i < array.length; i++) {
    let spacer = done === i ? " | " : "   ";
    process.stdout.write(`${spacer}${array[i]}`);
  }
  process.stdout.write(`\n`);
};

// Print initial row
print(0);

// Selection sort
for (let i = 0; i < array.length - 1; i++) {
  let min = i;
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] < array[min]) min = j;
  }
  [array[i], array[min]] = [array[min], array[i]];
  print(i + 1);
}
```

Running that, we get the correct output.

```bash
$ node selection_sort
| 89   45   68   90   29   34   17
  17 | 45   68   90   29   34   89
  17   29 | 68   90   45   34   89
  17   29   34 | 90   45   68   89
  17   29   34   45 | 90   68   89
  17   29   34   45   68 | 90   89
  17   29   34   45   68   89 | 90
```

---

### Bubble Sort

This algorith starts with the first element and iterate over the array, trading up whenever we find a greater value.

```
ALGORITHM BubbleSort(A[0..n − 1])
//Sorts a given array by bubble sort
//Input: An array A[0..n − 1] of orderable elements
//Output: Array A[0..n − 1] sorted in nondecreasing order
for i ← 0 to n − 2 do
  for j ← 0 to n − 2 − i do
    if A[j + 1] < A[j] swap A[j] and A[j + 1]
```

I didn't quite match the textbook output because I wanted each iteration on its own line.

![](/images/cosc1285/table3_2.jpg)

This is my implementation.

```javascript
const array = [89, 45, 68, 90, 29, 34, 17];

// Format table like in book.
const print = (comparison, done) => {
  for (let i = 0; i < array.length; i++) {
    let spacer = "   ";
    if (done === i) spacer = " | ";
    if (comparison === i) spacer = " ? ";
    process.stdout.write(`${spacer}${array[i]}`);
  }
  process.stdout.write(`\n`);
};

// Bubble sort
for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - 1 - i; j++) {
    print(j + 1, array.length - i);
    if (array[j + 1] < array[j]) {
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }
}

// Print final row
print(null, 0);
```

Running that, we get the output I expect.

```bash
$ node bubble_sort
  89 ? 45   68   90   29   34   17
  45   89 ? 68   90   29   34   17
  45   68   89 ? 90   29   34   17
  45   68   89   90 ? 29   34   17
  45   68   89   29   90 ? 34   17
  45   68   89   29   34   90 ? 17
  45 ? 68   89   29   34   17 | 90
  45   68 ? 89   29   34   17 | 90
  45   68   89 ? 29   34   17 | 90
  45   68   29   89 ? 34   17 | 90
  45   68   29   34   89 ? 17 | 90
  45 ? 68   29   34   17 | 89   90
  45   68 ? 29   34   17 | 89   90
  45   29   68 ? 34   17 | 89   90
  45   29   34   68 ? 17 | 89   90
  45 ? 29   34   17 | 68   89   90
  29   45 ? 34   17 | 68   89   90
  29   34   45 ? 17 | 68   89   90
  29 ? 34   17 | 45   68   89   90
  29   34 ? 17 | 45   68   89   90
  29 ? 17 | 34   45   68   89   90
| 17   29   34   45   68   89   90
```
