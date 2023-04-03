---
aliases: 
creation date: 2023-03-30 18:40
modification date: 2023-03-30 18:40
---

```tikz
\begin{document}
\begin{tikzpicture}
\draw (-.75,-.5) rectangle (.75,.5);
\node at (0,0){$-L$};
\draw[->] (.75,0) -- (1.5,0) -- (1.5,-1) -- (-1.5,-1) -- (-1.5,0) -- (-.75,0);
\end{tikzpicture}
\end{document}
```

Condizioni di applicabilità:
1. $p_{D} =0$
2. || DBM di $L(s)$ taglia l'asse $0 \dB$ una e una sola volta dall'alto verso il basso

Criterio:
detto $M_{L}$ il guadagno di $L(s)$ e $\phi_{m}$ il margine di fase
$$\text{ Anello chiuso } AS \iff \begin{cases}M_{L} > 0\\ \varphi_{m} > 0\end{cases}$$

