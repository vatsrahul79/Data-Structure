

## String Cut

- You are given a string **S**. Cut it into 2 equal halves and reverse it.
- Split the given string .
- Find the middle index of the given string.
- Create an empty array named "res" to store the result.
- For every element  in the string(till mid)
  - if the length of the given string is even
    - reverse the 1tshalf of given string (0 to mid)
    - reverse the second half of given string(mid to end of the string)
    - add it to the res arr
  - else
    - reverse the first half given string (from 0 to mid)
    - reverse the second half (from mid+1 to end of the string)
    - and the mid element of res array is same as mid element of given string.
    - add it to the res array

return res array.
