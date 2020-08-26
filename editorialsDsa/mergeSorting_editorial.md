## Merge Sorting

- Given an unsorted array `arr` of length `n`.

- Write the recursive function 	`mergeSort` and pass the parameters start = 0 and end = n- 1.

  - if start < end
    - find mid = (start+end)/2
    - recrursively call `mergeSort(arr,start,mid)`
    - recursively call `mergeSort(arr,mid+1,end)`
    - `merge(arr,start,end)`
  - return `arr`

- //function to merge given two sorted arrays

- Write a function `merge` with parameters `start` and `end`

  - find `mid = (start+end)/2`
  - keep a temporary array `tempArr =[]`
  - Decalre and initialise variable `i = start, j= mid+1 and k = start`
  - while `i<=mid` and `j <= end`
    - if element of arr at i is less than element of arr at j 
      - push arr[i] into tempArr and increment k and i by 1
    - else
      - push arr[j] into `tempArr` and increment k and j by 1
  - while i <=mid
    - push arr[i] into `tempArr` and increment k and i by 1
  - while j <= end
    - push arr[j] into `tempArr` and increment k and j by 1
  - For every element of` tempArr`(from i = start till end)
    - make arr[i] = tempArr[i]

- return arr

  ​
