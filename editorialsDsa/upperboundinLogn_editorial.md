## Upperbound in Logn

- Given n, k and an array of n integer
- Split the input
- Keep lo = 0,hi = n-1 and ans = -1 initially
- while lo <=hi
  - if the mid element is greater than k
    - make ans = mid
    - hi = mid-1
  - else
    - lo = mid+1
  - return ans 

