---
title: COSC1285 Algorithms Week 2 Quiz
date: 2017-07-27 18:59:47
categories: Uni Notes
mathjax: true
tags:
- COSC1285
---

Answers to the online Algorithms and Analysis quiz.

<!--more-->

What is the average case, and why is it considered difficult to analyse?

**Average case is the average across all possible inputs.  Generally, the number of possible inputs is extremely large, making it difficult to consider all possibilities.**

---

What is the input size and basic operation of the following algorithm?
```
Input: Array A[0,1,...,n-1] (array of size n)
Output: s = A[0] * A[1] * ... A[n-1] (multiplication of all the elements)
1: Set s = 1
2: for i = 0 to n-1 do
3:    s = s * A[i]
4: end for
5: return s
```

**Answer: n and multiplication**

---

Consider the following pseudo code for an algorithm.
What is C(n), the number of times the basic operation of addition is computed in the above algorithm?
```
for i = 1 to n do
  for j = 1 to n do
    X = X + 1
  end for
end for
```

**Answer** ![](/images/cosc1285/sum2_1.gif)

---

Given $t(n) = 3n^3$, which of the following functions g(n) satisfy $t(n) ∈ Θ(g(n))$?  Select one or more answers.

**Answer: $g(n) = n^3$**

---

Given $t(n) = 3n^3$, which of the following functions g(n) satisfy $t(n) ∈ Ω(g(n))$?  Select one or more answers.

**Answer**
- $g(n) = log(n)$
- $g(n) = n$
- $g(n) = n^2$
- $g(n) = n^3$
- $g(n) = e^n$
- $g(n) = n!$

---

Which of the following functions are considered to be in $Ω(log(n))$?  i.e., for each function t(n), determine if $t(n) ∈ Ω(log(n))$.  Select one or more answers.

**Answer**
- $t(n) = log(n)$
- $t(n) = n$
- $t(n) = n^2$
- $t(n) = n^3$
- $t(n) = e^n$
- $t(n) = n!$

---

Which of the following functions are considered to be in $Θ(n^2)$?  i.e., for each function t(n), determine if $t(n) ∈ Θ(n^2)$.  Select one or more answers.

**Answer: $n^2$**

---

For the following algorithm, in the worst case, how many times is the basic operation of equality (==) executed on an array of size n?
```
Input: array A[0,1,...,n-1] (of size n), search key K
Output: a list of indices of A whose corresponding elements match key K.
        If no matches, empty set is returned.
1: i = 0
2: found = list()
3: while i < n do
4:    if (A[i] == K) then
5:       found.append(i)
6:    end if
7:    i += 1
4: end while
5: return found
```

**Answer: n**
