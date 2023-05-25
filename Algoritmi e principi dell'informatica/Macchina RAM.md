---
aliases: 
creation date: 2023-05-02 10:43
modification date: 2023-05-02 10:43
---

```tikz
\usetikzlibrary{chains}
\begin{document}
\begin{tikzpicture}
\tikzstyle{tmtape} = [minimum size = 0.7cm, draw]
\tikzstyle{accum} = [minimum width = 1.2cm, minimum height = 0.7cm, draw]

%Nastro di lettura
\begin{scope}[start chain = 1 going right,node distance = -0.15mm,every node/.style = {tmtape}]
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1]{n};
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1]{...};
\end{scope}

%Macchina
\begin{scope}
 \node[]
\end{scope}

\end{tikzpicture}
\end{document}
```


