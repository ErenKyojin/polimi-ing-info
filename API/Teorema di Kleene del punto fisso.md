---
aliases: Teorema di Kleene, Teorema del punto fisso
creation date: 2023-04-11 12:36
modification date: 2023-04-11 12:36
---

>[!teorema]
>Sia $t$ una funzione totale e calcolabile, è sempre possibile trovare un numero naturale $p$ tale che
>$$f_{p} = f_{t(p)}$$
>La funzione $f_{p}$ è detta punto fisso di $t$
>
>>[!dim]
>>Sia $u \in \mathbb{N}$, definiamo una macchina di turing che effettui la seguent eprocedura sul valore in ingresso $x$
>>1. Si calcoli $z = f_{u}(u)$
>>2. Se e quando il calcolo di $z$ termina, si calcoli $f_{z}(x)$
>>
>>La procedura è effettiva, quindi esiste una macchina di turing per essa:
>>possiamo costruirle e poi cercare (per confronto) il suo indice $g(u)$ per ogni possibile $u$, usando la solita enumerazione $E$.
>>
>>>[!oss]
>>>$g$ è totale, esiste per ogni $u$, e calcolabile.
>>
>>Otteniamo quindi la funzione $f_{g(u)}(x) = \text{se} f_{u}(u) \neq \perp \implies f_{f_{u}(u)}(x)$ altrimenti $\perp$
>>
>>Sappiamo che $g$ è totale, inoltre se m


