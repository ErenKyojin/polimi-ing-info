---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

R in serie ad un MOS (NMos e Pmos)
- N-MOS si comporta bene in commutazione 0->1
- P-MOS si comporta bene in commutazione 1->0

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\node[pnp] (A) at (0,0){};
\node[npn] (B) at (0,-2){};
\draw (-2,-3) to [V, l=$V_{in}$] (-2,-1) -| (A.B);
\draw (-2,-1) -| (B.B);
\draw (B.C) -- node[midway] (m){}(A.C);
\draw  (m.center) -- ++ (1,0) node(c){};
\draw (B.E) to[open, v=$V_{out}$] (c.center);
\end{tikzpicture}
\end{document}
```

$$ \text{PMOS}\ V_{SG} = V_{DD} - V_{IN}, V_{SD} = V_{DD} - V_{out} $$
$$\text{NMOS}\ V_{GS} = V_{IN}, V_{DS} = V_{out}  $$

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
\begin{axis}[axis lines = left, axis x line*=middle]
\addplot[domain=0:2,samples=100,blue]{6};
\addplot[domain=2:8,samples=100,blue]{1/(x-1.833)};
\addplot[domain=0:2,samples=50,red]{-(x^2)/8 + 5.5};
\addplot[domain=2:8,samples=25,red]{.3/(x-1.94)};
\addplot[domain=0:2,samples=2,green,thick]{6};
\addplot[domain=6:8,samples=2,green,thick]{0};
\addplot[domain=0:8,samples=2,red,dashed]{x + 2};
\addplot[domain=0:8,samples=2,green,dashed]{x};
\addplot[domain=0:8,samples=2,blue,dashed]{x-2};
\draw[green, thick] (4,2) -- (4,6);
\draw (4,6) arc (0:180:1);
\draw (4,2) arc (180:0:1);
\draw[dashed] (2,-.5) -- ++ (0,6);
\draw[dashed] (6,-.5) -- ++ (0,6);
\node at (1,7){1};
\node at (3,6){3};
\node at (4.25,3.5){5};
\node at (5,1){4};
\node at (7,.5){2};
\end{axis}
\end{tikzpicture}
\end{document}
```
grafico troppo allungato, #todo sistemarlo
Questo è un C-MOS.

Quando $V_{in} < V_{Tr}$
- n-mos off
- p-mos o omico o saturo

	Sicuramente la corrente non è zero, quindi non siamo sicuramente nella regione di saturazione => cmos = fissa a $V_{DD}$

Abbiamo quindi che
$$ \begin{cases}
V_{OH} = V_{DD} \\
V_{OL} = 0 V
\end{cases} $$

tra i 2 ed i 3 volt zona di indeterminazione

|     | N MOS | P MOS |          |
| --- | ----- | ----- | -------- |
| 1   | off   | ohm   | $0$        |
| 2   | ohm   | off   | $0$        |
| 3   | sat   | ohm   | $\neq 0$ |
| 4   | ohm   | sat   | $\neq 0$ |
| 5   | sat   | sat   | $\neq 0$  (MAX)       |

$$ V_{in} - V_{T,R} = \sqrt{ \frac{|K_{p}|}{K_{n}} }$$

$$\frac{|K_{p}|}{K_{n}} = \frac{\mu_{p}}{\mu_{n}} \approx \frac{1}{2 - 3}$$

$$ V_{in}\left( 1 + \sqrt{ \frac{|k_{p}|}{k_{r}} } \right) = \frac{V_{tr} + \sqrt{ \frac{|k_{p}|}{k_{r}}}|V_{tp}| + \sqrt{ \frac{|k_{p}|}{k_{r}} }V_{DD}}{1 + \sqrt{ \frac{|k_{p}|}{k_{r}} }} $$

per quanto riguarda la corrente

```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}
\begin{axis}[axis lines = left, axis x line*=middle]
\addplot[green,domain=0:2,samples=10] {0};
\addplot[green,domain=2:2.5,samples=10] {3*x-6};
\addplot[green,domain=2.5:3,samples=10] {-3*x+9};
\end{axis}
\end{tikzpicture}
\end{document}
```

con corrente massima
$$ k(V_{in - V_{T,n}})^2 = |k_{p}| (V_{SCR}) - W_{T,p} $$

$[0:V_{IL}], ?,[V_{in}V_{DO}]$
L, analogico, H


## Quanto ci mette?

$0 \to 1, t_{0}$
$1\to{0},t_{0} + \Delta t_{HL}$

%%due inverter%%

$t < t_{0}$ commutazione
$V_{ir} = 0V$
$i_{C }= C \frac{dV_{c}}{dt} = 0$ in quanto $V_C$ non cambia più  e allora la corrente sarà $0$.

La corrente del PMOS invece è 0 e sarà quindi acceso in regione ohmica.


#todo ...

$$t_{p_{HL}} = \frac{C(V_{OH} - V_{M})}{K(V_{DD} - V_{TN})^2}$$

$$ t_{p_{HL}} = \frac{C(V_{M} - V_{OL})}{|K|(V_{DD} - |V_{T,P}|)}$$

Sono risultati approssimati.

Il MOS rappresenta un generatore di corrente, non ideale in quanto funziona solo da $V_{OH}$ a $V_{OV}$, poi va in overdrive