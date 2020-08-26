

## ProductOfArrayProblemRecursion

- Given an array of integers and length of the array is n.
- Call the function `findProduct`(arr,n-1)
- write the function definition
- `findProduct`(arr,i)
- //base case
  - if i == 0
    - return arr[i]
  - else
    - return arr[i]*`findProduct(arr,i+1)` //recursive case
