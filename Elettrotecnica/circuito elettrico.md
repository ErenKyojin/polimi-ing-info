---
aliases: circuito, circuiti, circuiti elettrici
creation date: 2023-06-01 18:00
modification date: 2023-06-01 18:00
---

## Il primo circuito elettrico

```tikz
\begin{document}
\begin{tikzpicture}

\begin{scope}[rotate = 20]
\draw (0,0) circle (4 and 2);
\draw (0,0) circle (3.5 and 1.5);
\draw (3.3,.8) circle (.15 and .25);
\draw[] (-3.7,0.2) circle  (.25 and .15);
\end{scope}

\node[scale = 2] at (0,1.3){$\gamma$};

\end{tikzpicture}
\end{document}
```
