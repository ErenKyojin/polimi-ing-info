---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

La **teoria degli errori di misura** prevedva che un misurando non potesse mai essere conosciuta precisamente

### Tipologia degli errori
![[errori sistematici]]

![[errori accidentali]]

# Errori $\implies$ incertezza
Una corretta analisi statistica della variabilità di una misura consente di risolvere in maniera soddisfacente il problema di esprimere l'incertezza standard di misura.
Parametro, valutato secondo procedure convenzionali che esprime il nostro grado di non conoscenza del misurando.
1. Stima con metodi statistici (su un insieme, o capione di misure ripetute)
2. Stimata in altro modo


### Richiami di probabilità
$\rho \in [0,1]$ evento impossibile e evento certo
$X$ variabile casuale con valori $x \in \mathbb{R}$
$P(a \leq x \leq b) = \int _{a}^b \!\rho(x) \, \mathrm{d}x$ Probabilità
$p(x)$ funzione densità di probabilità PDF

La PDF descrive il processo casuale considerato assegnando la probabilità per i possibili valori d'uscita. Per una VC continua la probabilità puntuale è nulla mentre può non essere nulla la probabilità di cadere in un intervallo di valori

###### Normalizzazione della PDF
$$ \int _{-\infty}^{\infty} \!\rho(x) \, \mathrm{d}x  $$

### Richiami di statistica
Per $x$ VC reale esistono degli simatori che ci consentono di conoscere in senso statistico alcuni parametri caratteristici del processo casuale.
In particolare media e varianza permettono di stimare la tendenza centrale e la dispersione dei valori $x$ associabili a $x$

###### Media
$$\mu(x)  = \mu_{x} = E(x) = \int _{-\infty}^{\infty} \! \, \mathrm{d}x $$
###### Varianza
$$ \sigma^2(x) = \sigma_{x}^2 = E(|x - \mu_{x}|^2) = \int _{\infty}^\infty \!|x - \mu_{x}|^2 \rho(x) \, \mathrm{d}x  $$
###### Deviazione standard
$$ \sigma(x) = \sqrt{ \sigma^2(x) } $$

---
La PDF più comune è la [[Gaussiana|densità gaussiana]]

Per trovare la probabilità che il valore cada in un intervallo della gaussiana è sufficiente integrare tra i due valori di cui siamo interessati a vedere se vi è contenimento.

Quindi per vedere il livello di confidenza:

| $1\sigma$ | $2 \sigma$ | $3 \sigma$ |
| --------- | ---------- | ---------- |
| 68%       | 95%        | 99%        | 

Quindi ad esempio stando lontani 3 volte dalla deviazione standard abbiamo $99\%$ di confidenza.

Se uno strumento ha un'accuratezza di due sigma la maggior parte delle misure sarà.

![[Media campionaria]]

[[Dispersione della media]]