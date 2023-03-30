---
aliases: margini di stabilità
creation date: 2023-03-30 18:02
modification date: 2023-03-30 18:02
---
tenendo a mente come detto per quanto riguarda il [[Grado di stabilità]] che $p_{D}=0$
### MARGINE DI MODULO $M_{M}$

$$
M_{m}
$$

### MARGINE DI GUADAGNO $k_{m}$

```tikz
\begin{document}
\begin{tikzpicture}
\draw[->](-2,0) -- (1,0);
\draw[->](0,-2) -- (0,1);
\draw[smooth,domain = -3:0,variable =\x,red] plot ({\x},{-(\x+1)*(\x+1) + 1});
\end{tikzpicture}
\end{document}
```

Supponiamo che $L(j\omega)$ intersechi il semiasse $\mathbb{R}^-$ cioè che $\exists$ finito $\omega_{w}$ tale che $\angle L(j\omega_{u}) = -180^o$

$\alpha =$distanza tra l'intersezione di $L(j\omega)$ con $\mathbb{R}^-$ e $\Im$
$\implies k_{m} := \frac{1}{\alpha}$

Interpretazione AC AS a patto che il guadagno di L non aumenti di un fattore maggiore di $k_{m}$
Se non c'è intersezione con $R^-\quad k_{m}= \infty$ 

### MARGINE DI FASE $\varphi_{m}$

```tikz
\begin{document}
\begin{tikzpicture}
\draw[->] (0,0) -- 

\draw[smooth, domain];

\end{tikzpicture}
\end{document}
```