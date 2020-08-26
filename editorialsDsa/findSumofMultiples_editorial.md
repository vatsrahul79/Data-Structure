## Find Sum of Multiples

- Given n , k and  y.
- Keep variable sum = 0
- Write a function `sumOfMultiples` and pass n k and y as arguments
  - if k becomes zero 
    - return sum
  - else
    - if (n*k)%y is zero
      - sum += n*k
    - return `sumOfMultiples`(n,k-1,y)

