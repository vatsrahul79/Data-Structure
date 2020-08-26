## String & Matrix

- Create an empty array named `mat`
- Split each row by space and push it into the `mat` array.
- Given string S.
- keep two iterators i and j with initial value as zero.
- While j less than the string length
  - Find jth element of S exists in ith row of `mat`
  - If does not exists 
    - return "No"
  - If exists
    -  splice that element from the row
    - increment i and j
    - if row index reached N reset it to 1st row (because you need to pick in a cyclic manner)
- return "Yes"