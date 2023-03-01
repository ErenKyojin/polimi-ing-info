Dato un segnale $v(t)$ definito su tutto l'asse $\mathbb{R}$, se ne definisce la trasformata di Fourier (TDF) come 
$$V(j\omega) = \mathcal{F}[v(t)] = \int _{-\infty}^{+\infty}v(t)\fbox{$e^{j\omega t}$} \, dt \quad \text{se l'integrale esiste}$$
La parte riquadrata è detta **nucleo** della trasformata.
Mentre l'antitrasformata è
$$
v(t) = \mathcal{F}^{-1}[V(jw)] = \int _{-\infty}^{+\infty} V(j\omega)e^{j \omega t} \, d\omega   
$$