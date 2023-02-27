# Asintoto orizzontale
Si dice che $f$ ha un asintoto orizzontale di equazione $y = l$ con $l \in \mathbb R$ per $x \to +\infty$ oppure per $x\to-\infty$ se $\lim_{x\to+\infty}f(x) = l$ oppure $\lim_{x\to-\infty} f(x) = l$ rispettivamente.
Ogni situazione di [[Limite]] finito, all'infinito, è un asintoto orizzontale

>[!esempio]
>```desmos-graph
>y = \ln(x)
>```


# asintoto obliquo
Se una funzione presenta un [[Limite]] infinito all'infinito, c'è la possibilità, ma non la certezza, che esista una retta obliqua a cui il grafico della funzione si avvicina [[definitivamente]], in questo caso si parla di asintoto obliquo

>[!def]
>Una funzione $f(x)$ ha asintoto obliquo $y = mx+q$ con $m \neq 0, q \in \mathbb R$ per $x \to +\infty$ o $x \to -\infty$ se:
>
>$$\lim_{x\to+\infty (-\infty)}[f(x)-(mx+q)=0]$$

Una funzione $f(x)$ ammette asintoto obliquo per $x\to+\infty\Leftrightarrow$ valgono le seguenti condizioni:
1. Esiste finito
$$\lim_{x\to+\infty}\frac{f(x)}{x} = m \neq0$$
2. Esiste finito, con m calcolato al punto 1.	$$\lim_{x\to+\infty}[f(x)-mx=q]$$

Soddisfatti questi due punti l'equazione dell'asintoto è 
$$y = mx+q$$

# asintoto verticale
Si dice che $f$ ha un asintoto verticale di equazione $x = c(c\in\mathbb R)$ per $x\to c$ (Alternativamente per $x\to c^+$ o $x\to c^-$) se $\lim_{x\to c}f(x) = +\infty$ o $-\infty$ (Alternativamente accade per $x\to c^+$ o $x\to c^-$ rispettivamente).
Ogni situazione di limite infinito al finito corrisponde graficamente alla presenza di un asintoto verticale, ossia di una retta a cui il grafico si avvicina sempre di più

