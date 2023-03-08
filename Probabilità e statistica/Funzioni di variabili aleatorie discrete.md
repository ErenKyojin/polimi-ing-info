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
 - $E(y)$ valore atteso