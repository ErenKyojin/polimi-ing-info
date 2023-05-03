---
aliases: 
creation date: 2023-05-03 10:33
modification date: 2023-05-03 10:33
---

>[!def]
>Si dice interpretazione una [[Funzioni|funzione]] $v$: [[formule ben formate|f.b.f]] $\to \{ 0,1 \}$ che soddisfi le seguenti proprietà:
> - $v(\perp) = 0$
> - $v(\top) = 1$
> - $v(\sim \mathcal{A}) = 1 - v(\mathcal{A})$
> - $v(\mathcal{A \land B}) = \min(v(\mathcal{A}),v(\mathcal{B}))$
> - $v(\mathcal{A \lor B}) = \max(v(\mathcal{A}), v(\mathcal{B}))$
> - $v(\mathcal{A \implies B}) = \max(1 - v(\mathcal{A}), v(\mathcal{B}))$
> - $v(\mathcal{A \iff B}) = \min(\max(1 - v(\mathcal{A}), v(\mathcal{B})), \max(v(\mathcal{A}), 1 - v(\mathcal{B})))$

Fissare un interpretazione corrisponde a:
- Attribuire arbitrariamente un valore di verità ($1$ o $0$) a tutte le lettere enunciative (eccetto ai due simboli speciali $\perp$ e $\top$ che devono avere rispettivamente valori 0 o)

