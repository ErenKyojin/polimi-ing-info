# impedenza
Delle equazioni di [[resistore]], [[condensatore]] ed [[induttore]] in regime sinusoidale è facile notare che si misurano tutte in $\Omega$, associamo quindi ad ognuno di questi bipoli una grandeza che rappresenta il rapporto tra il fasore della tensione descrittiva e il fasore della [[corrente]] descrittiva, col nome di impedenza (duale di [[ammettenza]])
$$
	\displaylines
	{
	Z_R(j\omega) = R \in \mathbb{R} \\
	Z_C(j\omega) = \frac{1}{j\omega C} \\
	Z_L(j\omega) = j\omega L
	}
$$

Il concetto di ammettenza si può estendere a tutti i bipoli costituiti da N terminali lineari tempo-invarianti definiti su [[base tensione]] o su [[base corrente]], ammettono il regime sinusoidale. E in queste ipotesi l'impedenza si definisce come il rapporto tra il fasore della tensione e quello della [[corrente]] ai morsetti del [[bipolo]] composito.

Inoltre è un numero complesso, quindi con una parte reale e una parte immaginaria:
$$Z(j\omega) = R(\omega) + jX(\omega)$$ 
dove $R(\omega)$ è la resistenza e $X(\omega)$ è la reattanza

In base al segno della reattanza si classificano le impedenze:
- $X(\hat{\omega}) < 0$, l'impedenza per $\omega = \hat{\omega}$ si dice di tipo #capacitivo (esempio il condensatore che ha $X_C(\omega) = -\frac{1}{\omega C} <0 \ \ \ \ \ \ \ \ \forall \ \omega)$
- $X(\hat{\omega}) = 0$, l'impedenza per $\omega = \hat{\omega}$ si dice di tipo #resistivo (esempio il resistore per il quale $X_R(\omega) = 0 \ \ \ \ \ \ \forall \ \omega$)
- $X(\hat{\omega}) > 0$, l'impedenza per $\omega = \hat{\omega}$ si dice di tipo #induttivo (esempio l'induttore per il quale $X_L(\hat{\omega}) = \omega L > 0 \ \ \ \ \ \ \ \forall \ \omega$) 

### [[Potenza]] nel [[regime sinusoidale]]
Una generica impedenza $Z(j\omega) = R(\omega) + jX(\omega) = |Z(j\omega)|e^{j\varphi_Z}$, ossia di tipo #capacitivo <=> $X(\omega) < 0$ ==> $Q = 0$. Infatti se $X(\omega) < 0$, $\varphi_Z \in [-\frac{\pi}2, 0]$.
Una generica impedenza di tipo induttivo avrà $X(\omega) > 0$ e quindi $\varphi_Z \in [0, \frac{\pi}2]$.
Inoltre notiamo come $\varphi_z \in [-\frac\pi2,\frac\pi2]$ visto che consideriamo impedenza con resistenza $R(\omega) \geq 0$
