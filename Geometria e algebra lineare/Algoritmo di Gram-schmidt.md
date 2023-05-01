>[!def]
>Sia $(V,<,>)$ [[spazio euclideo]], $H$ un sottospazio vettoriale di $V$ e $\dim(H) = d < +\infty$. L'algoritmo di Gram-Schmidt permette di determinarre una base ortogonale (e se necessario ortonormale) di $H$ a partire da una base qualsiasi di $H$. Gran-Schmidt implica che per ogni sottospazio $H \subseteq V$ con $\dim(H) < +\infty$ e $\forall \mathbf{v} \in V$ esiste ed è unico $\mathbf{v}_{H} \in H$ tale che $\mathbf{v} - \mathbf{v}_{H} \perp \mathbf{h} \in H$


>[!proposizione]
>Sia $(V,<,>)$ spazio euclideo e $\mathbf{v}_{1},\dots,\mathbf{v}_{d} \in V$ [[Dipendenza e indipendenza lineare|linearmente indipendente]], allora:
> $$ \begin{align}
>&\mathbf{b}_{1} = \mathbf{v}_{1} \\
> &\mathbf{b}_{2} = \mathbf{v}_{2} - \hat{x}_{2}^1 \mathbf{b}_{1} \\
> &\mathbf{b}_{3} = \mathbf{v}_{3} - (\hat{x}_{3}^1 \mathbf{b}_{1} + \hat{x}_{3}^2 \mathbf{b}_{2}) \\
> &\vdots \\
> &\mathbf{b}_{d} = \mathbf{v}_{d} -  (\hat{x}_{d}^1 \mathbf{b}_{1} + \dots +\hat{x}_{d}^{d-1}\mathbf{b}_{d-1})
>\end{align} $$
>Dove $\hat{x}_{k}^j = \frac{<\mathbf{v}_{k}, \mathbf{b}_{j}>}{\|\mathbf{b}_{j}\|^2}$ per $k=1,\dots,d$ e $j = 1,\dots,d-1$
>è un [[insieme]] di vettori a due a due ortogonali e
> $$ \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) = \Span(\mathbf{b}_{1},\dots,\mathbf{b}_{d}) = H $$
> In particolare $\left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{d} \right\}$ è una base ortogonale di $H$, mentre $\left\{ \frac{\mathbf{b}_{1}}{\|\mathbf{b}_{1}\|}, \frac{\mathbf{b}_{2}}{\|\mathbf{b}_{2}\|},\dots, \frac{\mathbf{b}_{n}}{\|\mathbf{b}_{n}\|}\right\}$ è una base ortonormale di $H$


>[!oss]
>Se $\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{d} \right\}$ sono linearmente dipendenti, si puó applicare ugualmente l'algoritmo e, nel caso che $\mathbf{v}_{k}$ sia combinazione lineare dei precedenti vettori, $\mathbf{b}_{k} = \mathbf{0}$. Tale vettore va scartato. Il risultato è un [[insieme]] di vettori $\left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{r} \right\}$ ortogonali e linearmente indipendenti tali per cui $H = \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d})= \Span(\mathbf{b}_{1},\dots,\mathbf{b}_{r})$ con $r < d$