---
aliases: FdT, Funzione di trasferimento
creation date: 2023-03-02 17:33
modification date: 2023-03-02 17:33
---
[[sistemi dinamici LTI]] TC [[SISO]]

$$
\begin{cases}
\dot{x} = Ax+bu \\
y = cx + du
\end{cases}\qquad \text{rappresentazione di stato}
$$
trasformiamo secondo [[Trasformata di Laplace|laplace]] l'equazione di stato
$$\begin{align}
\mathcal{L}[&\dot{x}(t)] &&= \mathcal{L}[ax(t) + bu(t)] \\
&\downarrow\text{prop deriv} &&\downarrow \text{linearità}\\
&sX(s) - x(0) &&= AX(s) + bU(s)
\end{align}$$
quindi
$$
(s\mathbb{1} - A)X(s) = x(0) + bU(s)
$$
$\mathbb{1}$ [[matrice]] identità della stessa [[GAL/dimensione|dimensione]] di $A$

Per qualsiasi $s \cancel{ \in }$ {[[Autovalori e Autovettori|autovalori]] di A}:
$$
X(s) = \underbrace{ (SI-A)^{-1}x(0)  }_{ \mathcal{L}(\text{ML di }x) }+ \underbrace{ (sI-A)^{-1}bU(s) }_{ \mathcal{L}(\text{MF di }x) }
$$

Se la trasformata di $\mathcal{L}[e^{at}] = \frac{1}{s -a} \implies \mathcal{L}[e^{At}]= (s\mathbb{1} - A)^{-1}$ 

Ora trasformiamo l'equazione di uscita e sostituiamoli $X(s)$:
$$
\begin{align}
Y(s) &= cX(s) + dU(s) = \\
&= \underbrace{ c(s\mathbb{1}-A)^{-1} x(0)  }_{ \mathcal{L}(\text{ML di }y) }+ \underbrace{ \fcolorbox{yellow}{#fff0 }{$[c(s\mathbb{1} - A)^{-1}b + d]$}U(s) }_{ \mathcal{L}(\text{MF di }y) }
\end{align}
$$

In giallo è riquadrata la cosidettà **funzione di trasferimento** del sistema.

Quindi per un SD LTI a TC SISO abbiamo 
- la descrizione nello spazio di stato $(A,b,c,d)$
- la descrizione ingresso/uscita data dalla **funzione di trasferimento** (FdT)
  $$
G(s) = c(s\mathbb{1}-A)^{-1} b + d
$$

## Interpretazione  della FdT

$\mathcal{L}[$uscita forzata di $u(t)] = G(s)\cdot \mathcal{L}[u(t)]$

# Calcolo e aspetto di una FdT
$$
G(s) = c(s\mathbb{1}-A)^{-1}b + d
$$
com'è fatta?
1.
$$
(s\mathbb{1}-A)^{-1} = \frac{1}{\det(s\mathbb{1}-A)} \begin{bmatrix}
\Delta_{11}(s) & \dots & \Delta_{1n}(s) \\
\vdots &  & \vdots \\
\Delta_{n1}(s)  & \dots & \Delta_{nn}(s)
\end{bmatrix}
$$
[[Polinomio caratteristico]] di $A$ al denominatore, quindi il grado è n, mentre gli elementi della matrice sono determinanti di una matrice di [[GAL/Dimensione|dimensione]] $(n-1)\times(n-1)$ quindi il grado è $n-1$


2.
$$
c(s\mathbb{1}-A)^{-1}b =\frac{1}{\det(s\mathbb{1}-A)}\begin{bmatrix}
c_{1} & \dots & c_{n}
\end{bmatrix}
\left\{ \Delta_{ij}(s) \right\} \begin{bmatrix}
b_{1} \\
\vdots \\
b_{n}
\end{bmatrix}
$$
rispettivamente $1\times n$, $n\times n$, $n\times 1$, otteniamo quindi un polinomio in $s$ di grado al piú $n-1$.

3. 
   $$\large
G(s)=\underbrace{ c(s\mathbb{1} -A)^{-1}b }_{ \frac{\bar{N}(s)}{D(S)} } + d = 
$$
con $D(s)$ PC di A con grado $n$, $\tilde{N}$ polinomio di grado $\leq n-1$
Quindi se e solo se $d=0$
$$
G(s) = \frac{\tilde{N}}{D}
$$
altrimenti
$$
G(s) =  \frac{\tilde{N}(s)}{D(s)} + d = \frac{\tilde{N}(s) + dD(s)}{D(s)} = \frac{N(s)}{D(s)} 
$$
Con grado del numeratore uguale al grado del denominatore. 

Riassumendo

1. $G(s)$ è razionale fratta
2. I suoi poli sono autovalori di $A$ (e non tutti gli autovalori lo sono se radici del numeratore)
3. grado numeratore = grado denominatore $\iff d \neq 0$ altrimenti il grado del numeratore è strettamente minore del grado del numerator

>[!oss] Le radici del numeratore si dicono **zeri** della FdT


>[!esempio]
>Dato il SD LTI a TL SISO descritto nello spazio di tato che
> $$
>A = \begin{bmatrix}
1 & -1 \\
3 & 4
\end{bmatrix}, b = \begin{bmatrix}
1 \\
0 
\end{bmatrix}, c = \begin{bmatrix}
2 & 1
\end{bmatrix}, d=0
>$$
>Calcoliamo la FdT $G(s)$
> $$
>G(s) = c\frac{1}{\det(S\mathbb{1}-A)} A\mathbf{b} = \begin{bmatrix}
>2  & 1
>\end{bmatrix} \begin{bmatrix}
>s-1 & 1 \\
>-3 & s-4
>\end{bmatrix} \begin{bmatrix}
>1 \\
>0
>\end{bmatrix} =
>$$
>$$
\begin{align}
> &=\frac{1}{(s-1)(s-4)+3} \begin{bmatrix}
2 & 1
\end{bmatrix} \begin{bmatrix}
s-4 & -1  \\
3 & s-1
\end{bmatrix} \begin{bmatrix}
1 \\
0
\end{bmatrix} \\
 &= \frac{1}{s^2-5s +7} \begin{bmatrix}
2 & 1
\end{bmatrix}\begin{bmatrix}
s-4 \\
3
\end{bmatrix} = \frac{2s-5}{s^2 - 5s + 7}
\end{align}
>$$
>$\CVD$

> [!esempio]
> Dato il SD a TC con ingresso $u$, uscita $y$ e stato $x$
> $$
> A = \begin{bmatrix}
> -2 & 0 \\
> -1 & -1
> \end{bmatrix}, b = \begin{bmatrix}
> 2 \\
> 1
> \end{bmatrix},
> c = \begin{bmatrix}
> 1 & 0
> \end{bmatrix}, d =0
> $$
> Calcolare il movimento di $y$ prodotto da $x(0) = \begin{bmatrix}2\\0\end{bmatrix}$ e $u(t) = \sca(t)$
> Ora possiamo fare tutto attraverso la [[trasformata di Laplace]]
> $$
> \begin{align}
> 
> Y(s) &= c(s\mathbb{1} - A)^{-1}x(0) + G(s)U(s) = \\
> &= c(s\mathbb{1} -A)^{-1}x(0) + c(s\mathbb{1}-A)^{-1}bU(s) + dU(s)= \\
> &=c(s\mathbb{1}-A)^{-1}(x(0) + bU(s)) + dU(s) = \\&=\begin{bmatrix}
>1 & 0
>\end{bmatrix} \begin{bmatrix}
>s + 2 & 0 \\
>-1 & s+1
>\end{bmatrix}^{-1} \left( \begin{bmatrix}
>2 \\
>0
>\end{bmatrix} + \begin{bmatrix}
>2 \\
>1
>\end{bmatrix} \frac{1}{5}\right)  = \\
>&=\frac{1}{4}\begin{bmatrix}
s+1 & 0
\end{bmatrix}\begin{bmatrix}
>2+\frac{2}{5} \\
\frac{1}{5}
>\end{bmatrix} = \frac{1}{4} (s+1) 2 \frac{s+1}{s} = \frac{2(s+1)^2}{s(s+1)(s+2)} = \\
> &= \frac{2(s+1)}{s(s+2)}
>
> \end{align}
> $$
> [[Antitrasformazione di Laplace]] con Heaviside
> $$
> \begin{align}
>
>Y(s) = \frac{2s+2}{s(s+2)} = \frac{\alpha}{s} + \frac{\beta}{s+2} \\
>\alpha (s+2) + \beta s = 2s +2
\end{align}
>$$
>quindi $s = 0, 2\alpha = 2, \alpha = 1$ e $s=-2, -2\beta = -2, \beta=1$
>$$\begin{align}
>Y(s) = \frac{1}{s} + \frac{1}{s+2} \\
>\downarrow \\
>y(t) = \sca(t) + e^{-2t}\sca(t) = (1+e^{-2t})\sca(t)
>\end{align}$$



>[!oss]
>La FDT rappresenta le parti raggiungibili e osservabili del sistema
>Gli autvoalori delle parti non raggiungibili e o non osservabili del sistema nel calcolo della FdT sono cancellati

>[!def]
>Una cencellazione è critica se avviene al di fuori della regione di asintotica stabilità, quindi se l'autovalore cancellato ha parte realo $\geq 0$ in TC o $|.|$ TD


Conseguenze:
1. $A,b,c,d$ e $G(s)$ sono rappresentazioni di un sistema dinamico equivalente a meno di una trasformazione di similarità se nel calcolo di $G(s)$ non si hanno cancellazioni e equivalentemente se il SD è [[Raggiungibilità|raggiungibile]] e [[Osservabilità|osservabile]]

2. Poichè i poli di $G(s)$ sono gli autovalori della parte [[Raggiungibilità|raggiungibile]] e [[Osservabilità|osservabile]] del sistema dinamico perchè si possa studiare la stabilità (anche asintotica) del sistema dinamico usando la FdT occore ch nel suo calcolo non si abbiano cancellazioni critiche


