##Masai Palindromic Substring



You are provided a string **S**. Write a programme that returns the length of the longest **palindromic** [substring](https://www.hackerrank.com/external_redirect?to=https://en.wikipedia.org/wiki/Substring) of that string.

-  For the given string find all possible substrings.
-  write a function to check palindrome and pass all substrings and keep track of longest palindrome

- To check palindrome. 
- Keep an iterator from 0 to mid of the given string length.
  - . Check equality of 1st and last element, 2nd and last but one and so on. If there is even one instance is false that particular string is not palindrome
    - return false
-  return that particular palindromic string 
>>>>>>> db2743115ef36b9eb5064c0f2fa580e5d81b5241
