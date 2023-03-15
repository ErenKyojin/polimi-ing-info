---
aliases: 
creation date: 2023-03-15 09:32
modification date: 2023-03-15 09:32
---




$$
X \sim N(\mu,\sigma^2): f_{X}(X) = \frac{1}{\sqrt{ 2\pi \sigma^2 }}e^{-(x-\mu)^2/(2\sigma^2)}
$$

```tikz
\usepackage{pgfplots}

\pgfmathdeclarefunction{gauss}{2}{%
  \pgfmathparse{1/(#2*sqrt(2*pi))*exp(-((x-#1)^2)/(2*#2^2))}%
}

\begin{document}
\begin{tikzpicture}[scale=1.5]
\begin{axis}[samples=50, smooth, mark = none, domain=-4:4, axis lines = left]
\addplot[blue,thick]{gauss(0,1)};
\addlegendentry{N(0,1)};
\addplot[red,thick,dashed]{gauss(-1,0.5)};
\addlegendentry{N(-1,0.5)};
\addplot[green,thick,dashed]{gauss(0,2)};
\addlegendentry{N(0,2)}
\end{axis}
\end{tikzpicture}
\end{document}
```

