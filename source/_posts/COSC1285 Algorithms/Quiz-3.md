---
title: COSC1285 Algorithms Week 3 Quiz
date: 2017-08-03 18:59:47
categories: Uni Notes
mathjax: true
tags:
- COSC1285
---

Answers to the online Algorithms and Analysis quiz.

<!--more-->

![](/images/cosc1285/graphSearch.jpg)

Starting at vertex 1, what is the sequence of vertices visited in a breadth-first-search traversal of the graph?  Where there are multiple vertices to next traverse, select the vertex with the smallest label to visit next.  The answers are the format of x,y,z, if the traversal visits x, then y, then z.

**Answer: 1,2,6,4,5,3**

Same question but depth-first-search traversal

**Answer 1,2,4,3,5,6**

---

Using the exhaustive search approach, what is the maximum value achieved for the following knapsack problem:
Items, (weight, value): (3, 12), (5, 23), (1, 5), (6, 30), (4, 20), (6, 15)
Weight capacity of Knapsack = 7

**Answer: 35**

Using the exhaustive search approach, what is the maximum number of subsets evaluated for the following knapsack problem:
Items, (weight, value): (3, 12), (5, 23), (1, 5), (6, 30)
Weight capacity of Knapsack = 7

**Answer: 16**

---

Consider the array e, d, c, b, a, f, g.

Apply bubble sort on this array.  What is the array after the first three steps of bubble sort?   The answers are in the format of x,y,z, e.g., for the original array, this will be e,d,c,b,a,f,g.

**Answer: b,a,c,d,e,f,g**


Apply selection sort on this array.  What is the array after the first three steps of selection sort?   The answers are in the format of x,y,z, e.g., for the original array, this will be e,d,c,b,a,f,g.

**Answer: a,b,c,d,e,f,g**

---

What is the worst case complexity (in terms of the number of comparisons) for selection sort, sorting an array of n elements?

**Answer: O(n^2)**

What is the best case complexity (in terms of the number of comparisons) for selection sort, sorting an array of n elements?

**Answer: O(n^2)**

---

What is the worst case complexity (in terms of the number of comparisons) for early termination bubble sort, sorting an array of n elements?

**Answer: O(n^2)**
