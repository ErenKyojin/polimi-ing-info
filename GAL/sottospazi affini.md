Sia $H$ un [[sottospazi vettoriali|sottospazio vettoriale]] di $\mathbb{K}^n$ e sia $\mathbf{v}_{0} \in \mathbb{K}^n$. L'insieme
$$ L:= \mathbf{v}_{0} + H = \left\{ \mathbf{v}_{0} + \mathbf{v} \in \mathbb{K}^n : \mathbf{v} \in H \right\} $$
è detto sottospazio affine di $\mathbb{K}^n$ il sottospazio $H$ è chiamato sottospazio direttore o giacitura di $L$. Da un punto di vista geometrico possiamo pensare a $\mathbf{v}_{0}$ come al [[GAL/vettori|vettore]] delle coordinate di un punto che viene traslato secondo tutti i vettori di $H$.
Osserviamo che se $A \in M_{\mathbb{K}(m,n)}$ e $\mathbf{b} \in \mathbb{K}^n$ allora le soluzioni, se esistono, del sistema $A \cdot \mathbf{x} = \mathbf{b}$ formano un sottospazio affine di $\mathbb{K}^n$, infatti per il teorema di rappresentazione delle soluzioni di un sistema lineare si ha che:
$$ S = \left\{ \mathbf{v} \in \mathbb{K}^n : A \mathbf{v} = \mathbf{b} \right\}   = \mathbf{v}_{0} + \ker(A)$$
Dove $\mathbf{v}_{0}$ è una soluzione particolare di $A\mathbf{x} = \mathbf{b}$. Quindi il $\ker(A)$ è la giacitura del sottospazio affine $S$. 
Un sottospazio affine è sottospazio vettoriale se e solo se contiene il vettore nullo. In $\mathbb{R}^3$ i sottospazi affini sono tutti i punti, tutte le rette, tutti i piani ed $\mathbb{R}^3$.
Ogni sottospazio affine puó essere dotato in forma parametrica o tramite equazioin cartesiane. È sempre possibile passare dall'una all'altra forma:

## Forma parametrica:
Sono dati $\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{d} \right\} \subseteq \mathbb{K}^n$ una base di $H$ e $\mathbf{v}_{0} \in \mathbb{K}^n$.
Se $\mathbf{v}_{i} = [a_{1i}\quad a_{2i}\quad... \quad a_{ni}]^T$ e $\mathbf{v}_{0} = [v_{01}\quad v_{02}\quad \dots \quad v_{0n}]^T$ allora $\mathbf{x} = [x_{1}\dots x_{n}] \in L = v_{0} + H$ se esistono $t_{1},\dots,t_{d} \in \mathbb{K} :$ $\mathbf{x} = \mathbf{v}_{0} + t_{1}\mathbf{v}_{1} + \dots + t_{d}\mathbf{v}_{d}$. ovvero
$$ \begin{bmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{bmatrix} = 
\begin{bmatrix}
v_{10} \\
\vdots \\
v_{n 0}
\end{bmatrix} + t_{1} \begin{bmatrix}
v_{11} \\
\vdots \\
v_{n1}
\end{bmatrix} + \dots + t_{d} \begin{bmatrix}
v_{1d} \\
\vdots \\
v_{nd}
\end{bmatrix} \iff$$
$$ \begin{cases}
x_{1} = v_{10} + t_{1}v_{11} + \dots + t_{d}v_{1d} \\
\vdots \\
x_{n} = v_{n0} + t_{1}v_{n1} + \dots + t_{d}v_{nd}
\end{cases} $$

## Forma cartesiana
Sono dati $A \in M_{\mathbb{K}(m,n)}$ e $\mathbf{b} \in M_{\mathbb{K}(m,1)}$ allora $L= \left\{ \mathbf{x} \in \mathbb{K}^n | A\mathbf{x} = \mathbf{b}\right\} = \mathbf{v}_{0} + \ker(A)$ è sottospazio affine di $\mathbb{K}^n$ con $\mathbf{v}_{0}$ soluzione particolare e $\ker(A)$ giacitura se $r(A) = r([A|\mathbf{b}])$

>[!esempio]
>Determinare equazioni cartesiane e parametrica del sottospazio affino $L$ di $\mathbb{R}^4$ passante per $\mathbf{v}_{0} = \begin{bmatrix}1 & 0 & 2 & 1\end{bmatrix}^T$  e avente giacitura $H=\Span(\begin{bmatrix}1 & 1 & -1 & 0\end{bmatrix}^T,\begin{bmatrix}-1 & 1 & 0 & 1\end{bmatrix}^T)$
>
>Le equazioni parametriche si ricavano subito ponendo:
> $$ \begin{bmatrix}
>x \\
>y \\
>z \\
>w
>\end{bmatrix} = \begin{bmatrix}
>1 \\
>0 \\
>2 \\
>1
>\end{bmatrix} + t\begin{bmatrix}
>1 \\
>1 \\
>-1 \\
>0
>\end{bmatrix} + s\begin{bmatrix}
>-1 \\
>1 \\
>0 \\
>1
>\end{bmatrix} \to \begin{cases}
>x = 1 + t-s \\
> y = 0 + t + s \\
>z =2 - t \\
>w = 1 + s
>\end{cases}$$
>Per determinare le equazioni cartesiane:
> $$ \begin{cases}
>x = 1 + 2 - z - w  + 1 \\
>y = 2 - z + w - 1 \\
> t = 2 - z \\
>s = w - 1
>\end{cases} \iff 
>\begin{cases}
>x + z + w =4 \\
>y + z - w = 1 \\
>t = 2 - z \\
>s = w - 1
>\end{cases} \implies \begin{cases}
> x + z +w = 4 \\
>y + z - w = 1
\end{cases}$$
Che sono le equazioni cartesiane per $L$


## posizione reciproca di sottospazi affini
Siano $L_{1} = \mathbf{v}_{1} + H_{1}$ e $L_{2} = \mathbf{v}_{2} + H_{2}$ due sottospazi affini allora diremo che:
1. $L_{1}$ è parallelo a $L_{2}$ se $H_{1} \subseteq H_{2}$ o $H_{2} \subseteq H_{1}$ in quanto puó capitare $L_{1} \subseteq L_{2}$ o $L_{2} \subseteq L_{1}$ oppure $L_{1}$ è disgiunto da $L_{2}$
2. $L_{1}$ è incidente a $L_{2}$ se $L_{1} \cap L_{2} \neq \varnothing$ ($L_{1} \cap L_{2}$ è sottospazio affine)
3. $L_{1}$ ed $L_{2}$ sono sghembi se $L_{1} \cap L_{2} = \varnothing$ e $H_{1} \cap H_{2} = \left\{ \mathbf{0} \right\}$

### Posizione reciproca di tre piano nello spazio conoscendo le equazioni cartesiane
$$ \begin{align}
&\pi_{1}: a_{1}x + b_{1}y + c_{1}z=d_{1} \\
&\pi_{2}: a_{2}x + b_{2}y + c_{2}z = d_{2} \\
&\pi_{3}: a_{3}x + b_{3}y + c_{3}z = d_{3}
\end{align} $$

Supponiao il caso $\pi_{1} \neq \pi_{2} \neq \pi_{3}$ altrimenti saremmo nel caso di due piani, consideriamo il sistema;
$$\begin{cases}
 a_{1}x + b_{1}y + c_{1}z = d_{1} \\
a_{2}x +b_{2}y + c_{2}z = d_{2} \\
a_{3}x + b_{3} y + c_{3}z = d_{3}
\end{cases} \to \left[ \begin{array}{ccc|c}
a_{1} & b_{1} & c_{1} & d_{1} \\
a_{2} & b_{2} & c_{2} & d_{2} \\
a_{3} & b_{3} & c_{3} & d_{3}
\end{array}  \right] $$
Studiare il precedente sistema significa studiare le intersezioni di $\pi_{1},\pi_{2}$ e $\pi_{3}$. Osseriamo che le giaciture di $\pi_{1},\pi_{2}$ e $\pi_{3}$ sono data dalle equazioni: $a_{1}x + b_{1}y + c_{1}z = 0$, $a_{2}x+b_{2}y+c_{2}z =0$ e
$a_{3}x+b_{3}y+c_{3}z = 0$. Studiare le loro intersezioi significa studiare il $\ker(A)$ ovvero il sistema lineare omogeneo:
$$ \begin{cases}
a_{1}x + b_{1}y + c_{1}z = 0 \\
a_{2}x + b_{2}y + c_{2}z = 0 \\
a_{3}x + b_{3}y + c_{3}z =0
\end{cases} $$
>[!oss] oss: la dimensione delle giaciture è due

Abbiamo i seguenti casi:
1. $r(A) = 3 = r([A|\mathbf{d}])$
   Il sistema ammette un'unica soluzione ed i tre piani si incontrano in un punto
2. $r(A) = 2$, $r([A|\mathbf{d}]) =3$
   Il sistema è impossibile ed essendo $r(A)=2$ le tre giaciture si incontrano in una retta infatti $\dim(\ker(A)) = 3-2=1$. Le possibilità sono: 2 piani paralleli e uno trasverso oppure i tre piani si incontrano a due a due in tre rette parallele e disgiunte
3. $r(A) = 2 = r([A|\mathbf{d}])$
   Il sistema ammette $\infty^1$ soluzioni, i tre piani si incontrano in una retta
4. $r(A)=1 \neq 2 = r([A|\mathbf{d}])$
   Il sistema è impossibile, le tre giaciture coinidono con un piano infatti $\dim(\ker(A)) = 3 - 1 =2$, i tre piani sono paralleli
5. $r(A)= 1 =r([A|\mathbf{d}])$
   i tre piani coincidono (lo avevamo escluso)

### Posizione reciproca di due rette nello spazio conoscendo le loro equazioni cartesiane
$$ \begin{flalign}
&r_{1}: \begin{cases}
a_{1}x+a_{2}y + a_{3}z = a_{4} \\
b_{1}x+b_{2}y + b_{3}z = b_{4}
\end{cases} &r_{2}: \begin{cases}
c_{1}x + c_{2}y + c_{3}z = c_{4} \\
d_{1}x + d_{2}y + d_{3}z = d_{4}
\end{cases}\\
&\bigg\downarrow \text{spazio direttore di }r_{1} &\bigg\downarrow\text{spazio direttore di }r_{2}\qquad
 \\
&H_{1} : \begin{cases}
a_{1}x+a_{2}y+a_{3}z = 0 \\
b_{1}x + b_{2}y + b_{3}z = 0
\end{cases}
&H_{2} : \begin{cases}
c_{1}x + c_{2}y + c_{3}z =0 \\
d_{1}x + d_{2}y + d_{3}z = 0
\end{cases}
\end{flalign} $$
Le dimensioni della giacitura sono 1. 
Studiare le intersezioni tra $r_{1}$ ed $r_{2}$ significa stuiare il sistema
$$ \begin{cases}
a_{1}x + a_{2}y + a_{3}z = a_{4} \\
b_{1}x + b_{2}y + b_{3}z = b_{4} \\
c_{1}x + c_{2}y +c_{3}z = c_{4} \\
d_{1}x + d_{2}y + d_{3}z = d_{4}
\end{cases} \to \begin{bmatrix}
a_{1} & a_{2} & a_{3} & a_{4} \\
b_{1} & b_{2} & b_{3} & b_{4} \\
c_{1} & c_{2} & c_{3} & c_{4} \\
d_{1} & d_{2} & d_{3} & d_{4}
\end{bmatrix}$$
Studiare le intersezioni tra le giaciture significa studiare il $\ker(A)$
$$ \begin{cases}
a_{1}x+a_{2}y+a_{3}z =0 \\
b_{1}x + b_{2}y + b_{3}z = 0 \\
c_{1}x + c_{2}y + c_{3}z = 0 \\
d_{1}x + d_{2}y+d_{3}y = 0
\end{cases} $$
abbiamo i seguenti casi:
1. $r(A) = 3 \neq 4 = r(A|\mathbf{d})$
   $r_{1} \cap r_{2} = \varnothing$ ed i sottospazi direttori si incontrano solo in $\mathbf{0}$ ($\dim(\ker(A)) = 3-3=0$), quindi le rette sono sghembe

2. $r(A) = 3 = r([A|\mathbf{d}])$
   $r_{1}\cap r_{2}$ si incontrano in un punto, $r_{1}$ ed $r_{2}$ sono incidenti

3. $r(A)=2 \neq 3=r([A|\mathbf{d}])$
   $r_{1} \cap r_{2} = \varnothing$ e inoltre le giaciture coincidono, infatti $\dim(\ker(A)) = 3 - 2 = 1$, le rette sono parallele
4. $r(A) = 2 = r([A|\mathbf{d}])$
   il sistema non omogeneo ammette $\infty^1$ soluzioni quindi le due rette coincidono
[[fasci di piani]]
