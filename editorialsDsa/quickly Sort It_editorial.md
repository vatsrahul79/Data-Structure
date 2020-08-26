## Quickly Sort It

- QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.

- The key process in quickSort is partition.

- we start from the leftmost element and keep track of the index of smaller (or equal to) elements as pivotIndex. While traversing, if we find a smaller element, we swap the current element with arr[pivotIndex]. Otherwise, we ignore the current element.
  //Pseudo code for recursive function

- Write `quickSort` function and passing` arr` `lo` as 0 and `hi` as last index

  - Check if `lo` less than `hi`
    - Declare `pIndex` = `partition` (arr,lo,hi)
    - Recursively call `quickSort`(arr,lo,pIndex-1)
    -  Recursively call `quickSort`(arr,lo,pIndex-1)

- return `arr`
  //Pseudo code for partition

-  function `partition`(arr,lo,hi)

  - Keep a varibale `pivot` and assign arr[hi]
  - Keep `pIndex` = `start`
  - for every element of array from `start` till `end`
    - if current element is less than pivot
      - swap arr[i] with arr[pIndex]
      - increment pIndex by 1
  - swap arr[hi] and arr[pIndex]
  - return `pIndex`

  ​
