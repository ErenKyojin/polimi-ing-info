```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (6,0) to[short, i>^=$i_2$] (5,0) to (2,0) to[american current source, l=$A_{nr}$] (2,-3) to (6,-3) to [open, v=$v_2$] (6,0);
\draw (4,0) to [R=$\frac{1}{G_{nr}}$] (4,-3);
\end{tikzpicture}
\end{document}
```

>[!def]
>Dato un bipolo adinamico, non impressivo, lineare affine, se ammette base di definizione tensione lo si definisce [[Circuito di Norton]] 
>È il duale del [[Circuito di Thevenin]], dal quale si passa attraverso le seguenti formule
>$$ G_{nr} = \frac{1}{R_{th}}\qquad A_{nr} = -\frac{E_{th}}{R_{th}} $$


# Circuito equivalente di Northon
Per ricavare il circuito equivalente di thevenin imponiamo tra i due morsetti AB una [[tensione]] $v$ , ricaviamo quindi la $G_\text{nr}$ e la $E_\text{nr}$  
E abbiamo quindi la formula della [[corrente]] ai morsetti AB $i = G_\text{nr}v + A_\text{nr}$. Affinche un circuito abbia l'equivalente di Northon deve necessariamente ammettere la [[base tensione]]

# Circuito di Northon in [[regime sinusoidale]]
$\overline{i} = Y_\text{nr}(j\omega)\overline{v} + \overline{A}_\text{nr}(j\omega)$

# ANKI

```anki
id: 1700409286104
deck: Elettrotecnica
---
Circuito di norton
===
Dato un bipolo adinamico, non impressivo, lineare affine, se ammette base di definizione tensione lo si definisce circuito di norton,
È il duale del Circuito di Thevenin, dal quale si passa attraverso le seguenti formule
$$ G_{nr} = \frac{1}{R_{th}}\qquad A_{nr} = -\frac{E_{th}}{R_{th}} $$
```

# ANKI

```anki
deck: Elettrotecnica
---
Circuito di norton in regime sinusoidale
===
$$ \bar{\imath} = Y_{nr} (j \omega) \bar{v} + \bar{A}_{nr}(j \omega) $$
il bipolo a cui si riferisce il circuito equivalente deve essere controllabile in base tensione
```
