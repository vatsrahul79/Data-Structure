------

### Longest Repeated Odd:

You are given an array **A** of **N** integers. Your task is to find the maximum number of times an **odd** number is continuously repeated in the array.

1.Check current number is odd or not .

2.Initialize a  variable counter with 1.(1because the currentvalue  to be counted)

3.If current number is even ignore.

4.If current number is odd and the value  is equal to next number  increment the counter.

5.If the value  is not equal to next number you should stop counting it store that sequence length and reset counter to 1.

6.At the same time you need to update  the longest sequence i.e,if current sequence is longer than previous keep current else do nothing.



