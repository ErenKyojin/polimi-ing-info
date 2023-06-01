---
aliases: 
creation date: 2023-06-01 18:28
modification date: 2023-06-01 18:28
---

Strumento per misurare la corrente tra due sezioni di un cavo 

```tikz
\begin{document}
\begin{tikzpicture}

\draw[fill = black!60] (0,0) circle (.25 and .5);
\draw (0,.5) -- ++ (-2,0);
\draw (0,-.5) -- ++ (-2,0);

\draw[fill = black!60] (2,0) circle(.25 and .5);
\draw (2,.5) -- ++ (2,0);
\draw (2,-.5) -- ++ (2,0);

\node (l) at (0,0){$\bullet$};
\node (r) at (2,0){$\bullet$};
\node[above right = 3mm] at (l){$\sigma$};
\node[above left = 3mm] at (r){$\sigma$};
\draw[->] (-1.5,0) -- ++ (.5,0) node[midway,above]{i};
\draw[->] (2.5,0) -- ++ (.5,0) node[midway,above]{i};
\draw (l) -| (.75,1);
\draw (r) -| (1.25,1);
\draw (0,1) rectangle (2,4);
\draw (.5,2.5) rectangle (1.5,3) node[midway]{A};
\end{tikzpicture}
\end{document}
```
