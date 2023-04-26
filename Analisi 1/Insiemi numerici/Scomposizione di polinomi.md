# Scomposizione di polinomi
## Nel [[Analisi 1/Insiemi numerici/Campo]] dei [[numeri reali]] $\mathbb R$
$$ax^2+bx+c=0 \qquad \Leftrightarrow \qquad x^2+\frac bax+\frac{c}{a} = 0$$
$$
\begin{flalign}
	x^2 + \frac bax+\frac ca&=x^2+\frac{b}{a} x+ \left(\frac{b}{2a}\right)^2 - \left(\frac{b}{2a}\right)^2 + \frac{c}{a} = \\
	&=\left(x+\frac{b}{2a}\right)^2-\frac{b^2}{4a^2}+\frac{c}{a}  = 0\\
	&=\left(x+\frac b{2a}\right)^2 = \frac{b^2-4ca}{4a^2} \tag{1}\\
	&\Rightarrow x+\frac{b}{2a}= \pm\sqrt{\frac{\Delta}{4a^2}} =\pm\frac{\sqrt{\Delta}}{2a}
\end{flalign}
$$


 ## Nel campo dei [[numeri complessi]]  $\mathbb C$
 
Riprendiamo al punto $(1)$ sostituendo $z \in \mathbb C$ ad $x$ e otteniamo:
$$\begin{flalign}
\left(z+\frac{b}{2a}\right)^2&=\frac{b^2-4ac}{4a^2} \\
z+\frac{b}{2a} = \sqrt{\frac{b^2-4ac}{4a^2}} &= \frac{\sqrt{b^2-4ac}}{2a} \\
z = \frac{-b+\sqrt{\Delta}}{2a}
\end{flalign}
$$

>[!Example] Esempio
>$$
>\begin{flalign}
>&\phantom{\Rightarrow i}iz^2+(2+4i)z+3i = 0 \\
>&\Rightarrow z = \frac{(-1+2i) \pm (2+2i)}{i} \\
>&\Rightarrow z = \begin{cases}
>-i \\
>-4+3i
>\end{cases}
>
>\end{flalign}
>$$
>