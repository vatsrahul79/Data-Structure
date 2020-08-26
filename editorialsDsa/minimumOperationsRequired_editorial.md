## Minimum operations required

- The problem statement is 

- In ONE operation, you can increase  **n-1** elements of the array by **1**. That is, except for one element of the array, you can increment all other integers by 1.

- Sample Input:

  ​	1
  
  ​	1 2 3

- Instead of incrementing n-1 elements by 1 (obviously, we will choose the smallest elements of the array )

  - In operation 1, you can increment 1st and 2nd element and array becomes [2,3,3]
  - In operation 2, you can increment 1st and 3rd element and array becomes [3,3,4]
  - In operation 3, you can increment 1st and 2nd element and array becomes [4,4,4]
    - Therefore, at least 3 operations are required at least

- We approach  it in another way

- we pick the maximum element in each operation and decrement it by 1

- ##### Intuitive approach:

  - In operation 1, you can decrement 3rd element and array becomes [1,2,2]
  - In operation 2, you can decrement 2nd element and array becomes [1,1,2]
  - In operation 3, you can decrement 3rd element and array becomes [1,1,1]
  - Therefore, at least 3 operations are required at least

- From the above comparisons, we can conclude the number of operations will not be affected either increasing n-1 elements by 1 or decreasing only maximum element by 1 up to the smallest one and smallest number wont change but remaingin numbers will decrement upto smallest one.

- No.of operations = (1st number-smallest number)+(2nd number-smallest number)

  ​				          +(3rd number -smallest number)+...

  ​			           = totalSum of array elements-size of array * smallest number.

  ​
