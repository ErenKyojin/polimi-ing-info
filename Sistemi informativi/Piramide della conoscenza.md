---
aliases:
  - DIKW
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) -- (8,0) -- (4,8) -- (0,0);
\draw (1,2) -- (7,2);
\draw (2,4) -- (6,4);
\draw (3,6) -- (5,6);
\draw[-latex,thick] (-1,.5) -- (-1,7.5);
\draw[latex-,thick] (9,.5) -- (9,7.5);
\node[scale = 1.25] at (4,.2){Datas};
\node[scale = 1.25] at (4,2.2){Information};
\node[scale = 1.25] at (4,4.2){Knowledge};
\node[scale = 1.25] at (4,6.2){Wisdom};
\node[rotate=90, scale = 1.2] at (-1.6,3.5){aggregazione};
\node[rotate=90, scale = 1.2] at (-1.3,3.5){sintesi};
\node[rotate=-90, scale=1.2] at (9.3,3.5){automazione};
\end{tikzpicture}
\end{document}
```

>[!esempio]
>Temperatura della stanza
>**Datas**: 27 gradi, non ci viene fornito nient'altro (unità di misura qual'è?)
>**Information**: 27 gradi celsius alle ore 15
>**Knowledge**: se vogliamo estrarre delle informazioni ci dobbiamo affidare ad un data wharehouse ad esmpio
>**Wisdom**: avere l'esperienza per poter usare la conoscenza

![[polimi-ing-info/Probabilità e statistica/Dati#Sistemi informativi]]
![[informazione]]
![[conoscenza]]
![[saggezza]]

Principalmente lavoriamo nel corso sulle informazioni (che vengono gestite dai processi) e sulla conoscenza


```anki
id: null
deck: Sistemi informativi
---
Piramide della conoscenza
===
La piramide della conoscenza è un custrutto per capire come si evolvono i dati.

È una piramide con, dalla base alla cima:
- i dati
- l'informazione
- conoscenza
- saggezza
```
