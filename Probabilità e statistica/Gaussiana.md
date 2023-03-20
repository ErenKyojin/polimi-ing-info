---
aliases: densità gaussiana
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

>[!def]
>UNa [[variabile aleatoria]] assolutamente continua $X$ con densità è detta gaussiana di parametri $\mu$ e $\sigma^2$ e si indica $X \sim \mathcal{N}(\mu,\sigma^2)$
>
>Deduciamo dagli ultimi calcoli fatti che i due parametri di una variabile aleatoria $\mathcal{N}(\mu,\sigma^2)$ hanno una precisa intepretazione, la prima è la media e la seconda è la varianza.


## Approssimazione gaussina della [[funzione di ripartizione]] binomiale

>[!teorema]
>Sia $S_{n}$ o; numero di successi in $n$ [[prove di Bernoulli]], in ognuna delle quali il successo ha probabilità $p \in (0,1)$. Allora per ogni $a < b$
> $$
> P \left( a < \frac{S_{n} - np}{\sqrt{ np(1-p) }} \leq b \right)  \to \Phi(b) - \Phi(a)
>$$
>dove $\Phi$ è la [[funzione di ripartizione]] di una gaussiana standard