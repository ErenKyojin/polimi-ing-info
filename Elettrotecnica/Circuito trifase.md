# Schemi di connessione generatore - carico
Un generico circuito #trifase è costituito da un generatore trifase e da un [[Carico trifase bilanciato]], collegati attraverso tre conduttori definiti **linea trifase**, supposti equipotenziali. Le tensioni tra i conduttori della linea si dicono tensioni di linea, mentre sono dette correnti di linea quelle che scorrono nella linea trifase. Si chiamano invece tensioni di fase e correnti di fase le tensioni ai capi dei singoli bipoli del carico e le correnti che li attraversano.

Essendo sia generatori che carichi sia descrivibili a stella che a triangolo abbiamo 4 possibili casi

### Collegamento $Y-Y$
>[!example]-
>![[Pasted image 20220616175834.png]]


Le correnti di linea, corrispondenti in questa configurazione alle correnti di fase, si ricavano come
$$\bar\imath_k = \frac{\bar v_{kn}}{Z_Y}$$
con $k \in\lbrace 'a', 'b','c'\rbrace$. Inoltre la somma delle correnti di fase è nulla come accade per le tensioni è:
$$\bar\imath_n = -(\bar\imath_a+\bar\imath_b+\bar\imath_c) = 0$$
E quindi assumendo un [[Impedenza]] sulla linea non nulla anche la caduta di tensione tra i morsetti $n$ ed $N$ essendo $\bar\imath_n = 0\ \forall\ Z_n$

I sistemi stella a stella possono essere risolti quindi con il circuito equivalente monofase, consideriamo ad esempio la fase "a" e ricaviamo $\bar\imath_a=\frac{\bar v_{an}}{Z_Y}$. Dalla $\bar\imath_a$ e dalla sequenza delle fasi si possono ricavare le correnti.

### Collegamento $Y-\Delta$ bilanciato
>[!example]-
>![[Pasted image 20220616181806.png]]

Ovvero un generatore a stella e carico a triangolo entrambe bilanciati, è lo schema più comune e non vi è nessun collegamento neutro tra il generatore ed il carico. Le tensioni di linea:
$$\begin{flalign}
	\bar\imath_{AB} &= \frac{\bar v_{ab}}{z_\Delta} =\frac{\bar v_{AB}}{z_\Delta} \\
	\bar\imath_{BC} &= \frac{\bar v_{bc}}{z_\Delta} = \frac{\bar v_{BC}}{z_\Delta} \\
	\bar\imath_{CA} &= \frac{\bar v_{ca}}{z_\Delta} = \frac{\bar v_{CA}}{z_\Delta} \\
\end{flalign}
$$

Le correnti di linea si ottengono invece applicando le [[leggi di Kirchoff]] ai nodi A, B e C:
$$\begin{flalign}
	\bar\imath_a &= \bar\imath_{AB} - \bar\imath_{CA} \\
	\bar\imath_b &= \bar\imath_{BC} - \bar\imath_{AB} \\
	\bar\imath_c &= \bar\imath_{CA} - \bar\imath_{BC}
\end{flalign}$$

Essendo $\bar\imath_{CA} = \bar\imath_{AB}e^{-j\frac43\pi}$

$$
\begin{flalign}
	\bar\imath_a\quad &=\quad \bar\imath_{AB}\left(1 - e^{-j\frac43\pi}\right) \\
	&=\quad \bar\imath_{AB}\left(1+\frac12-j\frac{\sqrt3}2\right) \\
	&=\quad\bar\imath_{AB}\sqrt3\left(\frac{\sqrt3}{2}-\frac{j}{2}\right) \\
	&=\quad \bar\imath_{AB}\sqrt 3e^{-j\frac{\pi}6\pi}
\end{flalign}
$$
E allo stesso modo si ricava
$$\begin{flalign}
\bar\imath_b &=\bar\imath_{BC}\sqrt 3e^{-j\frac\pi6} \\
\bar\imath_c &=\bar\imath_{CA}\sqrt 3e^{-j\frac{\pi}6}
\end{flalign}$$

Alternativamente è possibile ridurre il circuito ad una connessione stella stella e riutilizzare l'equivalente monofase.

### Collegamento $\Delta - \Delta$ bilanciato
>[!example]-
>![[Pasted image 20220617104220.png]]

Anche in questa configurazione l'interesse è quello di calcolare le correnti di linea e le correnti di fase, mentre le tensioni di linea coincidono con quelle di fase.

Le correnti di fase sono:
$$
\begin{flalign}
 \bar\imath_{AB} &= \frac{\bar v_{ab}}{Z_\Delta} = \frac{\bar v_{AB}}{Z_\Delta} \\
 \bar\imath_{BC} &= \frac{\bar v_{bc}}{Z_\Delta} = \frac{\bar v_{BC}}{Z_\Delta} \\
 \bar\imath_{CA} &= \frac{\bar v_{ca}}{Z_\Delta} = \frac{\bar v_{CA}}{Z_\Delta}
\end{flalign}
$$

Le correnti di linea si ottengono come nella connessione $Y-\Delta$

### Collegamento $\Delta - Y$ bilanciato
>[!example]-
>![[Pasted image 20220617105131.png]]


Le tensioni di linea coincidono con le tensioni di fase, per ottenere le correnti di linea si può operare invece in diversi modi. Una possibilità è ricavare la configurazione a stella del generatore trifase e portarsi al collegamento $Y-Y$. Assumendo sequenza positiva per le tensioni di fase della configurazione a triangolo $\bar v_{AB},\ \bar v_{BC} \text{ e } \ \bar v_{CA}$. Le equivalenti [[tensione | Tensioni trifase]] si ricavano come visto in precedenza, ad esempio:
$$\bar v_{an} = \frac{\bar v_{ab}}{\sqrt 3}e^{-j\frac{\pi}{6}} = \frac{\bar v_{AB}}{\sqrt 3}e^{-j\frac{\pi}{6}}$$

Utilizziando adesso il circuito equivalente monofase del collegamento $Y-Y$ si ricava
$$\bar\imath_A = \frac{\frac{\bar v_{AB}}{\sqrt3}e^{-j\frac{\pi}{6}}}{Z_Y}$$