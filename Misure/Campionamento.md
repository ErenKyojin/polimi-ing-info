---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

```mermaid
graph LR
	vt(("v(t)")) --> csh[campionatore\n sample & hold] --> vtk(("v(t_k)")) --> qia[quantificatore\n in ampiezza] --> vdtk(("v_d(t_k)"))

```

Col campionatore sample & hold abbiamo la discretizzazione nel tempo
Col quantizzatore in ampiezza c'è una discretizzazinoe in ampiezza

>[!oss]
>Sempre in quest'ordine!

##### Discretizzazione nel tempo
Il segnale campionato si ottiene idealmente prelevando campioni in un tempo infinitesimo, in realtà occorre un tempo finito $(T_{W}) \neq 0$ per prelevare da $v(t)$ il segnale campionato $v(t_{k})$ e per quantizzarlo

>[!esempio]
>Un segnale di tensione $v(t) = x(t)$ è reale e continuo.
>
>Ipotizziamo di lavorare con uno spettro del segnale limitato: trasformata $X(f)$ tale che $X(f) = 0$ per $|f| = f_{\max}$
>
>Se il segnale non ha una banda limitata a $f_{\max}$ possiamo usare un filtro passa basso.
>
>In un [[campionamento ideale]] il segnale è moltiplicato per un treno di [[delta di
dirac]] $h(t) = \delta(t)$. 
>
>In un [[campionamento reale]] il segnale è moltiplicato per un treno di rettangoli $h(t) = \text{rect}(t / T_{w})$ in cui il singolo rettangolo ha durata finita $T_{W}$