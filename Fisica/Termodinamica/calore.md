---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

>Quando un sistema passa da $T_{1}$ a $T_{2}$ il calore scambiato si può scrivere come
>$$ Q = \int _{T_{1}}^{T_{2}} \! \, \mathrm{\delta}Q = \int _{T_{1}}^{T_{2}} \!mc(T) \, \mathrm{d}T = m \int_{T_{1}}^{T_{2}}  \! c(T)\, \mathrm{d}T    $$
>Se possiamo considerarlo costante, la relazione diventa
>$$ Q = mc(T_{2} - T_{1}) = mc\Delta T $$
>Il calore può esser emisurato in [[calorie]]

^d411f6

# Calore durante una trasformazione
##### [[trasformazioni termodinamiche reversibili|trasformazione reversibile]]
$$\begin{align}
 dU &= \delta Q - \delta \mathcal{L} \\
nc_{v}dT &= \delta Q - pdV \\
\delta Q &=nc_{V}dt + pdV
\end{align} $$

##### [[Trasformazione isocora]]
$$ (\delta Q)_{V} = nc_{V}dT $$

##### [[Trasformazione isobara]]
$$\begin{align}
 (\delta Q)_{p} &= nc_{V}dT + pdV \\
&=nc_{V}dT + nRdT \\
&=n(c_{V} + R)dT
\end{align}$$

notiamo che dalla definizione di calore molare a pressione costante abbiamo $(\delta Q)_{p} = nc_{p}dT$.
$$n(c_{V} + R) = dT = nc_{p}dT$$
$$ c_{p}= c_{V} + R $$
quest'ultima è detta [[relazione di Mayer]]


# ANKI

```anki
id: 1705511617551
deck: Fisica
---
Calore
===
Quando un sistema passa da $T_1$ a $T_2$ possiamo scrivere
$$ Q = \int_{T_1}^{T_2} \! c(T) \, \mathrm{d}T $$
Se possiamo considerarlo costante, diventa
$$ Q = mc(T_2 - T_1) = mc\Delta t $$
Si può misurare in calorie
```


```anki
id: 1705511621625
deck: Fisica
---
Calore in una trasformazione reversibile
===
$$ \delta Q = nc_Vdt + pdV $$
```


```anki
id: 1705511624751
deck: Fisica
---
Calore in una trasformazione isocora
===
$$ (\partial Q)_V = nc_Vdt $$
```


```anki
id: 1705511627576
deck: Fisica
---
Calore in una trasformazione isobara
===
$$ (\delta Q)_p = n(c_V + R)dT = nc_pdT $$
```
