
Stima della variazione dell'intera popolazione $\sigma^2(x)$ attraverso lo stimatore
$$ \begin{align}
s^2(X) = s^2(X_{i}) := \frac{1}{n-1}\sum_{i=1}^n (X_{i}-\bar{X})^2 \\
\sigma^2(X) =\sigma_{x}^2 := E[(X-\mu)^2] = s^2(X) = s^2(X_{i})
\end{align} $$

$\frac{1}{n-1}$ in quanto la variazione standard di un solo dato è 0.

Definita la varianza campionaria possiamo definire la [[deviazione standard campionaria]]
#### Alternative di calcolo per la varianza
La varianza campionaria si può anche calcolare come la somma dei singoli valori elevati al quadrato meno $n$ volte il valor medio al quadrato, il tutto diviso $n-1$:
$$ S^2 = \frac{1}{n-1} \sum_{i=1}^n (X_{i} - \bar{X})^2 = \frac{1}{n-1}\left[ \left( \sum_{k=1}^n X_{k}^2 \right) - n\bar{X}^2\right] $$


#### gradi di libertà della stima
Il denominatore $n-1 = \nu$ è il numero di gradi di libertà.
Vediamo 3 motivi validi per cui è opportuno dividere la somma degli $n$ scarti quadratici che compre nell'espressione della varianza campionaria per $n-1$ e non per $n$

1. Non ha senso calcolare la varianza per un campione che contenga solo un dato, in quel caso otterremo una forma indefinita $0 / 0$
2. Nella formula di $s^2(x)$ calcoliamo gli scarti quadratici della media campionaria $\bar{x}$ nota e non dalla media della popolazione (ignota). Ne segue che degli $n$ scarti quadratici solo $n-1$ sono tra loro indipendenti
3. Si dimostra che il valore atteso dalla varianza campionaria con $n-1$ al denominatore è la varianza della popolazione
   $$ E \{ S^2 \} = \sigma^2 $$
