## How much is the Earning?

- Given the length of array N and rupees R

- Split given string by spaces.

- Create an empty array res and push the 1st element of the input array to res array.

- Create a count variable with initial value as 1

- For every element of input array(index i from 0 till input length-1(excluding)

- Create a variable prev which is the last element of res array

- Create a variable next which is (i+1)th element of the input array

- - If next is greater than prev 
    - increment count
    - push next into res array.

- Print count*R.

