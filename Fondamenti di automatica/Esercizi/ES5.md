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
&G_{1} = \frac{2}{s(1 + 5s)} \\
	
\end{align}
$$


