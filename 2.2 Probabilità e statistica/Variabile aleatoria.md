---
aliases: variabili aleatoriee
---


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


Riepilogo 
$$
\begin{align}
(\Omega, \mathcal{F},P  ) \\
P : \Omega \to \mathbb{R} \\
\text{certi assiomi}
\end{align} \implies
\mathbb{R} x \text{ probabilizzabile}
$$

# Variabili aleatoriee continue
Fino ad ora abbiamo considerato variabili aleatoriee discrete, ossia che possono assumere valori numerabili. Tuttavia ci sono innumerevoli casi in cui non è sufficiente, basi pensare a tutti i casi in cui la variabile aleatoria descrive un tempo (ad esempio i secondi per terminare un attività). Per questi casi dobbiamo definire le variabili aleatoriee come continue:

>[!def]
>Sia $X$ una variabile aleatoria che assume valori non numerabili, diciamo che $X$ è una **variabile aleatoria continua** se esiste una funzione $f$ detta [[funzione di densità]] di $X$ definita per ogni $x \in (-\infty,+\infty)$ tale che per ogni insieme $B \subseteq \mathbb{R}$
>$$ P\{ X \in B \} = \int _{B} \!f(x) \, \mathrm{d}x  $$



Osseriviamo alcune proprietà:

- $f$ deve soddisfare 
$$1 = P\{ X \in [-\infty,+\infty] \}= \int _{-\infty}^{\infty} \! f(x)\, \mathrm{d}x$$

-  se $B=[a,b]$ 
$$ P\{ a \leq X \leq b \} = \int _{a}^b \!f(x) \, \mathrm{d}x  $$
- se $B =[a,a]$
  $$ P $$

## Variabili aleatorie assolutamente continue
#todo

### Funzioni di variabili aleatorie assolutamente continue

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
> $\quad p = p (y =1) = p(x \geq c) = 1 - F_{u(a,b)}(a) = \frac{b - c}{}$


### Metodo della [[funzione di ripartizione]]
$x \sim f_{x}$ assolutamente continua
$g : \mathbb{R} \to \mathbb{R}$ regolare "quanto basta" ossia:
- continua a tratti
- limite di $f$ continua a tratti
$y = g(x)$ è una variabile aleatore e ha $F_{y}$...
$$
F_{Y}(y) = P(Y \leq y) = P(g(x) \leq y) = P(x \in \left\{ x : g(x)\dots \right\} )
$$
$Y$ è assolutamente continua?
se $\int \!  f_{x}(0)\, \mathrm{d}x$ è derivabile q.o. rispetto a $y$ allora $y$ è assolutamente continua con densità
$f_{Y}(y) = F_{Y}'(y)$