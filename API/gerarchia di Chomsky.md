---
aliases: 
creation date: 2023-03-10 15:33
modification date: 2023-03-10 15:33
---
Relazioni tra [[grammatiche]] e [[linguaggio|linguaggi]]:
```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) circle(6);
\draw (1,0) circle(4.5);
\draw(2,0) circle(3);
\draw(3,0) circle(1.5);
\node at (-5.2,1){tipo 0};
\node at (-2.8, .8){tipo 1};
\node at (-.3,.6){tipo 3};
\node at (2.2,.4){tipo 4};
\end{tikzpicture}
\end{document}
```

- **tipo 0**: Grammatiche generali o non ristrette
- **tipo 1**: Grammatiche monotone
- **tipo 2**: Grammatiche non contestuali
- **tipo 3**: Grammatiche regolari

Quindi
$$
L_{3} \subseteq L_{2} \subseteq L_{1} \subseteq L_{0}
$$

Ma possiamo dire se il contenimento è stretto? Si, confrontando con gli automi [[Grammatiche|grammatica]]
