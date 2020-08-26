## Minimize number of coins

- Given a value V and take the given denominations in an array as `coins` in descending order.(sorted in descending order to get the minimum number of coins/notes)
- Keep a count variable 0 initially
- Run a loop over coins array
  - make count = floor value of V/current denomination i.e Math.floor(V/coins[i])
  - update V = V%coins[i]
- Print count