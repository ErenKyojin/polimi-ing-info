# Condensatore
Una sfera con una [[carica]] equa $Q$ sulla sua superficie, detta conduttore sferico, genera un [[campo elettrico]] radiale rispetto al centro C con intensità
$$E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}$$

Essendo in [[regime stazionario]] il campo elettrico $\overline{E}$ ammette un pontenziale $V(r)$ che  se la sfera è immersa in un dielettrico $\varepsilon_3$ è pari a
$$V(R) = \frac{1}{4\pi\varepsilon_0\varepsilon_r}\frac{Q}{R}$$

==> abbiamo che 
$$\frac{Q}{V(R)} = const$ = C$$ 
Con $C$ [[capacità]] elettrica

Due conduttori con le cariche $Q^+$ e $Q^-$ con $V_1$ e $V_2$ potenziali rispettivi, allora la differenza di potenziale $V = V_1 - V_2$, la capacità del sistema è
$$C = \frac{Q}{V_1 - V_2}$$ questo sistema descrive un [[bipolo]] <u>definito condensatore</u>.

I condensatori più utili a noi sono i ==condensatori piani==.
È come l'induttore un componente #conservativo, cioè che immagazzina energia per poi liberarla

### condensatori in regime stazionario
Un condensatore piano collegato ad un [[generatore indipendente]] di tensione $V costante$, le cariche mosse dal generatore si accumulano sulle facce opposte, tra le quali si forma un campo elettrico, le cariche si continuano ad accumulare fino a quando la differenza di potenziale tra le due facce non è uguale a quella del [[generatore indipendente]], ossia quando $v_{AB} = V$. in questo momento arriviamo ad un regime stazionare dove la carica Q e il campo $\overline{E}$ non variano ed il condensatore si comporta da circuito aperto.

### condensatori in regimi tempo variante
Il condensatore è collegato ad un generatore di tensione tempo variante $V(t)$ e subisce una variazione $\Delta\\V$ in un intervallo di tempo $\Delta\\t$ abbiamo quindi una corrente media $$I = \frac{\Delta\\Q}{\Delta\\t} = C\frac{\Delta\\V}{\Delta\\t}$$
E facendo il limite per $\Delta\\t \to 0$ abbiamo
$$I = \frac{dQ}{dt} = C\frac{dV}{dt}$$

### potenza istantanea assorbita
La potenza istantanea asssorbita da un condensatore è
$$p_a(t) = V(t)I(t) = CV(t)\frac{dV(t)}{dt} =\frac{d}{dt}\left(\frac{CV^2(t)}{2}\right) = \frac{dw_a^E}{dt}$$
con $w_a^E(t) = \frac{1}{2}CV^2(t)$ energia elettrica immagazzinata dal bipolo. 
 

## nel dominio dei [[fasori]]
L'equazione costitutiva grazie alla proprietà di derivazione diventa 
$$\overline{i} = j\omega C\overline{v}$$
e quindi $|\overline{i}|e^{j\varphi_{\overline{i}}} =\omega Ce^{j\pi_{/2}}|\overline{v}|e^{j\varphi_{\overline{v}}} = \omega C|\overline{v}|e^{j(\varphi_{\overline{v}}+\pi_{/2})}$ da cui capiamo che il modulo del fasore $\overline{i}$ varia con la plusazione $\omega$ ed è in <u>anticipo</u> rispetto al fasore $\overline{v}$ di $\frac{\pi}{2}$.

notiamo che per $\omega \to 0$ il condensatore si comporta come un [[circuito aperto]] ($\overline{i} \to 0$), invece per $\omega \to \infty$ il condensatore si comporta come un [[cortocircuito]] ($|\overline{v}| = \frac{|\overline{i}|}{\omega} \to 0$)

### Potenza assorbita in [[regime sinusoidale]]
Per il condensatore $\bar v = Z(j\omega)\bar\imath = -\frac{j}{\omega C}\bar\imath$ e $\varphi_Z = -\frac{\pi}{2}$. Quindi si ricava
$$P = \frac{|\bar v||\bar\imath|}{2}\cos(\pi/_2) = 0$$
e
$$Q = \frac{|\bar{v}||\bar\imath|}{2}\sin(\pi/_2) = -\frac{|\bar\imath|^2}{2\omega C} = -\frac{|\bar v|^2\omega C}{2}$$
Quindi il dissipatore non dissipa la potenza che assorbe ma la scambia.