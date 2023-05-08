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

$\omega_{n} = \omega_{s}/2$, detta [[frequenza di Nyquist]] è la massima $\omega$ rappresentabile dal campionamento a $\omega_{S}$

In un problema non patologico, alla Frequenza di Nyquist su $y$ ho $d_{r}$ attenuato, non ho $d_{a}$ e anche $w$ in parte attenuato in base al valore di risposta ($\omega_{c}$), il che mi va bene.

Quindi, piú $|L(j\omega_{N})|$ è piccolo, meno sia ha aliasing

Questo permette di scegliere $T_{s}$

>[!esempio]
>Voglio che $|L(j\omega_{N})| < 40 \dB$
>Progetto a TC:
> ```tikz
>\begin{document}
>\begin{tikzpicture}
>\draw[->] (0,0) node[above]{$0\ dB$} -- (6,0);
>\draw[red] (0,2) -- (1.5,1.5) -- (1.75,.5) -- (4,-.5) -- (5,-2);
>\draw[pink,->] (0,-1) -- (4.3,-1) -- (4.3,0) node[above]{$\omega_{N}$};
>\draw[pink, ->] (4.3,.5) -- (4.3,1) -- node[midway,above]{$\times 2$} (5.3, 1) -- (5.3,.45) node[below]{$\omega_{s}$};
>\end{tikzpicture}
>\end{document}
>```

#### Criterio 3
[[Sampling and holding]] ritardo di $T_{s} / 2 \implies$ non cambia $\omega_{c}$ ma riduce $\varphi_{m}$ di $\displaystyle\omega_{c} \frac{T_{s}}{2}$ radianti
- criterio $\omega_{c} \frac{T_{S}}{2} < tot$
- oppure se voglio $\varphi_{m} = \bar{\varphi_{m}}$
  Progetto a TC con $\varphi_{m} = \bar{\varphi}_{m} + \Delta$ e ottengo una certa $\omega_{_{c}}$ e poi sceglo $T_{s}$ in modo che $\omega_{c} \frac{T_{s}}{2}= \Delta$

E il ritardo dovuto al calcolo di $u^*(K)$? 

```tikz
\begin{document}
\begin{tikzpicture}[scale = 1.5]
	\draw[->] (-.5,0) -- (10.5,0);
	\foreach \x in {0,1,2,3,4,5,6,7,8,9,10}
		\draw (\x,0) -- ++ (0,.2);
	\draw (0,-.1) -- (0,-.2) -- (1,-.2)node[midway,below]{$T_s$} -- (1,-.1);
	
	\draw[red,thick] (0,0) -- (0,1) -- (.2,1) -- (.2,0);
	\draw[blue,thick] (0,1) -- (.5,1) -- (.5,0);
	\draw[pink,thick] (.5,1) -- (.7,1) -- (.7,0);
	
	\draw[red,thick] (1,0) -- (1,1) -- (1.2,1) -- (1.2,0);
	\draw[blue,thick] (1,1) -- (1.3,1) -- (1.3,0);
	\draw[pink,thick] (1.3,1) -- (1.4,1) -- (1.4,0);
	
	\draw[red,thick] (2,0) -- (2,1) -- (2.2,1) -- (2.2,0);
	\draw[blue,thick] (2.2,1) -- (2.3,1) -- (2.3,0);
	\draw[pink,thick] (2.3,1) -- (2.4,1) -- (2.4,0);
	
\end{tikzpicture}
\end{document}
```
In blu C (comput) calcolo controllo
In rosso R (read) lettura ingressi
In rosa W (write) scrittura uscite (DAC)

Quindi casua salita rossa, ritardo di calcolo segmento in alto e effetto in uscita

1. $T_{c}$ variabile ma comunque $\ll T_{s} \implies T_{c}$ trascurabile
2. $T_{c}$ non trascurabile rispetto a $T_{s}$ ma (quasi costante)
3. $T_{c}$ variabile e non trascurabile rispetto a $T_{s}$233

Negli ultimi due casi possiamo considerare il caso pessimo $T_{C} = T_{s}$, di piú non può essere.
#todo