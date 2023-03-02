---
aliases: 
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