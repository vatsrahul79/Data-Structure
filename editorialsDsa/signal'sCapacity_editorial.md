## Signal's Capacity

- Create an empty stack and initialise it with index 0
- Create an empty array named `res` to save the result
- Initialise `res` array with 1 (because for the first tower there will be no towers behind )
- For every element of the given array
  - While the stack not empty and the element of the array whose index is stack's top element is less than or equal to the current element of the array.
    - Pop element from the stack
  - If the stack is empty
    - Push  current index + 1 into `res` array
  - Else
    -  Push current index-stack top element into `res` array
  - Push the current index into the stack.

- Print `res` array