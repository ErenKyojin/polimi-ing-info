---
aliases: 
creation date: 2024-04-17
---

>[!definition]
>Sia $X$ variabile aleatoria per la quale esiste un intervallo aperto $\mathcal{O}$, contenente lo $0$ tale che $e^{tX}$ ammette media per ogni $t$ in $\mathcal{O}$
>$$m_{X}(t) := E(e^{tX})\qquad \forall t \in \mathcal{O}$$
>ed è detta funzione generatrice dei [[momenti]] di $X$

La funzione generatrice di $X$ coinide con la [[trasformata di Laplace]] della densità di probabilità di $X$


>[!proposition]
>Se $X$ ammette funzione generatrice dei momenti, allora esistono tutti i momenti di $X$ e vale che
>$$ E(X) = m'_{X}(0), E(X^2) = m''_{X}(0),\dots $$


## Funzione generatrice dei momenti per [[Vettori aleatori]]

>[!def]
>$\mathbf{X}=(X_{1},\dots,X_{n})$ un vettore aleatorio per il quale esiste un rettangolo aperto di $\mathbb{R}^n\ J = J_{1} \times\dots \times J_{n}$, che contiene $\mathbf{0}=(0,\dots,0)$ tale che $e^{t_{1}X_{1} + \dots+t_{n}X_{n}}$ ammetta media per ogni $\mathbf{t}=(t_{1},\dots,t_{n}) \in J$. Allora
>$$m_{\mathbf{X}}(t) := E(e^{t_{1}X_{1} + \dots + t_{n}X_{n}})$$ 
>definita per ogni $t \in I$ è detta funzione generatrice dei momenti di $\mathbf{X}$

>[!proposition]
>Siano $\mathbf{X},\mathbf{Y}$ due vettori aleatori che ammettono funzione generatrice dei momenti $m_{\mathbf{X}},m_{\mathbf{Y}}$ rispettivamente, siano $F_{\mathbf{X}}$ la funzione di ripartizione di $\mathbf{X}$ e $F_{\mathbf{Y}}$ quella di $\mathbf{Y}$. Allora $F_{\mathbf{X}}=F_{\mathbf{Y}}$ se $m_{X<}$