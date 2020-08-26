## Masai Coding Competition

- Split the given input
- Create 5 empty arrays one as a master array and other for 4 clubs.
- Keep 4 flags (flag1,flag2...) initially as true.
- You have an array of clubs and roll number.
  - Check if the type of operation is E
    - If the club is 1 and flag is true 
      - push 1 into the master array and make flag as false
  - push  roll number into club 1 array
  - Repeat the same for the other 3 clubs.
  - else if the type of operation is D
    - check master array's 1 st element
      - remove 1st element and print club name and removed roll number.
- After a certain D operations
- If any of the club arrays is empty you have to shift it from the master array and make flag as true.