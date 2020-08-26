## Negativity Recursion

- Given an array of integers and length of the array is n.
- Call the function `countNegative(arr,0)`
- Keep count = 0
- write the function definition `countNegative(arr,i)`
- //base case
  - if i == n
    - return count
  - else
    - if(arr[i]<0)
      - increment count by 1
    - return `countNegative(arr,i+1)` //recursive case