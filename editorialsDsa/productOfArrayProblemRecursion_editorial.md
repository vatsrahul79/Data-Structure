## Product Of Array Problem

- Given an array A of n integers.
- Declara `res` = `findProduct(A,n-1)`
- Write a function `findProduct`(A,n)
  - if n == 0
    - return A[0]
  - else
    - return `findProduct`(A,n-1) * A[n] 
- Print res

