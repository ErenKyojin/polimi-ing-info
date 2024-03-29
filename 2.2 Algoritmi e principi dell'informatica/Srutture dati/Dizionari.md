---
aliases: 
creation date: 2023-05-11 09:57
modification date: 2023-05-11 09:57
---

[[insieme]] dinamico che supporta solo le operazioni di Insert, Delete e Search. Agli oggetti di un dizionario si accede tramite le loro chiavi (che assumiamo [[numeri naturali]], anche se in realtà nelle implementazioni accettano spesso altri dati ma comunque convertibili in numeri naturali).
$k \in U \subset \mathbb{N}$
$m = |U|$

## Con array
$U$ insieme delle chiavi, il modo più immediato è fare un array $T$ tale  che in $T[k]$ troviamo l'elemento di chiave $k$ (che potrebbe essere un puntatore a chiavi più complesse).
Operazioni su tabella a indirizzamento diretto

```
DIRECT-ADDRESS-SEARCH(T, k)
	return T[k]
```

```
DIRECT-ADDRESS-INSERT(T, x)
	T[x.key] := x
```

```
DIRECT-ADDRESS-DELETE(T, x)
	T[x.key] := NIL
```
Tutti con tempo $O(1)$, tuttavia è davvero dispendioso in termini di memoria (se usiamo la rappresentazione binaria di stringhe come chiavi, ad esempio, è necessario di un array enorme, si introducono quindi le [[hash table]])

##