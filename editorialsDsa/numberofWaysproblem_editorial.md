## Number of Ways problem



- There are N steps given the number of steps one can jump at a time is 1 or 2 or 3 
  For example, 
  If N = 1 there is only 1 way
  N = 2 there are two ways i.e 1+1 or 2
  N= 3 there are 4 ways i.e 1+1+1+1 or 1+2 or 2+1 or 3
- Write a function find ways and pass N as an argument
  - Check if N is 1
    - return 1
  - else if N is 2
    - return 2
  - else if N is 3 
    - return 4
  - else 
    - return findWays(N-1)+findWays(N-2)+findWays(N-3)