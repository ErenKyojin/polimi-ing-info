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
\draw  (m.center) -- ++ (1,0) node(c){};
\draw (B.E) to[open, v=$V_{out}$] (c.center);
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
\addplot[domain=0:2,samples=100,blue]{6};
\addplot[domain=2:8,samples=100,blue]{1/(x-1.833)};
\addplot[domain=0:2,samples=50,red]{-(x^2)/8 + 5.5};
\addplot[domain=2:8,samples=25,red]{.3/(x-1.94)};
\addplot[domain=0:2,samples=2,green,thick]{6};
\addplot[domain=6:8,samples=2,green,thick]{0};
\addplot[domani=0:6,samples=20,red,dashed]{x + 2};
\draw[dashed] (2,-.5) -- ++ (0,6);
\draw[dashed] (6,-.5) -- ++ (0,6);
\end{axis}
\end{tikzpicture}
\end{document}
```

Questo è un C-MOS.

Quando $V_{in} < V_{Tr}$
- n-mos off
- p-mos o omico o saturo

	Sicuramente la corrente non è zero, quindi non siamo sicuramente nella regione di saturazione => cmos = fissa a $V_{DD}$

Abbiamo quindi che
$$ \begin{cases}
V_{OH} = V_{DD} \\
V_{OL} = 0 V
\end{cases} $$

tra i 2 ed i 3 volt zona di indeterminazione

|     | N MOS | P MOS |
| --- | ----- | ----- |
| 1   | off   | ohm   |
| 2   | ohm   | off   |
| 3   | sat   | ohm   |
| 4   | ohm   | sat   |
| 5   | sat   | sat   |

