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