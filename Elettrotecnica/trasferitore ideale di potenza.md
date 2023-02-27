# TRASFERITORE DI POTENZA
Il trasferitore ideale di potenza è un [[doppio bipolo]] notevole che assorbe in ogni istante di tempo $t$ potenza nulla ossia

$$P_a(t) = i_1(t)v_1(t)+i_2(t)v_2(t) = 0$$

ossia
$$
	\begin{bmatrix}
		v_1 \\
		i_1 
	\end{bmatrix} =
	\begin{bmatrix}
		T_{11} & T_{12}\\
		T_{21} & T_{22}
	\end{bmatrix}
	\begin{bmatrix}
		v_2 \\
		-i_1
	\end{bmatrix}
$$

E affinchè la potenza sia nulla dobbiamo avere $\forall\ t$
$$
	\begin{cases}
		T_{11}T_{21} = 0\\
		1-T_{11}T_{22}-T_{12}T_{21} = 0\\
		T_{12}T_{22} = 0
	\end{cases}
$$

Abbiamo un sistema di tre equazioni in quattro incognite, che ammette quindi infinite soluzioni, preferibile per ottenere un componente reciproco è l'insieme delle soluzioni

$$
	\begin{cases}
		T_{12} = 0 \\
		T_{21} = 0 \\
		T_{11}T_{22} = 1
	\end{cases}
$$
la cui soluzione più banale da trovare è
$$
	\begin{bmatrix}
		v_1 \\
		i_2
	\end{bmatrix}
	=
	\begin{bmatrix}
		n & 0 \\
		0 & \frac{1}{n}
	\end{bmatrix}
	\begin{bmatrix}
		v_2 \\
		i_2
	\end{bmatrix}
$$
equivalente a
$$
	\begin{cases}
	v_1 = nv_2\\
	i_1 = -\frac{1}{n}i_2
	\end{cases}
$$
da cui ricaviamo che possa soltanto avere le due basi miste come basi di definizione ($v_2$ ed $i_2$ dipendono da $v_1$ e $i_1$ rispettivamente)