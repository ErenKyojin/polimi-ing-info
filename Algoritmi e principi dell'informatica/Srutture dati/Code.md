---
aliases: coda, queue
creation date: 2023-05-09 12:52
modification date: 2023-05-09 12:52
---

Le code sono simili alle [[pila|pile]], salvo che una coda è gestita con una politica FIFO (First in first out), è una [[Strutture dati|struttura dati]] sulla quale si possono fare le seguenti operazioni:
- Controllare se è vuota
- Inserire un elemento nella collezione (ENDQUEUE)
- Cancellare un elemento della collezione (DEQUEUE)
	- Si noti che l'operazione di DEQUEUE restituisce l'elemento cancellato

Una coda è gestita con una politica FIFO, l'elemento che viene cancellato è quello che era stato inserito per primo. 
Inoltre una coda è circolare,

### Implementazione tramite liste semplici
Provare a farlo con un unico puntatore di partenza diventa inutilmente complicato, dobbiamo aggiungere per testa e coda

Testa -> \[ | \] -> \[ | \] -> \[ | \] <- coda

### Implementazione tramite array
Con array la testa e la coda sono entrambi mobili sull'array ed essenzialmente si scala sugli indici, non si può fissare la testa in A\[0\] in quanto la cancellazione di elmenti in testa diventerebbe complessa.

Qhead indice della testa in un array
Qtail indice della coda

h = t => coda vuota
h = t + 1 => coda piena

```
ENQUEUE(Q,x)
	if Q.tail = Q.length and Q.hhead = 0 or Q.head = Q.tail + 1
		error "overflow"
	Q[Q.tail] := x
	if Q.tail = Q.length
		Q.tail := 1
	else Q.tail := Q.tail + 1
```

```
DEQUEUE(Q)
	if Q.head = Q.tail
		error "underflow"
	x := Q[Q.head]
	if Q.head = Q.length
		Q.head := 1
	else Q.head := Q.head + 1
	return x
```

Entrambi hanno tempo di esecuzione $T(n) = O(1)$


