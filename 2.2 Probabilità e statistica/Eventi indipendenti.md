
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


>[!definition]
>$E,F$ eventi di $(\Omega,\mathcal{F},P)$ sono indipendenti se
> $$
> P(E \cap F) = P(E)P(F)
>$$
>

>[!theorem]
>$P(E | F) = P(E)$
>>[!dim] 5\.
>>
>>$P(E|F) = \frac{P(E \cap F)}{P(F)}$
>>$P(E |F) = P(E) \iff \frac{P(E \cap F)}{P(F)}=P(E) \iff P(E  \cap F) = P(E)P(F) \iff$ E ed F indipendenti
>>$\CVD$



> [!remark]
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


>[!example]
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
>> [!example]
> >prendo una persona a caso
> >$E$ è un maschio
> >$F$ è una femmina
> >$E \cap F = \varnothing \implies$ incompatibili
> >$P(F | E) = 0 \neq 50\% = P(F) \implies$ NON sono indipendenti

 Se so che la coppia $(E,F)$ è una coppia di eventi indipendenti sono indipendenti anche le coppie $(E, F^C)$ o $(E^C, F)$ o $(E^C,F^C)$? Sì
 
> [!proposition]
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

## Indipendenza multipla

>[!definition]
>3 eventi $E,F,G$ sono indipendenti se e solo se:
>1. $E$ ed $F$ sono indipendenti
>2. $F$ e $G$ sono indipendenti
>3. $E$ e $G$ sono indipendenti
>4. ==$P(E \cap F \cap G) = P(E)P(F)P(G)$==

>[!example]
>Lancio 2 monete equilibrate $q = \frac{1}{2}$, sappiamo che $T_{1}$ e $T_{2}$ sono indipendenti, sappiamo che $T_{1}$ ed $E$ sono indipendente, e analogamente possiamo mostrare che $T_{2}$ ed $E$ sono indipendenti
>- $T_{1}$ Esce testa al primo lancio
>- $T_{2}$ Esce testa al secondo lancio
>- $E$ esce la stessa faccia nei due lanci
>
>Ma $T_{1},T_{2},E$ non sono indipendenti tra di loro, infatti
> $$\begin{align}
> P(T_{1} \cap T_{2} \cap E) &= P(T_{1} \cap P(T_{2}) = \left( \frac{1}{2} \right)^2 \\
> P(T_{1})P(T_{2})P(E) &= \frac{1}{2 } \cdot \frac{1}{2 } \cdot \frac{1}{2} = \left( \frac{1}{2} \right)^3 \\
P(T_{1} \cap T_{2} \cap E ) & \neq P(T_{1})P(T_{2})P(E)
> \end{align}$$

>[!definition]
>$n$ eventi $E_{1},E_{2},\dots,E_{n}$ sono indipendenti se e solo se qualunque sottoinsieme di indici $I \subseteq\{1,2,3,\dots,n\}$ si ha che $$P\left(\bigcap_{k \in I} E_{k}\right) = \prod_{k \in I} P(E_{k})$$
>Abbiamo inoltre $2^n - (n - 1)$ condizioni diverse per avere l'indipendenza di $n$ elementi.
>Per l'indipendenza a coppie sono solo $\begin{pmatrix}2\\n\end{pmatrix} \ll 2^n - (n +1)$ condizioni

Se $(E, F, G)$ sono indipendenti allora
- $(E \cap F, G)$ sono indipendenti
- $(E \cup F, G)$ indipendenti
- $(E, F | G)$ indipendenti

>[!dim]
>$(E,F,G)$ indipendenti $\implies$ $(E \cap F, G)$ indipendente:
>$$ \begin{align}
>&P((E \cap F) \cap G) \overset{?}{=} P(E \cap F)P(G) \\
>&P((E \cap F) \cap G) = P(E \cap F \cap G) = P(E)P(F)P(G)= \\
&= P(E \cap F) P(G) \implies (E \cap F , G) \text{ indipendenti}
>\end{align} $$
>
>Ora dimostriamo $(E,F,G)$ indip $\implies (E \cup F, G)$
>$$ \begin{align}
>&P((E \cup F) \cap G) \overset{?}{=} P(E \cup F)P(G) \\
>&P((E \cup G) \cap G) = P((E \cap G) \cup (F \cap G)) =  \\
>=&P(E \cap G) + P(F \cap G) - P((E \cap G) \cap (F \cap G))= \\
>=& P(E \cap G) + P(F \cap G) - P(E \cap F \cap G) = \\
>=& P(E)P(G) + P(F)P(G) - P(E)P(F)P(G) = \\
>= & P(G)[P(E) + P(F) - P(E) P(F)] =  \\
>=&P(G)[P(E) + P(F) - P(E \cap F)] = P(G)P(E \cup F)
>\end{align} $$

>[!remark]
>Se $E_{1},\dots,E_{n}$ sono indipendenti e $1 = i_{1}< i_{2} < i_{3} < \dots < i_{k} = n$ ed $F_{h}$ è una combinazionie (attraverso unione, intersezione, complementare) degli eventi $E_{i_{h}}, E_{i_{h}+1},\dots, E_{i_{h+1}}$ allora la n-upla $F_{1},F_{2},\dots,F_{h}$ sono indipendenti

## Indipendenza condizionale
$A,B,F$ con $P(F) > 0$

>[!definition]
>DIco che $A,B$ sono condizionalmente indipendenti dato $F$ se $A,B$ sono indipendenti rispetto alla [[Probabilità condizionata]]. 
> $$
> P(F) = \left[ \frac{P(A\cap  B |F)}{P(F)} \right] 
>$$
>Cioè $P(A \cap B | F) = P(A|F)P(B|F)$


>[!remark]
>Se $A,B$ sono indipendenti condizionalmente ad $F$ allora $A,B$ sono indipendenti? Non è detto

Se $A,B$ sono indipendenti $\implies A,B$ condizionalmente indipendenti dato un $F$.
Ma se la terna $A,B,F$ sono indipendenti valgono le implicazioni.
