

## Rotate Elements

A 4 X 4 matrix will have 2 cycles.

 The first cycle is formed by its 1st row, last column, last row and 1st column.

 The second cycle is formed by 2nd row, second-last column, second-last row and 2nd column. 

- There is N/2 rings or cycles in a matrix of side N. 
- One by one rotate all rings of elements, starting from the outermost. To rotate a ring, we need to do the following.

1) Move elements of the top row.

2) Move elements of the last column.

3) Move elements of the bottom row.

4) Move elements of the first column.



- N is the size of the matrix
- Keep variable right and bottom with N-1 as the initial value.
- Keep left and top with 0 as the initial value.
- for k = 0 till N/2
- Keep variable previous = matrix[top+1][i]
- //Move elements of top
- Loop through the first row. Put previous at the beginning of the row. Move elements to the right. Keep the last element of the first row in previous.
- // Move elements of the last column.
- Loop through the last column. Leaving the first row. Put previous as the first element. Move other elements to the bottom. Keep the last element of the last column in previous.
- //Move elements of the bottom row.
- Loop through last row right to left, leaving the last column. Put previous as the first element. Move all elements to the left. Keep the first element of the last row in previous.
- //Move elements of the first column
- Loop through first column bottom up. Put previous as the first element. Move all elements up except the topmost element which was covered earlier.