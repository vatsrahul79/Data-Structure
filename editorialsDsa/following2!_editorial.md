## Following 2!

You are given **N** integers, your task is to write a program that finds the integer present after 2 in the sequence of numbers given. In case 2 is not present or 2 is the last element, print -1.

1.Take a boolean variable with  initial value as false..

2.Run a loop and traverse through each element from first element to  last element(excluding last element).

3.Now check if current element is 2 if yes save next element which is following 2 into  varibale ans and change boolean to true and break the loop( no point checking further  because you found 2)

4.Now check if boolean is true print ans

5.Else print  -1.