# Il rifasamento
>[!example] Esempio 1
>![[Pasted image 20220609105420.png]]
>Considerando il circuito in figura, in cui un [[generatore di tensione]] alla pulsazione $\omega$ è connesso ad un [[impedenza]] $Z(j\omega) = |Z|e^{j\varphi_Z}$ attraverso una linea di trasmissione (Che possiamo modellare come un [[resistore]] di resistenza R).Ipotizziamo che la l'impedenza sia un utilizzatore della [[potenza]] erogata da $\bar E$ ed il flusso di potenza tra i due bipoli avvenga attraverso un collegamento non ideale ma con perdite (assunto) puramente resistivo. 
>Attraverso il [[teorema di Boucherot]] scriviamo
>$$
>\begin{align}
>P_e^E&=P_a^R+P_a^Z \\
>Q_e^E &= Q_A^Z
>\end{align}
>$$
>allora una parte della potenza erogata da $\bar{E}$ viene assorbita dalla connessione
>Indicando con $\bar I$ la [[corrente]] nel circuito $P_a^R = \frac{R|\bar I|^2}{2}$ e
>$$P_a^Z = Re\left\lbrace\frac{\bar v_Z\bar I^*}{2}\right\rbrace = Re\left\lbrace\frac{|Z|e^{j\varphi_Z}\bar I \bar I^*}{2}\right\rbrace = \frac{|\bar I||\bar v_Z|}{2}\cos\varphi_Z$$
>Ed il modulo della corrente è pari a $|\bar I| =\frac{2P_a^Z}{|\bar v_z|\cos\varphi_Z}$ ed è minima quando $\cos\varphi_Z = 1$ cioè con carico puramente resisitvo.
>Gli scambi di potenza reattiva in effetti avvengono attraverso una corrente sul circuito che contribuisce ad inutili perdite di potenza (la potenza attiva erogata del generatore viene usata del carico, ma la potenza reattiva non da contributi utili provocando perdite)
>
>![[Pasted image 20220609112229.png]]
>Se vogliamo ottimizzare il circuito vogliamo che l'impedenza appaia del tutto resistiva, allora collegiamo un [[condensatore]] detto "di rifasamento" $C_{RIF}$ in parallelo. Infatti la reattanza del carico sarà positiva e quella del condensatore negativa può portarci ad avere $Im\{Z(j\omega) // \frac{1}{j\omega C_{RIF}}\}$ = 0.
>In assenza del condensatore la potenza apparente assorbita dall'impedenza $Z(j\omega)$ è pari a
>$$A_Z = \sqrt{P_Z^2+Q_Z^2} = \frac{|\bar v_Z||\bar I|}{2}$$
>E di conseguenza
>$$|I| = \frac{2\sqrt{P_Z^2 + Q_Z^2}}{|\bar v_Z|}$$
>Bisogna far attenzione inserendo il condensatore di rifasamento affinche ai capi dell'impedenza $Z(j\omega)$ si misuri la stessa tensione che si misurava in precedenza
>In questo caso la potenza apparente assorbita dall'impedenza equivalente
>$Z_\text{RIF}(j\omega) = Z(j\omega) || \frac{1}{j\omega C_\text{RIF}}$ è
>$$\tilde{A}_{Z_{RIF}} = \sqrt{P_Z^2 + (Q_Z + Q_{C_{RIFF}})^2} = \frac{|\bar v_Z||\bar I_{RIF}|}{2}$$
E quindi $|\bar I_{RIF}|$ è il modulo della fasore della corrente che scorre in R.
>Poichè $Q_{C_{RIF}} = -\frac{\omega C_\text{RIF}|\bar v_Z|^2}{2}$ possiamo scegliere una $C_\text{RIF}$ tale che $Q_Z + Q_{C_\text{RIF}} = 0$
 minimizzando la corrente che scorre in R e quindi l'assorbimento da parte della linea, dovremo scegliere:
 $$C_\text{RIF} = \frac{2Q_Z}{\omega|\bar v_Z|^2} = \frac{2}{\omega|\bar v_Z|^2}\underbrace{\frac{|\bar v_Z|^2\sin\varphi_Z}{2|Z|}}_{Q_Z} = \frac{\sin\varphi_Z}{\omega|Z|}$$
 