- ## Hostel & Warden

- Split the input by spaces

- Given `n` total number of students

- `s` - array of students position

- `r` - array of room positions

- sort both s and r in ascending order

- keep two variables `maxCount` and `count` with initial value as 0.

- traverse through the arrays

  - `count` = absolute difference of s[i] and r[i]
  - check if current count is greater than maxCount
    - update `maxCount` with `count`

- Print `maxCount`