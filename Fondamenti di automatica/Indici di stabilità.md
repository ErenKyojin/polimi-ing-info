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
\begin{tikzpicture}[scale = 2]
\draw[->] (-2,0) -- (1,0);
\draw[->] (0,-2) -- (0,.5);
\node(mu) at (-1,0){$\bullet$};
\node[above] at (mu){$1$};
\draw[dashed,blue,thick] (-1,0) arc (180:270:1);
\draw[smooth,domain = -2:0,variable =\x,red] plot ({\x},{-(2*\x+.5)*(\x+.5) + .25});
\node (B) at (-.95,-.35){$\bullet$};
\draw[pink] (0,0) -- (B);
\draw[pink] (.5,0) arc (0:-160:.5);
\draw[yellow]
\end{tikzpicture}
\end{document}
```

Frequenza cirtica $\omega_{c}$ quella per cui $|L(j\omega_{c})| = 1$
Fase critica $\varphi_{c} = \angle^o L(j\omega_{c})$ in rosa
Margine di fase
$\varphi_{m} = 180^o - |\varphi_{c}|$

Se $L(j\omega)$ è tutto dentro il cerchio unitario diremo che $\varphi_{m}$ è definito oppure è infinito