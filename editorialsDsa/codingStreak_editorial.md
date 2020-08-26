## Coding Streak

- Given N days and each line contains a string
  we have to calculate each day's longest coding streak (i.e continuous C's) and longest coding streak of all days together.
- Create one variable called overallDays with an empty string.
- For every line of input 
  -  Call Finding longest Coding streak  function and find longest streak of that day
  - Add each string to overallDays
- Call Finding longest Coding streak  function and pass overallDays as argument save the returnred resulit into a variable
- Print result.



- // Finding longest coding streak
- Create a variable maxCount with initial value as 0.
- Create a variable count with initial value as 1.
- For every character of the given string
  - check if the current character is "C and  the next character is also "C"
    - increment count
  - else
    - check if the count is greater than maxCount
      - update maxCount with count
    - reset count to 1
- return maxCount


