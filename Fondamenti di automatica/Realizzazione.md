---
aliases: 
creation date: 2023-03-13 12:10
modification date: 2023-03-13 12:10
---
$$
G(s) \to (A,b,c,d)
$$
Ci limitiamo al caso di realizzazione minima (dimensione di $A$ pari al grado del denominatore di $G$)

>[!question] Esistono modi comodi per trovare una quaterna $(A,b,c,d)$ corrispondente a $G(s)$
>Si


### Premessa
Se in $G(s)$ grado numeratore = grado denominatore
$$
G(s) = d + \frac{N(s)}{D(s)}
$$
con grado $N <$ grado $D$: ci basta quindi trattare questo caso.

Come detto vediamo un modo di operare:
$$
\begin{align}
G(s) = \frac{b_{1}s^{n-1} +b_{2}s^{n-2} + \ldots + b_{n} }{s^n + a_{1}s^{n-1} + a_{2}s^{n-2}+\ldots+a_{n}} = \frac{N(s)}{D(s)} \\
 U\to \fbox{$\frac{N(s)}{D(s)}$}\to Y \implies U \to \fbox{$\frac{1}{D(s)}$} \to \fbox{$N(s)$} \to Y
\end{align}
$$

- $\frac{x(s)}{u(s)} = \frac{1}{D(s)} \implies x(s)D(s) = U(s)$
  $$
\begin{align}
&s^nX(s) + a_{1}s^{n-1} X(s)  + \dots +a_{n} X(s) =U(s) \\
&\downarrow \\
&\frac{d^n}{dt^n} a(t) + a_1 \frac{d^{n-1}}{dt^{n-1}}a(t)  + \dots + a_{n} \frac{d}{dt} a(t) = u(t)
\end{align}
$$ 
$$
\begin{bmatrix}
\dot{x}_{1} \\
\dot{x}_{2} \\
\vdots \\
\dot{x}_{n}
\end{bmatrix} = \underbrace{ \begin{bmatrix}
0 & 1 & 0  & \dots & 0 \\
\vdots  & 0 & 1 & \dots & 0\\
0  & 0 &\dots  &0  &1 \\
-a_{n}  & -a_{n-1} & \dots & \dots & -a_{1}
\end{bmatrix} }_{ A } \begin{bmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{n}
\end{bmatrix}
$$

$$A = \left[ \begin{array}{c|c}
\mathbf{0} & \mathbb{1} \\
\hline -a_{n} & \mathbf{a}\\

\end{array} \right] $$
-  $$
U \to \fbox{$\frac{1}{D}$} \to \fbox{N} \to Y
$$
$$\begin{align}

Y(s) =   N(s)X(s) &= (b_{1}s^{n-1} + b_{2}s^{n-2} + \dots + b_{n}) X(s) \\
\text{termini} &= b_{1}s^{n-1}X(s) \xrightarrow{\mathcal{L}^{-1}} \frac{b_{1} d^{n-1}x(t)}{dt^{n-1}} = b_{1}x_{n}(t) \\
&=b_{2}s^{n-2} X(s)\longrightarrow{ \dots b_{2}x_{n-1}(t)} \\
&=\vdots \\
&= b_{n}(X_{s}) \longrightarrow \dots b_{1}n_{1}(t)
\end{align}
$$

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}

\end{tikzpicture}
\end{document}
```