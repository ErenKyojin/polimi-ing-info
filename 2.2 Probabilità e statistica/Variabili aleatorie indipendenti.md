---
aliases: 
creation date: 2024-03-12
---

>[!def]
>Date due variabili aleatorie $X$ e $Y$, queste sono dette indipendenti se dati due insiemi $A$ e $B$ qualsiasi tali che $A \subseteq \mathbb{R}, B \subseteq \mathbb{R}$, vale che
>$$ P\{ X \in A, Y \in B \} = P\{ X \in A \} P\{ Y \in B \} $$
>che è verificata se $\forall a,b \in \mathbb{R}$
>$$P\{ X \leq a, Y \leq b \} = P\{ X \leq a \} P\{ Y \leq b \}$$

Vale inoltre la seguente:

> [!proposizione]
> Due variabili aleatorie $X$ e $Y$ sono indipendenti se e solo se la loro densità congiunta può essere espressa come
> $$ f_{X,Y}(x,y) = h(x)g(y)\qquad \forall x,y \in (-\infty, +\infty) $$

È utile tenere a mente che l'indipendenza tra variabili aleatorie è simmetrica, date due variabili aleatorie $X$ ed $Y$, se $X$ è indipendente rispetto ad $Y$ anche $Y$ è indipendente rispetto ad $X$.
Questo è in particolar modo utile nella verifica dell'indipendenza, se sembra particolarmente complicato dimostrare l'indipendenza in una via, è possibile provarla nell'altra.

L'indipendenza di più variabili aleatorie si può provare ricorsivamente
- $X_{2}$ indipendente da $X_{1}$
- $X_{3}$ indipendente da $X_{2},X_{1}$
- $\dots$ 
- $X_{n}$ indipendente da $X_{n-1},\dots,X_{2},X_{1}$


>[!proposizione]
>Variabili aleatorie $X_{1},\dots,X_{n}$ sono indipendenti se e solo se vale che
>$$P(X_{1} \leq x_{1}, \dots, X_{n} \leq x_n)=P(X_{1} \leq x_{1})\dots P(X_{n} \leq x_{n})$$
>per ogni $x_{1},\dots,x_{n} \in \mathbb{R}$

>[!proposizione]
>Variabili aleatorie **discrete** $X_{1},\dots,X_{n}$ sono indipendenti se e solo se vale che
>$$ P(X_{1} = x_{1}, \dots,X_{2}= x_{2})=P(X_{1}=x_{1})\dots P(X_{2}=x_{2}) $$

## Somma di v.a. indipendent