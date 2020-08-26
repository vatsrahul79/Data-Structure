## What is a good string?

- Given String S and length of string is n
- Keep an iterator j = 0
- Keep an emptry array `res` to save the result.
- Traverse through the string
  - if  i != n-1 and j is even
    - check if S[i] != S[i+1]
    - push S[i] ino the `res` array
    - increment j by 1
  - else
    - push S[i] into the `res`  array
    - increment j by 1
- Check if length of `res` array is odd pop element from it
- print (n-`res`.length)
- convert `res` into string and print.