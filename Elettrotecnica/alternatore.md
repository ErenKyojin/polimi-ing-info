# Alternatore
>[!def] Alternatore | #definizione
>Generatore di [[tensione | tensione trifase]] costituito da un magnete rotante detto *rotore* circondato da un sistema di avvolgimenti fisso detto *statore*
>![[Pasted image 20220616120107.png]]
>con i tre avvolgimenti nello statore che vanno dai terminali $a - a'$, $b -b'$ e $c-c'$, che tra loro sono spaziati di 120° lungo la circonferenza.
>Quando il rotore ruota il campo magnetico che si forma produce un flusso nei tre avvolgimenti ad una tensione ai morsetti:
> - Quando gira in senso antiorario viene generata la sequenza positiva
> - Quando gira in senso orario viene generata la sequenza negativa


>[!tip] Connesione a stella
>Connettendo i morsetti $a',\ b'$ e $c'$ ad un unico morsetto $n$ otteniemo una connessione "a stella" o ad Y
>![[Pasted image 20220616122119.png]]
>Le tensioni della configurazione a stella (ossia le tensioni di fase) sono scrivibili senza il pedice n ($v_{an}(t) = v_a(t$) in quanto sia la sequenza positiva sia quella negativa godono della proprietà $v_a(t) + v_b(t) + v_c(t) = 0$ come dimostrabile:
>$$\begin{flalign}
>\quad\quad\quad\quad v_a+v_b+v_c &= V_p\left(1 + e^{-j\frac{2}{3}\pi}+e^{-j\frac{4}{3}\pi}\right) &\\
>
>&=V_p\left(1+e^{-j\frac{2}{3}\pi} + e^{-j(2\pi-\frac{4}{3}\pi)}\right) \\
>
>&=V_p\left(1+e^{-j\frac{2}{3}}+e^{j\frac{2}{3}\pi}\right) \\
>&= V_p(1 + 2\cos(\frac{2}{3}\pi)) \\
>&= V_P(1 + 2(-\frac{1}{2})) \\
>&= 0
>\end{flalign}$$


>[!tip] Connessione a triangolo
>![[Pasted image 20220616123520.png]]


Per passare dalla connessione a stella a quella a triangolo:
>[!example] Sequenza positiva
>$$\begin{flalign}
 > \qquad \bar v_{ab}\quad &= \quad \bar v_{an} - \bar v_{bn} &\\
 > &= V_p(1-e^{-j\frac{2}{3}\pi}) \\
 > &= V_p(1+\frac{1}{2}+j\frac{\sqrt3}{2}) \\
 > &= \sqrt3V_pe^{j\frac{\pi}{6}} \\
 > &= \sqrt3e^{j\frac{\pi}6}\bar v_{an}
>\end{flalign}$$
E analogamente
>$$\begin{flalign}
 >\bar v_{bc} &= \sqrt3e^{j\frac\pi6}\bar v_{bn} \\
 >\bar v_{ca} &= \sqrt3e^{j\frac{\pi}{6}}\bar v_{cn}
 >\end{flalign}$$

Quindi le tensioni di linea sono scalate di un fattore $\sqrt3$ l'una e ciascuna è in anticipo di $30°$ rispetto alla corrispondente tensione di fase, quindi anche le tensioni di linea hanno somma istante per istante nulla come quelle di fase


Per passare dalla connessione a trangolo a quella a stella:
>[!example] Sequenza positiva
>$$\begin{flalign}
 >v_{ab}(t) &= V_0\cos(\omega t +\phi_0) \\
 >v_{bc}(t) &= V_0\cos\left(\omega t +\phi_0 - \frac23\pi\right)\\
 >v_{ca}(t) &= V_0\cos\left(\omega t +\phi_0 - \frac43\pi\right) 
>\end{flalign}$$


>[!example] Sequenza negativa
>$$\begin{flalign}
 >v_{ab}(t) &= V_0\cos(\omega t+\phi_0) \\
 >v_{ca}(t) &= V_0\cos\left(\omega t+\phi_0 -\frac23\pi\right) \\
 >v_{bc}(t) &= V_0\cos\left(\omega t+\phi_0 - \frac43\pi\right)
>\end{flalign}$$