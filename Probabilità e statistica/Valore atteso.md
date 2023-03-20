---
aliases: media
creation date: 2023-03-20 14:56
modification date: 2023-03-20 14:56
---

Per le variabili aleatorie discrete:
>[!def]
>Sia $X$ una variabile aleatoria discreta a valori in $S = \left\{ x_{k} : k \in I \right\}$ con $I \subset \mathbb{Z}$ e sia $p_{X}$ la sua densità. Se
> $$
> \sum_{k \in I} |x_{k}|p_{X}(x_{k}) < +\infty
>$$
>Si definisce edia di $X$ o valore atteso di $X$ il numero
> $$
>E(X) := \sum_{k \in I} x_{k}p_{X}(x_{k})
>$$
>
>Altrimenti si dice che $X$ non amette valore atteso


Facciamo qualche osservazione su questa definizione. Se $X$ è una [[variabile aleatoria]] discreta non è detto che $X$ abbia valore atteso. Questo dipende dalla [[Analisi 2/convergenza|convergenza]] della [[Elettrotecnica/Serie|serie]] $\sum_{k \in I} |x_{k}|p_{X}(x_{k})$.
Se $X$ assume un numero finito di valori questa serie è la somma finita sicuramente convergente e la media esiste, se la sommatoria precedente converge allora, passando dalla [[convergenza assoluta]] alla [[Analisi 1/Successioni/Convergenza|convergenza]] anche il valore atteso converge, ed quindi $E(x)$ è finito.


## Valore atteso di funzioni di variabili aleatorie
Sia $X$ una variabile aleatoria, g una funzione reale e $Y:= g(X)$. Ci poniamo il problema di calcolare $E(Y)$. Supponiamo che $X$ sia discreta, possiamo calcolare la densita $p_{Y}$ di $Y$ e affermare in seguito che $E(Y) = \sum_{y}yp_{Y}(y)$. In realtà se siamo interessati solamente a $E(Y)$ e non alla densità di $Y$ possiamo evitare di determinare esplicitamente $p_{Y}$.

>[!proposizione]
> Siano $X$ una variabile aleatoria discreta a valori in $S = \left\{ x_{k} : k \in I \right\}$ con $I \subset \mathbb{Z}$ e densità $p_{X}$. $g$ una funzione reale e $Y :=g(X)$. Se $\sum_{k \in I}|g(x_{k})|p_{X}(x_{k}) < +\infty$ allora $Y$ ammette valore atte