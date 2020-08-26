## Masai Average Recursion

- Given n integers and array A
- Declare a varibale `res` = `findAvg`(A,n)
- Write a function `findAvg` and pass A and n as arguments
  - check if n = 1
    - return A[0]
  - else
    - return  (`findAvg(arr,n-1)`*(n-1)+A[n-1])/n
- Print Math.ceil(`res`)