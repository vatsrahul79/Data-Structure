## Waiting Line

- Split the given input by "\n"
- create an empty array  `inputArr` and push each line into it.
- Create an empty array `queue`
- For every element of `inputArr`
  - If the current element's 1st index is "E"
    - Push current element's second index into the `queue`
  - else
    - if the `queue` length is zero
      - print -1 and 0
    - else
      - remove 1st element of the `queue`
      - print removed element and length of the `queue`.