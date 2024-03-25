---
aliases: densità gaussiana, gaussiana, 
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
>Una [[Variabile aleatoria]] assolutamente continua $X$ con densità
>$$ f(x) = \frac{1}{\sqrt{ 2\pi \sigma^2 }}e^{-(x-\mu)^2/2\sigma^2} $$
>è detta **variabile aleatoria normale** o **gaussiana** di parametri $\mu$ e $\sigma^2$ e si indica $X \sim \mathcal{N}(\mu,\sigma^2)$
>
>Deduciamo dagli ultimi calcoli fatti che i due parametri di una variabile aleatoria $\mathcal{N}(\mu,\sigma^2)$ hanno una precisa intepretazione, la prima è la media e la seconda è la varianza.

È la funzione densità di probabilità (PDF) migliore per la [[Teoria degli errori]], ed è stata inizialmente sfruttata per l'ottima approsimazione della [[Modello discreto binomiale|variabile aleatoria binomiale]] quando $n$ è alto.

>[!Oss]
>Una variabile aleatoria normale è simmetrica rispetto a $\sigma$


Data $X$ variabile aleatoria normale con coefficienti $(\mu,\sigma^2)$, sia $Y = aX + b$ variabile aleatoria, anch'essa è una variabile aleatoria normale con coeficienti $a\mu + b, a^2\sigma^2$


### Approssimazione gaussina della [[funzione di ripartizione]] binomiale

>[!teorema] Teorema di DeMoivre-Laplace
>Sia $S_{n}$ il numero di successi in $n$ [[Prove di Bernoulli]], in ognuna delle quali il successo ha probabilità $p \in (0,1)$. Allora per ogni $a < b$
> $$
> P \left\{ a < \frac{S_{n} - np}{\sqrt{ np(1-p) }} \leq b \right\}  \to \Phi(b) - \Phi(a)
>$$
>dove $\Phi$ è la [[funzione di ripartizione]] di una gaussiana standard

Questo teorema afferma che, per $n$ abbastanza grande (l'approssimazione inzia ad essere di rilievo per $np(1 -p) \geq 10$), una variabile aleatoria binomiale $(n,p)$ ha distribuzione analoga a quella di una variabile aleatoria normale, con media e varianza della binomiale.


## Somma di variabili aleatorie normali indipendenti

>[!proposizione]
>Date $X_{i}, i = 1,\dots,n$ variabili aleatorie che seguono la distribuzione normale di parametri $\mu_{i}, \sigma^2_{i}$, allora $\sum_{i=1}^n X_{i}$ è una variabile aleatoria normale di parametri $\sum_{i=1}^n \mu_{i}, \sum_{i=1}^n \sigma^2_{i}$