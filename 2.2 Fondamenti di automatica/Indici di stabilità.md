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
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[->](-2,0) -- (1,0);
\draw[->](0,-2) -- (0,1);
\draw[smooth,domain = -3:0,variable =\x,red] plot ({\x},{-(\x+1)*(\x+1) + 1});
\draw[{Bar}-{Bar},thick,blue] (0,-.5) -- (-2.25,-.5) node[midway, below]{$\alpha$};
\end{tikzpicture}
\end{document}
```
In rosso L,
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
\draw[yellow, ultra thick] (-.5,0) arc (180:200:.5);
\end{tikzpicture}
\end{document}
```


Frequenza cirtica $\omega_{c}$ quella per cui $|L(j\omega_{c})| = 1$
Fase critica $\varphi_{c} = \angle^o L(j\omega_{c})$ in rosa
Margine di fase in giallo
$\varphi_{m} = 180^o - |\varphi_{c}|$

Se $L(j\omega)$ è tutto dentro il cerchio unitario diremo che $\varphi_{m}$ è definito oppure è infinito


Interpretazione grafica:

```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[->] (-2,0) -- (1,0);
\draw[->] (0,-2) -- (0,.5);
\node(mu) at (-1,0){$\bullet$};
\node[above] at (mu){$1$};
\draw[dashed,blue,thick] (-1,0) arc (180:270:1);
\draw[smooth,domain = -2:0,variable =\x,red] plot ({\x},{-(2*\x+.5)*(\x+.5) + .25});
\draw[smooth,domain = -3:0,variable =\x,blue] plot ({\x},{-(.5*\x+.5)*(\x+.5) + .25});
\end{tikzpicture}
\end{document}
```
L1 in rosso conduce ad AC AS, $\varphi_{m} > 0, k_{m} > 1$
L2 in blu conduce ad AC non AS, $\varphi_{m} < 0$

Se abbiamo $\varphi_{m} = 0$ e $k_{m} = 1$ si dice AC al limite di stabilità


Casi particolari (cerco, $p_{D} = 0$)

```tikz
\begin{document}
\begin{tikzpicture}
\draw(-2,0) -- (1,0);
\draw(0,-2) -- (0,.5);
\draw[smooth, domain = -2:0, variable = \x] plot ({\x}, {\x * cos deg (10*\x)});
\end{tikzpicture}
\end{document}
```


