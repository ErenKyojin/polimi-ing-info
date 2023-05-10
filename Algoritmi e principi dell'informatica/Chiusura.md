>[!def] Chiusura universale
>Data una formula $\mathcal{A}$ se ne può fare la chiusura universale facendo precedere $\mathcal{A}$ da [[quantificatori]] universali che quantifichino le variabili che in $\mathcal{A}$ hanno occorrenze libere

>[!def] chiusura esistenziale
>Data una for


I numeri naturali sono chiusi rispetto alla somma, non rispetto alla sottrazione => Si introducono i numeri interi che non sono peró chiusi rispetto alla divisione => numeri razionali =>...

# famiglia di linguaggi
$L = \{L_i\}$ famiglia di linguaggi
L chiusa rispetto ad un operazione OP se e solo se per ogni
$$
L_{1},L_{2} \in L, L_{1} OP L_{2} \in L
$$
REG linguaggi regolari riconosciuti da FSA
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


