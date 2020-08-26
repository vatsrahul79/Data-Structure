## Units Consumed

- Given the  bill
- subtract fixed amount of Rs.80 from the bill
- Given 3 slab rates
- If the bill is less than or equal to 150 (i.e 50 units * 3 Rs per unit)
  - units consumed  will be bill/3
- else if the bill is greater than 150 and less than or equal to 650(i.e 100 units * 5 Rs per unit +  50 units * 3 Rs per unit)
  - units consumed will be 50Units+(bill-150)/5
- else
  - units will be 50 units+ 100 units +(bill-650)/10
- print units