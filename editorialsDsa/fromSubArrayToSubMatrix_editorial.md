## From Subarray to Submatrix



- Given N,M,K
- Create a 2D array 'mat' from the given input of N rows and M columns
- For each add operation get values of R-1,C-1,S,D(1 is subtracted from R and C 0-indexing)
- Run a loop from index i equal to R till (R+S)(number of rows of sub matrix)
  - Run a loop from index j equal to C till (C+S)(number of Columns of sub matrix)
    - Add "D" to each element of the submatrix.
- return mat