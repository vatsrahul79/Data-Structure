## Such Pair Returns

- Given N , K and array of N integers.
- We have to find the given sum K presents in the array or not.
- sort the array
- Run a loop over the array
  - Now the target that we have to search in the array is 
  - target = k -arr[i]
  - pass target and array as arguments to the function search(arr,target)
  - if the function returns true
    - break
- if true 
  - print 1
- else
  - Print -1
- //function to search the target
- keep lo = 0,hi = n-1
- while lo <=hi
  - find mid = (lo+hi)/2
  - if mid element is equal to target
    - return true
  - else if mid element is greater than target
    - hi = mid-1//search in left half
  - else
    - lo = mid+1 // search in right half 
- return false