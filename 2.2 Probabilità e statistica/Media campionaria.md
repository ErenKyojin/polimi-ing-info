---
aliases: 
creation date: 2023-03-22 08:30
modification date: 2023-03-22 08:30
---

Consideriamo una popolazione di elementi con dati numerici associati. Il valore associato ad ogni membro sarà il valore di una [[variabile aleatoria]] con [[valore atteso]] $\mu$ e [[varianza]] $\sigma^2$, a cui ci riferiremo come **media della popolazione** e **varianza della popolazione**

>[!def]
>Siano $X_{1},X_{2},\dots,X_{n}$ valori presi da una popolazione con $\mu$ media della popolazione e $\sigma^2$ varianza dalle popolazione, la media campionaria è definita come
>$$ \bar{X} = \frac{X_{1} + X_{2} + \dots + X_{n}}{n}$$
>Essendo dipendente dal valore delle variabili aleatorie, la media campionaria è una variabile aleatoria.


[[media teorica]]

## Proprietà
Essendo la media campionaria una variabile aleatoria, possiamo calcolarne la media e la varianza, in particolare abbiamo che


>[!multi-column]
>>[!media]
>>$$\begin{align}
>> E[\bar{X}] &= E\left[ \frac{X_{1} + X_{2}+\dots+ X_{n}}{n} \right] =  \\
>>&= \frac{1}{ n}(E[X_{1}] + E[X_{2}] + \dots + E[X_{n}]) = \\
>> &= \mu
>>\end{align} $$
>
>>[!varianza]
>>$$ \begin{align}
>>\text{var}(\bar{X}) &= \text{var}\left( \frac{X_{1}+\dots + X_{n}}{n} \right) \\
>>&=\frac{1}{n^2}[\text{var}(X_{1}) + \dots+\text{var}(X_{n})] \\
>>&= \frac{n\sigma^2}{n^2} = \frac{\sigma^2}{n}
>>\end{align} $$

Quindi la media campionaria sarà centrata sulla media della popolazione con una dispersione che tende a zero più è alto il numero di campioni scelti

### > [[teorema centrale del limite]]

### Distribuzione approssimata
Sia $X_{1},\dots,X_{n}$ un campione da una popolazione con media $\mu$ e varianza $\sigma^2$, possiamo sfruttare il teorema centrale del limite
$$\bar{X} = \sum_{i=1}^n \frac{X_{i}}{n}$$
Un multiplo di una variabile aleatoria normale è comunque normale, quindi per il teorema centrale del limite $\bar{X}$ sarà normale quando $n$ sarà sufficiente grande. 
$$ \frac{\bar{X}-\mu}{\frac{\sigma}{\sqrt{ n }}} $$
ha approssimativamente distribuzione normale standard.