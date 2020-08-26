

## New sorting algorithm

- Split given input by spaces


- For every element of the array (iterator i is from 0 to length of array-1)
  - For every element of the array (iterator j is from i+1 to array length-1-i)(since in each iteration the biggest element will be moved to the end of the array hence  that index can be excluded.)
    - if the element at jth index % k is greater than the element at (j+1)th index % k swap both the elements.
- Print array

