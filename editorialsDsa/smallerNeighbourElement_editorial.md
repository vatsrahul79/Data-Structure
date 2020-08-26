

## Smaller Neighbour Element

- Given an array of elements
- Create two empty arrays stack and res.
- For every element of the input array
  - while the stack is not empty and the top element of the stack is greater than or equal to the current element of the input.
    - keep poping the stack
  - if the stack is  empty 
    - push -1 into res array
  - else
    -  push stack top element into res array.
  - push the  current element of the array into the stack.
