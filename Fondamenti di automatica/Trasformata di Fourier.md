Dato un segnale $v(t)$ definito su tutto l'asse $\mathbb{R}$, se ne definisce la trasformata di Fourier (TDF) come 
$$V(j\omega) = \mathcal{F}[v(t)] = \int _{-\infty}^{+\infty}v(t)\fbox{$e^{j\omega t}$} \, dt \quad \text{se l'integrale esiste}$$
La parte riquadrata è detta **nucleo** della trasformata.
Mentre l'antitrasformata è
$$
v(t) = \mathcal{F}^{-1}[V(jw)] = \int _{-\infty}^{+\infty} V(j\omega)\fbox{$e^{j \omega t}$} \, d\omega   
$$
La parte riquadrata è o costante ($\omega = 0$) o una sinusoide $(\omega \neq 0)$ ([[fasori]])

$v(t)$ è cioè la somma di infinite sinusoidi, un infinita continua non numerabile.