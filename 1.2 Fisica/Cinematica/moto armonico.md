---
aliases: 
creation date: 2023-03-23 13:12
modification date: 2023-03-23 13:12
---

UN caso di moto molto importante è il moto oscillatorio (pendolo, molla, vibrazioni,...), di cui il tipo piú frequente è quello oscillatorio.
Il moto oscillatorio piú semplice che si possa pensare e descrivere è il moto armonico semplice, cioè un moto rettilineo con legge oraria sinusoidale
$$
x(t) = A\sin(\omega t + \varphi)
$$
con:
- $A$: ampiezza dell'oscillazione
- $\omega t = \varphi$ fase dell'oscillazione
- $\varphi$ costant edi fase o fase iniziale
- $\omega$ pulsazione dell'oscillazione

Si tratta di un moto periodico, di periodo $T = \frac{2\pi}{\omega}$ e frequenza $v = \frac{1}{T} = \frac{\omega}{2\pi}$
Se calcoliamo la velocità e poi l'accelerazione troviamo invece
$$\begin{align}
&v(t) = \frac{dx}{dt} = A\omega \cos(\omega t + \phi) \\
&a(t) = \frac{dv}{dt} = -A\omega^2 \sin(\omega t + \phi) = -\omega^2x(t) 
\end{align}$$
L'utlima equazione è detta anche **equazione caratteristica del moto armonico**:
$$
\fbox{$\frac{d^2x}{dt^2} + \omega^2x(t) = 0$}
$$
- quando $x = 0, |v| = v_{max}$ e $a = 0$
- quando $|x| = x_{max} = A, v = 0$ e $|a| = a_{max} = \omega^2 A \implies$ punti di inversione del moto

>[!oss]
>Se descriviamo in coordinate cartesiane un moto circolare uniforme di raggio $A$ otteniamo
>$$ x(t) = A\cos(\omega t + \varphi) = A\sin\left( \omega t + \varphi + \frac{\pi}{2} \right)\quad y(t) = A\sin(\omega t + \varphi) $$
>Si tratta della composizione di due moti armonici semplici lungo le due direzioni ortogonali, di pari ampiezza e pulsazione ma con differenza di fase pari a $\frac{\pi}{2}$



