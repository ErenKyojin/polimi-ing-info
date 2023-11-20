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
Quindi $\d \vec{F}_{x} = - \dfrac{ \partial p }{ \partial x }\d x\$

>[!legge] principio di Pascal
