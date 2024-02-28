---
aliases: valore RMS, valore quadratico medio, RMS
---
# valore efficace
Se dal [[teorema della media]] chiamiamo
$$\frac{1}{b-a}\int_{a}^b  \! f(x) \, \d x = \text{valor medio di $f$ su $[a,b]$} = f_{M}$$
Allora chiamiamo
$$\left(\frac{1}{b-a}\int_{a}^b  \![f(x)]^2 \, \d x\right)^{1/2} = \text{valor efficace di $f$ su $[a,b]$} = f_{E} $$
Essendo dalle [[somma di Cauchy-Riemann]] 
$$\frac{1}{b-a}\int _{a}^b \!f(x) \, \d x = \lim_{ n \to \infty } \frac{1}{b-a} S_{n} = \lim_{ n \to \infty } \frac{1}{n} \sum_{j = 1}^n f(\xi_{j})$$
Vediamo che $f_{M}$ è una generalizzazione della media artimetica tra $n$ numeri.
Il valore efficace $f_E$ è utile ad esempio nella teoria dei circuiti elettrici, per prendere ad esempio l'intensità di una [[corrente]] in regime sinusoidale. 

Data una grandezza sinusoidale $x(t) = X_{m} \cos(\omega t + \phi)$, il valore efficace corrispondente è $X_{eff} = \frac{X_{m}}{\sqrt{ 2 }}$, il fasore sarà $\bar{x} = \frac{X_{m}}{\sqrt{ 2 }}e^{j \varphi}$ e per riportarlo nel dominio del tempo $x(t) = \mathrm{Re}\{\sqrt{ 2 }\bar{x} e^{j \omega t}\}$
