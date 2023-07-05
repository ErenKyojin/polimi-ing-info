---
aliases: 
creation date: 2023-07-05 18:36
modification date: 2023-07-05 18:36
---

## Legge

>[!legge] Legge di Faraday-Henry
>In un campo magnetico variabile, in ogni circuito viene indotta una forza elettromotrice (fem) uguale alla derivata rispetto al tempo del flusso magnetico attraverso il circuito col segno cambiato.
>
> $$ V_{fem} = - \frac{d}{dt} \Phi_{B} $$

## Generalizzazione

>[!legge]
>Un campo magnetico dipendente dal tempo comporta l'esistenza di un campo elettrico, tale che la circuitazione del campo elettrico lungo un percorso chiuso arbitrario è uguale ed opposta alla derivata rispetto al tempo del flusso magnetico attraverso una superficie avente per controno quel percorso


# Applicazione della legge di Faraday-Henry ai circuiti elettri

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}[]
\draw[thick] (0,3) to[american, V,v=$E_0$] (0,0)
	   to [short] (4,0)
	   to [R, l=$R_2$, v=$V_2$] (4,3)
	   to [R, l=$R_1$, v=$V_1$, i^<= $I$] (0,3);
\path[ultra thick, -latex] (-.5,2.5) edge[bend right] node[left]{$V_{fem}$} (-.5,.5);
\end{tikzpicture}
\end{document}
```

Considerando il circuito qui sopra è possibile scrivere la KVL:
$$ V_{1} + V_{2} - E_{0} = - \oint_{\gamma} \bar{E} \cdot \d \bar{l} = 0 $$
Essendo $\frac{d}{dt} \int _{S} \! B \cdot \hat{u}_{N} \mathrm{d}S = 0$ in quanto $\bar{B}$ è nullo. Quindi
$$ V_{1} + V_{2} = E_{0} $$
Ma $V_{fem} = -E_{0}$, $V_{1} = R_{1} I$, $V_{2} = R_{2}I$, quindi il generatore di tensione (o la forza) induce una corrente di maglia $I = \frac{E_{0}}{R_{1} + R_{2}}$.
È altresì evidente che se la forza elettromotrice si spegne, cioè si rimuove le pila, non si avrà alcuna corrente circolante nella maglia.

Se togliamo la tensione e immergiamo il circuito in un campo magnetico $\bar{B}(t)$ variabile nel tempo la cui direzione sia uscente dal foglio e perpendicolare ad esso.
Il flusso di $\bar{B}(t)$ attraverso la superficie delimitata dalla spira di area $S$, sia $\Phi_{B}(t) = B(t)S$. Siccome

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}[]
\draw[thick] (0,3) to[open, v_> = $\frac{d}{dt}\Phi_B$, voltage shift = .5] (0,0)
	   to [short] (4,0)
	   to [R, l=$R_2$, v=$V_2$] (4,3)
	   to [R, l=$R_1$, v=$V_1$, i^<= $I$] (0,3);
\draw[thick] (0,3) to (0,0);
\foreach \x in {1,...,3} {
	\foreach \y in {.5,1,1.5,2} {
		\node[red] at (\x,\y){$\bullet$};
	}
}
\node[red] at (4,4){$\bar{B}$};
\end{tikzpicture}
\end{document}
```
