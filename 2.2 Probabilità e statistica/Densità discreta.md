---
aliases: 
creation date: 2024-03-02
---

>[!def]
>Data una variabile aleatoria discreta $x$, possiamo definire la densità discreta $p(a)$ di $X$ come
>$$ p(a) = P \{ X = a \} $$


>[!example]
>Dato un dado a 6 facce bilanciato, sia $X$ la variabile aleatoria che indica il valore del lancio. La densità discreta del valore 4 è
>$$ p(4) = P\{x = 4\} = \frac{1}{6}$$


## Densità discreta di un vettore aleatorio
>[!def]
>Sia $\mathbf{X}$ [[vettore aleatorio]] discreto, è detta **densità discreta** di $\mathbf{X}$ la funzione
>$$p_{\mathbf{X}}(\mathbf{x}) = p(X_{1}=x_{1},X_{2} = x_{2},\dots,X_{n}=x_{n})$$

>[!proposition]
>Se $p_{\mathbf{X}}$ è densità di un vettore aleatorio $n-$dimensionale $\mathbf{X}$ tale che, dato un insieme $S$ al più numerabile, $P(\mathbf{X} \in S) = 1$ allora
>- $0 \leq p_{\mathbf{X}}(\mathbf{x}) \leq 1$ per ogni $\mathbf{x} \in \mathbb{R}^n$
>- $p_{\mathbf{X}}(\mathbf{x}) =0$ per ogni $\mathbf{x} \notin S$
>- $\sum_{\mathbf{x} \in S}p_{\mathbf{X}}(\mathbf{x})=1$
>- considerando $F_{X}$ funzione di ripartizione di $\mathbf{X}$
>  $$ F_{\mathbf{X}}(\mathbf{x})= \sum_{\mathbf{y} \in S : \mathbf{y} \leq \mathbf{x}} p(\mathbf{x})(\mathbf{y})\quad\forall \mathbf{x} \in \mathbb{R}^n $$
>- se $B \subseteq \mathbb{R}^n$
>  $$ P(\mathbf{X} \in B) = \sum_{\mathbf{x} \in B \cap S }p_{\mathbf{X}}(\mathbf{x}) $$

Questa proposizione, in particolare l'ultimo punto, è utile al calcolo delle densità marginali, ossia le densità dei componenti $X_{i}$ del vettore aleatorio.
$$p_{X_{i}}(x_{i}) = P(X_{1} \in \mathbb{R}, X_{2} \in \mathbb{R},\dots, X_{i} = x_{i} \dots)=p(X \in B)$$
dove $B=\{ x_{i} \} \times \mathbb{R}^{n-1}$


>[!proposition]
>Le componenti di un vettore aleatorio discreto $X=(X_{1},\dots,X_{n})$sono indipendenti se la densità discreta coincide con il prodotto delle densità marginali
>$$ p_{\mathbf{X}} = p_{X_{1}} P_{x_{2}}\dots p_{X_{n}} $$