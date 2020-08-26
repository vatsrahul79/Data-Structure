## The Power Sum

- Given X and N
- Declare a `count` variable as 0
- Find the` range` = pow(X,1/N)
- call function `checkPower` and pass `X `and 0 as arguments.
- Write a function `checkPower` with arguments `x` and `k`
  - check if x is 0
    - increment the count by 1
  - for i from range till i >k 
    - find `diff` = x-pow(i,N)
    - if `diff` >=0
      - recursively call `checkPower` function with `diff` and `i` as arguments
  - return `count`

