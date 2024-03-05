---
aliases: relazione
creation date: 2024-03-05
---

Le relazioni con cui lavoriamo in un [[DBMS]] tendono ad avere qualche specificità che è utile conoscere rispetto alle relazioni matematiche, in particolare:

- Lavoriamo con relazioni su insiemi finiti:
- Una relazione tra due dati ne stabilisce un legame
- L'ordine fra gli elementi di una relazione non è importante
	- due tabelle con gli stessi elementi in ordine diverso indicano la stessa relazione
- Una relazione non può avere $n$-uple uguali, essendo una relazione un insieme


Inoltre una relazione matematica $n$-aria distingue gli $n$ domini unicamente attraverso la loro posizione, questo è scomodo in informatica, dove preferiremmo poter distinguere gli $n$ domini attraverso nomi identificativi, ad esempio:

> [!esempio]
> Data la seguente tabella, che descrive uno studente, l'ultimo voto preso e la tabella, questa di fatto descrive una relazione matematica, ma è di difficile leggibilità.
> 
> | Alice        | 28  | 25   |
> | ------------ | --- | ---- |
> | Beatrice | 30  | 29.5 |
> | Carlo    | 30  | 19     |
> 
> 