>[!def] Potenza di una [[forza]]
>La potenza istantanea $W$ di una forza $\vec{F}$ è la [[derivata]] temporale del [[Fisica/Dinamica/Lavoro|lavoro]] compiuto dalla forza stessa
>$$W = \frac{d\mathcal{L}}{dt} = \vec{F} \cdot \frac{d\vec{r}}{dt} = \vec{F} \cdot \vec{v}$$

Le dimensioni sono $[W] = [F][v] = [L]^2 [M][T]^{-3}$ e l'unità di misura è il watt, pari ad 1 joule al secondo
Associata al watt è un'unità di misura del **LAVORO** è il chilowatt-ora ($kWh$) con $1 \text{ kWh } = 3.6 \cdot 10^6 J$.
Quindi il lavoro compiuto in un'ora da una forza della potenza di 1 $\text{kW}$

>[!oss]
>La potenza è la grandezza fisica con cui si misura la capacità di una macchina di compiere lav


# Potenza da componenti
 - Potenza istantanea assorbita da un bipolo $P_a = vi$,
 - Potenza istantanea erogata da un bipolo $P_e = -P_a = -vi$
 - Potenza assorbita da un n-terminali $$P_a(t) = \sum_{k=1}^nv_k(t)i_k(t)$$

Un n-terminali la cui potenza assorbita è positiva sempre si dice #passivo

# Potenza in [[regime sinusoidale]]
Prendendo un lato qualsiasi di un circuito lineare, tempo invariante, dinamico, che ammetta regime sinusoidale alla pulsazione $\omega$, un qualsiasi suo lato avrà una corrente ed una tensione descrittiva pari a
$$\begin{flalign}
	&v(t) = V \cos(\omega t + \varphi_V) \\
	&i(t) = I \cos(\omega t + \varphi_I)	
\end{flalign}
$$

rappresentati con i rispettivi fasori $\overline{v} = V e^{j\varphi_V}$ e $\overline\imath = Ie^{j\varphi_I}$

La potenza istantanea assorbita dal lato di grafo in condiserazione è
$$\begin{flalign}
 p_a(t)\quad&= v(t)i(t) = V\cos(\omega t + \varphi_V)I\cos(\omega t +  \varphi_I) = && \\
 &= \frac{VI}{2}\cos(\varphi_V-\varphi_I) + \frac{VI}{2}cos(2\omega t + \varphi_V + \varphi_I + \overbrace{(\varphi_V-\varphi_V)}^\text{aggiungo tolgo} = &&\\
 &= \underbrace{\frac{VI}{2}\cos(\varphi_V-\varphi_I)}_\text{Potenza media} + \underbrace{\overbrace{\frac{VI}{2}\cos(\varphi_V - \varphi_I)}^P\cos(2\omega t+2\varphi_V)}_{P_a^\text{attiva istantanea}(t)} + \\
 &+ \underbrace{\overbrace{\frac{VI}{2}\sin(\varphi_V-\varphi_I)^Q}\sin(2\omega t + 2\varphi_V)}_{P_a^\text{reattiva istantanea}(t)}

\end{flalign}
$$

Notare che i termini (noti) P e Q introducono un sistema fasoriale alla pulsazione $2\omega$, ed il termine P coincide con la potenza media che compie effettivamente #lavoro. I termini P e Q prendono il nome di potenza attiva e potenza reattiva


- $P_a^{\text{r.i.}}(t)$ Potenza che viene scambiata istante per istante dal lato in questione con gli elementi che immagazzinano energia, è osservabile solo se $\sin(\varphi_V - \varphi_I) \neq 0$ e il suo valore sul periodo è $0$, ossia i contributi assorbiti ed erogati di potenza reattiva nel periodo hanno somma zero nel periodo



>[!Tip]
>I lati del circuito che ammettono un [[impedenza]] $Z(j\omega) =\frac{\overline v}{\overline\imath} = |Z|e^{j\varphi_Z}$
>Quindi $\varphi_V - \varphi_I = \varphi_Z$, ipotizzando un'impedenza totalmente immaginaria, la potenza media assorbita sarebbe nulla (dato che $\cos\varphi_Z = 0$ e $\langle P_a^{\text{a.i.}}(t)\rangle = 0$)
>e quindi la potenza reattiva istantanea si osserva solo se non #resistiva

>[!Tip]
>casi specifci in [[condensatore]], [[resistore]], [[induttore]] e [[Impedenza]]


## potenza complessa
$$\hat A = P + jQ = \frac{VI}{2}\cos(\varphi_V - \varphi_I) + j\frac{VI}{2}\sin(\varphi_V-\varphi_I) = \frac{VI}{2}e^{j(\varphi_V-\varphi_I)}$$
da cui ricaviamo che
$$
\begin{align}
|\hat A| &=\sqrt{P^2+Q^2} \\
P &= |\hat A|\cos(\varphi_V - \varphi_I) \\
Q &= |\hat A|\sin(\varphi_V - \varphi_I)
\end{align}$$

con la $A = |\hat A|$ potenza #apparente, che si misura in $VA$ e non in $W$, la potenza attiva si misura in $W$ in quanto è la sua parte reale che compie lavoro, invece la potenza reattiva si misura in $VA$ reattivi.
>[!info]
>La potenza complessa è indicata con $\hat A$ e non con $\bar A$ perchè, pur essendo di fatto un fasore, si riferisce alla pulsazione $2\omega$ in un circuito che è alla pulsazione $\omega$

### Ricavare la potenza complessa
Come possiamo ricavare $\hat A$ dai [[fasori]] $\bar v = Ve^{j\varphi_V}$ e $\bar\imath = Ie^{j\varphi_I}$ che rappresentano tensione e corrente ai lati del circuito
$$\frac{\bar v \bar\imath^*}{2} = \frac{VI}{2}e^{j\varphi_V}e^{-j\varphi_I} = \frac{VI}{2}e^{j(\varphi_V - \varphi_I)}$$

E quindi:
$$\hat A = P + jQ = \frac{\bar v\bar\imath^*}{2}$$
E quindi $P = \text{Re}\{\frac{\bar v\bar\imath^*}{2}\}$ e $Q = \text{Im}\{\frac{\bar v\bar\imath^*}{2}\}$


### Convenzioni
Dal risultato precedente osserviamo che si parla di convenzione *europea* quando si proietta il fasore tensione sul fasore corrente (ossia la fase della potenza complessa è $\varphi_V - \varphi_I$)
Si parla invece di convenzione *americana* quando il fasore corrente è proiettato sul fasore tensione (ossia la fase della potenza complessa è $\varphi_I - \varphi_V$)
Con quest'ultima la potenza diventa quindi:
$$\hat A = P + jQ =\frac{\bar v^*\bar\imath}{2}$$

Inoltre fino ad ora abbiamo parlato della potenz complessa assorbita, la potenza complessa erogata è $-\hat{A}$/

### Triangolo delle potenze
Il generico lato di un grafo di un circuio che evolve in [[regime sinusoidale]] permanente, con la tensione e corrente descrittive prese con la convenzione degli utilizzatori
$$\begin{align}
v(t) &= V\cos(\omega t + \varphi_V) \\
i(t) &= I\cos(\omega t + \varphi_I)
\end{align}
$$
Rappresentate dai fasori rispettivamente $\bar v = Ve^{j\varphi_V}$ e $\bar\imath = Ie^{j\varphi_I}$

Assumiamo che $\varphi_V - \varphi_I \in[-\pi/_2, \pi/_2]$ e che quindi $\cos(\varphi_V - \varphi_I) \geq 0$ e che quindi il lato del grafo in questione dissipa la potenza attiva assorbita.

Si dice che la il fasore $\bar\imath$ è in anticipo rispetto a $\bar v$ in figura 1 o in ritardo in figura 2.
>![[Pasted image 20220609095816.png]] ![[Pasted image 20220609095907.png]]

Notiamo che quando $\varphi = -\pi/_2$ se il lato ammette un impedenza equivalente sarà di tipo puramente capacitivo, altrimenti quando $\varphi = \pi/_2$ sarà di tipo puramente induttivo.

>Questo si traduce per la potenza complessa nei triangoli delle potenze in figura
>![[Pasted image 20220609100236.png]]

Ossia l'anticipo del fasore di corrente si traduce nell'anticipo del vettore potenza attiva $P$ rispetto alla potenza complessa $\hat A$.
Invece il ritardo del fasore di corrente si traduce nel ritardo del vettore di A.
Questo perchè Q è negativa nel primo caso e positiva nel secondo.
Il fattore di potenza è il coseno dell'angolo $\varphi$
$$\cos\varphi = \frac{P}{|\hat A|}$$
E quindi quando $Q \leq 0$ si specifica fornendo $\cos(\varphi)$ e dicendo "*in ritardo*"
invece quando $Q \geq 0$ si specifica fornendo $\cos(\varphi)$ e dicendo "*in anticipo*"
Nel primo caso $\varphi = - \arccos\left(\frac{P}{|\hat A|}\right)$ e nel secondo $\varphi = \arccos\left(\frac{P}{|\hat A|}\right)$ 

Solo dopo essere certi del segno di $\varphi$ :
$$Q = P\tan\varphi$$


# Potenza in un sistema #trifase bilanciato
La potenza istantanea assorbita dal carico trifase, supponendolo collegato a $Y$, si scrive nel dominio del tempo a partire dalle tensioni di fase:

$$\begin{flalign}
	v_{AN} &= \sqrt2V_p\cos\left(\omega t\right)\\
	v_{BN} &= \sqrt2V_p\cos\left(\omega t - \frac{2}{3}\pi\right) \\
	v_{CN} &= \sqrt2V_p\cos\left(\omega t - \frac{4}{3}\pi\right)
\end{flalign}$$
Notiamo il valore $\sqrt2$ che si origina a partire dal [[Valore efficace]] delle tensioni.
Assumiamo un impedenza di carico:
$$Z_Y = |Z_Y|e^{j\text{arg}(Z_Y)}=Ze^{j\theta}$$
Possiamo scrivere le correnti di fase come:
$$
\begin{flalign}
 i_a &= \sqrt2\overbrace{I_p}^{V_p/Z}\cos(\omega t-\theta) \\
 i_b &= \sqrt2I_p\cos\left(\omega t-\theta-\frac{2}{3}\pi\right) \\
 i_c &= \sqrt2I_p\cos\left(\omega t-\theta-\frac{4}{3}\pi\right) 
\end{flalign}
$$


La potenza istantanea totale nel carico invece è la somma delle potenze istantanee nelle tre fasi:
$$
\begin{flalign}
 p_a^{Z_Y}(t)\quad\quad\quad\quad &=\quad v_{AN}(t)i_a(t)+v_{BN}(t)i_b(t)+v_{CN}(t)i_c(t) \\
 &= \quad2V_pI_p[\cos(\omega t)\cos(\omega t-\theta) + \\
 &\ \cos\left(\omega t-\frac23\pi\right)\cos\left(\omega t-\frac23\pi-\theta\right)+ \\
 &\ \cos\left(\omega t-\frac43\pi\right)\cos\left(\omega t - \frac43\pi-\theta\right)]
\end{flalign}
$$


Usando i [[Richiami]] di trigonometria $\cos\alpha\cos\beta = \frac12[\cos(\alpha + \beta) + \cos(\alpha - \beta)]$ otteniamo:

$$\begin{flalign}
	p_a^{Z_Y}\quad &= V_pI_p\left[3\cos\theta+\cos(2\omega t - \theta)+\cos\left(2\omega t - \theta -\frac43\pi\right)+\right] \\
	&=V_pI_p\left[3\cos\theta+\cos\gamma +\cos\gamma\cos\left(\frac43\pi\right)+\sin\gamma\sin\left(\frac43\pi\right)  + \cos\gamma\cos(\frac23\pi)+\sin\gamma\sin(\frac23\pi)\right] \\
  &=V_pI_p\left[3\cos\theta+\cos\gamma+2\cos\gamma\cos\left(\frac{4}{3}\right)+\sin\gamma\sin\left(\frac43\pi\right)-\sin\gamma\sin\left(\frac43\pi\right)\right] \\
  &=V_pI_p\left[3\cos\theta + \cos\gamma+2\left(-\frac12\right)\cos\gamma\right] = 3V_pI_p\cos\theta
\end{flalign}$$

con $\gamma = 2\omega t-\theta$.

>[!oss] La potenza istantanea totale di un sistema #trifase bilanciato è costante
>*"un generatore trifase bilanciato che alimenta carichi bilanciati eroga una potenza istantanea costante, anzichè pulsante come nel caso monofase"*

Questo risultato è valido anche per un carico a triangolo e costituisce un'importante ragione per utilizzare un sistema trifase per generare e distribuire la potenza elettrica. Essendo la potenza istantanea totale indipendente dal tempo, la potenza assorbita per fase per il carico a stella o a triangolo è $\frac{p_a^{Z_Y}}{3} =\frac{p_a^{Z_\Delta}}{3} = V_pI_p\cos\theta$.
E la potenza attiva per fase è pari a:
$$P_p = V_pI_p\cos\theta$$

E quella reattiva è
$$Q_p = V_pI_p\sin\theta$$
Inoltre conoscendo la relazione tra tensione e corrente di fase e tensione e corrente di linea nella [[Circuito trifase|connessione]] $Y-Y$ osserviamo che:
$$\begin{flalign}
	P_p &= 3\frac{V_l}{\sqrt3}\cos\theta = \sqrt3V_lI_l\cos\theta\\
	Q_p &= \sqrt3V_lI_l\sin\theta
\end{flalign}$$

La potenza complessa assorbita per fase è:
$$\hat A_p = P_p + jQ_p$$

>[!oss]
>il fatto che la potenza istantanea assorbita dal carico trifase sia costante non implica che la potenza attiva istantanea e reattiva istantanea, calcolate per il singolo bipolo del carico siano nulle istante per istante

Non possiamo infatti affermare che la componente pulsante della potenza istantanea assorbita sia nulla. Ma, dato che il carico è bilanciato e le tensioni impresse dal generatore di fase sono bilanciate, i contributi pulsanti di potenza attiva e reattiva istantanea hanno:
- valore in medio nullo sul periodo per ogni bipolo del carico
- si bilanciano istante per istante


Non dobbiamo quindi aspettarci che la potenza reattiva $Q_p$ per fase sia nulla. Essa è definita infatti in base alla 11.87, come il coefficiente del termine pulsante sinusoidale a pulsazione $2\omega$ che si ottiene, ad esempio, per la fase $a$, dalla potenza istantanea assorbita $v_\text{AN}i_a(t)$. Tale coefficiente è non nullo ma, raccolto a fattor comune per le fasi bilanciate, pesa una ternza di funzioni sinusoidali bilanciate a pulsazione 2$\omega$ la cui somma per definizione è nulla istante per istante


