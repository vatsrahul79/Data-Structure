## Masai Sentence Reversal

- Split the given input by spaces and we will get an array `A`
- Declare `n = A.length`
- Declare an empty `stack` 
- For every element of array A(form i = 0 till n)
  - pop element from array A and push popped element into the stack
- Print stack.join(' ')	