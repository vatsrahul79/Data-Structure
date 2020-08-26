## Mr Robot - Elliot

- Give a string S and n is length of the string.

- Write a function encryptIt passing leftIndex as 0 and rightIndex as n-1

  - Check if leftIndex = rightIndex

    - return S[leftIndex]

  - else

    - if leftIndex <= rightIndex

      - find mid = (leftIndex+rightIndex)/2
      - return S[mid]+recursively call encryptIt function passing leftIndex,mid as parameters+recursively call encryptIt function passing mid and rightIndex as parameters.

    - return  ""(empty string)

      ​