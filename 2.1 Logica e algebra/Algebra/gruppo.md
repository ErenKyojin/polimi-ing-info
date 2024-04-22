---
aliases: 
creation date: 2023-11-29
---

> [!def]
> Si dice gruppo un insieme $A$ con legge di composizione binaria associativa che soddisfa le seguenti:
> - esiste $e \in A : \forall a \in a, a \cdot e=e \cdot a= a$
> - per ogni $a \in A, \exists b \in A : a \cdot b = b \cdot a = e$, $b$ si indica solitamente con $a^{-1}$


- L'insieme delle matrici quadrate non singolari di ordine $n$ ad elementi razionali o reali rispetto al prodotto di matrici è un gruppo.
- L'insieme delle funzioni biettive di un insieme $A$ in sè rispetto alla composizione di funzioni, è un gruppo.

Possiamo vedere un gruppo come una struttura con tre operazioni:
- un operazione binaria $\cdot$ associativa
- un operazione $0$-aria $f$, scelta dell'elemento neutro
- un operazione $1$-aria $g$, passaggio all'inverso tale che per ogni elemento si abbiamo $a \cdot g(a) = g(a)\cdot a = e$

quindi

>[!oss]
>indichiamo un gruppo con la notazione $\left< A, \cdot, ^{-1},e \right>$


esistono altre definizioni di gruppo:

>[!proposizione]
>$A$ insieme con una legge di composizione interna binaria associativa, è equivalente affermare che:
>1. A è un gruppo
>2. esiste un $e \in A : \forall a \in A, a \cdot e =a\ \ \ \ (e\cdot a = a)$ e $\forall a \in A,\ \exists\ b \in A : a \cdot b = e\ \ \ \ (b \cdot a = e)$.
>   Ossia in A ci sono neutro a destra ed inverso a destra di ogni elemento (analogo per la sinistra)
>3. $\forall a,b \in A, a\cdot x= b, x \cdot a = b$ ammettono ciascuna una ed una soluzione in $A$
> 
>>[!dim] #todo

