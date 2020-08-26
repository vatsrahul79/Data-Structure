## Good-Bad String

- Split input by space
- Create an empty array `res` and push the 1st element of the input array to res array.
- For every element of input (index i from 0 till input length-1(excluding)
- Create a variable `prev` which is the last element of res array
- Create a variable `next` which is (i+1)th element of the input array
  - If `next` is not equal to `prev` push `next` into res array.
- Print `res` array

