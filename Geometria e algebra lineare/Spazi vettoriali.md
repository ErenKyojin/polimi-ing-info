Vogliamo definire una struttura algebrica che descriva la struttura dell'[[insieme]] dei vettori liberi

>[!def]
>Dati un insieme $V$ ed un campo $\mathbb{K}$ si dice che $V$ è spazio vettoriale su $\mathbb{K}$ se $V$ ha: <div class="roman">
>1. un'operazione interna detta somma ed indicata con +
>   $$\begin{align}
>    + : &V \times V \to V \\
>    &(\mathbf{u},\mathbf{v}) \mapsto \mathbf{u}+\mathbf{v}
>   \end{align}$$
>2. un'operazione esterna 
>   $$\begin{align}
>\cdot : &\mathbb{K} \times V \\
>	&(t,\mathbf{u}) \mapsto t \cdot \mathbf{u}
>\end{align}$$
></div>
>
>Per le quali valgono le seguenti proprietà:
>1. Proprietà commutativà di $+$: $\mathbf{u}+\mathbf{v} = \mathbf{v}+\mathbf{u} \quad\forall \mathbf{u},\mathbf{v} \in V$ 
>2. Proprietà associativa di $+$: $(\mathbf{u}+\mathbf{v})+\mathbf{w} = \mathbf{u} + (\mathbf{v}+\mathbf{w})\qquad \forall \mathbf{u}, \mathbf{v}, \mathbf{w} \in V$
>3. Elemento netruro di $+$: $\exists \mathbf{0} \in V : \mathbf{u}+\mathbf{0} = \mathbf{u}\qquad \forall \mathbf{u} \in V$
>4. Esiste l'opposto di ogni elemento $\mathbf{v} \in V$, quindi $\forall \mathbf{v} \in V\ \exists\ \mathbf{v'} \in V : \mathbf{v}+\mathbf{v}' = \mathbf{0}$
>5. $t \cdot (\mathbf{u}+\mathbf{v}) = t \mathbf{u} + t\mathbf{v}$
>6. $(t+s)\mathbf{u} = t \mathbf{u}+ s \mathbf{u}$
>7. $t(s\mathbf{u}) = (t\cdot s)\mathbf{u}$
>8. $1\mathbf{v} = \mathbf{v}$
>   
>   (dalla 5 alla 8 $\forall t, s \in \mathbb{K}, \forall \mathbf{u},\mathbf{v} \in V$)
>   
>   Gli elementi di uno spazio vettoriale sono detti **[[Geometria e algebra lineare/Vettori]]**

>[!esempio] Esempi di spazi vettoriali
>1. L'insieme dei vettori liberi $V$ dello spazio euclideo è spazio vettoriale su $\mathbb{R}$
>2. $V = M_{\mathbb{K}(m,n)}$ è spazio vettoriale su $\mathbb{K}$ rispetto alla somma di matrici e alla moltiplicazione di una matrice per uno scalare, in questo esempio rientra anche $\mathbb{K}^n$ identificato dai vettori colonna $M_{\mathbb{K}(n,1)}$vettori
>3. $\mathbb{K}^\mathbb{N} = \left\{ [a_{1}\quad a_{2}\quad\dots \quad a_{n}\quad \dots]  : \forall k \in \mathbb{N}, a_{k} \in \mathbb{K}\right\}$ Ossia l'insieme delle successioni in $\mathbb{K}$ (con vettori ad infiniti componenti), infatti è possibile definire somma e prodotto scalare tra successioni: 
>   $$ \{a_{k}\} + \{b_{k}\} := \{a_{k} + b_{k}\}  $$
>   $$ c\{a_{k}\} := \{ca_{k}\}\quad c \in \mathbb{K} $$
>   4. $V = \{f:A \to \mathbb{K}\}$ con $A$ un insieme, $f(a) \in \mathbb{K} \forall a \in A$
>      $$ (f+g)(a) := f(a) + g(a) $$
>   $$ (c\cdot f)(a) := c \cdot f(a) \quad c \in \mathbb{K}$$
>   
>   Un esempio particolare del 4. è l'insieme $V = C^0([a,b]) = \left\{ \text{l'insieme delle funzioni continue su } [a,b] \right\}$ 
>   $\implies f : [a,b] \to \mathbb{R}$ sia spazio vettoriale su $\mathbb{R}$
>


>[!oss]
>In uno spazio vettoriale $V$ su $\mathbb{K}$ valgono:
>- legge di cancellazione:
> 	  $\mathbf{u}+\mathbf{w} = \mathbf{v} + \mathbf{w} \implies \mathbf{u} = \mathbf{v}$
>- legge di annulamento del prodotto per uno scalare: 
> 	 $t \cdot \mathbf{v} = \mathbf{0} \implies t = 0 \cup \mathbf{v} = 0$
> - Opposto di $\mathbf{v}$ è unico e si denota con $-\mathbf{v}$, inoltre $-\mathbf{v} = (-1) \cdot \mathbf{v}$
>
>Inoltre si puó definire la differenza: $\mathbf{v}-\mathbf{w}:= \mathbf{v} + (-\mathbf{w})$


Uno spazio vettoriale puó contenere [[sottospazi vettoriali]]
