---
aliases: occorrenze
creation date: 2023-05-10 09:56
modification date: 2023-05-10 09:56
---

> [!def]
> Una variabile può apparire piú volte in una formula ed una sua occorrenza si dice libera o vincolata a seconda di come è collocata rispetto ai [[quantificatori]] che quantificano la variabile in questione. Più precisamente diciamo che una occorrenza di una variabile $x$ è **llibera** se non è nel [[campo di azione]] di quantificatore che quantifichino $x$, altrimenti si dice **vincolata**. Pe convezione si dice vincolata anche l'occorrenza della variabile che compare nel quantificatore.



>[!esempio]
>Nella formula
>$$ \mathcal{A}_{2}^2(a,b) \lor \exists y \mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x)) \implies \forall x (\sim \mathcal{A}_{1}^2(f_{1}^2(x,ff_{2}^2(a,x)),b)\land \mathcal{A}_{2}^2(x,x)) $$
>Tutte le occorrenze di $y$ sono vincolate, la prima e la seconda occorrenza di $x$ sono libere e le altre sono vincolate.


>[!def]
>Un termine $t$ si dice **libero per una variabile** $x$ in una formula ben formata $\mathcal{A}$ se nessuna occorrenza libera di $x$ in $\mathcal{A}$ cade nel campo d'azione di un quantifiatore che quantifichi una variabile che compare in $t$.


>[!esempio]
>Data la formula
>$$\mathcal{A}_{2}^2(a,b) \lor \exists y \mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x)) \implies \forall x (\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)\land \mathcal{A}_{2}^2(x,x))$$
>Il termine $f_{2}^2(x,y)$ è libero per $y$, infatti in tutta la formula non ci sono occorrenze libere di $y$, ma non è libero per $x$ infatti la prima occorrenza di $x$ che è libera cade nel campo d'azione del quantificatore $\exists y$ che quantifica una variaible presente nel termine $f_{2}^2(x,y)$.

# ANKI

```anki
id: 1700212219095
deck: LeA
---
occorrenza di una variabile
===
Diciamo che una occorrenza di una variabile $x$ è **libera** se non è nel campo di azione di nessun quantificatore che quanitifchi $x$. Altrimenti si dice vincolata, si dice vincolata (per convenzione), l'occorrenza della variabile che compare nel quantificatore
```


```anki
id: 1700212221095
deck: LeA
---
termine libero per una variabile
===
Un termine $t$ si dice **libero per una variabile** $x$ in una formula ben formata $\mathcal{A}$ se nessuna occorrenza libera di $x$ in $\mathcal{A}$ cade nel campo d'azione di un quantificatore che quantifichi una variabile che compare in $t$
```
