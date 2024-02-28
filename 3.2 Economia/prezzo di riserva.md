---
aliases: 
creation date: 2024-02-26
---

>[!def]
>Prezzo di riserva: prezzo massimo, che un consumatore è disposto a pagare per acquistare un'unità di un bene

Il prezzo di riserva guida le decisioni di aquisto, se il prezzo del bene è maggiore del prezzo di riserva l'acquisto non avverrà, altrimenti il consumatore acquisterà il bene

Conoscendo il prezzo di riserva consente di osservare la curva di domanda individuale di un bene:

```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}
\begin{axis}[
xlabel={$x$},
ylabel={$y$},
xmin=1,xmax=10,
ymin=1,ymax=10
]
\addplot+[ycomb, domain=1:10, samples at={1,3,...,9}, blue]{-x*x/8+10};
\end{axis}
\end{tikzpicture}
\end{document}
```

Dato il prezzo di mercato di un bene la curva di domanda individuale consente di valutare il surplus del consumatore. Differenza fra il prezzo che un consumatore è disposto a pagare ed il [[prezzo di mercato]] del bene