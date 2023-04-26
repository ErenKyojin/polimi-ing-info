Il rango di una matrice è il numero delle sue righe [[Dipendenza e indipendenza lineare|linearmente indipendenti]] (che coincide con il numero di colonne linearmente indipendenti)

Si puó anche definire come la [[Geometria e algebra lineare/Dimensione]] dell'immagine dell'applicazione lineare.
Si calcola attraverso il [[Metodo di eliminazione di Gauss]]

Data $A \in M_{\mathbb{K}(n,n)}$ possiamo considerarla come giustpposizione di $m$ righe o di $n$ colonne:
$$ A = \begin{bmatrix}
\mathbf{a_{1}} \\
\vdots \\
\mathbf{a_{n}}
\end{bmatrix}  = 
\begin{bmatrix}
\mathbf{c_{1}} | \dots| \mathbf{c_{n}}
\end{bmatrix}$$
# $\Row(A)$ e $\Col(A)$
Associati ad $A$ abbiamo tre [[Spazi vettoriali]]:
1. $\ker(A) = \left\{ \mathbf{v} \in \mathbb{K}^n : A \cdot \mathbf{v} = \mathbf{0} \right\} \subseteq \mathbb{K}^n$
2. $\Row(A) = \Span(\mathbf{a_{1}}^T ,\dots, \mathbf{a}_{m}^T) \subseteq \mathbb{K}^n$
3. $\Col(A) = \Span(\mathbf{c_{1}},\dots,\mathbf{c}_{n}) \subseteq \mathbb{K}^n$
Abbiamo visto che la [[Geometria e algebra lineare/Dimensione]] $\dim(\ker(A)) = n - r(A)$ dal teorema di nullità piú rango. Vogliamo dimostrare che
$$ \dim(\Row(A)) = \dim(\Col(A)) = r(A) $$

>[!def]
>Data $A \in M_{\mathbb{K}(n,n)}$ definiamo il rango per righe di $A$: $\dim(\Row(A))$ ed il rango per colonne di $A$: $\dim(\Col(A))$

>[!proposizione] proposizione 1
>Sia $A \in M_{\mathbb{K}(m,n)}$ e sia $U$ una sua ridotta a scala. Allora $\Row(A) = \Row(U)$ inoltre le righe non nulle di $U$ formano una base di $\Row(A)$. Quindi il rango per righe di $A$ coincide con il rango per righe di $U$ che a sua volta coincide con il rango di $A$:
> ($\dim(\Row(A)) = \dim(\Row(U)) = r(A)$)
> 
>>[!dim]
>>Consideriamo $A$ come giustapposizione di $m$ righe:
>> $$ A = \begin{bmatrix}
>> \mathbf{a}_{1} \\
>> \vdots \\
>> \mathbf{a}_{n}
>>\end{bmatrix} $$
>>e sia $B$ la matrice ottenuta da $A$ tramite una sola operazione elementre. Abbiamo i seguenti casi:
>>1. $B$ ottenuta da $A$ con uno scambio di righe
>> $$ A = \begin{bmatrix}
>> \mathbf{a}_{1} \\
>> \vdots \\
>> \mathbf{a}_{i} \\
>> \vdots \\
>> \mathbf{a}_{j} \\
>> \vdots \\
>> \mathbf{a}_{n}
>>\end{bmatrix} \to
>>\begin{bmatrix}
>> \mathbf{a}_{1} \\
>> \vdots \\
>> \mathbf{a}_{j} \\
>> \vdots \\
>> \mathbf{a}_{i} \\
>> \vdots \\
>> \mathbf{a}_{n}
>>\end{bmatrix} $$
>>Ma allora
>> $$\begin{align}
>>  \Row(A) &= \Span(\mathbf{a}^T, \dots, \mathbf{a}_{i}^T, \dots, \mathbf{a}_{j}^T, \dots, \mathbf{a}_{m}^T) \\
>>&= \Span(\mathbf{a}_{1}^T, \dots, \mathbf{a}_{j}^T, \dots, \mathbf{a}_{i}^T, \dots, \mathbf{a}_{m}^T ) = \Row(B)
>>\end{align} $$
>>
>>2. $B$ ottenuta da $A$ sostituendo $\mathbf{a}_{i}$ con $\mathbf{a}_{i} + t\mathbf{a}_{j}$
>>Allora $\Row(A) = \Span(\mathbf{a}_{1}^T,\dots,\mathbf{a}_{i}^T, \dots, \mathbf{a}_{j}^T, \dots, \mathbf{a}_{m}^T)$ e
>>$\Row(B) = \Span(\mathbf{a}_{1}^T, \dots, \mathbf{a}_{i}^T + t \cdot \mathbf{a}_{j}^T, \dots, \mathbf{a}_{j}^T, \dots, a_{m}^T)$. 
>>Osserviamo che tutti i gneratori di $\Row(B)$ appartengono anche a $\Row(A)$ quindi $\Row(B) \subseteq \Row(A)$. Viceversa i generatori di $\Row(A)$ appartengono a $\Row(B)$ infatti:
>> $$ \mathbf{a}_{1}^T, \dots, \mathbf{a}_{j}^T, \dots, \mathbf{a}_{m}^T\quad e \quad \mathbf{a}_{i}^T = (\mathbf{a}_{i}^T + t\mathbf{a}_{j}^T) - t\mathbf{a}_{j}^T \in \Row(B) $$
>> Quindi $\Row(A) \subseteq \Row(B)$. Ma l'unica possibiltà che soddisfa entrambe le conclusioni è $\Row(A) = \Row(B)$
>> Quindi essendo $U$ ottenuta da $A$ tramite un numero finito di operazioni elementari sulla righe abbiamo:
>> $$ A \to B_{1} \to B_{2} \to \dots \to B_{n} = U $$
>> E di conseguenza
>>  $$ \Row(A) = \Row(B_{1}) = \Row(B_{2}) = \dots = \Row(U) $$
>>  Dimostriamo che le righe non nulle di $U$ formano una base di $\Row(A)$ essendo $U$ ridotta a scala si ha che:
>>  $$ U = \begin{bmatrix}
>> \mathbf{u}_{1} \\
\vdots \\
\mathbf{u}_{r} \\
0 \\
\vdots \\
0
>>\end{bmatrix} = \begin{bmatrix}
>>p_{1} & *  & * &\dots &* \\
>>0 &\dots\ 0 &p_{2} & *\dots &* \\
>> \vdots & \vdots & \vdots & \vdots & \vdots \\
>>0 & 0 & \dots & p_{2} & \dots* \\
\vdots & \vdots & \vdots & 0 &\dots 0 \\
\vdots & \vdots & \vdots & \vdots & \vdots \\
0 & 0 & \dots & 0 & 0
>>\end{bmatrix}$$
>>Osserviamo che $\mathbf{u}_{1}^T, \dots, \mathbf{u}_{r}^T$ sono generatori di $\Row(A)$ essendo: $\Row(U) = \Span(\mathbf{u}_{1}^T, \dots, \mathbf{u}_{r}^T) = \Row(A)$. Dimostriamo che sono linearmente indipendenti ovvero:
>> $$ t_{1}\mathbf{u}_{1}^T + \dots + t_{r}\mathbf{u}_{r}^T = \mathbf{0} \implies t_{1} = \dots = t_{r} = 0 $$. Notiamo che
>> $$ t_{1}\mathbf{u}_{1}^T + \dots + t_{r}\mathbf{u}_{r}^T = t_{1} \begin{bmatrix}
>>p_{1} \\
>> \text{*} \\
\vdots\\
>>\vdots \\
>> \text{*}
\end{bmatrix} + t_{2}
\begin{bmatrix}
>>0 \\
>>\vdots \\
>> p_{2} \\ 
\vdots\\
>> \text{*}
\end{bmatrix} + \dots + \begin{bmatrix}
>>0 \\
>>\vdots \\
>> 0 \\
p_{r} \\
> \text{*}
\end{bmatrix} = \begin{bmatrix}
>>0 \\
>>\vdots \\
>>0 \\
>> \vdots \\
0
\end{bmatrix}$$
>>$$ \iff \begin{cases}
>> t_{1}\underbrace{ p_{1} }_{ \neq {0} } = 0 \\
>> \bullet + t_{2}\underbrace{ p_{2} }_{ \neq 0 } = 0 \\
>> \vdots \\
\bullet \dots \bullet + t_{r}\underbrace{ p_{r} }_{ \neq {0} } = 0 
>>\end{cases} \iff t_{1} = t_{2} = \dots = t_{r} = 0$$
>>Quindi $\dim(\Row(U)) = r(A) = \dim(\Row(A))$


>[!oss]
>La precedente dimostrazione ci fornisce un algoritmo per determinare una base di un sottospazio vettoriale di $\mathbb{K}^n$ generato da un certo numero di vettori $\mathbf{v}_{1},\dots,\mathbf{v}_{d} \in \mathbb{K}^n$. Sia $H = \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{})$
>definiamo:
> $$ A = \begin{bmatrix}
\mathbf{v}_{1}^T \\
\vdots \\
\mathbf{v}_{d}^T
\end{bmatrix} \xrightarrow{\text{M.E.G.}} U =
\begin{bmatrix}
>\mathbf{u}_{1} \\
\vdots \\
\mathbf{u}_{r} \\
0 \\
\vdots \\
0
>\end{bmatrix}$$
Con $U$ matrice a scala
Per la proposizione precedente $\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{r} \right\}$ è una base per $H$

>[!esempio]
>Determinare una base pper $H=\Span=\left( \begin{bmatrix}1 \\2\\1\\1\end{bmatrix},\begin{bmatrix}-1 \\1\\0\\1\end{bmatrix},\begin{bmatrix}0 \\3\\1\\2\end{bmatrix} \right)$
>Poniamo
> $$ A = \begin{bmatrix}
>\mathbf{v}_{1}^T \\
\mathbf{v}_{2}^T \\
\mathbf{v}_{3}^T
>\end{bmatrix} = \begin{bmatrix}
1 & 2 & 1 & 1 \\
-1 & 1 & 0 & 1 \\
0 & 3 & 1 & 2
\end{bmatrix} = \begin{bmatrix}
1 & 2 & 1 & 1 \\
0 & 3 & 1 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}$$
Quindi $$ \mathbf{u}_{1} = \begin{bmatrix}
>1 \\
2 \\
1 \\
1
\end{bmatrix}\quad e \quad
\mathbf{u}_{2} = \begin{bmatrix}
0 \\
3 \\
1 \\
2
\end{bmatrix}$$  formano una base di $H$, in particolare $\dim(H) = 2$

>[!oss]
>1.
>Essendo $r(A) = \dim(\Row(A))$, il rango di $A$ non dipende da come ho effettuato le operazioni elementari, ovvero non dipende da $U$
>
>2.
>$r(A)$ coincide con il massimo numero di righe di $A$ linearmente indipendenti
>
>3.
>Data $A \in M_{\mathbb{K}(n,n)}$, sia $$\begin{align}\mathcal{L}_{A} : \mathbb{K}^n &\to \mathbb{K}^m\\\mathbf{v} &\mapsto A \mathbf{v}\end{align}$$
>e $$\begin{align}
>A = [\mathbf{c}_{1}|\dots|\mathbf{c}_{n}]\quad \ker(A) &= \left\{ \mathbf{v} \in \mathbb{K}^n | A \cdot \mathbf{v} = \mathbf{0} \right\} = \ker(A) \\ &= \left\{ \mathbf{v} = [\mathbf{v}_{1} \dots \mathbf{v}_{n}]^T \in \mathbb{K}^n | \mathbf{v}_{1}\mathbf{c}_{1} + \dots + \mathbf{v}_{n}\mathbf{c}_{n} = \mathbf{0}\right\}
>\end{align}  $$
>Inoltre $\Im(\mathcal{L}_{A}) = \Col(A)$. Infatti $\Col(A) = \Span(\mathbf{c}_{1},\dots,\mathbf{c}_{n})$  e:
>$$\begin{align}
>\Im(\mathcal{L}_{A}) &= \left\{ A\mathbf{v} \in \mathbb{K}^m : \mathbf{v} \in \mathbb{K}^n \right\} \\
&= \left\{ v_{1}\mathbf{c}_{1} + \dots + v_{n}\mathbf{c}_{n} : \mathbf{v} \in \mathbb{K}^n\right\} = \Span(\mathbf{c}_{1},\dots,\mathbf{c}_{n}) 
\end{align}$$
Possiamo infine dire che $\Col(A) = \left\{ \mathbf{b} \in \mathbb{K}^n: A\mathbf{v} = \mathbf{b}\right\}$


>[!teorema]
>Data $A \in M_{\mathbb{K}}(m,n)$ allora $\dim(\Row(A)) = \dim(\Col(A))$
>
>>[!dim]

In generale $\Row(A) \neq \Col(A)$, consideriamo ad esempio il caso $A \in M_{\mathbb{K}}(m,n)$ con $m \neq n : \Row(A) \subseteq \mathbb{R}^n \neq \mathbb{R}^m \supseteq \Col(A)$. Anche nel caso $m = n$ non è detto che siano equivalenti:
>[!esempio]
>$A = \begin{bmatrix}1 & 1\\-1 & -1\end{bmatrix}$ allora:
> $$ \Row(A) = \Span \left( \begin{bmatrix}1\\-1\end{bmatrix} \right) \neq \Span \left( \begin{bmatrix}1 \\ 1\end{bmatrix} \right) = \Col(A)  $$
> 
> ```tikz
>\begin{document}
>\begin{tikzpicture}[scale = 2.5]
>\draw[->] (-1,0) -- (1.5,0) node[right]{x};
>\draw[->] (0,-1) -- (0,1.5) node[right]{y};
>\draw[red] (-1,-1) -- (1.5,1.5) node[below right]{Col(A)};
>\draw[green] (-1,1) -- (1.5,-1.5) node[above right]{Row(A)};
>\draw[thick, ->] (0,0) -- (0.5,0.5);
>\draw[thick, ->] (0,0) -- (0.5,-0.5);
>\end{tikzpicture}
>\end{document}
>```
> Quello che non cambia è la dimensione: $\dim(\Row(A)) = \dim(\Col(A))$


# Rango di un'[[Applicazioni lineari|applicazione lineare]]
Sia $A \in M_{\mathbb{K}(n,n)}$ e consideriamo : $\mathcal{L}_{A} : \mathbb{K}^n \to \mathbb{K}^m (\mathbf{v} \mapsto A \mathbf{v})$
Allora:
1. $\mathcal{L}_{A}$ è iniettiva se e solo se $r(A) = n$, quindi se $\ker(A) = \ker(\mathcal{L}_{A})=\left\{ \mathbf{0} \right\}$
2. $\mathcal{L}_{A}$ è suriettiva se e solo se $r(A) = m$ quindi se $\Im(\mathcal{L}_{A}) = \Col(A) = \mathbb{K}^m$
3. $\mathcal{L}_{A}$ è biettiva se e solo se $r(A) = m = n$ quindi se $\mathcal{L}_{A}$ è [[Applicazioni lineari#Isomorfismi|isomorfismo]]

>[!teorema] Teorema di Rappresentazione
>Siano $V$ e $W$ spazi vettoriali su $\mathbb{K}$ t.c. $\dim(V) = n$
>e $\dim(W) = m$. Sia $\mathcal{B} = \left\{ \mathbf{b}_{1}, \dots, \mathbf{b}_{n} \right\}$ una base di $V$ e sia $\mathcal{C} = \left\{ \mathbf{c}_{1}, \dots, \mathbf{c}_{m} \right\}$ una base di $W$. Sia $\mathcal{L} : V \to W$ un'applicazione lineare. Consideriamo il seguente diagramma
> ```tikz
> \usepackage{tikz-cd}
> \usepackage{amsfonts}
>\tikzcdset{scale cd/.style={every label/.append style={scale=#1}, cells={nodes={scale=#1}}}}
>\begin{document}
>\begin{tikzcd}[scale cd = 1.5, sep = large]
> &V \arrow[r,"\mathcal{L}"] \arrow[d, "x_\mathcal{B}"]&W \arrow[d, "x_\mathcal{C}"] \\
> &\mathbb K^n \arrow[r, "A", red] &\mathbb K^m
>\end{tikzcd}
>\begin{tikzcd}[scale cd = 1.5, sep = large]
> &v \arrow[r, mapsto] \arrow[d,mapsto] &\mathcal L (\mathbf v) \arrow[d,mapsto] \\
> &\mathbf{x} = x_\mathcal{B}(\mathbf{v}) \arrow[r, red, mapsto] &\mathbf{y} = x 
>\end{tikzcd}
>\end{document}
>```
>Ci chiediamo: esiste $A \in M_{\mathbb{K}(m,n)}$ tale che per ogni $\mathbf{v} \in V$ si ha $x_{e}(\mathcal{L}(\mathbf{v})) = A \cdot x_{\mathcal{B}}(\mathbf{v})$ o $\mathbf{y} = A \mathbf{x}$

>[!esempio]
>$V = \mathbb{R}[x] \leq 2$ e $\mathcal{B} = \left\{ 1,x,x^2 \right\}$ allora
> $$\begin{align}
 x_{\mathcal{B}} : \mathbb{R}[x]_{\leq 2} &\to \mathbb{R}^3 \\
a + bx + cx^2 &\mapsto \begin{bmatrix}
> a \\
b \\
c
\end{bmatrix}
\end{align}$$
>
> $$ W = R[x]_{\leq 1} \text{ e } \mathcal{C} = \left\{ 1,x \right\} \text{ allora}$$
> $$ \begin{align}
 x_{\mathcal{C}} : \mathbb{R}[x]_{\leq 1} &\to \mathbb{R}^2 \\
\alpha + \beta x &\mapsto \begin{bmatrix}
\alpha \\
\beta
\end{bmatrix}
\end{align} $$
Consideriamo l'applicazione lineare $$\begin{align}
D : \mathbb{R}[x]_{\leq 2} \to \mathbb{R}[x]_{\leq 1} \\
p(x) = a + bx + cx^2 \mapsto D(p(x)) = b + 2cx \\
\end{align}$$
Ci chiediamo se esiste $A \in M_{\mathbb{R}}(2,3) t.c.$
>$$ \begin{align}
>x_{\mathcal{C}} (D(p(x))) &= A \cdot x_{\mathcal{B}}(p(x)) \\
>\begin{bmatrix}
>b \\ 2c
>\end{bmatrix} &= A \cdot \begin{bmatrix}
> a \\
b \\
c \\
>
\end{bmatrix}
>\end{align} $$


>[!teorema] Teorema di Rappresentazione di un'applicazionel ineare
>Siano $V,W$ spazi vettoriali su $\mathbb{K}$ tali che $\dim(V) = n$ e $\dim(W) = m$.
>Siano $\mathcal{B} = \left\{ \mathbf{b_{1}},\dots,\mathbf{b}_{n} \right\}$ una base di $V$ e $\mathcal{C} = \left\{ \mathbf{c}_{1},\dots,\mathbf{c}_{m} \right\}$ una base di $W$. Siano $\mathbf{x}=[x_{1} \dots x_{n}]^T$ le coordinate di $\mathbf{v} \in V$ rispetto a $\mathcal{B}$ e $\mathbf{y} = [y_{1} \dots y_{m}]^T$ le coordinate di $\mathcal{L}(\mathbf{v}) \in W$ rispetto a $\mathcal{C}$. Allora esiste un'unica matrice $A \in M_{\mathbb{K}}(m,n)$ tale che $\mathbf{y} = A \mathbf{x}$.
>$A$ si chiama **matrice rappresentativa** di $\mathcal{L}$ rispetto alle basi $\mathcal{B}$ e $\mathcal{C}$ e si puó indicare con: $A = M_{\mathcal{C}}^{\mathcal{B}}(\mathcal{L})$
>
>>[!dim]
>>Essendo $x_{\mathcal{B}}(\mathbf{v}) = [x_{1} \dots x_{n}]^T$ allora $\mathbf{v} = x_{1}\mathbf{b}_{1} + \dots + x_{n}\mathbf{b}_{n}$. Inoltre $\mathcal{L}(\mathbf{b}_{i}) \in W \forall i = 1,\dots,n$ quindi li posso scrivere utilizzando la base $\mathbf{c}_{1},\dots,\mathbf{c}_{n}$:
>> $$ \begin{align}
>>\mathcal{L}(\mathbf{b}_{1}) = a_{11} \mathbf{c}_{1} + a_{21}\mathbf{c}_{2} + \dots + a_{m1}\mathbf{c}_{m} \\
>> \vdots \\
>> \mathcal{L}(\mathbf{b}_{n}) = a_{1n}\mathbf{c}_{1} + a_{2n}\mathbf{c}_{2} + \dots + a_{mn}\mathbf{c}_{m}
>>\end{align} $$
>>Allora si ha che:
>> $$\begin{align}
>> \mathcal{L}(\mathbf{v}) =&\mathcal{L}(x_{1}\mathbf{b}_{1} + \dots + x_{n}\mathbf{b}_{n}) \\ 
>>=&x_{1}\mathcal{L}(\mathbf{b}_{1})+ \dots + x_{n}\mathcal{L}(\mathbf{b}_{n})\\
>>=&x_{1}(a_{11}\mathbf{c}_{1} + a_{21}\mathbf{c_{2}} + \dots + a_{m_{1}}\mathbf{c}_{m}) + \\
>>+&x_{2}(a_{12}\mathbf{c}_{1} + a_{22}\mathbf{c}_{2} + \dots + a_{m2}\mathbf{c}_{2}) + \\
>>&\vdots \\
>>+&x_{n}(a_{1n}\mathbf{c}_{1} + a_{2n}\mathbf{c}_{2} + \dots + a_{mn}\mathbf{c}_{m}) \\
>>&(\text{raggruppiamo i coefficienti dei vettori } \mathbf{c}_{i}) \\
>> =&(x_{1}a_{11} + x_{2}a_{12} + \dots + x_{n}a_{1n})\mathbf{c}_{1} +\\
>> +&(x_{1}a_{21} + x_{2}a_{22} + \dots + x_{n}a_{2n})\mathbf{c}_{2} +\\
>> \vdots \\
>> +&(x_{1}a_{m1} + x_{2}a_{m2} + \dots + x_{n}a_{mn})\mathbf{c}_{m}
>>\end{align} 
>>$$
>>Quindi $\mathcal{L}(\mathbf{v}) + y_{1}\mathbf{c}_{1} + y_{2}\mathbf{c}_{2} + \dots + y_{m}\mathbf{c}_{m}$ e per unicità di scrittura si ha che:
>> $$ \begin{cases}
>> y_{1} = a_{11}x_{1} + a_{12}x_{2} + \dots + a_{1n}x_{n} \\
>> y_{2} = a_{21}x_{1} + a_{22}x_{2} + \dots + a_{2n}x_{n} \\
>> \vdots  \\
>> y_{m} = a_{m1}x_{1} + a_{m2}x_{2} + \dots + a_{mn}x_{m}
>>\end{cases} $$
>>Ove
>> $$ A = \begin{bmatrix}
>>a_{11} & a_{12}  & \dots & a_{1n} \\
>>a_{21} & a_{22} & \dots  & a_{2n} \\
>> \vdots & \vdots &  & \vdots \\
>> a_{m 1} & a_{m2} & \dots & a_{mn}
\end{bmatrix} = [x_{\mathcal{C}} (\mathcal{L}(\mathbf{b_{1}}))| \dots | x_{\mathcal{C}}(\mathcal{L}(\mathbf{b}_{n}))]$$

>[!oss]
>1.
>La matrice $M_{\mathcal{C}}^\mathcal{B}(\mathcal{L})$ ha come colonne le coordinate di $\mathcal{L}(\mathbf{b}_{1},\dots,\mathbf{b}_{n})$ rispetto alla base $\mathcal{C}$ quindi è completamente caratterizata: $x_{\mathcal{C}}(\mathcal{L}(\mathbf{b}_{1})), x_{\mathcal{C}}(\mathcal{L}(\mathbf{b}_{2})),\dots, x_\mathcal{C}(\mathcal{L}(\mathbf{b}_{n}))$. Ovvero note queste cordinate sapiamo scrivere $\mathcal{L}(\mathbf{v}) \forall \mathbf{v} \in V$
>
>2.
>Ogni applicazione lineare da $\mathbb{K}^n$ a $\mathbb{K}^m$ si ottiene per moltiplicazione a sinistra di una matrice $A \in M_{\mathbb{K}(m,n)}$. Infatti se $\mathcal{B}$ e $\mathcal{C}$ sono le basi canoniche di $\mathbb{K}^n$ e $\mathbb{K}^m$ allora:
> $\forall \mathbf{x} \in \mathbb{K}^n, x_{\mathcal{B}}(\mathbf{x})=\mathbf{x}$ e $\forall \mathbf{y} \in K^m, x_{\mathcal{C}}(\mathbf{y}) = \mathbf{y}$. Quindi $x_{\mathcal{C}}(\mathcal{L}(\mathbf{x})) = \mathcal{L}(\mathbf{x}) = A \cdot \mathbf{x} \implies \mathcal{L}(\mathbf{x}) = A \mathbf{x}$

>[!esempio] esempi
>1. 
>Sia $V = \mathbb{R}^3$ e $W = \mathbb{R}^2$, $\xi_{3} = \{\mathbf{e}_{1},\mathbf{e}_{2},\mathbf{e}_{3}\}$ la base canonica di $\mathbb{R}^3$ e $\mathcal{C} = \left\{ \mathbf{e}_{1}', \mathbf{e}_{2}' \right\}$ la base canonica di $\mathbb{R}^2$. Scrivere la matrice rappresentativa di $\mathcal{L} : V to W$ tale che:
> $$ \begin{cases}
> \mathcal{L}(\mathbf{e}_{1}) = \mathbf{e}_{1}' + \mathbf{e}_{2}' \\
> \mathcal{L}(\mathbf{e}_{2}) = -\mathbf{e}_{2}' \\
> \mathcal{L}(\mathbf{e}) = -\mathbf{e}_{1}' + 2 \mathbf{e}_{2}'
\end{cases} \text{ osserviamo che }
\begin{cases}
> \mathcal{L}(\mathbf{e}_{1}) = 1\mathbf{e}_{1}' + 1\mathbf{e}_{2}' \\
> \mathcal{L}(\mathbf{e}_{2}) = 0\mathbf{e}_{1}' - 1\mathbf{e}_{2}' \\
> \mathcal{L}(\mathbf{e}_{3}) = -1\mathbf{e}_{1}' + 2\mathbf{e}_{2}'
\end{cases}$$
Quindi la matrice $A$ ha per colonne le coordinate dell'applicazione lineare in $\mathcal{C}$:
>$$ \begin{align}
> A &= \left[   \begin{array}{c|c|c} x_{\mathcal{C}}(\mathcal{L}(\mathbf{e}_{1})) & x_{\mathcal{C}}(\mathcal{L}(\mathbf{e}_{2})) & x_{\mathcal{C}} \end{array}\right] \\
&= \begin{bmatrix}
1 & 0 & -1 \\
1 & -1 & 2
\end{bmatrix}
>\end{align} $$
>
>2.
>Una variante del precedente è scrivere la matrice rappresentativa di $\mathcal{L} : V \to W$ tale che:
> $$ \begin{cases}
> \mathcal{L}(\mathbf{e}_{1}) = \begin{bmatrix}3 & 4\end{bmatrix}^T \\
> \mathcal{L}(\mathbf{e}_{2}) = \begin{bmatrix}2 & -2\end{bmatrix}^T \\
> \mathcal{L}(\mathbf{e}_{3}) = \begin{bmatrix}1 & 0\end{bmatrix}^T
>\end{cases} \to 
>\begin{cases}
> \mathcal{L}(\mathbf{e}_{1}) = 3\mathbf{e}_{1}' + 4\mathbf{e}_{2}' \\
> \mathcal{L}(\mathbf{e}_{2}) = 2\mathbf{e}_{1}' - 2\mathbf{e}_{2}' \\
> \mathcal{L}(\mathbf{e}_{3}) = 1\mathbf{e}_{1}' + 0\mathbf{e}_{2}'
>\end{cases}$$
> $$ A = \begin{bmatrix}
> 3 & 2 & 1 \\
4 & -2 & 0
>\end{bmatrix} $$
>
>3.
>Un'ulteriore variante del precedenet esercizio è la seguente: Determinare la matrice rappresentativa di $\mathcal{L} : V \to W$ tale che:
> $$ \begin{cases}
> \mathcal{L}(\mathbf{e}_{1}) = \mathbf{e}_{1}' + \mathbf{e}_{2}' \\
>\mathcal{L}(\mathbf{e}_{2}) = -\mathbf{e}_{2}' \\
> \mathcal{L}(\mathbf{e}_{1} + \mathbf{e}_{3}) = -\mathbf{e}_{2}
>\end{cases} \to \begin{cases}
>\mathcal{L}(\mathbf{e}_{1}) = \mathbf{e}_{1}' + \mathbf{e}_{2}' \\
>\mathcal{L}(\mathbf{e}_{2}) = -\mathbf{e}_{2}' \\
>\mathbf{e}_{1}' + \mathbf{e}_{2}' + \mathcal{L}(\mathbf{e}_{3}) = -\mathbf{e}_{2}
>\end{cases}$$
> $$ \begin{cases}
> \mathcal{L}(\mathbf{e}_{1}) = \mathbf{e}_{1}' + \mathbf{e}_{2}' \\
> \mathcal{L}(\mathbf{e}_{2}) = -\mathbf{e}_{2}' \\
> \mathcal{L}(\mathbf{e}_{3}) = -\mathbf{e}_{1}' - 2\mathbf{e}_{2}'
\end{cases} \to A = \begin{bmatrix}
> 1 & 0 & -1 \\
> 1 & -1 & -2
>\end{bmatrix}$$
>4.
>Scrivere la matrice rappresentativa di 
> $D:\mathbb{R}[x]_{\leq 2} \to \mathbb{R}[x]_{\leq1}$ rispetto alle basi canoniche:
>  $\mathcal{B} = \left\{ 1,x,x^2 \right\}$ e $\mathcal{C} = \left\{ 1,x \right\}$. Calcoliamo dunque le coordinate delle immagini dei vettori di $\mathcal{B}$ tramite $D$ rispetto alla base $C$:
>   $$ \begin{align}
>&D(1) = 0 = 0 \cdot 1 + 0 \cdot x  \\
>&D(x) = 1 = 1 \cdot 1 + 0 \cdot x \\
>&D(x^2) = 2\cdot x = 0 \cdot 1 + 2 \cdot x
>\end{align} \to A = \begin{bmatrix}
>0 & 1 & 0 \\
0 & 0 & 2
>\end{bmatrix}$$
> Osserviamo che: $D(a + bx + cx^2) = b + 2cx$, infatti:
> $$ \begin{bmatrix}
>0 & 1 & 0 \\
>0 & 0 & 2
>\end{bmatrix}\begin{bmatrix}
>a \\
b \\
c 
\end{bmatrix} = \begin{bmatrix}
>b \\
2c
\end{bmatrix} $$
>
>>[!danger]
>>Se al posto di $\mathcal{B}$ considero $\mathcal{B}' = \left\{ x^2, x, 1 \right\}$ e $\mathcal{C}$ rimane $\mathcal{C}$ allora la matrice rappresentativa cambia
>> $$A = \begin{bmatrix}
>>0 & 1 & 0 \\
2 & 0 & 0
>>\end{bmatrix} $$
>
>>[!danger]
>>Se al posto di $\mathcal{C}$ considero $\mathcal{C}' = \left\{ 1,x,x^2 \right\}$ e $\mathcal{B}$ rimane uguale si ha:
>> $$ A = \begin{bmatrix}
>>0 & 1 & 0 \\
>>0 & 0 & 2 \\
>>0 & 0 & 0
>>\end{bmatrix} $$

>[!oss]
>Quando si ha un'applicazione lineare $\mathcal{L} : \mathbb{K}^n \to \mathbb{K}^m$ e non si precisano le basisi sottointendono le basi canoniche

>[!oss]
>Se $id_{V} : V \to V\ (\mathbf{v} \mapsto \mathbf{v})$ è l'identità e si considera una stessa base per dominio e codominio $\mathcal{B}$, allora:
> $$ M_{\mathcal{B}}^\mathcal{B}(id_{V}) = \mathbb{1}_{n}\quad\text{se}\quad|\mathcal{B}| = n $$
> Se considero una base diversa $\mathcal{C} = \left\{ \mathbf{c}_{1},\dots,\mathbf{c}_{n} \right\}$ per il codominio allora per determinare $M_{\mathcal{C}}^\mathcal{B}(id_{V})$ devo determinare le coordinate dei $\mathbf{b}_{i}$  rispetto a $\mathcal{C} = \left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$
> $$\begin{align}
> M_{\mathcal{C}}^\mathcal{B} (id_{V}) &= \left[ x_{\mathcal{C}}(id_{V}(\mathbf{b_{1}})) | \dots | x_{\mathcal{C}}(id_{V}(\mathbf{b}_{n})) \right] \\
> &=\left[ x_{\mathcal{C}}(\mathbf{b}_{1}) | \dots | x_{\mathcal{C}}(\mathbf{b}_{n}) \right] 
>\end{align}  $$
>Ove $x_{\mathcal{C}}(\mathbf{b}_{i}) = \left[ p_{1i}\quad \dots\quad p_{ni} \right]^T$, $id(\mathbf{b}_{i}) = \mathbf{b}_{i} = p_{1i}\mathbf{c}_{1} + \dots + p_{ni}\mathbf{c}_{n}$
>Quindi:
> $$ M_{\mathcal{C}}^{\mathcal{B}} (id_{V})= \begin{bmatrix}p_{11} & p_{12} & \dots & p_{1n} \\
>p_{21} & p_{22} & \dots & p_{2n} \\
>\vdots & \vdots & &\vdots \\
>p_{n1} & p_{n2} & \dots &p_{nn}
\end{bmatrix} = P$$
>Quindi se conosco le coordinate di $\mathbf{v}$ rispetto alla base $\mathcal{B} : \mathbf{x} = [x_{1} \dots x_{n}]^T$ e voglio determinare le coordinate di $\mathbf{v}$ rispetto alla base $\mathcal{C} : \mathbf{y} = [y_{1},\dots,y_{n}]^T$, calcolo: $\mathbf{y} = P\mathbf{x}$. $P$ è detta [[matrice di passaggio]] dalla base $C$ alla base $B$


>[!oss]
>Se $V = \mathbb{K}^n, \xi = \left\{ \mathbf{e}_{1},\dots,\mathbf{e}_{n} \right\}$ è la base canonica e $\mathcal{B} = \left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ è un'altra base di $\mathbb{K}^n$ allora:
> $$ M_{\mathcal{C}}^\mathcal{B}(id_{\mathbb{K}^n}) = \left[ \begin{array}{c|c|c}
>\mathbf{b}_{1}&\dots&\mathbf{b}_{n}
>\end{array} \right]  $$

>[!proposizione] proposizione 1
>Siano $\mathcal{L}_{1} : V \to W$ e $\mathcal{L}_{2} : W \to Z$ due applicazioni lineare ove $V,W$ e $Z$ spazi vettoriali su $\mathbb{K}$. Siano $\mathcal{B}_{1}, \mathcal{B}_{2}, \mathcal{B}_{3}$ rispettivamente basi finite per $V,W$ e $Z$. Allora si ha che
> $$ M_{\mathcal{B}_{3}}^{\mathcal{B}_{1}}(\mathcal{L}_{2} \circ \mathcal{L}_{1}) = M_{\mathcal{B_{3}}}^{\mathcal{B}_{2}} (\mathcal{L}_{2}) \circ M(\mathcal{L}_{1})_{\mathcal{B}_{2}}^{\mathcal{B}_{1}}$$
> Diagramma: 
> $$ V \xrightarrow{\mathcal{L}_{1}} W_{B_{2}} \xrightarrow{\mathcal{L}_{2}} Z_{\mathcal{B}_{3}} $$
> 
>>[!dim]
>>Devo determinare quell'unica matrice $A$ tale che: $x_{\mathcal{B}_{3}}(\mathcal{L}_{2 \circ \mathcal{L}_{1}(\mathbf{v})}) = Ax_{\mathcal{B}_{1}}(\mathbf{v})$ ma
>> $$ \begin{align}
>>x_{\mathcal{B}_{3}}(\mathcal{L}_{2}\circ\mathcal{L}_{1} (\mathbf{v})) &= x_{\mathcal{B}_{3}}(\mathcal{L}_{2}(\mathcal{L}_{1}(\mathbf{v}))) = M_{\mathcal{B}_{3}}^{\mathcal{B}_{2}}(\mathcal{L}_{2})x_{\mathcal{B}_{2}}(\mathcal{L}_{1}(\mathbf{v})) \\
>> &=M_{\mathcal{B}_{3}}^{\mathcal{B}_{1}}(\mathcal{L}_{2}) M_{\mathcal{B}_{2}}^{\mathcal{B}_{1}}(\mathcal{L}_{1})x_{\mathcal{B}_{1}}(\mathbf{v})
>>\end{align}
>>$$
>> $$ \CVD $$

>[!oss]
>Se $\mathcal{L} : V \to W$ è lineare ed invertibile e $\mathcal{B}$ e $\mathcal{C}$sono basi finite per $V$ e $W$ allora per $\mathcal{L}^{-1} : W \to V$ si ha: $M_{\mathcal{B}}^\mathcal{C}(\mathcal{L}^{-1}) = (M_{\mathcal{C}}^\mathcal{B} (\mathcal{L}))^{-1}$. Infatti
> $id_{V} = \mathcal{L}^{-1} \cdot \mathcal{L}$ e $M_{\mathcal{B}}^\mathcal{B}(id_{V}) = \mathbb{1}_{n}$ inoltre
>  $$ M_{\mathcal{B}}^\mathcal{B}(id_{V}) = M_{\mathcal{B}}^\mathcal{B}(\mathcal{L}^{-1} \circ \mathcal{L} ) = M_{\mathcal{B}}^\mathcal{C}(\mathcal{L}^{-1}) \circ M_{\mathcal{C}}^\mathcal{B}(\mathcal{L}) = \mathbb{1}_{n} \implies M_{\mathcal{B}}^\mathcal{C}(\mathcal{L}^{-1}) = (M_{\mathcal{C}}^\mathcal{B}(\mathcal{L}))^{-1}$$

[[cambiamento di coordinate]]
