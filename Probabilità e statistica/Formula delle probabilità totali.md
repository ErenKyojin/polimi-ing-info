>[!esempio]
>Lancio una moneta regolare e se esce testa lancio un dado regolare a 6 facce da 1 a 6, se escre croce lancio un dado con una faccia numerata 1, due facce numerate 2, e tre facce numeratre 3.
>
>L'evento è "Esce 2"
>
>Il lancio della moneta ci da due risultati:
>![[Probabilità totali.canvas]]
>
> $P(E) = P(E|T) P(T) + P(E|T^C)P(T^C) = P(E \cap T) + P(E \cap T^C)$
>
> %%grafico di intersezione%% 
> Abbiamo applicato e dimostrato la formula delle probabilità totali

>[!proposizione]
>Sia $(\Omega,\mathcal{F},P)$ uno spazio di probabilità e $F_{1},F_{2},\dots,F_{n} \in \mathcal{F}$ una partizione finita di $\Omega$, $\bigcup_{k=1}^n F_{k} = \Omega$ e $F_{h} \cap F_{k} = \varnothing$ per $h \neq k$. 
>$P(F_{k})>0$ per $k = 1,\dots,n$. Allora per ogni evento $E \in \mathcal{F}$ si ha
> $$
>P(E) = \sum_{k=1}^nP(E|F_{k})P(F_{k})
>$$
>Media (delle singole probabilità sui sottospazi) pesata con le probabilità degli scenari


Tornando all'esempio precedente, vogliamo capire la probabilità del risultato del lancio sapendo solo l'esito, ossia sapendo che il risultato è stato $2$, qual'è la probabilità della moneta:
1. $P(E) = \dots = 0.25 = \frac{1}{4} > 0$
2. $P(T|E) = \frac{P(T \cap E)}{P(E)} = 4(P(E|T)P(T)) = 4 \left( \frac{1}{6} \cdot\frac{1}{2} \right) = \frac{1}{3}$

Quindi la probabilità che sia uscità testa se il risultato è stato due è un terzo. 
[[Formula di Bayes]].