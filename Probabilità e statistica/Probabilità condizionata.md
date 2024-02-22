Come la probabilità varia nel tempo, col passare del tempo certi eventi del futuro dipendono dal presente/passato.


> [!esempio]
> $\mathcal{E}$ esperimento = lancio di due dadi distinti, un dado $R$, un dado $B$
>
> $\Omega = \left\{ (b,r) : b,r = 1:6 \right\}$
> $\mathcal{F} = \mathcal{P}(r)$
> $|\Omega| = 6^2 = 36$
> 
> Si tratta di uno [[spazio campionario#Spazio campionario equiprobabile o uniforme|spazio equiprobabile]]
> 
> $A = \left\{6\text{ sul rosso}\right\} \implies P(A) = \frac{6}{36} = \frac{1}{6}$
> $B = \left\{ \text{Punteggio totale }= 12 \right\} \implies P(B) = \frac{1}{36}$
> $C = \left\{ \text{Esce un 6} \right\} \implies P(C)=\frac{11}{36}$ 
> 

> [!def]
> 
> Sia $(\Omega, \mathcal{F}, P)$ uno [[spazio di probabilità]] e sia $F \in \mathcal{F}$ un evento tale che $P(F) > 0$. Dato un qualsiasi evento $E \in \mathcal{F}$ si chiama **probabilità condizionata** di $E$ dato $F$ il numero
>  $$
> P(E | F) := \frac{P(E \cap F)}{P(F)}
> $$
> Regola inversa, che chiamiamo **regola del prodotto**
> $$
> P(E \cap F) = P(E | F) P(F)
>$$
>Se $$\begin{align}
>\bigcap_{i=1}^n A_{i} &=,\qquad n = 1,2,\dots \\
>&= P\left(\bigcap_{i=1}^{n-1} A_{i} \cap A_{n}\right) P\left( \bigcap_{i=1}^{n-2} A_{i} \cap A_{n-1} \right)=  \\
>&=P\left( A_{n}|\bigcap_{i=1}^{n-1}A_{i} \right) P(A_{n-1}| \bigcap _{i=1}^{n-2}A_{i}) P\left( \bigcap \right)   = \\
todo \\
>&=P(A_{n}| A_{1} \cap A_{2} \cap \dots \cap A_{n-1}) = \\
>&=P(A_{1} \cap A_{2} \cap \dots \cap A_{n-1} \cap A_{n})
>\end{align}$$
>Se $P(A_{1} \cap \dots \cap A_{n-1}) > 0$
>
>Si dimostra per induzione
>
>>[!dim]
>>1. Caso $n = 2$: 
>>$\dfrac{P(E_{2} \cap E_{1})}{P(E_{1})} = P(E_{2} | E_{1})\! \Longrightarrow P(E_{2} \cap E_{1}) = P(E_{1})P(E_{2} | E_{1})$
>>2.
>>$P(E_{n+1} \cap E_{n} \cap \dots \cap E_{1}) = P((E))$
>> 


>[!esempio]
>Lancio 2 monete con $P(T_{1}) = P(T_{2}) = q$
>$P(T_{2} | T_{1}) = ??$
>$\Omega = \{ 0,1 \} \times \{ 0,1 \}$
>$$P(T_{2} | T_{1}) = \frac{P(T_{1} \cap T_{2})}{P(T_{1})}$$
>$$= \frac{P(\{ (1,1) \})}{P(\{ (1,0),(1,1) \})} =\frac{q^2}{q(1-q)+q^2} = \frac{q^2}{q} = q$$
>$p(i,j) = q^{i+j}(1 - q)^{2-i-j}$
>
>Se invece lanciassimo due monete in sequenza e sapessimo che è uscità una almeno una testa, qual è la possibilità che fossero entrambe teste? Ossia
>$P(T_{1} \cap T_{2} | T_{1} \cup T_{2})$
>$$ = \frac{P((T_{1} \cap T_{2}) \cup (T_{1} \cup T_{2}))}{P(T_{1} \cup T_{2})} = \frac{P(T_{1} \cap T_{2})}{1 - P(T_{1}^C \cap T_{2}^C)} = \frac{q^2}{1-(1-q^2)}=$$
>ricordando che $P(T_{1}^C \cap T_{2}^C)$ è la probabilità di due croci
>$$ \frac{q^2}{2q - q^2} = \frac{q}{2-q}$$
>se $q = 0.5$ ossia la moneta è bilanciata, la probabilità di due teste se è uscità una almeno testa è $\frac{1}{3}$


[[Formula delle probabilità totali]]

> [!teorema]
> Consideriamo la probabilità come funzione del primo evento, quindi dato un evento $E$ abbiamo:
> $$ \begin{align}
> P(\bullet | E) P(R) &\to \mathbb{R} \\
>  F &\mapsto P(F| E)
> \end{align} $$
> P è una probabilità
> $P_{E}(\bullet) = P(\bullet | E)$
> 
>>[!dim]
>>Verificare che $P_{E}$ soddisfa i tre assiomi della probabilità
>>1. $P_{E}(F) \geq 0$
>> 	$P_{E}(F) = \dfrac{P(F \cap E)}{P(E)} \geq 0$
>>2. $P_{E}(\Omega) = 1$
>>    $P(\Omega | E) = \dfrac{P(\Omega \cap E)}{P(E)} = \dfrac{P(E)}{P(E)} =1$
>>3. $F_{1},F_{2}$ sono a due a due disgiunti $P_E$ calcolata su $F_{1} \cup F_{2} \cup \dots = \sum_{k} P_{E}(F_{k})$ 
>>   $P_{E}(F_{1} \cup F_{2} \cup \dots) = \dfrac{P((F_{1} \cup F_{2} \cup \dots) \cap E)}{P(E)} =$
>>   $= \dfrac{P((F_{1} \cap E) \cup (F_{2} \cap E) \cup \dots )}{P(E)}$
>>   P è una probabilità, F1 disgiunto da F2 disgiunto da F3... $\implies$ sono tutte unioni disgiunte, unioni di eventi a coppie incompatibili, applicando l'assioma 3 a P (che è probabilità).
>>   $= \dfrac{P(F_{1} \cap E) + P(F_{2} \cap E)}{P(E)} =$$=\dfrac{P(F_{1} \cap E)}{P(E)} + \dfrac{P(F_{2} \cap E)}{P(E)} + \dots = P_{e}(F_{1}) + P_{e}(F_{2}) + \dots$

Da questo teorema possiamo derivare alcune proprietà
- $P_{E}(E) = P(E | E = 1)$
- Se $F \cap E = \varnothing \implies P(F|E) = 0$
- Essendo E una probabilità possiamo condizionarla a sua volta!
  $P_{E}(G | F)$ (Probabilità di G dopo che sia successo E e sia successo F)
  $$\begin{align}
 P_{E}(G | F) &= \frac{P_{E}(G \cap F)}{P_{E}(F)}  \\ 
=&\frac{\frac{P((G \cap F) \cap E)}{P(E)}}{\frac{P(F \cap E)}{P(E)}} = \frac{P(E \cap (F \cap E))}{P(F \cap E)} = P(G | F \cap E)
\end{align}$$
Che è la probabilità di G sapendo che sono successi E ed F]