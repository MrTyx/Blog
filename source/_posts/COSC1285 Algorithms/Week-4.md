---
title: COSC1285 Algorithms Week 4 Notes
date: 2017-08-09 12:50:02
categories: Uni Notes
mathjax: true
tags:
- COSC1285
---

A javascript implementation of InsertionSort.

<!--more-->

Here is the algorithm pseudocode from the textbook.

```
ALGORITHM InsertionSort(A[0..n − 1])
//Sorts a given array by insertion sort
//Input: An array A[0..n − 1] of n orderable elements
//Output: Array A[0..n − 1] sorted in nondecreasing order
for i ← 1 to n − 1 do
  v ← A[i]
  j ← i − 1
  while j ≥ 0 and A[j] > v do
    A[j + 1]← A[j]
    j ← j − 1
  A[j + 1] ← v
```

Here is the output we are expecting;

![](/images/cosc1285/table3.jpg)

It is a pretty straightforward algorithm. Its basically the same logic for how I organize a hand of cards.

```javascript
let data = [89, 45, 68, 90, 29, 34, 17];

const print = marker => {
  for (let i = 0; i < data.length; i++) {
    let spacer = marker === i ? " | " : "   ";
    process.stdout.write(`${spacer}${data[i]}`);
  }
  process.stdout.write("\n");
};

for (let i = 1; i < data.length; i++) {
  print(i);
  let v = data[i];
  let j = i - 1;
  while (j >= 0 && data[j] > v) {
    data[j + 1] = data[j];
    j = j - 1;
  }
  data[j + 1] = v;
}

print(data.length);
```

Running that, we get the correct output;
```bash
# node insertionSort
89 | 45   68   90   29   34   17
45   89 | 68   90   29   34   17
45   68   89 | 90   29   34   17
45   68   89   90 | 29   34   17
29   45   68   89   90 | 34   17
29   34   45   68   89   90 | 17
17   29   34   45   68   89   90
```

Easy as :)
