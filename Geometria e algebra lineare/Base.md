Fissato un sistema di riferimento nello spazio euclideo, ad ogni [[Geometria e algebra lineare/Vettori|vettore]] libero rimane associata la terna delle sue componenti. Vedremo che è possibile fare una operazione analoga in determinanti [[Spazi vettoriali]]

>[!def]
>Sia $V$ uno spazio vettoriale su $\mathbb{K}$, un **[[insieme]] ordinato** $\mathbf{B} = \{\mathbf{b_{1}},\mathbf{b_{2}},\dots,\mathbf{b_{n}}\}$ di vettori $V$ si dice base di $V$ se ogni vettore di $V$ si scrive in uno ed un sol modo come [[Combinazioni lineari|combinazione lineare]] di $\mathbf{b_{1}},\dots,\mathbf{b_{n}}$: $\exists! t_{1},\dots,t_{n} \in \mathbb{K}$ t.c.
> $$ \mathbf{v} = t_{1}\mathbf{b_{1}}+\dots+t_{n}\mathbf{b_{n}} $$


Quindi l'insieme ordinato $\{\mathbf{b_{1},\dots,\mathbf{b_{n}}}\} \subseteq V$ è una base se rispetta le seguenti proprietà:
1. $\forall \mathbf{v} \in V\ \exists\ t_{1},\dots,t_{n} \in \mathbb{K} : t_{1}\mathbf{b_{1}}+\dots+t_{n}\mathbf{b}_{n} + \mathbf{v}$ 
2. $t_{1}\mathbf{b_{1}}+\dots+t_{n}\mathbf{b}_{n}=u_{1}\mathbf{b}_{1}+\dots+u_{n}\mathbf{b}_{n}$ allora $t_{i}=u_{i} \quad \forall i =1,\dots,n$

>[!oss]
>Gli scalari $t_{1},\dots,t_{n}$ sono univocamente determinati dalla base $\mathbf{B} = \left\{ \mathbf{b_{1}},\dots,\mathbf{b_{n}} \right\}$ e dal vettore $\mathbf{v}$ e si chiamano [[coordinate]] del vettore $\mathbf{v}$.
>Quindi fissata una base $\mathbf{B}$ in $\mathbf{v}$ si ha che
> $$ \begin{flalign}
>&\qquad\qquad V \ni \mathbf{v} \leftrightarrow [t_{1}\quad \dots \quad t_{n}]^T \in \mathbb{K}^n  &(*)
\end{flalign}$$
> Analizziamo la doppia freccia in $(*)$. D(*)A $\mathbb{K}^n$ in $V$ abbiamo la mappa di parametrizzazione associata a $\mathbf{B} = \{\mathbf{b_{1}},\dots,\mathbf{b_{n}}\}$:
> $$ \begin{align}
> \mathcal{P} : \mathbb{K}^n &\to V \\
> \begin{bmatrix}
>t_{1} \\
\vdots \\
t_{n}
\end{bmatrix} &\mapsto t_{1}\mathbf{b_{1}} + \ldots + t_{n}\mathbf{b_{n}}
 \end{align} $$
 Poichè $\mathbf{B}$ soddisfa le proprietà 1. e 2., $\mathcal{P}$ è [[Funzione suriettiva|suriettiva]] ed [[Funzione iniettiva|iniettiva]], quindi $\mathcal{P}$ ammette [[Funzioni|funzione]] inversa $\mathcal{P}^{-1}$ che indicheremo con $x_{\mathbf{B}} : V \to \mathbb{K}^n$. Tale funzione è lineare, essendo l'inversa di una funzione lineare, ed associa ad ogni vettore $\mathbf{v}$ la $n$-upla delle sue componenti rispetto alla base $\mathbf{B}$
>$$ \begin{align}
> x_{B} : &V \to \mathbb{K}^n \\
> &\mathbf{v} \mapsto x_{\mathbf{B}}(\mathbf{v}) = \begin{bmatrix}
> x_{1}(\mathbf{v}) \\
>\vdots \\
x_{n}(\mathbf{v})
\end{bmatrix}
>\end{align} $$
>Quindi: $\mathbf{v} = x_{1}(\mathbf{v})\mathbf{b_{1}} + \dots + x_{n}(\mathbf{v})\mathbf{b_{n}} = \sum_{i=1}^n x_{i}(\mathbf{v})\mathbf{b_{i}}$

>[!oss]
>Se la mappa di parametrizzazione $\mathcal{P}$ associata ad un insieme di vettori ${\mathbf{v}_{1},\dots,\mathbf{v}_{n}}$ è suriettiva e iniettiva allora $\mathbf{B} = {\mathbf{v}_{1},\dots,\mathbf{v}_{n}}$ è una base infatti:
>1. Proprietà suriettiva $\iff \forall \mathbf{v} \in V\ \exists t_{1},\dots,t_{n} \in \mathbb{K} :$
> $$ \mathcal{P}([t_{1},\dots,t_{n}]^T)= t_{1}\mathbf{v}_{1}+\dots+t_{n}\mathbf{v}_{n} = \mathbf{v}$$
> 2. Proprietà iniettiva $\iff \mathcal{P}([t_{1},\dots,t_{n}]) = \mathcal{P}([\mathbf{u}_{1},\dots,\mathbf{u}_{n}]) \implies [t_{1},\dots,t_{n}] = [\mathbf{u}_{1},\dots,\mathbf{u}_{n}]$
>  $$ \iff t_{1}\mathbf{v}_{1} + \dots + t_{n}\mathbf{v}_{n} = u_{1}\mathbf{v}_{1} + \dots + u_{n}\mathbf{v}_{n} \implies \mathbf{u}_{i} = t_{i}\ \forall i = 1,\dots,n $$



>[!esempio]
>1.
>Se $V$ è uno spazio vettoriale con $B = \{\mathbf{b_{1}},\dots,\mathbf{b_{n}}\}$ base di $V$, allora per definizione $\mathbf{v} = [2\quad 3]^T$  se $\mathbf{v} = 2\mathbf{b_{1}}+3\mathbf{b_{2}}$  
>2. Base canonica di $\mathbb{R}^3$
> $$\begin{align}
>\mathbf{\hat{\imath}} = \begin{bmatrix}
> 1 \\
>0 \\
>0
>\end{bmatrix}, \mathbf{\hat{\jmath}}= \begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix},\hat{k} = \begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}
>\end{align}$$
>Per verificare che l'insieme $\left\{ i,j,k \right\}$ sia base di $\mathbb{R}^3$ consideriamo il generico vettore 
> $$ \begin{bmatrix}
x \\
y \\
z
\end{bmatrix} \in \mathbb{R}^3$$
Possiamo riscriverlo come $\begin{bmatrix}x\\y\\z\end{bmatrix} = x \mathbf{\hat{\imath}} + y \hat{\jmath} + z\hat{k}$
Inoltre se $x_{1}\hat{\imath} + y_{1}\hat{\jmath}+ z_{1}\hat{k} = x_{2}\hat{\imath}+y_{2}\hat{\jmath}+z_{2}\hat{k}$ allora
>$$ \begin{bmatrix}
>x_{1} \\
>y_{1} \\
>z_{1}
>\end{bmatrix} = 
>\begin{bmatrix}
>x_{2} \\
>y_{2} \\
>z_{2}
>\end{bmatrix} \iff x_{1}=x_{2}, y_{1}=y_{2}, z_{1}=z_{2}$$


## estrarre una base da un insieme di generatori
Vediamo l'algoritmo con un esempio
$H = \Span\left( \begin{bmatrix}1 \\ 1\\ 1\end{bmatrix},\begin{bmatrix}2 \\2\\2\end{bmatrix},\begin{bmatrix}1\\0\\1\end{bmatrix} \right)$

$$ A = \begin{bmatrix}
1 & 2 & 1 \\
1 & 2 & 0 \\
1 & 2 & 1
\end{bmatrix} \xrightarrow{MEG} 
\begin{bmatrix}
1 & 2 & 1 \\
0 & 0 & -1  \\
0 & 0 & 0
\end{bmatrix} = U$$
I pivot di $U$ si trovano nella prima e terza colonna di $U$ quindi la prime e la terza colonna di $A$ formano una base di $\Col(A) = \Span(\mathbf{v}_{1},\mathbf{v}_{2},\mathbf{v}_{3}) = H$. Riassumendo:
$$ \begin{align} 
 &\text{base di } \Col(U): \left\{ \begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}, \begin{bmatrix}
1 \\
-1 \\
0
\end{bmatrix} \right\} \\
&\text{base di } \Col(A): \left\{ \begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}, \begin{bmatrix}
1 \\
0 \\
1
\end{bmatrix} \right\}  \\
&\dim(\Col(A)) = \dim(\Col(U)) = 2
\end{align}\quad \Col(A) \neq \Col(U)
$$
in altre parole se $j_{1},\dots,j_{r}$ sono gli indici delle colonne che contengono i pivot di $U$ allora le colonne $j_{1},\dots,j_{r}$ di $U$ sono linearmente indipendenti e le colonne $\mathbf{c}_{j_{1}},\dots,\mathbf{c}_{j_{r}}$ di $A$ sono linearmenet indipendenti e formano una base di $\Col(A)$


>[!oss]
>$r(A)$ è il massimo numero di colonne di $A$ linearmente indipendenti.


### Algoritmo per completare ad una base un insieme di vettori linearmente indipendenti
Consideriamo un insieme linearmente indipendente di $\mathbb{R}^3: \left\{ \begin{bmatrix}1\\0\\1\end{bmatrix},\begin{bmatrix}1\\1\\0\end{bmatrix} \right\}$. 
Vogliamo determinare un vettore $\mathbf{v}_{3}$ di $\mathbb{R}^3: \left\{ \mathbf{v}_{1},\mathbf{v}_{2},\mathbf{v}_{3} \right\}$ è una base. Scriviamo la matrice che ha le prime due colonne uguali a $\mathbf{v}_{1}$ e $\mathbf{v}_{2}$ e le altri uguali ai vettori della base canonica di $\mathbb{R}^3$. Riduciamo a scala questa matrice:
$$\begin{bmatrix}
1 & 1 & 1 & 0 & 0 \\
0 & 1 & 0 & 1 & 0 \\
\underset{ \mathbf{v}_{1} }{ 1 } & \underset{ \mathbf{v}_{2} }{ 0 } & \underset{ \mathbf{e}_{1}  }{ 0 } & \underset{ \mathbf{e}_{2} }{ 0 } & \underset{ \mathbf{e}_{3} }{ 1 }
\end{bmatrix} \xrightarrow{MEG} \begin{bmatrix}
1 & 1 & 1 & 0 & 0  \\
0 & 1 & 0 & 1 & 0 \\
0 & -1 & -1 & 0 & 1
\end{bmatrix} \xrightarrow{MEG} \begin{bmatrix}
1 & 1 & 1 & 0 & 0 \\
0 & 1 & 0 & 1 & 0 \\
0 & 0 & -1 & 1 & 1
\end{bmatrix}$$
I primi due pivot sono nelle colonne corrispondenti a $\mathbf{v}_{1},\mathbf{v}_{2}$, il terzo invece è nel corrispondente $\mathbf{e}_{1}$, che completa la base:
$$ \left\{ \mathbf{v}_{1},\mathbf{v}_{2},\mathbf{e}_{1} \right\} $$
