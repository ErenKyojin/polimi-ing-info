
Due rette complanari si dicono ortogonali o perpendicolari se sono [[Assiomi di incidenza|incidenti]] in un punto $O$ in cui formano 4 angoli uguali, quindi retti,
Due rette $\mathbf{r}_{1}, \mathbf{r}_{2}$ sono ortogonali o perpendicolari se lo sono le rette $\mathbf{s}_{1}, \mathbf{s}_{2}$ ottenute traslando $\mathbf{r}_{1}, \mathbf{r}_{2}$ in $O$ (ossia $\mathbf{s}_{1}, \mathbf{s}_{2}$) sono le rette passanti per $O$ parallele a $\mathbf{r}_{1}, \mathbf{r}_{2}$.
La definizione non dipende dalla scelta del punto $O$, infatti la perpendicolarità è conservata dal parallelismo.


>[!error]
>Due rette perpendicolari non devono essere perforza incidenti, nello spazio cartesiano ogni retta parallela all'asse $x$ è perpendicolare all'asse $y$, ma se non appartiene al piano $z=0$ non interseca l'asse $y$:
>```tikz
>\begin{document}
>\begin{tikzpicture}
>\draw[very thin] (0,0) grid (-3,3);
>\draw[->] (0,0) -- (0,3) node[above]{$y$};
>\draw[->] (0,0) -- (-3,0) node[above]{$x$};
>\draw[->] (0,0) -- (2,-1) node[right]{$z$}; 
>\draw[-] (2,0.5) -- (-4,0.5) node[above]{a};
>\draw[dashed] (2.5,0.5) -- (2,0.5);
>\draw[dashed] (-4.5,0.5) -- (-4,0.5);
>\draw[dashed] (1,0.5)  -- (1, -0.5);
>\draw[dashed] (1,0.5) -- (0, 01);
>\end{tikzpicture}
>\end{document}
>```
>
>Qui vediamo il piano $z=0$ evidenziato dalla griglia ed una retta a, perpendicolare ad y, ma non incidente.




