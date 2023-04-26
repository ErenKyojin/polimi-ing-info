---
aliases: 
creation date: 2023-04-26 10:39
modification date: 2023-04-26 10:39
---

Ibrido significa un pezzo a TC ed un pezzo a TD.

indichiamo con \* tempo discreto.
| TD (k intero) | TC (t reale) |
| ------------- | ------------ |
| $w^*(k) \to\bullet\to R^*(x)\to u^*(k)$               | $u(t) \to \fbox{ $ P(s) $} \to y(t)$      | 

%%% #todo migliorare %%

![[Schema di controllo ibrido.canvas]]

$T_{s}$ tempo o passi di campionamento (sampling time)
$H$: Holder
$S$: Sampler

Quindi campionatore ideale $\implies y*(k) = y(kT_{s})$

Mantenitore di ordine zero (ZOH, Zero Order Holder) $\implies$ $u(t) = u*(k)$ per $kT_{S} \leq t < (k + 1)T_{s}$