Notazione$\{w : x(w) \in I\} = "x \in I"$


>[!def]
>$(\Omega,\mathcal{F},P)$ chiamo **varaibile aleatoria** una [[Funzioni|funzione]] $x : \Omega \to \mathbb{R}$ tale che 
> $$
> \left\{ x \leq t \right\} \text{ evento} \quad \forall t \in \mathbb{R}
>$$
>Cioè posso calcolare la sua [[probabilità]], cioè $\left\{ x \leq t \right\} \in \mathcal{F}$


![[Funzione di ripartizione]]


>[!esempio]
>$x$ = tempo di eseguzione di un programma in secondi
>
>Esempi di eventi di interesse:
>- $x \leq t$
>- $x < t$
>- $x > t$
>- $x \geq t$
>- $a < x \leq b$
>- $a \leq x < b$
>- $a \leq x \leq b$
>- $a < x < b$
>---
>  - $P(x > t) = 1 - P(x \leq t) = 1 - F_{x}(t)\quad\forall t \in \mathbb{R}$
> 	
> - $P(a < x \leq b) = P(x \leq b) - P(x \leq a)= F_{x}(b) - F_{x}(a)$
>
>- $P(x = a)$
> $$\begin{align}
>&\left\{ x = a \right\} =\bigcap_{n=1}^\infty \left\{ a-\frac{1}{n} < x \leq a \right\} =\lim_{ n \to \infty } \left\{ a-\frac{1}{n} < x \leq a \right\}  \\
>&P(x=a) = P('') = P\left( \lim_{ n \to \infty } \left\{ a - \frac{1}{n} < x \leq a \right\}  \right) \\
>&= \lim_{ n \to \infty } \left[ F_{x}(a) - F_{x}\left( a-\frac{1}{n} \right) \right] = F_{x}(a) - F_{x}(a^-) 
>.
>\end{align}$$


Riepilogo $$
\begin{align}
(\Omega, \mathcal{F},P  ) \\
P : \Omega \to \mathbb{R} \\
\text{certi assiomi}
\end{align} \implies
\mathbb{R} x \text{ probabilizzabile}
$$
# Variabili aleatorie assolutamente continue
#todo

## Funzioni di variabili aleatorie assolutamente continue

>[!esempio]
> $x$ variabile aleatoria assolutamente continua, carica batterica di un campione di liquidio da un bacino di lavorazione alimentare, $u(a,b)$
> $c$ limite massimo di legge
> 
> se $x \geq c$ blocco la produzione e pulisco il bacino
> se $x < c$ la produzione continua
>
> il nostro evento di interesse è $\left\{ x \geq c \right\} \iff y = \mathbb{1}(x) = \begin{cases}0\\1\quad x \geq c\end{cases}$
> 
> $y \sim$ modello probabilistico
> $y = g(x)$
> $y \sim \text{Be}(p)$ e $p^k(1-p)^{1-k}\quad k = 0,1$
> $\quad p = p (y =1) = p(x \geq c) = 1 - F_{u(a,b)}(a) = b - c$