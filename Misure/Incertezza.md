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

In questo tipo di incertezza il risultato di misura è $x = \bar{x}$ con incertezza $\frac{s(x)}{\sqrt{ n }}$, e la qualità della misura migliora.

#### Incertezza relativa
Si parla di incertezza relativa quando normalizziamo il valore di incertezza tipo al valore di misura
$$ u_{r}(y) = \frac{u(y)}{\bar{y}} $$

>[!oss] si tratta di un numero puro
>Quindi le incertezze di grandezze diverse possono essere confrontate

Questo tipo di incertezza indica il grado diconoscenza che abbiamo raggiunto sul valore di misura

#### Incertezza estesa
Quando si vuole definire un intervallo di valori attorno al valore di misura $y=\bar{y}$ all'interno del quale si rietiene che il [[misurando]] debba cadere con un certo livello di confidenza si utilizza l'incertezza estesa
$$ U(y) = ku(y) $$
con $k$ fattore di copertura

---

>[!oss] Cifre significative per l'incertezza
>Si esprime solitamente con al più due cifre significative, anche se nei calcoli intermedi è spesso utile conservarne di più


### Incertezza di categoria B
Basata sulla definizione "a priori" di un opportuno intervallo di valori entro il quale si suppone debbano cadere i valori del misurando

```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex] (0,0) -- ++ (5,0);
\draw[fill = gray] (3.5,2) -- (3.5,0) -- (.5,0) -- (.5,2);
\draw[ultra thick] (.5,0) node[below]{$a_0 - a$} -- ++ (0,.25);
\draw[ultra thick] (3.5,0) node[below]{$a_0 + a$} -- ++ (0,.25);
\draw[ultra thick] (2,0) -- ++ (0,-.25) node[below]{$\bar{x} = a_0$};
\node at (2,1){P};
\end{tikzpicture}
\end{document}
```

L'intervallo fissato è tipicamento centrato attorno al valor medio
$$\bar{x} = a_{0} = \frac{(a_{0} + a) + (a_{0} - a)}{2}$$
e ha una piena larghezza 
$$\Delta x = (a_{0} + a) - (a_{0} - a) = 2a$$
alla cui sarà legata l'incertezza della misura


##### Stima dell'incertezza di categoria B

Intervallo -> PDF -> $\mu, \sigma$

1. Definisco un intervallo di categoria B
2. Associo una densità di probabilità PDF
3. Di questa si calcolano media, varianza e deviazione standard