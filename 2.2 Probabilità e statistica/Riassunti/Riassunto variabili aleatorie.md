---
aliases: 
creation date: 2024-04-16
---

### Variabile aleatoria
Una [[Variabile aleatoria]] è una funzione a valori reali definita sullo spazio campionario: $$X : \Omega \to \mathbb{R} $$

### Funzione di ripartizione
La [[funzione di ripartizione|funzione di distribuzione]] o **funzione di ripartizione** di una variabile aleatoria $X$ è una funzione: $$F(t) =p(X \leq t), t \in \mathbb{R}$$

### Distribuzione discreta
La [[distribuzione]] di una variabile aleatoria **discreta** è definita come $$ f(x) = P\{ X = x \} $$ 

### Valore atteso
Il valore atteso di $X$, indicato con $E(X)$ e riferitosi anche come media di $X$ è definito come
$$ E[X] = \sum xf(x) $$
inoltre
$$ E[g(x)] = \sum g(x)f(x) $$


### Varianza
La varianza di una variabile aleatoria è definita come
$$ \var[2](X) = \text{Var}(X) = E[(X-E[X])^2] = E[X^2] -(E[X])^2 $$

### Deviazione standard
La deviazione standard è la radice quadrata della varianza
$$ \cov(X) = \sqrt{ \var[2](X)} $$


### Variabili aleatorie discrete notevoli
- [[variabile aleatoria binomiale]]  - indica la probabilità di $k$ successi su $n$ prove
	- bernulliana, $n = 1$
- [[Variabile aleatoria Geometrica]] - indica la probabilità di $n$ insuccessi prima del primo succeso
- [[Variabile aleatoria di Poisson]] - approssima il modello binomiale per $n$ grande e $p$ piccolo
- [[Variabile aleatoria ipergeometrica]] - descrive la probabilità di estrarre $n$ palline senza reimissione di cui $m$ palline vincenti su un totale di $N$ palline contenute nell'urna