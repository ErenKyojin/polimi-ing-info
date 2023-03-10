---
Alias: funzione
---
# Funzioni 

Ipotizziamo $x \in \mathbb R$ e $D \subseteq \mathbb R$, allora una funzione che da $x$ manda ad $y$ si può indicare come:

- $y = \mathcal f(x)$ 
- $\mathcal{f} | D \rightarrow\mathbb R$
- $D \xrightarrow{\mathcal f}\mathbb R$
- $x\xrightarrow{\mathcal f} y$
- $\mathcal f = \left\lbrace y \in \mathbb R : \exists x \in D, y = f(x)\right\rbrace$
- $f(D)$

Ipotizziamo ora che esista un sotto[[Insieme]] $T \subset D$
$f \ |\ T \rightarrow \mathbb R \Longleftarrow$ Restrizione di $f$ a $T$, essendo $T$ un sottoinsieme di $D$, limitiamo la funzione in $T$

Ipotizziamo ora che esista $D_f \subset D_g$ e definiamo
$$\begin{flalign}
f: D_f \rightarrow \mathbb R\\
f: D_g \rightarrow \mathbb R
\end{flalign}
$$
Se $\forall x \in D_f\quad f(x) = g(x)$ g è un prolungamento di $f$ al [[dominio]] più grande

>[!example] Esempio
>$$\begin{align}
>f(x) &= \sqrt{x+1}\cdot\sqrt{x-1}\qquad D_f=x\geq 1\\
>g(x) &= \sqrt{x^2-1}\mspace{100mu} D_g=(-\infty, -1]\cup[1,+\infty]
>\end{align}
>$$
>$\Longrightarrow$ $g$ prolungamento di $f$

$\exists$ inifiniti modi di prolungare una funzione.

## Grafico della funzione

$$P = (x,y) \in \text{ piano: } x \in D, y = f(x)$$
Dato il grafico di $y = f(x)$
- $y = f(x) + k$ abbassa o alza la funzione di k ($\uparrow k > 0$, $\downarrow k< 0$)
- $y = f(x +  h)$ sposta a destra o a sinistra la funzione di $h$ ($\leftarrow h > 0,\rightarrow h < 0$)
 - $y = \alpha f(x)$
    - $\alpha = 1$ invariato
    - $\alpha = 0$ asse $x$
    - $\alpha = -1$ funzione invertita rispetto all'asse $x$
	- $\alpha$ > 1 funzione "allargata" verso l'alto
	- $\alpha < -1$ funzione "allargata" verso l'alto e invertita rispetto all'asse $x$
	- $0 < \alpha <1$ funzione schiacciata verso il basso
	- $-1 < \alpha < 0$ funzione schiacciata verso il basso e invertita rispetto all'asse $x$ 


### Proprietà:
- [[Limitazioni]]
- [[monotonia]]
- [[periodicità]]
- [[composte]]
- [[invertibile]]
- [[pari]] / [[dispari]]




# [[Funzioni notevoli]] e [[Funzioni triogonometriche]]