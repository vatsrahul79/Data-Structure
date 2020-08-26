## a and b only

- Given string S
- Traverse through the given string
  - If current letter = "?"
    -  check if the current index is 0
      - ​    if the next letter is "a", 
        - make the current character as "b"
      - else
        -  make the current character as "a".
  - else 
    - If both next and previous letters are "a" 
      - make the current letter as "b"
    - else
    -  make current letter as "a".