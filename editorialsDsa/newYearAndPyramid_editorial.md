## New Year and Pyramid

From the problem statement

If 1 level pyramid requiredStones = 1

If  2 level pyramid requiredStones = 1+3=4

​	1st level =>1

​	2nd level=>1+2=3

If it is n level pyramid requiredStones

​	1st level =>1

​	2nd level=>1+2=3

​	3rd level =>1+2+3=6 

​	n th level =>n*(n+1)/2

1.Declare a `requiredStones` variable with initial value "0", it is to calculate the  sum of stones required for each level.
2.Declare a variable called `level` initial value as 1.

3.Run a while  loop till requiredStones less than or equal to the given number of stones "n" keep adding requiredStones +=level*(level+1)/2 for each level and after every iteration  increment level.

4.If requiredStones greater than given stones print the previous level.
