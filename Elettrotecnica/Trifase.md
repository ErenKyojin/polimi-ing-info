---
aliases: 
creation date: 2023-06-16 12:12
modification date: 2023-06-16 12:12
---


## Tensione
> [!def]
> ![[Pasted image 20230616121955.png]]
> 

Somma delle tensioni a stella $\bar{v}_{an},\bar{v}_{bn},\bar{v}_{cn}$è 0 sia in sequenza positiva che in sequenza negativa

Si può passare dalle tensioni a stella in sequenza positiva a quelle a triangolo attraverso le seguenti formule
$$ \begin{align}
\bar{v}_{ab} = \sqrt{ 3 }e^{j \pi/6} \bar{v}_{an} \\
\bar{v}_{bc} = \sqrt{ 3 }e^{j \pi/6} \bar{v}_{bn} \\
\bar{v}_{ca} = \sqrt{ 3 } e^{j \pi/6} \bar{v}_{cn}
\end{align} $$
Se invece si è in sequenza negativa:
$$ \begin{align}
\bar{v}_{ab} = \sqrt{  3 }e^{-j \pi/6 } \bar{v}_{an} \\
\bar{v}_{bc} = \sqrt{ 3 }e^{-j \pi/6} \bar{v}_{bn} \\
\bar{v}_{ca} = \sqrt{ 3 }e^{-j \pi/6}\bar{v}_{cn}
\end{align} $$

>[!oss]
>Le tensioni a triangolo sono scalate di $\sqrt{ 3 }$ in modulo, e sono in anticipo di $\dfrac{\pi}{6}$ rispetto alla tensione a stella (rispettivamente in ritardo per la sequenza negativa)

Infine per passare dalla configurazione a triangolo a quella a stella:
$$ \begin{align}
&v_{ab}(t) = V_{0}\cos(\omega t + \phi_{0}) &&v_{ab}(t) = V_{0} \cos(\omega t + \phi_{0}) \\
&v_{bc}(t) = V_{0} \cos\left( \omega t + \phi_{0} - \frac{2}{3}\pi \right) &&v_{ca}(t) = V_{0}\cos\left( \omega t + \phi_{0} - \frac{2}{3}\pi  \right) \\
&v_{ca}(t) = V_{0}\cos\left( \omega t + \phi_{0} - \frac{4}{3}\pi \right) &&v_{bc}(t) = V_{0} \cos\left( \omega t + \phi_{0} - \frac{4}{3}\pi \right)
\end{align} $$

>[!oss]
>Le tensioni a stella sono scalate di un fattore $\frac{1}{\sqrt{ 3 }}$ in modulo e ciascuna è in ritardo di $\dfrac{\pi}{6}$ rispetto alla corrispondente tensione a triangolo nel caso di sequenza positiva (anticipo in caso di sequenza negativa)

## Carico
Il carico in un sistema trifase è formato da impedenze in quanto consideriamo regime sinusoidale permanente, è detto carico bilanciato se tutte impedenze di fase hanno tutte stesso modulo e argomento (uguali in campo complesso).
Si ha quindi in un carica bilanciato a stella:
$$ Z_{1} = Z_{2} = Z_{3} = Z_{Y} $$
Ed in carico bilanciato a triangolo
$$Z_{a} = Z_{b} = Z_{c} = Z_{\Delta}$$
Sfruttando le trasformazioni stella triangolo $Z_{\Delta} = 3Z_{Y}$ e quindi $Z_{Y} = \frac{Z_{\Delta}}{3}$

## Collegamenti
Sia i carichi che i generatori si possono connettere o a stella o a triangolo, si hanno quindi quattro possibili abbinamenti

### Collegamento $Y-Y$
Sia generatori che carico connessi a stella, si identificano due centri stella $n$ e $N$ connessi mediante un filo detto **filo di neutro**, se il filo di neutro è un cortocircuito le correnti di linea si ricavano come $$\bar{\imath}_{k}=\frac{\bar{v}_{kn}}{Z_{Y}}$$
$k \in \{ a,b,c \}$, le correnti di linea sono orientate nella stessa sequenza delle tensioni del generatore trifase.
![[Pasted image 20230616131841.png]]


La somma delle correnti in fase è nulla istante per istante, quindi $\bar{\imath}_{n} = - (\bar{\imath}_{a} + \bar{\imath}_{b} + \bar{\imath}_{c})=0$. Notiamo che, essendo $n$ ed $N$ connessi da un cortocircuito, sono evidentemente equipotenziali. tuttavia questo vale anche se vi è un impedenza tra $n$ ed $N$
![[Pasted image 20230616131856.png]]
ed in generale vale per tutti i sistemi trifase simmetrici ed equilibrati indipendentemente dal fatto che vengano collegati tramite un filo neutro di impedenza $Z_n$ o da un cortocircuito. Questo si può provare attraverso le KVL-2.

Utile per questo genere di circuiti è il'[[circuito equivalente monofase]] 

### Collegamento $Y-\Delta$ bilanciato
Generatore a stella e carico a triangolo entrambi bilanciati, è il più frequente. 
![[Pasted image 20230616132600.png]]

Le tensioni di linea si determinano attraverso la conversione da stella a triangolo, otteniamo quindi
$$ \begin{align}
\bar{\imath}_{AB} = \frac{\bar{v}_{ab}}{Z_{\Delta}} = \frac{\bar{v}_{AB}}{Z_{\Delta}} = \frac{\sqrt{ 3 }e^{j \pi/6}\bar{v}_{an}}{Z_{\Delta}} \\
\bar{\imath}_{BC} = \frac{\bar{v}_{bc}}{Z_{\Delta}} = \frac{\bar{v}_{BC}}{Z_{\Delta}} = \frac{\sqrt{ 3 }e^{j \pi/6}\bar{v}_{bn}}{Z_{\Delta}} \\
\bar{\imath}_{CA} = \frac{\bar{v}_{ca}}{Z_{\Delta}} = \frac{\bar{v}_{CA}}{Z_\Delta} = \frac{\sqrt{ 3 }e^{j \pi/6}\bar{v}_{cn}}{Z_{\Delta}}
\end{align} $$

Le correnti di linea si ricavano attraverso le KCL ai nodi A, B, e C.
Da queste formula possiamo ricavare che $\bar{\imath}_{a} = \frac{\bar{v}_{CA}}{Z_{\Delta}} = \bar{\imath}_{AB}e^{-j (4 \pi/3)}$ e quindi possiamo scrivere che
$$ \bar{\imath}_{a} = \bar{\imath}_{AB} - \bar{\imath}_{CA} = \bar{\imath}_{AB}\sqrt{ 3 }e^{-j \pi/6 } $$
e allo stesso modo
$$ \begin{align}
\bar{\imath}_{b} = \bar{\imath}_{BC} \sqrt{ 3 }e^{-j \pi/6} \\
\bar{\imath}_{c} = \bar{\imath}_{CA} \sqrt{ 3 }e^{-j \pi/6}
\end{align} $$
Per la sequenza negativa si dimostra:
$$\begin{align}
 \bar{\imath}_{a} = \bar{\imath}_{AB} \sqrt{ 3 }e^{j \pi/6} \\
\bar{\imath}_{b} = \bar{\imath}_{BC}\sqrt{ 3 }e^{j \pi/6} \\
\bar{\imath}_{c} = \bar{\imath}_{CA}\sqrt{ 3 }e^{j \pi/6}
\end{align} $$


L'alternativa per risolvere un circuito di questo tipo è trasformare la connessione a triangolo in una a stella, riducendolo ad una connessione $Y$-$Y$

### Collegamento $\Delta-\Delta$ bilanciato
Le tensioni di linea coincidono con le tensioni di fase, quindi le correnti di fase sono
$$ \begin{align}
\bar{\imath}_{AB} = \frac{\bar{v}_{ab}}{Z_{\Delta}} = \frac{\bar{v}_{AB}}{Z_{\Delta}} \\
\bar{\imath}_{BC} = \frac{\bar{v}_{bc}}{Z_{\Delta}} = \frac{\bar{v}_{BC}}{Z_{\Delta}} \\
\bar{i}_{CA} = \frac{\bar{v}_{ca}}{Z_{\Delta}} = \frac{\bar{v}_{CA}}{Z_{\Delta}}
\end{align} $$
Mentre le correnti di linea si ottengono come nel caso $Y - \Delta$

### Collegamento $\Delta-Y$ bilanciato
Le tensioni di linea coincidono con le tensioni di fase del generatore. Per ottenere le correnti di linea è possibile operare in diversi modi. Ricavare le configurazione a stella del generatore trifase equivale al triangolo presente e riportarsi quindi ad uno schema $Y$-$Y$. Assumendo la sequenza positiva per le tensioni di fase della configurazione a triangolo $\bar{v}_{AB},\bar{v}_{BC},\bar{v}_{CA}$ le equivalenti tensioni rispetto al centro stella si può scrivere:
$$ \bar{v}_{an} = \frac{\bar{v}_{ab}}{\sqrt{ 3 }}e^{-j \pi/6} = \frac{\bar{v}_{AB}}{\sqrt{ 3 }}e^{-j \pi/6} $$
Utilizzando il circuito equivalente monofase del collegamento $Y-Y$ si ricava
$$ \bar{\imath}_{a} = \frac{\frac{\bar{v}_{AB}}{\sqrt{ 3 }}e^{-j \pi/6}}{Z_{Y}} $$

## Potenza
La potenza istantanea assorbita dal carico trifase, supponendolo collegato a $Y$, si scrive nel dominio del tempo a partire dalle tensioni di fase
$$ \begin{align}
&v_{an}= \sqrt{ 2 }V_{p} \cos(\omega t) \\
&v_{bn} = \sqrt{ 2 }V_{p}\cos\left( \omega t - \frac{2}{3}\pi \right) \\
&v_{cn} = \sqrt{ 2 }V_{p}\cos\left( \omega t - \frac{4}{3} \pi \right)
\end{align} $$
dove il fattore $\sqrt{ 2 }$ è necessario dato che $V_{p}$ è riferito al valore efficace delle tensioni. Assumendo un'impedenza di carico
$$ Z_{Y} = |Z_{Y}| e^{j \arg(Z_{Y})} = Ze^{j \theta} $$
le correnti di fase possono essere scritte come
$$ \begin{align}
&i_{a} = \sqrt{ 2 } \underbrace{ I_{p} }_{ V_{p} / Z } \cos(\omega t - \theta) \\
&i_{b} = \sqrt{ 2 } I_{p}\cos\left( \omega t - \frac{2}{3}\pi - \theta \right) \\
&i_{c} = \sqrt{ 2 } I_{p} \cos\left( \omega t - \theta - \frac{4}{3} \pi \right)
\end{align} $$
La potenza istantanea totale nel carico è la somma delle potenze istantanee nelle tre fasi, cioè,
$$\begin{align}
 P_{a}^{Z_{Y}}(t) &= v_{an}(t)i_{a}(t) + v_{bm}(t) i_{b}(t) + v_{cn}(t)i_{c}(t)= \\
&=2V_{p}I_{p}[\cos(\omega t)\cos(\omega t - \theta) + \\
&+ \cos(\omega t - \frac{2}{3})\cos(\omega t - \frac{2}{3}\pi - \theta) + \\
&+ \cos(\omega t - \frac{4}{3}\pi) \cos(\omega t - \frac{4}{3} - \theta)]
\end{align} $$
Usando l'identità trigonometrica $\cos(\alpha)\cos(\beta) = \frac{1}{2}[\cos (\alpha + \beta) + \cos(\alpha - \beta)]$
$$ P_{a}^{Z_{Y}} = V_{p}I_{p}\left[ 3\cos \theta + \cos \gamma + 2\left( -\frac{1}{2} \right)\cos \gamma \right] = 3V_{p}I_{p} \cos \theta $$
Con $\gamma = 2\omega t - \theta$. La potenza istantanea totale in un sistema trifase bilanciato è quindi costante, non varia nel tempo come fanno invece le potenze istantanee delle singole fasi. Con $\gamma = 2\omega t - \theta$. La potenza istantanea totale in un sistema trifase bilanciato è costante

Un generatore trifase bilanciato che alimenta carichi bilanciati eroga una potenza istantanea costante, anzichè pulsante come nel caso monofase

Questo risultato vale anche per il carico a triangolo ed è forse la ragione più importante per utilizzare un sistema trifase per la generazione e distribuzione di potenza elettrica. Essendo la potenza istantanea complessiva indipendente dal tempo, la potenza media assorbita per fase per il carico a stella o a triangolo è $p_{a}^{Z_{Y}} = \frac{p_{a}^{Z_{\Delta}}}{3} = V_{p}I_{p} \cos \theta$. La potenza attiva per fase è dunque pari a
$$ P_{p} = V_{p}I_{p} \cos\theta $$
E quella reattiva:
$$ Q_{p} = V_{p}I_{p}\sin\theta $$

Grazia alla reazione corrente di fase-tensione di fase e corrente di linea-tensione di linea nella connessione $Y-Y$ possiamo scrivere $P_{p} = 3 \frac{V_{l}}{\sqrt{ 3 }} I_{l} \cos\theta = \sqrt{ 3 }V_{l}I_{l} \sin \theta$. La potenza complessa assorbita per fase è pari a
$$ \hat{A}_{p} = P_{p} + j Q_{p} $$