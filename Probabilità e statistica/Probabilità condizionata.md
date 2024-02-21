Come la probabilità varia nel tempo, col passare del tempo certi eventi del futuro dipendono dal presente/passato.

>[!def]
>$E,F$ eventi t.c $P(E) > 0$ la probabilità condizionta di F rispetto ad E è il valore
>$$ P(F | E) = \frac{P(F \cap E)}{P(E)} $$

>[!esempio]
>Lancio 2 monete con $P(T_{1}) = P(T_{2}) = q$
>$P(T_{2} | T_{1}) = ??$
>$\Omega = \{ 0,1 \} \times \{ 0,1 \}$
>$$P(T_{2} | T_{1}) = \frac{P(T_{1} \cap T_{2})}{P(T_{1})}$$
>$$= \frac{P(\{ (1,1) \})}{P(\{ (1,0),(1,1) \})} =\frac{q^2}{q(1-q)+q^2} = \frac{q^2}{q} = q$$
>$p(i,j) = q^{i+j}(1 - q)^{2-i-j}$
>
>Se invece lanciassimo due monete in sequenza e sapessimo che è uscità una almeno una testa, ossia
>$P(T_{1} \cap)$

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
> Sia $(\Omega, \mathcal{F}, P)$ uno [[spazio di probabilità]] e sia $F \in \mathcal{F}$ un evento tale che $P(F) > 0$. Dato un qualsiasi evento $E \in \mathcal{F}$ si chiama probabilità condizionata di $E$ dato $F$ il numero
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


[[Formula delle probabilità totali]]


>[!esempio]a