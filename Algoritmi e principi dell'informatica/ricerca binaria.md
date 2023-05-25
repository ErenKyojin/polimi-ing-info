---
aliases: binary search
creation date: 2023-05-25 11:55
modification date: 2023-05-25 11:55
---

#### Precondizioni
Questo algoritmo assume che i numeri siano in sequenza già ordinata, inoltre oltre a questa sequenza di numeri in ingresso (che si considera immediatamente caricata in memoria) va anche fornito un numero da cercare.

#### Postcondizioni
L'algoritmo restituisce 1 se l'elemento cercato esiste nella sequenza, 0 altrimenti


`M[1]` è la cella che contiene l'indirizzo del primo numero della sequenza
`M[2]` è la cella che contiene il numero di elementi della sequenza


```
		READ  3
		LOAD  1
		STORE 4
		ADD   2
		SUB=  1
		STORE 5
LOOP:   LOAD  5
		SUB   4
		JLZ   NO
		LOAD  5
		ADD   4
		DIV=  2
		STORE 6
		LOAD* 6
		SUB   3
		
```