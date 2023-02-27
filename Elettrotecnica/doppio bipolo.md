# DOPPIO BIPOLO
Un doppio [[bipolo]] è un quadripolo con
$$ 
	\begin{cases}
	I_A = -I_B \\
	I_C = -I_D
	\end{cases}
$$
Se il loro comportarsi in questo modo dipende dal circuito si definiscono ==doppi bipoli impropri==, se invece sono le equazioni descrittive a imporlo si definiscono semplicemente ==doppi bipoli==

## Doppio bipolo dinamici
In [[regime sinusoidale]] diventa facile trattare i doppi bipoli lineari dinamici (ossia che contengono derivate rispetto al tempo nelle loro equazioni descrittive).
Bipoli che descriveremo tramite matrici $\mathcal{Z,\ Y,\ H,\ H', T}$ di cui le prime due l'equivalente delle matrici $\mathcal{R}$ e $\mathcal{Z}$ e le altri equivalenti alle omonime.

Per l'equivalente nel dominio dei fasore di $\mathcal{Z,\ Y,\ H,\ H'}$ basta sostituire alle grandezze elettriche alle porte \[$v_1(t), v_2(t),i_1(t),i_2(t)$\] i fasori corrispondenti.

Quindi $\mathcal{Z}$ diventa
$$
\begin{bmatrix}
\overline{v_1} \\
\overline{v_2}
\end{bmatrix} 
=
\underbrace{
\begin{bmatrix}
Z_{11} & Z_{12} \\
Z_{21} & Z_{22}
\end{bmatrix}
}_\mathcal{Z}
\begin{bmatrix}
\overline{i_1} \\
\overline{i_2}
\end{bmatrix}
$$

>[!example] Esempio
># DOPPIO BIPOLO DINAMICO
>![[Pasted image 20220607102711.png]]
>Del bipolo costitutivo in figura possiamo ricavare l'equazione costitutiva da:
>$$\begin{align}
>&v_1(t) - L\frac{d}{dt}i_1(t) - R(i_1(t) + i_2(t)) = 0 \\
>&i_2(t) - C\frac{d}{dt}[v_2(t) - R(i_1(t) + i_2(t))] = 0
>\end{align}$$
>
>Che nel dominio dei fasori diventa
>$$\begin{align}
&\overline{v}_1 - j\omega L \overline{i}_1 - R(\overline{i}_1 + \overline{i}_2) \\
&\overline{i}_2 - j\omega C[\overline{v}_2 - R(\overline{i}_1 + \overline{i_2})]
>\end{align}$$
>Da cui le equazioni costitutive in forma matriciale sono
>$$
>\begin{bmatrix}
>\overline v_1 \\
>\overline v_2 
>\end{bmatrix}
> =
>\underbrace{
>\begin{bmatrix}
>R + j\omega L & R \\ R & R + \frac{1}{j\omega C}
>\end{bmatrix}
>}_\mathcal{Z}
>\begin{bmatrix}
>\overline i_1 \\ \overline i_2
>\end{bmatrix}
>$$


## Doppi bipoli notevoli
-[[nullore]]
-[[trasferitore ideale di potenza]]
-[[amplificatore operazionale]]
-[[Induttori mutualmente accoppiati]]