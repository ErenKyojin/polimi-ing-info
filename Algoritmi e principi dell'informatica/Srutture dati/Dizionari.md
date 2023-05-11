---
aliases: 
creation date: 2023-05-11 09:57
modification date: 2023-05-11 09:57
---

[[Insieme]] dinamico che supporta solo le operazioni di Insert, Delete e Search. Agli oggetti di un dizionario si accede tramite le loro chiavi (che assumiamo [[numeri naturali]], anche se in realtà nelle implementazioni accettano spesso altri dati ma comunque convertibili in numeri naturali).
$k \in U \subset \mathbb{N}$
$m = |U|$

## Con array
$U$ insieme delle chiavi, il modo più immediato è fare un array $T$ tale  che in $T[k]$ troviamo l'elemento di chiave $k$ (che potrebbe essere un puntatore a chiavi più complesse).
Operazioni su tabella a indirizzamento diretto


