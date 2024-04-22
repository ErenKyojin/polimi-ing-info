---
aliases: funzione di distribuzione
creation date: 2024-03-03
---

>[!def]
>Sia $X$ una variabile aleatoria, definiamo la sua **funzione di ditribuzione** o **funzione di ripartizione** come $F_{X} : \mathbb{R} \to [0,1]$ 
>$$ F_{X}(t) = P(X \leq t) $$
>

### Proprietà
- Non decrescente
- $\lim_{ t \to \infty } F_{X}(t) = 1$
- $\lim_{ t \to -\infty } F_{X}(t) = 0$
- $F_{X}$ è una funzione continua a destra 
- $s < t \implies P(s < X \leq t) = F_{X}(t) - F_{X}(s)$


> [!def]
> Data $X$ variabile aleatoria binomiale di parametri $p,n$, la sua funzione di distribuzione è data dalla seguente:
> $$ P\{ X \leq i \} = \sum_{k = 0}^i \begin{pmatrix}
> n \\
> k
> \end{pmatrix}p^k(1-p)^{n-k}\quad i=0,1,\dots,n$$
> 
> Si può utilizzare la formula ricorsiva:
> $$ P\{ X = k + 1 \} = \frac{p}{1-p} \frac{n-k}{k+1}P\{ X=k \} $$



## Funzione di distribuzione per variabili aleatorie continue

^f9173c

> [!def]
> Sia $X$ variabile aleatoria continua, sia $f(x)$ la sua funzione di densità. La funzione di distribuzione è ricavabile tramite la relazione
> $$ P\{ X < a \} = F(a) = \int _{-\infty}^{a} \! f(x) \, \mathrm{d}x  $$

^61c769

## Funzione di ripartizione multidimensionale

> [!def]
> Sia $\mathbf{X} = (X_{1},\dots,X_{n})$ un [[Vettori aleatori|vettore aleatorio]] $n$-dimensionale definito su uno spazio di probabilità $(\Omega,\mathcal{F},P)$. È detta funzione di ripartizione di $X$ la funzione $F_{\mathbf{X}} = F_{(X_{1},\dots,X_{n})} : \mathbb{R}^n \to [0,1]$ definita per ogni $(x_{1},\dots,x_{n}) \in \mathbb{R}^n$ come $F_{(X_{1},\dots,X_{n})}(x_{1},\dots,x_{n}) := P(X_{1} \leq x_{1},\dots,X_{n} \leq x_{n})$

>[!proposition]
>Sia $\mathbf{X}=(X_{1},\dots,X_{n})$ un vettore aleatorio che ha funzione di ripartizione $F_{X}$ e sia $\mathbf{x} = (x_{1},\dots,x_{n})$. Allora per ogni $k=1,\dots,n$ si ha $\lim_{ x_{k} \to -\infty }F_{X}(\mathbf{x})=0$ 
>$$\begin{align}
\lim_{ x_{k} \to \infty } F_{X}(\mathbf{x}) &= P(X_{1} \leq x_{1}, \dots, X_{k-1} \leq x_{k-1}, X_{k+1} \leq x_{k+1}, \dots,X_{n} \leq x_{n})= \\
&=F_{(X_{1},\dots,X_{k-1},X_{k+1},\dots,X_{n})}(x_{1},\dots,x_{k-1},x_{k+1},\dots,x_{n})
\end{align}$$

>[!proposition]
>Le componenti di un vettore aleatorio $\mathbf{X}=(X_{1},\dots,X_{n})$ sono indipendenti se e solo se la funzione di ripartizione di $\mathbf{X}$ è uguale al prodotto delle funzioni di ripartizione marginali
>$$ F_{\mathbf{X}} = F_{X_{1}}F_{X_{2}}\dots F_{X_{n}} $$