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
\draw[-latex] (0,0) node[left]{$0\ dB$} -- (10,0)node[right]{$\omega$};
\draw[red] (0,1) node[left]{$|L|$} -- (10,-1);
\draw[blue] (0,0) node[below]{$|T|$} -- (5,0) -- (10,-1);
\draw[green] (0,-1) node[left]{$|S|$} -- (5,0) -- (10,0);
\node[above] at (5,0) {$\omega_c$};
\draw[ultra thick, yellow, opacity = 0.4] (0,0) -- (3,0);
\draw[ultra thick, purple, opacity = 0.4] (7,0) -- (10,0);
\draw[ultra thick, pink, opacity = 0.7] (0,-3) -- (10,-3);
\end{tikzpicture}
\end{document}
```


In giallo le componenti di $d_{a}$
in viola le componenti di $d_{r}$
ed in rosa le componenti di $w$

Su $y$ (segnale campionato) avrò allora:
- Campionamento di $d_{s}$ e $d_{r}$ attenuato
- Campionamento di $w$ 'lente' inseguite e "veloci" attenuate

$\omega_{n} = \omega_{s}/2$, detta frequenza di Nyquist è la massima $\omega$ rappresentabile dal campionamento a $\omega_{S}$

In un problema non p