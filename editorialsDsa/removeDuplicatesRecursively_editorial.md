## Remove Duplicates Recursively

- Given string `S`

- Declare variable `res` and call function `removeDupliacates `with `S` and `length of S `as  parameters

- Write a function `removeDuplicates` with` S` and `n` as parameters

- Split the string `S`  by space and make it as an array `arr`.

- Keep a variable `j = 0`

  //remove duplicates logic

- For every element of `arr` (from `i` = 1 till length of array)

  - If previous element of array is not equal to  current element
    - make arr[j] = previous element and increment j
  - else
    - while `i` is less than `arr length` and previous element ==  current element
      - increment i

- make arr[j] = arr[i-1]

- increment` j`

- Declare a varibale `resStr` = slice the `arr` till j and make it as string
  //recursively calling resStr tilll all duplicates are removed

- Check if `j` not equal to `n`

  - return `removeDuplicates(resStr,j)`

- return resStr

  ​	
