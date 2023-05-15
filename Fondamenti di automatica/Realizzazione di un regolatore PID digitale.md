---
aliases: 
creation date: 2023-05-15 10:46
modification date: 2023-05-15 10:46
---

Specifiche:
- Forma ISA a 2 gradi di libertà
- Discretizzazione: con eulero implicito
- Relaizzazione: incrementale
- Anti-windup tramite ricalcolo azione $I$ con azione $D = 0$
- Modalità tracking con bumpless transfer

#### interfaccia

```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) -- (2,0) node[right]{SP};
\draw (0,-1) -- ++ (2,0) node[right]{PV};
\draw (0,-2) -- ++ (2,0) node[right]{TS};
\draw (0,-3) -- ++ (2,0) node[right]{TS};
\draw (4,0) node[left]{CS} -- ++ (2,0);
\draw (4,-2) node[left]{HI} -- ++ (2,0);
\draw (4,-3) node[left]{LO} -- ++ (2,0);
\end{tikzpicture}
\end{document}
```
