---
aliases: forza gente
creation date: 2023-03-23 15:15
modification date: 2023-03-23 15:15
---

>[!def]
>Si dice forza risultante o totale agente su di un [[punto materiale]] dotato di [[quantità di moto]] 
>$\vec{p}$ la grandezza vettoriale
>$\vec{F} = \frac{d\vec{p}}{dt}$
>
>```tikz
>\begin{document}
>\begin{tikzpicture}[scale = 2]
>\draw[thick] (0,0) arc (60:120:5);
>\draw[->,thick] (-3.8,.5)node{$\bullet$} -- (-3,.75) node[midway,above]{$\vec{p}_{1}$};
>\draw[->,thick] (-1,.43)node{$\bullet$} -- (0,.1)node[midway,above]{$\vec{p}_{2}$};
>\node (o) at (2,1){$\bullet$};
>\draw[->,thick] (o.center) -- (3,1.5)node[midway,above]{$\vec{p}_{1}$} node(p1){};
>\draw[->,thick] (o.center) -- (2.5,.7) node[midway,below]{$\vec{p}_{2}$} node(p2){};
>\draw[->,thick] (p1.center) -- (p2.center) node[midway,right]{$d\vec{p}$};
>\end{tikzpicture}
>\end{document}
>```

>[!oss]
>come $\vec{a}$ anche $d\vec{p}$ e quindi $\vec{F}$ è sempre diretto verso la concavità della [[traiettoria]].

>[!oss]
>La [[forza]] è una misura dell'entità dell'interazione è rappresentata da un vettore applicato, cioè possiede sempre un punto di applicazione, oltre che modulo direzione e verso

>[!oss]
>Spesso non conosciamo direttamente la forza risultante agente su di un punto materiale, ma spesso sappiamo che esso è soggetto a diverse interazioni. Da un punto di vista operativo è sempre possibile definire per ognuna di queste interazioni un vettore forza corrisponde. Infatti se compiamo esperimenti sul puno materiale in modo da far agire di volta in volta solo una di tali interazioni, essa sarà di volta in volta la forza risultante, e potremo definirla operativamente come la $i$-esima forza $\vec{F}_{i}$, responsabile della variazione infinitesima $i$-esima della quantità di moto del punto materiale $d\vec{p}_{i}$, cioè
>$$ \vec{F}_{i} \equiv \frac{d\vec{p}_{i}}{dt}  $$

>[!oss]
>Tale definizione stabilisce un legame lineare tra la forza considerata (causa) e la variazione di quantità di moto da essa prodotta (effetto), indipendentemente dalla natura di tale forza. Questo semplicemente perchè la [[derivata|derivazione]] è un operazione lineare. Dunque alle forze si applica il [[principio di sovrapposizione]] degli effetti
>