---
aliases: alberi binari
creation date: 2023-05-16 10:42
modification date: 2023-05-16 10:42
---

> [!def]
> Un'albero binario è fatto di 3 elementi: un nodo radice, un albero binario (sottoalbero sinistro) ed un albero binario (sottoalbero destro).


Si tratta ovviamente di una definizione ricorsiva, ed un sottoalbero può essere vuoto (NIL).
Possiamo associare ad ogni nodo dell'albero un oggetto con una chiave.

La struttura contiene puntatore al genitore, puntatore ai figli e la chiave per l'oggetto.

- **key** chiave per il nodo
- $p$ parent
- **left** left child
- **right** right child

Per sfruttare un albero binario è utile studiare gli [[alberi binari di ricerca]]