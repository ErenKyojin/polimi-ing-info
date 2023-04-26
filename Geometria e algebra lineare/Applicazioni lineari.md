Le applicazioni lineari sono [[relazione di funzione|funzioni]] tra [[Spazi vettoriali]] che preservano la struttura di spazi vettoriali che mantengono la struttura di spazio vettoriale.

>[!esempio]
>$A \in M_{{\mathbb{K}}(m,n)}$ consideriamo l'applicazione 
> $$ \begin{align}
> \mathcal{L}_{A} : &\mathbb{K}^n \to \mathbb{K}^m \\
> &\mathbf{v} \mapsto A \cdot \mathbf{v}
\end{align} $$
>$\mathcal{L}_{A}$ gode delle seguenti proprietä:
>1. $\mathcal{L}_{A}(\mathbf{v}_{1}+\mathbf{v}_{2}) = A \cdot(\mathbf{v}_{1}+\mathbf{v}_{2}) = A \mathbf{v}_{1}+ A \mathbf{v}_{2}= \mathcal{L}(\mathbf{v}_{1})+\mathcal{L}(\mathbf{v}_{2})\quad \forall \mathbf{v}_{1},\mathbf{v}_{2} \in \mathbb{K}^n$
>2. $\mathcal{L}_{A}(t\mathbf{v}) = A\cdot(t\mathbf{v}) = tA\cdot\mathbf{v} = t\mathcal{L}_{A}(\mathbf{v}) \forall t \in \mathbb{K}\quad \forall \mathbf{v} \in \mathbb{K}^n$


>[!def]
>Siano $V$ e $W$ spazi vettoriali su $\mathbb{K}$ diremo che una **funzione** $\mathcal{L} : V \to W$ è **lineare** se valgono le seguenti
> 1. $\forall \mathbf{v}_{1}, \mathbf{v}_{2} \in V\quad \mathcal{L}(\underbrace{ \mathbf{v}_{1}+\mathbf{v}_{2} }_{ \text{somma in }V })= \underbrace{ \mathcal{L}(\mathbf{v}_{1})+\mathcal{L}(\mathbf{v}_{2}) }_{ \text{somma in }W }\quad$ detta additività
> 2. $\forall t \in K, \forall \mathbf{v} \in V\quad \mathcal{L}(\underbrace{ t\cdot\mathbf{v} }_{ \text{prodotto in }V }) = \underbrace{ t\mathcal{L}(\mathbf{v}) }_{ \text{prodotto in }W }\quad$ detta omogeneità
>
>Queste due proprietà possono essere riassunte in un unico controllo:
> $$ \forall t_{1},t_{2} \in \mathbb{K}\ e \ \forall \mathbf{v}_{1},\mathbf{v}_{2} \in V\qquad\mathcal{L}(t_{1}\mathbf{v}_{1}+t_{2}\mathbf{v}_{2}) = t_{1}\mathcal{L}(\mathbf{v}_{1})+t_{2}\mathcal{L}(\mathbf{v}_{2})$$


>[!oss]
>1.
>Se $\mathcal{L} : V \to W$ è lineare allora $\mathcal{L}(\mathbf{0}_{V}) = \mathcal{L}(\mathbf{0}\mathbf{w})$:
> $$ \mathcal{L}(\mathbf{0}_{v}) = \mathcal{L}(\mathbf{0}_{v}+\mathbf{0}_{v}) = \mathcal{L}(\mathbf{0}_{v}) + \mathcal{L}(\mathbf{0}_{V}) \implies \mathcal{L}(\mathbf{0_{v}}) + \mathbf{0}_{W} = \mathcal{L}(\mathbf{0}_{V})+\mathcal{L}(\mathbf{0}_{V}) $$ 
> $$ \implies \mathbf{0}_{W} = \mathcal{L}(\mathbf{0}_{V}) $$
> 2. In generale vale $\forall t_{1},\dots,t_{d} \in \mathbb{K}$ e $\forall \mathbf{v}_{1},\dots,\mathbf{v}_{d} \in V$:
>  $$ \mathcal{L}(t_{1}\mathbf{v}_{1}+t_{2}\mathbf{v}_{2}+\dots+t_{d}\mathbf{v}_{d}) = t_{1}\mathcal{L}(\mathbf{v}_{1})+t_{2}\mathcal{L}(\mathbf{v}_{2}) +\dots+ t_{d}\mathcal{L}(\mathbf{v}_{d})$$


>[!esempio] 
>
>$V = \mathbb{R}_{[x]\leq 2} = \{\text{polinomi in }x \text{ a coefficienti in }\mathbb{R} \text{ di grado}\leq 2\}$
>$W = \mathbb{R}_{[x]\leq 1}\quad D:V \to W$ è la derivata rispetto a $x$:
>
>quindi $D(ax^2 + bx + c) =2ax + b$
>
>$\forall t_{1},t_{2} \in \mathbb{R}, \forall p_{1},p_{2} \in \mathbb{R}_{[x] \leq 2} \implies$
> $$ D(t_{1}p_{1}+t_{2}p_{2}) = t_{1}D(p_{1}) + t_{2}D(p_{2}) $$
> $D$ è applicazione lineare, osserviamo che:
> - Posto $V = W = \mathbb{R}_{2}[x]$ allora $D : V \to W$ è applicazione lineare
> - Posto $V = f' = \{f : \mathbb{R} \to \mathbb{R},\text{derivabili in ogni punto di }\mathbb{R}\}$
> 
> $W = f = \{f : \mathbb{R} \to \mathbb{R}\}$ allora $D : V \to W$ è applicazione lineare

## immagine, controimmagine, fibra e kernel di un applicazione
>[!def]
>Siano $V$ e $W$ spazi vettoriali su $\mathbb{K}$ e sia $\mathcal{L} : V \to W$ un'applicazione lineare. Allora diremo che
>- $\forall \mathbf{v} \in V, \mathcal{L}(\mathbf{v})$ è l'**immagine** di $\mathbf{v}$ tramite $\mathcal{L}$
>- $\forall U \subseteq V, \mathcal{L}(U) = \{\mathcal{L}(\mathbf{u}) : \mathbf{u} \in U\}$ è l'**immagine** di $U$
>- $\forall H \subseteq W, \mathcal{L}^{-1}(H) = \{\mathbf{v} \in V: \mathcal{L}(\mathbf{v}) \in H\}$ è la **controimmagine** di $H$. La controimmagine di un insieme puó essere l'insieme vuoto. 
>Se $H = \{\mathbf{w}\}$ allora $L^{-1}(\mathbf{w})=\{\mathbf{v} \in V : \mathcal{L}(\mathbf{v})=\mathbf{w}\}$ si chiama   **fibra** di $\mathcal{L}$ su $\mathbf{w}$


>[!def]
>Dati $V$ e $W$ spazi vettoriali su $\mathbb{K}$ e $L:V \to W$ applicazione lineare, definiamo il **nucleo** di $\mathcal{L}$
> $$ \text{Ker}(\mathcal{L}) = \mathcal{L}^{-1}(\mathbf{0}_{\mathbf{w}}) = \{\mathbf{v} \in V: \mathcal{L}(\mathbf{v})=\mathbf{0}_{\mathbf{w}}\} \subseteq V $$
> e l'**immagine** di $\mathcal{L}$:
> $$ \text{Im}(\mathcal{L}) = \{\mathcal{L}(\mathbf{v}) \in W: \mathbf{v} \in V\} \subseteq W$$
> Quindi, il kernel sono gli elementi di V che vengono trasformati in $\mathbf{0}_{W}$
> ```mermaid
> graph LR
> subgraph V
> 	ker 
> end
> subgraph W
> 0_W
> end
> ker ---> 0_W
>```
>L'immagine sono gli elementi di $W$ che sono la trasformazione di elementi di $V$
>```mermaid
>graph LR
>	subgraph V
>	a
>	b
>	c
>	end
>	subgraph W
>	IM("IM(L)")
>	end 
>	a --->IM
>	b --> IM
>	c ---> IM
>```



>[!proposizione]
>Siano $V$ e $W$ spazi vettoriali su $\mathbb{K}$ e sia $\mathcal{L} : V \to W$ un'applicazione lineare:
>1. Se $H$ è sottospazio vettoriale di $W$ allora $\mathcal{L}^{-1}(H)$ è sottospazio vettoriale di $V$
>2. Se $U$ è sottospazio vettoriale di $V$ allora $\mathcal{L}(U)$ è sottospazio vettoriale di $W$
>
>>[!dim]
>>Se $H$ è sottospazio vettoriale di $W$ allora $\mathbf{0}_{W} \in H$. Poichè $\mathbf{0}_{V} \in L$ Poichè $\mathbf{0}_{V} \in \mathcal{L}^{-1}(H)$ si ha $\mathcal{L}^{-1}(H) \neq \varnothing$.
>>Devo verificare che: $$\forall t_{1},t_{2} \in \mathbb{K}, \forall \mathbf{v}_{1}, \mathbf{v}_{2} \in \mathcal{L}^{-1}(H) \implies t_{1}\mathbf{v}_{1} + t_{2}\mathbf{v}_{2} \in \mathcal{L}^{-1}(H)$$
>>infatti: $\forall t_{1},t_{2} \in \mathbb{K}$ e $\forall\mathbf{v}_{1},\mathbf{v}_{2} \in \mathcal{L}^{-1}(H) $.
>>

>[!oss]
>Se $V$ e $W$ sono spazi vettoriali su $\mathbb{K}$ e $\mathcal{L} : V \to W$ è un'applicazione lineare allora $\text{Ker}(\mathcal{L}) = \mathcal{L}^{-1}(\mathbf{0}_{W})$ e $\text{Im}(\mathcal{L}) = \mathcal{L}(V)$ sono sottospazi vettoriali rispettivamente di $V$ e $W$


>[!esempio]
>Vogliamo dimostrare che la funzione
>$$\begin{align}
>\mathcal{L} &: \mathbb{R}^3 \to \mathbb{R}^3 \\
>&\begin{bmatrix}
>x \\
y \\
z
\end{bmatrix} \mapsto 
\begin{bmatrix}
>2x \\
>x \\
>y + z
\end{bmatrix}
>\end{align}$$
>è lineare. Vogliamo inoltre determinare il $\text{Ker}(\mathcal{L})$ e la controimmagine di $\mathbf{w} = [3\quad 1\quad 1]^T$, osserviamo che:
> $$ \begin{bmatrix}
>2x \\
x \\
y + z
>\end{bmatrix}  = 
>\begin{bmatrix}
2x \\
x \\
0
\end{bmatrix} + 
\begin{bmatrix}
>0 \\
0 \\
y
>\end{bmatrix} +
>\begin{bmatrix}
>0 \\
0 \\
z
\end{bmatrix}= x\begin{bmatrix}
2 \\
1 \\
0
\end{bmatrix} +
y\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix} +
z\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix} = \begin{bmatrix}
2 & 0 & 0 \\
1 & 0 & 0 \\
0 & 1 & 1
\end{bmatrix}
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}$$
Posto $A = \begin{bmatrix}2 & 0 & 0\\1 & 0 & 0\\0 & 1 & 1\end{bmatrix}$ l'applicazione $\mathcal{L}$ è del tipo $\mathcal{L}(\mathbf{v}) = A \cdot \mathbf{v}$ che sappiamo essere lineare. Il $\text{Ker}(\mathcal{L})=\{\mathbf{v} \in \mathbb{R}^3 : A \cdot \mathbf{v} = \mathbf{0}\}$ quindi sono i vettori:
>$$ \begin{bmatrix}
>x \\
y \\
z
>\end{bmatrix} \in \mathbb{R}^3 : A \cdot \begin{bmatrix}
x \\
y \\
z
\end{bmatrix} = \begin{bmatrix}
>0 \\
0 \\
0
\end{bmatrix} \iff \begin{cases}
>2x = 0 \\
x = 0 \\
y + z = 0
\end{cases} \iff
\begin{cases}
>x = 0 \\ \\
y =-z
\end{cases}$$
Posto $z = t, \text{Ker}(A) = \left\{ \begin{bmatrix}0 \\-t\\>t\end{bmatrix}  \in \mathbb{R}^3 : t \in \mathbb{R}\right\}$
La fibra di $\mathcal{L}$ sopra $\mathbf{w}$ è $\mathcal{L}^{-1}(\mathbf{w}) = \{\mathbf{v} \in \mathbb{R}^3 : A \cdot \mathbf{v} = \mathbf{w}\}$ quindi sono i vettori $\begin{bmatrix}x\\y\\z\end{bmatrix} \in \mathbb{R}^3 : A \begin{bmatrix}x \\y\\z\end{bmatrix} = \begin{bmatrix}3 \\ 1\\1\end{bmatrix} \iff \begin{cases}2x = 3 \\x=1\\y+z=1\end{cases} \iff \begin{cases}x=1\\ \fcolorbox{red}{}{2=3}\text{ impossibile} \\y+z=1\end{cases}$ quindi $\mathcal{L}^{-1} (\mathbf{w}) = \varnothing$

>[!proposizione]
>Siano $V$ e $W$ spazi vettoriali su $\mathbb{K}$ e sia $\mathcal{L}:V \to W$ applicazione lineare. Sia $\mathbf{w} \in W$ tale che $\mathcal{L}^{-1}(\mathbf{w}) \neq \varnothing$ e sia $\mathbf{v}_{0} \in \mathcal{L}^{-1}(\mathbf{w})$. Allora:
> $$ \mathcal{L}^{-1}(\mathbf{w}) = \mathbf{v}_{0} + \text{Ker}(\mathcal{L}) := \{\mathbf{v}_{0}+ \mathbf{v}_{h} : \mathbf{v}_{h} \in \text{Ker}(\mathcal{L})\} $$
>
>>[!dim]

>[!proposizione]
>Dati tre spazi vettoriali su $\mathbb{K} : V, W$ e $Z$, siano $f: V \to W$ e $g : W \to Z$ due applicazioni lineari allora:
> $$ \begin{align}
> g \circ f : &V \to Z \text{ è applicazione lineare} \\
> &\mathbf{v} \mapsto g(f(\mathbf{v}))
>\end{align} $$




## Iniettività e suriettività
>[!def]
>Dati due insiemi $A$ e $B$ diremo che una funzione $f : A \to B$ è **iniettiva** se $\forall a_{1},a_{2} \in A : f(a_{1})=f(a_{2}) \implies a_{1}=a_{2}$.
>Diremo che una funzione $f:A \to B$ è **suriettiva** se $\forall b \in B\ \exists a \in A : f(a) = b$. Diremo che $f : A \to B$ è **invertibile** se esiste $f^{-1}: B \to A$ t.c.
> $$ \begin{align}
>&\forall a \in A &f^{-1}(f(a))=a \\
&\forall b \in B &f(f^{-1}(b))=b
\end{align} $$ 


## criterio di invertibilità
Una funzione è invertibile se e solo se è iniettiva e suriettiva


# Isomorfismi
Un'applicazione lineare invertibile  $\mathcal{L} : V \to W$ è detta isomorfismo. Diremo che $V$ e $W$ sono isomorfi se esiste un isomorfismo $\mathcal{L} : V \to W$

>[!proposizione]
>Siano $V$ e $W$ spazi vettoriali su $\mathbb{K}$. Sia $\mathcal{L} : V \to W$ un'applicazione lineare. Allora $\mathcal{L}$ è iniettiva se e solo se $\text{Ker}(\mathcal{L})=\{\mathbf{0}_{W}\}$


## Altre osservazioni riguardo le applicazioni lineari

> [!proposizione]
> Sia $V$ spazio vettoriale su $\mathbb{K}$ e sia $\mathcal{B} = \left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ una base di $V$. Siano $\mathbf{w}_{1},\dots,\mathbf{w}_{n}$ vettori arbitrari di uno spazio vettoriale $W$ su $\mathbb{K}$ . Allora esiste una ed una sola applicazione lineare $\mathcal{L} : V \to W$ tale che:
> $$ \mathcal{L}(\mathbf{b}_{1}) = \mathbf{w}_{1},\dots, \mathcal{L}(\mathbf{b}_{n}) = \mathbf{w}_{n} $$
> L'applicazione $\mathcal{L}$ è definita dalla formula:
> $$ \mathcal{L}(x_{1}\mathbf{b}_{1} + \ldots + x_{n}\mathbf{b}_{n} ) = x_{1}\mathbf{w}_{1} + \ldots + x_{n}\mathbf{w}_{n} $$
> 
>>[!dim]
>>1. Dimostriamo l'esistenza. Osserviamo che sono ben  definite l'applicazione $$\begin{align}
>>\mathcal{P} &: \mathcal{L}^n \to W \\
>>&\begin{bmatrix}
>>t_{1}\\\vdots\\ t_{n}
>>\end{bmatrix} \mapsto t_{1}\mathbf{w}_{1} + \ldots + t_{n}\mathbf{w}_{n}
>>\end{align}$$
>>e l'applicazione: $$\begin{align}
>>x_{\mathcal{B}} : &V \to W \\
>> &\mathbf{v} \mapsto \begin{bmatrix}
>>x_{1} \\ \vdots \\x_{n}
>>\end{bmatrix}
>>\end{align}$$
>>Definiamo $\mathcal{L} := \mathcal{P} \circ x_{\mathcal{B}}$. Osserviamo che $\mathcal{L}$ è lineare essendo la composizione di due funzioni lineari. Inoltre
>> $$ \mathcal{L}(\mathbf{b}_{i}) = \mathcal{P} \circ x_{\mathcal{B}}(\mathbf{b}_{i}) = \mathbf{w}_{i} \quad \forall i = 1,\dots,n $$
>> Allora per ogni $\mathbf{v} \in V$, ove $\mathbf{v} = x_{1}\mathbf{b}_{1} + \dots + x_{n}\mathbf{b}_{n}$ si ha:
>> $$ \begin{align}
>>g(\mathbf{v}) &= g(x_{1}\mathbf{b}_{1} + \dots + x_{n}\mathbf{b}_{n}) = x_{1}g(\mathbf{b}_{1}) + \dots + x_{n}g(\mathbf{b}_{n})  \\
>> &=x_{1}\mathbf{w}_{1} + \dots + x_{n}\mathbf{w}_{n} = x_{1}\mathcal{L}(\mathbf{b}_{1}) + \dots + x_{n}\mathcal{L}(\mathbf{b}_{n}) \\
>> &= \mathcal{L}(x_{1}\mathbf{b}_{1} + \dots + x_{n}\mathbf{b}_{n}) = \mathcal{L}(\mathbf{v})
>>\end{align} $$
>>Quindi $g(\mathbf{v}) = \mathcal{L}(\mathbf{v})\quad\forall \mathbf{v} \in V$
>> $\CVD$

>[!esempio]
>Determinare per quali valori di $k \in \mathbb{R}$ esiste ed è unica l'applicazione lineare $\mathcal{T} : \mathbb{R}^3 \to \mathbb{R}^3$ tale per cui
> $$ \mathcal{T}\left( \begin{bmatrix}
>1 \\
>-k \\
>k
>\end{bmatrix} \right)  =
>\begin{bmatrix}
>1 \\
>2 \\
>2
>\end{bmatrix}, \mathcal{T} \left( \begin{bmatrix}
>1 \\
>-1 \\
>0
>\end{bmatrix} \right), \mathcal{T} \left( \begin{bmatrix}
0 \\
-1 \\
k+1
\end{bmatrix} \right) = \begin{bmatrix}
>-1 \\
>0 \\
>1
>\end{bmatrix}$$ 
>
>è necessario e sufficiente determinare il parametro $k$ in modo tale che
> $$ \left\{ \begin{bmatrix}
>1 \\
>-k \\
>k
>\end{bmatrix}, \begin{bmatrix}
>1 \\
>-1 \\
>0
>\end{bmatrix},
>\begin{bmatrix}
>0 \\
>-1 \\
>k+1
>\end{bmatrix}\right\}  $$
>Sia una base di $\mathbb{R}^3$.
>Imponiamo che il rango della matrice che ha per colonne i precedenti vettori sia massimo ovvero sia $3$.
> $$ \begin{bmatrix}
>1 & 1 & 0 \\
>-k & -1 & -1 \\
>k & 1 & k+1
>\end{bmatrix} \to \begin{bmatrix}
>1 & 1 & 0 \\
0 & -1+k & -1 \\
0 & 1-k & k+1
>\end{bmatrix} \to \begin{bmatrix}
>1 & 1 & 0 \\
0 & -1+k & -1 \\
0 & 0 & k
\end{bmatrix}$$
Il rango della matrice è $3$ se $k \neq 0$ e $k \neq 1$
> $\CVD$

>[!oss]
>Se $V$ e $W$ sono spazi vettoriali su $\mathbb{K}$, definiamo $Hom_{\mathbb{K}}(V,W) = \left\{ \mathcal{L} : V \to W, \mathcal{L} \text{ è applicazione lineare} \right\}$
>Se $\dim(V) = n$ e $\dim(W) = m$ fissata $\mathcal{B}$ una base di $V$ e $\mathcal{C}$ una base di $W$ allora posiamo considerare l'applicazione:
> $$ \begin{align}
> \mathcal{G} : Hom_{\mathbb{K}}(V,W) &\to M_{\mathbb{K}}(m,n) \\
> \mathcal{L} &\mapsto M_{\mathcal{C}}^{\mathcal{B}}(\mathcal{L})
>\end{align} $$
>Valgono le seguenti proprietà:
>1. $Hom_{\mathbb{K}}(V,W)$ è spazio vettoriale su $\mathbb{K}$
>   $$\begin{align}
>(\mathcal{L} + \mathcal{L}') (\mathbf{v}) &:= \mathcal{L}(\mathbf{v}) + \mathcal{L}'(\mathbf{v})\qquad &&\forall \mathcal{L},\mathcal{L}' \in Hom_{\mathbb{K}}(V,W) \\
> (t\mathcal{L})\mathbf{v} &:= t \mathcal{L}(\mathbf{v}) &&\forall t \in \mathbb{K} \ e\ \forall \mathcal{L} \in Hom_{\mathbb{K}}(V,W)
>\end{align}$$ 
>2. $\mathcal{G}$ è applicazione lineare
> $$ \begin{align}
> &\mathcal{G}(\mathcal{L} + \mathcal{L}') = \overset{=A}{\mathcal{G}(\mathcal{L})} + \overset{=B}{\mathcal{G}(\mathcal{L})} = A + B \\
> &\mathcal{G}(t\mathcal{L}) = t \mathcal{G}(\mathcal{L}) = tA \\
>\end{align}$$
>
>3. $\mathcal{G}$ è un isomorfismo


>[!def]
>Sia $\mathcal{L} : V \to W$ un'[[Applicazioni lineari|applicazione lineare]]. Il [[rango]] $r(\mathcal{L})$ di $\mathcal{L}$ è la	[[Geometria e algebra lineare/Dimensione]] dell'immagine $\Im(\mathcal{L})$ di $\mathcal{L}$


>[!oss]
>1.
>Se $A \in M_{\mathbb{K}}(m,n)$ e 
> $$ \begin{align}
>\mathcal{L}_{A} : \mathbb{K}^n &\to \mathbb{K}^m \\
> \mathbf{v} &\mapsto A\mathbf{v} \\
>\end{align} $$
>Allora $r(\mathcal{L}_{A}) = \dim(\Im(\mathcal{L}_{A})) = \dim(\Col(A)) = r(A)$
>
>2. Se $\mathcal{L} : V \to W$ è applicazione lineare allora
>$$ r(\mathcal{L}) \leq \dim(V) \text{ e } r(\mathcal{L}) \leq \dim(W)$$
>Infatti: $\Im(\mathcal{L}) \subseteq W \implies \dim(\Im(\mathcal{L})) \leq \dim(W)$
>Se $\dim(V) = n < +\infty$ e $\mathcal{B} = \left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ base per $V$ allora $V = \Span(\mathbf{b}_{1},\dots,\mathbf{b}_{n})$ ma quindi
> $$ \Im(\mathcal{L} ) = \mathcal{L}(V) = \Span(\mathcal{L}(\mathbf{b}_{1}),\dots,\mathcal{L}(\mathbf{b}_{n}))
>  $$
> Dunque $\left\{ \mathcal{L}(\mathbf{b}_{1}),\dots,\mathcal{L}(\mathbf{b}_{n}) \right\}$ è un insieme di generatori per $Im(\mathcal{L})$ e quindi $\dim(\Im(\mathcal{L})) \leq n$


>[!teorema] Teorema di nullità piú rango
>Sia $\mathcal{L}:V \to W$ un'applicazione lineare. Se $V$ ha dimensione finita, allora $\dim(V) = \dim(\ker(\mathcal{L})) + \dim(\Im(\mathcal{L}))$
>
>>[!dim]
>>Sia $W' = \Im(\mathcal{L})$ e consideriamo $\mathcal{L} : V \to W'$. Essendo $V$ e $\Im(\mathcal{L})$ di dimensione finita, scegliendo una base $\mathcal{B}$ per $V$ e una base $\mathcal{C}$ per $W'$ sia $A = M_{\mathcal{C}}^{\mathcal{B}}(\mathcal{L})$.
>> ```tikz
>>\usepackage{tikz-cd}
>>\usepackage{amsfonts}
>>\usepackage{amsmath}
>>\tikzcdset{scale cd/.style={every label/.append style={scale=#1}, cells={nodes={scale=#1}}}}
>>\begin{document}
>>\begin{tikzcd}[scale cd= 1.5, sep = huge]
>>&V \arrow[r, "\mathcal{L}"]  \arrow[d, "x_\mathcal{B}"]&W \arrow[d, "x_\mathcal{C}"]\\
>>&\mathbb{K}^n \arrow[r, "A"] &\mathbb{K}^m
>>\end{tikzcd}
>>\end{document}
>>```
>>Poichè $x_{\mathcal{B}}$ e $x_{\mathcal{C}}$ sono isomorfismi e $x_{\mathcal{B}}(\ker(\mathcal{L})) = \ker(A)$ e $x_{\mathcal{C}}(\Im(\mathcal{L})) = \Col(A)$, si ha che:
>>1. $\dim(\ker(A)) = \dim(\ker(\mathcal{L}))$
>>2. $\dim(\Im(A)) = \dim(\Im(\mathcal{L}))$
>>
>>Per il teorema di nullità + rango per matrici si ha che:
>> $$ \begin{align}
>>&\dim(\ker(A)) = n - r(A) \\
>>&\dim(\ker(\mathcal{L})) = \dim(V) - \dim(\Im(\mathcal{L})) \\
>>&\dim(V) = \dim(\ker(\mathcal{L})) + \dim(\Im(\mathcal{L}))
>>\end{align} $$
>>$\CVD$

>[!oss]
>Come per le matrici si ha che se $\mathcal{L}: V \to W$ è applicazione lineare tra spazi vettoriali di dimensione finita rispettivamente $n$ ed $m$:
>1. $\mathcal{L}$ è iniettiva $\iff r(\mathcal{L}) = n$
>2. $\mathcal{L}$ è suriettiva $\iff r(\mathcal{L}) = m$
>3. $\mathcal{L}$ è isomorfismo $\iff r(\mathcal{L}) = n = m$

