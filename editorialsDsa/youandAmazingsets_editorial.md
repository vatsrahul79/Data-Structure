## You and Amazing sets

- In a given array A, for an element at index curIndex A[curIndex]
- A[nextIndex] will be the first element greater than and lies to the right of it
- A[prevIndex]  will be the first element greater than and lies to the left of it.
-  Observe that for all subarrays starting from any index in the range [prevIndex+1, curIndex] and ending at index next, A[curIndex] is second maximum and A[nextIndex] is maximum. Which generate (currIndex-prevIndex) pairs in total with a difference of (nextIndex-curIndex)  maximum and second maximum
- we can better understand this by taking one example :
- 1 13 3  10 15 (0-indexing)
- consider current element  10 so, currIndex = 3
- prevIndex = 1
- nextIndex = 4
- Following two are possible subsets with a range from prevIndex+1 to next(because we want our curr to be second largest in subsets and also located left)
- 3 10 15 
- 10 15
- number of pairs = curIndex-prevIndex = 3-1 = 2 pairs
- difference of maximum and second maximum = nextIndex-curIndex = 4-3 = 1
- If we get next and previous greater element for every element in an array, and keep track of the maximum number of pairs possible for any difference (of maximum and second maximum). We will just need to add all these numbers (for each difference).

​				  


