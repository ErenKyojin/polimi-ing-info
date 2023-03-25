---
aliases: 
creation date: 2023-03-25 12:06
modification date: 2023-03-25 12:06
---

Se un corpo viene appoggiato su un [[piano]] inclinato di una angolo $\beta$, la [[forza peso]] si può scomporre in una [[forza]] normale ed una tangente alla superfice piana, che valgono


$$
\begin{align}

&F_{n} = mg\cos \beta \Rightarrow R_{N} = mg\cos \beta \\
&F_{T} = mg \sin \beta \Rightarrow R_{T}=mg\sin \beta \leq \mu_{s}mg\cos \beta
\end{align}
$$


```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[thick](0,0) -- (0,1) -- (3,0) -- (0,0);
\filldraw[thick,color = blue,fill = cyan!200](.2,.93) -- (.6,.8) -- (.75,1.2) -- (.35,1.33) -- (.2,.93);
\node[red](c) at(.45,1.05){$\bullet$};
\draw[->,thick,red] (c.center) -- (.75,.93);
\end{tikzpicture}
\end{document}
```

Quindi un corpo rimane fermo su di un piano inclinato scabro $\mu_{s}$ solo se l'angolo di inclinazione del piane $\beta$ è minore dell'angolo $\alpha = \arctan(\mu_{s})$

Analisi delle forze in 