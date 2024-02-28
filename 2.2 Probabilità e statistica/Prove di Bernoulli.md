>[!def]
>uno schema di $n$ prove di bernoulli sono $n$ prove in cui
>1. ogni prova può avere due esiti: successo o insuccesso, indichiamo con $E_{i}$ l'evento *"avrò successo all'i-esima prova"*
>2. Tutte le prove hanno sempre la stessa probabilità di successo, $P(E_{i}) = q\quad \forall i=1,\dots,n$
>3. Le prove non si influenzano tra di loro, $E_{1},\dots,E_{n}$ indipndenti
>

Definisco l'evento $F_{n,k} =$ *"nelle $n$ prove ottengo $k$ successi"*

Abbiamo che
$$ P(F_{n,k}) = \begin{pmatrix}
n \\
k
\end{pmatrix} q^k (1-q)^{n-k}$$

>[!dim]
>definisco che l'evento $F_{m,K}=$*ho $k$ successi nelle prime $m$ prove*
>
>Dimostro per induzione su $m$:
>$$\begin{align}
P(F_{1,k})= \begin{cases}
P(E_{i})&k=1 \\
P(E_{i}^C) &k=0
\end{cases} = \begin{cases}
q  &k=1\\
1-q &k=0
\end{cases}  = \begin{pmatrix}
1 \\
k 
\end{pmatrix} q^k (1-q)^{1-k}
\end{align}$$
>quindi è vero per $m=1$.
>
>Supposto vero per $m$, ossia $$P(F_{m,k})=\begin{pmatrix}
m\\
k
\end{pmatrix}q^k (1-q)^{m-k}$$
>Posso quindi dividere il problema in due e calcolare:
>$$ \begin{align}
>P(F_{m+1,k}) &= \sum_{h}P(F_{m+1,k}|F_{m,h})P(F_{m,h})= \\
>&= P(F_{m+1,k}|F_{m,k-1}) P(F_{m} ,k-1) +  \\
>&+P(F_{m+1,k}F_{m,k})P(F_{m,k}) = \\
>&= P(E_{m+1} | F_{m,k-1}) \times \begin{pmatrix}
>m \\
>k-1
>\end{pmatrix}q^{k-1} (1-q)^{m-k+1} \\
>&+ P(E_{m+1}^C | F_{m,k}) \times \begin{pmatrix}
>m \\
>k
>\end{pmatrix} q^k(1-q)^{m-k} \\
>&= P(E_{m+1}) \times \begin{pmatrix}
>m \\
>k-1
>\end{pmatrix} q^{k-1}(1 - q)^{m-(k-1)} + \\
>&+ P(E^C_{m+1}) \times \begin{pmatrix}
>m \\
>k
>\end{pmatrix} q^k(1-q)^{m-k} \\
>&=\begin{pmatrix}
>m \\
>k-1
>\end{pmatrix}q^{k}(1-q)^{m+1-k} = \\
>&=[\begin{pmatrix}
>m \\
>k+1
>\end{pmatrix} + \begin{pmatrix}
>m \\
>k
>\end{pmatrix}]q^k (1 -q)^{m + 1 - k} = \\
>&=\begin{pmatrix}
m+1 \\
k
\end{pmatrix}q^k(1-q)^{m+1-k}
>\end{align} $$
>quindi vale per $m+1$
>$\CVD$

>[!esempio] Esperimento
>
>$\Omega = \left\{ a_{1},\dots,a_{n} \right\} : a_{i} = 0,1;\quad i=1,\dots,n$
>$E \subseteq \Omega$ è un [[evento]] $\mathcal{F} = \mathcal{P}(\Omega)$,
>$P(\left\{ a_{1},\dots,a_{n} \right\})$ tale che:
>1. $P(\left\{ a_{1} = 1 \right\})=p = \dots = P(\left\{ a_{n}=1 \right\}),\quad 0 < p < 1$
>2. $P(\left\{ a_{1} \right\} \cap \left\{ a_{2} \right\} \cap \dots \cap \left\{ a_{n} \right\}) = P(\left\{ (a_{1},\dots,a_{n}) \right\}) = P(\left\{ a_{1} \right\})\dots P(\left\{ a_{n} \right\})$
>   $\implies (\underbrace{ 1,\dots,1 }_{ k },\underbrace{ 0,\dots,0 }_{ n-k })$ 
>   $\implies p \times \dots \times p \times (1-p) \times \dots \times (1-p) = p^k (1-p)^{n-k} = P((1,\dots,1,0,\dots,0))$
>   che dipende da $n,k$, ossia dal numero di successi
>   $\implies P(a_{1},\dots,a_{n}) = p^k(1-p)^{n-k}$ ossia se il numero di successi è $k= \sum_{i=1}^na_{i}$ 
>   Quindi lo spazio di $n$ prove Bernoullina di parametro $0 < p <1$
>   $$
>\begin{align}
>&\Omega = \left\{ (a_{1},\dots,a_{n}) : a_{i} = 0,1; i = 1,\dots,n \right\} \\
> &P({a_{1},\dots,a_{n}}) = P^{\sum_{i=1}^n a_{i}} (1-p)^{n-\sum_{i=1}^n a_{i}}, \mathcal{F = P(\Omega )} \\
>&\text{Se } E \in \Omega, P(E) = \sum p^{\sum_{i=1}^na_{i}}(1-p)^{\sum_{i=1}^n a_{i}} \\
> &\implies E_{k} = \{ \text{ successi }=k\} k = 0,1,\dots,n \\
>&P(E_{k}) = \sum_{(a_{1},\dots,a_{n}):\sum a_{i}=k} \dots \\
> &= \# \left\{ a_{1},\dots,a_{n} : \sum a_{i} = k \right\}p^k (1-p)^{n-l} 
>\end{align}
>$$
>Si tratta solo di contare l'[[Analisi 1/Insiemi numerici/Insieme|insieme]] dei $k$ indici estratti dalle prove, ossia $\begin{pmatrix} n \\ k\end{pmatrix}$
> $$
> P(E_{k}) = \begin{pmatrix}
>n \\
>k
>\end{pmatrix}p^k (1-p)^{n-k}\qquad \forall k = 0,1,\dots,n
>$$
>Dove $E_{k}$ è il numero di successi $= k$, ed è un esempio di eventi che si configura come affermazione su un numero casuale (in quato il suo valore è $w$), affermazione che si vuole probabilizzare
> $$
> \Omega \to x : \Omega \to \mathbb{R}\quad e\quad E=\left\{ x \in I \right\} 
>$$
>Dove $I$ è un'intervallo, $E_{k} = \left\{ x \in {k} \right\}$, in questo caso intervallo con estremi coincidenti $=k$
