>[!def]
>Sia $V$ [[spazio vettoriale]] su $\mathbb{K}$, diciamo che $\mathbf{v}$ è **combinazione lineare** di $\mathbf{v}_{1},\dots,\mathbf{v}_{d} \in V$ se esistono $t_{1}, \dots, t_{d} \in \mathbb{K} t.c.$ 
>$$\mathbf{v} = t_{1}\mathbf{v}_{1} + \dots + t_{d}\mathbf{v}_{d}$$
>Gli scalari $t_{1},\dots,t_{d}$ sono i coefficienti della combinazione lineare


>[!esempio] esempi
>1.
>Il vettore $[3\quad 1\quad 1]^T \in \mathbb{R}^3$ è combinazione lineare di $[1\quad 1/2\quad 0]^T$ e di $[1\quad 0\quad 0]^T$, infatti:
> $$ \begin{bmatrix}
3 \\
1 \\
1
\end{bmatrix} =
2 \begin{bmatrix}
1 \\
1 / 2 \\
1
\end{bmatrix}+
\begin{bmatrix}
1 \\
0 \\
0 
\end{bmatrix}$$
>2. Data una matrice simmetrica $2\times 2$:
> $$ \begin{bmatrix}
a & c \\
c & b
\end{bmatrix} = a\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix} + b
\begin{bmatrix}
0 & 0  \\
0 & 1 
\end{bmatrix} + c
\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}$$
è combinazione lineare delle tre [[matrice|matrici]] simmetriche:
>$$ \begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix} ,
\begin{bmatrix}
0 & 0 \\
0 & 1
\end{bmatrix},
\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}$$


