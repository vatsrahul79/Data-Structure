## Count your Steps

- Given N

  //  Replace N with N/2 if n is divisible by 2

  // - Replace N with 2N/3 if n is divisible by 3

  // - Replace N with 4N/5 if n is divisible by 5

- Even though N is divisible by all 2 3 and 5 the first priority will be given to two because it reduces N by 2.

- Keep a count variable 0 initially.

- Write function passing N and count as parameters.

  - If N == 1
    - return count
  - else
    - check if N  2 == 0
      - call the functionrecursively with (N/2 ,count+1)
    - else if (N% 3 == 0)
      - call the functionrecursively with (2*N/3 ,count+1)
    - else if(N% 5 == 0)
      - call the functionrecursively with (4*N/5 ,count+1)