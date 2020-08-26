## Easy But Recursion

- Given an array of integers `arr` and the length of the array is `n`.
- Declare a variable  `res` and make a function call `findSum `  with arguments as` (n-1)` and `arr`
- Write a function `findSum` and pass `(m , arr)` as arguments
  - check if `m` < 0 
    - return 0
  - else 
    - return `arr[m]` + recursively call `findSum` with `(m-1,arr)` as parameteres .

