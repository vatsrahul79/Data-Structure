## Chintu Candy Game

- Given an integer, x
- Create a variable called `num` and assign value x to it.
- Create a variable total cashback  with an initial value 0.
- If  `num` is less than 10 
  - no cash back so print `num`
- else 
  - while `num` is greater than 9
    - create `cashback` = floor value of (`num`/10)
    - keep adding cashback  to total cashback
    - update `num`  = (`num`%10)+total cashback
  - print X+total cashback