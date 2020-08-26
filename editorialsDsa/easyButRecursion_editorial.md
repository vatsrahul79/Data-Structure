## Easy but recursion

- Given an array of integers and length of the array is n.
- Call the function findSum(arr,n-1)
- write the function definition
- findSum(arr,i)
- //base case
  - if i == 0
    - return arr[i]
  - else
    - return arr[i]+findSum(arr,i+1) //recursive case

