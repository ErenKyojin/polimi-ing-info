
>[!def]
>Sia $V$ [[spazio euclideo]] e $\dim(V) < +\infty$. Sia $H \subseteq V$ un sottospazio di $V$ allora il **complemento ortogonale** di $H$ in $V$ e $H^\perp = \left\{ \mathbf{v} \in V : <\mathbf{v},\mathbf{h}> = 0 \forall \mathbf{h} \in H \right\}$


>[!oss]
>1. $\left\{ \mathbf{0} \right\} = V$ e $V^\perp = \left\{ \mathbf{0} \right\}$
>2. $H^\perp$ è sottospazio vettoriale di $V$
>3. Se $H_{1}$ e $H_{2}$ sono due sottospazi di $V$ e $H_{1} \subseteq H_{2}$ allora $H_{2}^\perp \subseteq H_{1}^\perp$. 
>4. Se $\mathbf{v}_{1},\dots,\mathbf{v}_{d} \in V$ e $H = \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d})$ allora $\mathbf{v} \in H^\perp \iff <\mathbf{v},\mathbf{h}>=0 \forall \mathbf{h} \in H \iff$
>   $<\mathbf{v}, t_{1}\mathbf{v}_{1} + \dots + t_{d}\mathbf{v}_{d}> = 0 \forall t_{1},\dots,t_{d} \in \mathbb{R} \iff <\mathbf{v},\mathbf{v}_{i}> = 0 \forall i = 1,\dots,d$
>   $\iff \mathbf{v}$ è ortogonale ai generatori di $H$
>5. $H \cap H^\perp = \left\{ \mathbf{0} \right\}$. Infatti sia $\mathbf{v} \in H \cap H^\perp$ allora $\|\mathbf{v}\| = <\mathbf{v},\mathbf{v}> = 0 \implies \mathbf{v} =0$
>6. Considero $H$ sottospazio di $V$ e sia
>   $$ \begin{align}
> P_{H} : V &\to V \\
> \mathbf{v} &\mapsto \mathbf{v}_{H} := \text{ proiezione ortogonale di $\mathbf{v}$ su $H$}
>\end{align} $$
>$P_{H}$ è lineare. Infatti, sia $\left\{ \mathbf{q}_{1},\dots,\mathbf{q}_{d} \right\}$ una base ortonormale di $H (\exists$ per [[Algoritmo di Gram-schmidt]]) allora $\forall t_{1},t_{2} \in \mathbb{R}, \forall \mathbf{v}_{1},\mathbf{v}_{2} \in V$ si ha che:
> $$ \begin{align}
>&P_{H}(t_{1}\mathbf{v}_{1} + t_{2}\mathbf{v}_{2}) = <t_{1}\mathbf{v}_{1} + t_{2}\mathbf{v}_{d},\mathbf{q}_{1}>\mathbf{q}_{1} + \dots + <t_{1}\mathbf{v}_{1} + t_{2}\mathbf{v}_{2}, \mathbf{q}_{d}>\mathbf{q}_{d} =  \\
> &=t_{1}(<\mathbf{v}_{1},\mathbf{q}_{1}>\mathbf{q}_{1} + \dots + <\mathbf{v}_{1},\mathbf{q}_{d}>\mathbf{q}_{d}) + t_{2}(<\mathbf{v}_{2}, \mathbf{q}_{1}>\mathbf{q}_{1} + \dots +  <\mathbf{v}_{2},\mathbf{q}_{d}>\mathbf{q}_{d}) \\
>&= t_{1}P_{H}(\mathbf{v}_{1}) + t_{2}P_{H}(\mathbf{v}_{2})
>\end{align} $$
>Inoltre si ha che $\Im(P_{H}) = H$ infatti $\begin{cases}P_{H}(\mathbf{v})=\mathbf{v}_{H} \in H \forall \mathbf{v} \in V \\ P_{H}(\mathbf{h}) = \mathbf{h} \forall \mathbf{h} \in H\end{cases}$
>e $\ker(P_{H}) = \left\{ \mathbf{v} \in V : P_{H}(\mathbf{v}) = <\mathbf{v},\mathbf{q}_{1}> \mathbf{q}_{1} + \dots + <\mathbf{v},\mathbf{q}_{d}>\mathbf{q}_{d} = 0\right\} =$
>$= \left\{ \mathbf{v} \in V : <\mathbf{v},\mathbf{q}_{i}> = 0 \forall i = 1,\dots,d \right\} = H^\perp$
>Essendo $H = \Span(\mathbf{q}_{1},\dots,\mathbf{q}_{d})$


>[!proposizione]
>Sia $V$ uno [[spazio euclideo]] di dimensione finita. Allora per ogni $H \subseteq V$ sottospazio di $V$ valgono le seguenti uguaglianze:
> 1. $\dim(H^\perp) = \dim(V) - \dim(H)$
> 2. $(H^\perp)^\perp = H$
>    
>>[!dim]
>>1.
>>2.


>[!oss]
>Se $V$ ha dimensione finita e $H \subseteq V$ è sottospazio, allora abbiamo visto che $\forall \mathbf{v} \in V$ esiste ed è unico $\mathbf{v}_{H} \in H$ tale che $\mathbf{v} - \mathbf{v}_{H} \in H^\perp$. Quindi $\mathbf{v} = \mathbf{v}_{H} + (\mathbf{v} - \mathbf{v}_{H}) = \mathbf{v}_{H} + \mathbf{v}_{H^\perp}$ ed essendo $H \cap H^\perp = \left\{ \mathbf{0} \right\}$ si ha $V = H \oplus H^\perp$
>$\mathbf{v}_{H^\perp} = \mathbf{v} - \mathbf{v}_{H}$ è la proiezione ortogonale di $\mathbf{v}$ su $H^\perp$, infatti $\mathbf{v} - \mathbf{v}_{H^\perp} = \mathbf{v}_{H} \perp H^\perp$. Per calcolare le due proiezioni è conveniente calcolare quella sul sottospazio di dimensione piú bassa e determinare l'altra per differenza. 

>[!oss]
>Se $V = \mathbb{R}^n$ e $H \subseteq V$ è sottospazio vettoriale allora $\dim(H^\perp) = n - \dim(H)$


## Complemento ortogonale degli spazi associati ad una matrice

>[!teorema]
>Sia $A \in M_{\mathbb{K}}(m,n)$ allora, in $\mathbb{R}^n$ munito del [[prodotto scalare]] standard si ha che:
> 1. $\ker(A) = (\Row(A))^\perp \implies \ker(A)^\perp = \Row(A)$
> 
> Inoltre in $\mathbb{R}^m$ munito del prodotto scalare standard si ha che:
> 2. $\ker(A^T) = \Col(A)^\perp \implies \ker(A^T)^\perp=\Col(A)$
>
>>[!dim]