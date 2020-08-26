## Check for Symmetry



- Create an empty array 
- Split given input split each row by spaces and push into the array
- Given the size of the matrix
- // Check Horizontal
- For every element of the array (index i from 0 till size )
  - For every element of the array(index j from 0 till size)
    - If ith row jth column element is not equal to (size-i-1)th row jth column element
      - return false
- return true
- // Check Vertical
- For every element of the array (index i from 0 till size )
  - For every element of the array(index j from 0 till size)
    - If jth row ith column element is not equal to jth row  (size-i-1)th column element
      - return false
- return true

