---
aliases: 
creation date: 2023-03-30 11:31
modification date: 2023-03-30 11:31
---

## Funzioni di vettori aleatori discreti
Consideriamo $\mathbf{X}$ un vettore aleatorio discreto con densità $p_{\mathbf{X}}(\mathbf{x})$ e $P(\mathbf{X} \in S) = 1$, considerando $S$ al più numerabile ed una funzione $g : S \to \mathbb{R}^m$, definiamo $\mathbf{Y} = g(\mathbf{X})$.
$\mathbf{Y}$ è un vettore aleatorio discreto a valori in $g(S)$
Abbiamo che la densità $p_{\mathbf{Y}}$
$$ p_{\mathbf{Y}}(\mathbf{y}) = \sum_{\mathbf{x} \in S : g(\mathbf{x})=\mathbf{y}} p_{\mathbf{X}}(\mathbf{x}) $$

### Somme di variabili aleatorie discrete
Il caso di può estendere facilmente in modo ricorsivo, quindi possiamo limitarci allo studio della somma di due variabili aleatorie $X_{1}$ e $X_{2}$.

Sia $(X_{1},X_{2})$ vettore aleatorio con densità $p_{X_{1} + X_{2}}$ e sia $Y=X_{1} + X_{2}$
$$p_{X_{1} + X_{2}}(y) = \sum_{x_{1},x_{2} : x_{1}+x_{2}=y}p_{X_{1},X_{2}}(x_{1},x_{2}) = \sum_{x_{2}} p_{X_{1},X_{2}}(y-x_{2},x_{2})$$

>[!remark]
>Se $X_{1}$ ed $X_{2}$ sono indipendenti vale
>$$P_{X_{1}+X_{2}}(y) = \sum_{x_{2}}p_{X_{1}}(y-x_{2})p_{X_{2}}(x_{2})$$


## Caso assolutamente continuo
$$Y = \mathbf{g}(\mathbf{x}) = \begin{bmatrix}g_{1}(\mathbf{x})\\\vdots\\g_{m}(\mathbf{x})\end{bmatrix} = \begin{bmatrix}y_{1}\\\vdots \\y_{m}\end{bmatrix}$$

$\mathbf{x} \sim f_{\mathbf{x}}$
$$F_{\mathbf{y}}(\mathbf{t}) = P(\mathbf{g}(\mathbf{x}) \leq \mathbf{t})= P (\mathbf{x} \in \{ \mathbf{s} : g_{1}(\mathbf{s}) \leq t_{1}, \dots, g_{m}(\mathbf{s}) \leq t_{m}\}) = \int  \dots \int_{{\mathbf{s} \in \mathbb{R}^n : g_{1}(\mathbf{s}) \leq t_{1} \dots, g_{m(s)} \leq t_{m}}}  \! f_{\mathbf{x}}(\mathbf{s})\, \mathrm{d}\mathbf{s} $$
è una funzione con con argomento $\mathbf{t}$.
Se questo [[integrale]] è derivabile in p tutti r $\mathbf{t}$ di $\mathbb{R}^m$ allora $y$ è assolutamente continua e ottengo
$f_{\mathbf{y}}(\mathbf{t}) = \partial^m \int \dots \int  \! f_{\mathbf{x}}(\mathbf{s})\, \mathrm{d}\mathbf{s}$

## Minimo e massimo di variabili aleatorie
$W = \min\{ x_{1},\dots,x_{n} \}$ è il tempo di guasto di un sistema in [[Connessione in serie|serie]] di $n$ componenti tale che $c_{1}$ ha tempo di guasto $x_{1}$ ,..., $c_{n}$ ha tempo di guasto $x_{n}$.

Dato un sistema in [[Connessione in serie|serie]] quando si guasta? quando si guasta l'anello debole.


$Y = \max \{ x_{1},\dots,x_{n} \}$ può essere usato per modellizzare il tempo di guasto di un sistema in [[Parallelo]].

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
\draw[fill = red!30!purple] (1,1) -- (1,3) -- (3,3) -- (3,1) -- (1,1); 
\end{tikzpicture}
\end{document}
```
se $x_{1},\dots,x_{n}$ sono indipendenti
$$f_{W}(t) = 1 - \prod_{i = 1} P(x_{i} > t) = 1 - \prod_{i > 1}^n \left[ 1 - F_{x_{i}}(t) \right] $$

$1 - F_{x_{i}}(t)$ è l'affidabilità di $c_{i}$ al tempo $t$. Se $x_{1},\dots,x_{n} \underset{ iid }{ \sim } F_{x}$
$$
F_{W}(t) = 1 - \prod_{i = 1}^n\left[ 1 - F_{X}(t) \right] = 1 - \left[ 1 - F_{X}(t) \right] ^n
$$
... se $x_{1}\dots,x_{n} \underset{ iid }{ \sim } f_{x}$ assolutamente continua
$\implies W$ è v.a. assoluatamente ontinua con $$f_{W}(t) = \begin{cases}0&\text{su $t$ se $F_{X}$ non è derivabile}
\end{cases}$$
$F'_{W}(t) = -n[1 - F_{X}(t)]^{n-1} (-1) f_{x}(t)$
$$\implies f_{W}(t) = n(1 - F_{X}(t))^{n-1}f_{x(t)}$$

- Se $x_{1},\dots,x_{n}\sim \exp(\lambda i)\quad i = 1 : n$ 
  $\implies F_{W}(t) = 1 - \prod_{i = 1}^n P(x_{i} > t)$ 
  $$\left[P(x_{i} > t) = \int _{t}^{+\infty} \!\lambda_{i} e^{\lambda _{i}s} \, \mathrm{d}s = e^{-\lambda_{i}t} \right]$$
$$= 1 - \prod_{i = 1}^n e^{-\lambda_{i}t} = 1 - e^{-t}\sum_{i = 1}^n \lambda_{i}$$
$\implies P(W > t) = e^{-t\Lambda}$
$\implies W \sim \exp\left( \sum_{i = 1}^n \lambda_{i} \right)$

>[!remark]
>Se $x_{1},x_{2},\dots,x_{n} \underset{ ind }{ \sim } \text{Weibul}(\alpha,\lambda_{i})$  allora $W \sim \text{Weibull}\left( \alpha, \sum_{i = 1}^n \lambda_{i} \right)$
>
>6. $x_{1},x_{2},\dots,x_{n} \underset{ ind }{ \sim } \text{Geom}(P_{i})\quad i = 1 : n$
>
>Ricordando la proprietà $[P(x_{i} > t) = (1 - P_{i})^t\quad t = 1,2,\dots]$
>$$ \implies P(W > t) = \prod_{i = 1}^n P(X_{i} > t) = \prod_{i = 1}^n (1 - p_{i})^t = \left[ \underbrace{ \prod_{i = 1}^n (1 - p_{i}) }_{ := 1 - \theta }\right]^t $$
> con $\theta = 1 - \prod_{i = 1}^n(1 - p_{i})$ per definizione
> $\implies P(W > t) = (1 - \theta)^t$
> $\implies W \sim \text{Geom}\left( 1 - \prod_{i = 1}^n (1- p_{i}) \right)$

### MASSIMO
$Y = \max \{x_{1},\dots,x_{n} \}$
$$\begin{align}
F_{Y}(t) &= P(\max\{ x_{1},\dots,x_{n} \} \leq t) = P(x_{1} \leq t,\dots, x_{n }\leq t) \\
&=F_{\mathbf{x}}(t,t,\dots,t)
\end{align}$$
```tikz
\begin{document}
\begin{tikzpicture}[scale = 2,auto]
\node (tx) at (1,0){$\bullet$};
\node (ty) at (0,1){$\bullet$};
\draw[->] (-1,0) -- (3,0)node{$x_1$};
\draw[->] (0,-1) -- (0,2)node{$x_2$};
\draw[] (-1,-1) -- (3,3);
\draw (tx) to (1,1) to (ty);
\draw[fill = red!30!black, fill opacity = 0.5] (1,1) -- (-1,1)[dashed] -- (-1,-2) -- (1,-2) -- (1,1); 
\end{tikzpicture}
\end{document}
```
$(x_{1},\dots,x_{n}) \sim f_{x}$ assolutamente continua quindi $Y$ èè assolutamente continuo

$$
f_{y}(t) = \frac{d\mathbf{F}(t_{1},t_{2}, ...,t_{n})}{dt} \qquad \forall t : F_{\mathbf{x}} \text{ deriabile in }\mathbf{t} = (\mathbf{t}..,t)
$$

- $x_{1},\dots,x_{n}$ indipendenti
$\implies F_{Y}(t) = \prod_{i = 1}^n F_{x_{i}}(t)$ 

+ + identicamente distribuite $\sim F_{x}$
$$= F_{x}^n(t)$$
- + assolutamente continua allora anche $Y$ è assolutamente continua con densità
  $$ f_{y}(t) = nF_{x}^{n-1}(t) f_{x}(t) $$

-----

$$\begin{array}{rc}
\implies& y  = x_{1} + \dots + x_{n}
\end{array}$$
$$
 Y = \prod_{i = 1}^n x_{i}\qquad (x_{i}\text{ non sono necessariamente indipendenti})
$$

#### Obiettivo
Il nostro obiettivo è trovare il valore atteso di $Y$: $E(Y)$ con $Y = g(\mathbf{x})$
dove
$$
g : \mathbb{R}^n \longrightarrow \mathbb{R}\quad \text{ ossia  }y \text{ variabile aleatoria}
$$

#### **Problema**
d. quando $\mu_{y}$ esiste
b. come lo calcolo?

se $\mathbf{x} \sim F_{\mathbf{x}} \neq F_{x_{1}},\dots, F_{x_{n}}$

Se $x \sim F_{x}$ è una variabile aleatoria $y = g(x)$ allora $E(y) = E(g(x))$ esiste se:
- caso discreto: $\sum_{\{ x \}}g(x)f_{x}(x) = E(y)$ se $E(y)$ esiste, ed esiste se esiste $\sum_{\{ x \}}|g(x)|f_{x}(x) < \infty$
- caso assolutamente continua: $\sum \longrightarrow \int$

Se sono nel continuo assolutamente
$$
\int _{\mathbb{R}} \! \, \longrightarrow \int \dots \int _{\mathbb{R}^n}   
$$

>[!example]
>Se $\mathbf{x} \sim f_{\mathbf{x}}$ assolutamente continua allora
>$$ E(y) \exists \text{se }\int \dots \int _{\mathbb{R}^n} \! \, \mathrm{d}x \mathrm{d}x  $$ 


$E(x_{1},\dots,x_{n})\qquad E\left( \prod_{i = 1}^n x_{i}\right)$

Ricordandoci la disuguaglianza triangoalre
$| a + b| \leq | a| + |b|$

Esistenza di $E\left( \sum_{j} x_{j} \right)$
$$\begin{align}
&E\left[ |\sum_{j} x_{j}| \right] \leq E\left( \sum_{j}|x_{j}| \right) = \\
&\int \dots \int_{\mathbb{R}^n}  \! (|x_{1}| + \dots + |x_{n}|) \, \mathrm{d}x_{1} \dots \mathrm{d}x_{n} = \\
= &\int \dots \int_{\mathbb{R}^n} |x_{n}|f_{\mathbf{x}}(x_{1},\dots,x_{n}) \mathrm{d}x_{1} \dots \mathrm{d}x_{n} + \dots \\
+ &\int \dots \int_{\mathbb{R}^n} |x_{n}|f_{\mathbf{x}}(x_{1},\dots,x_{n}) \mathrm{d}x_{1} \dots \mathrm{d}x_{n} + \dots
\end{align}$$

$1^o$ addendo = 
$$\int _{\mathbb{R}} \!|x_{1}| \, = \left\{  
\int _{\mathbb{R}^{n-1}} \! f_{\mathbf{x}}(x_{1},x_{2},\dots,x_{n}) \, \mathrm{d}x_{2} ,\dots,\mathrm{d}x_{n}\right\} 
$$
$\implies \sum_{j} x_{j}$ ammette medie $E$ se e solo se ogni $x_{j}$ ammette media e $E\left( \sum_{j =1}^n x_{j} \right) = \sum_{j}E(x_{j})$
SEMPRE

>[!remark]
>$E\left( \sum_{j} \right)$ dipendesolo dalle marginali. Diverso è il discorso se ci interessa la varianza della somma, che in generale dipende dalla congiunta $f_{\mathbf{x}}$



Continuo:
$$E\left( \prod_{j =1}^n x_{j} \right) = \int \dots \int_{\mathbb{R}^n}    \!x_{1}\dots x_{n} f_{\mathbf{x}} \, \mathrm{d}\mathbf{x} $$

Discreto:
$$= \underset{ \{ x \}  }{ \sum \dots \sum } x_{1}\dots x_{n} f_{\mathbf{x}}(\mathbf{x})$$

#todo