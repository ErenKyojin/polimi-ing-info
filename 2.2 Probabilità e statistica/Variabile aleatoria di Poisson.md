---
aliases: 
creation date: 2024-03-03
---

> [!def]
> Una variabile aleatoria $X$ che assume i valori $0,1,2,\dots$ è detta variabile aleatoria di Poisson se vale per un qualche $\lambda > 0$
> $$ p(i) = P \{ X = i \} = e^{-\lambda} \frac{\lambda^i}{i!}\quad i=1,2,\dots$$
> dove $p(i)$ definisce la densità discretà essendo $\sum_{i=0}^\infty p(i)=1$ (dimostrazione immediata attraverso serie di taylor)


La variabile aleatoria di Poisson ha molteplici applicazioni, in particolar modo per il fatto che, per $n$ grande e $p$ piccolo, è una buona approssimazione di una [[variabile aleatoria binomiale|variabile aleatoria binomiale]] con $\lambda = np$

### Valore atteso e varianza di una variabile aleatoria di Poisson
Considerando il fatto che una variabile aleatoria di Poisson ne approssima una binomiale con $n$ grande, $p$ piccolo e con $\lambda=np$. Essendo una variabile aleatoria binomiale con valore atteso $np$ e varianza pari a $np(1-p)$ possiamo aspettarci che varianza e valore attesso siano entrambi pari a $\lambda=np$ (la varianza grande al fatto che $p\to 0$) si può in effetti verificare che
$$E[X] = \lambda, E[X^2]=\lambda(\lambda + 1)$$
e quindi
$$\delta(X)= E[X^2] - E[X]^2 = \lambda $$

>[!oss]
>La variabile aleatoria di Poisson rimane una buona approssimazione anche quando le variabili sono debolmente dipendenti


>[!legge] Paradigma di Poisson
>Considerando $n$ eventi con probabilità $p_{i}$ di accadere, considerati essi indipendenti o debolmente dipendenti; allora il numero di eventi che si verifica è approosimativamente distribuito come la legge di Poisson di media
>$$ \sum_{i=1}^n p_{i} $$

## Calcolo della funzione di distribuzione
Se $X$ è una variabile aleatoria di Poisson di parametro $\lambda$ allora
$$ \frac{P\{ X=i+1 \}}{P\{ X=i \}} = \frac{\lambda}{i+1} $$

Iniziando da $P\{ X=0 \}=e$ si calcola ricorsivamente
$$P\{ X=1 \} = \lambda P\{ X = 0 \} \to P\{ X=2 \} = \frac{\lambda}{2}P\{ X=0 \}$$