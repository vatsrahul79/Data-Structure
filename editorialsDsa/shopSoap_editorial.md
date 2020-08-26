## Shop Soap

- Given 
- N = Number of soaps
- A = Array of Price of  N soaps
- Each query contains  M 
- Sort the array A
- Keep `lo` = 0 ,`hi` = N-1
- while `lo` <= `hi`
  - find `mid` = (lo+hi)/2
  - if `mid` element is less than M
    - move to right and discard the left 
    - i.e lo = mid+1
  - else
    - hi = mid-1
  - return `lo`

Print `lo` as answer