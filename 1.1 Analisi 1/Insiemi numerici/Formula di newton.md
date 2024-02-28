# Formula di newton
$$

(a+b)^n = \sum_{k=0}^n\begin{pmatrix}n \\ k \end{pmatrix}a^kb^{n-k}
$$

Inoltre valgono le seguenti proprietà:

$$\begin{pmatrix}
	n \\
	k
	\end{pmatrix}
	
	= \begin{pmatrix}
	n \\
	n - k
	\end{pmatrix} \quad \quad \quad \quad
	
	\begin{pmatrix}
	n \\
	k
	\end{pmatrix} 
	=
	\begin{pmatrix}
	n - 1 \\
	k - 1
	\end{pmatrix}+
	\begin{pmatrix}
	n - 1 \\
	k
\end{pmatrix}
$$

Si dimostra [[dimostrazione induttiva]]

Immediato dimostrare che sia vero per $n=0$

Se è vero per $n$ allora
$$ (a + b)^{n+1} = (a + b)(a+b)^n = (a + b)\sum_{n}\begin{pmatrix}
n \\
k 
\end{pmatrix} a^kb^{n-k}$$
$$ \begin{align}
&= \sum_{k} \begin{pmatrix}
n \\
k  
\end{pmatrix} a^{k + 1}b^{n-k} + \sum_{k} \begin{pmatrix}
n \\
k
\end{pmatrix}a^kb^{n+1 - k} \\
&= \sum_{k} [\begin{pmatrix}
n \\
k-1
\end{pmatrix} + \begin{pmatrix}
n \\
k
\end{pmatrix}]a^{k}b^{n+1-k} \\ \\
&=\sum_{k} \begin{pmatrix}
n+1 \\
k
\end{pmatrix} a^kb^{n+1-k}
\end{align} $$


>[!esempio]
> - numero di anagrammi con k lettere "a"  e n - k lettere "b" è il coefficiente binomiale 
> - Insieme di $n$ elementi di lunghezza fissa $k$ ha cardinalità pari al coefficiente binomiale di $n$ su $k$