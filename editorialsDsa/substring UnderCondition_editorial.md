## Substring Under Condition

- Given a string S
- Declare a variable count as 1 and n is string length-1
- Write function substring and pass n as an argument.
  - check if n less than zero
    -  return 0
  - else
    - Declare a variable firstHalf and call isSubstring recursively with n-1 as an argument
    - Declare secHalf as 0
    - for element from 0 till n(inluding)
      - check if string[n] is equal to current string
        - increment secHalf by 1
    - return firstHalf+secHalf

