---
aliases: iniettiva, iniettività, iniettive
creation date: 2023-04-28 15:46
modification date: 2023-04-28 15:46
---

>[!definition]
>Una [[Funzioni|funzione]] $f$ è **iniettiva** se rispetta queste analoghe condizioni:
> - Se ogni $b \in B$ al piú una controimmagine in $A$
> - $f(a_{1}) = f(a_{2}) \implies a_{1} = a_{2}$
> - $a_{1} \neq a_{2} \implies f(a_{1}) \neq f(a_{2})$

Per verificare che una [[Relazioni|relazione]] $f$ è una funzione iniettiva si deve verificare anche la condizione.

Rappresentando la relazione $f$ tramite la sua [[matrice di adiacenza]] (se possibile) si ha che $f$ è una funzione iniettiva se e solo se su ogni riga della [[matrice]] c'è uno ed un solo 1 e su ogni colonna al piú un 1.
Rappresentando la relazione $f$ tramite il suo [[grafo di adiacenza]] (se possibile) si ha che $f$ è una funzione iniettiva se e solo se da ogni vertice che rappresenta un elemento di $A$ esce uno ed un solo arco e ad ogni vertice che rappresenta un elemento di $B$ arriva al piú un arco.

È immediato provare che
- Il prodotto di due funzioni iniettive è una funzione iniettiva
- Se il prodotto $f \cdot g$ delle funzioni $f$ e $g$ è iniettivo allora $f$ è iniettiva

La funzione $g$ può essere non iniettiva anche se $f \cdot g$ è iniettiva, basta infatti considerar il seguente esempio: $A = \{ a \}, B = \{ b_{1},b_{2} \}, C = \{ c \}, f(a) = b_{1}, g(b_{1}) = g(b_{2}) = c$ in questo caso $f \cdot g$ è chiaramente iniettiva, ma $g$ non lo è.

Il prodotto $f \cdot g$ di due funzioni può non essere iniettivo anche se $f$ è iniettiva, basta infatti considerare il seguente esempio: $A = \{ a_{1},a_{2} \},B= \{ b_{1},b_{2} \}, C = \{ c \}, f(a_{1})=b_{1},f(a_{2}) =b_{2}, g(b_{1})=g(b_{2})=c$ si ha allora $f \cdot g(a_{1}) = f\cdot g (a_{2})$ quindi $f \cdot g$ non è iniettiva ma $f$ lo è.

