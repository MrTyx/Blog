---
title: COSC1285 Algorithms Week 2 Notes
date: 2017-07-27 16:47:09
mathjax: true
categories: Uni Notes
tags:
- COSC1285
---

Notes from lectures on Big O and Big Omega notation for grouping algorithms by orders of growth.

<!--more-->

### Common Equivalence Classes
Table of common usage is in textbook page 59 (pdf 87)

|Type|Big O|Example|
|-|-|-|
|Constant|$O(1)$|Access array element|
|Logarithmic|$O(\log{n})$|Binary search|
|Linear|$O(n)$|Link list search|
|Linearithmic (Supralinear)|$O(n\log{n})$|Merge sorting|
|Quadratic|$O(n^2)$|Selection sorting|
|Exponential|$O(2^n)$|Generating all subsets|
|Factorial|$O(n!)$|Generating all permutations|

---

### Upper and Lower Bound Examples
- $O$ Upper Bound. Equal or lower order of growth.
- $\Omega$ Lower Bound. Equal or higher order of growth

Explanation of these is in textbook page 52 (pdf 80)

Therefore the lecture examples;

|$t(n)$|$O(n)$|$O(n^2)$|$O(n^3)$|$\Omega{(n)}$|$\Omega{(n^2)}$|$\Omega{(n^3)}$|
|-|:-:|:-:|:-:|:-:|:-:|:-:|
|$\log_2{n}$|**T**|**T**|**T**|F|F|F|
|$10n+5$|**T**|**T**|**T**|**T**|F|F|
|$\frac{n(n-1)}{2}$|F|**T**|**T**|**T**|**T**|F|
|$(n+1)^3$|F|F|**T**|**T**|**T**|**T**|
|$2^n$|F|F|F|**T**|**T**|**T**|
