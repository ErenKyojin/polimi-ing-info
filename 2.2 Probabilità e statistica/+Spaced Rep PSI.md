---
aliases: 
creation date: 2024-03-03
tags: flashcards
---


variabile aleatoria
?
Una variabile aleatoria è una funzione $X : \Omega \to \mathbb{R}$ tale che $\{ X \leq t \}$ è un evento per ogni $t \in \mathbb{R}$

funzione di ripartizione
?
Una funzione di ripartizione della variabile aleatoria $X$ è una funzione $F$ tale che $$F(x) = P(X \leq x)$$, ossia la probabilità che la variabile aleatoria sia minore di $x$

densità discreta
?
Per una variabile aleatoria discreta definiamo la densità discreta come $$p(a) = P\{X = a\}$$

valore atteso
?
Sia $X$ una variabile aleatoria, sia $p(x)$ la sua densità discreta, il valore atteso di $X$ è definito come $$E(X) = \sum_{x : p(x) > 0} x p(x)$$

varianza
?
Data una variabile aleatoria $X$ con valore atteso $\mu$, definiamo la varianza di $X$ come
$$ \delta(X) = E[(X - \mu)^2] $$
alternativamente $\delta(X) = E(X^2) - (E(X))^2$

deviazione standard
?
La deviazione standard di $X$ è $\sqrt{ \delta (X) }$

variabile aleatoria binomiale
?
Sia $X$ una variabile aleatoria tale che possa assumere solo $X=1$ successo dell'esperimento, $X=0$ insuccesso. Date $n$ prove con probabilità di successo $p$, la densità discreta di una variabile aleatoria binomiale di parametri $n,p$ per $i$ successi è
$$ p(i) = \begin{pmatrix}
n \\
i
\end{pmatrix} p^{i}p(1 - p)^{n-1}$$

bernoulliana
?
Una bernoulliana è una variabile aleatoria binomiale con parametri $(1,p)$

valore atteso di una variabile alea