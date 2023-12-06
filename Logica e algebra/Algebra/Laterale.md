---
aliases: laterale destro, laterale sinistro
creation date: 2023-12-06
---

>[!def]
>$\left< A, \cdot \right>$ [[gruppo]], $H \subseteq A$. Consideriamo $a \in A$, si definisce **laterale destro** di $H$ in $A$ il seguente insieme:
>$$Ha = \{ ha : h \in H \}$$
>In modo analogo si definisce il **laterale sinsitro** di $H$ in $A$
>$$ aH = \{ ah : h \in H \} $$


>[!oss]
>In generale il laterale destro e sinsitro non coincidono


#### Partizionamento di A
$\{ Ha \}_{a \in A}$ è una [[partizione]] di $A$.
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

> [!teorema] Teorema di Lagrange
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

$\left< A, \cdot \right>$ gruppo
Un sottog