---
aliases:
  - DIKW
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) -- (8,0) -- (4,8) -- (0,0);
\draw (1,2) -- (7,2);
\draw (2,4) -- (6,4);
\draw (3,6) -- (5,6);
\draw[-latex,thick] (-1,.5) -- (-1,7.5); 
\node[scale = 1.25] at (4,.2){Datas};
\node[scale = 1.25] at (4,2.2){Information};
\node[scale = 1.25] at (4,4.2){Knowledge};
\node[scale = 1.25] at (4,6.2){Wisdom};
\node[rotate=90] at (-1.5,3.5){+aggregazione};
\end{tikzpicture}
\end{document}
```

>[!esempio]
>Temperatura della stanza
>**Datas**: 27 gradi, non ci viene fornito nient'altro (unità di misura qual'è?)
>**Information**: 27 gradi celsius alle ore 15
>**Knowledge**: se vogliamo estrarre delle informazioni ci dobbiamo affidare ad un data wharehouse ad esmpio



