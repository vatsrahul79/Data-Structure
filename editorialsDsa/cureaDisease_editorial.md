## Cure a disease

- Given two arrays one with vaccine strength say `S` and other with midichlorians count say `M`
- Sort both S and M arrays (so that we can evenly distribute the vaccine according to the midichlorians count )
- Run a loop from i = 0 till `n`(length of given array S)
  - If current vaccine strength (S[i]) is less than or equal to the count of the patient (M[i])
    - return "NO"
- return "YES"

