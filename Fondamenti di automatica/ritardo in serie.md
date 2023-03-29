---
aliases: 
creation date: 2023-03-27 11:36
modification date: 2023-03-27 11:36
---

>[!tldr] Effetto di un ritardo in serie sulla RF e sulla sua raprpesentazione
>sappiamo che.
> $$
> \mathcal{L}[v(t - \tau)] = \mathcal{L}[v(t)]e^{-s\tau}
>$$
>quindi
>
>```mermaid
>graph LR
>	u("u(s)") --> G["G(s)"] --> y("y(t) = u(t-T)")
>```
>$G(s) = e^{-3\tau}$ trascendente
>
>Sistema con ritardo in serie 
> $$ G(s) = \frac{N(s)}{D(s)}e^{-s\tau} = G_{R}(s)e^{-s\tau} $$
> RF di $G(s)$
> $$ G(j\omega) = G_{R}(j\omega)e^{-j\omega \tau} $$
> $|G(j\omega)| = |G_{R}(j\omega)|$
> $\angle G(j\omega) = \angle G_{R}(j\omega) - \omega t$
> 
> - Effetto del ritardo sul DBM: massimo $|G| = |G_{R}|$
> - EFfetto del ritardo sul $DBF$:
> 	- Contributo additivo lineare in $\omega$
> 	- la scala delle $\omega$ è una scala logaritmica
>
> Quindi aspetto esponenziale
> 
> Effetto del ritardo sul diagramma polare

```tikz
\usepackage{amsfonts}
\begin{document}
\begin{tikzpicture}[scale = 2, every node/.style={scale = 1.5}]
\node (O) at (0,0){};
\draw[->,thick] (-3,0) -- (3,0)node[right]{$\mathbb{R}$};
\draw[->,thick] (0,-2) -- (0,2)node[right]{$\Im$};
\draw[red,thick,-] (0,0) arc (-180:0:1);
\draw[blue,thick] (O.center) -- (1.85,-.5) node(ome1){$\bullet$} node[right]{$G_R(j\omega)$};
\draw[blue,thick] (O.center) -- (.5,-1.85) node(jome1){$\bullet$} node[below right]{$G(j\omega)$};
\draw[blue,ultra thick] (.2,-.1) arc (-20:-60:0.25);
\draw[pink,thick] (O.center) -- (.3,-.74) node(ome2){$\bullet$} node[below]{$\omega_2$};
\draw[pink,thick] (O.center) -- (-.74,-.3) node(jome2){$\bullet$};
\draw[yellow, thick, <-] [domain=0:25.1327,variable=\t,smooth,samples=75]
    plot ({\t r}: {0.002*\t*\t});
\node[color = yellow] at (-1,1){$\angle G \to -\infty$};
\draw[<-] (jome2) to[out = 160] ++ (-2,0) node[below]{$G(j\omega_2)$};
\draw[<-] (ome2) to[out = 260] ++ (-1,-1) node[below]{$G_R(j\omega_2)$};
\end{tikzpicture}
\end{document}
```



