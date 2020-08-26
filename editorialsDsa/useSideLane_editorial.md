## Use Side Lane

- Given an array of integers  `arr`and `n` is the length of the array.
- Keep a variable `stack` = [] 
- Keep a variable `k` = 1 and` i` = 0
- While `k` is less than or equal to `n`
  - Check if arr[i] is equal to k
    - increment i and k by 1
  - else
    - if stack is empty 
      - push arr[i] into the stack and increment i by 1
    - else if stack is not empty and stacks top element is less than arr[i]
      - return "no"
    - else
    -  push arr[i] into stack and increment i
  - while stack's  top element is equal to k and stack is not empty 
    - keep popping the stack and increment k
- return "yes"