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

Possiamo allora concludere che esistono la chiusura


