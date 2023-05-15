---
aliases: 
creation date: 2023-05-15 10:46
modification date: 2023-05-15 10:46
---

Specifiche:
- Forma ISA a 2 gradi di libertà
- Discretizzazione: con eulero implicito
- Relaizzazione: incrementale
- Anti-windup
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
$$ \downarrow \text{eulero implicito}$$
$$\begin{align}
 CS_{d}(z) &= \frac{\left( \displaystyle \color{red}\frac{1-z^{-1}}{T_{s}} \color{white} kT_{d} \right)}{1 + \displaystyle \color{red}\frac{1z^{-1}}{T_{s}} \color{white}\frac{T_{d}}{N}})cSP(z) = PV(z) \\
&= \frac{KT_{d} / T_{s}}{1 + \frac{z - 1}{zT_{s}} \frac{T_{d}}{n}} (C \Delta SP(z) - \Delta PV(z)) \\
&=\frac{\left( ZNT_{s}k \frac{T_{d}}{T_{s}} \right)}{ZNT_{s} + ZT_{d} - T_{d}}('') = \frac{Z\underbrace{ NkT_{d} / T_{d} + NT_{s}B }_{ \alpha }}{Z - \underbrace{ \frac{T_{d}}{T_{d} + NT_{s}} }_{ \beta }} ('')
\end{align} $$

Con $T_{d}, N, T_{s} > 0$ oppure $T_{d} = 0$ il termine al denominatore ha chiaramente modulo $< 1$, mentre per il numeratore il guadagno si annulla con $T_{d} = 0$

quindi
$$\begin{align}
CS_{d} (z) &= \frac{z\beta}{z - \alpha}(c\Delta SP(z) - \Delta PV(z) ) \\
CS_{d}(k) &= \alpha CS_{d}(k - 1) + \beta(c\Delta SP(k) - \Delta PV(k)) \\
\Delta CS_{d}(k) &= CS_{d}(k) - \underbrace{ CS_{d}(k-1) }_{ \text{variabile di stato del regolatore} }
\end{align}$$

#### Modalità auto con antiwindup

```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) node[left]{$\Delta CS_k$} -- ++ (.5,0)node{$\circ$};
\draw (.5,0) -- ++ (.5,0);
\draw(1,.5) rectangle (2.5,-.5);
\draw(2.5,0) -- ++ (1,0) node[right]{$CS(k)$};
\draw (3,0) -- ++ (0,-1);
\draw (3,-1) -- (2,-1) -- (2,-.75) rectangle (1,-1.5) node[midway]{$z^{-1}$};
\draw (1,-1) -- (.5,-1) -- (.5,0);
\end{tikzpicture}
\end{document}
```

$$ CS(k) = CS(k-1) + \Delta CS(k) $$
If (CS(k) >) ...

#### Aggiornamento dello stato
Memorizza $CS(k)$ e $CS_{d}(k)$ per il passo successivo dove sapremo i valori a $k-1$
Memorizza $SP(k)$ e $PV(k)$ per calcolare poi $\Delta SP$ e $\Delta PV$

#### Modalità tracking
```tikz
\begin{document}
\begin{tikzpicture}
\draw (-1.5,1) node[left]{$TR(k)$} -- ++ (1,0) node[above]{tracking} -- ++ (1,-1);
\draw (-1,0) node[left]{$\Delta CS_k$} -- ++ (1,0)node{$\circ$} node[below]{auto};
\draw (.5,0) -- ++ (.5,0);
\draw(1,.5) rectangle (2.5,-.5);
\draw(2.5,0) -- ++ (1,0) node[right]{$CS(k)$};
\draw (3,0) -- ++ (0,-1);
\draw (3,-1) -- (2,-1) -- (2,-.75) rectangle (1,-1.5) node[midway]{$z^{-1}$};
\draw (1,-1) -- (-.5,-1) -- (-.5,0);
\end{tikzpicture}
\end{document}
```
Se il calcolo di $\Delta CS$ contiene della dinamica occorre specificarne come essa è gestita

```
IF(TS) //modalità tracking
	CS(k) = TR(k) //che verrà memorizzato nel passaggio successivo
	CS_d(k) = 0   //arbitrario

```

---

Codice in C

```c
#include stdio.h


//struttura dati relativi ad un PID
typedef struct {
	float K, Ti, Td, N, b, c, CSmax, CSmin, Ts;
	float SP, SPo, PV, PVo, Do, CS, CSo, Tr;
	char TS;
} PID_DATA;

//struttura dati per contenere un sistema dinamico SISo con funzione di trasferimento mu/(1 + sT) discretizzato a passo Ts con il metodo di Eulero iplicito

typedef struct {
	float mu, T, Ts;
	float 
}
```