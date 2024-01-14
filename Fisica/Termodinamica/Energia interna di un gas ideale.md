---
aliases: 
creation date: 2023-12-22
---

Consideriamo l'espansione librea di Joule:

![[Energia interna di un gas ideale 2023-12-22 12.30.07.excalidraw]]

Considerando le pareti adiatermane, avremo inizialmente $p_{1},V_{1},T_{1}$, e nella condizione finale $p_{2},V_{2},T_{2}$.
Possiamo fare le seguenti considerazioni

- Il gas non compie lavoro, infatti l'espansione avviene nel vuoto
- La pressione del gas iniziale e finale sono differenti.
- Il volume del gas iniziale e finale sono differenti
- La tempreatura del gas è costante
- Non viene scambiato calore

Dal [[Primo principio della termodinamica]]
$$ \Delta U = Q - \mathcal{L} = 0 $$

Ossia **non c'è variazione di [[energia interna]]**


### È analogo in forma differenziale:

$$dU = \delta Q - \delta L$$
L'energia interna può dipendere da 2 delle 3 coordinate termodinamiche, in quanto la terza è comunque legata alle altre due dall'[[equazione di stato dei gas perfetti]], prendiamo arbitrariamente termperatura e volume:
$$ U = U(T,V) $$
Differenziando abbiamo
$$ dU = \left( \frac{\delta U}{dT} \right)_{V} \d T + \left( \frac{\delta U}{\delta V} \right)_{T}\d V $$
Nell'espansione libera abbiamo che $dT = 0$ e $dU = 0$:
$$ 0 = 0 + \underbrace{ \left( \frac{\delta U}{\delta V} \right)_{T} }_{ =0 }\underbrace{ dV }_{ \neq 0 } $$
Essendo $dV$ non nulla, ne segue che $\dfrac{\delta U}{\delta V} = 0$.
l'unica dipendenza dell'energia interna sarà quindi della temperatura: $U=U(T)$

![[Energia interna di un gas ideale 2023-12-22 12.56.09.excalidraw]]

per calcolare $\Delta U = U_{B} - U_{A}$ dobbiam oconsiderare la seguente sequenza di trasformazioni:
- Una trasformazione isoterma da A a C con volume intermedio C uguale al volume finale dello stato B
- Una isocora tra C e B

Avremo quindi:
$$ \begin{align}
&\Delta U_{AC} = U_{C} - U_{A} = 0\quad T = \cost, \text{A e C isoterme} \\
&\Delta U_{CB} = U_{B} - U_{C} = Q_{CB} - \underbrace{ \mathcal{L}_{CB } }_{ =0, \text{isocora} }
\end{align} $$

quindi
$$ \Delta U_{AB} = \Delta U_{AC} + \Delta U_{CB} = 0 + (Q_{CB})_{V =\text{cost}} = n\int _{T_{C} = T_{A}}^{T_{B}} \! C_{v}\, \mathrm{d}T  $$

Considerando il calore molare costante abbiamo
$$ \Delta U_{AB} = nc_{v} (T_{B} - T_{A}) $$
Possiamo infine generalizzare (con $c_v$ costante)
$$ \begin{align}
\Delta U &= nc_{V}\Delta T \\
dU &= nc_{V} dT
\end{align} $$

# ANKI

```anki
id: null
deck: Fisica
---
Energia interna di un gas in una trasformazione a temperatura costante
===
Nel caso di trasformazione a temperatura costante non c'è variazione di energia interna
```


```anki
id: null
deck: Fisica
---
Energia interna di un gas in una una trasformazione a volume costante
===
La variazione di energia interna dipende unicamente dalla variazione del calore
```


```anki
id: null
deck: Fisica
---
Energia interna di un gas ideale a calore molare costante
===
Con $c_V$ costante abbiamo
$$ \Delta U = nc_V \Delta T $$
$$ dU = nc_VdT $$
```
