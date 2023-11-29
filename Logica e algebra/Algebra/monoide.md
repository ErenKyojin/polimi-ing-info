---
aliases: 
creation date: 2023-11-29
---

> [!def]
> Monoide è un semigruppo $\left< A, \cdot \right>$ dotato di elemento neutro rispetto all'operazione binaria


- Le matrice quadrate di ordine $n$ ad elementi in $\mathbb{R}$ rispetto al prodotto di matrici è un monoide
- Dato un insieme finito $\Sigma$ si indichi con $\Sigma^*$ l'insieme $\Sigma^+ \cup \{ \varepsilon \}$ con $\varepsilon$ simbolo non appartenente a $\Sigma$ detto parola vuota.
  Considerando su $\Sigma^*$ la legge di composizione interna binaria data dalla concatenazione di parole, tenendo la convenzione $u\varepsilon = \varepsilon u=u$ per qualsiasi $u \in \Sigma^*$. $\Sigma^*$ è detto **monoide libero** su $\Sigma$

Il monoide è essenzialmente una struttura algebrica con due operazione
- binaria associativa
- 0-aria (attraverso l'elemento neutro, associa ad ogni elemento b un elemento e che lega $\cdot$ dalla relazione $a \cdot e = e \cdot a = a$ per qualsiasi $a$ nel sostegno).

>[!oss]
>per questo motivo i monoidi si indicano solitamente con $\left< A, \cdot, e \right>$ per risaltare l'operazione di arità 0


dal monoide possiamo definire il [[gruppo]]