---
aliases: 
creation date: 2023-05-25 10:15
modification date: 2023-05-25 10:15
---

Se $L$ è accettato da una MT M a k nastri con complessità $S_{M}(n)$ per ogni $c > 0$  ( e $c \in \mathbb{R}$) si può costruire una MT $M'$ a $k$ nastri con complessità $S_{M}(n) < cS_{M}(N)$

```tikz
\usetikzlibrary{chains}
\begin{document}
\begin{tikzpicture}
\tikzstyle{every path}=[very thick]
\tikzstyle{tmtape}=[draw,minimum size = 0.7cm]

\begin{scope}[start chain = 1 going right, node distance = -0.15mm,every node./style={tmtape}]
\node[on chain = 1, tmtape] {};
\node[on chain = 1, tmtape] {};
\node[on chain = 1, tmtape] {};
\node[on chain = 1, tmtape] {$a_1$};
\node[on chain = 1, tmtape] {$a_2$};
\node[on chain = 1, tmtape] {};
\node[on chain = 1, tmtape] {$a_i$};
\node[on chain = 1, tmtape] {};
\node[on chain = 1, tmtape] {$a_r$};
\node[on chain = 1, tmtape] {$b_1$};
\node[on chain = 1, tmtape] {$b_2$};
\node[on chain = 1, tmtape] {}
\end{scope}
\end{tikzpicture}
\end{document}
```
