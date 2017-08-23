---
title: COSC1285 Algorithms Week 4 Quiz
date: 2017-08-10 18:59:47
categories: Uni Notes
mathjax: true
tags:
- COSC1285
---

Answers to the online Algorithms and Analysis quiz.

<!--more-->

What is the worst case complexity for insertion sort, and in what scenario when is it achieved?  Assume we are sorting an array of size n. If there are two or more answers that could be possible, choose that is always guaranteed to result in the worst case.
  **O(n^2)**

Why can Shell Sort achieve O(n^1.5) worst case complexity?
  **Shell sort uses an interleaving strategy that progressively bring the array to near sortedness, such that when insertion sort is applied, it runs in linear time.**

Suppose you have the following sorted list [3, 5, 6, 8, 11, 12, 14, 15, 17, 18] and are using the recursive binary search algorithm. Which group of numbers correctly shows the sequence of comparisons used to find the key 8?  If the array/subarray has even length, there is two choices for the middle element.  In this case, choose the left one, i.e., a, b, c, d, then middle element is b.
  **11, 5, 6, 8**

Let us consider a digraph G(V, E) where V is the set of nodes and E is the set of edges. What is the complexity of Source Removal Algorithm in topological sorting for a digraph G(V,E) represented as a adjacency list?
  **O( |V| + |E| )**

Consider the following Binary Search Tree. If the node 10 is deleted, which of the following node will be the new the root?
  ![](/images/cosc1285/bst.jpg)
  **27**
