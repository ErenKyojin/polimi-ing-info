---
aliases: 
creation date: 2023-03-22 14:36
modification date: 2023-03-22 14:36
---

# 1
Costruire una macchina di turing a k nastri che riconosca $\mathcal{L} = \left\{ w \in \left\{ a,b,c \right\}^* | \#_{a}(w)=\#_{b}(w) = \#_{c}(w)\right\}$
k = 3

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\newcommand{\bc}{\cancel{b}}
\begin{tikzpicture}[every node/.style={scale=1.2},scale = 4,node distance = 6cm,on grid, auto]
\node(q0)[state,initial]{$q_0$};
\node(q1)[state, right = of q0]{$q_1$};
\node(q2)[state, below right = of q1,accepting]{$q_2$};
\path[->](q0) edge node[above] {$bc,bc,bc,bc|bc,bc,bc(s,l,l,l)$} (q1) 
		(q1) edge node {$bc,z0,z0,z0|z0,z0,z0(s,s,s,s)$} (q2)
		(q0) edge[bend right] node[below=1cm]{$bc,z0,z0,z0|z0,z0,z0,z0(s,s,s,s)$} (q2)
		(q0) edge[loop above] node[above=2cm]{$a,bc,bc,bc|x,bc,bc,(r,r,s,s)$} 
		node[above=1cm] {$b,bc,bc,bc|bc,x,bc,(r,s,r,s)$}
		node[above]{$c,bc,bc,bc|bc,bc,x,(r,s,s,r)$}
		(q0)
		(q0) edge[loop below] node[below left]{$a,z0,z0,z0|z0,z0,z0(s,r,r,r)$}
		node[below = 1cm, left]{$b,z0,z0,z0|z0,z0,z0(s,r,r,r)$}
		node[below = 2cm,left]{$c,z0,z0,z0|z0,z0,z0(s,r,r,r)$}(q0)
		(q1) edge[loop above] node[above]{$bc,x,x,x|x,x,x,(s,l,l,l)$} (q1);
\end{tikzpicture}
\end{document}
```






# 3
Disegno una macchina di turing a 1 nastro che ha in inuput due naturali e stampa in output il loro prodott, tutto in base 1, i naturali sono separati da un *.

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[every node/.style={scale=1.5}, node distance = 3cm]
\node(q0)[state,initial]{$q0$};
\node(q1)[state, right = of q0]{$q1$};
\node(q2)[state,right=of q1]{$q2$};
\node(q3)[state,right=of q2]{$q3$};
\node(q4)[state,below = of q1]{$q4$};
\path[->] (q0) edge node[above]{$*\_|\_(r,s)$} (q1)
	(q1) edge node[below] {$1,\_|\_,(s,l)$}(q2)
	(q2) edge node {}(q3)
	(q3) edge[bend right] node {}(q1)
	(q1) edge node {}(q4)
	(q0) edge node {}(q4)
	(q0) edge[loop above] node{} (q0)
	(q2) edge[loop below] node{} (q2);
\end{tikzpicture}
\end{document}
```
