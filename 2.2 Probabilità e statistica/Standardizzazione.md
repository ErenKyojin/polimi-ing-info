---
aliases: Standardizzazione di una variabile aleatoria
creation date: 2023-03-20 15:28
modification date: 2023-03-20 15:28
---

Sia $X$ una variabile aleatoria non costante che ammette una media $E(X) = m$ e varianza $\var(X) = \sigma^2$, poichè $X$ non è costante $\var(X) > 0$. Consideriamo la variabile aleatoria $Y$ ottenuta mediante la seguente trasformazione affine di $X$:
$$
Y := \frac{X - m}{\sigma}
$$
Dove $\sigma$ è la deviazione standard di $X$. Segue dalle proposizioni che $Y$ ammete media e varianza finite. Inoltre segue dalla linearità media che
$$
E(Y) = E\left( \frac{X-m}{\sigma} \right) = \frac{E(X) - m}{\sigma}=0
$$
mentre dalla proprietà della varianza otteniamo che
$$
\var(X) = \var (\frac{X-m}{\sigma})  = \frac{\var(X-m)}{\sigma^2}=\frac{\var(X)}{\sigma^2}=1
$$
Quindi qualunque siano la media e la varianza di $X$ i siamo ricondotti ad una variabile aleatoria $Y$ con media uguale a 0 e varianza uguale a 1. Per questo motivo $Y$ è detta standardizzata della variabile $X$ e l'operazione che trasforma $X$ nella corrisponde $Y$ è detta standardizzazione. La funzione di ripartizione $F_{X}$ della variabile $X$ è legata alla funzione di ripartizione $F_{Y}$ della standardizzata $Y$ dalla semplice relazione
$$
F_{X}(t) = P(X \leq t) = P\left( \frac{X -m}{\sigma} \leq \frac{t-m}{\sigma} \right) = F_{Y}\left( \frac{t-m}{\sigma} \right)
$$
L'operazione di standardizzazione gioca un ruolo fondamentale nel teorema di De Moivre Laplace e nel teorema centrale del limite


