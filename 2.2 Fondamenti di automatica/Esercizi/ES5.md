---
aliases: 
creation date: 2023-03-20 12:37
modification date: 2023-03-20 12:37
---

# 11
```tikz
\usepackage{amsfonts}
\begin{document}
\begin{tikzpicture}[auto]
\draw[->] (0,0) -- (2,0)node[above]{$\mathbb{R}$};
\draw[->] (0,0) -- (0,2)node[left]{$\mathbb{I}$};
\draw[->] (0,0) arc (-180:0:.5);
\node at (2,2){A};
\end{tikzpicture}
\begin{tikzpicture}[auto]
\draw[->] (0,0) -- (2,0)node[above]{$\mathbb{R}$};
\draw[->] (0,0) -- (0,2)node[left]{$\mathbb{I}$};
\draw[->] (0,0) arc (180:0:.5);
\node at (2,2){B};
\end{tikzpicture}
\begin{tikzpicture}[auto]
\draw[->] (0,0) -- (2,0)node[above]{$\mathbb{R}$};
\draw[->] (0,0) -- (0,2)node[left]{$\mathbb{I}$};
\node at (2,2){C};
\draw[->] (-.5,-.8) arc (250:40:.5);
\end{tikzpicture}
\end{document}
```


```tikz
\usepackage{amsfonts}
\begin{document}
\begin{tikzpicture}[auto]
\draw[->] (0,0) -- (2,0)node[above]{$\mathbb{R}$};
\draw[->] (0,0) -- (0,2)node[left]{$\mathbb{I}$};
\draw[->] (-.5,-.5) arc (180:90:.5);
\node at (2,2){D};
\end{tikzpicture}
\begin{tikzpicture}[auto]
\draw[->] (0,0) -- (2,0)node[above]{$\mathbb{R}$};
\draw[->] (0,0) -- (0,2)node[left]{$\mathbb{I}$};
\draw[->] (-.5,0) arc (180:90:.5);
\node at (2,2){E};
\end{tikzpicture}
\begin{tikzpicture}[auto]
\draw[->] (0,0) -- (2,0)node[above]{$\mathbb{R}$};
\draw[->] (0,0) -- (0,2)node[left]{$\mathbb{I}$};
\draw[->] (1,0) arc (0:-360:.5);
\node at (2,2){F};
\end{tikzpicture}
\end{document}
```

$$
\begin{align}
&G_{1} = \frac{2}{s(1 + 5s)}  \\
&G_{2} = \frac{5}{1-s} \\
&G_{3} = \frac{10}{1 + 2s} \\
&G_{4} = -\frac{1}{1 + s} \\
&G_{5} = \frac{s}{(1 + 4s)^2} \\
&G_{6} = \frac{1}{s(1+s)^2}
\end{align}
$$

| DP  | G ?                                        |
| --- | ------------------------------------------ |
| A   | 3 G(0) $\Re>0$                              |
| B   | 2 polo dx, fase 0 -> 90                    |
| C   | 6 fase -90 -> -270                         | 
| D   | 1 fase -90 -> -180                         |
| E   | 4 G(0) reale < 0                           |
| F   | 5 G(0) = 0, $\angle^o G(j \infty) = -90^o$ |


