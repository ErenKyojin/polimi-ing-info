---
aliases: 
creation date: 2023-05-15 10:46
modification date: 2023-05-15 10:46
---

Specifiche:
- Forma ISA a 2 gradi di libertà
- Discretizzazione: con eulero implicito
- Relaizzazione: incrementale
- Anti-windup tramite ricalcolo azione $I$ con azione $D = 0$
- Modalità tracking con bumpless transfer

#### interfaccia

```tikz
\begin{document}
\begin{tikzpicture}
\draw[->] (0,0) -- (2,0) node[right]{SP};
\draw[->] (0,-1) -- ++ (2,0) node[right]{PV};
\draw[->] (0,-2) -- ++ (2,0) node[right]{TS};
\draw[->,dashed] (0,-3) -- ++ (2,0) node[right]{TS};
\draw[->] (4,0) node[left]{CS} -- ++ (2,0);
\draw[->,dashed] (4,-2) node[left]{HI} -- ++ (2,0);
\draw[->,dashed] (4,-3) node[left]{LO} -- ++ (2,0);
\draw (2,.5) rectangle (4,-3.5);
\end{tikzpicture}
\end{document}
```
- SP set point
- PV process variable
- TS track switch
- TR track reference
- CS control signal
- HI high saturation
- LO low saturation

#### Legge di controllo e parametri
LDC:
$$ CS(s) = k\left( bSP(s) - PV(s) + \frac{1}{sT}(SP(s) - PV(s)) + \frac{sTd}{1 + StD / n} (cSP(s) - PV(s))\right)$$

PAR: K, Ti, Td, N, b, C
CSmin, CSmax
$T_{s}$
Sat values
Sampling times


#### Azione P
$CS_{p} = K(bSP - PV)$
$\Delta SP(k) = SP(k)-SP(k-1) \iff \Delta = 1 - z^{-1}$ cosicchè $\Delta SP(z)=(1-z^{-1})SP(z)$

$\Delta PV(k)= PV(k) - PV(k-1)$ e $\Delta PV(z)= (1-z^{-1})PV(z)$

Quindi
$$ \Delta CS_{p}(k) = K(b\Delta SP(k)-\Delta PV(k)) $$

#### Azione I
$$ CS_{I}(s) = \frac{K}{sT_{i}}(SP(s) - PV(s)) $$
$$\text{ Eulero implicita } \downarrow$$
$$CS_{i}(Z) = \frac{K}{\displaystyle\color{red}{\frac{z-1}{z\color{white}T_{s}}}\color{white}T_{i}}(SP(z)-PV(z))$$
In rosso $\Delta$
$$\implies \Delta CS_{i}(z) = \frac{KT_{s}}{T_{i}}(SP(z)-PV(z))$$
$$ \Delta CS_{I}(k) = K \frac{T_{s}}{T_{i}}(SP)(k) - PV(k))  $$

#### Azione D
$$ CS_{d}(s) = \frac{skT_{d}}{1 +  ST_{d} /N} (cSP(s) - PV(S)) $$
$$ \downarrow Eul$$