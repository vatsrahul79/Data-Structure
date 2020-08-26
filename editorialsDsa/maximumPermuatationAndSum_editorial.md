## Maximum Permuatation and Sum

- Given `n`  and array of integers
- To get the maximum product as the index is increasing the values in the array also should be sorted so that higher indexes will get higher values.
- Sort the array in ascending order.
- Keep a sum variable = 0
- Run a loop over the array 
  - keep adding the product arr[i]*i to the sum
- Print sum 