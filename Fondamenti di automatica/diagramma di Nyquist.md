---
aliases: 
creation date: 2023-03-29 11:30
modification date: 2023-03-29 11:30
---

> [!def]
> È l'immagine secondo $G(\bullet)$ del [[percorso di Nyquist]] relativo a $G(s)$.
> Il diagramma di Nyquist è simmetrico rispetto all'asse $\mathbb{R}$ ed è fatto dal [[diagramma polare]] ...



Studio di una $F$ complessa razinale fatta $G(s) di mkv$ copmlessa $s$ lungo una curva chiusa $\Gamma$
```tikz
\begin{document}
\begin{tikzpicture}
\node at (0,0){\#todo};
\end{tikzpicture}
\end{document}
```
Domanda, la curva $\Delta$ circonda o no l'origine del suo piano $\mathbb{C}$? ovvero siamo nel caso a (si) o nel caso b (no)

$$G(s) = \frac{\dots (s-z)\dots}{\dots(s-p)\dots} \implies \angle G(s) =\dots + \angle (s - z) \dots - \angle(s-p) \dots$$

caso 1: $\Gamma$ circonda un polo $p$ di $G(s)$

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[blue, ->,thick] (0,0) ellipse[x radius =1,y radius = 1.5];
\draw[red, <-, thick] (4,0) ellipse[x radius = 1.5, y radius = 1];
\node (p) at (0,0){$\bullet$};
\node[below] at (p){$p$};
\draw[{Stealth[scale = 2]}-] (0.5,0) arc (-180:180:-.5); 
\end{tikzpicture}
\end{document}
```
caso 2: $\Gamma$ circonda in senso orario uno zero $Z$ di $G(s)$ allora $\Delta$ compie un giro O attorno all'origine del piano $\mathbb{C}$

caso 3: $\Gamma$ non circonda ne poli ne zeri di $G(s)$

Quindi il numero di giri antiorario che l'immagine $\Delta$ della curva divisa $\Gamma$ attraverso la F $G(\bullet)$
compie attorno all'origine del uso piano $\mathbb{C}$ è uguale al numero di poli di $G$ circondati de $\Gamma$ in senso orario meno il numero di zeri di $G$ circondati da $\Gamma$ in senso orario


>[!oss]
>Un giro orario = -1 giro antiorario e viceversa


Prendiamo ora come $\Gamma$ il percorso di Nyquist di $G(s)$, ne consegue che
$\implies\Gamma$ circonda il senso orario il semipiano destro
$\implies \Delta$ è il diagramma di Nyquist di $G(s)$

COnsideriamo un sistema retroazionato con FdT d'anello $L(s)$ e prendiamo
$$
G(s) = 1 + L(s)
$$
Allora $G = 1 + \frac{L_{n}}{L_{d}} = \frac{L_{n}+L_{d}}{L_{d}}$
$\implies$ poli di $G(s)$ = poli dell'anello aperto chiuso radici di $L_d$
$\implies$ zeri di $G(s)$ = poli dell'anello chiuso radici di $L_u + L_d$
$L = G - 1\implies$ numero di giri del DN di $G$ attorno all'origine = giri del DN di L attorno al punto $(-1,0)$

Conclusione

Il numero di giniri antiorari del DN di $G$ attorno all'origine è
= Numero di poli di $G$ circondati dal suo percorso di Nyquist in senso orario - Numero di zeri di $G$