---
aliases: 
creation date: 2023-04-27 17:37
modification date: 2023-04-27 17:37
---

Consideriamo ora un [[Geometria e algebra lineare/insieme|insieme]] $P$ di proprietà di cui le [[relazioni]] binarie possono godere. Sia $R \subseteq A \times A$ una [[relazioni binarie|relazione binaria]] su $A$, chiamiamo [[chiusura]] di $R$ rispetto a $P$ o $P$-chiusura di $R$ una relazione $T \subseteq A \times A$ tale che:
1. $R \subseteq T$
2. $T$ gode di tutte le proprietà in $P$
3. Se $S \subseteq A \times A$ è una relazione che gode di tutte le proprietà in $P$ e contiene $R$ allora contiene anche $T$
In altre parole la $P$-chiusura di $R$, se esiste, è la minima relazione che contiene $R$ e ha tutte le proprietà di $P$

La $P$ chiusura di $R$ se esiste è unica, supponiamo infatti che $T$ ed $S$ siano due $P$-chiusure di $R$; dovendo soddisfare la (1) e la (2) entrambe contengono $R$ e godono di tutte le proprietà in $P$, ma allora per la (3) si ha $T \subseteq S$ e $S \subseteq T$, quindi $T = S$

La $P$ chiusura di $R$ può coincidere con $R$ quando si perde una proprietà di $R$ qualsiasi relazione si tolga.

Osserviamo che se
- Esiste almeno una relazione che gode di tutte le proprietà in $P$ e che contiene $R$
- l'intereszione di relazioni che godono di tutte le proprietà in $P$ gode ancora di tutte quelle proprietà 

Possiamo garantire che esiste la $P$-chiusura di $R$.

Possiamo allora concludere che esistono la chiusura riflessiva, la chiusura simmetrica e la chiusura transitiva di una qualsiasi relazione $R$,

In generale invece non esiste la chisura seriale di una relazione $R$, basta considerare $A = \{ a,b \}, R = \{ (a,b) \}$, per trovare una relazione seriale che contenga $R$ dobbiamo aggiungere ad $R$ una coppia il cui primo elemento sia $b$, quindi $(b,a)$ o $(b,b)$. Nel primo caso otteniamo $T = \{ (a,b),(b,a) \}$, nel secondo $S = \{ (a,b),(b,b) \}$. Le relazioni $T$ ed $S$ sono entrambe seriali e contengono entrambe $R$, ma ne $T \subseteq S$ ne $S \subseteq T$.

In generale non esiste neppure la chiusura antisimmetrica di una relazione $R$, infatti se $R$ non è antisimmetrica, nessuna relazione che contenga $R$ può essere antisimmetrica.

Vogliamo ora dare un metodo per costruire la chiusura riflessiva, la chiusura simmetrica e la chiusura transitiva di $R$.
- La chiusura riflessiva di $R$ è la relazione $R \cup I_{A}$
- La chiusura simmetrica di $R$ è la relazione $R \cup R^{-1}$
- La chiusura transitiva di $R$ è la relazione $\displaystyle\bigcup_{n > 0}R^n$ (ovviamente $n$ è un intero)
Verifichiamo come esempio l'ultima di queste affermazioni, dobbiamo provare che la relazione $T = \bigcup_{n > 0} R^n$
1. Contiene $R$ (immediato)
2. È transitiva, infatti se $(a_{1},a_{2}) \in T$ e $(a_{2},a_{3}) \in T$ esistono due interi $m,n > 0$ tali che $(a_{1},a_{2}) \in R^n$ e $(a_{2},a_{3}) \in R^m \subseteq T$
3. È contenuta in ogni relazione transitiva che contenga $R$, infatti sia $S$ una relazione transitiva che contegna $R$, si ha $R^2 \subseteq S^2$ perchè il prodotto di relazioni è compatibile con l'inclusione, inoltre $S^2 \subseteq S$ per la transitività di $S$, dunque $R^2 \subseteq S$ perch
