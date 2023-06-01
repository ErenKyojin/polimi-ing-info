---
aliases: 
creation date: 2023-06-01 18:38
modification date: 2023-06-01 18:38
---

Strumento di misura della tensione, formato da un organo di misura e da due cordoni che costituiscono la linea $\gamma$

```tikz
\begin{document}
\begin{tikzpicture}

\node (A) at (-2,0) {$\bullet$};
\node (B) at  (2,0) {$\bullet$};
\node[below] at (A){A};
\node[below] at (B){B};
\node[above=2mm] (1) at (A){};
\node[above=2mm] (2) at (B){};

\draw[dashed] (A.center) -- (B.center);
\draw[<-] (1.center) -| (-0.2,2);
\draw[<-] (2.center) -| (0.2,2);
\draw (-1,2) rectangle (1,5);
\draw ()


\end{tikzpicture}
\end{document}
```
