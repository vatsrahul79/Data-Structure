## Compete with Neighbour

You are provided an array **A** which has **N** elements. Your task is to find the count of such occurrence where the element is larger than its neighbour.

1. If you find the given array carefully there are two exception which are first and last element in the array both have only one neightbour element let's handle this separatley.
2. keep a counter to keep track of occurance of element which is greaterthan its neighbour.
3. write a condition for first element if 1 st element is greaterthan next(i.e right to it) element increment the counter ,similarly  if last element is greater than its left neightbour increment the counter.
4. Else all other cases need to check whether the current element is greather than left and right neighbours if yes then increment the counter.
5. print the counter value.