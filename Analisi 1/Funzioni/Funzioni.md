---
Alias: funzione
---

>[!def]
>Una [[Relazioni|relazione]] $f \subseteq A \times B$ tale che per ogni $a \in A$ esiste uno ed un solo $b \in B$ tale che $(a,b) \in f$ si dice **funzione** (o **applicazione**) da $A$ a $B$

Si usa la notazione $f : A \to B$ e l'unico elemento $b$ associato ad $a$ dalla relazione $f$ si indica con $f(a)$ e chiamato immagine di $a$ mediante $f$, mentre l'elemento $a$ viene detto controimmagine di $b$. Sono utilizzate anche altre notazioni:

Ipotizziamo $x \in \mathbb R$ e $D \subseteq \mathbb R$, allora una funzione che da $x$ manda ad $y$ si può indicare come:

- $y = \mathcal f(x)$ 
- $\mathcal{f} | D \rightarrow\mathbb R$
- $D \xrightarrow{\mathcal f}\mathbb R$
- $x\xrightarrow{\mathcal f} y$
- $\mathcal f = \left\lbrace y \in \mathbb R : \exists x \in D, y = f(x)\right\rbrace$
- $f(D)$

In particolare con l'ultima si indica l'[[insieme]] $f(D) = \{ f(a) | a \in D \}$, inoltre si utilizza $f^{-1}(b)$ per indicare l'insieme $\{ a \in D | f(a) = b \}$.

Ipotizziamo ora che esista un sottoinsieme  $T \subset D$
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




## [[Funzioni notevoli]] e [[Funzioni triogonometriche]]

# funzioni come [[relazioni]]
*(relativo al corso di Logica e Algebra)*

Se $A$ e $B$ sono insieme finiti e si considera la rappresentazione di $f$ tramite il suo [[grafo di incidenza]], $f$ è una funzione se e solo se c'è uno ed un solo arco uscente da ogni vertice che rappresenta un elmento di $A$, se invece si rappresenta $f$ tramite la matrice di incidenza $f$ è una funzione se e solo se nella [[matrice di incidenza]] di $f$ c'è uno ed un solo $1$ su ogni riga.

Siano ora $f : A \to B$ e $g : B \to C$ due funzioni, è facile provare che il prodotto di $f$ per $g$, pensate come relazioni, è una funzione $f \cdot g : A \to C$ definita da $f \cdot g (a) = g(f(a))$ per ogni $a \in A$ *(dalla serialità di $f$ e $g$)*

La funzione $f \cdot g$ appena definita viene detta prodotto delle due funzioni $f$ e $g$.
Il prodotto di due funzioni è ovviamente associativo (essendo un prodotto di relazioni) ma in generale non è commutativo.
Osserviamo inoltre che la [[relazione identica]] su $A, I_{A}$ è una funzione da $A$ ad $A$, che in questo contesto viene spesso indicata con $\imath_{A}$, si ha ovviamente che $\imath_{A} \cdot f = f = f \cdot \imath_{B}$.
Osserviamo invece che la [[relazione inversa]] $f^{-1}$ di una funzione non è in generale una funzione, cerchiamo di capire invece quando lo è, a tal scopo introduciamo alcune definizioni

- [[Funzione iniettiva]]
- [[Funzione suriettiva]]
- [[Funzione biunivoca]] 