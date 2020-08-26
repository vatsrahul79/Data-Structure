## Minlength , Substring,Distinct

- Give string S
  //function to remove duplicates

- write a function `removeDuplicates` and pass S as parameter

  - Keep an object obj = {}
  - traverse through the array
    - obj[S[i]] = S[i]

- return the uniq string length

  //function to find substring of minimum length

- Keep minSoFar = Max integer(say 99999999)

- Write function minLength and pass(S ,i ,j,n) as parameters i = 0 j = 0 and n = S.length initially.

  - if i == n 
    - return minSoFar
  - if i < n && j <=n
    - return minLength(S,i+1,j+1,n)
  - else
    - Keep varibale subStr = S.substring(i,j+1)
    - remove duplicates from the subStr and check after removing all the duplicates if its length  = distinctcharcters length
    - save the minimum length of all such substrings.
  - return minLength(S,i,j+1,n)