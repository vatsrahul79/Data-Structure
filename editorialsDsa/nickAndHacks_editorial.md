## Nick and Hacks

- Given N rupees
- Declare a variable balance with 1
- Declare a variable res = findN(balance,N)
- if(res)
  - print "Yes"
- else
  - print "No"
- Write a function findN with balance and N as arguments
  - check if balance is N 
    - return true
  - else if balance > N
    - return false
  - else 
    - recursively call find(balance*10,N) or recursively call findN(balance*20,N)