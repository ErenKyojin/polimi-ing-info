---
aliases: 
creation date: 2023-03-29 11:29
modification date: 2023-03-29 11:29
---

Prima di vedere il criterio dobbiamo studiare il [[diagramma di Nyquist]] di una FdT $G(s)$


> [!def]
> 
> Si consideri il sistema dinamico
> ```tikz
> \usetikzlibrary{arrows.meta}
> \begin{document}
> \begin{tikzpicture}
> \draw (-1,-.5) rectangle (1,.5);
> \node (o) at (0,0){$-WO$};
> \draw[-{Stealth[scale = 2]}] (1,0) -- (1.5,0) -- (1.5,-1) -- (-1.5,-1) -- (-1.5,0) -- (-1,0);
> \end{tikzpicture}
> \end{document}
> ```
> - Si tracci il [[diagramma di Nyquist|DN]] di L(s)
> - Sia $p_{D}$ o; numero di poli di $L(s)$ con parte reale positiva
> - Sia $N$ il numero di giri del DN di $L(s)$ attorno al punto $-1$ contatoi con segno positivo se antiorari e negativo se orari; se il DN di $L(s)$ passa per il punto -1 si dice che $N$ non è ben definito
> 
> criterio:
> $$
> \text{sistema in AC AS} \iff \text{N ben definito uguale a }p_{D}
> $$
> ### caso non ben definito:
> N non ben definito $\iff$ il DN di $L(s)$ passa per -1 $\implies \exists \bar{\omega}$ tale che $L(j\bar{\omega}) = -1$ e quindi $L(j\bar{\omega}) + 1 = 0$  e quindi il sistema in AC ha poli con Re = 0 $\implies$ non AS