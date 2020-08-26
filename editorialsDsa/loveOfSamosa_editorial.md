## Love of samosa

- Given  N shops and K units of money.
- Given array consists of the cost of samosa in each shop.
- Sort the cost of samosas in ascending order.
- Keep a count and sum variable with initial value as 0.
- Traverse through the price array 
  - keep adding price to the sum variable
  - check if sum <= k
    - increment count by 1.
  - else
    -  return count