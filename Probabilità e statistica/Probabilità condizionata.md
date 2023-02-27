
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


>[!esempio] Applicazione
>Applicazione $\mathcal{E}$
> ```tikz
>\begin{document}
>\begin{tikzpicture}
>\node at (0,0){$\textbullet$};
>\end{tikzpicture}
>\end{document}
>```
>