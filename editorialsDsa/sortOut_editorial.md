## sort Out !

- Split given input by spaces
- Create an array to save the indices.


- For every element of the array (iterator i is from 0 to length of array-1)
  - For every element of the array (iterator j is from i+1 to array length-1-i)(since in each iteration the biggest element will be moved to the end of the array hence  that index can be excluded.)
    - if the element at jth index is greater than the element at (j+1)th index 
    - swap both the elements 
    - and swap indices aacording to the elements.
- Print index array.

