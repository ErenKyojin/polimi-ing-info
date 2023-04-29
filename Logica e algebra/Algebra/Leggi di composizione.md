---
aliases: 
creation date: 2023-04-29 15:44
modification date: 2023-04-29 15:44
---

> [!def]
> Dati gli [[insieme|insiemi]] $A_{1},A_{2},\dots ,A_{n},A$ una [[Funzioni|funzione]] $\omega : A_{1} \times A_{2} \times \dots A_{n} \to A$ si dice **legge di composizione $n$-aria** (o di arità $n$) di $A_{1},A_{2},\dots,A_{n}$ a valori in $A$. Per ogni $(a_{1},a_{2},\dots,a_{n}) \in A_{1} \times A_{2} \times \dots \times A_{n}$ l'elemento $a = \omega(a_{1},a_{2},\dots,a_{n})$ (che esiste ed è unico) è detto il risultato della composizione $\omega$ della $n$-upla ($a_{1},a_{2},\dots,a_{n}$).

> [!def]
> Se $A_{1} = A_{2} = \dots = A_{n} = A$ diremo che $\omega$ è una **legge di composizione** (o **operazione**) **interna $n$-aria** (o di arità $n$) su $A$.
> Siamo interessati soprattuto alle operazioni interne $n$-arie con $n = 1$ (unarie) ed $n = 2$ (binarie). Per le operazioni interne binarie su un insieme $A$ useremo la notazione infissa, indicando il risultato della composizione $*$ di $(a,a')$ con $a * a'$.

Se $A$ è un insieme finito i risultati di una operazione binaria interna su $A$ possono essere rappresentati tramite la tavola di composizione (detta spesso tavola di moltiplicazione) indicata di seguito con un esempio:

>[!esempio]
>- Il passaggio da un intero al suo opposto è una legge di composizione interna unaria in $\mathbb{Z}$ (perchè non lo è in $\mathbb{N}$?)
>- La ordinaria somme è un'operazione interna binaria su $\mathbb{N}$, su $\mathbb{Z}$, su $\mathbb{Q}$,...
>- La differenza è un'operazione interna su $\mathbb{Z}$, ma non è un'operazione interna su $\mathbb{N}$ (perchè?)
>- Il prodotto righe per colonne di [[matrici]] quadrate reai d'ordine $n$ è una legge di composizione interna binaria sull'insieme delle matrici quadrate reali di ordine $n$
>- Dati $A = \{ a,b,c \}$ la seguente è un'operazione interna binaria su $A: a * a = b, a * b = c, a * c = a,b*a = a, b *b = b, b*c =c, c * a = b, c * b = a, c * c = a$ rappresentabile con la seguente tavola di copmosizione:
>  $$ \Large\begin{array}{c|ccc}
> & a & b & c \\
>\hline a & b & c & a \\
>b & a & b & c \\
>c & b & a & a
>\end{array} $$


Introduciamo alcune proprietà delle operazioni binarie interne su $A$  ponendo attenzione sul genere di calcoli che la preenza di questa proprietà rendono leciti.
*Indichiamo di seguito con $*$ una generica operazione binaria interna su $A$*

- L'operazione $*$ è commutativa se per ogni $a,a' \in A$ si ha $a * a' = a' * a$
-  La commutatività di $*$ appare evidente dalla sua tavola di composizione (se si può fare).
   Infatti tale tavola risulterà simmetrica rispetto alla diagonale che parte dal vertice in alto a sinitra
