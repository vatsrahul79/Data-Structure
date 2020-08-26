## Matrix & Rotations

- Given `n` number of rows
- split all rows by space and join them (so that they become a string)
-  Take any one of the given rows to find all circular rotations.
  i.e Make a reference string 
  
  `str` = row1+row1 // 
  For example 12 3 +  123 =>123123
  
  if we take out the substrings from the above reference string of given row length the possible circular rotations are:
  
  123
  
  231
  
  312
- Keep a count = 0
- For every row in the given input (from i = 0 till n)
  - For j = 0 till n(inclusive)
    - find the substrings from the reference string
    - substring = `str`.substring(j,j+n)
    - if the row in the given input is same the `substring`
      - increment count by 1
      - break
- if count ==n
  - print "Yes"
- else
  - Print "No"