>[!def] Chiusura universale
>Data una formula $\mathcal{A}$ se ne può fare la **chiusura universale** facendo precedere $\mathcal{A}$ da [[quantificatori]] universali che quantifichino le variabili che in $\mathcal{A}$ hanno occorrenze libere

>[!def] chiusura esistenziale
>Data una formula $\mathcal{A}$ si ottiene la **chiusura eistenziale** di $\mathcal{A}$ facendo precedere $\mathcal{A}$ da quantificatori esistenziali che quantifichino le variabili che in $\mathcal{A}$ hanno occorrenze libere

>[!esempio]
>Data la formula
>$$ \mathcal{A}_{2}^2(a,b) \lor \exists y \mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x)) \implies \forall x (\sim \mathcal{A}_{1}^2 (f_{1}^2(x,f_{2}^2(a,x)),b)\land \mathcal{A}_{2}^2(x,x)) $$
>La sua chiusura universale è
>$$ \forall x(\mathcal{A}_{2}^2(a,b) \lor \exists y \mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x)) \implies \forall x (\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)\land \mathcal{A}_{2}^2(x,x))) $$
>Mentre la sua chiusura esistenziale è
>$$ \exists x (\mathcal{A}_{2}^2 (a,b) \lor \exists y \mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x))\implies \forall x(\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)\land \mathcal{A}_{2}^2(x,x))) $$
>Cerchiamo però di dare una semantica alle formule scritte attraverso il concetto di [[struttura]]  


I numeri naturali sono chiusi rispetto alla somma, non rispetto alla sottrazione => Si introducono i numeri interi che non sono peró chiusi rispetto alla divisione => numeri razionali =>...

# famiglia di linguaggi
$L = \{L_i\}$ famiglia di linguaggi
L chiusa rispetto ad un operazione OP se e solo se per ogni
$$
L_{1},L_{2} \in L,\quad L_{1} \text{ OP } L_{2} \in L
$$
Una famiglia di linguaggi sono i [[linguaggi regolari]] riconosciuti da FSA
REG chiusa rispetto alle operazioni insiemistiche, alla concatenazione, la $*$, e praticamente tutte le altre

Vediamo la costruzione di alcune operazioni:
- [[Intersezione]]


# Automi

#### Deterministici

AFD | APD | MTD 
--- | --- | --- 
 $\cup$ | $\cancel{ \cup }$ | $\cup$ | $\cup$
$\cap$ | $\cancel{ \cap }$ | $\cap$ | $\cancel{ \cap }$
$\neg$ | $\neg$ | $\cancel{ \neg }$ | $\neg$

#### Non deterministici

AFND | APND | MTND
--- | --- | ---
$\cup$ | $\cup$ | $\cup$
$\cap$ | $\cancel{ \cap }$ | $\cap$
$\neg$ | $\cancel{ \neg }$ | $\cancel{ \neg }$


