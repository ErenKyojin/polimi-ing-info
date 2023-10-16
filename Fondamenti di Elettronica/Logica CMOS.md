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
>\draw(0,0) to [short] (5,0) to [capacitor=C] (5,-2); 
>\node[nmos] (a) at (3,-1){};
>\node[nmos] (b) at (0,-.5){};
>\node[nmos] (c) at (0,-1.5){};
>\node[pmos] (d) at (-4,0){};
>\node[pmos] (e) at (-4.5,-2){};
>\node[pmos] (f) at (-3.5,-2){};
>\draw (0,0) -| (a.C);
>\node[left] at (a.B){C};
>\node[left] at (b.B){A};
>\node[left] at (c.B){B};
>\node[left] at (d.B){C};
>\node[left] at (e.B){A};
>\node[left] at (f.B){B};
>\draw (d.C) |- (e.E);
>\draw (d.C) |- (f.E);
>\draw(e.C) -| (c.E);
>\end{tikzpicture}
>\end{document}
>```

Se $C = 1$ per ogni valore di $A$ la PDN sarà sempre on e quindi la PUN sempre off
Se $C = 0$ PDN on in base ad AB

$AB = 00, AB = 01, AB=10$ PDN Off

$$ Y = 0 \begin{cases}
C = 1 \\
AB = 1
\end{cases} $$

La pull'up va aggiunta ed è complementare (C serie (A // B)) a sinistra.

Sostituisco la pull up con una resistenza

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\node[nmos] (a) at (-1,-1){};
\node[nmos] (b) at (-1,-2){};
\node[nmos] (c) at (1,-1.5){};
\draw (0,3) to [R] (0,0) -| (a.C);
\draw (0,0) -| (c.C);
\node[left] at (a){A};
\node[left] at (b){B};
\node[left] at (c){C};
\end{tikzpicture}
\end{document}
```



$\bar{Y} = AB \cdot C$

### ABC = 001
$$K_{eq,p}=K_{C}$$

### ABC = 110
$$K_{eq,p}=\frac{K_{A}K_{B}}{K_{A} + K_{B}}$$

### ABC = 111
$$K_{eq,p} = K_{C} + \frac{K_{A}K_{B}}{K_{A} + K_{B}}$$

Analogo il discorso sostituendo la pull down network


$$ K_{eq,n} = \begin{cases}
\dfrac{K_{C}K_{B}}{K_{C}+ K_{B}} &ABC = 010\\ 
\dfrac{K_{C}K_{A}}{K_{C} + K_{A}} &ABC = 100 \\
\dfrac{K_{C}(K_{A} + K_{B})}{K_{C} + K_{A} + K_{B}} &ABC = 000
\end{cases}
$$


|     | PUN | PND |
| --- | --- | --- |
| 000 | 1   | 0   |
| 001 | 0   |     |
| 010 | 1   |     |
| 011 | 0   |     |
| 100 | 1   |     |
| 101 | 0   |     |
| 110 | 0   |     | 
