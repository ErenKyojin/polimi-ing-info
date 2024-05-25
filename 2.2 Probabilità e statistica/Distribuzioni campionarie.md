---
aliases: 
creation date: 2024-05-25
---

## Distribuzioni campionarie da una popolazione normale
Se abbiamo $X_{1},X_{2},\dots,X_{n}$ campioni da una popolazione normale con media $\mu$ e varianza $\sigma^2$. Sono quindi indipendenti e $X_{i} \sim \mathcal{N}(\mu,\sigma^2)$ con $i = 1,\dots,n$. Inoltre
$$ \bar{X} = \sum_{i=1}^n \frac{X_{i}}{n} $$
e
$$ S^2 = \frac{1}{n-1} \sum_{i=1}^n (\bar{X}_{i} - \bar{X})^2$$

Sono rispettivamente [[Media campionaria|media campionaria]] e [[Varianza campionaria|varianza campionaria]]


#### Distribuzione della media campionaria
La somma di variabile aleatorie normali indipendenti è distribuita in modo normale, segue che $\bar{X}$ è normale con 
$$ \begin{align}
E[\bar{X}]&=\sum_{i=1}^n \frac{E[X_{i}]}{n}=\mu \\
\text{var}(\bar{X}) &= \frac{1}{n^2} \sum_{i=1}^n \text{var}(X_{i})=\frac{\sigma^2}{n}
\end{align} $$

rispettivamente media e varianza.
$\bar{X}$ è quindi normale con media uguale alla media della popolazione ma con varianza ridotta di un fattore $\frac{1}{n}$ segue che
$$ \frac{\bar{X}-\mu}{\frac{\sigma}{\sqrt{ n }}} $$
è una variabile aleatoria normale standard

### Distribuzione congiunta di $\bar{X}$ e $S^2$
Consideriamo i valori $x_{1},\dots,x_{n}$, definiamo $y_{i} = x_{i} - \mu,i=1,\dots,n$.
Avremo quindi $\bar{y} = \bar{x} - \mu$ segue che
$$ \sum_{i=1}^n (y_{i} - \bar{y})^2 = \sum_{i=1}^n y_{i}^2 - n\bar{y}^2 $$
allora
$$ \sum_{i=1}^n(x_{i} - \bar{x})^2 = \sum_{i=1}^n (x_{i} - \mu)^2 - n(\bar{x} - \mu)^2 $$
Se $X_{1},\dots,X_{n}$ sono un campione da una popolazione normale con media $\mu$ e varianza $\sigma^2$, allora otteniamo dall'identità precedente che
$$ \frac{1}{\sigma^2}\sum_{i=1}^n (X_{i} - \mu)^2= \frac{1}{\sigma^2} \left[ \sum_{i=1}^n (X_{i} - \bar{X})^2 +  n(\bar{X} - \mu)^2 \right]$$
equivalentemente
$$
\sum_{i=1}^n\left( \frac{X_{i}-\mu}{\sigma} \right) =\frac{\sum_{i=1}^n(X_{i} - \bar{X})^2}{\sigma^2} + \left[ \frac{\sqrt{ n }(\bar{X} - \mu)}{\sigma} \right]^2
$$

$\frac{X_{i} - \mu}{\sigma}$ sono [[variabili aleatorie indipendenti ed identicamente distribuite|iid]] normali standard. Segue che a destra dell'equazione abbiamo una variabile aleatoria [[distribuzione chi-quadro|chi-quadro]], inoltre $\frac{\sqrt{ n }(\bar{X} - \mu)}{\sigma}$ è una variabile aleatoria normale standard, e quindi il suo quadrato è una variabile aleatoria chi-quadro con un grado di libertà.
Sappiamo quindi che a sinistra dell'equazione abbiamo una variabile chi quadro con $n$ gradi di libertà, mentre a destra dell'equazione abbiamo due variabili aleatorie, di cui una chi quadro con 1 grado di libertà. Sappiamo che la somma di due variabili chi-quadro indipendenti è a sua volta una variabile chi quadro indipendente con come grado di libertà la somma dei gradi di libertà delle due variabili originali, vogliamo quindi dimostrare che il primo termine del lato destro dell'equazione sia una variabile chi-quadro con $n-1$ gradi di libertà.

>[!theorem]
>Sia $X_{1},\dots,X_{n}$ campione da una popolazione normale con media $\mu$ e varianza $\sigma^2$, allora $\bar{X}$ e $S^2$ sono variabili aleatorie indipendenti, con $\bar{X}$ normale con media $\mu$ e varianza $\frac{\sigma^2}{n}$ e $\frac{(n-1)S^2}{\sigma^2}$ chi-quadro con $n-1$ gradi di libertà.
>

Ci sono due conseguenza molto importanti del teorema, la prima è aver trovato la distribuzione di $\bar{X}$ e $S^2$ per popolazioni normali, la seconda è che queste due sono **indipendenti**.

>[!corollary]
>Siano $X_{1},\dots,X_{n}$ campioni da una popolazione normale con media $\mu$, $\bar{X}$ denota 