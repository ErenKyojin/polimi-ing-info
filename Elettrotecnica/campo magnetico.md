# il campo magnetico
Il campo $\bar B$, chiamato campo magnetico ed analogo al [[campo elettrico]] $\bar E$, cioè attraverso la [[forza]] che una [[carica]] di prova $q$ in [[moto]] con velocità $\bar v$ subisce qualora venga a trovarsi in una regione dello spazio in cui il campo $\bar B$ è presente.

$[\bar{B}] = T$ tesla

In realtà $\bar B$ va definito più correttamente come campo di induziona magnetica e, per descrivere i fenomeno magnetici nei mezzi materiali, è utile e necessario introdurre altri 2 campi:
- $\bar H$ (denominato effettivamente campo magnetico)
- $\mathcal{\overline M}$ (denominato campo di magnetizzazione)
- E ricordiamo $\bar B$ (denominato campo di induzione magnetica)

Questi 3 campi separano il valore del campo magnetico $\bar B$ complessivamente presente in un punto nella somma dei suoi 2 contributi:
- Il contributo $\bar H$ è dato dalle sorgenti del campo magnetico
- il contributo $\bar M$ è dato dal materiale eventualmente presente nel punto in cui misuriamo $\bar B$

La relazione che lega tutti questi campi è:
$$\bar B =\mu_0(\bar H + \mathcal{\bar M}) \tag{1}$$
Con $\mu_0$ è la permeabilità elettrica nel vuoto
Essendo $\mathcal{\bar M}$ un campo dovuto alla presenza di un mezzo materiale, nel vuoto quindi tale campo è nullo e $\bar B= \mu_0\bar H$


>[!example] Esempio
>Ipotizziamo di generare un campo magnetico utilzzando una sorgente di campo magnetico, chiamiamo $\bar H_s$ questo contributo, e di applicare questo campo ad un materiale, quanto vale $\bar B$ all'interno del materiale stesso? 
>Se il materiale è ferromagnetico si magnetizzerà in modo molto marcato e quindi il vettore $\mathcal{\bar M}$ avrà un intensità elevata.
>Inoltre il materiale magnetizzato diventa a sua volta una sorgente di campo magnetico; a seguito di questo all'interno del materiale si produrrà perciò un campo $\bar H_m$ e il campo totale prodotto sarà $\bar H = \bar H_s +\bar H_m$.
>Inoltre dalla [[Relazioni|relazione]] di prima sappiamo che all'interno nel materiale il valore di induzione magnetica risente sia del contributo dato dalle sorgenti ($\bar H$) che del contributo della magnetizzazione del materiale ($\mathcal{\bar M}$). Se invece cerchiamo di capire cosa succeda quando consideriamo un punto che si trova al di fuori del materiale, in questo caso il valore di $\bar H$ risentirà ancora del contributo della sorgente di campo magnetico ($\bar H_s$) e dal contributo dato dal  materiale ($\bar{H}_m$). Viceversa $\mathcal {\bar M}$ sarà nullo in quanto ci troviamo fuori dal materiale.

>[!oss]
>Per $\mathcal{\bar M}$ esistono materiali che si definiscono lineari, per i quali la $(1)$ si traduce in $$\bar{B} = \mu_r\mu_0\bar{H}$$
>con $\mu_r$ permeabilità relativa del materiale. L'introduzione di questa è dovuta alla relazione $\bar{M} = \chi_m\bar{H}$ con $\chi_m$ suscettività magnetica, costante adimensionale che quantifica il grado di magnetizzazione di un materiale. Possiamo quindi scrivere
>$$\bar{B} = \mu_{0}(\bar{H}+ \chi_{m}\bar{H})=\mu_0\underbrace{(1-\chi_m)}_{\mu_r}\bar{H}$$

Tutta questa premessa ci permette di introdurre i [[circuiti magnetici]].

L'effetto di un campo magnetico si vede ponendo una carica di prova nella regione in cui si vuole misurare il campo, in particolare detta $q$ la carica in moto con velocità $\bar{v}$, la forza $\bar{F}$ su di essa esercitata da $\bar{B}$ è
$$ \bar{F} = q\bar{v} \times \bar{B} $$
Attraverso la regola della mano destra possiamo ottenere il verso di $S$, per la sua intensità
invece $F = qvB \sin x$.

Se una carica di prova si muove in una ragione dove vi è un campo elettrico $\bar{E}$ ed un campo magnetico $\bar{B}$ si ha una forza risultante sulla particella detta [[forza di lorentz]] 