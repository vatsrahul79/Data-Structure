## Detect Pallindrome

- Given 
- n - string length
- S- input string
- Write a function isPallindrome taking start = 0 and end = n-1 as parameters.
  - if start == end
    - return true
  - if S[start] != S[end]
    - return false
  - if start < end
    - return isPalindrome(start+1,end-1)
  - return true

