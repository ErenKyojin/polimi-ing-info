---
aliases: 
creation date: 2024-03-03
---

> [!def]
> Una variabile aleatoria $X$ che assume i valori $0,1,2,\dots$ è detta variabile aleatoria di Poisson se vale per un qualche $\lambda > 0$
> $$ p(i) = P \{ X = i \} = e^{-\lambda} \frac{\lambda^i}{i!}\quad i=1,2,\dots$$
> dove $p(i)$ definisce la densità discretà essendo $\sum_{i=0}^\infty p(i)=1$ (dimostrazione immediata attraverso serie di taylor)


La variabile aleatoria di Poisson ha molteplici applicazioni, in particolar modo per il fatto che, per $n$ grande e $p$ piccolo, è una buona approssimazione di una [[Modello discreto binomiale|variabile aleatoria binomiale]]

### Valore atteso e varianza di una variabile aleatoria di Poisson
Considerando il fatto che una variabile aleatoria di Poisson ne approssima una binomiale con $n$ grande, $p$ piccolo e con $\lambda=np$. Essendo una variabile aleatoria binomiale con valore atteso $np$ e varianza pari a $np(1-p)$ possiamo aspettarci che varianza e valore attesso siano entrambi pari a $\lambda=np$ (la varianza grande al fatto che $p\to 0$) si può in effetti verificare che
$$E[X] = \lambda, E[X^2]=\lambda(\lambda + 1)$$
e quindi
$$\delta(X)= E[X^2] - E[X]^2 = \lambda $$

>[!oss]
>La variabile aleatoria di Poisson rimane una buona approssimazione anche quando le variabili sono debolmente dipendenti