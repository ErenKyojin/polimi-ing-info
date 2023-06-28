---
aliases: 
creation date: 2023-05-31 15:37
modification date: 2023-05-31 15:37
---

Data una superficie aperta $S$ identifichiamo il suo bordo $\gamma$ e decidiamo arbitrariamente di percorrerlo in senso antiorario. Il verso di percorrenza di $\gamma$ fissa il verso del [[versore]] $\hat{u}_{N}$ normale alla superficie $S$ in ogni suo punto in base alla regola del cavatappi.
Presa la generica areola piana $\d S$, $\vartheta$ è l'angolo fra $\hat{u}_{N}$ (versore perpendicolare a $\d S$) e $\bar{A}$ (il [[Elettrotecnica/campo|campo]] vettoriale di cui voglio definire il flusso $\Phi_{S}(\bar{A})$ attraverso $S$) sul piano individuato dai 2 [[Geometria e algebra lineare/vettori|vettori]]. In modo approssimato, considerando $\bar{A}$ costante e pari ad $\bar{A}_{k}$ su tutte le areole piane $\d S_{k} (k = 1,2,\dots)$ che possono essere individuate su $S$ (ho quindi approssimato $S$ con una superficie piana a tratti), si può scrivere $\Phi_{S}(\bar{A}) \approx \sum_{k} A_{k} \cos \vartheta_{k} \d S_{k}$. Passando quindi al [[limite]] in cui le areole vengono assunte infinitesime possiamo scrivere
$$ \Phi_{S}(\bar{A}) = \int _{S} \!\bar{A}\cdot \, \mathrm{d}S\hat{u}_{N}  $$
