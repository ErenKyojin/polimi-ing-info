---
aliases: MOS transistor, transistor, transistore, transistore MOSFET
---

- **M**etal
- **O**xide
- **S**emiconductor
- **F**
- **E**
- **T**ransistor

vogliamo controllare la resistenza R tra A e B in funzione dell'ingresso di C

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw(0,0) node[below]{A} to [R] (2,0) node[below]{B};
\draw[->](1,2) node[above]{C} -- (1,.5);
\end{tikzpicture}
\end{document}
```

MOSFET unipolari
- MOS
	- A <- di nostro interesse
	- S
- $j$-fet

# MOS-A
![[Pasted image 20231002145117.png]]
- Un pozzetto leggermente drogato P
- Due pozzetti fortemente drogati N (rappresentano i due nodi A, B).
- La tensione di Gate si applica usando come riferimento un contatto inferiore (quello dello strato P) detto body

Ci sarà quindi un ingresso GB (gate body) ed un uscita AB (source e drain)

>[!remark]
>Fino ad ora il MOSFET è **totalmente simmetrico**, quindi source e drain fino ad ora possono essere scambiate 

Tuttavia per ridurre il numero di terminali possiamo collegare source a body ed avere quindi $S \equiv B$.

Smettiamo quindi di considerare la porta di body, l'ingresso sarà $GS$ e l'uscità sarà $DS$.

Avremo quindi un componente a tre porte.

Tra drain e source applichiamo $V_{DS}$

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw(0,0) node[npn](Q){Q};
\end{tikzpicture}
\end{document}
```

###### Se $V_{GS}$ è 0 la corrente è nulla
##### Se $V_{GS}$ è positiva
Inizialmente ci sarà attrazione tra gli elettroni dei due drogaggi N, che creano un canale di una zona arrichita che sembrerà drogata di tipo $N$, ma questo non avviene con qualsiasi livello di tensione c'è una soglia minima da raggiungere, quindi

quindi $V_{GS} < V_{T} > 0 \implies I = 0$.
Più $V_{gs}$ aumenta più aumenta la dimensione del canale, fino a quando non si genera una corrente


```tikz
\begin{document}
\begin{tikzpicture}[scale=1.25]
\draw[-latex](0,0) -- (4,0) node[below]{$V_{DS}$};
\draw[-latex](0,0) -- (0,3) node[left]{$I_{DS}$};
\draw[thick, red](0,0) -- (1.5,0);
\draw[domain = 0:2] plot (\x,\x) node{$f(x)=x$};
\end{tikzpicture}
\end{document}
```

iniziamo con un andamento lineare, che poi diventa parabolico, infine raggiunto il picco avremo una corrente costante

$$ \begin{cases}
I_{DS} = 0 &V_{GS} < VT\\
I_{DS} = 2k\left( \underbrace{ V_{GS} - V_{T} }_{ V_{OV} } - \frac{V_{DS}}{2} \right) \cdot V_{DS} &V_{DS } < V_{GS} - V_{T}\\
I_{DS} = k(\underbrace{ V_{GS} -V_{T} }_{ V_{OV} })^2 & V_{DS} > V_{GS} - V_{T}
\end{cases} $$

Riducendo il valore di $V_{GS}$ si abbassa la parabola e si anticipa il momento di overdrive
Aumentando il valore di $V_{GS}$ si alza la parabola e si ritarda il momento di overdrive.

Zona ohmica (o triodo) la zona in cui $V_{GS} > V_{T}$ e $V_{DS} < V_{OV}$. Saturo se siamo nella zona lineare e spento.

