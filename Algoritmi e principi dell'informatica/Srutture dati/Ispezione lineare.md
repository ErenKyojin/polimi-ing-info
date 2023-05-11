---
aliases: 
creation date: 2023-05-11 10:53
modification date: 2023-05-11 10:53
---

Ho una [[funzione hash]] 
$$ h(k,i) = (h'(k) + i) \mod m $$
In questo caso l'ispezioen inizia dalla cella $h'(k)$ e prosegue in $h'(k) + 1,h'(k) + 2$,..., fino a $m-1$, quando si rincominca da 0 fino ad esplorare tutti gli slot di $T$.
Genera solo $m$ sequenze di ispezione distinte, la prima cella ispezionata identifica la sequenza di ispezione e soffre del fenomeno dell'addensamento (clustering) primario

