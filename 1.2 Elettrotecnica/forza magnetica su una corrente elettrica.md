---
aliases: 
creation date: 2023-07-05 14:39
modification date: 2023-07-05 14:39
---

Dato un conduttore in cui vi è presente un campo di  densità di corrente elletrica $\bar{\jmath}$, sia immerso in un campo magnetico. La forza su ogni carica in moto è pari a $\bar{F} = q (\bar{v} \times \bar{B})$, se vi sono $n$ particelle per unità di volume e la forza $\bar{f}$ per unità di volume è
$$ \bar{f} = nq(\bar{v} \times \bar{B}) $$
Su un piccolo volume $dV$ la forza totale sarà
$$ \bar{\d F} = \bar{f} \d V = \bar{\jmath} \times \bar{B} \d V $$
E la forza totale su un volume finito $V$ si ottiene integrando questa espressione su tutto il volume, cioè
$$ \bar{F} = \int_{V}   \!\bar{\jmath} \times \, \bar{B} \mathrm{d}V  $$
Se vi è corrente in un filo di lunghezza $L$, un elemento di volume $\d V$ è dato da $S\d l$ ed il vettore densità di corrente $\bar{\jmath}$ ha la direzione del versore $\hat{u}_{T}$ tangente all'asse del filamento. Pertanto assumendo l'intensità di corrente $I$ lungo il filo uguale in tutti i punti del conduttore l'equazione dà
$$ \bar{F} = \int _{V} \! \jmath\hat{u}_{T} \times  \, \bar{B}S \mathrm{d}l  = \int _{V} \! \underbrace{ \jmath S }_{ I } \hat{u}_{T} \times \, \bar{B}\mathrm{d}l = I \int _{L} \hat{u}_{T} \times \! \, \bar{B}\mathrm{d}l  $$

>[!example]
>Nel caso di conduttore rettilineo e di campo magnetico $\bar{B}$ costante l'intensità della forza è $F = ILB\sin \theta$ mentre la direzione è perpendicolare al piano definito da $\hat{u}_{T}$ e $\bar{B}$ 

>[!remark]
>Data una spira chiusa (consideriamola rettangolare) in cui scorre corrente, con la normale (orientata con la regola della mano destra rispetto alla corrente che scorre nella spira) al piano della spira orientata che forma un angolo $\theta$ con la direzione del campo, mentre due dei quattro lati del circuito sono perpendicolari al campo stesso, le forze sui due lati perpendicolari generano una coppia, mentre le forze sugli altri due lati non producono nessuna coppia. Quindi la spira tende ad autoorientarsi perpendicolarmente a $\bar{B}$

[[legge di Ampère-Laplace]] 