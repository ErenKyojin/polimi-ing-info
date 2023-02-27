
$(\Omega,\mathcal{F},P)$, $E \in \mathcal{F}$ valutiamo la sua [[probabilità]]
1. Non so nulla: $P(E) = P(E|\Omega)$
2. Nello scenario $F$ con $P(F) > 0$ $P(E|F)$
3. in $F^C$ con $P(F^C)>0$ $P(E|F^C)$
4. con diversi scenario C $P(E|C)$

Ma se $E,F$ non interagiscono, cioè se il verificarsi di $F$ non rende piú o meno probabile $E$ allora è naturale avere:
 $$
P(E) = P(E | F) = P(E | F^{C})
$$
In questo caso $E,F$ sono detti indipendenti


>[!def]
>$E,F$ eventi di $(\Omega,\mathcal{F},P)$ sono indipendenti se
> $$
> P(E \cap F) = P(E)P(F)
>$$



1. Se $E,F$ sono indipendenti allora $$
P(E \cup F) = P(E) + P(F) - P(E)P(F) 
$$
2. Simmetria nella definizione
3. Questa definizione vale anche se $P(E) = 0$ o $P(F)=0$

4. $E,F$ sono indipendenti, $E,F^C$? Sí, infatti: $$
\begin{align}
P(E \cap F^C) &= P(E) - P(E \cap F) = P(E) - P(E)P(F) = \\
&= P(E)[1 - P(F)] = P(E)P(F^C)
\end{align}$$
Cioè $E,F$ indipendenti $\iff E^C,F^C \iff E^C,F \text{ ind} \iff F^C,E \text{ ind}$ 
5. Se $E,F$