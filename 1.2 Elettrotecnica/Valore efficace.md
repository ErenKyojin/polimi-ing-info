# valore efficace
>[!error] Valore efficace | #definizione
Il [[fasori | fasore]] che rappresenta una grandezza sinusoidale viene preso al posto del valore massimo, il valore efficace (valore quadratico medio) definito come:
$$X_\text{eff} = \sqrt{\frac{1}{T}\int_{t_0}^{t_0 + T}x^2(t)\ dt}$$
>con $t_0$ arbitrario istante di tempo. 

>[!example] Valore efficace | esempio
>per una grandezza sinusoidale $x(t) = X_m\cos(\omega t+\phi)$ il valore efficace è $X_\text{eff}=\frac{X_m}{\sqrt 2}$ e il fasore di $x(t)$ è
>$$\bar x = X_\text{eff}e^{j\phi} = \frac{X_m}{\sqrt{2}}e^{j\phi}$$
>e per tornare nel #dominio del tempo ci basta usare la relazione $x(t) = \text{Re}\{\sqrt2\bar xe^{j\omega t}\}$

### Prese elettriche

Nelle abitazioni la rete di distribuzione dell'energia elettrica opera in [[regime sinusoidale]] alla frequenza di $50\text{Hz}$, con una tensione nominale di circa $230 \text{V}$ in **valore efficace**. L'andamento nel tempo della tensione è quindi $$e(t) = E_m\cos(\omega t + \phi)\text\quad \text{dove}\quad E_m = 230\sqrt2 \approx 325V,\quad \omega=2\pi50 = 314\frac{\text{rad}}{s}$$ e con fase iniziale $\phi$ dipendente dalla scelta dell'origine per la variabile temporale. Abbiamo quindi descritto l'andamento della tensione fra i due terminali di una comune presa elettrica.

### Potenza
Calcoliamo la potenza complessa $\hat A = P + jQ$ assorbita da un lato del grafo del circuito caratterizzato dalla tensione $\bar v$ e dalla [[corrente]] $\bar\imath$ prese con la convenzione degli utilizzatori:
$$
\begin{flalign}
\hat A\quad &=\quad P + jQ \\
&= \quad \frac{V_me^{j\phi_V}I_me^{-j\phi_I}}{2} \\
&= \quad \frac{V_m}{\sqrt2}e^{j\phi_V}\frac{I_m}{\sqrt2}e^{j\phi_I} \\
&=V_\text{eff}e^{j\phi_V}I_\text{eff}e^{j\phi_I}
\end{flalign}
$$
pari a $\bar v \bar\imath^*$, perdiamo quidni il fattore $^1/_2$ rispetto alla [[potenza]] rispetto al fasore del valore massimo