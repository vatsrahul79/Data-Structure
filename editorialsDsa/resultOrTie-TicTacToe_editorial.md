## Result or Tie - Tic Tac Toe

You are given a 3*3 matrix (2-dimensional array) that represents the final situation of a Tic Tac Toe. 

- Split the input and make it as a 2D array.


- For every element in the array(from 0 to row size)
    - // Check for all rows
    - if the current row's all elements are equal.
        - return any of the three values (since all are equal)
    - // Check for all columns
    - else if the current column's all values are equal,
        - return any of the 3 values(since all equal)
- //check diagonal left to right
- If all diagonal left to right elements are equal,
  - return any one of the three values.
- //check diagonal right to left
- else if all diagonal right to left elements are equal,
  - return any one of the three values 
- else
  - return "Tie"
