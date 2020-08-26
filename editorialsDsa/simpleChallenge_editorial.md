## Simple Challenge

Given an array 'A' consisting of 'n' integers, find the maximum value of the following expression:

|Ai - Aj| + |i - j|

where, 0<= i,j < n and Ai, Aj are the Array elements.

Expand the given expression by removing the absolute.

1. Ai-Aj + i – j = (Ai + i) – (Aj + j)
2. Ai – Aj- i + j = (Ai – i) – (Aj – j)
3. -Ai + Aj + i – j = -(Ai] – i) + (Aj – j)
4. -Ai + Aj – i + j = -(Ai + i) + (Aj + j)

If you  obseve it carefully 1 and 4 are identical 4 is just negation of 1  ,

Similarly 2 and 3 are identical .Hence 3 and 4 are redaundant.

Create an array called array1  which stores values of (Ai+i)

Find the difference between maximum and minimum values of array1 and save it in res1 variable.

Similarly,

Create an array called  array2 which stores values of (Ai-i)

Find the difference between maximum and minimum values of array2 and save it in res2 variable.

Now find Maximum values between res1 and res2 and print it.