---
aliases: 
creation date: 2023-05-11 10:53
modification date: 2023-05-11 10:53
---

Ho una [[funzione hash]] 
$$ h(k,i) = (h'(k) + i) \mod m $$
In questo caso l'ispezione inizia dalla cella $h'(k)$ e prosegue in $h'(k) + 1,h'(k) + 2$,..., fino a $m-1$, quando si rincominca da 0 fino ad esplorare tutti gli slot di $T$.
Genera solo $m$ sequenze di ispezione distinte, la prima cella ispezionata identifica la sequenza di ispezione e soffre del fenomeno dell'[[addensamento primario]] (o clustering primario).

>[!esempio]
>$m = 5$ inseriamo 38, 12 e 18
> - $h(38,0) = 3, h(12,0) = 2, h(18,0)=3$ conflitto! $h(18,1)=4$
> - otteniamo quindi T = \[NIL, NIL, 12, 38, 18\]

