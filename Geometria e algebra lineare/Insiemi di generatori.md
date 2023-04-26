Sia $V$ [[Spazi vettoriali|spazio vettoriale]] su $\mathbb{K}$ e siano $\mathbf{v}_{1},\dots,\mathbf{v}_{d}$ e siano $\mathbf{v}_{1},\dots,\mathbf{v}_{d} \in V$ vettori fissati.
Definiamo:
$$ \text{Span}(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) := \{t_{1}\mathbf{v}_{1} + \dots + t_{d}\mathbf{v}_{d} : t_{1},\dots,t_{d} \in \mathbb{K}\} $$
$$\begin{align}
= Im(\mathcal{P}) \text{ dove } \mathcal{P}&: \mathbb{K}^d \to V \\
&\begin{bmatrix}
t_{1} \\
\vdots \\
t_{d}
\end{bmatrix} \mapsto t_{1}\mathbf{v}_{1}+\dots+t_{d}\mathbf{v}_{d}
\end{align}$$
è la mappa di parametrizzazione è la mappa di parametrizzazione. Siccome $\mathcal{P}$ è lineare $\text{Span}(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) = Im(\mathcal{P})$ è sottospazio vettoriale di $V$.
<<<<<<<<<<<<<
>[!proposizione]
>Se $H$ è [[sottospazi vettoriali|sottospazio]] di $V$ e $\mathbf{v}_{1},\dots, \mathbf{v}_{d} \in H$ allora $Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) \subseteq H$
>>[!dim]

>[!oss]
>Dalla proposizione precedente segue che $\text{Span}(\mathbf{v}_{1},\dots,\mathbf{v}_{d})$ è contenuto nell'intersezione di tutti i sottospazi che contengono $\mathbf{v}_{1},\dots,\mathbf{v}_{d}$.
>Diremo che $\Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) := \{t_{1}\mathbf{v}_{1}+\dots+t_{d}\mathbf{v}_{d} : t_{1},\dots,t_{d} \in \mathbb{K}\}$
>$= \Im(\mathcal{P})$ dove $$\begin{align}
>\mathcal{P}&:\mathbb{K}^d \to V \\
>&\begin{bmatrix}
t_{1} \\
\vdots \\
t_{d}
\end{bmatrix} \mapsto t_{1}\mathbf{v}_{1}+\dots+t_{d}\mathbf{v}_{d}
>\end{align}$$
>è la mappa di parametrizzazione. Siccome $\mathcal{P}$ è lineare $\Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d})= \Im(\mathcal{P})$ è sottospazio vettoriale di $V$.

>[!Proposizione] proposizione 1
>Se $H$ è sottospazio di $V$ e $\mathbf{v}_{1},\dots,\mathbf{v}_{d} \in H$ allora $\Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) \subseteq H$
>
>>[!dim]
>>Devo dimostrare che $\forall t_{1},\dots,t_{d} \in \mathbb{K}$ si ha $t_{1}\mathbf{v}_{1}+\dots+t_{d}\mathbf{v}_{d} \in H$
>>Presi $t_{1},\dots,t_{d}\in\mathbb{K}$ si ha $t_{i}\mathbf{v}_{i} + t_{i}\mathbf{v}_{i} \in H \forall i = 1,\dots,d$. Siccome $H$ è chiuso rispetto alla somma, si ha: $t_{1}\mathbf{v}_{1}+\dots+t_{d}\mathbf{v}_{d} \in H$. Quindi $\Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) \subseteq H$

>[!oss]
>Dalla proposizione precedente segue che $\Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d})$  è contenuto nell'intersezione di tutti i sottospazi che contengono $\mathbf{v}_{1},\dots,\mathbf{v}_{d}$
>Diremo quindi che $\Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d})$ è il sottospazio generato da $\mathbf{v}_{1},\dots,\mathbf{v}_{d}$. $\mathbf{v}_{1},\dots,\mathbf{v}_{d}$ si chiamano generatori di $\Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d})$. Se $\Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) = V, \mathbf{v}_{1},\dots,\mathbf{v}_{d}$ si chiamano generatori di $V$

>[!oss]
>1. $\mathbf{v}_{1},\dots,\mathbf{v}_{d}$ sono generatori di $V$ se e solo se
> $$\begin{align}
>\mathcal{P} &: \mathbb{K}^d \to V \\
>&\begin{bmatrix}
>t_{1} \\
>\vdots \\
t_{d} 
\end{bmatrix} \mapsto t_{1}\mathbf{v}_{1} + \dots+ t_{d}\mathbf{v}_{d}
\end{align}$$
Se $\mathbf{v}_{1},\dots,\mathbf{v}_{d}$ sono generatori, $\mathcal{P}$ è suriettiva ma non necessariamente iniettiva. Mentre $\mathbf{v}_{1},\dots,\mathbf{v}_{d}$ è una [[Base]] se e solo se $\mathcal{P}$ è iniettiva e suriettiva. Quindi se $\mathbf{v}_{1},\dots,\mathbf{v}_{d}$ sono una base allora sono generatore ma se sono generatori non è detto che siano una base.


>[!proposizione] proposizione 2
>Siano $V$ e $W$ spazi vettoriali su $\mathbb{K}$ e sia $\mathcal{L} : V \to W$ un'applicazione lineare. Sia $H$ un sottospazio vettoriale di $V$ e sia $\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{d} \right\} \subseteq V$ tale che $H = \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d})$ allora $\mathcal{L}(H) = \Span(\mathcal{L}(\mathbf{v}_{1}),\dots,\mathcal{L}(\mathbf{v}_{d}))$
>
>>[!dim]
>>Prima dimostriamo che $\mathcal{L}(H) \subseteq \Span(\mathcal{L}(\mathbf{v}_{1}),\dots,\mathcal{L}(\mathbf{v}_{d}))$
>>Se $\mathbf{v} \in H \implies \exists t_{1},\dots,t_{d} \in \mathbb{K} : \mathbf{v} = t_{1}\mathbf{v}_{1} + \dots + t_{d}\mathbf{v}_{d} \implies \mathcal{L}(\mathbf{v}) = \mathcal{L}(t_{1}\mathbf{v}_{1}+\dots+t_{d}\mathbf{v}_{d})=$
>>$=t_{1}\mathcal{L}(\mathbf{v}_{1})+\dots+t_{d}\mathcal{L}(\mathbf{v}_{d}) = \Span(\mathcal{L}(\mathbf{v}_{1}),\dots,\mathcal{L}(\mathbf{v}_{d}))$
>>Viceversa se $\mathbf{w} \in \Span(\mathcal{L}(\mathbf{v}_{1}),\dots,\mathcal{L}(\mathbf{v}_{d})) \implies \exists t_{1},\dots,t_{d} \in \mathbb{K} :$
>> $$ \mathbf{w} = t_{1}\mathcal{L}(\mathbf{v}_{1}) + \dots + t_{d}\mathcal{L}(\mathbf{v}_{d}) = \mathcal{L}(t_{1}\mathbf{v}_{1}+\dots+t_{d}\mathbf{v}_{d}) \in \mathcal{L}(H) $$

>[!proposizione] Proposizione 3
>Sia $V$ spazio vettoriale su $\mathbb{K}$ e siano $\mathbf{v}_{1},\dots,\mathbf{v}_{d} \in \mathbb{K}$
>Allora $\mathbf{w} \in \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) \iff \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) = \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d},\mathbf{w})$
>
>>[!dim]
>>Osserviamo che $\mathbf{v}_{1},\dots,\mathbf{v}_{d} \in \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d},\mathbf{w})$, infatti:$\mathbf{v}_{i} = 0 \cdot \mathbf{v}_{1} + \dots + 1\cdot \mathbf{v}_{i} + \dots + 0\cdot \mathbf{v}_{d} + 0\cdot \mathbf{w}$, Quindi $\Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) \subseteq \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d},\mathbf{w})$. Se $\mathbf{w} \in \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d})$ allora si ha che $\mathbf{w}_{1},\mathbf{v}_{1},\dots,\mathbf{v}_{d}\in \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d})$ e quindi, per la proposizione 1
>>$$\begin{align}
>&\Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d},\mathbf{w}) \subseteq \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) \implies \\
>>&\Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) = \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d},\mathbf{w}) \\ \\
>&\text{Se } \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d}) = \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d},\mathbf{w}) \implies \\
>&\mathbf{w} \in \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d},\mathbf{w}) = \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{d})
\end{align}$$

