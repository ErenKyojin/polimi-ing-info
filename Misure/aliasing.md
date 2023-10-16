---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Se $T_{c} < \frac{T}{2}$ riesco a ricostruire il segnale perfettamente.

Se ad esempio $T_{C,2} = \frac{3}{4}T$, quindi non rispettiamo il [[Teorema di Shannon]]

```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}
\begin{axis}[axis lines=center]
\addplot[color = red] {sin(deg(x))};
\addplot[color = green] {sin(deg(x/3))};
\end{axis}
\end{tikzpicture}
\end{document}
```


```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}
\begin{axis}[axis lines = center]
\addplot[color = red] {sin(deg(x))};
\addplot[color = green,domain=2:3] {sin(deg(x-2))};
\end{axis}
\end{tikzpicture}
\end{document}
```

In filtro anti-aliasing è un filtro passa basse impostato a metà della frequenza di campionamento prima del convertitore.



>[!oss]
>Una volta eseguito il campionamento non è possibile risolvere eventuale problemi.