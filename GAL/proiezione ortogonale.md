>[!def]
> Siano $\mathbf{v}$ e $\mathbf{w}$ vettori dello [[spazio Euclideo]]. Esiste un unico vettore $\mathbf{v}_{\mathbf{w}}$ tale che:
> 1. $\mathbf{v}_{\mathbf{w}}$ è parallelo a $\mathbf{w}$
> 2. $\mathbf{v} -\mathbf{v}_{\mathbf{w}} \perp \mathbf{w}$
>
> Osserviamo che:
>  $$ \|\mathbf{v}_{\mathbf{w}}\| = \cos(\alpha)\|\mathbf{v}\| \implies \mathbf{v}_{\mathbf{w}} = \cos(\alpha)\|\mathbf{v}\|= \frac{\mathbf{w}}{\|\mathbf{w}\|}$$
>  Possiamo anche scrivere: $\mathbf{v}_{\mathbf{w}} = (\cos(\alpha) \|\mathbf{v}\|\|\mathbf{w}\|) \frac{\mathbf{w}}{\|\mathbf{w}\|^2}$


## Proiezione ortogonale su un sottospazio di [[dimensione]] 1
Sia $(V, <,>)$ spazio Euclideo. Siano $\mathbf{v},\mathbf{w} \in V$ vettori diversi da $\mathbf{0}$. Sia $H = \Span(\mathbf{w})$ sottospazio di $V$. Esiste un unico vettore $\mathbf{v}_{H} \in H$ tale che $\mathbf{v}- \mathbf{v}_{H} \perp \mathbf{h} \forall \mathbf{h} \in H$. Inoltre si ha che $\mathbf{v}_{H} = \frac{<\mathbf{v},\mathbf{w}>}{\|\mathbf{w}\|^2}$ e $\|\mathbf{v} - \mathbf{h} \| \geq  \|\mathbf{v} - \mathbf{v}_{h}\| \forall \mathbf{h} \in H$. Diremo che $\mathbf{v}_{h}$ è la proiezione ortogonale di $\mathbf{v}$ su $H$ e che per $\mathbf{v}$ si ha la decomposizione ortogonale: $\mathbf{v} = \mathbf{v}_{H} + (\mathbf{v} -\mathbf{v}_{H})$


>[!dim]



>[!oss]
>Lo scalare $\frac{<\mathbf{v},\mathbf{w}>}{\|\mathbf{w}\|^2}$ si chiama coefficiente di Fourier di $\mathbf{v}$ rispetto a $\mathbf{w}$

## Proiezione ortogonale su un sottospazio $H$
Sia $(V,<,>)$ uno spazio Euclideo e sia $H$ un sottospazio di $V$, Supponiamo che $H$ ammetta una base ortogonale $\mathcal{B} = \left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{d} \right\}$ per ogni $\mathbf{v} \in V$ esiste ed è unico $\mathbf{v}_{H} \in H$ tale che $\mathbf{v} - \mathbf{v}_{h} \perp \mathbf{h}$ per ogni $\mathbf{h} \in H$. Il vettore $\mathbf{v}_{H} \in H$ tale che  $\mathbf{v}-\mathbf{v}_{H} \perp \mathbf{h}$ per ogni $\mathbf{h} \in H$. Il vettore $\mathbf{v}_{H}= \frac{<\mathbf{v},\mathbf{b}_{1}>}{\|\mathbf{b}_{1}\|}^2 \mathbf{b}_{1} + \dots + \frac{<\mathbf{v},\mathbf{b}_{d}>}{\|\mathbf{b}_{d}\|^2}\mathbf{b}_{d}$. Inoltre $\forall \mathbf{h} \in H$ si ha $\|\mathbf{v} -\mathbf{h}\| \geq \| \mathbf{v} - \mathbf{v}_{h}\|$ 

>[!dim]


## Matrice associata ad una proiezione ortogonale
Sia $H \subseteq \mathbb{R}^n$ sottospazio vettoriale, allora la funzione
$$ \begin{align}
P_{H} : \mathbb{R}^n &\to \mathbb{R}^n \\
&\mathbf{v} \mapsto \mathbf{v}_{H} : \text{proiezione ortogonale di $\mathbf{v}$ su $H$}
\end{align} $$
è lineare e dunque ammette una [[matrice rappresentativa]]

>[!proposizione]
>Sia $H$ un sottospazio di $\mathbb{R}^n$ e sia $\left\{ \mathbf{q}_{1},\dots,\mathbf{q}_{d} \right\}$ una base ortonormale di $H$. Sia $A = [\mathbf{q}_{1}|\dots|\mathbf{q}_{d}]$ allora
> $$ P_{H} = A A^T = \mathbf{q}_{1} \mathbf{q}_{1}^T + \dots + \mathbf{q}_{d}\mathbf{q}_{d}^T $$
> è la matrice che rappresenta la proiezione ortogonale di $\mathbb{R}^n$ sul sottospazio $H$
> 
>>[!dim]

>[!proposizione]
> $P \in M_{\mathbb{R}(n,n)}$ è la matrice di proiezione ortogonale su un sottospazio $H$ di $\mathbb{R}^n$ se e solo se
> 1. $P$ è idempotente, quindi $P^2 = P$
> 2. $P$ è simmetrica, quindi $P^T = P$
>
>Se $P$ è tale per cui 1 e 2 valgono allora $H = \Col(P)$ e $H^\perp = \ker(P)$


>[!oss]
>Se $P_{H}$ è la matrice di proiezione ortogonale su $H$ allora $\mathbb{1}_{n} - P_{H}$ è la matrice della proiezione ortogonale su $H^\perp$ infatti:
> $$ (\mathbb{1}_{n} - P_{H})\mathbf{v} = \mathbf{v} - \mathbf{v}_{H} = \mathbf{v}_{H^\perp} \quad (P_{H}(\mathbf{v}) = \mathbf{v}_{H}) $$


## Rotazioni in $\mathbb{R}^3$
Se $Q \in M_{\mathbb{R}(3,3)}$ è ortogonale e $\det(Q) = 1$ allora l'applicazione $\begin{align}\mathbb{R}^3 &\to\mathbb{R}^3\\\mathbf{x} &\mapsto Q\mathbf{x}\end{align}$ rappresenta una rotazione attorno ad un asse, in particolare $Q$ ammette come autovalore $\lambda=1$ e se $Q \neq \mathbb{1}_{3}$ l'autospazio associato a $\lambda=1$ è l'asse di rotazione. L'angolo $\alpha$ di rotazione si puó rucavare dalla relazione:
 $$ Tr(Q) = 1 + 2\cos(\alpha) $$

## Riflessioni ortogonali
Sia $(V,<,>)$ spazio euclideo, $H \subseteq V$ sottospazio e $\dim(V) < +\infty$. La riflessione ortogonale relativa ad $H$ è definita come: $\mathcal{R}(\mathbf{v}) = \mathbf{v}_{H} - \mathbf{v}_{H^\perp} = \mathbf{v}_{H} + \mathbf{v}_{H^\perp} - \mathbf{v}_{H^\perp} - \mathbf{v}_{H^\perp} = \mathbf{v} - 2\mathbf{v}_{H^\perp}$ 
In particolare se $P_{H^\perp}$ è la matrice della proiezione ortogonale su $H^\perp$ allora la matrice che rappresenta la riflessione ortogonale rispetto ad $H$ è: $\mathbb{1}_{n} - 2P_{H^\perp}$

