---
aliases: 
creation date: 2023-11-29
---

>[!def]
>$\left< A, +, \cdot \right>$ anello se
>- $\left< A, + \right>$ sia un [[gruppo abeliano]]
>- $\left< A, \cdot \right>$ sia un [[semigruppo]]
>- Valgano le proprietà distributive dell [[operazione]] $\cdot$ rispetto all'operazione $+$. Ossia:
>	- $a \cdot( b + c) = a\cdot b + a\cdot c$
>	- $(a + b) \cdot c = a \cdot c + b \cdot c$


>[!oss]
>non si parla solo di moltiplicazione o addizione ordinaria 

- $\left< \mathbb{Z}, +, \cdot \right>$ è anello (come lo sono tutti i sovrainsiemi di Z, $\mathbb{C}$ incluso)
- $\left< M_{(n\times n)}(\mathbb{R}), +, \cdot \right>$ è anello

>[!oss]
>Se $A$ è un anello allora $\left< A[x],+, \cdot \right>$, posso costruire l'[[insieme]] dei polinomi ad un incognita con coefficienti nell'anello e sarà comunque un anello (proprietà di trasposizione)

## Proprietà
$\left< A, +, \cdot \right>$ sia anello
1. $\forall a \in A\quad a \cdot 0 = 0 \cdot a =0$
2. $\forall a,b \in A\quad a\cdot (- b) = (-a) \cdot b = -(a\cdot b)$
3. $\forall a,b \in A \forall n \in \mathbb{Z}\quad a\cdot(n\cdot b) = (n\cdot a)\cdot b = n\cdot(a\cdot b)$
4. $\forall a,b,c \in A\quad$ 
	1. $(a - b)c = ac- bc$
	2. $a(b-c)= ab - ac$

>[!dim] dimostrazione di 1.
>$\cancel{ a\cdot b } = a\cdot(b + 0) = \cancel{ a\cdot b } + a \cdot0$
>e quindi abbiamo
>$0 = a \cdot 0$

***
Se $\left< A, +, \cdot \right>$ è un anello in cui esiste l'elemento neutro indicato con $\underline{1}$ rispetto all'operazione $\left< A, +, \cdot \right>$