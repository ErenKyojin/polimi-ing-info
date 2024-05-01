---
aliases: 
creation date: 2024-03-11
---

Una funzione di una variabile aleatoria è a sua volta una [[variabile aleatoria]].

Data una variabile aleatoria di cui conosciamo la distribuzione, vogliamo determinare quella di una sua funzione

>[!esempio]
>Sia $X$ variabile aleatoria uniforme, sia $Y$ una sua funzione tale che $Y = |X|$:
>$$ F_{Y}(t) = P \{ Y \leq t \} = P\{ |X| \leq t \}= F_{X}(y) - F_{X}(-y)$$
>
>Derivando per la densits
>$$ f_{Y}(t) = f_{X}(t) + F_{X}(-t) $$


>[!theorem]
>Data $X$ variabile aleatoria continua con densiøà $f_{X}$. Data $g(x)$ funzione monotona derivabile con continuità, allora la variabile aleatoria $Y = g(X)$ è continua e la sua densità è:
>$$ f_{Y}(y) = \begin{cases}
f_{X}[g^{-1}(y)]\left| \frac{d}{dy}g^{-1}(y) \right| &\text{se } \exists x :y = g(x) \\
0 &\text{se } \forall x,\ \ y \neq g(x)
\end{cases} $$