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
		node[below = 1.6cm,left]{$c,z0,z0,z0|z0,z0,z0(s,r,r,r)$}(q0)
		(q1) edge[loop above] node[above]{$bc,x,x,x|x,x,x,(s,l,l,l)$} (q1);
\end{tikzpicture}
\end{document}
```






# 3
Disegno una macchina di turing a 1 nastro che ha in inuput due naturali e stampa in output il loro prodott, tutto in base 1, i naturali sono separati da un *.

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[every node/.style={scale=1.5}, node distance = 3cm,scale = 2]
\node(q0)[state,initial]{$q_0$};
\node(q1)[state, right = of q0]{$q_1$};
\node(q2)[state,right=of q1]{$q_2$};
\node(q3)[state,right=of q2]{$q_3$};
\node(q4)[state,below = of q1,accepting]{$q_f$};
\path[->] (q0) edge node[above]{$*\_|\_(r,s)$} (q1)
	(q1) edge node[below] {$1,\_|\_,(s,l)$}(q2)
	(q2) edge node[below] {$1,z_0|z_0,(s,r)$}(q3)
	(q3) edge[bend right] node[above] {$1,\_|\_,(s,s)$}(q1)
	(q1) edge node[right] {$\_,\_|\_,(s,s)$}(q4)
	(q0) edge[bend right] node[left] {$*,z_0|z_0,(s,s)$}(q4)
	(q0) edge[loop above] node[above]{$1,z_0|z_0,(s,r)$} node[above = 1cm]{$1,\_|1,(r,r)$}(q0)
	(q2) edge[loop below] node{$1,1|1,(s,;)$} (q2)
	(q3) edge[loop below] node{$1,1|1,(s,r)$} (q3);
\end{tikzpicture}
\end{document}
```

>[!note]
>Provare a modificarla per stampare errore in caso di stringa non valida

# 4
Disegnare una macchina di turing a nastro singolo che riconosca
$$
\mathcal{L} = \left\{ a^{2^n} | n \geq 0 \right\} 
$$

>[!danger] 
>A nastro singolo diverso da a 1 nastro

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[every node/.style={scale=1.5},node distance=3cm,auto]
\node(q0)[state,initial, initial text = {}]{$q_0$};
\node(q1)[state, right = of q0]{$q_1$};
\node(q2)[state, right = of q1]{$q_2$};
\node(q3)[state, below = of q2]{$q_3$};
\node(q4)[state, right = of q2]{$q_4$};
\node(qf)[state,below = of q1, accepting]{$q_f$};
\path[->] (q0) edge node{$a|a,(r)$} (q1)
		(q1) edge node{$a|*,(r)$} (q2)
		(q2) edge[bend left] node{$a|a,(r)$} (q3)
		(q2) edge node{$\_|\_,(l)$} (q4)
		(q1) edge node{$\_,|\_.(s)$} (qf)
		(q3) edge[bend left] node{$a|*,(r)$} (q2)
		(q4) edge[bend right=100] node{$\_|\_,(r)$}(q0)
		(q2) edge[loop above] node{$*|*,(r)$}(q2)
		(q1) edge[loop above] node{$*|*,(r)$}(q1)
		(q4) edge[loop right] node{$a|a,(l)$} node[below right]{$*|*,(l)$}(q4)
		(q3) edge[loop below] node{$*|*,(r)$}(q3);
\end{tikzpicture}
\end{document}
```

[Simulatore di macchine di turing](https://www.turingmachinesimulator.com)

# 5

Disegnare una macchina di turing a 1 nastro che implementa:
$f : \left\{ a,b \right\}^* \to \left\{ a,b \right\}^*, w \mapsto w,w^R$
(anche 0 nastri)

---
Vediamo un po' di non determinismo
# 6
$\mathcal{L} = \left( ab + aba \right)^*$

Esempi di stringhe in $\mathcal{L}$ sono $\varepsilon, ab, aba, abab, ababa.abaab,\dots$

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[every node/.style={scale=1.2}, node distance = 4cm,auto]
\node(1)[state,initial,accepting]{$1$};
\node(2)[state, right = of 1]{$2$};
\node(3)[state, below right = of 1]{$3$};
\node(4)[state, left = of 3]{$4$};
\node(f)[state, below right = of 3]{$P$};
\path[->] (1) edge[bend left] node{a} (2)
		(1) edge[bend left] node{a} (3)
		(1) edge[bend left=50,thick] node{a} (f)
		(2) edge[bend left] node{b} (1)
		(2) edge[bend left] node{a} (f)
		(3) edge[bend left] node{b} (4)
		(3) edge[bend right] node{a} (f)
		(4) edge[bend left] node{a}(1)
		(4) edge[bend right] node{b} (f)
		(f) edge[loop below]node{a,b}(f);
\end{tikzpicture}
\end{document}
```
è non deterministico, la stessa stringa puó portarmi in piú posti, consideriamo come accettata una stringa che abbia almeno un percorso che finisce su uno stato di accettazione. P è il pozzo

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[auto]
\node(1)[state,initial]{$\{1\}$};
\node(23)[state,right = of 1]{$\{2,3\}$};
\node(14)[state,right = of 23]{$\{1,4\}$};
\node(123)[state, right = of 14]{$\{1,2,3\}$};
\node(23P)[state,right = of 123]{$\{2,3,P\}$};
\node(14p)[state, below = of 123]{$\{1,4,P\}$};
\node(123p)[state,below = of 14p]{$\{1,2,3,P\}$};
\node(P)[state,below = of 1]{$\{P\}$};
\path[->] (1) edge node{a} (23)
		(23) edge node{b} (14)
		(14) edge node {a} (123)
		(123) edge node{a} (23P)
		(23P) edge node{a} (P)
		(1) edge node{b} (P)
		(23) edge node{a} (P)
		(14) edge node{b} (P)
		(123) edge node{b}(14p)
		(14p) edge node{b}(P)
		(14p) edge node{a}(123p)
		(123p) edge[bend left] node{b} (14p)
		(123p) edge node {a}(23P)
		;
\end{tikzpicture}
\end{document}
```
# 7
$\mathcal{L}1 = \left\{ a^nb^n | n \geq 1 \right\} \cup \left\{ a^n b^{2n} | n \geq 1\right\}$ -> APND
$\mathcal{L}2 = \left\{ *a^nb^n | n \geq 1\right\} \cup \left\{ \$ a^nb^{2n}| n \geq 1 \right\}$ -> APD
$\mathcal{L}_{3} = \left\{ a^n*b^n | n \geq 1 \right\} \cup \left\{ a^n\$b^2n |n \geq 1 \right\}$ -> APD
$\mathcal{L}_{4} = \left\{ a^nb^n* | n \geq 1 \right\} \cup \left\{ a^nb^{2n}\$ | n \geq 1 \right\}$ -> APND

Questi linguaggi NON sono riconoscibili dagli automi a pila, il primo essendo la memoria distruttiva non puó riconoscere entrambi i tipi di linguaggi, col non determinismo si può ovviare al problema


```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}
\node(q0)[state,initial]{$q_0$};
\node(q1)[state, above right = of q0]{$a^nb^n$};
\node(q2)[state, below right= of q0]{$a^{n}b^{2n}$};
\end{tikzpicture}
\end{document}
```

....

# 8
$\mathcal{L}_{1} = \left\{ a^ib^ic^* i \geq 0 \right\} \cap \left\{ a^*b^j c^j |j \geq 0 \right\} = \left\{ a^nb^nc^n | n \geq 0 \right\}$
non è riconoscibile da un automa a pila non determinitico, serve la macchina di turing

Se $\mathcal{L}$ è regolare e $\mathcal{M}$ riconosciuto da un Automa a pila (non deterministico) come è fatto $\mathcal{L} \cap \mathcal{M}$?
Basta un automa a pila (eventualmente non deterministico)


Consideriamo $\mathcal{L} = a^+(bb)^+$ e $M = \left\{ a^nb^{3n} | n \geq 0 \right\}$

L'intersezione $\mathcal{L} \cap M$è 
$$
\{a^{2n}b^{6n} | n > 0
\}$$
simulando in parallelo entrambe le transizioni dei due rispettivi automi otteniamo un automa non deterministico a pila che accetta questo linguaggio


# 9

