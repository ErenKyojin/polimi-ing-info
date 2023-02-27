# Numeri interi
Usando il prodotto cartesiano degli [[Insieme|Insiemi]] calcoliamo $\mathbb N \times \mathbb N = \{(n,m) : n,m \in \mathbb N\}$

Usando poi le [[Relazione di equivalenza|Relazioni di equivalenza]]
$(n,m) \equiv (n',m')\quad$ se $\quad m + n' = m' + n$

Rispettano questa relazione le seguenti classi:
$\{(m,0), (m+1,1),(m+2,2),...\}$
$\{(0,m),(1,m+1),(2,m+2),...\}$
$\{(0,0),(1,1),(2,2),...\}$

$\mathbb Z$ è l'insieme di queste classi:

### Operazioni
$(i,j) + (m,n) = (i+m, j+n)$
$(i,j)\cdot(m,n) = (i \cdot m + j \cdot n, i \cdot n + j\cdot m)$

Uguali ai numeri naturali.
Gli elementi neutri:
- $(m, n) + (0, 0) = (m, n)$
- $(m, n) \cdot (1, 0) = (m, n)$
- $(m,n)+(n,m) = (0,0)$

>[!esempio]
>$(5,2) = (3,0)$
>$(4,9) = (0, 5)$

Riportiamo ogni classe di equivalenza alla prima folma di queste classi:
$$
\begin{flalign}
(m, 0) &\equiv (m+1, 1) \equiv ...\equiv +m\\
(0, m) &\equiv (1, m+1) \equiv ...\equiv -m\\
(0, 0) &\equiv 0
\end{flalign}

$$

- $-m$ è l'opposto di $m$ $\Rightarrow -m + m = 0$
- $n + (-m) = n - m$
- $|(m,0)| = |(0,m)| = m$
- $$|k| =
\begin{cases}
k \quad\text{se } k\geq0 \\
-k\quad\text{se } k\lt0
\end{cases}$$

### Relazione d'ordine in $\mathbb Z$
$m,n \in \mathbb Z$
$$
\begin{cases}
m \lt n\quad\exists\ \ j \gt 0\ |\ n=m+j \\
m \geq n\quad\exists\ \ j\geq 0 |\ n=m+j
\end{cases}
$$

$\{0, +1, +2, +3, ...\} \subset \mathbb Z \Longrightarrow \mathbb N \subset \mathbb Z$



