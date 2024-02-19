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

>[!def]
>Una probabilità è una funzione qualsiasi $P  : \varepsilon \to \mathbb{R}$ :
> - $P(E) \geq 0\ \forall E$ positività
> - $P(\Omega) = 1$
> - Se $E_{1},E_{2},E_{3}$ sono a due a due incompatibili, allora $$ P(E_{1}\lor E_{2} \lor E_{3}\lor \dots)= P(E_{1}) + P(E_{2}) + P(E_{3}) + \dots $$
> 
>Rispettivamente positività, normalizzazione e additività

Di coneguenza abbiamo le seguenti proprietà:
- $P(\bar{E}) = 1 - P(\bar{E})$
- $0 \leq P(E) \leq 1$
- Se $E$ implica (che si indica con $\leq$) $F$, allora $P(E) \leq P(F)$

![[Probabilità condizionata]]

# ANKI

```anki
deck: PSI
---
Funzione Probabilità
===
Una probabilità è una funzione $P : \varepsilon \to \mathbb{R}$ tale che
- $P(E) \geq 0 \quad\forall E$
- $P(\Omega) = 1$
- Se $E_1, E_2, E_3,...$ sono a due a due incompatibili allora si ha $$ P(E_1 \lor E_2 \lor E_3 \lor ...) = P(E_1) + P(E_2) + P(E_3) + ... $$
```
