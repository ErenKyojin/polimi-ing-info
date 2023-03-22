---
aliases: 
creation date: 2023-03-22 09:11
modification date: 2023-03-22 09:11
---

>[!def]
>Una famiglia di variabili aleatorie ha probaprietà di riproducibilità se la somma $X_{1} + X_{2}$ di due variabili aleatorie $X_{1},X_{2}$ indipendenti di quella famiglia è uguale all



applichiamo a qualche modello notevole


1.  $x_{1} \sim \text{Poiss}(\lambda_{1}), x_{2} \sim \text{Poiss}(\lambda_{2}),\dots,x_{n}^l(\lambda_{n})$ indipendenti
   $$y = \sum_{j = 1}^n(x_{j})\qquad f_{y}?$$
   $m_{y}(t) = m_{1}(t) = \dots = m_{n}(t)$
   dal formulario = $e^{\lambda_{1}(e^t-1)} \dots e^{\lambda_{n}(e^t-1)} = e^{e^t-1}(\underbrace{ \lambda_{1} + \dots + \lambda_{n} }_{ \Lambda }) \implies m_{y}(t) = e^\Lambda(e^t - 1)$
   è la formula generatrice m di Poissant $\left( \sum_{j=1}^n \lambda_{j}\right)$
2. $x_{1} \sim \Bi(n,p) X_{2} \sim \Bi(m,P)$
   $\implies X_{1} + X_{2} = \#$ successi su $m +n(p_{1}a)$ di bernoulli $p$ allora
   $$x_{1} + x_{2} \sim \Bi(n+m,p)$$
   Anche $\left\{ \Bi(n,p) n = m\dots\right\}$ riproducibile $p$ finita

3. $x_{1} \sim N(\mu_{1},G^2_{1}), X_{2} \sim N(\mu_{2},G_{2}^2)$
   $\implies m_{X_{1} + X_{2}}(t) \dots$

4. $X_{1},X_{2},\dots,X_{n}$ indipendenti identificabili con distribuzione esponenziale $\sim \exp(\lambda)$
   $$\begin{align}m_{\sum_{j}^nx_{j}}(t) &= \frac{\lambda}{\lambda-t} \dots \frac{\lambda}{\lambda-t}\qquad t < \lambda = \\&= \left( \frac{\lambda}{\lambda-t} \right)^n\end{align}$$Dal formulario è la fgm di una $X$ che si chiama [[Densità gamma]] di parametri $X \sim \Gamma(\alpha,\lambda)$
   >[!danger]
   >Se le $\exp$ indipendenti condividono lo stesso parametro



>[!def]