>[!esempio]
>Probabilità di un programma concluso con successo in (entro) mezz'ora, questo è detto [[evento]]
>$P( \left\{ (1,t) : t \leq 0.5 \right\})$ ?


# Funzione di probabilità

Costruiamo la funzione $P$ nel caso di
$\Omega = \left\{ w_{1},w_{2},\dots,w_{n} \right\} \quad n \leq \infty$
$\mathcal{F} = \mathcal{P}(\Omega)$
1. Fissiamo dei pesi $p_{1}, p_{2},\dots,p_{n}$ tali che
	1. $p_{i} \geq 0$
	2. $\sum_{i= 1}^{n} p_{i} = 1$

2. Calcolo $P(A)$ con $A \subseteq R$ regola additiva, cioè
$$ P(A) := \sum_{\left\{ i :w_{i} \in A \right\} } P_{i} $$
>[!oss]
>$P(A)$ è effettivamente una funzione di probabilità in quanto:
>1. $P(A) \geq 0$
>2. $P(\Omega) = 1$
>3. additiva
>
>$\implies P(\left\{ w_{i} \right\}) = P_{i}$
>$\implies A,B\ t.c.\ |A|=|B|$ posso determinare $P(A), P(B)$? **Non** con questa funzione!


# Probabilità condizionata

> [!esempio]
> $\mathcal{E}$ esperimento = lancio di due dadi distinti, un dado $R$, un dado $B$
> 
> $\Omega = \left\{ (b,r) : b,r = 1:6 \right\}$
> $\mathcal{F} = \mathcal{P}(r)$
> $|\Omega| = 6^2 = 36$
> 
> Si tratta di uno [[spazio campionario#Spazio campionario equiprobabile o uniforme|spazio equiprobabile]]
> 
> $A = \left\{6\text{ sul rosso}\right\} \implies P(A) = \frac{6}{36} = \frac{1}{6}$
> $B = \left\{ \text{Punteggio totale }= 12 \right\} \implies P(B) = \frac{1}{36}$
> $C = \left\{ \text{Esce un 6} \right\} \implies P(C)=\frac{11}{36}$
> 

>[!def]
>Sia $(\Omega,\mathcal{F},P)$ uno spazio di probabilità e sia $F \in \mathcal{F}$ un evento tale che $P(F)>0$. Dato un qualsiasi evento $E \in \mathcal{F}$ si chiama probabilità condizionata di $E$ dato $F$ il numero:
> $$ P(E|F) = \frac{P(E \cap F)}{P(F)} $$