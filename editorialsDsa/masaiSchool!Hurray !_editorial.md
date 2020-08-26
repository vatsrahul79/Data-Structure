# Masai School ! Hurray !

From the given problem statement the following are the strings we need to print which statisfies the condition:

1. Print "Masai" (without quotes) if the integer is a multiple of 7
2. Print "School" (without quotes) if the integer is a multiple of 5
3. Print "Masai School" (without quotes) if the integer is a multilpe of 35
4. Else in all other cases print "Hurray!" (without quotes)

##### here the tricky part is the condition-3  which is multiple of 35  is nothing but multiple of 7 and 5 .so here we need to check  the third condition first otherwise the number which is multple of 35 is also satifies the condition multiple of 7 and multiple of 5 .

To get clear understanding take 35 as an example according to problem statement the expected output is "Masai School"

If you check conditon -1 : Is 35 multiple of 7 ? yes it is true and we get output as "Masai"  and it won't check all other conditons and we get "Masai" instead of "Masai School".

If you check conditon-2 : Is 35 multiple of 5 ? yes it is true and we get output as "School" and it won't check all other conditons and we get "School" instead of "Masai School".

If you check conditon-3 : Is 35 multiple of 35(which is multiple of 7 and 5) ? yes it is true and we get output as "Masai School" which is expected.

for all other conditons "Hurray!" gets Printed.

