
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) to [R=$R_{th}$,i>^=$i_1$] (-4,0) to [american voltage source,l_=$E_{th}$] (-4,-3) to (0,-3) to [open, v=$v_1$] (0,0);
\end{tikzpicture}
\end{document}
```
>[!def]
>Dato un bipolo adinamico, non impressivo, lineare affine, se ammete la base di definizione corrente lo si definisce circuito di Thevenin.
>È il duale del [[Circuito di Norton]], e le equazioni per ricavare l'equivalente di thevenin sono
>$$ R_{th} = \frac{1}{G_{nr}}\qquad E_{th} = - \frac{A_{nr}}{G_{nr}} $$

# Circuito equivalente di thevenin
Per ricavare il circuito equivalente di Thevenin imponiamo tra due morsetti una [[corrente]] $i$, ricaviamo quindi la $R_{\text{th}}$ e la $E_{\text{th}}$
E abbiamo quindi la formula della differenza di potenziale ai morsetti AB $v = R_{\text{th}}A + E_{\text{th}}$. Affinche un circuito abbia l'equivalente di Thevenin deve necessariamente ammettere la [[base corrente]].

# Circuito di thevenin in [[regime sinusoidale]]
L'[[equazione costitutiva]] del circuito equivalente di Thevenin nel [[Analisi 1/Funzioni/dominio|dominio]] dei [[fasori]] diventa:
$$\overline{v} = Z_\text{th}(j\omega)\overline{i} + \overline{E}_\text{th}(j\omega)$$

# ANKI
```anki
id: 1700212222367
deck: Elettrotecnica
---
Circuito di Thevenin
===
Dato un bipolo adniamico, non impressivo, lineare affine, se ammette la base di definizione corrente lo si definisce circuito di Thevenin.
È il duale del circuito di norton, le equazioni per ricavare l'equivalente di thevenin sono
$$ R_{th} = \frac{1}{G_{nr}}\qquad E_{th} = - \frac{A_{nr}}{G_{nr}} $$
```
