Per una [[matrice]] $A \in M_{\mathbb{R}(n,n)}$ essere simmetrica equivale alla condizione: $<A\mathbf{v},\mathbf{w}>_{\mathbb{R}^n} = <\mathbf{v},A\mathbf{w}>_{\mathbb{R}^n} \forall \mathbf{v},\mathbf{w} \in \mathbb{R}^n$. Infatti, se $A$ è simmetrica: $<A\mathbf{v},\mathbf{w}>_{\mathbb{R}^m}=(A\mathbf{v})^T\mathbf{w} = \mathbf{v}^TA^T\mathbf{w} = \mathbf{v}^TA\mathbf{w} = <\mathbf{v},A\mathbf{w}>_{\mathbb{R}^n}$. Viceversa se $\xi_{n} = \left\{ e_{1},\dots,\mathbf{e}_{n} \right\}$ è la base canonica e considero $\mathbf{v} = \mathbf{e}_{i}$ e $\mathbf{w} = \mathbf{e}_{j}$ allora dalle relazioni:
 $$ \begin{align}
&<A\mathbf{e}_{i},\mathbf{e}_{i}> = \mathbf{e}_{i}^TA^T\mathbf{e}_{j} =[A^T]_{ij} \\
&<\mathbf{e}_{i},A\mathbf{e}_{j}> = \mathbf{e}_{i}^T A \mathbf{e}_{j} = [A]_{ij}
\end{align}$$
otteniamo $A = A^T$


>[!definition]
>Sia $(V,<,>)$ uno spazio euclideo. Un endomorfismo $\mathcal{L} : V \to V$ si dice simmetrico se $<\mathcal{L}(\mathbf{v}),\mathbf{w}> = <\mathbf{v},\mathcal{L}(\mathbf{w})>$ per ogni $\mathbf{v},\mathbf{w} \in V$.
> Gli endomorfismi simmetrici vengono anche chiamati operatori autoaggiunti

>[!proposition]
>Sia $(V, \langle, \rangle)$ uno spazio euclideo di dimensione finita e sia $\mathcal{B}$ una base ortonormale. Un endomorfismo $\mathcal{L} : V \to V$ è simmetrico se e solo se $M_{\mathcal{B}}^\mathcal{B}(\mathcal{L})$ è simmetrica
>
>>[!dim]
>>Sia $\mathcal{B} = \{ \mathbf{q}_{1},\dots,\mathbf{q}_{n} \}$ una base ortonormale di $V$. Siano $\mathbf{u},\mathbf{w} \in V$ e $\mathbf{x},\mathbf{y} \in \mathbb{R}^n$ le coordinate di $\mathbf{v}$ e $\mathbf{w}$ rispetto a $\mathcal{B}$. Ricordiamo che:
>>$$ \left< \mathbf{v},\mathbf{w} \right>  = \left< x_{\mathcal{B}}(\mathbf{v}), x_{\mathcal{B}}(\mathbf{w}) \right>_{\mathbb{R}^n} = \left< \mathbf{x},\mathbf{y} \right>_{\mathbb{R}}  $$
>>dunque, posto $A = M_{\mathcal{B}}^{\mathcal{B}}(\mathcal{L})$ si ha che:
>>$$ \begin{align}
>>\left< \mathcal{L}(\mathbf{v}),\mathbf{w} \right> = \left< \mathbf{v},\mathcal{L}(\mathbf{w}) \right> \forall \mathbf{v},\mathbf{w} \in V \iff  \\
>> \left<x_{\mathcal{B}}(\mathcal{L}(\mathbf{v})),x_{\mathcal{B}}(\mathbf{w})  \right>_{\mathbb{R}^n} = \left< x_{\mathcal{B}}(\mathbf{v}),x_{\mathcal{B}}(\mathcal{L}(\mathbf{w})) \right>_{\mathbb{R}^n} \forall \mathbf{v},\mathbf{w} \in V \iff \\
>> \left< A \cdot x_{\mathcal{B}}(\mathbf{v}), x_{\mathcal{B}}(\mathbf{w}) \right>_{\mathbb{R}^n}  = \left< x_{\mathcal{B}}(\mathbf{v}), A \cdot x_{b}(\mathbf{w})  \right>_{\mathbb{R}^n} \forall \mathbf{v},\mathbf{w} \in V \iff \\
>> \left< A\mathbf{x},\mathbf{y} \right>_{\mathbb{R}^n} = \left< \mathbf{x}, A \cdot \mathbf{y} \right>_{\mathbb{R}^n}\quad \forall \mathbf{x},\mathbf{y} \in \mathbb{R}^n \iff A \text{ simmetrica}
>>\end{align}$$




>[!remark]
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

# ANKI

```anki
id: 1694785481597
deck: GAL
---
# Un endomorfismo su uno spazio euclideo è simmetrico solo se la matrice della base ortonormale è simmetrica
Sia $(V, \langle, \rangle)$ uno spazio euclideo di dimensione finita e sia $\mathcal{B}$ una base ortonormale. Un endomorfismo $\mathcal{L} : V \to V$ è simmetrico se e solo se $M_{\mathcal{B}}^\mathcal{B}(\mathcal{L})$ è simmetrica
===
>[!dim]
>Sia $\mathcal{B} = \{ \mathbf{q}_{1},\dots,\mathbf{q}_{n} \}$ una base ortonormale di $V$. Siano $\mathbf{u},\mathbf{w} \in V$ e $\mathbf{x},\mathbf{y} \in \mathbb{R}^n$ le coordinate di $\mathbf{v}$ e $\mathbf{w}$ rispetto a $\mathcal{B}$. Ricordiamo che:
>$$ \left< \mathbf{v},\mathbf{w} \right>  = \left< x_{\mathcal{B}}(\mathbf{v}), x_{\mathcal{B}}(\mathbf{w}) \right>_{\mathbb{R}^n} = \left< \mathbf{x},\mathbf{y} \right>_{\mathbb{R}}  $$
>dunque, posto $A = M_{\mathcal{B}}^{\mathcal{B}}(\mathcal{L})$ si ha che:
>$$ \begin{align}
>\left< \mathcal{L}(\mathbf{v}),\mathbf{w} \right> = \left< \mathbf{v},\mathcal{L}(\mathbf{w}) \right> \forall \mathbf{v},\mathbf{w} \in V \iff  \\
> \left<x_{\mathcal{B}}(\mathcal{L}(\mathbf{v})),x_{\mathcal{B}}(\mathbf{w})  \right>_{\mathbb{R}^n} = \left< x_{\mathcal{B}}(\mathbf{v}),x_{\mathcal{B}}(\mathcal{L}(\mathbf{w})) \right>_{\mathbb{R}^n} \forall \mathbf{v},\mathbf{w} \in V \iff \\
> \left< A \cdot x_{\mathcal{B}}(\mathbf{v}), x_{\mathcal{B}}(\mathbf{w}) \right>_{\mathbb{R}^n}  = \left< x_{\mathcal{B}}(\mathbf{v}), A \cdot x_{b}(\mathbf{w})  \right>_{\mathbb{R}^n} \forall \mathbf{v},\mathbf{w} \in V \iff \\
> \left< A\mathbf{x},\mathbf{y} \right>_{\mathbb{R}^n} = \left< \mathbf{x}, A \cdot \mathbf{y} \right>_{\mathbb{R}^n}\quad \forall \mathbf{x},\mathbf{y} \in \mathbb{R}^n \iff A \text{ simmetrica}
>\end{align}$$
```
