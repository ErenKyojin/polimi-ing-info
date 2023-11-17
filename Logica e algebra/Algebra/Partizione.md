---
aliases: 
creation date: 2023-04-28 13:13
modification date: 2023-04-28 13:13
---

> [!def]
> Si dice partizione di $A$ un [[insieme]] $\{ B_{i} | i \in I \}$ di sottoinsiemi di $A$ tale che sia $\displaystyle \bigcup_{i \in I} B_{i} = A$ e $B_{i} \cap B_{j} \neq \varnothing$ implichi $B_{i} = B_{j}$

>[!esempio]
>- La suddivisione di $Z$ nei due sottoinsiemi degli interi [[pari]] e degli interi [[dispari]] è una partizione di $Z$
>- La suddivisione di tutti gli uomini nei sottoinisemi di coloro che sono coetanei è una partizione dell'[[insieme]] degli  uomini

>[!Oss] Proprietà
>Se $\rho$ è  relazione di equivalenza su $A$ allora $\{ \rho_{a} \}_{a \in A}$ è una partizione di $A$
>1. $\forall a \in A, \rho_{a} \subseteq A \implies \bigcup_{a \in A}\rho_{a} \subseteq A$.
>   Considerando $a \in A \implies a \in \rho_{a} \implies a \in \bigcup_{a \in A} \rho_{a} \implies A \subseteq \bigcup_{a \in A}\rho_{a}$
>2. $\rho_{a},\rho_{b} x \in \rho_{a} \cap \rho_{b} \implies x \in \rho_{a} \land x \in \rho_{b} \implies x \rho a \land x\rho b \implies b \rho x \implies b \rho a \implies b \in \rho_{a}$


>[!oss]
>$\forall y : y \rho b \implies y \rho a \implies y \in \rho_{a} \implies \rho_{b} \subseteq \rho_{a}$


Osserviamo che data una [[Geometria e algebra lineare/relazione di equivalenza|relazione di equivalenza]] $\rho$  su un insieme $A$, le $\rho$-classi di $A$ sono una partizione di $A$. Tale patizione si dice partizione indotta da $\rho$.

Viceversa data una partizione di $A$ è sempre possibile definire una relazione d'equivalenza $\rho$ che induca su $A$ la partizione data. L'insieme delle $\rho$-classi di $A$ si dice [[insieme quoziente]] di $A$ rispetto a $\rho$ e si indica con $A / \rho$. Quindi $A / \rho = \{ \rho_{A} | a \in A \}$


# ANKI

```anki
id: 1700212219694
deck: LeA
---
Partizione
===
Si dice partizione di $A$ un insieme $\{B_i | i \in I\}$ di sottoinsiemi di $A$ tale che sia $\bigcup_{i \in I} B_i = A$ e $B_i \cap B_j \neq \varnothing$ implichi $B_i = B_j$
```

