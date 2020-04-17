---
title: 'C++ Vectors'
date: '2019-10-06'
description: 'My thought process on solving a Hacker Rank question on vectors'
tags: ['c++']
path: 'cpp-vectors'
published: true
---

This post serves as an outlet for my thought process on solving Hacker Rank's C++ language proficiency exercise "Variable Sized Arrays". I will separate this post into different sections which will be as follows:

- The question
- Drafting the answer (pseudocode)
- Writing the final answer

---

## The Question

We are provided `n` number of variable-length arrays with `q` number of queries. After the first two numbers (`n` and `q`) are a series of `n` lines of integers where the first number is the length of the proceeding integers. After `n` lines are `q` lines of two integers representing the queries we need to run on our dynamic array or vector. Provided all this data, return the integers asked of by the queries.

Provided example:

```
2 2
3 1 5 4
5 1 2 8 9 3
0 1
1 3
```

Here are the facts:

- There are 2 variable-length arrays
- There are 2 queries we need to answer for
- The first array is `[1, 5, 4]` with a length of 3
- The second array is `[1, 2, 8, 9, 3]` with a length of 5
- The first query is `[0, 1]`
- The second query is `[1, 3]`

What we really have is something like this:

```
[ [ 1, 5, 4 ], [ 1, 2, 8, 9, 3 ] ]
```

To answer a query, we utilize the above array where the first integer is the element (in this case which sub-array) to access and the second integer is the element we return within the sub-array:

- `[0, 1]` --> Position `0` in above array = `[1, 5, 4]` --> Position `1` within array = `5`
- `[1, 3]` --> Position `1` in above array = `[1, 2, 8, 9, 3]` --> Position `3` within array = `9`

The final answer would be:

```
5
9
```

---

## Draft Answer

```
int numberOfVariableLengthArrays, queries;

```

## Final Answer