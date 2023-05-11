---
aliases: campo d'azione
creation date: 2023-05-10 09:58
modification date: 2023-05-10 09:58
---

> [!def]
> Data la formula che contenga un quantificatore, la [[sottoformule|sottoformula]] a cui quel quantificatore si riferisce è detta **campo di azione** del quantificatore (ovvero il campo di azione di un quantificatore è la sottoformula che corrisponde al sotto-[[albero di struttura]] che ha come radice il figlio del quantificatore).


>[!esempio]
>Nella formula
>$$ \mathcal{A}_{2}^2(a,b) \lor \exists y \mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x)) \implies \forall x (\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b) \land \mathcal{A}_{2}^2(x,x)) $$
>Il campo di azione di $\exists y$ è $\mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x))$, quello di $\forall x$ è $\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b) \land \mathcal{A}_{2}^2(x,x)$


