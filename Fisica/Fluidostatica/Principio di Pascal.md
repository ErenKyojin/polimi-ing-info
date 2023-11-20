---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Consideriamo un elemento infintesimo di fluido con massa $\d m$ e volme $\d V = \d x \d y\d z$, circondato dal resto del fluido.
Se il fluido è immerso in un campo di forze esterne $d m$ risente anche di una forza di volume oltre alle forze di superficie causate dal resto del fluido.
Quindi $\d m$ sarà in equilibrio se la somma di tutte queste forze è nulle:
$$ \d \vec{F}_{x} + \d \vec{F}_{y} + \d \vec{F}_{z} + \d \vec{F} =0 $$

Possiamo, per definizione, scrivere la forza di volume come:
$$ \d \vec{F} = \vec{P}(x,y,z) \d V$$

Ad esempio considerando la forza peso come campo avremo:
$$ \delta  \vec{g} \d x \d y \d z $$
Consideriamo ora le forze di superficie. Ad esempio quella lungo $x$. Consideriamo le due superfici dell'elemento infinitesimo $\d m$, ortogonali all'asse possiamo scrivere
$$ \d\vec{F}_{x} = \vec{F}_{x}(x,y,z)- \vec{F}_{x} (x + \d x, y ,z) $$
Sfruttiamo la definzione di pressione:
$$ \d \vec{F}_{x} = p(x,y,z)\d y \d z \hat{u}_{x} - p(x + \d x, y, z)\d y \d z \hat{u}_{x} $$
raccogliamo
$$ d\vec{F}_{x} = - [p(x+\d x, y, z) - p(x,y,z)]\d y \d z \hat{u}_{x} $$

Moltiplicando e dividendo per $\d x$
$$ \d \vec{F}_{x} = -\underbrace{  \frac{[p(x + \d x, y, z) - p(x,y,z)]}{\d x} }_{ \dfrac{ \partial p }{ \partial x }  } \d x\d y \d z \hat{u}_{x} $$
Quindi $\d \vec{F}_{x} = - \dfrac{ \partial p }{ \partial x }\d x\d y \d z \hat{u}_{x}$

Ovviamente il discorso fatto lungo $x$ si può fare analogamente lungo $y$ e $z$:
$$ \d \vec{F}_{y} = - \frac{ \partial p }{ \partial y } \d x\d y\d z \hat{u}_{y}\qquad \d \vec{F}_{z}= - \frac{ \partial p }{ \partial z } \d x \d y \d z \hat{u}_{z} $$

Sostituendo tutte queste relazioni nel bilancio delle forze abbiamo
$$\begin{align}
 &-\left( \frac{ \partial p }{ \partial x } \hat{u}_{x} + \frac{ \partial p }{ \partial y } \hat{u}_{y} + \frac{ \partial p }{ \partial z } \hat{u}_{z} \right) \cancel{ \d x \d y \d z } + \vec{P} \cancel{ \d x \d y \d } z = \\
= &- \left( \frac{ \partial p }{ \partial x } \hat{u}_{x} + \frac{ \partial p }{ \partial y } \hat{u}_{y} + \frac{ \partial p }{ \partial z } \hat{u}_{z}  \right) +  \hat{P} = 0
\end{align}$$
Quindi
$$ -\vec{\nabla} p + \vec{P} = 0 \implies \vec{\nabla} p = \vec{P} $$

Se il termine a destra è nullo, e quindi $\vec{\nabla} p = 0$, allora $p$ è uguale in tutti i punti del fluido, possiamo quindi enunciare

>[!legge] principio di Pascal
>La pressione di un fluido in equilibrio non soggetto a forze di volume è la stessa in tutti i suoi punti