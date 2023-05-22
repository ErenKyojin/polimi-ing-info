---
aliases: pile, stack
creation date: 2023-05-09 12:44
modification date: 2023-05-09 12:44
---

La pila (o stack) è una [[Strutture dati|struttura dati]] sulla quale possiamo fare le seguenti operazioni
- Controllare se è vuota
- Inserire un'elemento nella collezione (push)
- Cancellare un elemento dalla collezione (pop)

Una pila è gestita con politica LIFO (last in first out), quindi l'elemento cancellato è l'ultimo inserito.

Si può costruire con un array (immediato) o con una lista dinamica semplice.


### Implementazione con array
Intanto dobbiamo considerare che un arrray ha una lunghezza massima predefinita, se una pila può contenere al massimo $n$ elementi utilizziamo un array di $n$ elementi

```clike
push(S, x)
	if S.top = S.length
		overflow //lista piena
	S.top := S.top + 1
	S[S.top] := x
```

```clike
pop(S)
	if S.top = 0
		underflow
	S.top := S.top - 1
	return S[S.top + 1]
```

simili alle pile sono le [[code]]
