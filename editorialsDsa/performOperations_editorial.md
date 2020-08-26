## Perform Operations



Given n X m matrix and v1 and v2 are row operations and  v3 ,v4 are column operations.

we have two restrictions

- On any cell of the matrix, at most one operation can be performed. This operation can be of any type.
- Any type of operation can be used any number of times.

So on each cell at most one operation can be performed so we cannot perform on a particular cell both row and column operation.

So we have these possibilities for rows

1. Perform operation 1 on all rows and find F(x)
2. Perform operation 2 on all rows and find F(x)
3. You can perform these operations can be any number of times so it can be 0 also i.e. no operation.

Find the maximum of all the possibilities.

Repeat the same for columns as well 

Now the result will be maximum of row and column operations.
