# analisi [[fasori|fasoriale]]
grazie ai [[Richiami]] possiamo provare a vedere come si calcola l'[[integrale]] particolare  $x_{ip}(t)$ del [[circuito RC]] nel caso avessimo
$$
	\begin{cases}
	u(t) = \alpha\cos(\omega t + \varphi) \\
	\varphi = 0
	\end{cases}
$$
caso utile sia a descrivere gli utilizzatori con alimentazione continua ([[regime stazionario]]), sia gli utilizzatori in alimentazione alternata con pulsazione $\omega$ ([[regime sinusoidale]])

Ci aspettiamo che, in base alla nostra tabella della [[equazione differenziale]] $$x(t; k, t_0) = ke^{\lambda(t-t_0)}+ \beta\cos(\omega t ) + \gamma\sin(\omega t)$$, inoltre sempre per le [[equazione differenziale]]
$$\frac{d}{dt}[\beta\cos(\omega t) + \gamma\sin(\omega t)] = \lambda[\beta\cos(\omega t) + \gamma\sin(\omega t)] + \alpha\cos(\omega t)$$
==>$$-\beta\omega\sin(\omega t) + \gamma\omega\cos(\omega t) = \lambda\beta\cos(\omega t) + \lambda\gamma\sin(\omega t) + \alpha\cos(\omega t)$$
visto che deve essere vera $\forall \ t$
$$
	\begin{cases}
		\beta\omega + \lambda\gamma = 0 \\
		\gamma\omega + \lambda\beta - \alpha = 0
	\end{cases}
$$
e quindi
$$\gamma = -\frac{\omega}{\lambda}\beta$$
che sostituita nella seconda da
$$-(\frac{\omega^2}{\lambda} + \lambda)\beta = \alpha$$
quindi
$$
	\begin{cases}
		\beta = -\frac{\alpha\lambda}{\omega^2 + \lambda^2} \\
		\gamma = \frac{\alpha\omega}{\omega^2 + \lambda^2}
	\end{cases}

$$
E allora
$$x_{IP}(t) = [\omega\sin(\omega t) - \lambda\cos(\omega t)]\frac{\alpha}{\omega^2 + \lambda^2}$$

Ritornando invece alla soluzione dell'[[equazione differenziale]] del [[circuito RC]], ipotizzando $\lambda < 0$ e $u(t) = \alpha\cos(\omega t)$, tende all'equazione qua sopra con $t \to \infty$, ovvero quando il [[transitorio]] si sarà esaurito.
Ma la qui sopra la possiamo riscrivere come
$$x_{IP}(t) = \rho(\lambda,\omega,\alpha,\varphi)\cos(\omega t + \psi(\lambda,\omega,\alpha,\varphi))$$
(ovviamente sto considerando $\varphi \ne 0$)

Quindi le soluzioni dell'equazione di stato di un circuito RC o RL del primo ordine non degenere, l'integrale particolare dipende da $(\omega,\ \alpha,\ \varphi)$ che specificano l'ingresso, e da $\lambda$ che a sua volta dipende dalla strutture di $N_R$.

Grazie all'analisi fasoriale possiamo studiare circuiti i cui ingressi possono essere $M\geq 1$ e hanno la pulsazione $\omega$ e una struttura di tipo $\alpha_k\cos(\omega t + \varphi_k)$ con $k = 1,...,M$ costituiti da N-terminali lineari, dinamici e adinamici, tempo-invarianti.