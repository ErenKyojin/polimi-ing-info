
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



> [!oss]
> 1. Se $E,F$ sono indipendenti allora $$
> P(E \cup F) = P(E) + P(F) - P(E)P(F) 
> $$
> 2. Simmetria nella definizione
> 3. Questa definizione vale anche se $P(E) = 0$ o $P(F)=0$
> 
> 4. $E,F$ sono indipendenti, $E,F^C$? Sí, infatti: $$
> \begin{align}
> P(E \cap F^C) &= P(E) - P(E \cap F) = P(E) - P(E)P(F) = \\
> &= P(E)[1 - P(F)] = P(E)P(F^C)
> \end{align}$$
> Cioè $E,F$ indipendenti $\iff E^C,F^C \iff E^C,F \text{ ind} \iff F^C,E \text{ ind}$ 
> 5. Se $E,F$ sono indipendenti e $P(F) > 0, P(E) > 0$, allora 
>    $$
> P(E | F) = \frac{P(E \cap F)}{P(F)} = \frac{P(E)\cancel{ P(F) }}{\cancel{ P(F) }} = P(E)
> $$
> allora
> $$
> P(F|E) = \frac{P(E|F)P(F)}{P(E)} = \frac{P(E)\cancel{ P(F) }}{\cancel{ P(E) }} = P(F)
> $$
> quindi
> $$
> P(E \cap F) = P(F | E)P(E) = P(F)P(E)
> $$
> Quindi $E,F$ con $P(E) > 0, P(F)>0$ sono indipendenti $\iff$ $P(E|F) = P(E) \iff P(F|E) = P(F)$



Se abbiamo tre eventi $A,B,C$ quando questi sono indipendenti?
1. Sono indipendenti a coppie:
   $$
\begin{align}
P(A \cap B) = P(A)P(B) \\
P(B \cap C) = P(B)P(C) \\
P(A \cap C) = P(A)P(C)
\end{align}
$$
2. $P(A \cap B \cap C) = P(A)P(B)P(C)$

>[!warning]
>attenzione $a \cancel{ \implies } b$ ne $b \implies a$
>Se $A,B$ sono indipendenti e $B,C$ sono indipendenti allora $A$ e $C$ sono indipendenti? No
>Se $A,B,C$ sono indipendenti allora
> $$\begin{align}
>&P(A \cap B | C^C)=P(A)P(B) \\
>&P(A \cap B| \underbrace{ B \cap C}_{ NO }) = P(A)P(B)
>\end{align}
>$$
>B si è verificato


## Indipendenza condizionale
$A,B,F$ con $P(F) > 0$

>[!def]
>DIco che $A,B$ sono condizionalmente indipendenti dato $F$ se $A,B$ sono indipendenti rispetto alla [[probabilità condizionata]]. 
> $$
> P(F) = \left[ \frac{P(A\cap F)}{P(F)} \right] 
>$$
>Cioè $P(A \cap B | F) = P(A|F)P(B|F)$


>[!oss]
>Se $A,B$ sono indipendenti condizionalmente ad $F$ allora $A,B$ sono indipendenti? Non è detto

Se $A,B$ sono indipendenti $\implies A,B$ condizionalmente indipendenti dato un $F$.
Ma se la terna $A,B,F$ sono indipendenti valgono le implicazioni.



>[!esempio]
>