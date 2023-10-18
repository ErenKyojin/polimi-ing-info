---
aliases: 
creation date: 2023-05-08 16:43
modification date: 2023-05-08 16:43
---

# DEFINIZIONE

>[!def]
>Date le clausole $C_{1},C_{2}$ ed $R$ si dice che $R$ è una **risolvente** di $C_{1}$ e $C_{2}$ se esiste un letterale $L \in C_{1}$ tale che $\sim L \in C_{2}$ e $R = (C_{1} \setminus \{ L \}) \cup (C_{2}\setminus \{ \sim L \})$ dove se $L$ è una lettera enunciativa A il simbolo $\sim L$ sta per $\sim A$, se invece $L$ è la negazione di A il simbolo $\sim L$ sta per A.
>È immediato verificare che se $R$ è una risolvente di $C_{1}$ e $C_{2}$ si ha $C_{1},C_{2} \Vdash R$.

>[!oss]
>Non si è possibile considerare più di un singolo letterale 

# ANKI

```anki
deck: LeA
---
Risolvente
===
Siano $C_1$ e $C_2$ due clausole, sia $l$ un leterale di $C_1$ tale che $\bar{l}$ appartiene a $C_2$ allora la risolvente R è la seguente clausola:
$$ R =( C_1 - \{l\}) \cup (C_2 - \{\bar l\}) $$
```
