## Perform swapping and sorting

- Given n and array of integers a.
- We first pick the smallest element from array a[1], a[2], a[3]…(a[k] or a[n]) [We consider a[k] when k is smaller, else n].
-  We place the smallest element to the a[0] position after shifting all these elements by 1 position right. We subtract the number of swaps (number of swaps is the number of shifts minus 1) from k.
-  If still we are left with k > 0 then we apply the same procedure from the very next starting position i.e., a[2], a[3]…(a[k] or a[n]) and then place it to the a[1] position.
-  So we keep applying the same process until k becomes 0.

