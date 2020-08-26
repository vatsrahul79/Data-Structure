## GILFOYLE-DINESH

- Given N number of integers.

- A - array of N untits of time

- To get maximum amount of time we sort the array in descending order and keep adding two numbers and replace it with the result  and so on.

- Sort the array A in descending order

- Keep `sum` variable with A[0]

- Keep a `res` varibale with 0

- Traverse through the array(from i = 1 toll N)

  - `sum` = `sum` +arr[i]
  - `res` += `sum`

- print `res`

  ​

