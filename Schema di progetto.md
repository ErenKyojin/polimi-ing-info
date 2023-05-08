---
aliases: 
creation date: 2023-05-08 11:05
modification date: 2023-05-08 11:05
---

#todo 

Nel progetto a TC quando è noto che il regolatore dovrà essere realizzat con tecnologia digitale (praticamente sempre), si tiene conto di di [[Sampling and holding]] tramite un ritardo in serie alla FdT d'anello e di entità $T_{s}/2$.

#### Criterio 1:
Quantifico la velocità di risposta del sistema di campionamento $\implies$ piú $\omega_{c}$ è grande piú il segnale campionato $y(t)$ conterrà componnenti di alta frequenza

Facciamo allora al $F$ di campionamento
$$ \omega_{s} = \frac{2\pi}{T_{s}} $$
Proporzionale a $\omega_{c}$, ossia
$$ \omega_{c} = K\omega_{c}\qquad K \approx 10 \% 50 $$

#### Criterio 2:
```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex] (0,0) -- (10,0)node{$omega$};

\end{tikzpicture}
\end{document}
```