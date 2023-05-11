---
aliases: 
creation date: 2023-05-11 09:49
modification date: 2023-05-11 09:49
---

Ricerca, con input la lista L e la chiave k che ritorna il puntatore ad un elemento con $k$ come chiave o NIL se non è nella lista

```
LIST-SEARCH(L, k)
	x := L.head 
	while x != NIL and x.key != k
		x := x.next
	return x
```

```
LIST-INSERT(L, x)
	x.next := L.head
	if L.head != NIL
		L.head.prev := x
	L.head := x
	x.prev := NIL
```

```
LIST-DELETE(L, x)
	if x.prev != NIL //abbiamo un puntatore
```
