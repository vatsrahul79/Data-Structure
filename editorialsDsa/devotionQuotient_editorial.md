## Devotion Quotient

- Create an empty array 
- Split given input by spaces and push into the array (it is a 2D array each element of the row is again an array consisting of student's name and his devotion quotient)
- Create a max variable and assign 1'st student's devotion quotient
- Create an ans variable and assign 1st student's name.
- For every element of the array(index i from 1 till the length of the array)
  - If max  is less than next element's devotion quotient 
    - update max and ans  with next devotion quotient and next student's name
- Print ans.

