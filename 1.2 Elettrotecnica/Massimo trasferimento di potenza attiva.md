# Condizione di massimo trasferimento di potenza attiva
>[!Example] Esempio
>![[Pasted image 20220609115423.png]]
>Duale rispetto al [[Rifasamento]], e si tratta del capire come deve essere fatta l'impedenza di carico affinchè la potenza attiva trasferita da $\bar E$ a $Z(j\omega)$ sia massima, cioè si minimizzi la potenza assorbita dall'impedenza $Z_g(j\omega)$
>Assumendo $Z_g(j\omega) = R_g(\omega) + jX_g(\omega)$ e $Z(j\omega) = R(\omega) + jX(\omega)$
>
>
>$$\begin{flalign}
>	P_a^Z+jQ_a^Z \quad &= \quad \frac{|\bar v||\bar\imath|^*}{2} && \\
>& = \quad \frac{1}{2}\underbrace{\frac{\bar EZ(j\omega)}{Z(j\omega) + Z_g(j\omega)}}_\bar{v}\underbrace{\frac{\bar E^*}{(Z(j\omega)+Z_g(j\omega))^*}}_{\bar{\imath}^*} \\
>& = \quad \frac 1 2 \frac{|\bar E|^2Z(j\omega)}{|Z(j\omega) + Z_g(j\omega)|^2} \\
>& = \quad \frac{|\bar E|^2}2\frac{R(\omega) + jX(\omega)}{(R(\omega)+R_g(\omega))^2+(X(\omega)+X_g(\omega))^2}
>\end{flalign}
>$$
>L'ottimizzazione di $$P_a^Z =  \frac{|\bar E|^2}2\frac{R(\omega)}{(R(\omega)+R_g(\omega))^2+(X(\omega)+X_g(\omega))^2}$$
deve essere fatta rispetto a $R(\omega)$ e $X(\omega)$. Va scelto in particolare $X(\omega) = -X_g(\omega)$ così che il denominatore sia minimo e quindi $P_a^Z$ sia massimo
$$\tilde P_a^Z = P_a^Z \Bigg|_{X(\omega) = -X_g(\omega)}=\frac{|\bar E|^2}{2}\frac{R(\omega)}{(R(\omega)+R_g(\omega))^2}$$
Ora minimizziamola rispetto a $R(\omega)$ calcolando
>$$
	>\begin{flalign}
	>\frac{d\tilde{P}_a^Z}{dR(\omega)}\quad &=\quad \frac{d}{dR(\omega)}\left[\frac{|\bar E|^2}{2}\frac{R(\omega)}{(R(\omega) + R_g(\omega))^2}\right] \\
	> &=\frac{|\bar E|}{2} \frac{(R(\omega)+R_g(\omega))^2 -2R(\omega)(R(\omega)+R_g(\omega))}{(R(\omega)+R_g(\omega))^4}\\
	>&=\quad \frac{|\bar E|^2}{2}\frac{R_g(\omega)-R(\omega)}{(R(\omega)+R_g(\omega))^3}
	>\end{flalign}
>$$
>Per $R(\omega) = R_g(\omega)$ la $\frac{d\tilde{P}_a^Z}{dR(\omega)} = 0$, dove troviamo il massimo locale di $\tilde{P}_a^Z$-
>La condizione di massima trasferimento di potenza attiva è dunque
>$$Z(j\omega) = Z_g^*(j\omega)$$
condizione che comporta anche l'annullarsi edlla potenza reattiva erogata dal generetaroe $\bar E$ che vede ai suoi capi
$$Z(j\omega) + Z_g^*(j\omega) = 2R(\omega) \in \mathbb{R}$$
