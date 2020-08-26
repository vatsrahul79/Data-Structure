## Steal as much as you can

- Given n,v and w
  n - number of gems
  v - an array of value of gems
  w - an array of weights of gems
  c - maximum weight the car can carry.

- Find the value to weight ratio of all gems.

- Sort the values and weights array based on this calculated ratio(descending order)

- Keep two variables wtSoFar and valueSoFar as 0 initially.
- keep i = 0 and res = 0
- while wtSoFar<c and i <n
    - if wtSoFar<c 
        - wtSoFar + = w[i]
        - valueSoFar += v[i]
        - find the difference = c-weightSoFar
        - find fraction = Math.round(differnce * v[i]/w[i])
         - res = valueSoFar+fraction

  - Print res 
