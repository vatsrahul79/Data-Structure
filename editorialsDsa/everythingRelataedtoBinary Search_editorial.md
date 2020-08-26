## Everything Relataed to Binary Search

- Given a sorted array `arr`,key

- N = Length of the given array

- //finding the first occurrence

- Find mid = (lo+hi)/2

- if element at mid index is greater than given key ignore the right half and narrow down to left half i.e make hi= mid-1

- else if element at mid index is less than given key ignore the left half and narrow down to right half i.e make lo= mid+1

- if mid element is equal to the given key 

  make ans =mid and still check to the left of it i.e hi = mid-1

  return ans

- //finding last occurence

- Keep lo = 1,hi =N-1 and ans = -1

- while lo<=hi

  - find mid
  - if mid element == key
    - ans =mid
    - lo = mid+1
  - else if mid element > key
    - hi = mid-1
  - else 
    - lo = mid+1
  - return ans

- //finding count

- if first occurence is -1

  - print -1 -1 0 

- else 

  - count = last occurece-firstoccurence+1
  - print last first occurence,last occurence,count

