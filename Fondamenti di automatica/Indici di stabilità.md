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
\draw[smooth,domain = -2:0,variable =\x] plot ({\x},{-\x*\x});
\end{tikzpicture}
\end{document}
```

Supponiamo che $L(j\omega)$ intersechi il semiasse $\mathbb{R}$ cioè che $\exists$ finito $\omega_{w}$ tale che $\angle L(j\omega_{u}) = -180^o$

$\alpha =$distanza tra l'intersezione di $L(j\omega)$ con $\mathbb{R}$ e $\Im$
$\implies k_{\omega} := \frac{1}{\alpha}$

Interpretazione AC AS a patto che il guadagno di L non aumenti di un fattore maggiore di $k$