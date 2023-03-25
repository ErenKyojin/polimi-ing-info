---
aliases: 
creation date: 2023-03-25 12:06
modification date: 2023-03-25 12:06
---

Se un corpo viene appoggiato su un [[piano]] inclinato di una angolo $\beta$, la [[forza peso]] si può scomporre in una [[forza]] normale ed una tangente alla superfice piana, che valgono

```start-multi-column
ID: ID_2wil
Number of Columns: 2
Largest Column: standard
```
$$
\begin{align}

&F_{n} = mg\cos \beta \Rightarrow R_{N} = mg\cos \beta \\
&F_{T} = mg \sin \beta \Rightarrow R_{T}=mg\sin \beta \leq \mu_{s}mg\cos \beta
\end{align}
$$


--- column-end ---
```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[thick](0,0) -- (0,1) -- (3,0) -- (0,0);
\filldraw[thick,color = blue,fill = cyan](.2,.93) -- (.6,.8) -- (.75,1.2) -- (.35,1.33) -- (.2,.93);
\node[red](c) at(.45,1.05){$\bullet$};
\draw (c.center) -- ()
\end{tikzpicture}
\end{document}
```
=== end-multi-column

