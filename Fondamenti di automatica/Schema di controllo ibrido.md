---
aliases: 
creation date: 2023-04-26 10:39
modification date: 2023-04-26 10:39
---

Ibrido significa un pezzo a TC ed un pezzo a TD.

indichiamo con \* tempo discreto.
| TD (k intero) | TC (t reale) |
| ------------- | ------------ |
| $w^*(k) \to\bullet\to R^*(x)\to u^*(k)$               | $u(t) \to \fbox{ $ P(s) $} \to y(t)$      | 

%%% #todo migliorare %%

![[Schema di controllo ibrido.canvas]]

$T_{s}$ tempo o passi di campionamento (sampling time)
$H$: Holder
$S$: Sampler

Quindi campionatore ideale $\implies y*(k) = y(kT_{s})$

Mantenitore di ordine zero (ZOH, Zero Order Holder) $\implies$ $u(t) = u*(k)$ per $kT_{S} \leq t < (k + 1)T_{s}$

Ipotesi:
- S&H sincroni
- $T_{s}$ costante

Noi progettiamo $R(s)$ pensando allo schema a TC
```tikz
\begin{document}
\begin{tikzpicture}
\draw[->] (0,0) node[left]{$w(t)$} -- ++ (1,0) node[scale = .3]{$\bullet$} -- ++ (1,0);
\draw(2,-.5) rectangle (3,.5)node[midway]{$R(s)$};
\draw[->] (3,0) -- ++ (1,0) node[midway,above]{$u(t)$};
\draw[] (4,-0.5) rectangle (5,.5)node[midway]{$P(s)$};
\draw[->] (5,0) -- ++ (1,0) node[right]{$y(t)$};
\draw[->] (5.5,0) -- ++ (0,-1) -- ++ (-4.5,0) -- ++ (0,1);
\end{tikzpicture}
\end{document}
```
che è appunto tutto a TCe poi dobbiamo ottenere $R^*(z)$ e implementare lo schema ibrido con S&H da prima scegliendo anche $T_{S}$:

1. Scelta di $T_{S}$
2. $\{ R(s), T_{s} \} \to R^*(z)$ (discretizzazione)
3. La presenza di S&H ha qualche effetto dinamico? se si, come tenerne conto


### Discretizzazione
Dati
$$ \begin{rcases}
R(s) \\
T_{s}
\end{rcases} \to R^* (z)$$
1. Discretizzazione "Esatta"
   L'idea è far evolvere il SD a TC per un intervallo di tempo di lunghezza $T_{s}$ e interpretare il risultato come l'evoluzione del sistema dinamico a tempo discreto lungo un passo $$ t += T_{s} \iff k++$$
   Quindi 
   - $R(s) \to (A,b,c,d)\qquad \forall$ realizzazione minima
   - $x_{R}(T_{s}) = e^{ AT_{s} } x_{R}(0) + \int _{0}^{T_{s}} \! e^{ A(T_{s} - \tau) }be(\tau)\, \mathrm{d}\tau \approx e^{AT_{s}}x_{R}(0)$
   