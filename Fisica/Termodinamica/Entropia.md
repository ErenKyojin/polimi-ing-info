---
aliases: 
creation date: 2024-01-25
---


Sia $\gamma_{1}$ che $\gamma_{2}$ reversibili.
```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex] (0,0) -- (0,4);
\draw[-latex] (0,0) -- (4,0);
\node (A) at (1,1){$\bullet$};
\node (B) at (3,2){$\bullet$};
\node[left] at (A){A};
\node[right] at (B){B};
\draw (A.center) to[out=80] node[midway, above]{$\gamma_2$} (B.center);
\draw (A.center) to[out=320,in=270] node[midway, below]{$\gamma_1$}(B.center);
\end{tikzpicture}
\end{document}
```

Dal calcolo dell'[[integrale di Clausius]] otteniamo:
$$ \int _{A,\gamma_{1}}^B \! \frac{\partial Q}{T}  = \int _{A,\gamma_{2}}^{B} \!\frac{\partial Q}{T}  $$ infatti la trasformazione è reverisibile.
Quindi il generico integrale
$$ \int _{i}^p \! \frac{dQ_{\text{rev}}}{T} $$
dipende solo dagli stati iniziali e finali.

Si può definire quindi una funzione di stato $S$ detta enrtopia tale che
$$ \Delta S = S(B) - S(A) = \int _{A}^B \! \frac{\partial Q}{T} $$

- S è definita a meno di una costante
- $dS = \dfrac{\partial Q_{REV}}{T}$
- $[S] = \pu{ J/K }$

>[!important] Importante
>Per calcolare $\Delta S$ tra due stati di equilibrio si deve considerare una trasformazione reversibile qualsiasi che unisca questi due stati, e calcolare poi l'integrale:
>$$ \int _{A}^B \! \frac{\partial Q_{\text{REV}}}{T}  $$

# Aumento dell'entropia
Consideriamo le seguenti trasformazini 
- $\gamma_{1}$ non reversibile
- $\gamma_{2}$ reversibile
```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex] (0,0) -- (0,4);
\draw[-latex] (0,0) -- (4,0);
\node (A) at (1,1){$\bullet$};
\node (B) at (3,2){$\bullet$};
\node[left] at (A){A};
\node[right] at (B){B};
\draw (A.center) to[out=80] node[midway, above]{$\gamma_1$} (B.center);
\draw (A.center) to[out=320,in=270] node[midway, below]{$\gamma_2$}(B.center);
\end{tikzpicture}
\end{document}
```

possiamo calcolare l'integrale di Clausius:
$$ \begin{align}
\oint \! \frac{\partial Q}{T} &= \int _{A,\gamma_{1}}^B \! \frac{\partial Q_{IRR}}{T} + \int _{B,\gamma_{2}}^A \! \frac{\partial Q_{REV}}{T} =\int _{A,\gamma_{1}}^B \! \frac{\partial Q_{IRR}}{T} -\int _{A,\gamma_{2}}^B \! \frac{\partial Q_{REV}}{T} < 0 \\
&\implies \int _{A,\gamma_{1}}^B \! \frac{\partial Q_{IRR}}{T} < \int _{A,\gamma_{2}}^B \! \frac{\partial Q_{REV}}{T} \implies \Delta S > \int _{A,\gamma_{1}}^B \! \frac{\partial Q_{IRR}}{T}
\end{align}$$

abbiamo quindi che
$$ \Delta S = \int _{A,\gamma_{2}}^B \! \frac{\partial Q_{REV}}{T} $$
e che
$$ \Delta S >\int _{A,\gamma_{1}}^B \! \frac{\partial Q_{IRR}}{T} $$

Consideriamo quindi un sistema isolato termicamente, avremo quindi $\partial S = 0$
ossia
$$ \Delta S \geq 0  $$
- $> 0$ se trasformazione irreversibile
- $= 0$ se trasformazione reversibile

Questo significa che in un sistema isolato termicamente **l'entropia può solo aumentare**, questo include l'universo termodinamico (ossia sistema + ambiente)
$$ S_{U} = S_{\text{SIST}} + S_{\text{AMB}} $$

## Variazioni di entropia per diverse trasformazioni

[[trasformazione ciclica#Variazione dell' entropia]]
[[trasformazione adiabatica#Variazione dell' entropia]]
[[termostati#Variazione dell' entropia|termostato, variazione dell'entropia]]
[[cambiamenti di fase]]
#### Trasformazioni di un [[Gas perfetti|gas perfetto]]
[[trasformazione isocora#Entropia in una trasformazione isocora]]
[[trasformazione isobara#Entropia in una trasformazione isobara]]
[[trasformazione isoterma#Entropia in una trasformazione isoterma]]

# Diagramma Lavoro-Entropia
L'area sottesa al

# ANKI

```anki
deck: Fisica
---
Entropia definizione
===
Dal calcolo dell'integrale di Clausius tra due stati A e B attraverso diverse trasformazioni, si osserva che per una trasformazione reversibile l'integarle dipende solo da i due punti, possiamo quindi deifnire una funzione di stato $S$ tale che

$$ \Delta S = S(B) - S(A) = \int_A^B \frac{\partial Q_{REV}}{T} $$

S è detta entropia ed è:
- definita a meno di una costante
- La sua derivata è uguale alla funzione integrata
- Si misura in Joule su Kelvin
```


```anki
deck: Fisica
---
Calcolo dell'entropia
===
Per calcolare la differenza di entropia $\Delta S$ tra due stati devo trovare una trasformazione reversibile tra di essi e calcolarne l'integrale
$$ \int_A^B \frac{\partial Q_{REV}}{T} $$
```

