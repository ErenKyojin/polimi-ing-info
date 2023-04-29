Fissato un sistema di riferimento nello [[spazio euclideo]] abbiamo visto che ad ogni punto possiamo associare in modo univoco le sue coordinate cosí come ad ogni vettore possiamo associare le sue componenti. Vogliamo determinare lunghezze di vettori ed  il coseno dell'angolo formato da due vettori in [[Funzioni|funzione]] delle coordinate dei vettori


## Angolo tra due vettori
Siano $\mathbf{v}$ e $\mathbf{w}$ due vettori dello spazio euclideo applicati ad un punto $O$ fissato. Le due semirette uscenti da $O$ e dirette come $\mathbf{v}$ e $\mathbf{w}$ dividono il piano $(0,\mathbf{v},\mathbf{w})$ in due parti: una convessa ed una concava. La parte convessa è l'angolo formato da $\mathbf{v}$ e $\mathbf{w}$ ed è identificato con un numero tra $[0,\pi]$
```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[->,thick] (0,0) node[below]{O} -- (-1.5,1) node[above]{$\mathbf{v}$};
\draw[->, thick] (0,0)  -- (2,0) node[right]{$\mathbf{w}$};
\draw (0.3,0) arc (0:147:0.3) node[above]{$\alpha$};
\end{tikzpicture}
\end{document}
```
$\mathbf{v}$ e $\mathbf{w}$ formano un angolo retto se le rette uscenti da $0$ è dirette come $\mathbf{v}$ e $\mathbf{w}$ formano 4 angoli uguali. Due vettori che formano un angolo retto si dicono [[Geometria e algebra lineare/Ortogonalità|ortogonali]]

le lunghezze sono semplicemente definite tramite i [[versore|versori]]


>[!teorema] Teorema di pitagora
>Se $\mathbf{v}$ e $\mathbf{w}$ sono vettori ortogonali allora:
> $$ ||\mathbf{v} + \mathbf{w}||^2 = ||\mathbf{v}||^2 + ||\mathbf{w}||^2 $$


con queste nozioni possiamo definire un [[sistema di riferimento cartesiano]], e quindi, sia $\left\{ \mathbf{i},\mathbf{j},\mathbf{k} \right\}$ una base autonormale dello spazio e $\mathbf{v}$ un vettore libero di coordinate $x,y,z \in \mathbb{R} : \mathbf{v} = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$. Allora:
$$ \|\mathbf{v}\|^2 = x^2 + y^2 + z^2 $$

Attraverso il [[coseno]] di un angolo possiamo definire:
- [[proiezione ortogonale]]
- [[prodotto scalare]]
- [[prodotto vettoriale]]


## Prodotto misto di tre vettori
$$\mathbf{u} = \begin{bmatrix}
x_{1} \\
y_{1} \\
z_{1}
\end{bmatrix}, \mathbf{v} = \begin{bmatrix}
x_{2} \\
y_{2} \\
z_{2}
\end{bmatrix}, \mathbf{w} = \begin{bmatrix}
x_{3} \\
y_{3} \\
z_{3}
\end{bmatrix}$$
Coordinate cartesiane di tre vettori allora il prodotto misto è
$$ \begin{align}
\mathbf{u}(\mathbf{v} \times \mathbf{w}) &= \begin{bmatrix}
x_{1} \\
y_{1} \\
z_{1}
\end{bmatrix} \begin{vmatrix}
\mathbf{i} & x_{2} & x_{3} \\
\mathbf{j} & y_{2} & y_{3} \\
\mathbf{k} & z_{2} & z_{3}
\end{vmatrix} = \begin{bmatrix}
x_{1} \\
y_{1} \\
z_{2}
\end{bmatrix} \left( \mathbf{i} \begin{vmatrix}
y_{2} & y_{3} \\
z_{2} & z_{3}
\end{vmatrix} - \mathbf{j} \begin{vmatrix}
x_{2} & x_{3} \\
z_{2} & z_{3}
\end{vmatrix} + \mathbf{k} \begin{vmatrix}
x_{2} & x_{3} \\
y_{2} & y_{3}
\end{vmatrix} \right)  = \\
&= x_{1} \begin{vmatrix}
y_{2} & y_{3} \\
z_{2} & z_{3} 
\end{vmatrix} - y_{1} \begin{vmatrix}
x_{2} & x_{3} \\
z_{2} & z_{3} 
\end{vmatrix} + z_{1} \begin{vmatrix}
x_{2} & x_{3} \\
y_{2} & y_{3}
\end{vmatrix} = \begin{vmatrix}
x_{1} & x_{2} & x_{3} \\
y_{1} & y_{1} & y_{3} \\
z_{1} & z_{2} & z_{3} 
\end{vmatrix}
\end{align} $$
Il modulo del prodotto misto rappresenta il volume del parallelepipedo di spigoli $\mathbf{u},\mathbf{v},\mathbf{w}$:
$$ |\mathbf{u} \cdot(\mathbf{v} \times \mathbf{w})| = \overset{\text{altezza}}{(\|\mathbf{u}\||\cos \alpha|)}\overset{\text{area base}}{\|\mathbf{u}\times \mathbf{w}\|} $$

```tikz
\begin{document}
\begin{tikzpicture}[scale=3]
\draw[->] (0,0,0) -- (.5,0,0)node[below left]{$\mathbf{v}$};
\draw[->] (0,0,0) -- (.2,.8,0)node[below left]{$\mathbf{u}$};
\draw[->] (0,0,0) -- (0,0,-1)node[left]{$\mathbf{w}$};
\draw[green, dashed] (0,0,-1) -- (.5,0,-1);
\draw[green] (.5,0,0) -- (.5,0,-1);
\draw[green] (.2,.8,0) -- (.7,.8,0);
\draw[green] (.5,0,0) -- (.7,.8,0);
\draw[green] (.5,0,-1) -- (.7,.8,-1);
\draw[green] (.7,.8,0) -- (.7,.8,-1);
\draw[green, dashed] (0,0,-1) -- (.2,.8,-1);
\draw[green,thick] (.2,.8,-1) -- (.7,.8,-1);
\draw[green] (.2,.8,0) -- (.2,.8,-1);
\end{tikzpicture}
\end{document}
```

>[!oss]
>Consideriamo tre vettori liberi $\mathbf{u},\mathbf{v},\mathbf{w}$ alolra il loro prodotto misto è nullo se e solo se i tre vettori sono [[Dipendenza e indipendenza lineare|linearmente dipendenti]]. Se $\mathbf{v} \times \mathbf{w} \neq 0$ e $\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) = 0$ allora $\mathbf{u}$ è combinazione lineare di $\mathbf{v}$ e $\mathbf{w}$. Se $r_{1}$ è la retta passante per $P$ e diretta come $\mathbf{v}$ e $r_{2}$ è la retta passante per $Q$ e diretta come $\mathbf{w}$, posto $\mathbf{u} = P -Q$ allora:
>1. $r_{1}$ è parallela a $r_{2}$ se $\mathbf{v} \times \mathbf{w} = \mathbf{0}$ ($\implies \mathbf{v} = k\mathbf{w}$ dove $k \in \mathbb{R}$)
>2. $r_{1}$ è ortogonale a $r_{2}$ se $\mathbf{v}\mathbf{w} = 0$
>3. $r_{1}$ è incidente a $r_{2}$ se $\mathbf{v} \times \mathbf{w} \neq 0$ e $\mathbf{u}(\mathbf{v} \times \mathbf{w}) = 0$
>4. $r_{1}$ e $r_{2}$ sono sghembe se $(\mathbf{u}(\mathbf{v} \times \mathbf{w})) \neq 0$

## equazione cartesiana di un piano
Fissate nello spazio delle coordinate cartesiane, il punto $P = \begin{bmatrix}x & y & z\end{bmatrix}^T$ appartiene al piano $\pi$ passante per $A = \begin{bmatrix}x_{A} & y_{A} & z_{A}\end{bmatrix}$ e ortogonale ad $\mathbf{n} = \begin{bmatrix}a & b & c\end{bmatrix}^T$ se $\overrightarrow{AP} \perp \mathbf{n}$. In coordinate:
 $$ \begin{bmatrix}
x-x_{A} \\
y - y_{A} \\
z - z_{A} 
\end{bmatrix} \cdot \begin{bmatrix}
a \\
b \\
c
\end{bmatrix}  = 0 \iff (x-x_{A})a + (y-y_{A})b + (z-z_{A})c = 0$$
 ```tikz
\begin{document}
\begin{tikzpicture}[scale = 4]
 \filldraw[color = black, fill = red!0] (0,0,0) -- (1,0,0) -- (1, 0, 1) -- (0,0,1) -- (0,0,0);
 \node at (1.2,0,.2){$\Pi$};
 \node[below] at (0.5,0,0.5){$A$};
 \draw[->] (.5,0,.5) -- (.8,0,.2) node[below]{$P$};
 \draw[->,red] (.5,0,.5) -- (.5,.3,.5) node[below left]{$\mathbf{n}$};
\end{tikzpicture}
\end{document}
```
Viceversa se $\Pi$ è il piano di equazione $ax + by + cz = d$ allora tale piano è ortogonale al vettore $\mathbf{n} = \begin{bmatrix}a & b & c\end{bmatrix}^T$.
Dati due piani $\Pi: ax+by+cz=d$ e $\Pi':a'x + b'y+c'z =d'$ e posti $\mathbf{n}=\begin{bmatrix}a & b & c\end{bmatrix}$ e $\mathbf{n}'=\begin{bmatrix}a' & b' & c'\end{bmatrix}$ allora:
1. $\Pi$ è parallelo a $\Pi'$ se $\mathbf{n}$ è parallelo a $\mathbf{n}' (\exists k \in \mathbb{R} : \mathbf{n} = k\mathbf{n}')$
2. $\Pi$ è perpendicolare a $\Pi'$ se $\mathbf{n} \perp \mathbf{n}'$
Inoltre se $r$ è una retta di direzione $\mathbf{v}$ allora
1. $r \perp \Pi$ se $\mathbf{v}$ è parallelo a $\mathbf{n}$
2. $r$ è parallelo a $\Pi$ se $\mathbf{v} \perp \mathbf{n}$

## [[distanze]]

