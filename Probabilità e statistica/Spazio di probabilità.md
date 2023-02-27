>[!def]
>$P : \mathcal{F} \to \mathbb{R}$
>Sia $\Omega$ uno [[spazio campionario]] probabilizzabile. Una probabilità $P$ su $(\Omega,\mathcal{F})$ è una funzione $P : \mathcal{F} \mapsto \mathbb{R}$ che soddisfa i seguenti assiomi
>1. ad ogni [[evento]] associa un numero positivo 
>   $P(A) \geq 0$
>2. All'evento certo associa 1 
>   $P(\Omega)=1$
>3. Se $E_{1},E_{2},\dots$ sono eventi di $\mathcal{F}$ a due a due incompatibili, allora la probabilità che almeno uno di essi si verifichi è la somma delle loro propbabilità
>   $E_{i} \cap E_{j} \neq \varnothing \forall i \neq j\qquad \implies P\left( \bigcup_{1}^\infty E_{k} \right) = \sum_{k=1}^{\infty}P(E_{k})$


>[!oss]
>La probabilità dell'evento impossibile deriva da questi assiomi, **non ne fa parte**

da questi assiomi derivano le [[regole di calcolo della probabilità]]


>[!oss]
>$P_{F}(A \cup B) = P_{F}(A) + P_{F}(B) - P_{F}(A \cap B)$
>$P_{F}(A^C) = 1 - P_{F}(A)$
>$\cancel{ P_{F^C}(A) = 1 - P_{F}(A) }$ se cambi $F$ hai un'altra legge di [[probabilità]]



