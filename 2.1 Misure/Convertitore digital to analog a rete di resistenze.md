---
aliases: DAC a rete di Resistenze, DAC a rete di R
creation date: 2024-06-28
---

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\node[op amp,thick] (OPAMP) at (11,-4.5){};
\node[sground,thick] (GND) at (9.5,-6){}; 
\draw[thick] (0,0) to (8,0);
\draw[thick] (2,0) to[R, label=$2^{n-1}$R] (2,-2) to[switch] (2, -4);
\draw[thick] (4,0) to[R, label=$2^{n-2}$R] (4,-2) to[switch] (4, -4);
\draw[thick] (6,0) to (6,-.5);
\draw[thick] (6,-4) to (6,-3.5);
\draw[thick] (8,0) to[R, label=$2^{0}$R] (8,-2) to[switch] (8, -4);
\draw[thick] (2,-4) to (OPAMP.-);
\draw[thick] (OPAMP.out) --++(2,0)node[right]{$v_f$};
\node[scale=2] at (6,-2){...};
\draw[thick] (GND.north) |- (OPAMP.+);
\draw[thick] (9,-4) to (9,-2) to[R,label=$R/2$] (13,-2) |- (OPAMP.out);
\draw[thick,red] (5,-4) ellipse[x radius=4cm,y radius= 5mm] node[left]{A};
\end{tikzpicture}
\end{document}
```
La prima resistenza, del valore di $2^{n-1}R$ farà passare la corrente minore e corrisponderà al LSB, mentre la corrente maggiore passerà per la resistenza di valore $R$ che descriverà il MSB.
Gli interruttori sono solitamente transistor, che modificheranno il proprio valore in base alla stringa di bit in ingresso (se il MSB è 1, si chiuderà l'interruttore sulla resistenza di valore R, se anche quello successivo è 1, si chiuderà anche l'interruttore accanto, e così via)

Si avrà sul supernodo
