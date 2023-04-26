
>[!def]
>Una relazione $\mathfrak{R}$ è di equivalenza se gode delle seguenti proprietà:
>- Riflessiva: $\forall a \in A\qquad a \sim a$
>- Simmetrica: $\forall a,b \in A$ se $a \sim b \Rightarrow b \sim a$
>- Transitiva: $\forall a,b,c \in A$ se $a \sim b$ e $b \sim c \Rightarrow a \sim c$

Una relazionedi equivalenza divide un insieme in [[classi di equivalenza]]

>[!esempio] [[Geometria e algebra lineare/Numeri razionali]]
>$A = \mathbb{Z} \times (\mathbb{Z} \setminus \lbrace 0 \rbrace)$ con $\mathbb{Z} = \lbrace ... -1, 0, 1, ... \rbrace$
>$$\begin{align}
>
>
>&\Rightarrow \mathfrak{R} = \lbrace\left((a,b),(c,d)\right) \in A \times A : ad = bc \rbrace \\
>&(c,d) = \left[\frac{c}{d}\right] = \frac{c}{d} = \lbrace(c',d') \in A : cd' = c'd\rbrace \\
>\\
>&\text{se } c = 0\qquad 0 = [(0,d)] = \lbrace(0,d') \in A : d' \in \mathbb{Z}\rbrace \\
>&\text{se } c \neq 0\qquad [(c,d)] = \lbrace(c',d') \in A | \exists m \in \mathbb{Z} : \begin{cases}
>c = mc' \\
>d = md'
>\end{cases}
>\text{  oppure}
>\begin{cases}
>c' = mc  \\
>d' = md
>\end{cases}
>\rbrace
>\end{align}
>$$
>
>$$\Rightarrow [(3,2)] = \left[\frac{3}{2}\right] = \frac{3}{2} = \left\lbrace\frac{6}{4}, \frac{-6}{-4}, \frac{9}{6},...\right\rbrace$$

