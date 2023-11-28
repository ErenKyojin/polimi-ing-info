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
\psi&=\forall x(B(x) \implies \exists y(R(y,y) \implies \sim R(x,y))) \\
\theta &= \exists x B(x) 
\end{align} $$

forma normale prenessa e skolemizzazione
$$ \begin{align}
\phi &= \forall x \forall y(B(x) \implies (\sim R(y,y) \implies R(x,y))) = \forall x\forall y(\sim B(x) \lor R(y,y) \lor R(x,y)) \\
\psi &= \forall x\forall y (B(x) \implies (R(y,y) \implies \sim R(x,y))) = \forall x(\sim B(x) \lor \sim R(y,y) \lor \sim R(x,y))\\
\theta &=B(a)
\end{align} $$

clausole
$$ \begin{align}
\phi&: \{ \{ \sim B(x), R(y,y), R(x,y) \} \} =\{ \underbrace{ \{ \sim B(z), R(v,v), R(z,v) \} }_{ C } \} \\
\psi &: \{ \{ \sim B(x), \sim R(y,y), \sim R(x,y) \} \}\\
\sim \theta &: \{ \{ B(a) \} \}
\end{align} $$

infine
$$ \begin{align}
\phi^c \quad &\psi^c\ [y / v]\ [x / z]\\
&\{ \sim B(x) \}&&\{ B(a) \} \ [a / x] \\
&&&\square
\end{align} $$
