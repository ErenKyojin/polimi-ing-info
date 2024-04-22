D LTI a TC

![[Segnali.canvas]]
D | F | dom
--- | --- | -- 
 [[polimi-ing-info/1.1 Analisi 1/Funzioni/dominio|dominio]] delle trasformate | $u(t) \xrightarrow{\text{legame algebrico}} y(t) \downarrow$ | $s,U,Y \in \mathbb{C}$
Dominio del tempo | $\uparrow$ $u(t) \xrightarrow{\text{legame differenziale / integrale}} y_{(F)}(t)$ | $t \in \mathbb{R}; u,y \in \mathbb{R}$ |



# [[Serie di Fourier]]
Dato un segnale $v(t)$ periodico di periodo $T$, ossia vale che $v(t+T) = v(t)$ per ogni $t$, lo si può esprimere con la sua serie di Fourier:
$$
v(t) = v_{0} + \sum_{k=1}^\infty v_{k} \sin(k\omega_{0} t + \varphi_{k})\quad \omega_{0} = \frac{2\pi}{T}
$$
Cioè come una costante piú un'infinità  numerabile di sinusoidi di frequenza multipla di una frequenza fondamentale.
$v_{0},v_{k},\varphi_{k}$ coefficienti di Fourier.


![[Trasformata di Fourier]]


![[Trasformata di Laplace#Definizione]]

Quindi gli ingredienti di un segnale:
- Trasformabile secondo $\mathcal{F}$, seni e rette
- Trasformabile secondo $\mathcal{L}$, 
  - esponenziali convergenti  ($\alpha < 0, \omega = 0$)
  - esponenziali divergenti ($\alpha > 0, \omega = 0$)
  - esponenziali sinusoidali convergenti ($\alpha < 0, w \neq 0$)
  - esponenziali sinusoidali diveergenti ($\alpha > 0, \omega  \neq 0$)
  - Seni e rette (come $\mathcal{F}$) ($\alpha = 0, \omega =0 / \omega \neq 0$ rispettivamente)
    

>[!remark]
>Trasformabile secondo $\mathcal{F} \implies$ trasformabile secondo $\mathcal{L}$