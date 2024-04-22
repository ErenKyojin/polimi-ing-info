---
aliases: laterale destro, laterale sinistro
creation date: 2023-12-06
---

>[!def]
>$\left< A, \cdot \right>$ [[gruppo]], $H \subseteq A$. Consideriamo $a \in A$, si definisce **laterale destro** di $H$ in $A$ il seguente insieme:
>$$Ha = \{ ha : h \in H \}$$
>In modo analogo si definisce il **laterale sinsitro** di $H$ in $A$
>$$ aH = \{ ah : h \in H \} $$


>[!remark]
>In generale il laterale destro e sinsitro non coincidono


#### Partizionamento di A
$\{ Ha \}_{a \in A}$ è una [[Partizione]] di $A$.
$\forall a \in A, Ha \subseteq A$
$a \in A, a = 1 \cdot a \in Ha$ (1 elemento neutro generico, quindi appartiene al sottogruppo)  
$\implies A \subseteq \bigcup_{a \in A} Ha$ quindi la collezzione copre a
$x \in Ha \cap H\bar{a}$
$$\begin{align}
x = &h_{1}a=h_{2}\bar{a} \\
\implies &a = h^{-1}h_{2}\bar{a} \\
\implies &Ha=Hh^{-1}h_{2}\bar{a}=H\bar{a}&\qquad \text{ma }h_{1}^{-1}h_{2}=h_{3} \in H \\
\implies&Ha=H\bar{a}
\end{align}$$
quindi $A$ è partizionato.

Una relazione di equivalenza che ha come partizione la collezione $\{ Ha \}_{a \in A}$ è la relazione su $A$ di questo tipo:
$$ \begin{align}
a,b \in A\quad a \rho b \iff ab^{-1} \in H
\end{align} $$

quando un $b \in [a]_{\rho}$? $b \rho a\implies ba^{-1} \in H \implies ba^{-1} = h \implies b = ha \implies b \in Ha$


per quanto riguarda i sinsitri la partizione $\{ aH \}_{a\in A}$ determina la relazione di equivalenza $\rho$ su $A$ così definita:
$$ a,b \in A, a \rho b \iff a^{-1}b \in H $$
e analogamente si dimostra che la classe di equivalenza di questa relazione sono i laterali sinistri.

***

> [!theorem] Teorema di Lagrange
> Supponiamo $\left< A, \cdot \right>$ gruppo finito; avrà un certo ordine $n$ $|A| = n$.
> Se $H \subseteq A$ allora $|H| / |A|$ (l'ordine di $H$ divide l'ordine di $A$)

$\{ Ha \}_{a \in A}$ è una partizione di $A$
$|A| = |Ha_{1}| + |Ha_{2}| + |Ha_{3}| + \ldots +|Ha_{i}|$

$$ \begin{align}
H &\to Ha \\
h &\mapsto ha
\end{align}\quad ha = \tilde{h}a \implies h=\tilde{h} \implies |H| = |Ha| $$

$\implies |A| = \ldots =|H| + |H| + |H| + |H| + \ldots + |H| = r |H|$

***

> [!def]
> $\left< A, \cdot \right>$ gruppo
> Un sottogruppo $H$ di $A$ è detto **normale** in A, $H \vartriangleleft A$, se $\forall a \in A, \forall h \in H$ si ha $a^{-1}\cdot h\cdot a \in H$

>[!remark]
>caso particolare, se $\left< A, \cdot \right>$ è [[gruppo abeliano]] tutti i sottogruppi sono normali

>[!remark]
>Se $\left< A, \cdot \right>$ gruppo, $H \subseteq A$
>$\forall a \in A, aH = Ha \iff H \vartriangleleft A$
>$a\bar{h}  = h'a$
>$\bar{h} = a^{-1}ha$


>[!theorem]
>Sia $\left< A, \cdot \right>$ gruppo, e $\rho$ una congruenza su $A$ allora
>1. $\rho_{e} \subseteq A$ 
>2. $\rho_{e} \vartriangleleft A$, poniamo $\rho_{e} = N$
>3. Le classi di equivalenza di $\rho$ in $A$ sono tutte e sole i laterali di $N$ in $A$.
> 
>>[!dim]
>>###### 1.
>>$\rho_{e} \subseteq A$  $a,b \in \rho_{e} \implies a \rho e$, $b\rho e$ $\implies a b \rho e \implies a \cdot b \in \rho_{e}$
>>$a \in \rho_{e} \implies a \rho e, a^{-1} \rho a^{-1} \implies e \rho a^{-1} \implies a^{-1} \rho e \implies a^{-1} \in \rho_{e}$
>>
>>###### 2.
>>$\rho_{e} \vartriangleleft A$
>>$b \in \rho_{e}, a \in A$
>>$$ \begin{align} \\
>>&a^{-1} \rho a \\
>>&b \rho e \implies a^{-1}\rho ba \rho a^{-1}ea \to a^{-1}ba \rho e \implies a^{-1}ba \in \rho_{e}  \\
>>&a \rho a
>>\end{align} $$
>>
>>###### 3.
>>tesi
>>$\forall a \in A\quad \rho_{a} =Na$
>>
>>$b \in \rho_{a} \implies b \rho a$ so che $a^{-1}\rho a^{-1} \implies b^{-1}o\rho e \implies ba^{-1} \in \rho_{e} = N \implies b^{-1}a = n \in N \implies b = na \implies b \in Na$
>>(Tutti gli $\implies$ in realtà sono $\iff$)

È sufficiente conoscere la clase di equivalenza dell'elemento neutro per conoscere tutte le altre classi di equivalenza
$\rho_{a} = Na$

[[Prodotto di classi di equivalenza]]

>[!theorem]
>Sia $\left< A, \cdot \right>$ un gruppo ed $N$ un suo sotogruppo normale, allora la relazione su $A$ così definita $$a \rho b \iff a\cdot b^{-1} \in N\qquad\forall a,b \in A$$ 
>È una congruenza le cui classi di equivalenza sono tutti e soli i laterali di $N$ in $A$


> [!example]
> Dato $Q_{8} =\{ 1,-1,i,-i,j,-j,k,-k \}$ [[quaternoni]], si mostri che $H = \{ 1,-1 \}$ è un sottogruppo normale di $Q_{8}$ e si costruisca il gruppo quoziente $Q_{8} / H$
> H chiuso rispetto al prodotto ($-1 \cdot 1 = -1, -1 \cdot -1 = 1, 1 \cdot 1 = 1$) quindi sottogruppo
> 
> se scelgo $1$:
> $$a 1 a^{-1} = 1 \in H\qquad a^{-1}(-1)a=(-a)(-1)a = aa =a^2 = -1$$
> 
> per descrivere il gruppo quoziente si costruisce la tavola
> 
> | $Q_{8} / H$ | $H1$  | $Hi$  | $Hj$  | $H_{k}$ |
> | ----------- | ----- | ----- | ----- | ------- |
> | $H 1$       | $H$   | $H i$ | $H j$ | $Hk$    |
> | $H i$       | $H i$ | $H$   | $Hk$  | $Hj$    |
> | $H j$       | $H j$ | $H k$ | $H$   |  $H i$        |
> | $H k$       | $Hk$  | $H j$ | $H i$      | $H$     |
>
>notiamo che $H1 = H(-1)$ infatti sono in relazione ($1 -1^{-1} = -1 \in H$), lo stesso vale per le coppie $i, -i$, $j,-j$,$k,-k$.
> È il gruppo trirettangolare