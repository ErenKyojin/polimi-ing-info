>[!def]
>Sia $V$ spazio vettoriale su $\mathbb{K}$ e sia $U \subseteq V$ con $U \neq \varnothing$, si dice che $U$ è **sottospazio vettoriale** di $V$ se $U$ è a sua volta spazio vettoriale e questo si verifica se e solo se:
> 1. $\mathbf{0} \in U$
> 2. $$\forall \mathbf{v}_{1}, \mathbf{v}_{2} \in U \implies \mathbf{v}_{1} + \mathbf{v}_{2} \in U$$ 
>    (si dice che $U$ è chiuso rispetto alla somma, ossia presi due elementi di $U$ qualsiasi la loro somma deve appartenere ancora ad $U$)
> 3. $$\forall t \in \mathbb{K}$ e $\forall \mathbf{u} \in U \implies t \cdot \mathbf{u} \in U$$
>     (si dice che $U$ è chiuso rispetto al prodotto per uno scalare, ossia presi un elemento di $U$ qualsiasi ed uno scalare di $\mathbb{K}$ qualsiasi, allora il  loro prodott deve appartenere ancora ad $U$ )

>[!oss]
>Dato $V$ spazio vettoriale su $\mathbb{K}$ i sottospazi vettoriali banali sono $V$ e ${\mathbf{0}}$


>[!esempio]
>$V = M_{\mathbb{K}}(n,n)$, $U = \left\{ A \in M_{\mathbb{K}(n,n)}:A = A^T \right\}$
>A è simmetrica se $[A]_{ij} = [A]_{ji}$
> $$ A = \begin{bmatrix}
>a_{11} & a_{12} & a_{13} &\dots \\
a_{12} & a_{22} &a_{23} &\dots\\
>a_{13} & a_{23} &a_{33} &\dots\\
\dots & \dots & \dots & \ddots\end{bmatrix} $$
Dimostriamo che $U$ è sottospazio vettoriale di $V$ <div class="roman">
>1. $0_{n,n} \in U\quad(\text{infatti } 0_{n,n}^T = 0_{n,n})$
>2. Se $A,B \in U$ allora $A=A^T, B=B^T$ quindi:
>   $$ (A+B)^T = A^T + B^T = A+B \implies A + B \in U$$
>3. Se $A \in U$ e $t \in \mathbb{K}$ allora $(tA)^T = t(A)^T = tA \implies tA \in U$ 
>   
>   Quindi $U$ è sottospazio di $V$
></div>

Se $V$ è spazio vettoriale su $\mathbb{K}$ e $H$ è un sottoinsieme di $V$ allora $H$ è sottospazio vettoriale di $V$ se e solo se $H \neq \varnothing$ e $\forall t_{1}t_{2} \in \mathbb{K}$ e $\forall \mathbf{v}_{1},\mathbf{v}_{2} \in H$ si ha $t_{1}\mathbf{v}_{1} + t_{2}\mathbf{v}_{2} \in H$

## Intersezione e somma di sottospazi vettoriali
Osserviamo che se $H_{1}$ e $H_{2}$ sono sottospazi vettoriali di $V$ spazio vettoriale su $\mathbb{K}$ allora l'[[insieme]]:
$$ H_{1} \cup H_{2} = \{\mathbf{u} \in V : \mathbf{u} \in H_{1} \text{ o } \mathbf{u} \in H_{2}\}$$
 Non è sottospazio vettoriale di $V$. Infatti, consideriamo:
$$V = \mathbb{R}^2, H_{1} = \Span\underbrace{ \left(\begin{bmatrix}
1 \\
0
\end{bmatrix}\right) }_{ \mathbf{v}_{1} }, H_{2} = \underbrace{ \Span\left( \begin{bmatrix}
0 \\
1
\end{bmatrix} \right)  }_{ \mathbf{v}_{2} }$$
```tikz
\begin{document}
\begin{tikzpicture}[scale = 4]
\draw[->] (-.5,0) -- (2,0) node[right]{x};
\draw[->] (0,-.5) -- (0,1) node[above]{y};
\draw[green] (2,0) -- (-.5,0) node[below, green]{$H_1$};
\draw[red] (0,1) -- (0,-.5) node[below, red]{$H_2$};
\draw[->, thick, green] (0,0) -- (.3,0) node[below, green]{$\mathbf{v}_1$};
\draw[->, thick, red] (0,0) -- (0,.3) node[left,red]{$\mathbf{v}_2$};
\draw[->, thick] (0,0) -- (.3,.3) node[above]{$\mathbf{v}_1 + \mathbf{v}_2$};
\node[below left] (0,0){O};
\end{tikzpicture}
\end{document}
```
$$ \mathbf{v}_{1} + \mathbf{v}_{2} = \begin{bmatrix}
0 \\
1
\end{bmatrix}  + 
\begin{bmatrix}
0 \\
1
\end{bmatrix} = \begin{bmatrix}
1 \\
1 
\end{bmatrix} \in H_{1} \cup H_{2}$$
Definiamo gli insiemi:
$$ \begin{align}
&H_{1} \cup H_{2} = \left\{ \mathbf{u} \in V : \mathbf{u} \in H_{1} \text{ e } \mathbf{u} \in H_{2} \right\} \\
&H_{1} + H_{2} = \left\{ \mathbf{h_{1}} + \mathbf{h_{2}} \in V : \mathbf{h_{1}} \in H_{1} \text{ e } \mathbf{h}_{2} \in H_{2}\right\}  
\end{align} $$
>[!proposizione]
>Sia $V$ spazio vettoriale su $\mathbb{K}$ e siano $H_{1}$ e $H_{2}$ sottospazi di $V$. Allora $H_{1} \cap H_{2}$ e $H_{1} + H_{2}$ sono sottospazi vettoriali di $V$. Inoltre se $H_{1}  = \Span(\mathbf{u}_{1},\dots,\mathbf{u}_{d})$ e $H_{2} = \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{m})$ si ha:
> $$ H_{1} + H_{2} = \Span(\mathbf{u}_{1},\dots,\mathbf{u}_{d},\mathbf{v}_{1},\dots,\mathbf{v}_{m}) $$
> 
>>[!dim]
>>1. Dimostrare che $H_{1} \cap H_{2}$ è sottospazio vettoriale di $V$, si ha che:
>>	1. $\mathbf{0} \in H_{1}$ e $\mathbf{0} \in H_{2} \implies \mathbf{0} \in H_{1} \cap H_{2} \neq \varnothing$
>>	2. Siano $\mathbf{v}_{1}, \mathbf{v}_{2} \in H_{1} \cap H_{2}$ allora $\forall t_{1},t_{2} \in \mathbb{K}$ si ha che $$t_{1}\mathbf{v}_{1} + t_{2}\mathbf{v}_{2} \in H_{1} \text{ e } t_{1}\mathbf{v}_{1} + t_{2}\mathbf{v}_{2} \in H_{2} \implies t_{1}\mathbf{v}_{1}+t_{2}\mathbf{v}_{2} \in H_{1} \cap H_{2}$$
>>2. Dimostriamo che $H_{1} + H_{2}$ è sottospazio di $V$, si ha che:
>>	1. $\mathbf{0} \in H_{1}$ e $\mathbf{0} \in H_{2} \implies \mathbf{0} + \mathbf{0} = \mathbf{0} \in H_{1} + H_{2} \neq \mathbf{\varnothing}$ 
>>	2. Siano $\mathbf{v}_{1},\mathbf{v}_{2} \in H_{1} + H_{2}$, quindi esistono $\mathbf{w}_{1},\mathbf{u}_{1} \in H_{1}$ e $\mathbf{u}_{1},\mathbf{u}_{2} \in H_{2} :$ $\mathbf{v}_{1} = \mathbf{w}_{1} + \mathbf{w}_{2}$ e $\mathbf{v}_{2} = \mathbf{u}_{1} + \mathbf{u}_{2}$. Allora $\forall t_{1},t_{2} \in \mathbb{K}$  si ha che:
>>	  $$\begin{align}
>t_{1}\mathbf{v}_{1}+t_{2}\mathbf{v}_{2}&= t_{1}(\mathbf{w}_{1}+\mathbf{w}_{2}) + t_{2}(\mathbf{u}_{1}+\mathbf{u}_{2}) \\
> &= \underbrace{ (t_{1}\mathbf{w}_{1} + t_{2}\mathbf{u}_{1}) }_{ H_{1} } + \underbrace{ (t_{1}\mathbf{w}_{2}+t_{2}\mathbf{u}_{2}) }_{ H_{2} } \in H_{1} + H_{2}
>\end{align}$$
>> 
>> 3. Dimostriamo che $H_{1} + H_{2} = \Span(\mathbf{u}_{1},\dots,\mathbf{u}_{d},\mathbf{v}_{1},\dots,\mathbf{v}_{m})$ Se $\mathbf{h} \in H_{1} + H_{2}$ allora esistono $\mathbf{h}_{1} \in H_{1}$ e $\mathbf{h}_{2} \in H_{2} : \mathbf{h} =\mathbf{h}_{1}+\mathbf{h}_{2}$.
>>    Essendo $\mathbf{h_{1}} \in H_{1} = \Span(\mathbf{u}_{1},\dots,\mathbf{u}_{d})$ si ha $\mathbf{h}_{1} = t_{1}\mathbf{u}_{1} + \dots + t_{d}\mathbf{u}_{d}$ ed essendo $\mathbf{h}_{2} \in H_{2} = \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{m})$ si ha $h_{2} = s_{1}\mathbf{v}_{1} + \dots + s_{m}\mathbf{u}_{m}$
>>    Dunque:
>>    $$\mathbf{h} = \mathbf{h}_{1}+\mathbf{h}_{2} = t_{1}\mathbf{u}_{1} + \dots + t_{d}\mathbf{u}_{d} + s_{1}\mathbf{v}_{1} + \dots + s_{m}\mathbf{v}_{m} \implies H_{1} + H_{2} \subseteq \Span(\mathbf{u}_{1},\dots,\mathbf{v}_{m})$$
>>    Viceversa si ha che $\mathbf{u}_{1},\dots,\mathbf{u}_{d},\mathbf{v}_{1},\dots,\mathbf{v}_{m} \in H_{1} + H_{2}$
>>    Infatti ad esempio: $\mathbf{u}_{1} = \mathbf{u}_{1} + \mathbf{0} \in H_{1} + H_{2}$ quindi $\Span(\mathbf{u}_{1},\dots,\mathbf{u}_{d},\mathbf{v}_{1},..,\mathbf{v}_{m}) \subseteq H_{1} + H_{2}$


# [[Geometria e algebra lineare/Dimensione]] di sottospazi vettoriali

>[!teorema] Formula di Grassman
>Siano $H$ e $K$ due sottospazi vettoriali di $V$ spazio vettoriale su $\mathbb{K}$. Se $\dim(H) < +\infty$ e $\dim(K) < +\infty$ allora $\dim(H + K) = \dim(H) + \dim(K) - \dim(H \cap K)$ 
>
>>[!dim]
>>Sia $\dim(H) = t$

>[!esempio]
>Sia $V$ spazio vettoriale su $\mathbb{K}$ e $\dim(V)=4$. Siano $H$ e $K$ sottospazi vettoriali di $V$ di dimensione irspettivamenter $3$ e $2$. Allora $\dim(U \cap V) \geq 1$, infatti:
> $$\begin{align}
> &4=\dim(V) \geq \dim(H + K) = \dim(H) + \dim(K)-\dim(H \cap K) \\
>&4 \geq 3 + 2 - \dim(H \cap K) \implies \dim(H \cap K) \geq 1
>\end{align} $$


>[!def]
>Sia $V$ spazio vettoriale su $\mathbb{K}$ e siano $H$ e $K$ sottospazi vettoriali di $V$ diremmo che $V$ è la somma diretta di $H$ e $K$ se
> 1. $H + K = V$
> 2. $H \cap K = \left\{ \mathbf{0}_{V} \right\}$
> 
> E si scrive $V = H \oplus K$ 


>[!proposizione]
>Sia $V$ spazio vettoriale di dimensione finita su $\mathbb{K}$ e siano $H$ e $K$ due sottospazio vettoriali di $V$ tali che $V$ è somma diretta di $H$ e $K$. L'unione delle basi di $H$ e $K$ è una base di $V$. Inoltre per ogni elemento $\mathbf{v} \in V$ esistono unici $\mathbf{h} \in H$ e $\mathbf{k} \in K$ tali che $\mathbf{v} = \mathbf{h} + \mathbf{k}$
>
>>[!dim]
>>Siano $\dim(H) = s$ e $\dim(K)= r$. Inoltre siano: $\mathcal{B} = \left\{ \mathbf{h}_{1},\dots,\mathbf{h}_{s} \right\}$ e $\mathcal{C} =\left\{ \mathbf{k}_{1},\dots,\mathbf{k}_{r} \right\}$. Poichè $\mathcal{B} \cup \mathcal{C}$ è un insieme di generatori per $H + K$ e $H + K = V$  allora $B \cup C$ è un insieme di generatori per $V$. Mostriamo adesso che $\mathcal{B} \cup C$ è linearmente indipendente.
>>Posto:
>> $$ \alpha_{1}\mathbf{h}_{1} + \dots + \alpha_{r}\mathbf{h}_{r} + \beta_{1}\mathbf{k}_{1} + \dots + \beta_{s}\mathbf{k}_{s} = \mathbf{0} $$ si ha che
>> $$ \mathbf{w} = \alpha_{1}\mathbf{h}_{1} + \dots + \alpha_{r}\mathbf{h}_{r} = -( \beta_{1}\mathbf{k}_{1} + \dots + \beta_{s}\mathbf{k}_{s}) \in H \cap K = \left\{ \mathbf{0}_{V} \right\} $$
>> Quindi
>> $$ \begin{cases}
>>\alpha_{1}\mathbf{h}_{1} + \dots + \alpha_{r}\mathbf{h}_{r} = \mathbf{0}_{V} \\
>>\beta_{1}\mathbf{k}_{1} + \dots. + \beta_{s}\mathbf{k}_{s} = \mathbf{0}_{V}
>>\end{cases} \implies \begin{cases}
>>\alpha_{1} = \dots = \alpha_{r} = 0 \\
>>\beta_{1} = \dots = \beta_{s} = 0
>>\end{cases}$$
>>quindi per ogni $\mathbf{v} \in V$ esistono e sono unici $\alpha_{1},\dots, \alpha_{r},\beta_{1},\dots,\beta_{\alpha} \in K$ tali che:
>> $$ \begin{align}
>>\mathbf{v} &= \alpha_{1}\mathbf{h}_{1} + \dots + \alpha_{r}\mathbf{h}_{r} + \beta_{1}\mathbf{k}_{1} + \dots + \beta_{s}\mathbf{k}_{s}  \\
>> &= \mathbf{h} + \mathbf{k}
>>\end{align}$$
>>Infine questa scrittura è unica, se $\mathbf{h}' \in H$ e $\mathbf{k}' \in K$ tale che
>> $$ \mathbf{v} = \mathbf{h} + \mathbf{k} = \mathbf{h}' + \mathbf{k}' $$ 
>> allora $\mathbf{h} - \mathbf{h}' = \mathbf{k}' -\mathbf{k}$ e quindi $(\mathbf{h} - \mathbf{h}'),(-\mathbf{k}+\mathbf{k}') \in H \cap K = \left\{ \mathbf{0}_{V} \right\}$
>> $$ \begin{cases}
>>\mathbf{h} - \mathbf{h}' = \mathbf{0}_{V} \\
>>-\mathbf{k} + \mathbf{k}' = \mathbf{0}_{V}
>>\end{cases} \implies
>>\begin{cases}
>>\mathbf{h} = \mathbf{h}' \\
>>\mathbf{k} = \mathbf{k}'
>>\end{cases}$$
>>$\CVD$


>[!oss]
>Se $H$ e $K$ sono sottospazi di $V$ tali che l'unione delle loro basi è una base di $V$ allora $V = H \oplus K$ infatti:
>l'unione delle basi di $H$ e $K$ è un'insieme generatore per $H + K$ e per $V$ quindi $V = H + K$. Inoltre se $\dim(H) = r$ e $\dim(K) = s$
> $$ \begin{align}
>r + s = \dim(V) &= \dim(H + K) \\
&=\dim(H) + \dim(K) - \dim(H \cap K)
>\end{align} $$
>$\implies \dim(H \cap K) = 0$


## Algoritmo per determinare le basi di $H +V$ e $H \cap V$ conoscendo basi di $H$ e $K$
Sia $H = \Span(\mathbf{h}_{1},\dots,\mathbf{h}_{t})$ e $K = \Span(\mathbf{k}_{1},\dots,\mathbf{k}_{s})$ ove $\left\{ \mathbf{h}_{1},\dots,\mathbf{h}_{t} \right\}$ e $\left\{ \mathbf{k}_{1},\dots,\mathbf{k}_{s} \right\} \subseteq \mathbb{K}^n$ linearmente indipendenti. Consideriamo la matrice le cui colonne sono le basi di $H$ e $K$:
 $$ A = \left[ \mathbf{h}_{1} | \dots | \mathbf{h}_{t} | \mathbf{k}_{1} | \dots | \mathbf{k}_{s} \right]  $$
 tramite [[Metodo di eliminazione di Gauss]] riduciamo a scala tale matrice:
 $$ A \xrightarrow{MEG} U $$
 Allora abbiamo che:
 1. Le posizioni delle colonne che contengono i pivot di $U$ sono le posizioni delle colone della marice $A$ che formano una base di $H + K$
 2. Sia $\left\{ \mathbf{u}_{1},\dots,\mathbf{u}_{r} \right\}$ una base del $\ker(U) = \ker(A)$ allora le prime $t$ componenti del vettore $\mathbf{u}_{i}$ sono le coordinate rispetto alla base $\left\{ \mathbf{h}_{1},\dots,\mathbf{h}_{t} \right\}$ dell'$i$-esimo vetore di una base di $H \cap K$. Mentre le ultime $s$ componenti del vettore $\mathbf{u}_{i}$ sono le coordinate rispetto alla base $\left\{ \mathbf{k}_{1},\dots,\mathbf{k}_{s} \right\}$ dell'$i$-esimo vettore di una base di $H \cap K$. In particolare $\dim(H \cap K) = \dim(\ker(U))$

[[sottospazi affini]]
