## Selection Sort Problem

- Split input by spaces
- For every element of  the array ( taking i as an index from 0 till the length of the array)
  - create min variable and assign i as its value
  - For every element of the array (index j from ( i+1) till the length of the array)
  - compare if the element at jth index is less than the element at min index
    - if yes, make min equal to j
  - swap the elements at the min and ith indices
- Print array