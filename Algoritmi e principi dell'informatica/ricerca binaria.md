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
		READ   3    #leggiamo l'elemento da cercare, memorizziamolo in M[3]
		LOAD   1    
		STORE  4    #M4 inizializzato con l'indirizzo del primo numero
		ADD    2
		SUB=   1
		STORE  5    #M5 è inizializzato con l'indirizzo dell'ultimo numero
LOOP:   LOAD   5    #Se M[5] precede M[4] abbiamo una porzione di sequenza vuota, 
					#quindi non esiste l'elementocercato
		SUB    4
		JLZ    NO
		LOAD   5
		ADD    4
		DIV=   2
		STORE  6   #M[6] contiene l'indirizzo dell'elemento centrale
		LOAD*  6
		SUB    3
		JZ     YES #Se M[3] = M[M[6]] l'elemento cercato esiste
		JGZ    FST #Se M[3] < M[M[6]] cerca nella prima metà
		JLZ    SND #Se M[3] > M[M[6]] cerca nella seconda metà
FST:    LOAD   6   
		SUB=   1
		STORE  5   #Memorizza M[6] - 1 in M[5]
	    JUMP   LOOP
SND:    LOAD   6
		ADD=   1
		STORE  4   #
		JUMP   LOOP
YES:    WRITE= 1
		HALT
NO:     WRITE= 0
		HALT
```
