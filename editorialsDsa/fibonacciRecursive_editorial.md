## Fibonacci Recursive

- In Fibonacci sequence the next number is found by adding up the two numbers before it:
- Fib(n) = Fib(n-1)+Fib(n-2)
- This is the sequence to understand better.
- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
- Given a number N
- Write Fibonacci function and pass N as an argument
  - Check if num ==0 (Base Case)
    - return 0
  - else check if N is 1(Base Case)
    - return 1
  - else 
    - return Fibonacci(N-1)+Fibonacci(N-2)