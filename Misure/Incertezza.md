---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Stime quantitativa con metodi convenzionali del livello di **non conoscenza** del misurando.

>[!def]
>**Incertezza standard** o scarto tipo con simbolo $u$, una stima della deviazione standard $\sigma$, radice quadrata della varianza $\sigma^2$, prevista per il valore di misura


A seconda del metodo impiegato per la stima di $u$ classificheremo questa incertezza come categoria 1. o 2.

Prima di approfondire però è necessario conoscere la [[Media campionaria]] e la [[Varianza#Varianza campionaria]] 

### Incertezza di categoria A
Per determinare l'incertezza sul valore di misura valutiamo la [[deviazione standard]] della variabile casuale $\bar{x}$

$\bar{x}$ è almeno potenzialmente una variabile casuale in quanto il suo valore specifico dipende dal particolare campione di dati considerato, con $m$ campioni di $n$ misure, otterremo $m$ valori diversi di $\bar{x}$, con varianza
$$\sigma^2(\bar{x}) = \frac{\sigma^2(x)}{n}$$

Possiamo quindi ottenere la miglior stima di $\sigma^2(\bar{x})$ come
$$ \sigma^2(\bar{x}) = \frac{\sigma^2(x)}{n} = \frac{s^2(x)}{n}\qquad \sigma(\bar{x}) = \frac{s(x)}{\sqrt{ n }} $$

>[!def]
>Si definisce **incertezza di categoria $A$** la dispersione del valor medio delle misure ripetute, calcolabile come
>$$ u_{A}(x) = s(\bar{x}) = \frac{s(x)}{\sqrt{ n }} = \sqrt{ \frac{1}{n(n-1)} \sum_{k=1}^n  (x_{k} -\bar{x})^2} $$

In questo tipo di incertezza il risultato di misura è $x = \bar{x}$ con incertezza $\frac{s(x)}{\sqrt{ n }}$, e la qualità della misura migliora 