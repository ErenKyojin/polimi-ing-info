---
tags: review
---
>[!teorema]
>Sia $(\Omega,\mathcal{F},F)$ uno spazio di probabilità ed $F_{1},F_{2},\dots,F_{n} \in \mathcal{F}$ una partizione finita di $\Omega$ tale che $P(F_{k}) > 0$ per $k= 1,2,\dots,n$. Se $E \in \mathcal{F}$ è tale che $P(E)>0$ allora
> $$
>P(F_{h}|E) = \frac{P(E|F_{h})P(F_{h})}{\sum_{k=1}^n P(E|F_{k})P(F_{k})}\qquad h = 1,2,\dots,n
>
>$$
>
>>[!dim]
>>$P(F_{i}| E) = \dfrac{P(F_{i} \cap E)}{P(E)} = \dfrac{P(F_{i} \cap E)}{\sum P(E | F_{i})P(F_{i})}$ (per la [[Formula delle probabilità totali]]) =
>>= $\dfrac{P(E | F_{i})P(F_{i})}{\sum_{i} P(E | F_{i}) P(F_{i})}$
>>Quindi
>>$P(F_{i} \cap E) = P(E | F_{i})P(E)$

>[!esempio]
>Una moneta con due teste, ed una moneta con una testa ed una croce, sapendo che la moneta sul tavolo mostra testa, qual è la probabilità che sotto ci sia croce?
>- $N$ evento moneta normale
>- $T$ evento mostra testa
>
>$P(\text{"sotto croce"} | \text{"la moneta mostra testa"})$
>Quindi voglio calcolare $P(N|T) =\dfrac{P(T | N)P(N)}{P(T|N)P(N) + P(T|N^C)P(N^C)} = \dfrac{\frac{1}{2} \cdot\frac{1}{2}}{\frac{1}{2} \frac{1}{2} + 1 \cdot \frac{1}{2}}=\dfrac{1}{3}$

A cosa serve la formula di Bayes
- $F_{1},F_{2},\dots,F_{n}$ sono possibili cause esaustive di un fenomeno di interesse. Ho una idea iniziale su $F_{1},F_{2,}\dots, F_{n}$ che traduco in termini di $P(F_{1}),P(F_{2}),\dots,P(F_{n})$. Ciascuna causa è plausibile per cui $P(F_{i}) > 0\quad\forall i$
#todo 

In generale server per "aggiornare" una probabilità ottenendo nuove informazioni riguardo ad essa
