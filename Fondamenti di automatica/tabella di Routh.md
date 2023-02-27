$\Pi(s) = a_{0}s^n + a_{1}s^{n-1} + \ldots + a_{n-1}s^{1} + a_{n}$

$$
\begin{array}{ccc}
a_{0} & & a_{2}  &  &  a_{n-1} &  &a_{n} \\ 
\downarrow &\nearrow  & \downarrow & \dots & & o &  \\
a_{1} & & a_{3}  &    & a_{n} &  & 0\\
h_{1} &  & h_{2} & \dots \\
q_{1} &  & q_{2} & \dots \\
w_{1} &  & w_{2} & \dots
\end{array}
$$
Le righe dalla terza in poi dipendono dalle due precedenti:

>[!important] Regola
> $$
\begin{array}{}
>h_{1} & h_{2} & h_{3} \\
>q_{1} & q_{2} & q_{3} \\ \\
>\hline
>w_{1} & w_{2} & w_{3}
>\end{array}
>$$
>
> $w_{i} = -\frac{1}{q_{i}} \det \begin{bmatrix}h_{i}& h_{i+1}\\q_{i}  & q_{i+1}\end{bmatrix}$ 
> Gli elementi mancanti al termine delle righe si assumono nulli




