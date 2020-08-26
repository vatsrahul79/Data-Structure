## Rotate by 90

Given a matrix of size N

If the matrix is rotated by 90 in anti clock wise direction

*For example,*

A 4 X 4 matrix will have 2 cycles.

 The first cycle is formed by its 1st row, last column, last row and 1st column.

 The second cycle is formed by 2nd row, second-last column, second-last row and 2nd column. 

1. There is N/2 squares or cycles in a matrix of side N. Process a square one at a time. Run a loop to traverse the matrix a cycle at a time, i.e loop from 0 to N/2 – 1, loop counter is *i*
2. So run a loop in each cycle from i to N – i – 1, loop counter is *j*
3. The elements in the current group is (i, j), (j, N-1-i), (N-1-i, N-1-j), (N-1-j, i), 
4. now rotate  these 4 elements,
5.  i.e the elements at   (j, N-1-i) => (i,j) ,   (N-1-i, N-1-j) =>(j, N-1-i) ,(N-1-j, i) =>(N-1-i, N-1-j) , (i,j) =>(N-1-j, i)
6. Print the matrix.