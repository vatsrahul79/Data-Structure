## Masai number game

- Given an array A and length of the array is N
- // Finding next greater element
- Create an empty stack and the initial value is n-1
- Create a result array and make its n-1 index as -1
- Traverse through each element of the array from N-2 to 0
  - while the stack is not empty and the element of the array at stack's top index is less than or equal array's current element
    - Keep popping the stack
  - Check if stack empty
    - push -1 into the result array
  - else
    -  push stack top element into the result array.
  - push the current index into the stack.
- //to find the next smaller element of array elements
- Same as above but you have to check while the stack is not empty and the element of the array at stack's top index is greater than or equal to array's current element
- //finding next smaller element of next greater element
- Now you have next greater elements array  indexes and next smaller elements array indexes
- Create an empty output array.
- For i from 0 till the length of the given array.
  - Check if the next greater element is not -1 and next smaller of next greater element is also not -1 
    - push next smaller of next greater element into the output array
  - else
    -  push -1
- Print output array.


