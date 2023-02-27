# i fasori
tornando alla funzione $x(t) = X_m\cos(\omega t + \varphi)$ che si può riscrivere come $$x(t) = X_m\cos(\omega(t+\frac{\varphi}{\omega}))$$
osserviamo come $\varphi$ anticipa o ritarda la funzione in base al proprio valore di una frazione di periodo $\frac{T}{x}$

Quello che vogliamo fare noi per definire i fasori è cercare una corrispondenza tra la funzione $x(t)$ ed un numero complesso $\overline{x}$

allora consideriamo il numero complesso
$$X_me^{j(\omega t + \varphi)} = \underbrace{X_me^{j\varphi}}_{\overline{x}}e^{j\omega t} =X_m\cos(\omega t + \varphi) + jX_m\sin(\omega t + \varphi)$$
$$\Rightarrow x(t) = X_m\cos(\omega t + \varphi) = Re\{\overline{x}e^{j\omega t}\}$$

E allora la relazione tra dominio del tempo e dominio dei numeri complessi diventa
$$x(t) = X_m\cos(\omega t + \varphi) \leftrightarrow X_me^{j\varphi} = \overline{x}$$

>[!def] FASORE
>data una funzione $x(t) = X_m\cos(\omega t + \varphi)$ le associamo il numero complesso fasore $X_me^{j \varphi}$, per passare dagli uni agli altri la relazione sopra
>
>==oss==: nel passaggio da funzione a fasore si perde la [[pulsazione]] $\omega$ quindi dobbiamo lavorare sempre alla stessa pulsazione nel dominio dei fasori

## proprietà
* Unicità
	due funzioni $x_1(t) = X_{m_1}\cos(\omega t  + \varphi_1)$ e $x_2(t) = X_{m_2}$ sono uguali se e solo se $\overline{x_1} = \overline{x_2}$
	

* Linearità
	date due funzioni  $x_1(t) = X_{m_1}\cos(\omega t  + \varphi_1)$ e $x_2(t) = X_{m_2}$ e due costanti $a_1$ e $a_2$, il fasore $\overline{x}$ associato alla funzione $a_1x_1(t) + a_2x_2(t)$ è pari a $a_1\overline{x_1} + a_2\overline{x_2}$
	

* Derivazione
	il fasore $\overline{y}$ associato alla funzione $y(t) = \frac{d}{dt}x(t)$ con $x(t) = X_m\cos(\omega t + \varphi)$ è pari a $j\omega\overline{x}$


I fasori e le loro proprietà ci permettono di sfruttare il [[metodo simbolico]] per risolvere circuito.