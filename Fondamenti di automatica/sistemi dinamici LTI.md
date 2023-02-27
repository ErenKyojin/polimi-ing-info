I [[sistemi dinamici]] lineari tempo invarianti [[SISO]]
- Lineari $\to f,g$ lineari in $x$ e $u$
- tempo invarianti $\to$ non c'è dipendenza esplicita del tempo


# Tempo continuo
$$
\begin{align}
&\dot{x}_{1}= a_{11}x_{1}(t) + \dots + a_{1n} x_{n}(t) + b_{1}u(t) \\
&\vdots \\
&\dot{x}_{n}(t) = a_{1n}x_{1}(t) + \dots + a_{nn}x_{n}(t) + b_{n}u(t) \\
&y(t) = c_{1} x_{1}(t) + \dots + c_{n}x_{n}(t) + du(t) 
\end{align}
$$
In forma matriciale

$$
A = \begin{bmatrix}
a_{11} & \dots & a_{1n} \\
\vdots &  & \vdots \\
a_{1n} & \dots & a_{nn}
\end{bmatrix}\quad b = \begin{bmatrix}
b_{1} \\
\vdots \\
b_{n}
\end{bmatrix}\quad c = \begin{bmatrix} 
c_{1} &
\dots 
&c_{n}
\end{bmatrix}\quad x = \begin{bmatrix}
x_{1} \\
\vdots  \\
x_{n}
\end{bmatrix}
$$
$(A,b,c,d)$ si dice descrizione di stato


# Tempo discreto
Con molteplici definizioni
$$
\begin{cases}
x(k) = Ax(k-1)+bu(k-1) &\text{due valori successivi di k} \\
y(k) = cx(k) + du(k) &\text{un solo valore di k}
\end{cases}
$$
Descrizione di stato A,b,c,d con $n$ ordine del sistema dinamico



