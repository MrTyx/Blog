---
title: COSC1285 Algorithms Week 1 Quiz
date: 2017-07-20 19:59:41
categories: Uni Notes
tags:
- COSC1285
---

Answers to the online Algorithms and Analysis quiz.

<!--more-->

Consider the following undirected graph.
![](/images/cosc1285/graph1_1.jpg)
The adjacency list representation of the above graph is partially filled in.  
- A -> B, C, D
- B -> A
- C -> ?
- D -> A

What is the adjacency list of vertex C?  If A, B, C, D are neighbours of C, then specify your answer as "A,B,C,D" in the answers.  Note, the list should be in ascending order.
**Answer: A, C**

---

Consider the following directed graph.
![](/images/cosc1285/graph1_2.jpg)
The adjacency matrix representation of the above graph is partially filled in.  What are the values for the 4 missing values?

|A|A|B|C|D|
|-|-|-|-|-|
|A|0|**v**|1|1|
|B|1|0|0|0|
|C|**x**|0|**y**|0|
|D|1|0|**z**|0|

**Answer: v = 0, x = 0, y = 1, z = 0**

---

Which of the following is not a dictionary?   The answers are specified as a collection of (key,value) pairs.
**Answer: [(a, 1), (c, 3), (e, 1), (a, 2), (b, 3)]**

---

Consider the queue of [a, b, a, c, d, e], where the leftmost element is the front of the queue, i.e., 'a', and the rightmost element is the back of the queue, i.e., 'e'.  After the following operations, dequeue, enqueue 'f', dequeue was executed on this queue, what is the updated queue?
**Answer: [a, c, d, e, f]**

---

Consider the stack of [a, b, a, c, d, e], where the leftmost element is the top of the stack, i.e., 'a' and the rightmost element is the bottom of the stack, i.e., 'e'.  After the following operations, pop, push f, pop was executed on this stack, what is the updated stack?
**Answer: [b, a, c, d, e]**

---

The main difference between (normal) queues and priority queues is that the latter considers priority.  When dequeuing, priority queues removes the element with the  ?  priority, while for normal queues, they remove the element at the front of the queue.  Select what ? should be.
**Answer: highest**

---

Which of the following collections are sequences?  If ordering is important in the collection, it will be labelled "ordered" after it, otherwise if ordering is not important, it will be labelled "unordered".  There can be 1 or more answers - you need to select all the correct answers.
- **[car, bar, rar, par] (ordered)**
- **[a, c, b, d] (ordered)**
