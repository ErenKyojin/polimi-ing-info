---
aliases: 
creation date: 2023-05-31 17:23
modification date: 2023-05-31 17:23
---

I conduttori sono materiali in cui ci sono dei portatori di [[carica]] (elettroni o ioni) in grado di muoversi liberamente attraverso il mezzo. In presenza di un [[campo elettrico]] esterno ad essi, i conduttori manifestano un comportamento detto induzione elettrostatica. Le cariche elettriche mobili si accumulano in superficie, disponendosi in modo tale da indurre all'interno del conduttore un campo elettrico che annulla gli effetti di quello esterno.
```tikz
\begin{document}
\begin{tikzpicture}

\draw (0,0) circle (2cm);
\draw (0,0)[fill=gray] circle (1.9cm);

\draw[blue,-latex, ultra thick] (-5,0) -- (-2,0);
\draw[blue,-latex, ultra thick] (-5,1) to[in = 135, out = 0] (-1.7,1);
\draw[blue,-latex, ultra thick] (-5,1.75) to[in = 100, out = 0] (-.75,1.75);
\draw[blue,-latex, ultra thick] (-5,-1) to[in = 225, out = 0] (-1.7,-1);
\draw[blue,-latex, ultra thick] (-5,-1.75) to[in = 265,out = 0] (-.75,-1.75);

\draw[blue,-latex, ultra thick] (2,0) -- (5,0);
\draw[blue,-latex, ultra thick] (1.7,1) to[out=45,in=180] (5,1);
\draw[blue,-latex, ultra thick] (.75,1.75) to[out=80, in=180] (5,1.75);
\draw[blue,-latex, ultra thick] (1.7,-1) to[out=320,in = 180] (5,-1);
\draw[blue,-latex, ultra thick] (.75,-1.75) to[out=285, in=180] (5,-1.75);

\end{tikzpicture}
\end{document}
```
Le linee di [[forza]] di $\vec{E}$ all'esterno del conduttore sono perpendicolari alla sua superficie, altrimenti metterebbero in [[moto]] la carica superficiale rompendo l'equilibrio dovuto all'induzione elettrostatica. Se $\bar{E}$ all'interno di un conduttore è nullo, $\int _{\gamma} \!\bar{E} \, \mathrm{d}\bar{l}$ su qualunque percorso $\gamma$ aperto all'interno