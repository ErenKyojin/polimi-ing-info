---
aliases: 
creation date: 2023-04-05 10:42
modification date: 2023-04-05 10:42
---

Nel [[moto relativo]] la velocità di trascinamento è la velocità che il punto dello spazio occupato dal nostro [[punto materiale]] ha, nel sistema relativo, rispetto a quello fisso, ossia la velocità che avrebbe se fosse fermo rispetto al sistema di riferimento mobile.


## Calcolo della velocità
Abbiamo visto che, in generale, la velocità di trascinamento varia da punto a punto del sistema mobile, vediamo ora come è possibile calcolarla, conoscendo le componenti di traslazione e di rotazione del [[moto di trascinamento]]. A tale scopo definiamo tre [[GAL/vettori|vettori]] posizione:
- $\vec{r}_{a} \equiv \overrightarrow{OP}$ vettore posizione assoluto
- $\vec{r}_{r} = \overrightarrow{O'P}$ vettore posizione relativo
- $\vec{r}_{O'}\equiv\overrightarrow{OO'}$ vettore posizione assoluto dell'origine $O'$ del sistema mobile
per i quali valgono, come diretta conseguenza della definizione, le relazioni:
$$
\vec{r}_{a} = \vec{r}_{r} + \vec{r}_{O'}\quad;\quad d\vec{r}_{a} = d\vec{r}_{r} + d\vec{r}_{O'}\quad ;\quad \Delta \vec{r}_{a} = \Delta \vec{r}_{r} + \Delta \vec{r}_{O'}
$$
Osserviamo che mentre è evidente che la variazione del vettore posizione assoluto coincida con lo spostamento assoluto sopra definito, la variazione del vettore posizione di $O'$ non coincide, in generale, con lo spostamento di trascinamento, e la variazione del vettore posizione relativo non coincide con lo spostamento relativo, cioè in generale:
- $d\vec{r}_{a} = d\vec{s}_{a} \implies \vec{v}_{a} \equiv \dfrac{d\vec{s}_{a}}{dt} = \dfrac{d\vec{r}_{a}}{dt}$
- $d\vec{r}_{r} \neq d\vec{s}_{r} \implies \vec{v}_{r} = \dfrac{d\vec{s}_{r}}{dt} \neq \dfrac{d\vec{r}_{r}}{dt}$
- $d\vec{r}_{O'} \neq d\vec{s}_{t} \implies \vec{v}_{t} \equiv \dfrac{d\vec{s}_{t}}{dt} \neq \dfrac{d\vec{r}_{O'}}{dt}$
Se allora esplicitiamo il calcolo della [[velocità assoluta]] come [[derivata]] del vettore posizione assoluto otteniamo:
$$
\begin{align}
\vec{v}_{a} &= \frac{d\vec{r}_{a}}{dt} = \frac{d(\vec{r}_{r} + \vec{r}_{O'})}{dt} = \frac{d}{dt}(x'\hat{u}_{x'} + y'\hat{y}_{y} + z'\hat{u}_{z}) + \frac{d\vec{r}_{O'}}{dt} = \\
&=  \left( \frac{dx'}{dt}\hat{u}_{x'} + \frac{dy'}{dt}\hat{u}_{y'} + \frac{dz'}{dt}\hat{u}_{z}     \right) + \left( x' \frac{d\hat{u}_{x'}}{dt}   + y'\frac{d\hat{u}_{y'}}{dt} + z' \frac{du}{dt} \right)
\end{align}
$$