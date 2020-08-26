## Strings & Rotations

Given string1 and string2

- Check if the length of both strings are not equal 


- return No


- else

  - For every element of string2

    - Keep a flag as true.

    - //Generating all possible rotations of string 2

    - Create a temp varibale with 1st character of string2

    - For every element of string2(index from 0 till n-1

      - make the current character of string 2 to the next character of the string 2.

    - make the last character as the temp.

    - Compare each character of string2 with string1

      - If it does not match
        - Make the flag as false.


      - Check if the flag is true 
        - return Yes	

- return No