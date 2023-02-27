# Coefficienti binomiali
Sviluppando una potenza $n$ esima di un binomio $(a + b)$ si trova:
$$(a+b)^{n} = (a+b)(a+b)\dots(a+b)=\sum_{k=0}^{n}c_{n,k}a^{k}b^{n-k}$$
con $c_{n,k}$ coefficienti binomiali, che hanno la seguente espressione:
$$c_{n,k} = \begin{pmatrix}
n \\
k
\end{pmatrix}
=\frac{n!}{k!(n-k)!}
\qquad 0 \leq k \leq n$$
Che per le proprietà dei [[Fattoriale|fattoriali]] diventa:
$$\begin{pmatrix}
n \\
k
\end{pmatrix}
=
\frac{n(n-1)(n-2)\dots(n-k+1)}{k!}$$
Arriviamo quindi alla [[formula di newton]]
