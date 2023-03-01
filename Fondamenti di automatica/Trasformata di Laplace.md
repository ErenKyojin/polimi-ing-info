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

$$
v(t) = \text{imp}(t)\qquad \begin{cases}
\text{imp}(t) = 0\quad \forall t \neq 0 \\
\int _{-\infty}^{+\infty} \text{imp}(t) \, dt = 1 
\end{cases}

$$
```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[->] (-2,0) -- (2,0);
\draw[red] (-2,0) -- (0,0)

\end{tikzpicture}
\end{document}
```