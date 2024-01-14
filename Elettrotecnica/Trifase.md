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
La potenza istantanea assorbita dal carico trifase, supponendolo collegato a $Y$, si scrive nel dominio del tempo a partire dalle tensioni di fase
$$ \begin{align}
&v_{an}= \sqrt{ 2 }V_{p} \cos(\omega t) \\
&v_{bn} = \sqrt{ 2 }V_{p}\cos\left( \omega t - \frac{2}{3}\pi \right) \\
&v_{cn} = \sqrt{ 2 }V_{p}\cos\left( \omega t - \frac{4}{3} \pi \right)
\end{align} $$
dove il fattore $\sqrt{ 2 }$ è necessario dato che $V_{p}$ è riferito al valore efficace delle tensioni. Assumendo un'impedenza di carico
$$ Z_{Y} = |Z_{Y}| e^{j \arg(Z_{Y})} = Ze^{j \theta} $$
le correnti di fase possono essere scritte come
$$ \begin{align}
&i_{a} = \sqrt{ 2 } \underbrace{ I_{p} }_{ V_{p} / Z } \cos(\omega t - \theta) \\
&i_{b} = \sqrt{ 2 } I_{p}\cos\left( \omega t - \frac{2}{3}\pi - \theta \right) \\
&i_{c} = \sqrt{ 2 } I_{p} \cos\left( \omega t - \theta - \frac{4}{3} \pi \right)
\end{align} $$
La potenza istantanea totale nel carico è la somma delle potenze istantanee nelle tre fasi, cioè,
$$\begin{align}
 P_{a}^{Z_{Y}}(t) &= v_{an}(t)i_{a}(t) + v_{bm}(t) i_{b}(t) + v_{cn}(t)i_{c}(t)= \\
&=2V_{p}I_{p}[\cos(\omega t)\cos(\omega t - \theta) + \\
&+ \cos(\omega t - \frac{2}{3})\cos(\omega t - \frac{2}{3}\pi - \theta) + \\
&+ \cos(\omega t - \frac{4}{3}\pi) \cos(\omega t - \frac{4}{3} - \theta)]
\end{align} $$
Usando l'identità trigonometrica $\cos(\alpha)\cos(\beta) = \frac{1}{2}[\cos (\alpha + \beta) + \cos(\alpha - \beta)]$
$$ P_{a}^{Z_{Y}} = V_{p}I_{p}\left[ 3\cos \theta + \cos \gamma + 2\left( -\frac{1}{2} \right)\cos \gamma \right] = 3V_{p}I_{p} \cos \theta $$
Con $\gamma = 2\omega t - \theta$. La potenza istantanea totale in un sistema trifase bilanciato è quindi costante, non varia nel tempo come fanno invece le potenze istantanee delle singole fasi. Con $\gamma = 2\omega t - \theta$. La potenza istantanea totale in un sistema trifase bilanciato è costante

Un generatore trifase bilanciato che alimenta carichi bilanciati eroga una potenza istantanea costante, anzichè pulsante come nel caso monofase

Questo risultato vale anche per il carico a triangolo ed è forse la ragione più importante per utilizzare un sistema trifase per la generazione e distribuzione di potenza elettrica. Essendo la potenza istantanea complessiva indipendente dal tempo, la potenza media assorbita per fase per il carico a stella o a triangolo è $p_{a}^{Z_{Y}} = \frac{p_{a}^{Z_{\Delta}}}{3} = V_{p}I_{p} \cos \theta$. La potenza attiva per fase è dunque pari a
$$ P_{p} = V_{p}I_{p} \cos\theta $$
E quella reattiva:
$$ Q_{p} = V_{p}I_{p}\sin\theta $$

Grazia alla reazione corrente di fase-tensione di fase e corrente di linea-tensione di linea nella connessione $Y-Y$ possiamo scrivere $P_{p} = 3 \frac{V_{l}}{\sqrt{ 3 }} I_{l} \cos\theta = \sqrt{ 3 }V_{l}I_{l} \sin \theta$. La potenza complessa assorbita per fase è pari a
$$ \hat{A}_{p} = P_{p} + j Q_{p} $$


# ANKI

```anki
id: 1705250720043
deck: Elettrotecnica
---
conversione da tensioni a stella in sequenza positiva a tensioni a triangolo
===
- $\bar{v}_{ab} = \sqrt{3}e^{j\pi/6}\bar{v}_{an}$
- $\bar{v}_{bc} = \sqrt{3}e^{j\pi/6}\bar{v}_{bn}$
- $\bar{v}_{ca} = \sqrt{3}e^{j\pi/6}\bar{v}_{cn}$
```


```anki
id: 1705250722568
deck: Elettrotecnica
---
conversione da tensioni a stella in sequenza negativa a tensioni a triangolo
===
- $\bar{v}_{ab} = \sqrt{3}e^{-j\pi/6}\bar{v}_{an}$
- $\bar{v}_{bc} = \sqrt{3}e^{-j\pi/6}\bar{v}_{bn}$
- $\bar{v}_{ca} = \sqrt{3}e^{-j\pi/6}\bar{v}_{cn}$
```


```anki
id: 1705250724092
deck: Elettrotecnica
---
Conversione da tensioni a triangolo a tensioni a stella in sequenza positiva
===
- $\bar{v}_{an} = \dfrac{\bar{v}_{ab}}{\sqrt{ 3 }}e^{-j \pi/6}$
- $\bar{v}_{bn} = \dfrac{\bar{v}_{bc}}{\sqrt{ 3 }}e^{-j\pi/6}$
- $\bar{v}_{cn} = \dfrac{\bar{v}_{ca}}{\sqrt{ 3 }}e^{-j\pi/6}$
```



```anki
id: 1705250725342
deck: Elettrotecnica
---
Conversione da tensioni a triangolo a tensioni a stella in sequenza negativa
===
- $\bar{v}_{an} = \dfrac{\bar{v}_{ab}}{\sqrt{ 3 }}e^{j \pi/6}$
- $\bar{v}_{bn} = \dfrac{\bar{v}_{bc}}{\sqrt{ 3 }}e^{j\pi/6}$
- $\bar{v}_{cn} = \dfrac{\bar{v}_{ca}}{\sqrt{ 3 }}e^{j\pi/6}$
```


