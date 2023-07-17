
L'intuizione ci suggerisce che i punti di una retta siano ordinati, cosiche possiamo avere gli estremi $P$ e $Q$ come l'[[insieme]] dei punti della retta tra $P$ e $Q$.
Consideriamo una retta $AB$, questa è l'unione di due semirette, la semiretta $A$ passante per B e la semiretta $B$ passante per $A$.

Un punto $P$ su una delle semirette uscenti da $A$ è individuato dalla lunghezza $\overline{AP}$ del segmento di estremi $A$ e $P$.
Se fissiamo la lunghezza $\overline{AB}$  come unità di misura, la lunghezza del segmento $\overline{AB}$ sarà $\frac{\overline{AP}}{\overline{AB}}$. Quindi per ogni numero reale positivo $x$ ci saranno due punti sulla retta $AB$ a distanza $x$ da $A$, uno verso $B$ e uno nella direzione opposta, con le distanze calcolate in base all'unità di misura $AB$.
Assegniamo quindi ad ogni numero reale $x$ un punto $P(x)$ sulla retta: 
- se $x>0 \Rightarrow P(x)$ sarà sulla semiretta che da $A$ passa per $B$ ad una distanza $x$
- se invece $x < 0 \Rightarrow P(x)$ sarà sulla semiretta $A$ che non passa per $B$ ad una distanza $|x|$
- Infine se $x = 0 \Rightarrow P(x)$ sarà associato il punto $A$, quindi $P(0) = A$

Il punto $A$, corrispondente a $x=0$, è l'origine delle coordinate. Quindi


>[!TlDr]
>C'è una corrispondenza [[Funzione biunivoca|biunivoca]] tra l'insieme $\mathbb{R}$ dei numeri reali e i punti della retta $AB$. Questa corrispondenza associa a un numero reale $x$ l'unico punto $P = P(x)$ della retta $AB$ tale che:
>1. La distanza di $P$ da $A$ è:
> $$ \frac{\overline{AP}}{\overline{AB}}=|x| $$
> 2. $P$ giace sulla semiretta uscente da $A$ e passante per $B$, se $x > 0$; $P$ giace sulla semiretta uscente da $A$ che non passa per $B$ se $x>0$ 

Una poprietà fondamentale che possono avere due rette è l'[[Geometria e algebra lineare/Ortogonalità]]

### Equazioni parametriche e cartesiane di una retta nello spazio
Data una retta $r$ nello spazio passante per $A$ e diretta come il vettore $\mathbf{v}$, per ogni punto $P \in r \quad \exists\ t \in \mathbb{R} : \vec{OP} = \vec{OA} + t \cdot \mathbf{v}$
```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\node (O) at (0,0,0){};
\node (A) at (1,1,1.5){$\bullet$};
\draw[-latex,thick] (O.center) -- ++ (2,0,0) node[right]{y};
\draw[-latex,thick] (O.center) -- ++ (0,2,0) node[right]{z};
\draw[-latex,thick] (O.center) -- ++ (0,0,2) node[left]{x};
\draw (-2,.5,2) -- ++ (6,1,-1);
\draw ()
\end{tikzpicture}
\end{document}
```
Quindi fissato un sistema di riferimento $(O, \mathbf{u}_{1},\mathbf{u}_{2},\mathbf{u}_{3})$ se il vettore $\mathbf{v}$ ha componenti $\begin{bmatrix}a\\b\\c\end{bmatrix}$ e le coordinate di $A$ sono $\begin{bmatrix}x_{A}\\y_{A}\\z_{A}\end{bmatrix}$ allora le coordinate di $P \in r$ sono:
$$ \begin{cases}
x = x_{A} + ta \\
y = y_{A} + tb \\
z = z_{A} + tc
\end{cases} \implies \text{ una parametrizzazione della retta} $$
Se co