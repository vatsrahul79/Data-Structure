## Subarray Problem

- Split the given input 
- Create a variable countEven with initial value as 1.(it is initialised with 1 because  even a single even number can be counted as even sub-array)
- Create a variable countOdd with initial value as 0.
- Create a sum variable with initial value as 0.
- For every element in the given array
  - find the cumulative sum
    - if the sum is even
      - increment countEven 
    - else 
      - increment CountOdd
- Now to calculate sub-arrays with even sum we need to recollect a simple concept here :
- Even +Even = Even (between two even cumulative sums there is always one subarray with even sum exists)
- Odd +odd  = Even (between two odd cumulative sums there is always one subarray with even sum exists) 
- So, from the count of even sums, we need to choose 2 even sums that will be done in countEvenC2(nC2) ways.-
- Similarly from the count of odd sums, we need to choose 2 odd sums that will be done in nC2 ways i.e countOddC2.
- Now the number of even sum sub-arrays will be the sum of countEvenC2 and  countOddC2.