Per una [[matrice]] $A \in M_{\mathbb{R}(n,n)}$ essere simmetrica equivale alla condizione: $<A\mathbf{v},\mathbf{w}>_{\mathbb{R}^n} = <\mathbf{v},A\mathbf{w}>_{\mathbb{R}^n} \forall \mathbf{v},\mathbf{w} \in \mathbb{R}^n$. Infatti, se $A$ è simmetrica: $<A\mathbf{v},\mathbf{w}>_{\mathbb{R}^m}=(A\mathbf{v})^T\mathbf{w} = \mathbf{v}^TA^T\mathbf{w} = \mathbf{v}^TA\mathbf{w} = <\mathbf{v},A\mathbf{w}>_{\mathbb{R}^n}$. Viceversa se $\xi_{n} = \left\{ e_{1},\dots,\mathbf{e}_{n} \right\}$ è la base canonica e considero $\mathbf{v} = \mathbf{e}_{i}$ e $\mathbf{w} = \mathbf{e}_{j}$ allora dalle relazioni:
 $$ \begin{align}
&<A\mathbf{e}_{i},\mathbf{e}_{i}> = \mathbf{e}_{i}^TA^T\mathbf{e}_{j} =[A^T]_{ij} \\
&<\mathbf{e}_{i},A\mathbf{e}_{j}> = \mathbf{e}_{i}^T A \mathbf{e}_{j} = [A]_{ij}
\end{align}$$
otteniamo $A = A^T$


>[!def]
>Sia $(V,<,>)$ uno spazio euclideo. Un endomorfismo $\mathcal{L} : V \to V$ si dice simmetrico se $<\mathcal{L}(\mathbf{v}),\mathbf{w}> = <\mathbf{v},\mathcal{L}(\mathbf{w})>$ per ogni $\mathbf{v},\mathbf{w} \in V$.
> Gli endomorfismi simmetrici vengono anche chiamati operatori autoaggiunti

>[!proposizione]
>Sia $V$ uno spazio euclideo di dimensione finita e sia $\mathcal{B}$ una base ortonormale. Un endomorfismo $\mathcal{L} : V \to V$ è simmetrico se e solo se $M_{\mathcal{B}}^\mathcal{B}(\mathcal{L})$ è simmetrica
>
>>[!dim]



>[!oss]
>Sia $(V,<,>)$ spazio euclideo, $\dim(V) < +\infty$ e sia $\mathcal{L} : V \to V$ un endomorfismo. Se esiste una base ortonormale di autovettori per $\mathcal{L}$ allora $\mathcal{L}$ è simmetrico. Infatti su $\mathcal{B} =\left\{ \mathbf{q}_{1},\dots,\mathbf{q}_{n} \right\}$ è base ortonormale di autovettori per $\mathcal{L}$ si ha che $\forall \mathbf{v} =x_{1}\mathbf{q}_{1} + \dots + x_{n}\mathbf{q}_{n}$ e $\mathbf{w} = y_{1}\mathbf{q}_{1} + \dots + y_{n}\mathbf{q}_{n}$
> $$ \begin{align}
><\mathcal{L}(\mathbf{v}),\mathbf{w}> &= <x_{1}\mathcal{L}(\mathbf{q}_{1})+\dots + x_{n}\mathcal{L}(\mathbf{q}_{n}),y_{1}\mathbf{q}_{1} + \dots + y_{n}\mathbf{q}_{n}> \\
> &= <x_{1} \lambda_{1}\mathbf{q}_{1} + \dots + x_{n}\lambda_{n}\mathbf{q}_{n},y_{1}\mathbf{q}_{1} + \dots + y_{n}\mathbf{q}_{n}> \\
> &= \lambda_{1}x_{1}y_{1} + \dots + \lambda_{n}x_{n}y_{n}
>\end{align} $$
> $$ \begin{align}
><\mathbf{v},\mathcal{L}(\mathbf{w})> &= <x_{1}\mathbf{q}_{1} + \dots + x_{n}\mathbf{q}_{n}, y_{1}\mathcal{L}(\mathbf{q}_{1}) + \dots + y_{n}\mathcal{L}(\mathbf{q}_{n})> \\
> &= <x_{1}\mathbf{q}_{1} + \dots + x_{n}\mathbf{q}_{n}, \lambda_{1}y_{1}\mathbf{q}_{1} + \dots + \lambda_{n}y_{n}\mathbf{q}_{n}> \\
> &= \lambda_{1}x_{1}y_{1} + \dots + \lambda_{n}x_{n}y_{n}
>\end{align} $$
>Quindi $<\mathcal{L}(\mathbf{v}),\mathbf{w}> = <\mathbf{v},\mathcal{L}(\mathbf{w})>$ e $\mathcal{L}$ è simmetrica. Osserviamo che le proiezioni ortogonali sono endomorfismi simmetrici. Infatti se $H \subseteq V$ e $\begin{align}P_{H} : V &\to V \\\mathbf{v} &\mapsto \mathbf{v}_{H}\end{align}$ una base ortonormale di autovettori di $P_{H}$ si puó costruire accostando una base ortonormale per $H$ (autovettori relativi a $1$) e una base ortonormale per $H^\perp$ (autovettori relativi a $0$). Analogamente anche le riflessioni ortogonali sono endomorfismi simmetrici. Se $\mathcal{R} : V \to V (\mathbf{v} \mapsto \mathbf{v} - 2\mathbf{v}_{H^\perp})$ allora una base ortonormale di autovettori di $\mathcal{R}$ si puó costruire accostando una base ortonormale per $H(R | \mathbf{h}) = \mathbf{h} - 2\quad \mathbf{h}_{H^\perp} = \mathbf{h} \quad \forall \mathbf{h} \in H$ ed una base ortonormale per $H^\perp(\mathcal{R}(\mathbf{h}')=\mathbf{h}' - 2\mathbf{h}'_{H^\perp}=\mathbf{h}' -2\mathbf{h}'= -\mathbf{h}' \forall \mathbf{h}' \in H^\perp)$


