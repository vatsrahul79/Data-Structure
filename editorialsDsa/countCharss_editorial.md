## Count Chars

You are provided a string **S**. Your task is to print a string that also contains the number of times that character is repeated. 

1.  Keep a `count` variable to keep the count of repeated characters. with initial value as 1.
2. Run a loop from index 0 till the end of the string.
3. Now check if the current character is equal to the next character of string if yes increment the count else keep on adding the current character and count into the res variable, and reset the count to 1.
4. print the result saved in the `res` variable.