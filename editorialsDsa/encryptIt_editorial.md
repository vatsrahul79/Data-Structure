

## Encrypt it

- Given a string S and encrypted key K.
- Create an array with all capital letters
- Create an array with all small letters
- Create an array with all numbers from 0-9
- Create an empty array res.
- For every character of S
  - If the current character of S exists in the capital array
    - find the index of the character in the capital array and add encrypt key K to it and find mod 26(because if K is greater than the length of the capital array it should come to initial position ) of it.
    - Push character of the capital array at the calculated index into res array.
  - else if the current character of S exists in the small letters array
    - find the index of the character in the small letters array and add encrypt key K to it and find mod 26(because if K is greater than the length of the small letters array it should come to initial position ) of it.
    - Push character of the small letters array at the calculated index into res array.
  - else if the current character of S exists in the number array
    - find the index of the character in the number array and add encrypt key K to it and find mod 10(because if K is greater than the length of the number array it should come to initial position ) of it.
    - Push character of the number array at the calculated index into res array.
  - else 
    - push that character into res array

- print res array