>[!def]
>Dato $V$ spazio vettoriale su $\mathbb{K}$, diremo che i vetori $\mathbf{v}_{1},\dots, \mathbf{v}_{d} \in V$ sono **linearmente indipendenti** se l'unica loro [[Combinazioni lineari|combinazione lineare]] uguale al vetore nullo è quella in cui tutti i coefficienti sono nulli, quindi:
> $$ t_{1}\mathbf{v}_{1} + \dots + t_{d}\mathbf{v}_{d} = \mathbf{0} \iff t_{1} = t_{2} = \dots = t_{d} = 0 $$
> Diremo che i vettori: $\mathbf{v}_{1},\dots,\mathbf{v}_{d} \in V$ sono **linearmente dipendenti** se esiste una loro combinazione lineare a coefficienti non tutti nulli uguale al vettore nullo, quindi se:
>  $$ t_{1}\mathbf{v}_{1} + \dots + t_{d}\mathbf{v}_{d} = \mathbf{0} \text{ e } t_{i} \neq 0 \text{ per qualche } i = 1,\dots,d$$
>

>[!esempio] esempi
>1. $d = 1$
>	Abbiamo un solo vettore:
>	- se $\mathbf{v}_{1} \neq \mathbf{0}, t_{1} \cdot \mathbf{v}_{1} = \mathbf{0} \implies t_{1} = 0$, quindi $\mathbf{v}_{1}$ è linearmente indipendente
>	- Se $\mathbf{v}_{1} = \mathbf{0}, \forall t_{1} \in \mathbb{K}\quad t_{1}\mathbf{v}_{1} = \mathbf{0}$ quindi $\mathbf{0}$ è linearmente dipendente


## determinare (in)dipendenza
$\mathbf{v}_{1},\dots,\mathbf{v}_{d}$ sono linearmente dipendenti se e solo se $\exists t_{1},\dots,t_{d} \in \mathbb{K} : t_{1}\mathbf{v}_{1} + \dots + t_{d}\mathbf{v}_{d}$ con almeno un $t_{i} \neq 0$ per $i = 1,\dots,d$. Osservando che:
$$ t_{1}\mathbf{v}_{1} + \dots + t_{d}\mathbf{v}_{d} = \mathbf{0}\qquad\text{ove }A = [\mathbf{v}_{1}|\mathbf{v}_{2}|\dots|\mathbf{v}_{d}] $$
e $\mathbf{t} = [t_{1}|\dots|t_{d}]^T$, possiamo dire che $:\mathbf{v}_{1},\dots,\mathbf{v}_{d}$ sono linearmente dipendenti se $A\cdot \mathbf{t} = \mathbf{0}$ ammetteuna soluzione non abanale e questo si verifica per il teorema di Rouchè-Capelli se e solo se $r(A) < d$. Ad esempio vogliamo verificare se i vettori $\mathbf{v_{1}}=[1\quad 2\quad 3]^T, \mathbf{v}_{2}=[3\quad 2\quad 1]^T$ e $\mathbf{v}_{3}=[1 \quad -2\quad -5]^T$ di $\mathbb{R}^3$ siano linearmente dipendenti.
$$ A = \begin{bmatrix}
1 & 3 & 1 \\
2 & 2 & -2 \\
3 & 1 & -5
\end{bmatrix} \xrightarrow{MEG} \begin{bmatrix}
1 & 3 & 1 \\
0 & -4 & -4  \\
0 & -8 & -8
\end{bmatrix} \xrightarrow{MEG} \begin{bmatrix}
1 & 3 & 1 \\
0 & -4 & -4 \\
0 & 0 & 0
\end{bmatrix} 
$$
Quindi $r(A) = 2 < 3$ quindi sono linearmente dipenenti.

Cosa succede se $V$ non è $\mathbb{K}^n$?
Se conosciamo comunque una base per $V$ possiamo ragionare in modo uguale a $\mathbb{K}^n$ utilizzando le coordinate. Ad esempio se $V=\mathbb{K}[x]_{ \leq 2}$, ci chiediamo se $p_{1}(x) = x^2 + x - 1$ e $p_{2}(x) = x^2+2x -1$ siano o meno linearmente dipendenti.
Sappiamo che $\mathcal{B} = \left\{x^2,x,1 \right\}$ è una base per $\mathbb{K}[x]_{\leq {2}}$ allora
$$ x_{\mathcal{B}}=(p_{1}(x)) = \begin{bmatrix}
1 \\
1 \\
-1
\end{bmatrix} \text{ e }
x_{\mathcal{B}}(p_{2}(x))=\begin{bmatrix}
1 \\
2 \\
-1
\end{bmatrix}$$Determiniamo quindi il rango di $A$
$$ A = \begin{bmatrix}
1 & 1 \\
1 & 2 \\
-1 & -1
\end{bmatrix} \xrightarrow{MEG}
\begin{bmatrix}
1 & 1 \\
0 & 1 \\
0 & 0
\end{bmatrix}$$
	$r(A)=2 \implies p_{1}(x),p_{2}(x)$ linreamente indipendenti

>[!proposizione]
>Se $d \geq 2, \mathbf{v}_{1},\dots,\mathbf{v}_{d}$ sono linearmente indipendenti se e solo se $\mathbf{v}_{1},\dots,\mathbf{v}_{d-1}$ sono linearmente indipendenti e $\mathbf{v}_{d}$ non è combinazione lineare di $\mathbf{v}_{1},\dots,\mathbf{v}_{d-1}$
>
>>[!dim]


>[!proposizione] Proposizione 1
>Sia $V$ spazio vettoriale su $\mathbb{K}$ e siano $\mathbf{v}_{1},\dots,\mathbf{v}_{d} \in V$ vettori fissati allora si ha che la mappa di parametrizzazione associata a $\mathbf{v}_{1},\dots,\mathbf{v}_{d} :$ $$\begin{align}
>\mathcal{P} &: \mathbb{K}^d \to V \\
>&\begin{bmatrix}
t_{1} \\
\vdots \\
t_{d}
\end{bmatrix} \mapsto t_{1}\mathbf{v}_{1} + \dots + t_{d}\mathbf{v}_{d}
>\end{align}$$
>è iniettiva $\iff \left\{ \mathbf{v}_{1},\dots,\mathbf{v}_{d} \right\}$ sono linearmente indipendenti
>
>>[!dim]
>>Poichè $\mathcal{P}$ è lineare allora per il criterio di iniettività delle funzioni lineare, $\mathcal{P}$ è iniettiva se e solo se $\text{Ker}(\mathcal{P}) = \left\{ \mathbf{0} \right\}$. Poichè $\mathcal{P}([t_{1}\ \dots\ t_{d}]) = \mathbf{0}$ $\iff$
>> $$ t_{1}\mathbf{v}_{1}+ \dots + t_{d}\mathbf{v}_{d} = \mathbf{0} $$
>> Allora:
>> $$ \text{Ker}(\mathcal{P}) = \left\{ [t_{1}\ \dots\ t_{d}] \in \mathbb{K}^d : t_{1}\mathbf{v}_{1} + \dots + t_{d}\mathbf{v}_{d} = \mathbf{0} \right\} = \left\{ \mathbf{0} \right\}   $$
>> Se e solo se l'unica combinazione lineare nulla dei vettori $\mathbf{v}_{1},\dots,\mathbf{v}_{d}$ è quella in cui tutti i coefficienti sono nulli.
>> Quindi $\text{Ker}(\mathcal{P}) = \left\{ \mathbf{0} \right\} \iff \mathbf{v}_{1},\dots,\mathbf{v}_{d}$ sono linearmente indipendenti
 

>[!proposizione] Proposizione 2
>Sia $V$ spazio vettoriale su $\mathbb{K}$ e siano $\mathbf{b}_{1},\dots,\mathbf{b}_{n}$ vettori fissati di $V$. allora $\mathcal{B} = {\mathbf{b}_{1},\dots,\mathbf{b}_{n}}$ è una [[base]] se e solo se:
>1. $\left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ è linearmente indipendente
>2. $\left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ è un insieme di generatori per $V$ ($\Span(\mathbf{b}_{1},\dots,\mathbf{b}_{n}) = V$)
>
>>[!dim]

>[!proposizione] Proposizione 3
>Siano $V$ e $W$ spazi vettoriali su $\mathbb{K}$ e $\mathcal{L} : V \to W$ applicazione lineare iniettiva. Se $\{\mathbf{v}_{1},\dots,\mathbf{v}_{d}\} \subseteq V$ è linearmente indipendente allora
>$\left\{ \mathcal{L}(\mathbf{v}_{1}),\dots,\mathcal{L}(\mathbf{v}_{d}) \right\}$
>>[!dim]

