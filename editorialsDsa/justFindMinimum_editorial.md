## Just Find Minimum

- Split the given input 

- Keep a variable stack =[]

- Delcare a variable minSoFar  = 0

- For every element of input

  - Check if the type is PUSH	
    - if stack is empty
      -  push  [value,value] into the stack
    - else
      - minSoFar = Math.min(stack's top element,current value)
      - push [value,minSoFar] into the stack
    - else if type is POP
      - if stack is empty
        - print "EMPTY
      - else
        - pop the element from the stack
    - else
      - if stack is empty 
        - print "EMPTY"
      - else 
        - print stack's top element's second value.(which is minimum so far)

   	