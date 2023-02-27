# Regime multifrequenziale
Consideriamo circuiti composti da N-terminali lineari, tempo invarianti dinamici e adinamici che ammette un regim e che contiene generatori indipendenti di tipo sinusoidale a pulsazioni diverse. Si agisce applicando la sovrapposizione degli effetti nel #dominio del tempo, e risolvendo tanti circuiti quanto sono gli ingressi o famiglie di ingressi (ingressi costanti o alla medesima pulsazione).

Nel caso di M pulsazioni $\omega_k$ va risolto un circuito per ogni pulsazione per un totale di M circuiti.
>[!TIp]
>I componenti le cui equazioni caratteristiche dipendono dalla pulsazione, avranno equazioni caratteristiche diverse per ogni risoluzione, ad esempio un [[condensatore]] la cui equazione costitutiva avrà in pulsazione $\omega_k$ equazione costitutiva $j\omega_k C$, e in pulsazione $\omega_k'$ pulsazione $j\omega_k'C$. Ma nel dominio del tempo l'equazione costitutiva sarà sempre $i = C\frac{d}{dt}v(t)$.
> dobbiamo quindi stare attenti al passare tra i diversi domini (dobbiamo utilizzare la pulsazione corrispondente alla famiglia di generaori in considerazione)