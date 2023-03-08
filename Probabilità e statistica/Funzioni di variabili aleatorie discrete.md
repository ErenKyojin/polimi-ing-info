---
aliases: 
creation date: 2023-03-08 08:34
modification date: 2023-03-08 08:34
---
$X \sim \Bi\left( 10,\frac{1}{6} \right)$
$X$ numero di successi = esce $6$ su $10$ di dado regolare
Gioco tale che pago 5 euro per partecipare, vinco 6 euro per ogni 6 uscito.
$\implies$
 [[variabile aleatoria]] discreta $y = 6x - 5$ vincita netta

$E(y)$? $f_{y}$? in generale
$X \sim f_{x}$ con supposto $S = \left\{ x_{1},x_{2},\dots \right\}$
$g : \mathbb{R} \to \mathbb{R}$ deterministico
$$
g(S) = \left\{ g(x_{K}) : x_{K} \in S \right\} 
$$
$y = g(x)$
$\implies y$  è una [[variabile aleatoria]] discreta

$S_{y} = g(S)$
$f_{y}(y) = P(Y = y) = P(X \in \left\{ x_{k} \in S:g(x_{k}) = y \right\})$
$$
= \sum_{x_{k}:g(x_{k}) =y}f_{x}(x_{k})
$$
 - $E(y)$ valore atteso?
 $$
\sum_{x_{k} \in S}g(x_{k})f_{x}(x_{k})
$$
Se $\sum_{x_{k} \in S} |g(x_{k})|f_{x}(x_{k}) < \infty$ allora $E(y)$ esiste ed è dato da
 $$
E(y) = \sum_{x_{k} \in S} g(x_{k}) f_{x}(x)
$$

Torniamo a $Y = 6x - 5$ con $X \sim \Bi\left( 10, \frac{1}{6} \right)$
$$
\begin{align}
&6 \to a \\
&-5 \to b \\
&\implies y = aX + b
\end{align} \qquad a,b \in \mathbb{R}
$$
$f_{y}\quad f_{ax+b}$
se $a = 0$ allora $y = b \implies f_{y}(b) = 1$
Se $a \neq 0$
$$
f_{y}(y) = \sum_{x_{k} \in S_{x} : ax_{k} + b =y} f_{x} = \sum_{x_{k}=(y-b)/a}f_{x}(x_{k}) = f_{x}\left( \frac{y-b}{a} \right)
$$
$$\begin{align}

f_{ax+b}(y) = f_{x}\left( \frac{y-b}{a} \right) \quad \forall y (a  \neq 0) \\
\end{align}
$$
- $E(y) = E(ax + b)$
	-  Se $a = 0$, $E(b) = \sum_{y}yf_{y}(y) = b$
	- Se $a \neq 0$: passo 1, esiste $E(ax + b)$
$$
\begin{align}
\sum_{x_{k}} |ax_{k} + b|f_{x}(x_{k}) \leq \sum_{x_{k}}(|a| |x_{k}| + |b|) f_{x}(x) \\
= \sum_{x_{k}} |a| |x_{k}| f_{x}(x_{k} ) + \sum_{x_{k}} | b|f_{x}(x_{k}) \\
= |a|\sum_{x_{k}} |x_{k}|f_{x}(x_{k}) + |b|\sum_{x_{k}}f_{x}(x_{k})
\end{align}
$$
Riassunto se $E(x)$ esiste, anche $E(ax + b)$ esiste ed è data da
$$
\begin{align}
\sum_{x_{k}} (ax_{k} + b)f_{x})x_{k} = \sum_{x_{k}}ax_{k} f_{x}(x_{k})+ b \sum_{x_{k}} f_{x}(x_{k}) \\
= \sum_{x_{k}} a_{x_{k}}f_{x}(x_{k}) + b \sum_{x_{k}}f_{x}(x_{k}) \\
= a \sum_{x_{k}} x_{k}f_{x}(x_{k}) + b
\end{align}
$$
cioè $E(ax + b) = aE(x) + b$
- $E(x)$ è un operatore lineare
- $E(b) = b$ coerenza del valore 

$x \sim \Bi\left( 10, \frac{1}{6} \right), y = 6x -5$
$E(y) = 6E(x) - 5 = 6 \cdot 10 \frac{1}{6} - 5 = 5$ euro

Pago $12.5$ euro per partecipare
Vinco $y = 3x^2 - 12.5$
$E(y) = 3E(x^2) - 12.5$
$$E(x^2) = \sum_{k = 0}^{10} k^2 \begin{pmatrix}10\\k\end{pmatrix} \left( \frac{1}{6} \right)^k \left( \frac{5}{6} \right)^{10-k} = \frac{150}{36}$$
Mediamente vinciamo
$E(y) = 3 \times \frac{150}{36} - 12.5 = 0$
Questo gioco è a somma zero, mediamente si rimane con gli stessi soldi nel lungo periodo.

Proseguiamo con le proprietà di $E(x)$
- $E(ax + b) = aE(x) + b$
- $E(b)=b \forall b \in \mathbb{R}$
- $P(x \geq 0) = 1$ allora $E(x) \geq 0$, $E(x)$ operatore positivo
  $$E(x) = \sum_{x}x f_{x}(x) \geq \sum_{x}0f_{x}(x) = 0$$
	- Viceversa se $P(x \geq 0) = 1$ e $E(x) = 0$ allora $0 = \sum xf_{x}(x) \implies$
	  poichè ogni addendo $\geq 0$ $x f_{x}(x) = 0$
	  $$\begin{cases}f_{x}(x) = 0 \\
	x = 0\end{cases}$$
	$\implies$ unica possibilità è $f_{x}(0) = 1$
	Se $p(x = 0) = 1$ allora $E(x) = 0$
	viceversa se
	$P(x \geq 0) = 1$ e $E(x) = 0$ allora $P(x = 0) = 1$
- $P(a \leq x \leq b) = 1$ allora 
  $$\sum_{x} af_{x}(x)\leq E(x) = \sum_{x}xf_{x}(x) \leq \sum_{x} b f_{x}(x)$$