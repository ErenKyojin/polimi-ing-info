---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Si definisce trasformazione adiabatica una [[trasformazioni termodinamiche|trasformazione termodinamica]] senza alcuna interazione termica (ossia senza scambio di calore)


### Lavoro adiabatico 
Consideriamo un sistema termodinamico isolato termicamente, quindi che non può scambiare calore, che passa dallo stato A allo stato B.
In queste condizioni il lavoro $\mathcal{L}$ non dipende dalla trasformazioni, ma solo dagli stati A e B.
Convenzionalmente
- $\mathcal{L} > 0$ lavoro eseguito dal sistema
- $\mathcal{L} < 0$ lavoro fornito al sistema
Possiamo definire una funzione chedipende dallo stato del sistema termodinamico, quindi una funzione di stato. La differenzza di questa funzione di stato è legata al lavoro durante la trasformazione adiabatica. Questa funzione prende il nome di [[polimi-ing-info/Fisica/Termodinamica/energia interna]] $U$ del sistema

Tipicamente durante una trasformazione adiabatica, la [[temperatura]] del sistema cambia:
$$ \Delta T = T_{p} - T_{i} \propto \mathcal{L}_{\text{adiabatica}} $$
Si immagini un esperimento in cui ci isa solo interazione termica che avviene tra i medesimi stati $A$ e $B$ precedenti, quindi con medesimo $\Delta T$, avremo:
$$ Q \propto \Delta T$$
La variazione di energia interna U
$$ \Delta U = Q $$
Possiamo quindi affermare che
$$ Q = - \mathcal{L}_{\text{adiabatico}} $$

Dimostrando in generale l'equivalenza tra il calore ed il lavoro

### Trasformazione adiabatica reversibile
Consideriamo una trasformazione reversibile tale che
$$ \delta Q = 0 \implies dU = \delta Q - \delta \mathcal{L} \implies dU = - \delta \mathcal{L} $$

Possiamo sostituire
$$ nc_{V}dT = -pdV $$ 
e dall'equazione di stato dei gas perfetti abbiamo:
$$ nc_{V}dT = -\frac{nRT}{V}dV $$
$$ \frac{dT}{T} = -\frac{R}{c_{V}} \frac{dV}{V} $$

integrando a sinistra per la temperatura e a destra per il volume:
$$ \ln(T) = -\frac{R}{c_{V}} \ln(V) + \cost $$
eleviamo tutto ad esponenziale:
$$ T = e^{-R/c_{v} \ln(V) + C} \implies T = V^{-R/c_{V}}e^{\cost}$$
che possiamo scrivere come
$$ TV^{R/c_{V}} = \cost $$

$$ \frac{R}{c_{V}} = \frac{c_{p} - c_{V}}{c_{V}} = \frac{c_{p}}{c_{V}} - 1 = \gamma - 1; \gamma > 1 $$
quindi
$$ TV^{\gamma - 1} = \cost $$
applicando l'equazione di stato dei gas perfetti:
$$\begin{align}
 \left( \frac{pV}{nR} \right)V^{\gamma-1} &= \cost  \\
pV^{\gamma} &= \cost \\
pT^{\gamma/(1-\gamma)}&=\cost
\end{align}$$
# ANKI

```anki
deck: Fisica
---
trasformazione adiabatica
===

Si definisce trasformazione adiabatica una trasformazione termodinamica senza alcuna interazione termica, ossia con calore scambiato nullo
```


```anki
deck: Fisica
---
Lavoro adiabatico
===
Consideriamo un sistema termodinamico isolato termicamente, il lavoro dipende solo dagli stati iniziale e finale
convenzionalmente definiamo
- $\mathcal{L} > 0$ lavoro eseguito dal sistema
- $\mathcal{L} < 0$ lavoro fornito al sistema
definita l'energia interna U del sistema possiamo affermare che
$$ Q = - \mathcal{L}_{\text{adiabatico}} $$
```


```anki
deck: Fisica
---
Relazione tra coordinate termodinamiche per una trasformazione adiabatica
===
$$ TV^{\gamma - 1} = \cost $$
$$  pV^{\gamma} = \cost$$
$$ pT^{\gamma /(1 - \gamma)}=  \cost $$
```
