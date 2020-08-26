## Interpret Symbols

- Given integer N and M series of symbols.
- For every symbol of M
  - If the current symbol is @
    - update N by N*10
  - else if the current symbol is "!"
    - update N by N+2
  - else if the current symbol is "%"
    - update N by N-5
  - else if the current symbol is "^"
    - update N by N**2
  - else
    - update N by N+37
- print N
