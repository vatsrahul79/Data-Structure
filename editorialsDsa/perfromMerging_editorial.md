## Perfrom Merging

- Split given input by spaces we have two arrays array1 and array2  to merge.
- Initialize two iterators i and j with 0.
- Create a variable res with an empty string.
- While i less than the length of array1 and j less than the length of array2
  - If the element of array1 is less  than the element of array2
    - add array1 element to res
    - increment i
  - else
    - add array2 element to res
    - increment j
- If i is less than the length of array1 
  - Keep adding array1 elements to res
- If i is less than the length of array2
  - Keep adding array2 elements to res
- Print res.

