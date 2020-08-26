## Count with Condition

- Given 
- n - length of the array .
- x - required sum
- A - array having n integers.
- Keep count = 0
- Write a function `countSubsets` and pass i = 0 and sum = 0 initially
  - if i == n
    - check sum == x
      - count++
  - return `count`
  - count = `countSubsets`(i+1sum+A[i])  //include A[i] to previous sum
  - count =` countSubsets`(i+1,sum) //not include A[i] to previous sum
  - return `count`.