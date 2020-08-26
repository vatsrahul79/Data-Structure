- ## New Year Celebration

- Split given input by "\n"

- Create an empty array  `stack`

- Create an empty array `queue`

- For every element of `inputArr`

  - If type is 1
    - push x into `queue`

  - else if type is 2
    - push x into `stack`
  - else if type is 3
    - if `queue` length is 0 
      - print -1
    - else
      - print front element of `queue` 
  - else if type is 4
    - if `stack` is empty
      - print -1
    - else
      - print `stack` top element
  - else
    - remove front element from `queue`
    - print removed element
      	