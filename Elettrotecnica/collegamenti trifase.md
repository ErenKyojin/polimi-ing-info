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

# ANKI


```anki
id: 1705250520476
deck: Elettrotecnica
---
Collegamento Y-Y
===
Generatori e carico sono entrambi disposti a stella.
Abbiamo due centri $n$ e $N$ connessi attraverso un filo di neutro attraverso il quale non passa corrente, sono quindi equipotenziali anche se vi è un impedenza sul filo di neutro.
le correnti sono orientate con sequenza uguale alle tensioni del generatore.
Si risolvono attraverso l'utilizzo del circuito equivalente monofase.
```


```anki
id: 1705511260572
deck: Elettrotecnica
---
Collegamento Y-$\Delta$
===
![[Pasted image 20230616132600.png]]
Le tensioni di linea si determinano attraverso la conversione da stella a triangolo:
(lettere minuscole indicano generatori, maiuscole carichi)
- $\bar{i}_{AB} = \dfrac{\bar{v}_{ab}}{Z_\Delta} = \dfrac{\bar{v}_{AB}}{Z_\Delta} = \dfrac{\sqrt{3} e^{j\pi/6}\bar{v}_{an}}{Z_\Delta}$
- $\bar{i}_{BC} = \dfrac{\bar{v}_{bc}}{Z_\Delta} = \dfrac{\bar{v}_{BC}}{Z_\Delta} = \dfrac{\sqrt{3} e^{j\pi/6}\bar{v}_{bn}}{Z_\Delta}$
- $\bar{i}_{CA} = \dfrac{\bar{v}_{ca}}{Z_\Delta} = \dfrac{\bar{v}_{CA}}{Z_\Delta} = \dfrac{\sqrt{3} e^{j\pi/6}\bar{v}_{cn}}{Z_\Delta}$

per la sequenza positiva
- $\bar{i}_a = \bar{i}_{AB}\sqrt{3}e^{-j\pi/6}$
- $\bar{i}_b = \bar{i}_{BC}\sqrt{3}e^{-j\pi/6}$
- $\bar{i}_c = \bar{i}_{CA}\sqrt{3}e^{-j\pi/6}$

per la sequenza negativa
- $\bar{i}_a = \bar{i}_{AB}\sqrt{3}e^{j\pi/6}$
- $\bar{i}_b = \bar{i}_{BC}\sqrt{3}e^{j\pi/6}$
- $\bar{i}_c = \bar{i}_{CA}\sqrt{3}e^{-j\pi/6}$
```


```anki
id: 1705511263974
deck: Elettrotecnica
---
Collegamento $\Delta$-$\Delta$
===
Tensioni di linea coincidono con le tensioni di fase, quindi le correnti di fase sono
- $\bar{i}_{AB} = \dfrac{\bar{v}_{ab}}{Z_\Delta} = \dfrac{\bar{v}_{AB}}{Z_\Delta}$
- $\bar{i}_{BC}= \dfrac{\bar{v}_{bc}}{Z_\Delta} = \dfrac{\bar{v}_{BC}}{Z_\Delta}$
- $\bar{i}_{CA}= \dfrac{\bar{v}_{ca}}{Z_\Delta} = \dfrac{\bar{v}_{CA}}{Z_\Delta}$
```


```anki
id: 1705511265272
deck: Elettrotecnica
---
Collegamento $\Delta - Y$
===
Tensioni di linea coincidono con le tensioni di fase del generatore.
Per le correnti di linea si può convertire ad uno schema Y-Y
avremo quindi

$$ \bar{i}_a = \frac{\frac{\bar{v}_{AB}}{\sqrt{3}}e^{-j\pi/6}}{Z_Y} $$
```
