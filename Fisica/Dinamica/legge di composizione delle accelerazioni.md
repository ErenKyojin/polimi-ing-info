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
&=\left( \frac{d^2x'}{dt^2}\hat{u}_{x'} + \frac{d^2y'}{dt^2}\hat{u}_{y'} + \frac{d^2z'}{dt^2}\hat{u}_{z'}    \right) + \left( \frac{dx'}{dt} \frac{d\hat{u}_{x'}}{dt} + \frac{dy'}{dt}\frac{d\hat{u}_{y}}{dt} + \frac{dz'}{dt}\frac{d\hat{u}_{z'}}{dt}       \right) + \\
&+ \left( \frac{dx'}{dt}\frac{d\hat{u}_{x'}}{dt} + \frac{dy'}{dt}\frac{d\hat{u}_{y'}}{dt} + \frac{dz'}{dt}\frac{d\hat{u}_{z'}}{dt}       \right) + \left( x' \frac{d^2\hat{u}_{x'}}{dt^2} + y' \frac{d^2\hat{u}_{y'}}{dt^2} + z'\frac{d^2\hat{u}_{z'}}{dt^2}   \right) + \frac{d^2\vec{r}_{O'}}{dt^2} 
\end{align}
$$

Nel primo termine abbiamo l'accelerazione relativa, 
secondo e terzo termine sono uguali tra loro e sono funzioni della [[velocità angolare]] del sistema mobile, considerando le proprietà del moto di precessione dei versori, cioè: 
$$ \begin{align}
&\frac{dx'}{dt} \frac{d\hat{u}_{x'}}{dt} + \frac{dy'}{dt} \frac{d\hat{u}_{y'}}{dt} + \frac{dz'}{dt} \frac{d\hat{u}_{z'}}{dt} = \frac{dx'}{dt} \vec{\omega} \times \hat{u}_{x'} + \frac{dy'}{dt} \vec{\omega} \times \hat{u}_{y'} + \frac{dz'}{dt} \vec{\omega} \times \hat{u}_{z'} = \\
&=         \vec{\omega} \times \left( \frac{dx'}{dt}\hat{u}_{x'} + \frac{dy'}{dt}\hat{u}_{y'} + \frac{dz'}{dt}\hat{u}_{z'}    \right) = \vec{\omega} \times \vec{v}_{r}
\end{align} $$
La somma dei suddetti due termini coincidenti è detta [[accelerazione di Coriolis]], la somma degli ultimi due termini, invece, rappresenta l'accelerazione che il punto materiale avrebbe, rispetto al sistema fisso, se fosse fermo nel sistema mobile, là dove si trova all'istante considerato. Per questo motivo viene indicata come accelerazione di trascinamento
$$
\vec{a}_{t} = \left( x' \frac{d^2\hat{u}_{x'}}{dt^2} + y' \frac{d^2\hat{u}_{y'}}{dt^2} + z' \frac{d^2\hat{u}_{z'}}{dt^2}    \right) + \frac{d^2\vec{r}_{O'}}{dt^2} 
$$
Di questa espressione, il secondo termine è la derivata della velocità dell'origine, e rappresenta perciò l'accelerazione dell'origine, che indicheremo come $\vec{a}_{O'}$, mentre il primo termine puó essere riscritto come segue:
$$
\begin{align}
&x' \frac{d^2\hat{u}_{x'}}{dt^2} + y'\frac{d^2\hat{u}_{y'}}{dt^2}   + z' \frac{d^2\hat{u}_{z'}}{dt^2} = x' \frac{d}{dt}\left( \frac{d\hat{u}_{x'}}{dt}  \right) + y' \frac{d}{dt} \left( \frac{d\hat{u}_{y'}}{dt}  \right) + z' \frac{d}{dt}\left( \frac{d\hat{u}_{z'}}{dt}  \right) = \\
= & x' \frac{d}{dt}(\omega \times \hat{u}_{x'}) + y'\frac{d}{dt}(\omega \times \hat{u}_{z'}) + z'\frac{d}{dt}(\vec{\omega} \times \hat{u}_{z'})  = \\
=& \frac{d\vec{\omega}}{dt} \times (x'\hat{u}_{x'} + y'\hat{u}_{y'} + z'\hat{u}_{z'}) + \vec{\omega}\times \left( x'\frac{d\hat{u}_{x'} }{dt} + y'\frac{d\hat{u}_{y'}}{dt}  + z'\frac{d\hat{u}_{z'}}{dt}   \right)= \\
=& \frac{d\vec{\omega}}{dt}\times \vec{r}_{r} + \vec{\omega} \times (\vec{\omega} \times \vec{r}_{r})     
\end{align}
$$
In conlusione l'accelerazione assoluta può essere scomposta nei termini
$$
\fbox{$\vec{a}_{a} = \vec{a}_{r} + \vec{a}_{c} + \vec{a}_{t}$}
$$
con $\vec{a}_{t} = a_{O'} + \vec{\omega} \times (\vec{\omega} \times \vec{r}_{r}) + \frac{d\vec{\omega}}{dt} \times \vec{r}_{r} = \vec{a}_{O'} + \vec{\omega} \times (\vec{\omega} \times \vec{r}_{r}) + \vec{\alpha} \times \vec{r}_{r}$
