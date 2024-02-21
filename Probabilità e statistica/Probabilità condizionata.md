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
> 
>>[!dim]
>>Verificare che $P(B)$ soddisfa i tre assiomi della probabilità
>>1. Probabilità 