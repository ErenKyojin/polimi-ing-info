---
aliases: 
creation date: 2023-05-11 10:08
modification date: 2023-05-11 10:08
---

Quando una [[funzione hash]] ha delle chiavi che producono lo stesso risultato si ha una collisione, ossia
$$ k_{1} \neq k_{2}\quad\text{ma}\quad h(k_{1}) = h(k_{2})$$
## Risoluzione tramite concatenazione
Nel caso di collisioni al posto di inserire i dati nel risultato della funzione si inserisce una lista dinamica di dati che sono puntati da chiavi diverse ma in collisione.

```
CHAINED-HASH-INSERT(T, x)
	inserisci x in testa alla lista T[h(x.key)]

CHAINED-HASH-SEARCH(T, k)
	cerca un elemento con una chiave k nella lista T[h(k)]

CHAINED-HASH-DELETE(T, k)
	cancella x dalla lista T[h(x.key)]
```

Insert si fa in tempo O(1) assumendo che l'elemento da inserire non sia già in tabella
Search si fa in tempo proporzionale alla lunghezza di T\[h(x)\]
DELETE si fa in tempo O(1) assumendo 

