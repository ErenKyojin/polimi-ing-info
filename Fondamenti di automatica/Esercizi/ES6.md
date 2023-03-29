---
aliases: 
creation date: 2023-03-27 10:37
modification date: 2023-03-27 10:37
---

# 1
Dato il SD LTI a TC SISO con FdT
$$G(s) = \frac{1}{1 + 5s}$$
calcolare la risposta $g(t)$ all'ingresso $u(t)$ mostrando a partire da condizioni iniziali nulle

```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[-latex] (0,0) -- (0,3);
\draw[-latex] (0,0) -- (6,0);
\draw[red] (-1,0) -- (0,0) -- (1,1) -- (2,1) -- (2,2) -- (3,2) -- (4,1) -- (6,1); 
\end{tikzpicture}
\end{document}
```

- Esprimere $u(t)$ come somma di segnali canonici.

$$u(t) = \text{ram}(t) - \text{ram}(t-2) + 2\sca(t - 4) - 2 \text{ram}(t - 5) + 2\text{ram}(t-6)$$

$$
\begin{align}

\implies U(s) &= \frac{1}{s^2} - \frac{1}{s^2}e^{-2s} + \frac{2}{s}e^{-4s} - \frac{2}{s^2}e^{-5s} + \frac{2}{s^2}e^{-6s} \\
&= \frac{2}{s}e^{-4s} + \frac{1}{s^2}(1 - e^{-2s} -2e^{-5s} + 2e^{-6s})
\end{align}
$$


- Esprimo la trasformata di laplace dell'uscita
  $$Y(s) = G(s)U(s) = \frac{2}{\underbrace{ s (1 + 5s) }_{ Y_{1}(s) }}e^{-5s} + \frac{1}{\underbrace{ s^2 (1 + 5s) }_{ Y_{2}(s) }}(1-e^{-2s} - 2e^{-5s} + 2e^{-6s})$$
- Antitrasformo i termini razionali

$$Y_{1} : \frac{2}{s(1 + 5s)} = \frac{0.4}{s(s + 0.2)} = \frac{1}{5} + \frac{\beta}{s + 0.2}$$
quindi $\alpha(s + 0.2) + \beta s = 0.4$
$s = 0 \implies 0.2 \alpha =0.4 \implies \alpha = 2, \beta = -2$

quindi
$$
\begin{align}
Y_{1}(s) &= \frac{2}{s} - \frac{2}{s + 0.2} \\
&\implies y_{1}(t) = 2\sca(t) - 2e^{-0.2t}\sca(t) = (2 - 2e^{-0.2t})\sca(t)
\end{align}
$$
e
$$
Y_{2} : \frac{1}{s^2(1 + 5s)} = \frac{0.2}{s^2(s + 0.2)} = \frac{\alpha}{s} + \frac{\beta}{s^2} _{} \frac{\gamma}{s + 0.2}
$$
$\beta = 1$
$\gamma = 5$
$s = 1, \beta = 1, \gamma = 5\qquad 1,2 \alpha = -6 \implies \alpha = -5$

$$
\implies Y_{2} (s) = -\frac{5}{s} + \frac{1}{s^2} + \frac{5}{s +02} \implies 
$$
$$
\begin{align}
y_{2}(t) & = -5\sca(t) + \text{ram}(t) + 5e^{-0.2t} \sca(t) = (-5 + t + te^{-0.2t})\sca(t)
\end{align}
$$

$y(t) = y_{1}(t - 4) + y_{2}(t) - y_{2}(t-2) - 2y_{2}(t-5) + 2y_{2}(t-5) + 2y_{2}(t-6)$
$$
\begin{align}
y(t)  & = (2-2e^{-0.2(t-4)})\sca(t - 4)  \\
&+ (-5 + 5 + 5e^{-0.2t})\sca(t)  \\
&- (-5 + (t - 2) + 5e^{-0.2(5 - 2)})\sca(t - 2) \\
&-2(-5 + (t - 4) + 5e^{ -0.2(t-4) })\sca(t-5) \\
&+2(-5 + (5- 6)+ 5e^{ -0.2(t-6) })\sca(t - 6)
\end{align}
$$
# 2
Tracciare DBM e DBF asintotici della risposta in frquenza della funzione di FdT
$$
G(s) = \frac{2(1 - s)(1 + s / 5)}{s(1 + s/0.2) (1 + s / 20)^2}
$$
$\mu = 2$
$g = 1$
F d'angolo:
$$
\begin{array}{cccc}
0.2 & 1 & 5 & 20 \\
1F & 1Z & 1Z & 2P \\
\sx & \dx & \sx & \sx
\end{array}
$$


![[ES6 Ex2.excalidraw]]
