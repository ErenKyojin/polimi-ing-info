---
aliases: 
creation date: 2023-05-07 13:04
modification date: 2023-05-07 13:04
---

> [!teorema] 
> Sia $\Gamma$ un [[insieme]] di [[formule ben formate|f.b.f.]], $\Gamma \vDash \mathcal{A}$ se e solo se $\Gamma\vdash_{L} \mathcal{A}$

Questo teorema può essere facilmente ricavato dalla versione debole dei teoremi di completezza e correttezza, utilizzando il [[teorema di deduzione semantica]] e il [[teorema di deduzione sintattica]].

>[!Oss]
>possiamo pensare a $\Gamma = \{ B_{1},B_{2},\dots,B_{n} \}$ numero finito di fbf
>$$\vdash_L a \iff \{B_1,...,B_{n-1}\} \vdash_L B_{n-1} \iff ... \iff $$

# ANKI
```anki
deck: LeA
---
Teorema di correttezza e completezza di L versione forte
===
$\Gamma \vdash_L a$ se e solo se $\Gamma \vDash a$
```
