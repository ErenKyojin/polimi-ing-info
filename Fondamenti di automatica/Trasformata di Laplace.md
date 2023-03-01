## Definizione

Dato un segnale $v(t)$ definito per $t \geq 0$ (o nullo per $t < 0$), se ne definisce la trasforrmata di Laplace (TDL) come:
 $$
V(s) = \mathcal{L}[v(t)] = \int _{0}^{\infty} v(t)e^{-st} \, dt\qquad s, V(s) \in \mathbb{C} 
$$
L'antitrasformata è
$$
v(t) = \mathcal{L}^{-1}[V(s)] = \frac{1}{2\pi j}\int_{\alpha - j \infty}^{\alpha + j\infty} V(s)e^{st}\, ds 
$$
>[!oss]
>è un [[integrale]] complesso, dobbiamo dire su che linea ci muoviamo, ossia $\alpha$
>
> ```tikz
> \usepackage{amsfonts}
>\begin{document}
>\begin{tikzpicture}[scale = 2]
>\draw[->] (-1,0) -- (2,0)node[above]{$\mathbb{R}$};
>\draw[->] (0,-1) -- (0,2) node[right]{$\mathbb{I}$};
>\draw[->, red,thick] (1,-1) -- (1,1.5) node[below right]{$\alpha$};
>\draw[red] (1,-1)-- (1,2);
>\end{tikzpicture}
>\end{document}
>```
>In rosso alpha col percorso di percorrenza

## Esempi notevoli di TDL

> [!Esempio]
> 
> $$
> v(t) = \text{sca}(t) := \begin{cases}
> 1\quad &t \geq 0 \\
> 0 &t < 0
> \end{cases}
> $$
> ```tikz
> \begin{document}
> \begin{tikzpicture}
> \draw[->](-2,0) -- (2,0);
> \draw[red](-2,0) -- (0,0);
> \draw[red](0,1) -- (2,1);
> \draw[->] (0,0) -- (0,2);
> \end{tikzpicture}
> \end{document}
> ```
> $$
> \mathcal{L}(\text{sca(t)}) = \int _{0}^\infty \text{sca}(t) e^{-st}\, dt = \frac{1}{s}
> $$

> [!esempio]
> $$
> v(t) = \text{imp}(t)\qquad \begin{cases}
> \text{imp}(t) = 0\quad \forall t \neq 0 \\
> \int _{-\infty}^{+\infty} \text{imp}(t) \, dt = 1 
> \end{cases}
> 
> $$
> ```tikz
> \begin{document}
> \begin{tikzpicture}[scale = 2]
> \draw[->] (-2,0) -- (2,0);
> \draw[red] (-2,0) -- (0,0);
> \draw[red] (0,0) -- (0,1);
> \draw[red] (0,1) -- (0,1.2)node[above]{$\frac1\varepsilon$};
> \draw[red] (0,1.2) --(.2,1.2);
> \draw[red] (.2,1.2) -- (.2,0)node[below]{$\varepsilon$};
> \draw[red] (.2,0) -- (2,0);
> \end{tikzpicture}
> \end{document}
> ```
> con la cima $\frac{1}{\varepsilon}$, è evidente che per $\varepsilon \to 0$ è un impulso
> $$\begin{align}
> \mathcal{L}[\text{imp}(t)] &= \lim_{ \varepsilon \to 0 }\mathcal{L}[f_{\varepsilon}(t)] = \lim_{ \varepsilon \to 0 } \int _{0}^\infty e^{-st} \, dt = \lim_{ \varepsilon \to 0 } \int _{0}^{\varepsilon} \frac{1}{\varepsilon}e^{-st} \, dt = \lim_{ \varepsilon \to 0 } \left[ \frac{e^{-st}}{-s\varepsilon} \right]_{0}^{\varepsilon} = \\
> &= \lim_{ \varepsilon \to 0 } \left( \frac{e^{-s\varepsilon}}{-s\varepsilon} - \frac{1}{-s\varepsilon}  \right) = \lim_{ \varepsilon \to 0 } \frac{1-e^{-s\varepsilon}}{s\varepsilon} = \lim_{ \varepsilon \to 0 } \frac{se^{-s\varepsilon}}{s} = 1   
> \end{align}   $$
> Sfruttando [[Teorema di de l'Hospital]]
> 


$$
v(t) = e^at\quad t \geq 0, \quad\text{equivalentemente}\quad v(t) = e^{at}\text{sca}(t)
$$

$$
\mathcal{L}[v(t)] = \mathcal{L}[e^{at}\text{sca}(t)]= \int _{0}^{\infty} \, dx 
$$