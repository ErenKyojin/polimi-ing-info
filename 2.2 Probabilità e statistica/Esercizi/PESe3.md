---
aliases: 
creation date: 2023-03-16 11:22
modification date: 2023-03-16 11:22
---

# 1
$x = \#$ refusi in un documento di $25$ righe, $\text{Poiss}(\lambda)$ con $\lambda = 2,25$. $P(x = k)=  e^{-\lambda} \frac{\lambda^k}{k!} \forall k = 0,1,\dots$  
$P(x \geq 2) = 1 P(x < 2) = 1 - P(x = 0) - P(x=1) = 1 - e^\lambda - e^\lambda \lambda = 1 e^{-2.25} - 2.25e^{2.25}=0.658$
...
# 2
180 concorsi indipendenti
0.008 probabilità di vincere  

$x = \begin{cases}1\quad\text{vinco il concorso}\\0\quad\text{altrimenti}\end{cases}$
$x = \sum_{i = 1}^{180} X_{i} \approx \Bi(u_{i}p)$ con $u = 180, p = 0.008, \lambda = up\quad up(1 -p)< 10$

$\approx Z \sim \text{Poiss}(\lambda) = \text{Poiss(1.44)}$

Prob di vincere un solo concorso
$P(x = 1) \approx P(Z = 1) = e^{-\lambda}\lambda = e^{-\lambda}\lambda = e^{ -\lambda }\lambda=e^{ -1.44 }1.44$   


1. vinco almeno un premio
   $$P(x \geq 1) = P(z \geq 1) = 1 - P(z =0) = 1 - e^{ -\lambda } = 1 - e^{-1.44}$$
2. vinco 30 premi
   $$P(x = 30) = P(z = 30) = \frac{e^{-\lambda}\lambda^{30}}{30} = e^{1.44} \frac{1.44^{30}}{30}$$
3.  $E[x] = up = 180 \cdot 0,008 = \lambda = 1.44$

# 3
$X = \#$ torte richieste in un giorno
costo di produzione: $10$
prezzo di vendità: $24$

Densità di profitto giornaliero?
$k = \#$ torte prodotte
$y(k) = 24\min\left\{ k,x \right\} - 10k$ profitto giornaliero in un giorno in cui ho prodotto $k$ torte

$$
p_{x}(x) = \begin{cases}
0.10\quad&\text{x = 0} \\
0.18 &\text{x = 1}\\
0.30 &\text{x = 2}\\
0.25 &\text{x=3}\\
0.17 &\text{x = 4}
\end{cases}
$$
Vediamo una richiesta di due torte

$y_{2} = \min\left\{ 2,x \right\}24 - 20 \in \left\{ -20, +4, +28 \right\}$
$$p_{y_{2}}(y)=\begin{cases} 
P_{x}(0)\quad &y = -20 \\
P_{x}(1) & y = 4 \\
\mathbb{P}_{x}(x \in \left\{ 2,3,4 \right\} ) = \sum_{x = 2}^4 P_{x}(x) & y = 28
\end{cases}$$
$\max \left\{  E[x]\right\}$
$$
E[y_{k}] = E[\min\left\{ X,k \right\}24 - 10k ] = 24E[\min\left\{ X_{k} \right\} ] - 10 k = \sum_{x = 0}^4 \min\left\{ x,k \right\} p_{x}(x) - 10k
$$
Quando:
- $k=0 \implies 24\cdot0 \sum P_{x}(x) - 10 \cdot 0 = 0$
- $k = 1 \implies 24 \cdot 0p_{x}(0) + 24 \sum_{x = 1}^4 1 \cdot p_{x}(1) = 0 + 24(0.18+ 0.30 + 0.25 + 0.17) - 10 = 11.12$
- $k = 2 \implies 24 \cdot 0 + 24 \cdot 0 R(0) + 24 p_{x}(1) + 24 \sum_{x=2}^4 2 p_{x}(2) = 0 + 24 \cdot0.18 + 24\cdot 2 (0.3 + 0.25 + 0.27) - 20 = 17.92$
- $k = 3 \dots = 17.52$
- $k=4 \dots = 11.12$


$V[Y_{2}]= V[\min\left\{ x,2 \right\}24 - 20] = 24^2 V[\min{x,2}]$
$V[\min{x,2}] = E[(\min\left\{ x,2 \right\})^2] - E^2[min\left\{ x,2 \right\}]$

$$E[\min \left\{ x,2 \right\}] = \sum_{x=0}^4\min\left\{ x,2 \right\} p_{x}(x) = 0 \cdot p_{x}(0) + 1p_{x}\left( 1 \right) +  \sum_{x = 2}^4 = 0 + 0.18 + 2(0.3 + 0.25 + 0.17) = 1.58$$

formula generale:
$E[g(x)] = \sum_{x}g(x)p_{x}(x)$

$E[(\min\left\{ x,2 \right\})^2] = \sum_{x = 0}^4(\min\left\{ x,2 \right\})^2 p_{x}(x) = 0^2p_{x}(0) + 1^2 p_{x}(1) + \sum_{x=2}^4 2^2p_{x}(x) = 2.98$

Quindi $V[\min \left\{ x.2 \right\}]= 278.55$

# 4
$x = \#$ capi confeionati in una settimana
1
$E[x] = 5, E[x^2]=30$
$$
p(2 \leq x \leq 8) = \mathbb{P} (2 E[x] \leq x - E[x] \leq 8E[x] ) = P(3 \leq x - E[x] \leq 3) = 1 - P(|x - E[x]|) \geq 1 - \frac{V[x]}{3^2} = \frac{4}{9}
$$

2. $E[x]$, $V = \frac{5}{n + 1}$ $n = \#$operai assunti
$\mathbb{P}(2 \leq x \leq 8) \geq 1 - \frac{V[x]}{9} = 1- \frac{5}{(u-1)9} \geq 0.8 \implies \frac{5}{(u - 1)9} \geq 0.2 \implies u \geq = 1.778$ 


# 5
$x$ variabile aleatoria discreta con densità $f_{x}(k)=0,3^{|k|} 0,4^{1 - |k|} \mathbb{1}_{\left\{ -1,0,1 \right\}}(k)$

$x \in \left\{ -1,0,1 \right\}$
$$
f_{x}(k) =\begin{cases}
0,3&\text{se }k = -1 \\
0,4 &\text{se } k = 0 \\
0,3 &\text{se } k = 1
\end{cases}
$$

$\exists \theta \geq 0$ $E[e^{ ^{tx} }] <\infty \forall t \in \theta$
$n_{x}(t) = E[e^{tx}]$
$E[x^k] = n_{x}^{(k)}(0)$

$$
n_{x}(t) = E[e^{tx}] = e^t 0,3 + 0,4 + e^t {0},3 = 0,4 + 0,6\cosh(t)
$$

x variabile aleatoria as tale che $n_{x}(t) = \frac{1}{(2-e^t)^2}$
$E[x] = n'_{x}(t)\bigg\vert_{t = 0} = 2$
$V[x] = E[x^2] - E^2[x]$
$$
E[x^2] = n''_{x} \bigg \vert_{t=0} = \frac{2e^t(2e^t)^3+6e^t(2e^t)^3}{(2-e^t)^6} \bigg\vert_{t = 0}=8
$$

$\frac{\sigma}{E(x)} = \frac{\sqrt{ V[x] }}{E[x]} - \frac{\sqrt{ 4 }}{2}=1$

$Z = \frac{x \cdot E[x]}{\sqrt{ V[x] }} = \frac{x - \mu}{\sigma} = \frac{1}{\sigma}x - \frac{\mu}{\sigma} = a + bx$
$n_{a+bx}(t) = E[e^{ (a+bx)t }]= e^{ tb }E[e^{ at }]=e^{tb} nx^{(at)} = e^{-tb}n_{x}(at) = e^{1/2} \frac{1}{(2-e)^2}$
