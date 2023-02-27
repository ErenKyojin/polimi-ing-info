# [[serie]] notevoli

### serie geometrica
Sia $a_n = q^n,q\in\mathbb R$. Se $q \neq 1$ abbiamo:
$$s_n = 1 + q + q^2 + \ldots+q^n=\frac{1-q^{n+1}}{1-q}$$
Se invece $q = 1$ abbiamo $s_n = n+1$. Prendendo il limite, per $n\to+\infty$ otteniamo:
$$\lim_{n\to\infty}s_n = \begin{cases}
\frac{1}{1-q}\qquad&\text{se}\quad|q|<1 \\
+\infty&\text{se}\quad q\geq1 \\
\text{non esiste}&\text{se}\quad q\leq-1
\end{cases}$$
$$\text{e quindi la serie}\quad\sum_{n = 0}^\infty q^n\quad \text{è}\quad\begin{cases}
\text{convergente (con somma}\frac{1}{(1-q)}) &se|q|<1 \\
\text{divergente a $+\infty$} &\text{se }q\geq 1\\\
\text{irregolare} &\text{se }q \leq -1
\end{cases}$$

### serie armonica
$$\sum_{n=1}^\infty\frac{1}{n}=1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\ldots+ \frac{1}{n}+\ldots$$
La cui successione delle somme parziali è $\geq\log(n+1)$, tende quindi a $+\infty$.

In generale la serie armonica $\sum\frac{1}{n^\alpha}$ ha un andamento che dipende da $\alpha$, in particolare:
$$\sum \frac{1}{n^\alpha}\text{ converge se $\alpha > 1$, diverge se $\alpha \leq 1 $}$$

### serie di mengoli
$$\sum_{n =1}^\infty\frac{1}{n(n+1)}$$
