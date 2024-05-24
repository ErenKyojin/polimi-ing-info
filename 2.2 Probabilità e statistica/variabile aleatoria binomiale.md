>[!definition]
>Data una prova o un esperimento con esito positivo o negativo, ossia un prova di bernoulli. Posto $X=1$ quando l'esito è positivo e $X=0$ quando l'esito è negativo, diciamo che $X$ è una **variabile aleatoria di Bernoulli** o **Bernoulliana** se** $\exists p \in [0,1]$ tale che
>$$ \begin{cases}
>p(0) = P(X=0) = 1 - p \\
>p(1) = P(X = 1) = p
>\end{cases} $$



Consideriamo ora $X =$ numero di successi su $n$ [[Prove di Bernoulli]] di percentuale $p$

$\implies S = \left\{ 0,1,\dots,n \right\}$
$\implies f_{X} (k) = P(x=k) = P(x =k)= \begin{pmatrix}n\\k\end{pmatrix}p^k(1-p)^{n-k}$, $k = 0$

$X$ è una [[Variabile aleatoria]] binomiale di parametri $n \in \mathbb{N}$ e $0 \leq p \leq 1$ tali che:
$$
X \sim \Bi(n,p)
$$

Quindi
>[!definition] 
>La densità discreta di una variabile aleatoria binomiale di parametri $(n,p)$ è data dalla
>$$ \quad p(i) = \begin{pmatrix}
n \\
i 
\end{pmatrix} p^i(1-p)^{n-i}\qquad i = 0,1,\dots,n$$

Casi particolari:
1. $n = 1, x \sim \Bi(1,p) \equiv$ **Bernoulliana**(p), vista in precedenza è un caso speciale del
   $$f_{x} :\begin{pmatrix}
1 \\
0
\end{pmatrix} p^0 (1-p)^{1-0} = 1-p$$
2. $p = 0$ $X \sim \Bi(n,0)$
   $$\begin{align}
f_{x}(0) = \begin{pmatrix}
n \\
0
\end{pmatrix}0^{0}(1-0)^{n-0} = 0^0 \cdot 1\qquad (0^0 :=1) \\
\implies P(x = 0) = f_{x}(0) = 1
\end{align}$$
3. $n = 10$ (non troppo grande, non trppo piccolo); $p = \begin{cases}0.2 &\text{bassa} \\ 0.5 &\text{media}\\0.8 &\text{alta} \end{cases}$
   $$
\begin{align}
f_{x}, F_{x}. \Bi(10,p),\quad p= 0.2,0.5,0.8
\end{align}
$$
```tikz
\begin{document}
\begin{tikzpicture}
\draw(0,0) -- (4.5,0) -- (4.5,8) -- (0,8)-- (0,0);
\draw(0.5,0) -- (0.5, 2);
\draw(1,0) -- (1,6.5);
\draw(1.5,0) -- (1.5,7.5);
\draw(2,0) --(2,5.6);
\draw(2.5,0) -- (2.5,3);
\draw(3,0) -- (3,1);
\draw(3.5,0) -- (3.5,0.2);
\draw(4,0) -- (4,0.1);
\end{tikzpicture}
\begin{tikzpicture}
\draw(0,0) -- (4.5,0) -- (4.5,8) -- (0,8) -- (0,0);
\draw(2.25,0) -- (2.25,7.5);
\draw(1.75,0) -- (1.75,6.5);
\draw(1.25,0) -- (1.25,3.5);
\draw(0.75,0) -- (0.75,1);
\draw(2.75,0) -- (2.75,6.5);
\draw(3.25,0) -- (3.25,3.5);
\draw(3.75,0) -- (3.75,1);
\draw(4.25,0.) -- (4.25,0.3);
\draw(0.25,0) -- (0.25,0.3);
\end{tikzpicture}
\end{document}
```
FdR di $X$
P = 0.2 è simmetrica con P = 0.8, P = 0.5 simmetrica con se stessa

## Proprietà
$X$ variabile aleatoria binomiale:
- $E(X^k) = npE[(Y + 1)^{k-1}]$, con $Y$ variabile aleatoria binomiale di parametri $n-1,p$
	- per $k=1, E(X) = np$
- $\delta(X) = E(X^2) - E(X)^2 = np(1-p)$

>[!proposition]
>$X$ variabile aleatoria binomiale di parametri $(n,p)$ dove $0 < p < 1$, considerato $k$ che varia da $0$ a $n$, la densità discreta per $P(X = k)$ sarà inizialmente strettamente crescente, e poi strettamente decrescente. Il massimo sarà in corrispondenza del $k$ massimo tale che $k \leq (n + 1)p$


## Approssimazioni
- Per $n$ grande, possiamo sfruttare il [[teorema centrale del limite#Applicazioni]] per trovare che una variabile aleatoria normale standard
- Per $n$ gramde e $p$ piccolo, una [[Variabile aleatoria di Poisson]]