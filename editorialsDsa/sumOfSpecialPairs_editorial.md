## Sum of Special Pairs

- Split input by spaces and save it as arr

- Create res variable with initial value as 0

- Run a loop with iterator i from  0 till array length

  - Run a loop with iterator j from 0 till the length of array
    - Check if j is greater than i and j-i is prime 
      - if true keep adding arr[j]-arr[i] to res variable.

- Print res.

  ​

// Finding prime number or not

A Prime number is a number that is divisible only by itself and 1.(it should have only two positive factors)

Let us take an example:
n = 7

- Check if n is 1 
  - return false
- Start checking from 2 to till n
- Is 7% 2 is 0 ? no ,now check 3 is 7%3 is 0? no continue this till 6 
- If you don't find any factors other than two 
  -  return true
-  else 
  - return false.
