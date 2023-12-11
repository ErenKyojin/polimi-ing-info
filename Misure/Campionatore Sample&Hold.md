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

