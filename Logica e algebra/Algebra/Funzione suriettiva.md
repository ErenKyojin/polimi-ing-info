---
aliases: suriettiva, suriettività, suriettiva
creation date: 2023-04-28 12:51
modification date: 2023-04-28 12:51
---

>[!def]
>Una [[Funzioni|funzione]] $f$ è **suriettiva** se rispetta questa analoghe condizioni:
>- se ogni $b \in B$ ha almeno una controimmagine in $A$
>- se $f(A) = B$

Per verificare che una [[Relazioni|relazione]] $f$ è una funzione suriettiva va anche verificata la condizione

Rappresentando la relazione $f$ tramite la sua [[matrice di incidenza]] (se possibile) si ha che $f$ è una funzione suriettiva se e solo se ogni riga della [[matrice]] c'è uno ed un solo $1$ e su ogni colonna almeno un $1$.

Rappresentando la relazione $f$ tramite il suo [[grafo di incidenza]] (se possibile) si ha che $f$ è una funzione suriettiva se e solo se da ogni vertice che rappresenta un elemento di $B$ arriva almeno un arco.

È immediato provare che:
- il prodotto di due funzioni suriettive è una funzione suriettiva
- se il prodotto $f \cdot g$ delle funzioni $f$ e $g$ è suriettivo allora $g$ è suriettiva.

La funzione $f$ può essere non suriettiva anche se $f \cdot g$ è suriettiva, basta infatti considerare il solito esempio: $A = \{ a \}, B = \{ b_{1},b_{2} \}, C = \{ c \}, f(a) = b_{1}, g(b_{1}) = g(b_{2}) = c, f \cdot g$  è ovviamente suriettiva, ma $f$ no.
Il prodotto $f \cdot g$ di due funzioni può non essere suriettivo anche se $g$ è suriettiva, basta infatti considerare l'esempio: $A = \{ a_{1},a_{2} \}, B = \{ b_{1},b_{2} \}, C = \{ c_{1},c_{2} \}, f(a_{1})=f(a_{2})=b_{2}, g(b_{1})=c_{1},g(b_{2})=c_{2}$ si ha allora $f \cdot g$