---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) to [R=$R_{th}$,i>^=$i_1$] (-4,0) to [american voltage source,l_=$E_{th}$] (-4,-3) to (0,-3) to [open, v=$v_1$] (0,0);
\draw (6,0) to[short, i>^=$i_2$] (5,0) to (2,0) to[american current source, l=$A_{nr}$] (2,-3) to (6,-3) to [open, v=$v_2$] (6,0);
\draw (4,0) to [R=$\frac{1}{G_{nr}}$] (4,-3);
\end{tikzpicture}
\end{document}
```

Si ricava facilmente che
$$ v_{1}=R_{th}i_{1} + E_{th} $$
$$i_{2} = G_{nr} v_{2} + A_{nr}$$

Ricavando poi $v_{2} = \frac{i_{2}}{G_{nr}} - \frac{A_{nr}}{G_{nr}}$ e $i_{1} = \frac{v_{1}}{R_{th}} - \frac{E_{th}}{R_{th}}$ possiamo sfruttare il [[principio di equivalenza]] che i due bipoli compositi sono equivalenti (Funzionano quindi allo stesso modo in termini de tensione e corrente descrittiva) se
$$ R_{th} = \frac{1}{G_{nr}} \quad e \quad E_{th} = - \frac{A_{nr}}{G_{nr}} $$
ossia
$$ G_{nr} = \frac{1}{R_{th}}\quad e \quad A_{nr} = - \frac{E_{th}}{R_{th}} $$

Il risultato generale quindi è:

>[!legge]
>Dato un bipolo adinamico, non impressivo, lineare affine, se ammette base di definizione tensione lo si definisce [[Circuito di Norton]], se ammette la base corrente lo si definisce [[Circuito di Thevenin]]