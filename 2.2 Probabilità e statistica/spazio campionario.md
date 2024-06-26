>[!definition]
>Si indica con $\Omega$, è l'[[insieme]] di tutti i [[caso elementare|casi elementari]]

### Spazio campionario finito
Se $\Omega < \infty$ la probabilità P è univocamente determinata dalle quantità
$$ p(\omega) =P ({\omega})\qquad \omega \in \Omega $$

In quanto
$$P(E) = \sum_{\omega \in E} p(\omega) \quad\forall E \in \mathcal{P} (\Omega)$$

#### Proprietà di $p : \Omega \to \mathbb{R}$
- $p(\omega ) \geq 0\quad \forall \omega$ positività
- $\sum_{\omega} p(\omega) = 1$ normalizzazione


# Spazio campionario equiprobabile o uniforme
Definita una funzione di [[probabilità]], sapendo che
 $$  \implies p_{1} = p_{2} = \dots = p_{n} = :p, \quad p=? $$
$$p \geq 0 \begin{cases}
= 0 \implies \sum p = 0 \unicode{x21af} \\
=1 \implies \sum p = \infty 
\end{cases}$$

Definiamo una nuova funzione di probabilità
$\implies P(A) = \frac{\text{casi favorevoli}}{\text{casi possibili}}$
In questo caso $|A| = |B| \implies P(A) = P(B)$


## Regole in spazi equiprobabili
1. Quanti sottoinsiemi di $k$ elementi di un insieme di dimensione $n$?
   $$ \begin{pmatrix}
n \\
k
\end{pmatrix},\quad k =0,\dots,n $$
2. Quale numero di sequenze ordinate di $k$ elementi da un insieme di $n$
	1.  Se gli elementi nella sequenza possono essere ripetuti:
	   $n^k$
	2. Se gli elementi sono tutti distinti
	   $\dfrac{n!}{(n-k)!}$


