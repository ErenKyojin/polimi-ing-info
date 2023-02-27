### Distanza tra due punti
Dati $A = \begin{bmatrix}x_{A} & y_{A} & z_{A}\end{bmatrix}^T$ e $B = \begin{bmatrix}x_{B} & y_{B} & z_{B}\end{bmatrix}$
allora $\dist(A,B) = \|\overrightarrow{AB}\| = \sqrt{ (x_{A}-x_{B})^2 + (y_{A}-y_{B})^2 + (z_{A}-z_{B})^2 }$. La sfera di centro $C =\begin{bmatrix}x_{0}&t_{0}&z_{0}\end{bmatrix}^T$ e raggio $r$ è l'insieme dei punti $P = \begin{bmatrix}x & y & z\end{bmatrix}^T$ tali che $\|\overrightarrow{PC}\|=r$ tali punti soddisfano l'equazione: $\sqrt{ (x-x_{0})^2 + (y-y_{0})^2 + (z-z_{0})^2 }=r$


### Distanza di un punto da un piano
$\dist(A,\Pi) = \min(\dist(A, H))$ con $H \in \Pi$ 
Sia $A = \begin{bmatrix}x_{A} & y_{A} & z_{A} \end{bmatrix}^T$ e $\Pi : ax + by + cz =d$ allora $$ \dist(A, \Pi) = \frac{|ax_{A} + by_{A} + cz_{A} - d|}{\sqrt{ a^2 + b^2 + c^2 }}$$
Infatti sia $P = \begin{bmatrix}x_{P} & y_{P} & z_{P}\end{bmatrix} \in \Pi$
```tikz
\begin{document}
\begin{tikzpicture}[scale = 4]
\filldraw[fill = black!0](0,0,0) -- (1,0,0) -- (1,0,1) -- (0,0,1) -- (0,0,0);
\node at (1.2,0,0){$\Pi$};
\node[below] at (0.5,0,0.5){$Q$};
\draw[dashed,red] (.5,0,.5) -- (.5,.5,.5) node[right]{A};
\draw[->,green] (.25,0,.7) node[below left]{P} -- (.5,.5,.5);
\draw[->,red,thick] (.5,0,.5) -- (.5,.25,.5);
\end{tikzpicture}
\end{document}
```

$\dist(A,\Pi)$ è la lunghezza della proiezione ortogonale di $\overrightarrow{PA}$ lungo $\overrightarrow{n}$.
Quindi $$\begin{align}
\dist(A,\Pi) &= \left\| \frac{\overrightarrow{PA} \cdot \mathbf{n}}{\|\mathbf{n}\|^2} \|\mathbf{n}\|\right\|= \frac{|\overrightarrow{PA} \cdot \mathbf{n}|}{\|n\|} = \frac{\left| \begin{bmatrix}
x_{A}-x_{P} \\
y_{A}-y_{P} \\
z_{A} - z_{P}
\end{bmatrix} \cdot \begin{bmatrix}a \\
b \\
c \end{bmatrix}\right| }{\sqrt{ a^2 + b^2 + c^2 }} =  \\
&= \frac{\left| ax_{A} + by_{A} + cz_{A} 0- x_{P}a - y_{P}b -z_{P}c\right| }{\sqrt{ a^2 + b^2 + c^2 }}  \\
&= \frac{|ax_{A} + by_{A} + cz_{A} - d|}{\sqrt{ a^2 + b^2 + c^2 }}
\end{align}$$



## Distanza di un punto da una retta
$\dist(A,r) = \min(\dist(A,H))$ con $H \in r$
Sia $A = \begin{bmatrix}x_{A} & y_{A} & z_{A}\end{bmatrix}$ e $r$ una retta nello spazio di direzione $\mathbf{v}$ passante per $P$. Allora $\dist(A,r)$ è la lunghezza del segmento che unisce $A$ ad $r$ ed è ortogonale ad $r$. In altre parole è l'altezza del parallelogramma di lati $\overrightarrow{PA}$ e $\mathbf{v}:$
 $$ \dist(A,r) = \frac{\|\overrightarrow{PA} \times \mathbf{v}\|}{\|\mathbf{v}\|} $$
 Il punto $H \in r$ si puó trovare anche come intersezione tra la retta $r$ ed il piano passante per $A$ e ortogonale a $r$

## Distanza tra rette
$\dist(r,s)= \min(\dist(H,K))$ con $H \in r, K \in s$
```tikz
\begin{document}
\begin{tikzpicture}
 \draw (-1,-1) -- (1,1) node[right]{s};
 \draw (1,-1) -- (-1,1) node[left]{r};  
\end{tikzpicture}
\end{document}
```
1. $r$ ed $s$ sono incidenti allora $\dist(r,s)$
2. $r$ ed $s$ sono parallele. Sia $A \in r$ un generico punto di kmr
```tikz
\begin{document}
\begin{tikzpicture}
\draw (-1,-2) -- (-1,2)node[left]{r};
\draw (1,-2) -- (1,2)node[right]{s};
\draw[red,dashed] (1, 0.5) -- (-1,0.5) node[left]{A};
\draw[red,dashed] (1,-0.5) -- (-1, -0.5) node[left]{A'}; 
\end{tikzpicture}
\end{document}
```
 $$\dist(r,s)=\dist(A,s) = \dist(A',s)$$
3. $r$ ed $s$ sono sghembe. Supponiamo $r$ la retta passante per $P$ e avente direzione $\mathbf{v}$ e $s$ la retta pssante per $Q$ e avente direzione $\mathbf{w}$. Sia $\mathbf{u}=\overrightarrow{PQ}$. L'altezza del parallelepipedo di lati:
   $\mathbf{u},\mathbf{v},\mathbf{w}$ è la distanza tra $r$ ed $s$ 
$$ \dist(r,s) = \frac{|\mathbf{u}\cdot (\mathbf{v} \times \mathbf{w})|}{\|\mathbf{v} \times \mathbf{w}\|} $$

Metodo alternativo: Se $r$ ed $s$ sono sghembe esistono $H \in r$ e $\mathbb{K} \in s$ tali che $\overrightarrow{HK} \perp r$ e $\overrightarrow{HK} \perp s$ si ha che $\dist(r,s) = \|\overrightarrow{HK}\|$