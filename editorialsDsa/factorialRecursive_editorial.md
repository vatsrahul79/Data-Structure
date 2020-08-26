### Factorial Recursive

- Given number N
- Factorial for n is calculated as 
- n! = n*(n-1)*(n-2).......1
- n! = n * n-1! i.e,factorial(n) = n* * factorial(n-1)
- write a function as factorial and pass n as argument
  - check if n == 0(base Case 0!=1)
    - return 1
  - else
    - return n*factorial(n-1)