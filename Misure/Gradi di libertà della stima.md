---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Nella [[Varianza#Varianza campionaria]] il denominatore $n- 1 = v$ è il numero di gradi di libertà, e scegliamo proprio $n-1$ per dividere in quanto:

1. Non ha senso calcolare la varianza per un singolo campione
2. Nella formula di $s^2(x)$ calcoliamo gli scarti quadratici dalla media campionaria $\bar{x}$ (che è nota), non dalla media della popolazione $\mu_{x}$ (ignota). Dunque degli $n$ scarti quaratici sommati solo $n-1$ sono tra loro indipendenti
3. Si dimostra che il valore atteso della varianza campionaria con $n-1$ al denominatore è la varianza della popolazione $E \{s^2(x)\} = \sigma^2(x)$