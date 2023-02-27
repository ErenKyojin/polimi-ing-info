# criteri di convergenza

I criteri di convergenza sono condizioni sufficienti per affermare che una serie sia convergente.

## serie a termini non negativi
Per le serie a termini non negativi si hanno alcuni semplici criteri.
Osserviamo innanzitutto che questo genere di serie sono obbligatoriamente crescenti, infatti
$$s_{n+1} = s_n + a_{n+1} \geq s_n$$
Per il teorema dell'esistenza del limite di una funzione monotona quindi esiste $\lim_{n\to+\infty}s_n$ ed è o finito o $+\infty$ in base se $\{s_n\}$ è limitata oppure no. In ogni caso $$\lim_{n\to+\infty}s_n=\underset{n\in\mathbb N}\sup\{s_n\}$$
Possiamo quindi affermare che una serie $\sum_{n=0}^\infty a_n$ a termini non negativi è convergente o è divergente a $+\infty$. Essa converge se e solo se la successione delle somme parziali $n$-esime è limitata.

### [[criterio del confronto]]
### [[criterio della radice]]
### [[criterio del rapporto]]


## serie a termini di segno variabile
>[!def]
>Una serie $\sum a_n$, si dirà assolutamente convergente se converge la serie (a termini non negativi) $\sum |a_n|$

Vale il seguente il teorema
>[!teorema]
>Se la serie $\sum a_n$ converge assolutamente, allora converge


Un caso particolare di serie a segno variabile sono le serie a segni alterni per le quali vale il [[criterio di Leibniz]]
