---
id: "Sistemi lineari"
aliases:
  - "sistemi lineari di $n$-equazioni in $n$-incognite"
  - "sistema lineare"
tags: []
---

Lo studio dei sistemi lineari è fondamentale in quanto le equazioni lineari che li compongono sono tra le poche equazioni che possono essere risolte in maniera algoritmica, quindi lo studio di innumerevoli fenomeni, dalla fisica all'informatica alla probabilità, cerca di portare o approssimare lo studio di eventi a equazioni lineari

per definire un **sistema lineare** è necessario prima definire un'[[equazione lineare]] 

>[!def]
>Un sistema lineare di $m$ equazioni in $n$ incognite è un insieme di $m$ **equazioni lineari** in $x_{1},\dots,x_{n}$:
>$$ \begin{cases}
>a_{11}x_{1} + a_{12}x_{2} + \dots + a_{1n}x_{n} = b_{1} \\
>a_{21}x_{1} + a_{22}x_{2} + \dots + a_{2n}x_{n} = b_{2} \\
>\vdots \\
>a_{m1}x_{1} + a_{m2}x_{2} + \dots + a_{mn}x_{n} = b_{m}
>\end{cases} $$
>con $a_{ij},b \in \mathbb{K}\ \forall i=1,\dots,m \land j = 1,\dots,n$  dove $i$ indica l'equazione e $j$ indica l'incognita

>[!def]
>Una **soluzione** di un sistema lineare è una $n$-upla ordinata $(\bar{x}_{1},\bar{x}_{2},\dots,\bar{x}_{n}) \in \mathbb{K}^n$ le cui componenti soddisfino le equazioni lineari del sistema.
>
>Due sistemi lineari sono **equivalenti** se hanno lo stesso insieme di soluzioni


## sistemi lineari di $n$-equazioni in $n$-incognite

Dato un sistema lineare $A \cdot \mathbf{x} = \mathbf{b}$ si hanno i seguenti tre casi:
- Un unica soluzione -> sistema determinato
- Infinite soluzioni dipendenti da un certo numero di parametri -> sistema sottodeterminato
- Nessuna soluzione -> impossibile

>[!theorem] Teorema di Cramer
>Se $A \in M_{(n,n)}(\mathbb{K})$ e $r(A) = n$, allora $\forall \mathbf{b} \in \mathbb{K}^n$ il sistema lineare $A \mathbf{x} = \mathbf{b}$ ammette una e una sola soluzione
>
>>[!dim] 
>>Riduciamo a scala $A$ tramite il [[Metodo di eliminazione di Gauss]]
>>
>>$$ A \to U = \begin{bmatrix}p_{1} & * & \dots & \dots & * \\
>>0 & p_{2} & * & \dots & * \\
>>\vdots & \overset{ 0 }{ \vdots } & \ddots &  & \vdots \\
>>0 & 0 &  &  & p_{n}
>>\end{bmatrix} $$
>>Il sistema lineare $A \mathbf{x} = \mathbf{b}$ è equivalente ad un sistema lineare del tipo $U \mathbf{x} = \mathbf{b}'$, che scritto esplicitamente è:
>>$$ \begin{cases} \\
>>p_{1}x_{1} + u_{12}x_{2} + \dots + u_{1n}x_{n} = b_{1}' \\
>>p_{2}x_{2} + \dots + u_{2n}x_{n} = b_{2}' \\
>>\vdots \\
>>p_{n}x_{n} = b_{n}'
>>\end{cases} $$
>>Risolvendo all'indietro ottengo:
>>$$ \begin{cases}
>>x_{1} = \frac{1}{p_{1}}(\dots) \\
>>\vdots \\
>x_{n-1} = b_{n-1}' / p_{n-1} - \frac{u_{n-1,n}b_{n}'}{p_{n}p_{n-1}} \\
>>x_{n} = \frac{b_{n}'}{p_{n}}
>>\end{cases} $$
>>Soluzioni del sistema lineare $A\mathbf{x} = \mathbf{b}$

È utile per lo studio dei sistemi introdurre il concetto di [[sistema omogeneo]] e di [[nucleo]]  



# Struttura delle soluzioni di un sistema lineare
>[!proposition]
>Dato il sistema lineare $A\mathbf{x} = \mathbf{b}$ supponiamo che $\mathbf{x}_{0}$ sia soluzione, quindi $A\mathbf{x}_{0} = \mathbf{b}$ le soluzioni di $A\mathbf{x} = \mathbf{b}$ si ottengono sommando ad $\mathbf{x}_{0}$ le soluzioni del sistema omogeneo associato $A\mathbf{x} =\mathbf{0}$, quindi sono tutti e soli i vettori della forma $\mathbf{x}_{o}+\mathbf{x}_{h}$ con $\mathbf{x}_{h} \in \ker(A)$
>
>>[!dim]
>>Ricordiamo che $A\mathbf{x}_{o} = \mathbf{b}$ e $A\mathbf{x}_{h} = \mathbf{0}$. Allora $\mathbf{x}_{0} + \mathbf{x}_{h}$ è soluzione infatti $A(\mathbf{x}_{o} + \mathbf{x}_{h}) = A\mathbf{x}_{o} + A\mathbf{x}_{h} = \mathbf{b} + \mathbf{0} = \mathbf{b}$
>>Viceversa se $\hat{\mathbf{x}}$ è soluzione allora $A\hat{\mathbf{x}} = \mathbf{b}$. Osserviamo che $\mathbf{\hat{x}} = \mathbf{\mathbf{x}_{o}} + (\mathbf{\hat{x}} - \mathbf{x}_{0})$ e che $A(\hat{\mathbf{x}} - \mathbf{x}_{o}) = A\hat{\mathbf{x}} - A\mathbf{x}_{o} = \mathbf{b} - \mathbf{b} = \mathbf{0}$
>>Quindi $\mathbf{\hat{x}} = \mathbf{x}_{0} + \mathbf{x}_{h}$ con $\mathbf{x}_{h} = \hat{\mathbf{x}} - \mathbf{x}_{0} \in \ker(A)$
>
>>[!idea]
>>Per dimostrare che i vettori di questa forma sono soluzione basta sfruttare la proprietà associativa, per dimostrare che tutti i vettori soluzione hanno questa forma, si scrive il vettore generico sommando e sottraendo un vettore soluzione, sfruttando ancora la proprietà associativa il vettore generico meno il vettore soluzione moltiplicati per $A$ hanno come risultato il vettore nullo, quindi sono soluzioni al kernel



## Interpretazione geometrica dei sistemi lineari in 3 incognite

In un sistema lineare nello [[spazio euclideo]] ogni equazione rappresenta un piano. Consideriamo un sistema lineare di due equazioni in tre incognite generico:

$$ 
\begin{cases}
a_{1}x + b_{1}y + c_{1} z = d_{1} \\
a_{2}x + b_{2}y + c_{2}z = d_{2} 
\end{cases} \to \left[\begin{array}{ccc|c}
a_{1} & b_{1} & c_{1} & d_{1} \\
a_{2} & b_{2} & c_{2} & d_{2} 
\end{array}\right] = [A | \mathbf{b}]

$$


## Due equazioni, tre incognite

### Se $r(A) \neq r([A | \mathbf{b}])$
Il sistema non ha soluzioni, i due piani non hanno punti in comune e sono quindi [[Assiomi di incidenza|paralleli]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=5]
\filldraw[
draw = red,
fill = red!70,
] (-0.5,0,-0.5) -- (0.5,0,-0.5) -- (0.5,0,0.5) -- (-0.5,0,0.5) -- (-0.5,0,-0.5);
\filldraw[
draw = red,
fill = red!70,
] (-0.5,0.5,-0.5) -- (0.5,0.5,-0.5) -- (0.5,0.5,0.5) -- (-0.5,0.5,0.5) -- (-0.5,0.5,-0.5);
\draw[->, thick] (0,0,0) -- (1,0,0) node[above]{x};
\draw[->,thick] (0,0,0) -- (0,1,0) node[right]{y};
\draw[->,thick] (0,0,0) -- (0,0,1) node[below]{z};
\end{tikzpicture}
\end{document}
```

### Se $r(A) = r([A | \mathbf{b}]) = 2$
Il sistema ha infinite soluzioni che dipendono da **un parametro**, ed i due piani si incontrano in una retta

```tikz
\begin{document}
\begin{tikzpicture}[scale=5]
\filldraw[
draw = red,
fill = red!70,
] (-0.5,0,-0.5) -- (0.5,0,-0.5) -- (0.5,0,0.5) -- (-0.5,0,0.5);
\filldraw[
draw = green,
fill= green!70,
fill opacity=0.5,
] (-0.5,0.5,-0.5) -- (0.5,-0.5,-0.5) -- (0.5,-0.5,0.5) -- (-0.5,0.5,0.5);
\draw[->, thick] (0,0,0) -- (1,0,0) node[above]{x};
\draw[->,thick] (0,0,0) -- (0,1,0) node[right]{y};
\draw[->,thick] (0,0,0) -- (0,0,1) node[below]{z};
\draw[thick, blue] (0,0,0.80) -- (0, 0,-0.8);
\end{tikzpicture}
\end{document}
```
Le soluzioni sono $\mathbf{v_{0}} + t\mathbf{v_{1}}$ con $\mathbf{v_{1}}$ kernel di $A$ e $\mathbf{v_{0}}$ punto sulla retta
### Se $r(A) = r([A|\mathbf{b}]) = 1$
il sistema ha infinite soluzioni che dipendono da **due parametri**, i due piani sono coincidenti

```tikz
\begin{document}
\begin{tikzpicture}[scale=5]
\filldraw[
draw = green,
fill = red!70,
] (-0.5,0,-0.5) -- (0.5,0,-0.5) -- (0.5,0,0.5) -- (-0.5,0,0.5) -- (-0.5,0,-0.5);

\draw[->, thick] (0,0,0) -- (1,0,0) node[above]{x};
\draw[->,thick] (0,0,0) -- (0,1,0) node[right]{y};
\draw[->,thick] (0,0,0) -- (0,0,1) node[below]{z};
\end{tikzpicture}
\end{document}
```

Le soluzioni sono $\mathbf{v_{0}} + t_{1}\mathbf{v_{1}} + t_{2}\mathbf{v_{2}}$ con $\mathbf{v_{1}}$ e $\mathbf{v_{2}} \in ker(A)$ e $\mathbf{v}_{0}$ punto del piano

## Tre equazioni,due incognite

Per arrivare a questo sistema partendo da forme parametriche di due rette abbiamo:

$$ \begin{align}
&r_{1} = \begin{cases}
x = x_{p} + tv_{1} \\
y = y_{p} + tv_{2} \\
z = z_{p} + tv_{3}
\end{cases} &e &&
r_{2} = \begin{cases}
x = x_{Q} + sw_{1} \\
y = y_{Q} + sw_{2} \\
y = y_{Q} + sw_{3}
\end{cases} \\
\end{align} $$
Osserviamo che possiamo riscrivere come
$$ r_{1} = 
\mathbf{P} + t\mathbf{v} \qquad r_{2} = \mathbf{Q} + s\mathbf{w}$$
con
$$ \begin{align}
P = \begin{bmatrix}
x_{p} \\
y_{p} \\
z_{p}
\end{bmatrix}\quad \mathbf{v} = \begin{bmatrix}
v_{1} \\
v_{2} \\
v_{3}
\end{bmatrix} \qquad \mathbf{Q} = \begin{bmatrix}
x_{Q} \\
y_{Q} \\
z_{Q}
\end{bmatrix} \quad \mathbf{w} = \begin{bmatrix}
w_{1} \\
w_{2} \\
w_{3}
\end{bmatrix}
\end{align} $$

Eguagliamo le due parametrizzazioni per vedere dove coincidono:

$$ \begin{cases}
x_{P} + tv_{1} = x_{Q} + sw_{1} \\
y_{P} + tv_{2} = y_{Q} + sw_{2} \\
z_{P} + tv_{3} = z_{Q} + sw_{3}
\end{cases}  \quad\implies\quad \begin{cases}
  tv_{1} - sw_{1} = x_{Q} - x_{P} \\
 tv_{2} - sw_{2} = y_{Q} - y_{P} \\
tv_{3} - sw_{3} = z_{Q} - z_{P} 
\end{cases} \implies A \begin{bmatrix}
t \\
s
\end{bmatrix} = \mathbf{b}$$

Con 
$$ A = \begin{bmatrix}
v_{1} & -w_{1} \\
v_{2} & -w_{2} \\
v_{3} & -w_{3} 
\end{bmatrix}  \qquad \mathbf{b}=\begin{bmatrix}
x_{Q} - x_{P} \\
y_{Q} - y_{P} \\
z_{Q} - z_{P}
\end{bmatrix}$$


## Se $r(A) = 2 \neq 3 = r([A | \mathbf{b}])$  
Il sistema è impossibile, le due rette non hanno punti in comuni e non sono parallele ($\mathbf{w} \neq k\mathbf{v}$) quindi sono **sghembe**, ()

```tikz
\begin{document}
\begin{tikzpicture}[scale=5]
\filldraw[
draw = red,
fill = red!70,
fill opacity = 0.2,
] (-0.5,0,-0.5) -- (0.5,0,-0.5) -- (0.5,0,0.5) -- (-0.5,0,0.5) -- (-0.5,0,-0.5) ;
\filldraw[
draw = red,
fill = red!70,
fill opacity = 0.2,
] (-0.5,0.5,-0.5) -- (0.5,0.5,-0.5) -- (0.5,0.5,0.5) -- (-0.5,0.5,0.5) -- (-0.5,0.5,-0.5);

\draw[->, thick] (0,0,0) -- (1,0,0) node[above]{x};
\draw[->,thick] (0,0,0) -- (0,1,0) node[right]{y};
\draw[->,thick] (0,0,0) -- (0,0,1) node[below]{z};
\draw[color = green, thick] (-0.7,0,0.7) -- (0,0,-0.7);
\draw[color = green, thick] (0.7,0.5,0) -- (-0.7,0.5,-0.7);
\end{tikzpicture}
\end{document}
```


### Se $r(A) = 2 = r([A | \mathbf{b}])$
Il sistema ha una soluzione, le rette sono incidenti
```tikz
\begin{document}
\begin{tikzpicture}[scale=5]
\filldraw[
draw = red,
fill = red!70,
fill opacity = 0.2,
] (-0.5,0,-0.5) -- (0.5,0,-0.5) -- (0.5,0,0.5) -- (-0.5,0,0.5) -- (-0.5,0,-0.5) ;

\draw[->, thick] (0,0,0) -- (1,0,0) node[above]{x};
\draw[->,thick] (0,0,0) -- (0,1,0) node[right]{y};
\draw[->,thick] (0,0,0) -- (0,0,1) node[below]{z};
\draw[color = green, thick] (-0.7,0,0.7) -- (0,0,-0.7);
\draw[color = green, thick] (0.7,0,0.6) -- (-0.7,0,-0.7);
\fill (-0.22,0,-0.26)circle[radius=0.5pt, white] node[above]{};
\end{tikzpicture}
\end{document}
```

### Se $r(A) = 1 \neq 2 = r([A | \mathbf{b}])$
Il sistema non ha soluzione e le rette sono parallele ($\mathbf{w} = k\mathbf{v}$)
```tikz
\begin{document}
\begin{tikzpicture}[scale=5]
\filldraw[
draw = red,
fill = red!70,
fill opacity = 0.2,
] (-0.5,0,-0.5) -- (0.5,0,-0.5) -- (0.5,0,0.5) -- (-0.5,0,0.5) -- (-0.5,0,-0.5) ;


\draw[->, thick] (0,0,0) -- (1,0,0) node[above]{x};
\draw[->,thick] (0,0,0) -- (0,1,0) node[right]{y};
\draw[->,thick] (0,0,0) -- (0,0,1) node[below]{z};
\draw[color = green, thick] (-0.7,0,0.7) -- (0,0,-0.7);
\draw[color = green, thick] (-0.1,0,0.7) -- (0.6,0,-0.7);
\end{tikzpicture}
\end{document}
```

### Se $r(A) = 1 = r([A | \mathbf{b}])$ 
```tikz
\begin{document}
\begin{tikzpicture}[scale=5]
\filldraw[
draw = red,
fill = red!70,
fill opacity = 0.2,
] (-0.5,0,-0.5) -- (0.5,0,-0.5) -- (0.5,0,0.5) -- (-0.5,0,0.5) -- (-0.5,0,-0.5) ;

\draw[->, thick] (0,0,0) -- (1,0,0) node[above]{x};
\draw[->,thick] (0,0,0) -- (0,1,0) node[right]{y};
\draw[->,thick] (0,0,0) -- (0,0,1) node[below]{z};
\draw[color = green, thick] (-0.7,0,0.7) -- (0,0,-0.7);

\end{tikzpicture}
\end{document}
```

Le due rette coincidono

 

# ANKI


```anki
id: 1705511620925
deck: GAL
---
Sistema lineare
===
Un sistema lineare di $m$ equazioni in $n$ incognite è un insieme di $m$ equazioni lineare in $x_1,...,x_n$:
$$ \begin{cases}
a_{11}x_1 + a_{12}x_2 + ... + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + ... + a_{2n}x_n = b_2 \\
\vdots
a_{m1}x_1 + a_{m2}x_2 + ... + a_{mn}x_n = b_m
\end{cases}$$
con $a_{ij}b \in \mathbb{K} \forall i = 1,...,m \land j = 1,...,n$ dove $i$ è l'indice dell'equazione e $j$ l'indice dell'incognita
```


```anki
id: 1705511626051
deck: GAL
---
Soluzione di un sistema lineare
===
La soluzione di un sistema lineare è una $n$-upla ordinata $(\bar{x}_1, \bar{x}_2,...,\bar{x}_n \in \mathbb{K}^n$ le cui componenti soddisfino tutte le equazioni lineari del sistema.

Due sistemi lineari sono equivalenti se hanno lo stesso insieme di soluzioni
```


```anki
id: 1705511628401
deck: GAL
---
Teorema di Cramer
===
Se $A \in M_{(n,n)}(\mathbb{K})$, $r(A) = n$ allora $
\forall \mathbf{b} \in \mathbb{K}^n$ il sistema lineare $A\mathbf{x} = \mathbf{b}$ ammette una e una sol soluzione

>[!dim]
>Riduciamo $A$ a scala tramite il metodo di eliminazione di Gauss, essendo il suo rango $n$ avremo una matrice a scala con $n$ pivot $p_1,...,p_n$
```



```anki
id: 1694785481412
deck: GAL
---
# Struttura delle soluzioni di un sistema lineare (proposizione)
Dato il sistema lineare $A\mathbf{x} = \mathbf{b}$ supponiamo che $\mathbf{x}_{0}$ sia soluzione, quindi $A\mathbf{x}_{0} = \mathbf{b}$ le soluzioni di $A\mathbf{x} = \mathbf{b}$ si ottengono sommando ad $\mathbf{x}_{0}$ le soluzioni del sistema omogeneo associato $A\mathbf{x} =\mathbf{0}$, quindi sono tutti e soli i vettori della forma $\mathbf{x}_{o}+\mathbf{x}_{h}$ con $\mathbf{x}_{h} \in \ker(A)$

===
>[!dim]
>$A(\mathbf{x}_o + \mathbf{x}_h) = A\mathbf{x}_o + A\mathbf{x}_h = \mathbf{b} + \mathbf{0} = \mathbf{b}$
>
>Viceversa se $\hat{x}$ è soluzione allora $A\hat{x}=\mathbf{b}$. Osserviamo che $\hat{x} = \mathbf{x}_o + (\mathbf{\hat{x}} - \mathbf{x}_o)$, e che $A(\mathbf{\hat{x}} - \mathbf{x}_o) = A\mathbf{\hat{x}} - A\mathbf{x}_o = \mathbf{b} - \mathbf{b} = \mathbf{0}$.
>Quindi $\mathbf{\hat{x}} = \mathbf{x}_o + \mathbf{x}_h$ con $\mathbf{x}_h = \mathbf{\hat{x}} - \mathbf{x}_o \in \ker(A)$
```
