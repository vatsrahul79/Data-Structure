## The Staircase Problem Returns

- Given the number of steps as `n` and an array `x` 

- Declare a variable `jumps` to keep track of the number of jumps with initial value 0

- Declare a variable `minReq` to keep track of minimum jumps with initial value as n.

- Keep a `res` variable and call `findJumps` function with `jumps` and `initial index` as 0

- Print `res`

  //Creating findJumps function

- Write a function `findJumps` with `jumps `and `i` as arguments

  - check if i ==n
    - if jumps <= minReq
      - update minReq with jumps
  - else if jumps > n i.e, number of steps
    - return -1
  - else 
    - if  i+x[i]  lies between 0 and n 
      - recursively call `findJumps (jumps+1 ,i+x[i])`
    - recursively call `findJumps(jumps+1,i+1)`	
  - return minReq