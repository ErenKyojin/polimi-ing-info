# sovrapposizione degli effetti
Il principio di sovrapposizione degli effetti afferma che dato un circuito con A generatori indipendenti di corrente e B generatori indipendenti di tensione e chiamati $v$ ed $i$ ripsettivamente la tensione e la corrente del bipolo b.
Allora possiamo scrivere:
$$\begin{align}
v = h_1(t)I_{S,A} +\ ...\ +h_A(t)I_{S,A} + k_1E_{S,1} +\ ...\ + k_B(t)E_{S,B} \\
i = \hat h_1(t) +\ ...\ +\hat h_A(t)I_{S,A} + \hat k_1(t)E_{s,1} +\ ...\ + \hat k_B(t)E_{S,B}
\end{align}
$$
E possiamo quindi calcolare i coefficienti spegnendo ad uno ad uno tutti i generatori

# Sovrapposizione degli effetti in regime sinusoidale

Ipotizziamo che in un circuito ci siano due ingressi, un generatore di tensione costante $e(t) = E$ ed un generatore di corrente sinusoidale $a(t) = A\sin(\omega t)$, applichiamo il principio di sovrapposizione dagli effetti, assumiamo che l'evoluzione transitoria del circuito si sia esaurita, ossia i [[condensatore|condensatori]] si comportano come [[circuito aperto]] mentre gli [[induttore|induttori]] si comportano come [[cortocircuito]].

Possiamo utilizzare le [[Funzioni di rete]] per riscrivere la sovrapposizione degli effetti in un circuito con $M_A$ generatori di corrente ed $M_E$ generatori di tensioni alla pulsazione $\omega$ :

$$\begin{align}\overline v = H_1^A(j\omega)\overline A_1 +\ ...\ + H_{M_A}^A(j\omega)\overline A_{M_A} + \\+\ H_1^E(j\omega)\overline E_1\ +\ ...\ +H_{M_E}^E(j\omega)\overline E_{M_E}\end{align} $$

Tutte le funzioni $H(j\omega)$ rappresentano la [[risposta in frequenza]] che lega $\overline v$ all'ingresso corrispondente