---
aliases: sottoformula
creation date: 2023-05-03 09:38
modification date: 2023-05-03 09:38
---

> [!def]
> Definiamo come sottoformule di una formula $\mathcal{A}$, $\text{Stfm}(A)$:
> - Se $\mathcal{A}$ è lettera enunciativa, $\Stfm(A) = \{ A \}$
> - Se $\mathcal{A}$ è $\sim \mathcal{B}$, $\Stfm(A) = \{ A \} \cup \Stfm(\mathcal{B})$
> - Se $\mathcal{A}$ è $\mathcal{B \land C}$, $\mathcal{B \lor C}$, $\mathcal{B \implies C}$, $\mathcal{}$
> 

Nel [[linguaggio del primo ordine]]:
Data una formula $\mathcal{A}$ le sottoformula di $\mathcal{A}$, $\Stfm(\mathcal{A})$ sono cosí definiteL
- Se $\mathcal{A}$ è una formula atomica, $\Stfm(\mathcal{A}) = \{ \mathcal{A} \}$
- Se $\mathcal{A}$ è $\sim \mathcal{B}$ o $\forall x \mathcal{B}$ o $\exists x \mathcal{B}$, $\Stfm(\mathcal{A})=\{ \mathcal{A} \} \cup \Stfm(\mathcal{B})$
- Se $\mathcal{A}$ è $\mathcal{B} \land \mathcal{C}$, $mca$