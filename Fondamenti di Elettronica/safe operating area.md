---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---
Area in cui un componente può lavorare

# [[resistenza]]

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,-3) to[vsource = E] (0,3) to (3,3) to[R = R] (3,-3) to (0,-3);
\end{tikzpicture}
\end{document}
```
$V = RI \angle \Omega$
$E = V$
$I_{G} + I_{R}$
$P_{G} = E \cdot I_{G} = P_{U} = V \cdot I_{R} > 0$.

C'è una $P_{U}^{\text{ max }}$ oltre la quale una resistenza non può più funzionare e si brucia.

```tikz
\begin{document}
\begin{tikzpicture}
\draw (-4,0) -- (4,0);
\draw (0,-4) -- (0,4);
\draw[fill = red] (4,1) to[out = 180, in = 270] (1,4) to (4,4) to (4,1);
\draw[fill = red] (-4,-1) to[out = 0, in = 90] (-1,-4) to (-4,-4) to (-4,-1);
\draw (-4,-4) -- (4,4);
\node[above] at (1,1){R};
\end{tikzpicture}
\end{document}
```

Nella aree rosse il resistore si brucia.
# [[Diodo]]
$I_{D} = I_{S}(e^{V/V_{th}})$

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,-3) to[vsource] (0,3) to (3,3) to[diode] (3,-3) to (0,-3);
\end{tikzpicture}
\end{document}
```

L'esponanziale del diodo è asintotico ad una retta a 0,7V. Quindi il diodo si rompe quando siamo vicino a 0,7V o vicino a $I_{F}^{\max} = \dfrac{P_{u}^{max}}{0,7} \approx 1 A$

Quindi il diodo in diretta non può sopportare più