---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

A interruttore chiuso la tenisione campionata viene memorizzata su un condensatore (memoria analogica)  che poi la manteine quando l'interruttore è aperto

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) to [switch] (2,0) to [short] (4,0) to [open] (4,-2) to (0,-2);
\draw (3,0) to [capacitor] (3,-2);
\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\node[op amp] (opamp) at (3,0){};
\draw(0,0) to [switch] (2,0) to [capacitor] (2,-1);
\end{tikzpicture}
\end{document}
```

mantiene il valore campionato costante (a meno di un errore di [[LSB]]) per tutta la durata $$T_{s} = \frac{1}{F_{s}}$$

Il tempo di conversione sarà
$$ T_{conv} \leq \frac{1}{F_{s}} $$

L'interruttore si chiude ogni $nT_{s}$, la fase di sample ha una durata finita SMP: $0^+$ secondi 
La fase di HLD $T_{s}^{-}$ secondi

In fase di SMP:
- $X_{in} = X_{out}$
- $Q_{h} = C_{H} - X_{in}$

In fase di HLD:
- $\forall X_{in} \implies X_{out} = \frac{Q_{H}}{C_{H}} = X_{in}$



non ha perdita informativa per Nyquist-Shannon


[[pass transistor]]

```circuitjs
$ 1 0.000005 382.76258214399064 50 5 50 5e-11
g 448 288 448 320 0 0
R 224 192 224 336 0 0 40 5 0 0 0.5
f 336 128 336 192 32 1.5 0.02
w 224 192 320 192 0
w 352 192 448 192 0
c 448 288 448 208 0 0.00001 -7.464318398686807 0.001
w 448 208 448 192 0
R 336 128 336 48 0 0 40 5 0 0 0.5
```


[[pmos]]


```circuitjs
$ 17 0.000005 10.20027730826997 50 5 50 5e-11
f 192 160 192 224 33 1.5 0.02
R 80 224 80 368 0 0 40 5 0 0 0.5
w 80 224 176 224 0
w 208 224 304 224 0
c 304 224 304 352 0 0.000009999999999999999 1.1658229936983844e-10 0.001
x 165 144 235 147 4 24 PMOS
x 340 289 362 292 4 12 C_h
x 97 302 121 305 4 12 V_in
```

```circuitjs
$ 1 0.000005 10.20027730826997 50 5 50 5e-11
a 48 112 224 112 8 15 -15 1000000 0 0 100000
x 127 67 181 70 4 12 \p5V\s\q\svdd
x 140 152 192 155 4 12 -5V\s\q\sVss
b 224 64 357 161 0
x 264 117 304 120 4 24 S/H
167 464 64 496 64 0 4
w 352 112 416 112 0
w 416 112 416 64 0
w 416 64 464 64 0
w 496 48 496 -16 0
w 464 160 464 240 0
x 438 270 475 273 4 24 -5V
x 482 -32 503 -29 4 12 \p5V
```
#todo fixare


```circuitjs
$ 1 0.000005 10.20027730826997 50 5 50 5e-11
g 96 304 96 352 0 0
g 224 304 224 352 0 0
g 320 304 320 352 0 0
v 96 304 96 208 0 0 40 5 0 0 0.5
w 96 208 224 208 0
c 224 304 224 208 0 0.00001 0 0.001
w 224 208 256 208 0
f 272 144 272 208 32 1.5 0.02
w 288 208 320 208 0
c 320 208 320 304 0 0.00001 0 0.001
w 320 208 400 208 0
x 414 207 445 210 4 12 V_out
```

dovrei risolvere un ;equazione differenziabile, faremme comodo approssimare il MOS ad un resistore $R_{CH}$


```circuitjs
$ 1 0.000005 10.20027730826997 50 5 50 5e-11
g 192 368 192 400 0 3
v 192 368 192 272 0 0 40 5 0 0 0.5
w 192 272 256 272 0
r 256 272 304 272 0 1000
s 304 272 416 272 0 0 false
c 416 272 416 368 0 0.00001 0 0.001
g 416 368 416 400 0 3
w 416 272 464 272 0
x 464 271 497 274 4 24 out
```


avremo 
$$R_{ch} = \frac{1}{2K_{n}(V_{GS}) - V_{TR} - \cancel{ V_{DS} }}$$

$$ R_{CH}^0 = \frac{1}{2k(V_{gs})} $$