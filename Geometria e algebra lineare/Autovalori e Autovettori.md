---
alias: autovalori, autovettori, autospazi, autovalore, autovettore, autospazio
---
>[!esempio]
>Nel piano fissiamo un sistema di riferimento ortogonale ed una retta $r$ per l'origine. Sia $S : \mathbb{R}^2 \to \mathbb{R}^2$ la riflessione ortogonale rispetto alla retta $r$	.
>Vogliamo determinare la [[matrice rappresentativa]] di $S$ rispetto alla [[base canonica]].
> ```tikz
>\begin{document}
>\begin{tikzpicture}[scale = 2]
>\draw[->] (-1,0) -- (2,0) node[below]{x};
>\draw[->] (0,-1) -- (0,2) node[left]{y};
>\node[below right] (0,0){O};
> \draw[thick,cyan] (-1.2,-1.2) -- (2.2,2.2) node[below]{$r$};
> \draw[->, yellow, thick] (0,0) -- (0,0.5)node[left,yellow]{$\color{yellow}\mathbf{e}_{2}$};
> \draw[->,yellow, thick] (0,0) -- (0.5,0)node[below,yellow]{$\mathbf{e}_{1}$};
> \draw[->,red,thick] (0,0) -- (.6,1.5) node[red, above]{$S(\mathbf{v})$};
> \draw[->,green,thick] (0,0) -- (1.5,.6) node[green, above]{$\mathbf{v}$};
> \draw[thick] (0.5,0.5) arc (50:20:0.5)node[left]{$\alpha$};
> \draw[thick] (0.6,0.6) arc (40:75:0.6)node[below]{$\alpha$};
>\end{tikzpicture}
>\end{document}
>```
>Se $\mathcal{B}$ è l'angolo formata da $r$ con $\mathbf{e}_{1}$
>allora $$S(\mathbf{e}_{1}) = \begin{bmatrix}
>\cos(2\beta) \\
\sin(2\beta)
>\end{bmatrix}$$
>Invece
> $$ S(\mathbf{e}_{2}) = \begin{bmatrix}
>\cos\left( 2 \beta - \frac{\pi}{2} \right) \\
> \sin\left( 2\beta - \frac{\pi}{2} \right)
>\end{bmatrix} = \begin{bmatrix}
> \sin(2\beta) \\
> -\cos(2 \beta)
>\end{bmatrix} \implies M_{\xi_{2}}^{\xi_{2}}(S) = \begin{bmatrix}
>\cos(2\beta) & \sin(2\beta) \\
> \sin(2\beta) & -\cos(2\beta)
\end{bmatrix}$$
>Possiamo peró considerare un'altra base di $\mathbb{R}^2$ che renda la matrice rappresentativa i $S$ molto piú semplice. 
>Sia $\mathbf{b}_{1} = \begin{bmatrix}\cos \beta  \\ \sin \beta\end{bmatrix}$ il vettore diretto come la retta $r$ allora $S(\mathbf{b}_{1}) = \mathbf{b}_{1}$. Sia $\mathbf{b}_{2}$ un vettore ortogonale a $\mathbf{b}_{1}$, $\mathbf{b}_{2} = \begin{bmatrix}-\sin \beta \\ \cos \beta\end{bmatrix}$
>allora $S(\mathbf{b}_{2})= -\mathbf{b}_{2}$. Posto $\mathcal{B} = \left\{ \mathbf{b}_{1},\mathbf{b}_{2} \right\}$ allora
> ```tikz
>\begin{document}
>\begin{tikzpicture}[scale = 2]
>\draw[->] (-1,0) -- (2,0) node[below]{x};
>\draw[->] (0,-1) -- (0,2) node[left]{y};
>\node[below right] (0,0){O};
> \draw[thick,cyan] (-1.2,-1.2) -- (2.2,2.2) node[below]{$r$};
> \draw[thick,red, ->] (0,0) -- (0.5,0.5) node[below]{$\mathbf{b}_{1}$};
> \draw[thick,red, ->] (0,0) -- (-0.5,0.5) node[below]{$\mathbf{b}_{2}$};
>\end{tikzpicture}
>\end{document}
>```
>E abbiamo quindi
> $$ M_{\mathcal{B}}^\mathcal{B}(S)= \begin{bmatrix}
> 1 & 0 \\
> 0 & -1
>\end{bmatrix} $$
> $$ \begin{cases}
> S(\mathbf{b}_{1}) = 1 \mathbf{b}_{1} + 0 \mathbf{b}_{2} \\
>S(\mathbf{b}_{2}) = 0 \mathbf{b}_{1} + 1\mathbf{b}_{2}
>\end{cases} $$
> il fatto che $S(r\mathbf{b}_{1}) = rS(\mathbf{b}_{1}) = r\mathbf{b}_{1} \forall r \in \mathbb{R}$ significa che la riflessione manda la retta $r$ in se stessa. Analogamente il fatto che $S(r\mathbf{b}_{2}) = rS(\mathbf{b}_{2}) = -r\mathbf{b}_{2} \forall r \in \mathbb{R}$ signfica che la riflessione manda la retta perpendicolare a $r$ e passante per l'origine in se stessa

>[!def]
>Dato $V$ spazio vettoriale su $\mathbb{K}$, un [[Applicazioni lineari|applicazione lineare]] $\mathcal{L} : V \to V$ è detta endomorfismo


Dato un endomorfismo $d:V \to V, \dim(V) = n$ stabilire se esiste una base $\mathcal{B}$ di $V$ tale che $M_{\mathcal{B}}^\mathcal{B}(\mathcal{L}) = \diag(\lambda_{1},\dots,\lambda_{n})$ con
$$ \diag(\lambda_{1},\dots,\lambda_{n}) := \begin{bmatrix}
\lambda_{1} & 0 & \dots & 0 \\
0 & \lambda_{2} &  & \vdots \\
\vdots & \overset{0}\vdots &\ddots &  \underset{ 0 }{ \vdots } \\
0 & 0 & \dots_{0} & \lambda_{n}
\end{bmatrix}$$


>[!proposizione]
>Sia $V$ spazio vettoriale su $\mathbb{K}, \dim(V)=n$, sia $\mathcal{B}=\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \right\} \subseteq V$ una [[Base]] di $V$ allora
> $$ M_{\mathcal{B}}^\mathcal{B} =\diag(\lambda_{1},\dots,\lambda_{n}) \iff \mathcal{L}(\mathbf{v}_{1}) = \lambda_{i}\mathbf{v}_{i} \forall i = 1,\dots,n $$
>
>>[!dim]
>> $$ M_{\mathcal{B}}^{\mathcal{B}} (\mathcal{L}) + \diag(\lambda_{1},\dots,\lambda_{n}) = \begin{bmatrix}
>> \lambda_{1} & 0 & \dots & 0 \\
>> 0 & \underset{ 0 }{ \lambda_{2} } &  & \vdots \\
>>\vdots & \vdots & \ddots & \vdots \\
>>0 & 0 & \dots & \overset{0}{\lambda_{n}}
>>\end{bmatrix} $$
>>
>> $$ \iff \begin{cases}
>> \mathcal{L}(\mathbf{b}_{1} )= \lambda_{1}\mathbf{b}_{1} + 0\mathbf{b}_{2} + \dots + 0 \mathbf{b}_{n} \\
>> \mathcal{L}(\mathbf{b}_{2}) = 0\mathbf{b}_{1} + \lambda_{2}\mathbf{b}_{2} + \dots + 0\mathbf{b}_{n} \\
>> \vdots \\
>> \mathcal{L}(\mathbf{b}_{n}) = 0\mathbf{b}_{1} + \dots 0\mathbf{b}_{n-1} + \lambda_{n}\mathbf{b}_{n}
>>\end{cases} \iff 
>>\begin{cases}
>> \mathcal{L}(\mathbf{b}_{1}) = \lambda \mathbf{b}_{1} \\
>> \mathcal{L}(\mathbf{b}_{2}) = \lambda_{2} \mathbf{b}_{2} \\
>> \vdots \\
>> \mathcal{L}(\mathbf{b}_{n}) = \lambda_{n}\mathbf{b}_{n}
>>\end{cases} $$
>>


>[!def]
>Sia $V$ [[Spazi vettoriali|spazio vettoriale]] su $\mathbb{K}$ e $\mathcal{L} : V \to V$ endomorfismo. Si dice che $v \in V$ è **autovettore** di $\mathcal{L}$ se
>1. $\mathbf{v} \neq \mathbf{0}$
>2. $\exists \lambda \in \mathbb{K}$ tale che $\mathcal{L}(\mathbf{v}) = \lambda \mathbf{v}$
> 
>$\lambda$ si chiama autovalore di $\mathcal{L}$ relativo all'autovettore $\mathbf{v}$

>[!oss]
>nell'esempio ad inizio file $\mathbf{b}_{1}$ è autovettore per $S$ ($S(\mathbf{b}_{1}) = 1\mathbf{b}_{1}$) e $1$ è l'autovalore ad esso associato, anche $\mathbf{b}_{2}$ è autovettore per $S$ $(S (\mathbf{b}_{2}=-1 \mathbf{b}_{2}))$ e $-1$ è l'autovalore ad esso associato


>[!def]
>Sia $V$ spazio vettoriale su $\mathbb{K}$ e $\mathcal{L} : V \to V$ endomorfismo.
>Se $\lambda \in \mathbb{K}$ definiamo l'**autospazio** di $\mathcal{L}$ associato a $\lambda$:
> $$ \begin{align}
> V \lambda &:= \left\{ \mathbf{v} \in V : \mathcal{L}(\mathbf{v}) + \lambda \mathbf{v} \right\}  \\
> &= \left\{ \mathbf{v} \in V : \mathcal{L}(\mathbf{v}) - \lambda \mathbf{v} = \mathbf{0} \right\} = \ker(\mathcal{L} - \lambda id_{V})
>\end{align} $$
>Essendo $\lambda_{V}$ il kernel dell'applicazione linearea $\mathcal{L} - \lambda id_{V}$ Si ha che $V_{\lambda}$ è sottospazio vetoriale di $V$. Inoltre $\lambda$ è autovettore di $\mathcal{L}$ se e solo se $V_{\lambda} \neq \left\{ \mathbf{0} \right\}$. Infine possiamo dire che $V_{\lambda}$ contiene tutti gli autovettori di $\mathcal{L}$ relativi a $\lambda$ ed in piú contine il vettore nullo.

## Passaggio alle coordinate
Per deerminare autovalori e autovettori dobbiamo risolvere l'equazioni $$\mathcal{L} (\mathbf{v}) = \lambda \mathbf{v}$$
in $(\lambda,\mathbf{v})$. Se passiamo in coordinate si ha $x_{\mathcal{B}}(\mathcal{L}(\mathbf{v})) = x_{\mathcal{B}}(\lambda \mathbf{v}) \iff M_{\mathcal{B}}^\mathcal{B}(\mathcal{L})x_{\mathcal{B}}(\mathbf{v})=\lambda x_{\mathcal{B}}(\mathbf{v})$.
Posto $A = M_{\mathcal{B}}^\mathcal{B}(\mathcal{L})$ e $\mathbf{x} = x_{\mathcal{B}}(\mathbf{v})$, il problema di determinare gli autovalori e gli autovettori di $\mathcal{L}$ è uguale a determinare $\lambda \in \mathbb{K}$ e $\mathbf{x} \in \mathbb{K}^n$ tale che $A\mathbf{x} = \lambda \mathbf{x}$

>[!def]
>Data $A \in M_{\mathbb{K}(n,n)}$, un vettore $\mathbf{x} \in \mathbb{K}^n$ si dice autovettore di $A$ se:
> 1. $\mathbf{x} \neq 0$
> 2. $\exists \lambda \in \mathbb{K}$ tale che $A\mathbf{x} = \lambda \mathbf{x}\qquad (\iff (A - \lambda \mathbb{1}_{n}) \mathbf{x} = \mathbf{0})$
> 
> $\lambda$ si dice autovalore relativo all'autovettore $\mathbf{x}$

## Ricerca degli autovalori
$\lambda_{0}$ è un autovalore di $A$ se $\ker(A - \lambda_{0}\mathbb{1}_{n}) \neq \left\{ \mathbf{0} \right\}$, ovvero se il sistema lineare $(A - \lambda_{0}\mathbb{1}_{n})\mathbf{x} = \mathbf{0}$ ammette una soluzione non banale. Questo avviene se $r(A - \lambda_{0}\mathbb{1}_{n}) < n \iff \det(A - \lambda \mathbb{1}_{n}) = 0$. Quindi $\lambda_{0}$ è autovalore per $A$ se e solo se $\lambda_{0}$ è una soluzione dell'equazione $\det(A - \lambda \mathbb{1}_{n}) = 0$ nell'incognita $\lambda$. Una volta determinato $\lambda_{0}$, gli autovettori relativi si ottengono risolvendo il sistema omogeneo
 $$ (A - \lambda_{0}\mathbb{1}_{n})\mathbf{x}=\mathbf{0} $$Il polinomio $p_{A}(\lambda) = \det(A - \lambda \mathbb{1}_{n})$ è detto **polinomio caratteristico** di $A$. L'equazione
 $\det(A - \lambda \mathbb{1}_{n}) = 0$ si dice equazione caratteristica di $A$

>[!esempio]
>Determiniamo gli autovalori e gli autovettori di $A = \begin{bmatrix}2 & 1 \\1 & 2\end{bmatrix}$
> $$p_{\lambda} = \det(A - \lambda\mathbb{1}_{2}) = \begin{vmatrix}
>2-\lambda & 1 \\
>1 & 2 - \lambda
>\end{vmatrix} = (2-\lambda)(2-\lambda) - 1 = \lambda^2-4\lambda+3$$
>Poniamo $p_{\lambda}=0$
> $$ \lambda_{1,2} = \frac{4 \pm \sqrt{ 16 - 12 }}{2} = \begin{cases}
> \lambda_{1} = 3 \\
> \lambda_{2} = 1
>\end{cases}$$
>
>Determiniamo gli autospazi:
> $$ V_{3} = \ker(A - 3\mathbb{1}_{2}) = \ker \left( \begin{bmatrix}
>-1 & 1 \\
>1 & -1
>\end{bmatrix} \right) = \begin{cases}
> -x + y = 0 \\
> x - y = 0
>\end{cases} \implies y = x \implies$$
> $$ V_{3} = \begin{bmatrix}
>1 \\
>1
>\end{bmatrix} $$
>
> $$ V_{1} = \ker(A - \mathbb{1}_{2}) = \ker(\begin{bmatrix}
>1 & 1 \\
>1 & 1
>\end{bmatrix}) \implies x = -y \implies V_{1} = \begin{bmatrix}
>1 \\
>-1
>\end{bmatrix}$$
>
> Infine possiamo verificare che i risultati siano corretti:
>  $$ \begin{align}
> \begin{bmatrix}
> 2 & 1 \\
> 1 & 2
>\end{bmatrix} 
>\begin{bmatrix}
>1 \\
>-1
>\end{bmatrix} =  
>\begin{bmatrix}
>1 \\
>-1
\end{bmatrix} \implies \text{ corretto}\\
> \text{analogo per }V_{3}
>\end{align} $$


>[!oss]
>La proposizione $1$, nel caso in  cui $\mathcal{L}$ sia un'applicazione lineare: $$\begin{align}
>\mathcal{L}_{A} : \mathbb{K}^n &\to \mathbb{K}^n \\
>\mathbf{x} &\mapsto A\mathbf{x}
>\end{align}$$
>Puó essere interpretata nel seguente modo: sia $\mathcal{B} = \left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ una base di $\mathbb{K}^n$, allora
> $$\begin{align}
> &M_{\mathcal{B}}^{\mathcal{B}}(\mathcal{L}_{A}) = \diag(\lambda_{1},\dots,\lambda_{n}) &&\iff \mathcal{L}_{A}(\mathbf{b}_{i}) = \lambda_{i}\mathbf{b}_{i}\quad \forall i = 1,\dots,n  \\
> & &&\quad\bigg\Updownarrow \\
>\end{align}$$
>$$
>\begin{cases}
>S^{-1}AS = \diag(\lambda_{1},\dots,\lambda_{n}) \iff A\mathbf{b}_{i} = \lambda_{i}\mathbf{b}_{i} \forall i = 1,\dots,n \\
>S = \left[ {\mathbf{b}_{1}}|\dots|\mathbf{b}_{n} \right]
>\end{cases} 
>$$
>Infatti: $$ M_{\mathcal{B}}^\mathcal{B}(\mathcal{L}_{A}) = M_{\mathcal{B}}^{\mathcal{\xi}_{n}}(id_{\mathbb{K}^n}) \cdot M_{\xi_{n}}^{\xi_{n}}(\mathcal{L}_{A}) \cdot M_{\xi_{n}}^\mathcal{B} (id_{\mathbb{K}^n})$$
>Questa osservazione introduce la [[Geometria e algebra lineare/diagonalizzabilità]]


