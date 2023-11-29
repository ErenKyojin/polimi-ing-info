---
aliases: 
creation date: 2023-04-28 15:21
modification date: 2023-04-28 15:21
---

>[!def]
>Un **reticolo** è un [[insiemi parzialmente ordinati|insieme parzialmente ordinato]] tale che per ogni sua coppia di elementi $a,b$ esistono $\inf\{ a,b \}$ e $\sup\{ a,b \}$


insieme con intersezione e unione


>[!def] reticolo come anello
>$\left< A, \cap, \cup \right>$ si dice reticolo se
>1. $a \cap b = b \cap a; a \cup b = b \cup a \forall a,b \in A$
>2. $(a \cap b) \cap c = a \cap (b \cap c); (a \cup b) \cup c = a \cup (b \cup c)\quad \forall a,b,c \in A$
>3. $a \cup (a \cap b) = a ; a \cap (a \cup b) = a \quad \forall a,b \in A$

Se ho $\left< A, \cap, \cup \right>$ reticolo allora ponendo $$a \leq b \iff a \cap b = a$$
ottengo un reticolo secondo la definizoine già data come insieme ordinato

viceversa

se $\left<  A, \leq \right>$ è un reticolo allora ponendo
$$ \begin{align}
a \cap b = inf(a,b) \\
a \cup b = sup(a,b)
\end{align} $$
si ha un reticolo nel senso di struttura algebrica