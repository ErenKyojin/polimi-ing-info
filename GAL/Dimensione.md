Dato un insieme $A$, teniamo a mente il concetto di [[cardinalità]] di questo insieme, allora possiamo dare la seguente definizione:

>[!def]
>Diremo che uno spazio vettoriale $V$ ha dimensione $n < +\infty$ (indicando $\dim(V) = n$) se esiste un insieme di $n$ [[vettori]] [[Dipendenza e indipendenza lineare|linearmente indipendenti]] ed ogni altro insieme linearmente indipendente ha cardinalità $\leq n$. Si dice che $V$ ha dimensione infinita se per ogni $m \in \mathbb{N}$ esiste un insieme linearmente indipendente di cardinalità $m$ 


>[!esempio]
>Se $V = \left\{ \mathbf{0}_{V} \right\}$ allora $\dim(V)=0$, infatti $\left\{ \mathbf{0}_{V} \right\}$ è linearmente dipendente quindi $V$ non ammette sottoinsiemi linearmente indipendenti.

>[!esempio]
>Se esiste un elemento $\mathbf{v} \neq \mathbf{0}_{V}$ allora $\dim(V) \geq 1$, infatti $\left\{ \mathbf{v} \right\}$ è linearmente indipendente

>[!esempio]
>$K[x] = \{$ [[insieme]] dei polinomi a coefficienti in $\mathbb{K} \}$, ha dimensione infinita infatti $\forall m > 0$ l'insieme:
> $$ \left\{ x^{m-1}, x^{m-2}, \dots , x, 1\right\}  $$ 
> è linearmente indipendente

>[!teorema] Teorema 1 (lemma fondamentale)
>Sia $V$ spazio vettoriale su $\mathbb{K}$. Se $V$ ammette un'insieme di generatori di cardinalità $m$ allora ogni altro insieme di cardinalità maggiore di $m$ è linearmente dipendente
>
>>[!dim]
>> 1. caso
>>    Siano $\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{m} \right\}$ generatori su $V$. Allora la mappa di parametrizzazione associata a $\mathbf{v}_{1},\dots,\mathbf{v}_{m}$ è
>>    $$ \begin{align}
>\mathcal{P} : \mathbb{K}^m \to V \\
>\begin{bmatrix}
>t_{1} \\
\vdots \\
t_{m}
\end{bmatrix} \mapsto t_{1}\mathbf{v}_{1} + \dots + t_{m}\mathbf{v}_{m}
\end{align} $$
>>Sia $\{\mathbf{w}_{1},\dots,\mathbf{w}_{n}\} \subseteq V$ ove $n > m$ poichè $\mathcal{P}$ è suriettiva $\exists \mathbf{z}_{1},\dots,\mathbf{z}_{n} \in \mathbb{K}^m :$ $\mathcal{P}(\mathbf{z})_{i}= \mathbf{w}_{i}$.
>>Per il primo caso esistono $t_{1},\dots,t_{n} \in \mathbb{K}$ non tutti nulla tali che $: t_{1}\mathbf{z}_{1} + \dots + t_{n}\mathbf{z}_{n} = \mathbf{0}$
>>Quindi $\mathbf{0} = \mathcal{P}(t_{1}\mathbf{z}_{1} + \dots + t_{n}\mathbf{z}_{n}) = t_{1}\mathcal{P}(\mathbf{z}_{1})+\dots+t_{n}\mathcal{P}(\mathbf{z}_{n}) = t_{1}\mathbf{w}_{1}+\dots+t_{n}\mathbf{w}_{n}$
>> 
>> 2. caso
>>    Siano $\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{m} \right\}$ generatori per $V$. Allora la mappa di parametrizzazione associata a $\mathbf{v}_{1},\dots,\mathbf{v}_{m}$ è
>>    $$ \begin{align} 
> \mathcal{P} &: \mathbb{K}^m \to V \\
&\begin{bmatrix}
> t_{1} \\
\vdots \\
t_{m}
\end{bmatrix}\mapsto t_{1}\mathbf{v}_{1} + \dots + t_{m}\mathbf{v}_{m}
\end{align}  $$ 
>>Sia $\left\{ \mathbf{w}_{1},\dots,\mathbf{w}_{n} \right\} \subseteq V$ ove $n > m$. Poichè $\mathcal{P}$ è suriettiva $\exists \mathbf{z}_{1},\dots,\mathbf{z}_{n} \in \mathbb{K}^m : \mathcal{P}(\mathbf{z}_{i}) = \mathbf{w}_{i}$. Per il primo caso esistono $t_{1},\dots,t_{n} \in \mathbb{K}$ non tutti nulli tali che $t_{1}\mathbf{z}_{1}+\dots+t_{n}z_{n}=\mathbf{0}$
>>Quindi $\mathbf{0} = \mathcal{P}(t_{1}\mathbf{z}_{1}+\dots+t_{n}\mathbf{z}_{n}) = t_{1}\mathcal{P}(\mathbf{z}_{1})+\dots+t_{n}\mathcal{P}(\mathbf{z}_{n})=t_{1}\mathbf{w}_{1}+\dots+t_{m}\mathbf{w}_{n}$
>>Quindi $\mathbf{w}_{1},\dots,\mathbf{w}_{n}$ sono linearmente dipendenti


>[!oss]
>Se $V$ ammette un insieme di generatori con cardinalità $m$ allora $\dim(V) \leq m$. Quindi, tornando al caso $\mathbb{K}[x]_{\leq n}$ possiamo dire che $\dim(\mathbb{K}[x]_{\leq n}) \leq n+1$
>Poichè $\left\{ x^n,x^{n-1},\dots,x,1 \right\}$ sono un insieme di generatori, ma allora $\dim(\mathbb{K}[x]_{\leq n}) \leq n + 1$

>[!teorema] Teorema 2
>Se $V$ spazio vettoriale su $\mathbb{K}$ ammette una [[base]] di cardinalità $n$ allora $\dim(V)=n$
>
>>[!dim]
>>Sia $\mathcal{B}=\left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ una base per $V$. allora:
>>1. $\left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ è linearmente indipendente quindi per le definizio di dimensione: $\dim(V) \geq n$
>>2. $\left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ è un insieme di generatori quindi per il lemma fondamentale: $\dim(V) \leq n$
>>Quindi $dim(V)=n$


>[!teorema] Teorema 3
>Se $\dim(V)=n$ allora
>1. $V$ contiene una base di cardinalità $n$
>2. Ogni altra base di $V$ ha cardinalità $n$
>
>>[!dim]
>>1. Essendo $\dim(V) = n, V$ contiene $n$ vettori linearmente indipendenti: $\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \right\}$. Sia ora $\mathbf{w} \in V$ vettore generico. Essendo $\dim(V) = n$, l'insieme $\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n},\mathbf{w} \right\}$ di $n + 1$ vettori è linearmente dipendente, quindi esistono $t_{1},\dots,t_{n},t_{n+1} \in \mathbb{K}$ non tutti nulli tali che:
>> $$ t_{1}\mathbf{v}_{1} + \dots + t_{n}\mathbf{v}_{n} + t_{n+1}\mathbf{w} = \mathbf{0} $$
>> Osserviamo che $t_{n+1} \neq 0$ altrimenti ${\mathbf{v}_{1},\dots,\mathbf{v}_{n}}$ sarebbero linearmente dipendenti (contraddizzione con le ipotesi).
>> Quindi $\mathbf{w}=-t_{1} / t_{n+1} \mathbf{v}_{1} - \dots - t_{n} / t_{n+1} \mathbf{v}_{n} \implies \left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \right\}$ sono generatori di $V \implies \left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \right\}$ sono una base di $V$
>> 2. Se $B'$ è una base di $V$ allora per il teorema 2 $|\mathcal{B'} = \dim(V)=n|$ 

>[!esempio]
>Di ogni spazio vettoriale per il quale conosciamo una base possiamo stabilire la sua dimensione:
> $$ \dim(\mathbb{K}^n) = n,  \dim(M_{\mathbb{K}(n,n)}) = n \times n, \dim(\mathbb{K}[x]_{\leq n}) =  n + 1$$
> $$ \dim(\ker(A)) = n - r(A)\quad (se\ A \in M_{\mathbb{K}}(n,n) \text{ per il teorema di nullità piú rango}) $$

>[!teorema] teorema 3
>Se $\dim(V) = n$ allora
> 1. $V$ contiene una base di cardinalità $n$
> 2. Ogni altra base di $V$ ha cardinalità $n$
>
>>[!dim]
>>1. Poichè $\dim(V) = n, V$ contiene $n$ [[vettori]] linearmente indipendenti: $\{\mathbf{v}_{1},\dots,\mathbf{v}_{n}\}$. Sia $\mathbf{w} \in V$ vettore generico. Essendo $\dim(V) = n$ l'insieme $\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n},\mathbf{w} \right\}$ è linearmente dipendente.
>>   Quindi esistono $t_{1},\dots,t_{n},t_{n+1} \in \mathbb{K}$ non tutti nulli tali che:
>>   $$ t_{1}\mathbf{v}_{1} + \dots + t_{n}\mathbf{v}_{n} + t_{n+1}\mathbf{w} = \mathbf{0} $$
>>   Osserviamo che $t_{n+1} \neq 0$, altimenti $\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \right\}$ sarebbero linearmente dipendenti.
>>   Quindi $\mathbf{w} = -\frac{t_{1}}{t_{n+1}}\mathbf{v}_{1}- \dots - \frac{t_{n}}{t_{n+1}}\mathbf{v}_{n} \implies \left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \right\}$ generatori di $V \implies \left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \right\}$ sono una base di $V$
>>   
>>   2. Se $\mathcal{B}'$ è una base di $V$ allora per il teorema 2 
>>   $$ |\mathcal{\mathbf{B}'}| = \dim(V) = n $$
>>


>[!proposizione] proposizione 4
>1. Ogni insieme di generatori di $V$ contiene una base
>2. Se $\dim(V) = n, S = \left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{d} \right\}$ è linearmente indipendente e $\mathcal{G} \subseteq V$ è un insieme di generatori, allora esistono: $\mathbf{w}_{1},\dots,\mathbf{w}_{n-d} \in \mathcal{G}$ tali che
> $$ \left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{d},\mathbf{w}_{1},\dots,\mathbf{w}_{n-d} \right\}  $$
> è una base per $V$
> 
>>[!dim]
>
>
>>[!corollario] corollario 1
>>Se $\dim(V)=n$ allora
>>1. Un insieme di $n$ vettori linearmente indipendenti è una base
>>2. Un insieme di $n$ che sono generatori per $V$ è una base
>
>>[!corollario] corollario 2
>>Siano $H \subseteq V$ spazi vettoriali di dimensione finita.
>>Se $\dim(H) = \dim(V) = n$ allora $H = WV$
>>
>>>[!dim]
>>>Sia $\mathcal{B} = \left\{ \mathbf{b_{1}},\dots,\mathbf{b_{n}} \right\}$ una base di $H$. Allora $H = \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{n})$. Essendo $\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \right\}$ linearmente indipendente e essendo la $\dim(V) = n, \left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \right\}$ è una base di $V$ per il corollario $1$, quindi si ha che:
>>> $$ V = \Span(\mathbf{v}_{1},\dots,\mathbf{v}_{n}) = H $$

>[!esempio]
>I sottospazi vettoriali di $\mathbb{R}^3$ sono l'origine, le rette per l'origine, i piani per l'origine, $\mathbb{R}^3$ stesso.
>Se $H$ è sottospazio di $\mathbb{R}^3$ allora $\dim(H)$ può essere solo 0, 1, 2, 3"
>1. Se $\dim(H) = 0$ allora $\{\mathbf{0}\} \subseteq H$ e $\dim({\mathbf{0}})= 0 = \dim(H) \implies H = \left\{ \mathbf{0} \right\}$
>2. Se $\dim(H) = 1$ e $\{\mathbf{v}\}$ è una base di $H$ allora $H = \Span(\mathbf{v})$, ossia di una retta per l'origine
>3. Se $\dim(H) = 2$ e $\left\{ \mathbf{v}_{1},\mathbf{v}_{2} \right\}$ è base di $H$ allora $H = \Span(\mathbf{v}_{1},\mathbf{v}_{2})$, ossia un piano per l'origine
>4. Se $\dim(H) = 3$, allora $H \subseteq \mathbb{R}^3$, e come dimostrato in precedenza: $\dim(H) = 3 = \dim(\mathbb{R}^3) \implies H = \mathbb{R}^3$
>


>[!proposizione] proposizione 5
>Siano $V$ e $W$ spazi vettoriali su $\mathbb{K}$ e sia $\mathcal{L} : V \to W$ lineare e iniettiva. Se $\dim(V)$ è finita e $H$ è sottospazio di $V$ allora $\dim(H) = \dim(\mathcal{L}(H))$
>
>>[!dim]
>>Sia $\mathbf{v}_{1},\dots,\mathbf{v}_{d}$ una base di $H$. Allora $H = \Span\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{d} \right\}$ e $\left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{d} \right\}$ è linearmente indipendente.
>>Poichè $\mathcal{L}$ è lineare: $\mathcal{L}(H) = \Span\{\mathcal{L}(\mathbf{v}_{1}),\dots,\mathcal{L}(\mathbf{v}_{d})\}$.
>>Essendo $\mathcal{L}$ iniettiva: $\left\{ \mathcal{L}(\mathbf{v}_{1}),\dots,\mathcal{L}(\mathbf{v}_d) \right\}$ sono linearmente indipendenti. Quindi $\left\{ \mathcal{L}(\mathbf{v}_{1}),\dots,\mathcal{L}(\mathbf{v}_{d}) \right\}$ sono una base di $\mathcal{L}(H) \implies \dim(\mathcal{L}(H)) = d = \dim(H)$
>
>>[!corollario] corollario 3
>>1. Se $\dim(V) = n$ allora $V$ è [[Applicazioni lineari#Isomorfismi|isomorfo]] a $\mathbb{K}^n$.
>>2. Se $\dim(V), \dim(W) < +\infty$ allora $V$ è isomorfo a $\mathbb{K}^n$ allora $V$ è isomorfo a $W$ se e solo se $\dim(V) = \dim(W)$11
>>
>>>[!dim]
>>>1. Se $\dim(V)) = n$ esiste una base $\left\{ \mathbf{b_{1}},\dots,\mathbf{b_{n}} \right\}$ di cardinalità $n$, quindi la mappa di parametrizzazione $P$ associata a 
>>> $$\begin{align}
 \left\{ \mathbf{b_{1}},\dots,\mathbf{b_{n}} \right\} : \mathcal{P} &: \mathbb{K}^n \to V  \\
& \begin{bmatrix}
t_{1} \\
\vdots \\
t_{n}
\end{bmatrix} \mapsto t_{1}\mathbf{b_{1}} + \dots + t_{n}\cdot \mathbf{b_{n}}
\end{align}
>>>$$
>>>è suriettiva e iniettiva quindi è un isomorfismo
>>> 2.
>>> Se $\dim(V) = \dim(W) = n$ allora per il punto precedente esistono due mappe di parametrizzazione $\mathcal{P}_{1} : \mathbb{K}^n \to V$ e $\mathcal{P}_{2} : \mathbb{K}^n \to W$ che sono isomorfismi. 
>>> Quindi: $\mathcal{P}_{2} \circ \mathcal{P}_{1}^{-1} : V \to W$ è isomorfismo.
>>> Se $V$ e $W$ sono isomorfi allora esiste $\mathcal{L} : V \to W$ lineare, iniettiva e suriettiva. Quindi $\mathcal{L}(V) = W$ essendo $\mathcal{L}$ suriettiva, e $\dim(V) = \dim(\mathcal{L}(V))$ essendo $\mathcal{L}$ iniettiva. Quindi $\dim(V) = \dim(\mathcal{L}(V)) = \dim(W)$
