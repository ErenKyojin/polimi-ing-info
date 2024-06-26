---
aliases: 
creation date: 2023-03-30 18:02
modification date: 2023-03-30 18:02
---

L'ipotesi, quantomeno iniziale, è $p_{D} = 0$

```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[->](-2,0) -- (2,0)node[below]{$\Re$};
\draw[->](0,-2) -- (0,2)node[right]{$\Im$};
\draw[red,thick,->] (-2,-2) arc (180:90:2);
\draw[blue,thick,->] plot[smooth] coordinates {(-2.2,-2) (-1.8,-.8) (-1,0)};
\draw (-1,0) arc(180:0:.5);
\node[red] at (-1.5,-2){$L_1(j\omega)$};
\node[blue] at (1.5,1){$L_2(j\omega)$};
\end{tikzpicture}
\end{document}
```

Consideriamo due [[Sistemi]] in AC con [[funzione di trasferimento|FdT]] d'anello aperto rispettivamente $L_{1}(s)$ e $L_{2}(s)$, con $p_{D}=0$ in ambo i casi $N = 0 \implies$ anello chiuso asintoticamente stabile

Intuitivamente però il sistema con FdT d'AA, $L_{2}$ è piú vicino a perdere la [[polimi-ing-info/2.2 Fondamenti di automatica/Stabilità]] asintotica
Usiamo quest'ide per quantifcare il grado di stabilità (ovvero distanza del perderla) con opportuni [[Indici di stabilità|margini di stabilità]]

