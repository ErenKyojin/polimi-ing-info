---
aliases: 
creation date: 2023-07-05 15:16
modification date: 2023-07-05 15:16
---

Espressione generale per calcolare il campo magnetico prodotto da una spira di corrente chiusa di qualsiasi forma, riferendoci al piccolo segmento $\d l$, questo contribuisce al campo magnetico in $P$ con un termine infinitesimo pari a
$$ \bar{\d B} = \frac{\mu_{0}}{4 \pi} I \frac{\d l}{r^2} \hat{u}_{T} \times \hat{u}_{r} $$
che possiamo integrare per ottenere il contributo della spira in generale 
$$ \bar{B} = \frac{\mu_{0}}{4 \pi} I \oint \! \frac{\hat{u}_{T} \times \hat{u}_{r}}{r^2} \,\d l $$

>[!esempio]
>Il campo magnetico prodotto da una corrente lungo un conduttore rettilineo di lunghezza infinita e sezione infinitesima si ha:
> $$ B = \frac{\mu_{0}}{4 \pi}I \int _{-\infty}^{\infty} \! \frac{\sin \theta}{r^2} \, \mathrm{d}l = \frac{\mu_{0}I}{2 \pi R}$$
> 
>Le linee di forza di $\bar{B}$ sono circonferenze concentriche con la corrente e perpendicolari ad essa. 
>Sfruttando la regola della mano destra si ottiene quindi la [[formula di Biot-Savart]]:


## Campo magnetico di una spira di corrente circolare

![[Pasted image 20230705155257.png]]
Calcolare il campo mangetico in un punto qualsiasi è complesso, tuttavia molto meno complesso è calcolare il campo magnetico in un punto sulla circonferenza, prima di tutto notiamo che scrivere la legge è equivalente a scrivere che il campo magnetico $\bar{B}$ in un punto $P$ è la somma di contributi infinitesimi $\d\bar{B}$ di modulo
$$ \d B = \frac{\mu_{0}}{4\pi} I \frac{\d l}{r^2} $$
(per costruzione $\hat{u}_{T} \times \hat{u}_{r}$ = 1).
Il campo però è obliquo rispetto ad $X$, decomponendo $\d\bar{B}$ in un componente $\d \bar{B}_{\parallel}$ e in un componente $\d \bar{B}_{\perp}$ perpendicolare ad esso, si nota che, quando integiramo lungo la circonferenza, per ogni $\d \bar{B}_{\perp}$, ve ne è un altro in verso opposto da parte dell'elemento di lunghezza direttamente opposto a $\d l$, e quindi tutti i vettori $\d \bar{B}_{\perp}$ sommati danno zero. La risultante $\bar{B}$ sarà somma di tutti i vettori $\d \bar{B}$ ed è diretta come l'asse $X$.
Ora essendo $\cos \alpha = a / r$
$$ \d B_{\parallel} = \d B \cos \alpha = \d B \frac{a}{r} = \frac{\mu_{0}}{4\pi} \frac{Ia}{r^3}\d l $$
quindi
$$  B = \oint B_{\parallel} = \frac{\mu_{0}}{4\pi} \frac{Ia}{r^3} \oint \! \d l = \mu_{0} \frac{Ia^2}{2r^3} $$
Definendo $r = \sqrt{ a^2 + x^2 }$ si ottiene $B = \frac{\mu_{0}Ia^2}{2(a^2 + x^2)^{3/2}}$. Rispetto alla coordinata $x$ presa lungo l'asse $x = 0$ ovvero al centro della spira e $B \bigg |_{x=0} = \frac{\mu_{0}I}{2a}$.
Le linee di forza del campo magnetico di una spira di corrente circolare è rappresentato come:
![[Pasted image 20230705161928.png]]

### N spire
Se si hanno $N$ spire di raggio uguale e disposte coassialmente abbiamo un [[solenoide]] 

[[legge di ampere]]
