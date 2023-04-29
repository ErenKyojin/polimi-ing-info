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
  La commutatività di $*$ appare evidente dalla sua tavola di composizione (se si può fare).
  Infatti tale tavola risulterà simmetrica rispetto alla diagonale che parte dal vertice in alto a sinitra.
- L'operazione $*$ è associativa se per ogni $a,a',a'' \in A$ si ha $a * (a' * a'') = (a*a') * a''$.
  Se l'operazione $*$ è assicuatuva possiamo definire le potenze ad esponenti positivi di un qualsiasi elmento $a \in A$, ponendo $a^{(n)} = a * a * \dots * a$ ($n$ volte) e le potenze godono delle proprietà formali $a^{(n)} * a^{(m)} = a^{(n + m)}, (a^{(n)})^{(m)}=a^{n \cdot m}$. (l'associatività non è necessaria per definire le potenze ma lo è per definirne le proprietà)
- Esiste un elmentro neutro (identità) in $A$ rispetto all'operazione $*$ se esiste un $e \in A$ tale che per ogni $a \in A$ risulta $e * a = a * e = a$. Se si ha solo $e * a = a$, per ogni $a \in A$, $e$ si dice elemento neutro a sinistra, se invece si ha solo $a * e= a$, per ogni $a \in A$, $e$ si dice elemento neutro a destra
	- Se esiste l'elemento neutro si può definire in $A$ la potenza ad esponente $0$ di un  qualunque $a \in A$, ponendo $a^{(0)} = e$
	- Se in $A$ esistono elemento neutro a destra ed elemento neutro a sinistra rispetto all'operazione $*$, questi coincidono
	Di conseguenza se in $A$ esiste un elemento neutro questo è unico.
	Sulla tavola di composizione di $*$ (se è possibile farla) si identificano facilmente gli eventuali elementi neutri destri e sinistri
- Esiste uno zero in $A$ rispetto all'operazione $*$ se esiste uno $z \in A$ tale che per ogni $a \in A$ risulta $z * a = a * z = z$. Se si ha solo $z * a = z$, per ogni $a \in A$, $$
