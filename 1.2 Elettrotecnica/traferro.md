# Traferro
Visto che gli induttori realizzati con un nucleo ferromagnetico o ferimagnetico non sono solitamente lineare non sono adatti a molti utilizzi in elettronica, introducendo una distorsione. Per risolvere a questo problema si utilizza un breve tratto d'aria nel nucleo, tratto chiamato **traferro** o **intraferro**

>[!esempio]
>![[Pasted image 20220830201626.png]]

La riluttanza del nucleo si esprime con
$$\mathcal{R} = \frac{l_{f}}{\mu_{f}S} + \frac{l_t}{\mu_{0}S} = \mathcal{R}_{f}+ \mathcal{R}_t$$
Con $l_{t}$ lunghezza del traferro e $l_{f}$ lunghnezza del resto, se $l_{t} \ll \sqrt{S}$ ossia se il traferro è molto corto rispetto alla sezione del nucleo (che ci permette di ipotizzare la continuità del flusso attraverso il traferro).
La riluttanza del ferro $\mathcal{R}_{f}$ anche se non è lineare, è sempre $\mathcal{R}_f \ll \mathcal{R_t}$, perchè $\mu_{f} \gg \mu_0$. QUindi la riluttanza è la somma di ddue contributi, dei quali quello non lineare è trascurabile. La riluttanza totale è quindi:
$$\mathcal{R} \approx \mathcal{R}_{t} = \frac{l_{t}}{\mu_{0}S}$$
Valore che si può rendere abbastanza piccolo (anche se sempre $\gg \mathcal{R}_f$) perchè $l_{t}\ll l_f$. In definitive si possonoottenere alte induttanze, e quindi basse riluttanze, attraverso un nucleo ferromagnetico o ferrimagnetico dotato di un traferro molto sottile. Regolando lo spessore del traferro è possibile modificare il valore dell'induttanza totale.