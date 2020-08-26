## Generate Permutations

- Given string `S` and length of the string is` n`

- split the given input by (" ") and join by ("")

- Write function `findPermutations` and pass `str` as a parameter

  - If the string length is 1 
    - return str
  - Declare a variable result = []
  - For every character of the string(i.e from  i =0 till string length)
    - currentChar = str[i]
    - and the remainingChar = str.slice(0,i)+str.slice(i+1)
  - var remaingCharPerm = recursively call `findPermutations` passing `remainingChar` as paramenter
  - for every character of `remainingCharPerm`(i.e from j = 0  till remainingCharPerm length)
    - push currentChar+" " + remainingCharPerm[j] into result array
  - return result

- Call `findPremutations` function passing given string `S`as parameter

  ​
