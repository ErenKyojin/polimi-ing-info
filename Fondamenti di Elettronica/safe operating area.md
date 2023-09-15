---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---
Area in cui un componente può lavorare

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
\usepackage{circuitikz}
\begin{document}
\draw (-4,0) -- (4,0);
\draw (-4,0) 
\end{tikzpicture}
\end{document}
```