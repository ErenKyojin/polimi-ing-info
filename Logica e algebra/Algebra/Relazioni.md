---
aliases: Relazione
creation date: 2023-04-26 08:48
modification date: 2023-04-26 08:48
---

Ricordiamo la definizione di [[prodotto cartesiano]] degli $n$ insiemi $A_{1},A_{2},\dots,A_{n}$ l'[[Geometria e algebra lineare/insieme|insieme]]
$$ A_{1} \times A_{2} \times \dots \times A_{n} = \left\{ (a_{1},a_{2},\dots,a_{n}) | a_{i} \in A_{i}, i = 1,2,\dots,n \right\}  $$

Gli elementi del prodotto cartesiano sono $n$-uple ordinate ed è rilevante l'ordine in cui si considerano gli insiemi.
Se $n = 1$, il prodotto cartesiano si riduce ad $A_{1}$.

Si chiama relazione $R$ ($n$-aria o di arità $n$) fra gli $n$ insiemi $A_{1},A_{2},\dots,A_{n}$ un qualsiasi sottoinsieme di $A_{1} \times A_{2} \times \dots A_{n}$.

Siano $R \subseteq A_{1} \times A_{2} \times \dots A_{n}$ e $T \subseteq A_{1} \times A_{2} \times \dots A_{n}$ due relazioni fra gli $n$ insiemi $A_{1},A_{2},\dots,A_{n}$. Dalle definizioni insiemistiche si ha:
- $R \subseteq T$ sse per ogni $(a_{1},a_{2},\dots,a_{n}) \in R$ si ha $(a_{1},a_{2},\dots,a_{n}) \in T$
- $R = T$ sse $R \subseteq T$ e $T \subseteq R$
- $R \subset T$ sse $R \subseteq T$ ed esiste almeno una $n$-upla $(a_{1}',a_{2}',\dots,a_{n}') \in T$ tale che $(a_{1}',a_{2}',\dots,a_{n}') \notin R$
- $R \cap T = \{ (a_{1},a_{2},\dots,a_{n}) | (a_{1},a_{2},\dots,a_{n}) \in R\text{ e } (a_{1},a_{2},\dots,a_{n})\in T \}$
- $R \cup T = \{ (a_{1},a_{2},\dots,a_{n}) | (a_{1},a_{2},\dots,a_{n}) \in R \text{ o } (a_{1},a_{2},\dots,a_{n}) \in T \}$

Come è noto dalle nozioni sulla teoria degl insiemi, le definizioni di intersezione e unione si possono estendere ad una famiglia arbitraria di relazioni fra gli $n$ insiemi $A_{1},A_{2},\dots,A_{n}$. Pertanto se consideriamo una famiglia di relazioni $\{ R_{i} | i \in I \}$ fra $A_{1},A_{2},\dots,A_{n}$ dove l'indice $i$ varia in un qualsiasi [[insieme]] $I$, usiamo le seguenti notazioni
$$ \begin{align}
\bigcap_{i \in I} R_{i} &= \{ (a_{1},a_{2},\dots,a_{n}) | \forall i \in I\quad (a_{1},a_{2},\dots,a_{n}) \in R_{i}  \} \\
\bigcup_{i \in I} R_{i} &= \{ (a_{1},a_{2},\dots,a_{n}) | \exists i \in I\quad (a_{1},a_{2},\dots,a_{n}) \in R_{i}\}
\end{align} $$
Le operazioni fra relazioni godono ovviamente delle proprietà ben note per le operazioni insiemistiche.

[[relazioni binarie]]


### [[Geometria e algebra lineare/relazione di equivalenza|relazione di equivalenza]] 