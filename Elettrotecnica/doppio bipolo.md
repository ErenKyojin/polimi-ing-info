# DOPPIO BIPOLO
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw(0,0) rectangle (4,3);
\draw(-2,1)node[left]{B} to (0,1);
\draw(-2,2)node[left]{A} to (0,2);
\draw(6,1)node[right]{D} to (4,1);
\draw(6,2)node[right]{C} to (4,2);
\end{tikzpicture}
\end{document}
```

Un doppio [[bipolo]] è un quadripolo con
$$ 
	\begin{cases}
	I_A = -I_B \\
	I_C = -I_D
	\end{cases}
$$
Se il loro comportarsi in questo modo dipende dal circuito si definiscono ==doppi bipoli impropri==, se invece sono le equazioni descrittive a imporlo si definiscono semplicemente ==doppi bipoli==

Per quanto riguarda le tensioni la tensione $V_{BD}$ non è di particolare interesse, possiamo quindi trascurare quella tensione, e avremo quindi solo due porte da considerare (con $v_{AB}$ e $v_{CD}$ come tensioni). 

## Equazioni costitutive
Le equazioni costitutive sono 2 della forma
$$ \begin{cases}
f_{1} (i_{1},i_{2},v_{1},v_{2}) = 0 \\
f_{2} (i_{1},i_{2},v_{1},v_{2}) = 0
\end{cases} $$

Ci limitiamo allo studio di doppi bipoli lineari affini.

$$ m_{11}v_{1} + m_{12}v_{2} + n_{11}i_{1} + n_{12} + c_{1} = 0 $$
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

# ANKI

```anki
deck: Elettrotecnica
---
Doppio bipolo
===
Un doppio bipolo è un qualsiasi quadripolo che soddisfi la seguente proprietà
$$ 
\begin{align}
I_A = - I_b
I_C = -I_D
\end{align}
$$

Se è il circuito a imporre questo comportamento si definiscono **doppi bipoli impropri**, se invece è una proprietà intrinseca del componente si definiscono semplicemente doppi bipoli.

Per quanto riguarda la tensione possiamo ignorare $v_{BD}$ ed ottenere quindi un componenete con di fatto due porte.
```


```anki
deck: Elettrotecnica
---
potenza assorbita da un doppio bipolo 
===
La potenza assorbita da un doppio bipolo è semplicemente
$$ p_a = v_1 i_1 + v_2 i_2 $$
```
