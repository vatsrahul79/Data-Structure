## Simple Pattern Drawing

If we observe the pattern all even lines are filled with "#" and all odd lines consist of dots "." and in dots line all even dotted lines end with "#" and all odd dotted lines start with "#"

1. Given 2D array with n rows and m columns.
2. Declare an empty array to save result.
3. Declare a variable to count dotted lines.
4. Run a loop through the array (nested for loop to handle 2D array one iterator from 0 to n(rows), one iterator from 0 to m(columns)
5. check if the current row is even(0-indexing) fill all columns for that row with "#"
6. Else fill all the columns of that row with "."  check here if this dotted line is even make last column as "#" else make 1st column as "#"
7. At the end of each inner loop check if row is even increment dotted lines count.
8. Once all rows and columns are done print the result.

