---
aliases: 
creation date: 2023-05-02 10:43
modification date: 2023-05-02 10:43
---

```tikz
\usetikzlibrary{chains}
\begin{document}
\begin{tikzpicture}
\tikzstyle{tmtape} = [minimum size = 0.5cm, draw]
\tikzstyle{accum} = [minimum width = 1.5cm, minimum height = 0.7cm, draw]

%Nastro di lettura
\begin{scope}[start chain = 1 going right,node distance = -0.15mm,every node/.style = {tmtape}]
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1] (n) {n};
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1]{...};
\end{scope}

%Macchina
\begin{scope}
 \node[minimum width = 4cm, minimum height = 2cm,draw,ultra thick] (prog) at (3,-3) {programma cablato};
 \node[minimum width = 2cm,minimum height = 1cm,draw,ultra thick,align = center] 
at (-2,-3) (PC) {program \\ counter};
 \node[minimum width = 2cm,minimum height = 1cm,draw,ultra thick, align = center] at (8,-3) (ALU) {Unità \\ aritmetica};
\end{scope}

%Accumulatore
\begin{scope}[start chain = 2 going down, node distance = -0.15mm,every node/.style = {accum}, shift ={(11,0)}]

\node[on chain = 2] (0) {};

\end{scope}

\draw[latex-latex,ultra thick] (PC) -- (prog);
\draw[latex-latex,ultra thick] (prog) -- (ALU);
\draw[-latex] (prog.north) .. controls(4, -1) and(1, -1.2) .. (n.south);

\end{tikzpicture}
\end{document}
```



