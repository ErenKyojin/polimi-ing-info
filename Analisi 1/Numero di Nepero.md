# Numero di Nepero
Data la successione $a_n = (1 + \frac{1}{n})^n$ e ricordandoci la [[formula di newton]]  che dice che $(a+b)^n \sum_{k=0}^{n} \begin{pmatrix}n\\k\end{pmatrix}a^kb^{n-k}$ 
Allora ponendo $b = 1, a = \frac{1}{n}$
$$
\begin{flalign}
\left(1+\frac{1}{n}\right)^n &= \sum_{k = 0}^n \begin{pmatrix}n \\k\end{pmatrix}
\left(\frac{1}{n}\right)^k \\
&= 1 + \frac{n}{1} \frac{1}{n} + \frac{n(n-1)}{2!}\frac{1}{n^2} + \frac{n(n-1)(n-2)}{3!}\frac{1}{n^3} + ...+\frac{n!}{n!}\frac{1}{n^n} \\ \\
a_{n+1} = \left(1 + \frac{1}{n+1}\right)^{n+1} &= 1 + \frac{n+1}{1}\frac{1}{n+1} + \frac{(n+1)n}{2!}\frac{1}{(n+1)^2} + ...+\\
&= \frac{(n+1)n ... 2}{n!}\frac{1}{(n+1)^n}+\frac{(n+1)!}{(n+1)!}\frac{1}{(n+1)^{n+1}}
\end{flalign}

$$

$\Rightarrow a_{n+1} > a_n$ Quindi $a_n$ è crescente

$q \neq 1$
$$q^0 + q + q^2 + ...+q^m = \frac{1-q^{n+1}}{1-q}$$
$$\begin{rcases}
\{a_n\} \text{ monotona} \\
\{a_n\} \text{ superiormente limitata}
\end{rcases}
\Rightarrow \exists \lim_{n\to\infty}a_n \land\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n \triangleq e
$$
$e$ è per definizione il numero di nepero, è un [[numeri reali|numero irrazionale]], ed $e \approx 2.718...$

Notiamo come anche con una successione $a_n \to +\infty \Rightarrow (1+\frac{1}{a_n})^{a_n} \to e$, o se $b_n \rightarrow -\infty \Rightarrow (1 -\frac{1}{b_n})^{b_n} \to e$.
Allora dato $c_n : | c_n| \to +\infty \Rightarrow (1+\frac{1}{c_n})^{c_n} \to e$


# $e^x$
Inoltre per definizione $e^x = \lim_{n\to\infty}\left(1 + \frac{x}{n}\right)^n$