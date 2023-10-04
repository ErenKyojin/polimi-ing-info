---
aliases: generatore indipendente di corrente
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Bipolo con equazione caratteristica
$$ i = -a(t) $$
Il segno "$-$" deriva dalla convenzione degli utilizzatori, l'importante è mantenere l'equazione caratteristica concorde con la convenzione data.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) to [american current source, i_<=i,l=$a(t)$] (4,0);
\end{tikzpicture}
\end{document}
```

È chiaramente un componente non lineare, adinamico, tempo-variante e attivo, definito unicamente su base tensione

# ANKI

```anki
deck: Elettrotecnica
---
generatore di corrente
===
Il generatore di corrente è un bipolo con equazione caratteristica
$$ i = -a(t) $$
È un componente adinamico, tempo variante, non lineare, attivo e definito su base tensione
```
