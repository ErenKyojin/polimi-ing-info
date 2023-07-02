---
aliases: 
creation date: 2023-06-08 14:43
modification date: 2023-06-08 14:43
---
L'analisi nodale è una algoritmo per risolvere circuiti basato sulle equazioni di Tableau, attraverso le quali avevamo scritto il sistema
$$ \begin{cases}
A\mathbf{i} = \mathbf{0} \\
v - A^T \mathbf{u} = 0
\end{cases} $$
Con $l + n - 1$ equazioni linearmente indipendenti e $2l + n - 1$ incognite con $n$ numero di nodi e $l$ numero di lati, vediamo quindi l'algoritmo, che si basa sul ridurre le equazioni di Tableau e ricavare $n - 1$ potenziali di nodo del circuito e ricavarne tensioni e correnti di lato incognite:

0. Scegliere un nodo di riferimento per il potenziale, chiamato nodo 0, con potenziale $u_{0}$ scelto arbitrariamente nullo.
1. Si ricavano tutte le tensioni di lato del circuito attraverso le KVL 1. Sfruttiamo quindi l'equazione $v - A^T \mathbf{u} = \mathbf{0}$
2. Attraverso le equazioni costitutive dei componenti, assunti controllabili in tensione, si ricavano le correnti di lato in funzione del potenziale dei nodi
3. Si risolvono le KCL in funzione dei potenziali di nodo'

L'ultimo passo è la risoluzione di un sistema di $n - 1$ equazioni in $n - 1$ incognite (potenziali di nodo)
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}[]
\draw[thick] (0,0) to[short] (9,0)
  to[american current source,invert,l_=$I_{s_2}$,I=$i_4$,v^=$v_4$] (9,4)
  to[I<=$i_1$, R, l_=$R_3$] (0,4)
  to[american current source,invert,l_=$I_{s_1}$] (0,0)
  ;
\draw (3,0) to[R,l_=$R_0$,I=$i_0$] (3,4);
\draw (6,0) to[R,l_=$R_2$] (6,4);
\draw[purple,thick] (4.5,0) circle (4.75 and .25) node[below right = 5mm]{0};
\node (1) at (3,4){$\bullet$};
\node (2) at (6,4){$\bullet$};
\node[above] at (2){2};
\node[above] at (1){1};

\end{tikzpicture}
\end{document}
```
