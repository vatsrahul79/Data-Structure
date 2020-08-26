## Addition, Subtraction and its Cost

- Given n - length of the array
- k - required equal elements
- Keep an empty  `costArr` 
- Keep an empty `minCost` array 
- Run a loop over the array (i = 0 till n)
  - Run a loop the array( j = 0 till n)	
    - if  arrr[j] is <= arr[i]
      - push (arr[i]-arr[j])*5(i.e, cost to decrement) into costArr
    - else
      - push  (arr[j]-arr[i])*3(i.e, cost to increment) into costArr
  - Sort the costArr in ascending order
- sum  up first k elements of costArr and push into minCost array
- Print minimum of minCost array