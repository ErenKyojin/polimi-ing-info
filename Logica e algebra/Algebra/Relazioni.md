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
- $R \cap T = $