---
aliases: 
creation date: 2023-04-06 14:59
modification date: 2023-04-06 14:59
---

In modo analogo alla velocità, definiamo le seguenti accelerazioni:
$$
\begin{align}
&\vec{a}_{a} \equiv \frac{d\vec{v}_{a}}{dt} = \frac{d^2\vec{r}_{a}}{dt^2}\hat{u}_{x} + \frac{d^2y}{dt^2}\hat{u}_{y} + \frac{d^2z}{dt^2}\hat{u}_{z}  &&\text{accelerazione assoluta}   \\
&\vec{a}_{r} \equiv \frac{d^2x'}{dt^2}\hat{u}_{x'} + \frac{d^2y'}{dt^2}\hat{u}_{y'} + \frac{d^2z'}{dt^2}\hat{u}_{z'}  &&\text{accelerazione relativa}
\end{align}
$$
Introdurremo poi anche l'accelerazione di trascinamento e l'accelerazione dell'origine del sistema mobile


### Calcolo dell'accelerazione assoluta
Partendo dalla [[legge di composizione delle velocità]], con l'espressione cartesiana esplicita delel due componenti, per derivazione otteniamo:
$$
\begin{align}

\vec{a}_{a} &= \frac{d\vec{v}_{a}}{dt} = \frac{d(\vec{v}_{r}\! +\! \vec{v}_{t})}{dt} = \frac{d}{dt} \left[ \left( \frac{dx'}{dt}\hat{u}_{x'}\! +\! \frac{dy'}{dt}\hat{u}_{y'} + \frac{dz'}{dt}\hat{u}_{z'}    \right)\! +\! \left( x'\frac{d\hat{u}_{x'}}{dt} + y\frac{d\hat{u}_{y'}} {dt}+ z'\frac{d\hat{u}_{z'}}{dt}    \right)+\frac{d\vec{r}_{O'}}{dt}\!  \right]\!   = \\
&=\left( \frac{d^2x'}{dt^2}\hat{u}_{x'} + \frac{d^2y'}{dt^2}\hat{u}_{y'} + \frac{d^2y'}{dt^2}\hat{u}_{y'} + \frac{d^2z'}{dt^2}\hat{u}_{z'}    \right) + \left( \frac{d}{dt}  \right)
\end{align}
$$