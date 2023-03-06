$x =$ numero di successi su $n$ [[Prove di Bernoulli]] di percentuale $p$

$\implies S = \left\{ 0,1,\dots,n \right\}$
$\implies f_{X} (k) = P(x=k) = P(x =k)= \begin{pmatrix}n\\k\end{pmatrix}p^k(1-p)^{n-k}$, $k = 0$

$X$ è una [[variabile aleatoria]] binomiale di parametri $n \in \mathbb{N}$ e $0 \leq p \leq 1$ tali che:
$$
X \sim \Bi(n,p)
$$

Casi particolari:
1. $n = 1, x \sim \Bi(1,p) \equiv$ **Bernoulliana**(p)
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