---
aliases: 
creation date: 2023-06-16 12:12
modification date: 2023-06-16 12:12
---


## Tensione
> [!def]
> ![[Pasted image 20230616121955.png]]
> 

Somma delle tensioni a stella $\bar{v}_{an},\bar{v}_{bn},\bar{v}_{cn}$è 0 sia in [[sequenza positiva di tensioni|sequenza positiva]] che in sequenza negativa

Si può passare dalle tensioni a stella in sequenza positiva a quelle a triangolo attraverso le seguenti formule
$$ \begin{align}
\bar{v}_{ab} = \sqrt{ 3 }e^{j \pi/6} \bar{v}_{an} \\
\bar{v}_{bc} = \sqrt{ 3 }e^{j \pi/6} \bar{v}_{bn} \\
\bar{v}_{ca} = \sqrt{ 3 } e^{j \pi/6} \bar{v}_{cn}
\end{align} $$
Se invece si è in sequenza negativa:
$$ \begin{align}
\bar{v}_{ab} = \sqrt{  3 }e^{-j \pi/6 } \bar{v}_{an} \\
\bar{v}_{bc} = \sqrt{ 3 }e^{-j \pi/6} \bar{v}_{bn} \\
\bar{v}_{ca} = \sqrt{ 3 }e^{-j \pi/6}\bar{v}_{cn}
\end{align} $$

>[!oss]
>Le tensioni a triangolo sono scalate di $\sqrt{ 3 }$ in modulo, e sono in anticipo di $\dfrac{\pi}{6}$ rispetto alla tensione a stella (rispettivamente in ritardo per la sequenza negativa)

Infine per passare dalla configurazione a triangolo a quella a stella abbiamo, in caso di sequenza positiva:
$$ \begin{align}
\bar{v}_{an} = \frac{\bar{v}_{ab}}{\sqrt{ 3 }}e^{-j \pi/6} \\
\bar{v}_{bn} = \frac{\bar{v}_{bc}}{\sqrt{ 3 }}e^{-j\pi/6} \\
\bar{v}_{cn} = \frac{\bar{v}_{ca}}{\sqrt{ 3 }}e^{-j\pi/6}
\end{align} $$
in caso di sequenza negativa:
$$ \begin{align}
\bar{v}_{an} = \frac{\bar{v}_{ab}}{\sqrt{ 3 }}e^{j \pi/6} \\
\bar{v}_{bn} = \frac{\bar{v}_{bc}}{\sqrt{ 3 }}e^{j\pi/6} \\
\bar{v}_{cn} = \frac{\bar{v}_{ca}}{\sqrt{ 3 }}e^{j\pi/6}
\end{align}  $$


>[!oss]
>Le tensioni a stella sono scalate di un fattore $\frac{1}{\sqrt{ 3 }}$ in modulo e ciascuna è in ritardo di $\dfrac{\pi}{6}$ rispetto alla corrispondente tensione a triangolo nel caso di sequenza positiva (anticipo in caso di sequenza negativa)


## Collegamenti
![[collegamenti trifase]]

## Potenza
![[potenza#Potenza in un sistema trifase bilanciato]]


# ANKI

```anki
id: 1705511623850
deck: Elettrotecnica
---
conversione da tensioni a stella in sequenza positiva a tensioni a triangolo
===
- $\bar{v}_{ab} = \sqrt{3}e^{j\pi/6}\bar{v}_{an}$
- $\bar{v}_{bc} = \sqrt{3}e^{j\pi/6}\bar{v}_{bn}$
- $\bar{v}_{ca} = \sqrt{3}e^{j\pi/6}\bar{v}_{cn}$
```


```anki
id: 1705511627101
deck: Elettrotecnica
---
conversione da tensioni a stella in sequenza negativa a tensioni a triangolo
===
- $\bar{v}_{ab} = \sqrt{3}e^{-j\pi/6}\bar{v}_{an}$
- $\bar{v}_{bc} = \sqrt{3}e^{-j\pi/6}\bar{v}_{bn}$
- $\bar{v}_{ca} = \sqrt{3}e^{-j\pi/6}\bar{v}_{cn}$
```


```anki
id: 1705511629076
deck: Elettrotecnica
---
Conversione da tensioni a triangolo a tensioni a stella in sequenza positiva
===
- $\bar{v}_{an} = \dfrac{\bar{v}_{ab}}{\sqrt{ 3 }}e^{-j \pi/6}$
- $\bar{v}_{bn} = \dfrac{\bar{v}_{bc}}{\sqrt{ 3 }}e^{-j\pi/6}$
- $\bar{v}_{cn} = \dfrac{\bar{v}_{ca}}{\sqrt{ 3 }}e^{-j\pi/6}$
```



```anki
id: 1705511630151
deck: Elettrotecnica
---
Conversione da tensioni a triangolo a tensioni a stella in sequenza negativa
===
- $\bar{v}_{an} = \dfrac{\bar{v}_{ab}}{\sqrt{ 3 }}e^{j \pi/6}$
- $\bar{v}_{bn} = \dfrac{\bar{v}_{bc}}{\sqrt{ 3 }}e^{j\pi/6}$
- $\bar{v}_{cn} = \dfrac{\bar{v}_{ca}}{\sqrt{ 3 }}e^{j\pi/6}$
```


