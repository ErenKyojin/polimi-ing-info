---
aliases: 
creation date: 2023-03-13 12:46
modification date: 2023-03-13 12:46
---

Sono sistemi ottenuti componendoni altri e li rappresentiamo con schemi a blocchi SB GHU da

Blocchi
```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) -- (1,0) -- (1,1) -- (0,1) -- (0,0); 
\draw[->] (-.95,0.5) -- (0,0.5);
\draw[->] (2.05, 0.5) -- (1.05,0.5);
\end{tikzpicture}
\end{document}
```

$\large D


Problema

```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) circle(2);
\draw (0,0) -- (0,1) -- (1,1) -- (1,0) -- (0,0);
\draw[->]  (-3,1)node[left]{$u1,u2,...,u_n$} -- (-2,0);
\draw[->] (2,0) -- (3.2,-1.5) node[below]{$y1,y2,...,y_n$};
\node at (.5,.5){$G(s)$};
\end{tikzpicture}
\end{document}
```

Ipotesi,  tutti i blocchi sono Raggiungibili e osservabili, ossia privi di parti nascoste, ovvero tutte le loro Funziolni di trasferimento hanno num e denominatore coprimi

domande:
come ottengo generica FdT
Che relazione c'è tra stabilità delle singole fdt dei blocchi
posto che i singoli blocchi non hanno p nascosto, il sistema complessio puó averne



#todo
Ora scriviamo $G_{1} = \frac{N_{1}}{D_{1}}, G_{2} = \frac{N_{2}}{D_{2}}$ con $N,D$ polinomi
$$
G = G_{2}G_{1} = \frac{N_{2}N_{1}}{D_{2}D_{1}}\qquad \begin{align}
N_{i}\text{ e }D_{i} \text{ sono per ip.?} \\
N_{j} \text{ e } D_{j} \text{ non è detto}
\end{align} 
$$

Quindi gli autovalori del sistema complesivo sono i poli di G1 uniti ai poli di G2
Ma possono esserci tra $N_{1}$ e $D_{2}$
 e o tra $N_{2}$ e $D_{1}$
 - $G_{1}$ e $G_{2}$

# blocchi in parallelo
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) to (0,2) to [generic] (3,2) to (3,2) to (3,0);
\draw (0,0) to (0,-2) to [generic] (3,-2) to (3,-2) to (3,0);
\draw (-1,0) to (0,0);
\draw (3,0) to (4,0);
\end{tikzpicture}
\end{document}
```
$Y = Y_{1} + Y_{2} = G_{1}U_{1} + G_{2}U_{2} = (G_{1} + G_{2})U \implies G(s) = G_{1}(s) + G_{2}(s)$

scrivendo $G_{i} = \frac{N_{i}}{D_{i}} \implies G = \frac{N_{1}}{D_{1}} + \frac{N_{2}}{D_{2}} = \frac{N_{1}D_{1} + N_{2}D_{2}}{D_{1}D_{2}}$
[[Autovalori e Autovettori|Autovalori]] del sistema complessivo = $\left\{ \text{poli di }G_{1} \right\} \cup \left\{ \text{poli di }G_{2} \right\}$
- $G_{1}$ e $G_{2}$ AS $\iff$ $G$ ASpoli di g1 
- Possono nascere parti nascoste


$G_{1} : (A_{1},b_{1},c_{1},d_{1})\qquad G_{2} : (A_{2},b_{2},c_{2},d_{2})$
$u_{1} = u, u_{2} = u$,
$y = y_{1} + y_{2}$

$$\begin{cases}
\dot{x_{1}} = A_{1}x_{1} + b_{1}u\\
\dot{x}_{2} = A_{2}x + b_{2}u \\
u = c_{1}x_{1} + d_{1}u + c_{2}x_{2} + d_{2}u = c_{1}x_{1} + c_{2}x_{2} + (d_{1}+d_{2})u
\end{cases}$$

$$
\begin{bmatrix}
\dot{x}_{1} \\
\dot{x}_{2}
\end{bmatrix} = \begin{bmatrix}
A_{1} & 0 \\
0 & A_{2}
\end{bmatrix}
$$
#todo
# blocchi in retroazione o feedback
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw(0,0) to (1,0) to [generic, name = a] (3,0) to (4,0);
\draw (3,0) to (3,-1) to [generic,name = r] (1,-1) to (1,-1) to (1,0);
\node[left] at (0,0){$U$};
\node[right] at (4,0){$y$};
\node at (r){$G_r$};
\node at (a){$G_a$};
\draw[blue] (3.5,-.2) -- (3.75,.2) node[above]{taglio};
\end{tikzpicture}
\end{document}
```

$a$ andata
$r$ ritorno
$G(s) = \frac{Y(s)}{U(s)}$
Quindi $G_{a}U - G_{a}G_{r}Y = Y \implies \frac{Y}{U} = G(s) = \frac{G_{a}(s)}{1 + G_{a}(s)G_{r}(s)} = \frac{\text{andata}}{1 + \text{ anello}}$

[[funzione di trasferimento|FdT]] d'anello $L(s) := G_{a}(s)G_{r}(s)$

(L di loop)

Posto $G_{a} = \frac{N_{a}}{D_{a}}$ e $G_{r} = \frac{N_{r}}{D_{r}}$
$$\begin{align}
G &= \frac{N_{a} / D_{a}}{D_1 + \frac{N_{a}N_{r}}{D_{a}D_{r}}}= \frac{\cancel{ D_{a} }D_{r} N_{a} / \cancel{ D_{a} }}{D_{a}D_{r} + N_{a}N_{r}} =\\
&= \frac{N_{a}D_{r}}{D_{a}D_{r} + N_{a}N_{r}}
\end{align}$$
Non è una cancellazione perchè non sono un numeratore ed un denominatore ma sono lo stesso polinomio che compare due volte.

Quindi:
$$
\left\{ \text{Poli di $G_{a}$ e di $G_{r}$} \right\} \xleftrightarrow{\quad?\quad}  \left\{ \text{autovalori del sistema complessivo} \right\}  
$$
Quindi l'AS di $G_{2}$ e $Gr$ non occore per quello del sistema complessivo e possono nascere parti nascoste.


## Nello spazio di stato
$$G_{b} : (A_{a},b_{a},c_{a},d_{a})\qquad G_{r} : (A_{r},b_{r},c_{r},d_{r})$$
Il fatto che almeno uno dei due sistemi sia strettamente proprio è condizione sufficiente perchè l'anello sia ben posto, cioè le sue equazioni ammettano soluzioni.

Equazione connesione (caso retroazione negativa)
$$
y = y_{a}\quad u_{r} = y_{a}\quad u_{a} = u - y_{r}
$$

$$
\begin{align}
\dot{x}_{a} &= A_{a}x_{a} + b_{a}u_{a} = A_{a}x_{a} + b_{a}U - b_{a}y_{r} = A_{a}x_{a} - b_{a}c_{r}x_{r} + b_{a}u \\
\dot{x}_{r} &= A_{r}x_{r} + b_{r}u_{r} = A_{r}x_{r} + b_{r}(c_{a} x_{a} + d_{a}u_{a} ) = A_{r}x_{r} + b_{r}c_{a}x_{a} +b_{r}d_{a}(u - c_{r}x_{r}) \\
&=b_{r}c_{a}x_{a} +(A_{r}-b_{r} d_{a}c_{r}) + b_{r}d_{a}u \\
y &= y_{a} = c_{a}x_{a} + d_{a}u_{a} = c_{a}x_{a} - d_{a}c_{r}x_{r} + d_{2}u
\end{align}$$


cioè:
$$
\begin{align}

\begin{bmatrix}
\dot{x}_{a} \\
\dot{x}_{r}
\end{bmatrix} &= \begin{bmatrix}
A_{a} & -b_{a}c_{r}  \\
b_{r}c_{a} & A_{r}-b_{r}d_{a}c_{r}
\end{bmatrix} \begin{bmatrix}
x_{a} \\
x_{r}
\end{bmatrix} + \begin{bmatrix}
b_{a} \\
b_{r}d_{a}
\end{bmatrix}u \\
y &= \begin{bmatrix}
c_{a}  & -d_{a}c_{r}
\end{bmatrix}\begin{bmatrix}
x_{a} \\
x_{r}
\end{bmatrix} + d_{a}u
\end{align}
$$