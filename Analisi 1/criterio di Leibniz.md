# criterio di Leibniz
>[!teorema]
>Sia data la serie
$$\sum_{n = 0}^\infty(-1)^n a_n\quad\text{con } a_n \geq 0\ \forall n$$
Se valgono i seguenti:
$i)$  la successione $\{a_n\}$ è decrescente
$ii)$ $a_n\to0$ per $n\to\infty$
Allora la serie è convergente. Inoltre, le somme parziali di indice pari approssimano la somma per eccesso, quelle di indice dispari per difetti, il resto della serie è maggiorato in valore assoluta, dal primo termine trascurato. In formula, detta $s$ la somma della serie si ha:
>$$\begin{align}
s_{2n} = &\sum_{k=0}^{2n}(-1)^k a_k \downarrow s;\\
>s_{2n+1} = &\sum_{k=0}^{2n+1}(-1)^k a_k \uparrow s;\\
>	|R_n| = \bigg\vert&\sum_{k = n}^\infty(-1)^ka_k\bigg\vert\leq a_n
>\end{align}$$

Notiamo come il criterio di Leibniz può essere applicato anche se le serie sono definitivamente di segno alterno ed $a_n$ è definitivamente decrescente.
Le somme parziali di una successione a segno alterno sono:
$$\begin{align}
&s_1 = -a_1 &&&&&&&\\
&s_2 = -a_1+a_2 \\
&s_3 = -a_1 + a_2 - a_3 \\
&\ldots\ldots\ldots\ldots\ldots\ldots\ldots\ldots \\
&s_n = a_1 + a_2 - a_3 +\ldots+(-1)^na_n
\end{align}
$$
con $a_i>0$ per ogni $i$.
