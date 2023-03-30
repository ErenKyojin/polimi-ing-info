---
aliases: 
creation date: 2023-03-30 11:31
modification date: 2023-03-30 11:31
---

## Caso assolutamente continuo
$$Y = \mathbf{g}(\mathbf{x}) = \begin{bmatrix}g_{1}(\mathbf{x})\\\vdots\\g_{m}(\mathbf{x})\end{bmatrix} = \begin{bmatrix}y_{1}\\\vdots \\y_{m}\end{bmatrix}$$

$\mathbf{x} \sim f_{\mathbf{x}}$
$$F_{\mathbf{y}}(\mathbf{t}) = P(\mathbf{g}(\mathbf{x}) \leq \mathbf{t})= P (\mathbf{x} \in \{ \mathbf{s} : g_{1}(\mathbf{s}) \leq t_{1}, \dots, g_{m}(\mathbf{s}) \leq t_{m}\}) = \int  \dots \int_{{\mathbf{s} \in \mathbb{R}^n : g_{1}(\mathbf{s}) \leq t_{1} \dots, g_{m(s)} \leq t_{m}}}  \! f_{\mathbf{x}}(\mathbf{s})\, \mathrm{d}\mathbf{s} $$
è una funzione con con argomento $\mathbf{t}$.
Se questo [[integrale]] è derivabile in p tutti r $\mathbf{t}$ di $\mathbb{R}^m$ allora $y$ è assolutamente continua e ottengo
$f_{\mathbf{y}}(\mathbf{t}) = \partial^m \int \dots \int  \! f_{\mathbf{x}}(\mathbf{s})\, \mathrm{d}\mathbf{s}$

## Minimo e massimo di variabili aleatorie
$W = \min\{ x_{1},\dots,x_{n} \}$ è il tempo di guasto di un sistema in [[Elettrotecnica/Serie|serie]] di $n$ componenti tale che $c_{1}$ ha tempo di guasto $x_{1}$ ,..., $c_{n}$ ha tempo di guasto $x_{n}$.

Dato un sistema in [[Elettrotecnica/Serie|serie]] quando si guasta? quando si guasta l'anello debole.


$Y = \max \{ x_{1},\dots,x_{n} \}$ può essere usato per modellizzare il tempo di guasto di un sistema in [[parallelo]].

Ipotesi: $\mathbf{x} = \begin{pmatrix}x_{1}\\\vdots \\ x_{n}\end{pmatrix} \sim F_{\mathbf{x}}$
Studiamoli separatamente:

### MINIMO $W = \min\{ x_{1},\dots,x_{n} \}$
Parto dalla funzione di ripartizione in un generico punto $P$.
$F_{W}(t) = 1 - P(W > t) = 1 - P(\min\{ x_{1},\dots,x_{n} \} > t)$
il minimo è maggiore di $t$ se tutte sono maggiori di $t$, quindi
$= 1 - P(x_{1} > t, x_{2} > t, \dots, x_{n} > t) = 1 - P(\mathbf{x} \in \{  \mathbf{x} : x_{1} > \mathbf{t}.., x_{n} > t \})$

Se $n = 2$
```tikz
\begin{document}
\begin{tikzpicture}[scale = 2,auto]
\node (tx) at (1,0){$\bullet$};
\node (ty) at (0,1){$\bullet$};
\draw[->] (-1,0) -- (3,0)node{$x_1$};
\draw[->] (0,-1) -- (0,2)node{$x_2$};
\draw[] (-1,-1) -- (3,3);
\draw (tx) to (1,1) to (ty);
\draw[fill = red!]
\end{tikzpicture}
\end{document}
```



