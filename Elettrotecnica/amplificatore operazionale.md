# Amplificatore operazionale
L'amplificatore operazionale è un quadripolo caratterizzato dalle [[relazioni]]
$$
	\begin{cases}
	i_- = I_- \\
	i_+ = I_+
	\end{cases}
$$
e
$$
	v_0 = 
	\begin{cases}
	E_{sat}, &v_i > \varepsilon \\
	\frac{E_{sat}}{\varepsilon}v_i, & v_i \in [-\varepsilon,\varepsilon] \\
	-E_{sat}, & -v_i < -\varepsilon
	\end{cases}
$$

Inoltre $I_-$ e $I_+$ $\rightarrow 0$ => aprossimiamoli a $0$ e a questo punto abbiamo un [[doppio bipolo]]
Poi $E_{sat} \approx 10V/15V$ 
E $A_v = \frac{E_{sat}}{\varepsilon} \approx 10^5/10^6$
con $v_0$ che può raggiungere qualsiasi valore nell'[[intervallo]] $[-E_{sat}, E_{sat}]$

Abbiamo quindi in queste condizioni e la sua equazione carattiristica diventa $I_- = i_1$ e $v_i = v_1$ ossia uguale a quella di un [[nullore]]

>[!amplificatore operazionale]
>![[Pasted image 20220607170042.png]]
>$i_-,$ $i_+$, $v_i = 0$