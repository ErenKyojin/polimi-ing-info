---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

$\phi :$ Ogni barbiere rade quelli che non si radono da soli
$\Psi :$ Nessun barbiere rade chi si rade da solo
$\theta  :$ non esistono barbieri

vogliamo dimostrare
$$ \{ \phi,\psi  \}\vDash \theta \qquad \{ \phi,\psi,\sim \theta \} \vdash_{R} \square$$
$B' \to$ essere barbiere
$R^2 \to$ radere

$$ \begin{align}
\phi &= \forall x(B(x)  \implies (\forall y  (\sim R(y,y) \implies R(x,y)))) \\
\psi&=\sim \exists x (B (x) \land (\forall y(R(y,y) \implies R(x,y)))) \\
\theta &= \exists x B(x) 
\end{align} $$

forma normale prenessa e skolemizzazione
$$ \begin{align}
\phi &= \forall x \forall y(B(x) \implies (\sim R(y,y) \implies R(x,y))) = \forall x\forall y(\sim B(x) \lor R(y,y) \lor R(x,y)) \\
\psi &=\forall x(\sim B(x) )
\end{align} $$

clausole
$$ \{ \{ \sim B(x), R(y,y), R(x,y) \} \} $$