## My Love for dogs

- Given

- n - Number of dogs

- S - an array of the original strength of  dogs

- C - Calorie value of food packets.

- To get maximum final strength The packet with maximum calorie value should be given to the dog having maximum original strength.(becuase final strength = c*s)

- Sort S and C  in descending order.

- Keep a  variable sum initially as 0.

- Traverse through the array(i = 0 till n)

  - sum += C[i]*S[i]

- Print sum

  ​