## Neelam's Journey

- Start with the first school with a cost of **C[1]**.
- Travel to the next school until a school **j** having cost less than the previous school (by which we are travelling, let’s say school **i**) is found.
- Calculate cost as **abs(j – i) \* C[i]** and add it to the total cost so far.
- Repeat the previous steps until all the school have been traversed.

