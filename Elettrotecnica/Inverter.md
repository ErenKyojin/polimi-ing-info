---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

R in serie ad un MOS (NMos e Pmos)
- N-MOS si comporta bene in commutazione 0->1
- P-MOS si comporta bene in commutazione 1->0

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\node[pnp] (A) at (0,0){};
\node[npn] (B) at (0,-2){};
\draw (-2,-3) to [V, l=$V_{in}$] (-2,-1) -| (A.B);
\draw (-2,-1) -| (B.B);
\draw (B.C) -- node[midway] (m){}(A.C);
\draw  (m.center) -- ++ (1,0);
\end{tikzpicture}
\end{document}
```

$$ \text{PMOS}\ V_{SG} = V_{DD} - V_{IN}, V_{SD} = V_{DD} - V_{out} $$
$$\text{NMOS}\ V_{GS} = V_{IN}, V_{DS} = V_{out}  $$

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
\begin{axis}[axis lines = left]
\addplot[domain=0:2,samples=100]{6};
\addplot[domain=2:4,samples=100]{exp(x)}
\end{axis}
\end{tikzpicture}
\end{document}
```

Questo è un C-MOS.

Quando $V_{in} < V_{Tr}$
- n-mos off
- p-mos o omico o saturo

	Sicuramente la corrente non è zero, quindi non siamo sicuramente nella regione di saturazione => cmos = fissa a $V_{DD}$