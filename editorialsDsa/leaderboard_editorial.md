## Leaderboard

- Split given input by "/n"
- Run a loop over input and split each element by spaces and convert second element(which is marks obtained) of each element to number.
- Sort the array by name ascending order , again sort the array by marks  in descending order(highest marks come 1st)
- // ranks assignment
- make 1st person's rank as 1
- Run a loop from index 1.
  - check if current students' marks are equal to previous person's rank
    -  make his rank as previous rank
  - else ,
    - his rank will be his index+1
  - Print student's name along with his marks.
