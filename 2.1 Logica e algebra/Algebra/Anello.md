---
aliases: 
creation date: 2\underline{0}23-11-29
---

>[!def]
>$\left< A, +, \cdot \right>$ anello se
>- $\left< A, + \right>$ sia un [[gruppo abeliano]]
>- $\left< A, \cdot \right>$ sia un [[semigruppo]]
>- Valgano le proprietà distributive dell [[operazione]] $\cdot$ rispetto all'operazione $+$. Ossia:
>	- $a \cdot( b + c) = a\cdot b + a\cdot c$
>	- $(a + b) \cdot c = a \cdot c + b \cdot c$


>[!oss]
>non si parla solo di moltiplicazione o addizione ordinaria 

- $\left< \mathbb{Z}, +, \cdot \right>$ è anello (come lo sono tutti i sovrainsiemi di Z, $\mathbb{C}$ incluso)
- $\left< M_{(n\times n)}(\mathbb{R}), +, \cdot \right>$ è anello

>[!oss]
>Se $A$ è un anello allora $\left< A[x],+, \cdot \right>$, posso costruire l'[[insieme]] dei polinomi ad un incognita con coefficienti nell'anello e sarà comunque un anello (proprietà di trasposizione)

## Proprietà
$\left< A, +, \cdot \right>$ sia anello
1. $\forall a \in A\quad a \cdot \underline{0} = \underline{0} \cdot a =\underline{0}$
2. $\forall a,b \in A\quad a\cdot (- b) = (-a) \cdot b = -(a\cdot b)$
3. $\forall a,b \in A \forall n \in \mathbb{Z}\quad a\cdot(n\cdot b) = (n\cdot a)\cdot b = n\cdot(a\cdot b)$
4. $\forall a,b,c \in A\quad$ 
	1. $(a - b)c = ac- bc$
	2. $a(b-c)= ab - ac$

>[!dim] dimostrazione di 1.
>$\cancel{ a\cdot b } = a\cdot(b + \underline{0}) = \cancel{ a\cdot b } + a \cdot\underline{0}$
>e quindi abbiamo
>$\underline{0} = a \cdot \underline{0}$

***

> [!def]
> Se $\left< A, +, \cdot \right>$ è un anello in cui esiste l'elemento neutro indicato con $\underline{1}$ rispetto all'operazione $\left< A, +, \cdot \right>$ è detto **anello con unità**

>[!def]
>Se $\left< A, + , \cdot \right>$ è un anello in cui l'operazione è commutativa allora $\left< A, +, \cdot \right>$ è detto **anello commutativo**



$\mathbb{Z}_{n}$
$\oplus \ f : \mathbb{Z}_{n} \times \mathbb{Z}_{n} \to Z_{n}$, $\{ a \}, \{ b \} \mapsto \{ a + b \}$

$\{ a \}_{n} \oplus \{ b \}_{n} = \{ a + b \}_{n}$
$\{ a' \} = \{ a \} \iff a' \equiv a (\mod n) \iff a' - a = Rn \quad R \in \mathbb{Z}$
$\{ b' \} = \{ b \} \iff b' \equiv b \mod n \iff b' - b = Kn\quad K \in \mathbb{Z}$ 

$$ \begin{align}
a' - a + b' - b = (R+K)n \\
a' + b' \equiv a + b (\mod n) \\
\implies \{ a' + b' \} = \{ a + b \}
\end{align} $$


$\{ a \}_{n} \otimes \{ b \}_{n} = \{ a \cdot b \}_{n}$

$\{ a' \}= \{ a \} \iff a' - a = hn$
$\{ b' \} = \{ b \} \iff b'-b=kn$ $\quad h,k \in \mathbb{Z}$

moltiplico il primo $\times b'$ ed il secondo per $\times a$:
$$ \begin{align}
a'b' - ab' = hb'm& \\
ab' - ab = kan& \\
\hline{a'b' - ab} & \\
=(hb' + ka)n \implies \{ a'b \} = \{ ab \}
\end{align} $$


allora $\left< \mathbb{Z}_{n}, \oplus, \otimes \right>$ è un anello


>[!def]
>$\left< A, +, \cdot \right>$ anello
>due elementi $a,b \in A$ si dicono **divisori dello zero** di $A$ se
>$$ a \neq  \underline{0}\quad b \neq  \underline{0}\quad a\cdot b = 0 $$



> [!esempio] divisori dello zero
>1. $\mathbb{Z}_{8}: \{ 2 \}\{ 4 \} = \{ 8 \} = \{ 0 \}$
> 
> 2. $$ \begin{bmatrix}
> 2 & 1 \\
> 1 & 2
> \end{bmatrix} \begin{bmatrix}
> 2 & 2 \\
> -4 & -4
> \end{bmatrix} = \begin{bmatrix}
> 0 & 0 \\
> 0 & 0
> \end{bmatrix}$$

>[!theorem]
>Un anello $\left< A , + , \cdot \right>$ è privo di divisori dello zero se e solo se valgono le leggi di cancellazione dello zero:
>$$ a \neq 0\quad ab = ac \implies b = c $$
>$$ a \neq 0\quad ba = ca \implies b = c $$
>
>>[!dim]
>>Hp: $A$ sia privo di divisori dello zero
>>Th: valgono leggi di cancellazione
>>
>>$a \neq 0$
>>$ab = ac \implies ab-ac= \underline{0} \implies a(b-c)= \underline{0}\implies b - c = \underline{0} \implies b =c$
>
>>[!dim]
>>Hp: Valgono leggi di cancellazione
>>Th: $A$ sia privo di divisori dello zero
>>per assurdo $a,b \neq  \underline{0} : ab = \underline{0} \implies ab = a \underline{0} \implies b = \underline{0}$
 
>[!theorem]
>Sia $\left< A , + ,\cdot \right>$ anello finito
>I divisori dello zero di $A$ sono tutti e soli gli elementi non invertibili

>[!oss]
>In generale vale che se $\left< A, + , \cdot \right>$ è un anello e $a \in A$ è un **divisore dello zero** alora $a$ è  non invertibile


$\left< \mathbb{Z}_{n}, +, \cdot \right>$
$\{ a \}$ è invertibile se e solo se $MCD(a,n) = 1$

>[!esempio]
>$\mathbb{Z}_{6}$
>$\{ 1 \}, \{ 5 \}$ gli unici invertibili
0}\implies b - c = \underline{0} \implies b =c$
>>[!dim]
>>Th: $A$ sia privo  di divisori dello zero
>>per assurdo $a,b \neab u= aderline{0} : ab = \underline{0} \implies ab = a \underline{0} \implies b = \underline{0}$
 
>[!theorem]
>Sia $\left< A , + ,\cdot \right>$ anello finito
>I divisori dello zero di $A$ sono tutti e soli gli elementi non invertibili

>[!oss]
>In generale vale che se $\left< A, + , \cdot \right>$ è un anello e $a \in A$ è un **divisore dello zero** alora $a$ è  non invertibile


$\left< \mathbb{Z}_{n}, +, \cdot \right>$
$\{ a \}$ è invertibile se e solo se $MCD(a,n) = 1$

>[!esempio]
>$\mathbb{Z}_{6}$
>$\{ 1 \}, \{ 5 \}$ gli unici invertibili


![[dominio di integrità#^3e1fcd]]

[[corpo]]

[[Campo numerico|Campo numerico]]

[[reticolo]]