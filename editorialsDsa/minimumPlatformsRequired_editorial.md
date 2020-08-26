## Min Platforms Required

- Given the number of trains `n`
- `arrival` - an array of arrival times.
- `departure` - an array of departure times.
- Split the given times by ":" and convert them into numbers 
- Keep variables count `maxCount` and `next` as 1 initially
- Keep the variable `previous` as 0 .
-  While  next and previous should be less than n
  - check if next arrival time <= previous departure time
    - increment count and next by 1
  - else
    - decrement count by 1
    - increment previous by 1
  - check if count > maxCount
  - update maxCount = count
- print maxCount
