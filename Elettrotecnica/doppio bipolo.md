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

$$\begin{cases}
 m_{11}v_{1} + m_{12}v_{2} + n_{11}i_{1} + n_{12}i_{2} + c_{1} = 0 \\
m_{21}v_{1} + m_{22}v_{2} + n_{21}i_{1} + n_{22}i_{2} + c_{2} = 0
\end{cases} $$

### Rappresentazioni cardinali
Un doppio bipolo in generale ammette 6 rappresentazioni, con quattro dette rappresentazioni cardinali:
- base tensione $(v_{1},v_{2})$
- base corrente $(i_{1},i_{2})$
- basi miste $(v_{1},i_{2}), (i_{1},v_{2})$

le due rimanenti sono $(v_{1},i_{1})$ e $(v_{2},i_{2})$

###### matrice $\mathcal{R}$
Quando il bipolo è definito su base tensione ammette la rappresentazione tramite matrice $\mathcal{R}$:
$$ \begin{bmatrix}
v_{1} \\
v_{2} 
\end{bmatrix} = \begin{bmatrix}
R_{11} & R_{12} \\
R_{21}  & R_{22}
\end{bmatrix}
\begin{bmatrix}
i_{1} \\
i_{2}
\end{bmatrix}$$

Possiamo ricavare i parametri della matrice R attraverso la sovrapposizione degli effetti, che in questo caso viene chiamata prove semplici, si interrompe quindi un ingresso alla volta delle correnti.

###### Matrice $\mathcal{G}$
Quando il bipolo è definito su base corrente ammette la rappresentazione tramite matrice $\mathcal{G}$
$$ \begin{bmatrix}
i_{1} \\
i_{2}
\end{bmatrix} = \begin{bmatrix}
G_{11} & G_{12} \\
G_{21} & G_{22}
\end{bmatrix}\begin{bmatrix}
v_{1} \\
v_{2}
\end{bmatrix}$$

si può identificare tramite prove semplici.
***
>[!oss]
>Se un doppio bipolo ammette sia base tensione che base corrente ammette sia la metrice $\mathcal{R}$ che la matrice $\mathcal{G}$, condizione necessaria e sufficiente è che $\mathcal{R}^{-1} = \mathcal{G} \iff \det(\mathcal{R}) = \det(\mathcal{G})=0$

###### Matrice ibrida $\mathcal{H}$ di tipo 1

$$ \begin{cases}
v_{1}  = H_{11} i_{1}  + H_{12}v_{2} \\
i_{2} = H_{21}i_{1} + H_{22} i_{2}
\end{cases} $$
che possiamo riscrivere in forma matriciale ome
$$ \begin{bmatrix}
v_{1} \\
i_{2} 
\end{bmatrix} = \begin{bmatrix}
H_{11}  & H_{12} \\
H_{21} &H_{22}
\end{bmatrix} \begin{bmatrix}
i_{1} \\
v_{2}
\end{bmatrix}$$

anche in questo caso si possono sfruttare le prove semplici


###### Matrice ibrida $\mathcal{H}'$ di tipo 2
$$ \begin{bmatrix}
i_{1} \\
v_{2}
\end{bmatrix} = \begin{bmatrix}
H_{11}' &H_{12}' \\
H_{21}' &H_{22}'
\end{bmatrix} \begin{bmatrix}
v_{1} \\
i_{2}
\end{bmatrix}$$

anche in questo caso si possono sfruttare le prove semplici

###### Matrice $\mathcal{T}$ di trasmissione diretta
Quando dobbiamo ricavare $(v_{1},i_{1})$ date $(v_{2},i_{2})$
$$ \begin{bmatrix}
v_{1} \\
i_{1}
\end{bmatrix} = \begin{bmatrix}
T_{11} &T_{12} \\
T_{21} & T_{22}
\end{bmatrix} \begin{bmatrix}
v_{2} \\
-i_{2}
\end{bmatrix}$$

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


```anki
deck: Elettrotecnica
---
Rappresentazione matriciale di un doppio bipolo
===
Le equazioni costitutive di un doppio bipolo formano un sistema, che da sua volta origine a delle matrici dette di rappresentazione del doppio bipolo:
- Base tensione: Matrice $\mathcal{R}$ 
- Base corrente: Matrice $\mathcal{G}$
- Base mista $(i_1,v_2)$: Matrice $\mathcal{H}$
- Base mista $(v_1,i_2)$: matrice $\mathcal{H}'$
```
