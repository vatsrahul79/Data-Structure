## Mr.Robot And Elliot

- Given String S
- Write a function encryptIt and pass  leftIndex as 0 and right Index as n-1(n is the length of the given string)
  - Check if leftIndex == rightIndex
    - return str[left]
  - else
    - if leftIndex less than or equal to rightIndex
      - Find midIndex = (leftIndex+rightIndex)/2
        - return str[mid]+recurisvely call encryptIt function with(leftIndex and midIndex-1 )+ recurisvely cal encryptIt function with (midIndex+1 and rightIndex )
    - return ""