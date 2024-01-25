---
aliases: rendimento di un 
creation date: 2023-12-22
---

>[!def]
>Si definisce rendimento di un ciclo termico
>$$ \eta = \frac{\mathcal{L}}{Q_{A}} = \frac{Q_{A} + Q_{C}}{Q_{A}} = 1+\frac{Q_{C}}{Q_{A}} = 1 - \frac{|Q_{C}|}{Q_{A}}$$

in un ciclo termico
$$ \mathcal{L} > 0 \implies Q>0 \implies Q_{A} \to |Q_{C}| $$

Quindi il rendimento di un [[ciclo termico]]
$$ 0 \leq \eta < 1 $$

Importante notare lo strettamente minore, è impossibile avere una macchina con rendimento unitario

## Rendimento di una macchina reversibile
Possiamo calcolare il rendimento di una macchina reversibile tra 2 sorgenti considerando il rendimento di una macchina reversibile qualsiasi, ad esempio considerndo il ciclo di carnot abbiamo
$$ \eta_{R} = 1 - \frac{T_{1}}{T_{2}} $$
con $[T_{1},] = [T_{2}] = K$

>[!dim]
> ```tikz
>\begin{document}
>\begin{tikzpicture}
>\draw[-latex](0,0) -- (0,4)node[left]{p};
>\draw[-latex](0,0) -- (4,0)node[right]{V};
>\node (D) at (1,1){$\bullet$};
>\node (B) at (3,2){$\bullet$};
>\node (A) at (.8,3){$\bullet$};
>\node (C) at (3.7,.7){$\bullet$};
>\node (T1) at (4.8,.5){$T_{1}$};
>\node (T2) at (4.3, 1.7){$T_{2}$};
>
>\node[above] at (A){A};
>\node[above] at (A){A};
>\end{tikzpicture}
>\end{document}
>```

# ANKI

```anki
id: 1705831177626
deck: Fisica
---
Rendimento di un ciclo termico
===
$$\eta = 1 - \frac{|Q_C|}{Q_A}$$

Il rendimento è sempre $0 \leq \eta < 1$, non può mai essere $=1$
```
