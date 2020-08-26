## Force of an Array

- Given line consists of A[0], A[1],n and MOD
- Remaining elements of the array A from index 2 till N-1  will be calculated using the given equation
- A[i] = (A[i - 1] + A[i - 2]) modulo MOD for 1 < i < N.
- Get the array from the above condition.
- To get the maximum force we should make the length of continuous blocks by reordering the array elements.(i.e how many times each integer is getting repeated )
- Create an empty object.
- Find the frequency of array elements.
- keep a variable sum with 0 initially.
- For each key in object
  - sum = sum+obj[key] ** 2
- Print sum. 

