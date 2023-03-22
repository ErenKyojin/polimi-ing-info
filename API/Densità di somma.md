---
aliases: 
creation date: 2023-03-22 08:51
modification date: 2023-03-22 08:51
---

Densità di somma id variabili aleatorie indipendenti
$$
f \sum_{j=1}^n x_{j}?
$$
Noi sappiamo $E\left( \sum_{j} x_{j} \right) = \sum_{j}E(x_{j})$
- $\text{var} \left( \sum (x_{j}) \right) = \sum_{j} \var(x_{j})$
$m_{\sum_{x_{j}}}(t) = m_{x_{1}}(t)\dots m_{x_{n}}(t) \implies f?\ F?$


Prima strada è lavorare con integrali di combinazioni o le somme di convoluzione

$$f_{x+y}^(y) = \int \!  f_{x}(s)f_{y}(t-s) \, \mathrm{d}s$$
$$
f_{x+y+w}^{(t)} = \iint f_{x}(s) f_{y}(t-n - u) \mathrm{d}s \mathrm{d}u
$$

Seconda strada
$m_{\sum x_{\bar{i}}}(t)$

applichiamo a qualche modello notevole


1.  $x_{1} \sim \text{Poiss}(\lambda_{1}), x_{2} \sim \text{Poiss}(\lambda_{2}),\dots,x_{n}^l(\lambda_{n})$ indipendenti
   $$y = \sum_{j = 1}^n(x_{j})\qquad f_{y}?$$
   $m_{y}(t) = m_{1}(t) = \dots = m_{n}(t)$
   dal formulario = $e^{\lambda_{1}(e^t-1)} \dots e^{\lambda_{n}(e^t-1)} = e^{e^t-1}(\underbrace{ \lambda_{1} + \dots + \lambda_{n} }_{ \Lambda }) \implies m_{y}(t) = e^\Lambda(e^t - 1)$
   è la formula generatrice m di Poissant $\left( \sum_{j=1}^n \lambda_{j}\right)$
2. $x_{1} \sim \Bi(n,p) X_{2} \sim \Bi(m,P)$
   $\implies X_{1} + X_{2} = \#$ successi su $m +n(p_{1}a)$ di bernoulli $p$ allora
   $$x_{1} + x_{2} \sim \Bi(n+m,p)$$
   Anche $$