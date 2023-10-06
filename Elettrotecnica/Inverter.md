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
\draw (-2,-3) to [V] (-2,-1) -| (A.B);
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
\pgfplotset{compat==}
\begin{document}
\begin{tikzpicture}
\begin{axis}
\addplot{x};
\end{axis}
\end{tikzpicture}
\end{document}
```