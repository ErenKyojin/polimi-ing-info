---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

#todo 

>[!esempio]
> $Y =A \cdot B + C \cdot B$
>
>|     | 00  | 01  | 11  | 10  |
>| --- | --- | --- | --- | --- |
>| 00  | 0   | 0   | 1   | 0   |
>| 01  | 0   | 0   | 1   | 0   |
>| 11  | 1   | 1   | 1   | 1   |
>| 10  | 0   | 0   | 1   | 0    |


AND -> NAND negata
OR -> NOR negata

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\node[nand port] (Aand) at (0,1){};
\node[nand port] (Band) at (0,-1){};
\node[nor port] (nor) at (2,0){};
\draw (Aand.out) -|  (nor.in 1);
\draw(Band.out) -| (nor.in 2);
\end{tikzpicture}
\end{document}
```

#### Quali sono le funzioni logiche sintetizzabili con una sola PUN e PDN

Possiamo relaizzare solo funzioni che avranno $Y= 0$ (o $=1$) se e solo se almeno uno degli N ingressi è a 1 (oppure 0).


>[!esempio]
>$$Y = \overline{AB + C}$$
>
>in cmos conviene chiedersi quando l'uscità è 0: $\bar{Y}=AB + C$
>Quando ho $Y = 0$?
>Quando ho PDN ON (OFF PUN)
>
>```tikz
>\usepackage{circuitikz}
>\begin{document}
>\begin{tikzpicture}
>draw(0,0) to (4,0);
>\draw(3,0) to[nmos] (3,-2);
>\end{tikzpicture}
>\end{document}
>```