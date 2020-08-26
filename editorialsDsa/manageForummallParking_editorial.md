## Manage Forum mall Parking

- Given the number of slots n, arrival and departure time of vehicles.
- Create requiredSlots variable with initial value as 1.
- Run a loop from 0 till arrival array length -1
  - Check if the departure time of the present vehicle is greater than the next vehicle's arrival time 
    - if true increment requiredSlots.
- If requiredSlots are greater than given slots
  -  print not possible
- else 
  - print possible.
