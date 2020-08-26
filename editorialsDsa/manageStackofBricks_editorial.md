## Manage stack of bricks

- Given N - number of stacks
- X - units of effort for putting up.
- Y - units of effort for removing it. 
- And the initial heights of the stacks and required heights of the stacks also given.
- Make two arrays `intialStack` with the given initial heights of the stacks and `reqStack` with the given required heights of the stacks.
- Note that Not necessarily each stack should be made from its corresponding stack.
- In order to minimize the effort the difference between the initial and required height of stack should be minimum.
- Sort both the arrays.(both can be in ascending order or descending order)
- Traverse through the array
  - Keep `diff` = `intialStack`[i]-`reqStack`[i]
  - Keep `sum `= 0 initially
  - if` diff` <0
    - `sum` += Math.abs(diff)*X
  - else
    - `sum` += `diff`*Y
- Print sum