You are given an array of n rows and m columns which contains lower case English letters. How many times does the phrase "saba" appear horizontally, vertically, and diagonally in the grid?

- Split the given input 
- Create a count variable with initial value "0"
- For every element in the row 
  - For every element in the column'
    - //Check Horizontal
    - If the current column index is less than column size "m" - length of "saba" which is "4" 
      - check along the row if "saba " exists increment the count. 
    - //Check Vertical
    - If the current row index is less than row size "n" - length of "saba" which is "4"
      - check along the column if "saba " exists increment the count.
    - //Check Diagonal down
    - If the current row index is less than row size "n" - length of "saba" which is "4" and the current 	column index is less than column size "m" - length of "saba" which is "4"
      - check along the diagonal down  if "saba" exists increment the count .
    - //Check Diagonal up
    - If  the current column index is less than column size "m" - length of "saba" which is "4" and row index greater than or equal to "length of saba".
      - Check along the diagonal up if "saba" exists increment the count

- Print the count

​    

  

  