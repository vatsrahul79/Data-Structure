## Array Of Zeroes

Given an array of integers
we have to check whether the given array can be converted into all zeroes by performing some operations.
- Pick two consecutive numbers and subtract 1 from both the numbers and it can be done any number of times.

- Let us understand this by an example :

  ```
  5
  10 11 3 5 3
  ```

- In this example pick 10 and 11 to make 1st element  to zero subtract 10 from both 10 and 11 now the array becomes

  ```0 1 3 5 3
  0 1 3 5 3
  ```

- Pick 1 and 3 and to make 2nd element zero subtract 1 from both elements

  ```0 0 2 5 3
  0 0 2 5 3
  ```

- Pick 2 and 5 and subtract 2 from both

  ```
  0 0 0 3 3
  ```

- Pick 3 and 3  and subtract 3 from both 

  ```
  0 0 0 0 0
  ```

- Now check the last element is it equal to zero 

  -  return "YES"

- else

  -  return "NO"

