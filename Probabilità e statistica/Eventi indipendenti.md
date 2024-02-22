
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
>

>[!teorema]
>$P(E | F) = P(E)$
>>[!dim] 5\.
>>
>>$P(E|F) = \frac{P(E \cap F)}{P(F)}$
>>$P(E |F) = P(E) \iff \frac{P(E \cap F)}{P(F)}=P(E) \iff P(E  \cap F) = P(E)P(F) \iff$ E ed F indipendenti
>>$\CVD$



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
>


>[!esempio]
>Lancio di due monete equilibrate ($q = \frac{1}{2}$)
>$T_{i}$ esce testa all'$i$-esimo lancio
>$E$ = esce la stessa faccia nei due lanci
>
>Mostro che T ed E sono indipendenti
>$P(T_{1} \cap E) = P(T_{1} \cap T_{2}) = P(T_{1})P(T_{2}) = \left( \frac{1}{2} \right)^2$
>$P(E) = P((T_{1} \cap T_{2}) \cup (T_{1}^C \cap T_{2}^C))$ eventi incompatibili $\implies$ terzo assioma 
>$P(E)=P(T_{1} \cap T_{2}) + P(T_{1}^C \cap T_{2}^C) = \left( \frac{1}{2 }\right)^2 + \left( \frac{1}{2} \right)^2 = \frac{1}{2}$
>$P(T_{1})P(E) = \frac{1}{2} \cdot \frac{1}{2} =P(T_{1} \cap E)$
>$\iff T_{1}$ ed $E$ sono indipendenti

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

>[!warning] Incompatibilità vs indipendenza
>Sono "opposte"
>
>> [!esempio]
> >prendo una persona a caso
> >$E$ è un maschio
> >$F$ è una femmina
> >$E \cap F = \varnothing \implies$ incompatibili
> >$P(F | E) = 0 \neq 50\% = P(F) \implies$ NON sono indipendenti

 Se so che la coppia $(E,F)$ è una coppia di eventi indipendenti sono indipendenti anche le coppie $(E, F^C)$ o $(E^C, F)$ o $(E^C,F^C)$? Sì
 
> [!proposizione]
> $(E,F)$ indipendenti $\iff$ $(E^C,F)$ sono indipendenti
> 
>>[!dim]
>> $P(E \cap F) = P(E)P(F)$ ipotesi
>> ##### dim$(\implies)$
>> $P(E^C \cap F)$ \[in insiemistica $E^C \cap F = F \setminus E = F \setminus (E \cap F)\ ] \implies$
>> $P(F \setminus (E \cap F))= P(F) - P(E \cap F) \iff P(F \setminus (E \cap F)) + P(E \cap F ) = P(F)$
>> $\implies$ terzo assioma: $P([F \setminus (E \cap F)] \cup (E \cap F)) = P(F)$ vera
>> $P(E^C \cap F) = P(F | (E \cap F))= P(F)-P(E \cap F) = P(F) - P(E)P(F) =$
>> $=P(F) - P(E)P(F) = P(F)(1 - P(E)) = P(F)P(E^C) \implies (E^C,F)$ indipendenti
>> 
>> ##### dim ($\impliedby$)
>> Analgoo, scambio $(E,F)$ con $(E^C,F)$




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