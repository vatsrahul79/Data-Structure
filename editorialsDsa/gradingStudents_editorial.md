## Grading Students

- Given an array of grades.

- Create an empty array `res`

- For every element of grades array

- If the current grade is less than 38

  - Push current grade into `res` array.

- else 

  - If the current grade %5 is greater  than or equal to 3
    - Push ceil value of (current grade /5)*5 into `res` array.

  - else 
    - Push current grade into `res` array

