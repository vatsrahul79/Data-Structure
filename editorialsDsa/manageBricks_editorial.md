## Manage Bricks

- Given n bricks  and array consists width of n bricks.
- Sort the array in ascending order so that the bricks will be arranged by picking the smaller widths first.
- Keep a variable `lastWidth` = arr[0] ( smaller brick width),layerCount = 1
- Make currWidth & temp variable as 0  and countTemp = 0
- Run a loop through the widths array
  - add arr[i] to current width
  - increment temp by 1
  - check if `currWidth > last Width and temp > countTemp`
    - increment layerCount by 1
    - update `countTemp` with `temp`
    - update  `lastWidth` with `currWidth`
    - reset `temp` and `currWidth` to 0.


- Print layerCount