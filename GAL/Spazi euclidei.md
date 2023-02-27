Sia $V$ [[Spazi vettoriali|spazio vettoriale]] su $\mathbb{R}$
>[!def]
>Il [[prodotto scalare]] è una funzione da $V \times V$ in $\mathbb{R}$ che a una coppia di vettori associa un numero reale.
>     
> Definiamo quindi uno spazio euclideo come uno spazio vettoriale $V$ su $\mathbb{R}$ dotato di un prodotto scalare $<,>$. Si scrive $(V,<,>)$


>[!def]
>Sia $(V,<,>)$ uno spazio Euclideo. La norma o lunghezza o modulo di un vettore $\mathbf{v} \in V$ è il numero reale $\geq 0$
> $$ \|\mathbf{v}\| :=  \sqrt{ <\mathbf{v},\mathbf{v}> } $$
> Diremo che $\mathbf{v} \in V$ è [[versore]] se $\|\mathbf{v}\|=1$


>[!proprietà della norma]
>1. **Omogeneità**: $\|t\mathbf{v}\|=|t|\cdot\|\mathbf{v}\|\quad\forall t \in \mathbb{R}$ e ogni $\mathbf{v} \in V$
>2. **Annullamento**: $\|\mathbf{v}\| = 0 \iff \mathbf{v} = \mathbf{0}$
>3. **Disuguaglianza triangolare**:$\forall \mathbf{v},\mathbf{w} \in V$ allora $\|\mathbf{v} + \mathbf{w}\| \leq \|\mathbf{v}\|+\|\mathbf{w}\|$


>[!def]
>Sia $(V,<,>)$ uno spazio Euclideo. I vettori $\mathbf{v},\mathbf{w} \in V$ si dicono ortogonali e si scrive $\mathbf{v} \perp \mathbf{w}$ se 
> $$ <\mathbf{v},\mathbf{w}> = 0 $$


>[!teorema]
>Sia $(V,<,>)$ spazio euclideo e $\mathbf{v}_{1},\mathbf{v}_{2} \in V$ allora:
>1. **Carnot**: $\|\mathbf{v}_{1}+\mathbf{v}_{2}\|^2 = \|\mathbf{v}_{1}\|^2 + \|\mathbf{v}_{2}\|^2 + 2<\mathbf{v}_{1},\mathbf{v}_{2}>$
>2. **Pitagora**: se $\mathbf{v}_{1} \perp \mathbf{v}_{2}$ allora $\|\mathbf{v}_{1} + \mathbf{v}_{2}\|^2 = \|\mathbf{v}_{1}\|^2 + \|\mathbf{v}_{2}\|^2$
>
>>[!dim]
>>1.
>> $$ \begin{align}
>> \|\mathbf{v} + \mathbf{w}\|^2 &= <\mathbf{v}+\mathbf{w},\mathbf{v}+\mathbf{w}> = <\mathbf{v},\mathbf{v}+\mathbf{w}> + <\mathbf{w},\mathbf{v}+\mathbf{w}> &= \\
>> &=<\mathbf{v},\mathbf{v}> + <\mathbf{v},\mathbf{w}> + <\mathbf{v},\mathbf{w}> + <\mathbf{w},\mathbf{w}> =  \\
>> &= \|\mathbf{v}\|^2+ \|\mathbf{w}\|^2 = 2<\mathbf{v},\mathbf{w}>
>>\end{align} $$
>>
>>2. dal teorema di Carnot, essendo $\mathbf{v} \perp \mathbf{w}$ si ha: 
>>   $$\|\mathbf{v} + \mathbf{w}\|^2 = \|\mathbf{v}\|^2 + \|\mathbf{w}\|^2 + 2<\mathbf{v},\mathbf{w}> = \|\mathbf{v}\|^2 + \|\mathbf{w}\|^2  $$
>
>>[!corollario]
>>$<\mathbf{v},\mathbf{w}> = \frac{1}{2}(\|\mathbf{v}+\mathbf{w}\|^2 - \|\mathbf{v}\|^2 - \|\mathbf{w}\|^2)$ (conseguenza del teorema di carnot)

>[!teorema] Teorema di pitagora generalizzato
>Sia $(V,<,>)$ spazio Euclideo e siano $\mathbf{v}_{1},\dots,\mathbf{v}_{d} \in V$
>1. Se $\mathbf{v}_{i} \perp \mathbf{v}_{j}\quad \forall i \neq j, i,j = 1,\dots,d$ allora
> $$ \|\mathbf{v}_{1} + \dots + \mathbf{v}_{d}\|^2 = \|\mathbf{v}_{1}\|^2 + \dots + \|\mathbf{v}_{d}\|^2 $$
> 2. Se $\mathbf{v}_{i} = \mathbf{0}\quad \forall i = 1,\dots,d$ e $\mathbf{v}_{i} \perp \mathbf{v}_{j}\quad \forall i,j = 1,\dots,d$ e $j \neq i$ allora $\mathbf{v}_{1},\dots \mathbf{v}_{d}$ sono linearmente indipendenti
>
>>[!dim]
>>1. $$ \begin{align}
>> \|\mathbf{v}_{1} + \dots + \mathbf{v}_{d}\|^2 &= <\mathbf{v}_{1} +\dots + \mathbf{v}_{d}, \mathbf{v}_{1} + \dots + \mathbf{v}_{d}>  \\
>> &=\|\mathbf{v}_{1}\|^2 + \dots + \|\mathbf{v}_{d}\|^2 + 2 \sum_{1 \leq i \leq j \leq d} <\mathbf{v}_{1},\mathbf{v}_{j}> = \|\mathbf{v}_{1}\|^2 + \dots + \|\mathbf{v}_{d}\|^2
>>\end{align}$$
>>
>>2. Se $\mathbf{v}_{1},\dots,\mathbf{v}_{d}$ fossero linearmente dipendenti allora $\exists t_{1},\dots,t_{d} \in \mathbb{R}$ non tutti nulliL $t_{1}\mathbf{v}_{1} + \dots + t_{d}\mathbf{v}_{d} = \mathbf{0}$. Quindi
>>   $$ \begin{align}
>>  0 &= \|0\|^2 = \|t_{1}\mathbf{v}_{1} + \dots + t_{d}\mathbf{v}_{d}\|^2 = |t_{1}|^2\|\mathbf{v}_{1}\|^2 + \ldots + |t_{d}|\|\mathbf{v}_{d}\|^2 \\
>> &\iff t_{1} = \dots = t_{d} = 0
>>\end{align} $$
>>Che è assurdo, quindi $\mathbf{v}_{1},\dots,\mathbf{v}_{d}$ sono [[Dipendenza e indipendenza lineare|linearmente indipendenti]]
>>$\CVD$

## Disuguaglianza di Schwartz
Sia $(V,<,>)$ spazio euclideo per ogni $\mathbf{v},\mathbf{w} \in V$ si ha che:
 $$ |<\mathbf{v},\mathbf{w}>| \leq \|\mathbf{v}\|\|\mathbf{w}\| $$
 e l'uguaglianza si ha se e solo se $\mathbf{v}$ e $\mathbf{w}$ sono linearmente dipendenti
>[!dim] 18

>[!oss]
>Possiamo dimostrare la disuguaglianza triangolare 
>e segue


## Base ortogonale e ortonormale di uno spazio Euclideo

> [!def]
> Sia $(V,<,>)$ uno spazio Euclideo e $\dim(V)=n$. Sia $\mathcal{B} = \left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ una base di $V$. Diremo che $\mathcal{B}$ è base ortogonale se $\mathbf{b}_{i} \perp \mathbf{b}_{j} \forall i,j = 1,\dots,n$ e $i \neq j$. Se inoltre $\|\mathbf{b}_{i}\|=1\quad\forall i = 1,\dots,n$, diremo che la base è ortonormale
> 

>[!esempio]
>Sia $V = \mathbb{R}^n$ munito del prodotto scalare standartd allora $\xi_{n} = \left\{ \mathbf{e}_{1},\dots,\mathbf{e}_{n} \right\}$ la base canonica è una base ortonormale




### Coordinate rispetto ad una base ortogonale / ortonormale
Sia $(V,<,>)$ spazio euclideo e sia $\mathcal{B} = \left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ una base ortogonale. Sia $\mathbf{v} \in V$ allora $\mathbf{v} = \hat{x}_{1}\mathbf{b}_{1} + \dots + \hat{x}_{n}\mathbf{b}_{m}$ ove
 $$ \hat{x}_{i} = \frac{<\mathbf{v},\mathbf{b}_{i}>}{\|\mathbf{b}_{i}\|^2} \text{ coefficient di fourier di $\mathbf{v}$ rispetto a $\mathbf{b}_{i}$} $$
 Infatti $$ <\mathbf{v},\mathbf{b}_{i}> = <\hat{x}_{1}\mathbf{b}_{1} + \dots + \hat{x}_{n}\mathbf{b}_{n},\mathbf{b}_{i}> = \hat{x}_{1}<\mathbf{b}_{1},\mathbf{b}_{i}> + \ldots + \hat{x}_{i}<\mathbf{b}_{i},\mathbf{b}_{i}> + \dots + \hat{x}_{n}<\mathbf{b}_{n},\mathbf{b}_{i}> $$
 $\implies \hat{x}_{i} = \frac{<\mathbf{v},\mathbf{b}_{i}>}{\|\mathbf{b}_{i}\|^2}$
 Se $\mathcal{B}$ è base autonormale allora $\mathbf{v} = <\mathbf{v},\mathbf{b}_{1}>\mathbf{b}_{1} + \dots + <\mathbf{v},\mathbf{b}_{n}>\mathbf{b}_{n}$. Inoltre se $\mathcal{B}$ è base autonormale e $\mathbf{x} = \begin{bmatrix}x_{1} & \dots & x_{n}\end{bmatrix}^T$ e $\mathbf{y} = \begin{bmatrix}y_{1} & \dots & y_{n}\end{bmatrix}^T$ sono le coordinate di  $\mathbf{v}$ e $\mathbf{w}$ in $V$ allora
  $$ <\mathbf{v},\mathbf{w}> = <x_{1}\mathbf{b}_{1} + \dots + x_{n}\mathbf{b}_{n}, y_{1}\mathbf{b}_{1} + \dots + y_{n}\mathbf{b}_{n}> = \sum_{i,j=1}^n x_{i}y_{j} <\mathbf{b}_{1},\mathbf{b}_{j}> = x_{1}y_{1} + \dots + x_{n}y_{n} $$