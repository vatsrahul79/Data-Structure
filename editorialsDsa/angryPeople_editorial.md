## Angry People

- Given Array A, Length of array n
- To keep the danger value minimum sort the array A in descending order.i.e, Put closest elements beside each other to minimize..So you need two side element one left and other at right..So u need to count difference (of danger values) between i and i+2 th elements.to get the highest possible danger value for the ith element.
- Keep a diffArr = []
- Run a loop over array A(till n-2)
  - diff =A[i]-A[i+2]
  - Push diff into diffArr
- Print Max value of diffArr.


