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