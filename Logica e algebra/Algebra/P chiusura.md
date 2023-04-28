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
3. È contenuta in ogni relazione transitiva che contenga $R$, infatti sia $S$ una relazione transitiva che contegna $R$, si ha $R^2 \subseteq S^2$ perchè il prodotto di relazioni è compatibile con l'inclusione, inoltre $S^2 \subseteq S$ per la transitività di $S$, dunque $R^2 \subseteq S$. Di nuovo per la compatbilità del prodotto con l'inclusione e per la transitività di $S$ si ha $R^3 \subseteq S^2 \subseteq S$ e, ripetendo lo stesso ragionamento si ottiene $R^n \subseteq S$ per ogni $n > 0$ e dunque $T \subseteq S$


Notare bene che in genere non basta fare $R \cup R^2$ per trovare la chiusura transitiva di $R$, a tal proposito basta considerare $A = \{ a,b,c,d \}$, $R = \{ (a,b),(b,c),(c,d) \}$. Risulta $R^2 = \{ (a,c),(b,d) \}$ quindi $R \cup R^2 = \{ (a,b),(b,c),(c,d),(a,c),(b,d) \}$ non è transitiva. Per avere una relazione transitiva bisogna aggiungere ad $R$ la coppia $(a,d)$ che appartiene ad $R^3$. In questo caso quindi la chiusura transitiva di $R$ è $R \cup R^2 \cup R^3$ (le potenze successive di $R$ sono infatti vuote).
In generale il procedimento di unire nuove potenze di $R$ finisce quando non si introducono nuovi 1.


Cosa succede se consideriamo $P$ come costituito da almeno due proprietà?
Le stesse considerazioni fatte per provare che in genere non esiste la chiusura antisimmetrica di una relazione si possono usare anche quando $P$ non è costituito da una sola proprietà ma contiene la proprietà antisimmetrica. Analogamente le considerazioni sulla non esistenza della chiusura seriale si possono usare quando $P$ contiene la proprietà seriale (a meno che non capiti che la presenza di altre proprietà porti la serialità ad essere riflessività come accade quando si considera l'insieme delle proprietà seriale, riflessiva e transitiva).

Escludendo queste due proprietà, consideriamo:
- $P = \{ \text{riflessività, simmetria} \}$
- $P = \{ \text{riflessività, transitività} \}$
- $P = \{ \text{simmetria, transitività} \}$
- $P = \{ \text{simmetria, riflessività, transitività} \}$

Per tutti questi $P$ esistono le $P$-chiusure di una relazione $R \subseteq A \times A$ perchè $\omega_{A}$ gode delle proprietà $P$ e contiene $R$, l'[[intersezione]] di relazioni che hanno le proprietà di $P$ è una relazione che gode delle proprietà $P$ e come già visto questo basta a garantire l'esistenza della $P$-chiusura di $R$.

Vediamo allora di costruire queste $P$ chiusure:
- La chiusura riflessiva e simmetrica di $R$ è la relazione $R \cup I_{A} \cup R^{-1}$
- La chiusura riflessiva e transitiva di $R$ è la relazione $\displaystyle \bigcup_{n \geq 0}R^n$
- La chiusura simmetrica e transitiva di $R$ è la relazione $\displaystyle\bigcup_{n > 0} (R \cup R^{-1})^n$
- La chiusura riflessiva, simmetrica e transitiva di $R$ è la relazione $\displaystyle\bigcup_{n > 0}(R \cup I_{A} \cup R^{-1})^{n}$
>[!dim]-
>#todo


Dati $A = \{ a,b,c,d \}$ e $R = \{ (a,a),(a,b),(b,d),(c,d) \}$ costruire la chiusura transitiva di $R$. Risulta $R^2 = \{ (a,a),(a,b),(a,d) \}$ e $R^3 = R^2 = \{ (a,a),(a,b),(a,d) \}$, quindi la chiusura transitiva di $R$ è la relazione $\{ (a,a),(a,b),(b,d),(c,d),(a,d) \}$ (le potenze di esponente maggiore di $2$ non possono infatti aggiungere nuove coppie in questo caso).
Il tutto poteva facilmente essere ottenuto con considerazioni sulla matrice di incidenza di $R$.
Si ha $$M_{R} = \begin{bmatrix}
1 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0
\end{bmatrix} \implies M_{R^2} = (M_{R})^2 = \begin{bmatrix}
1 & 1 & 0 & 1 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 
\end{bmatrix} \implies M_{R \cup R^2} = \begin{bmatrix}
1 & 1 & 0 & 1 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0
\end{bmatrix}$$
Poichè
$$ M_{R^3} = (M_{R})^3 = \begin{bmatrix}
1 & 1 & 0 & 1 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix} \text{ si ottiene }M_{R \cup R^2 \cup R^3} = M_{R \cup R^2} = M_{R \cup R^2 \cup R^3 \cup R^4 \cup \dots} $$
Calcoliamo la chiusura simmetrica e transitiva di $R$. Si ha
$$ R \cup R^{-1} = \{ (a,a),(a,b),(b,d),(c,d),(b,a),(d,b),(d,c) \} $$
da cui
$$ (R \cup R^{-1})^2 = \{ (a,a),(a,b),(a,d),(b,b),(b,c),(c,b),(c,c) \} $$
e
$$ (R \cup R^{-1})^3 = \{ (a,a),(a,b),(a,d),(a,c),(b,b),(b,c),(c,b),(c,c) \} $$
Osseviamo il modo in cui queste chiusure si presentano, la prima è la chiusura riflessiva della chiusura simmetrica di $R$, la seconda è la chiusura riflessiva della chiusura transitiva di $R$, tuttavia avremmo ottenuto lo stesso risultato se avessimo fatto rispettivamente la chiusura simmetrica della chiusura riflessiva e la chiusura transitiva della chiusura riflessiva.
La chiusura simmetrica e transitiva di $R$ è la chiusura transitiva della chiusura simmetrica di $R$, in questo caso va notato che facendo la chiusura simmetrica della chiusura transitiva di $R$, calcolando cioè $$\displaystyle \bigcup_{n > 0} R^n \cup \left( \bigcup_{n > 0} R^n \right)^{-I}$$non avremo in generale ottenuto la relazione cercata, quest'ultima infatti non può essere transitiva (*l'unione di relazioni transitive non è necessariamente transitiva*).
A tal scopo basta considerare $A = \{ a,b,c \}, R = \{ (a,b),(b,c) \}$. Risulta $\displaystyle\bigcup_{n > 0} R^n = \{ (a,b),(b,c),(a,c) \}$ e dunque $$\bigcup_{n > 0}R^n \cup \left( \bigcup_{n > 0} R^n \right) ^{-1} = \{ (a,b),(b,c),(a,c),(b,a),(c,b),(c,a) \}$$
Che non è NASCOSTO
