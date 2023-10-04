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


#### Stima dell'incertezza di categoria B

Intervallo -> PDF -> $\mu, \sigma$

1. Definisco un intervallo di categoria B
2. Associo una densità di probabilità PDF
3. Di questa si calcolano media, varianza e deviazione standard


```tikz
\begin{document}
\begin{tikzpicture}
\draw(0,0) -- ++ (3,0);
\draw[dashed] (.5,0) -- ++ (0,2);
\draw[dashed] (2.5,0) -- ++ (0,2);
\draw[ultra thick] (0,.1) -- ++ (.6,0) -- ++ (0,2) -- ++ (1.8,0) -- ++ (0,-2) -- ++ (.6,0);

\draw(5,0) -- ++ (3,0);
\draw[dashed] (5.5,0) -- ++ (0,2);
\draw[dashed] (7.5,0) -- ++ (0,2);
\draw[ultra thick] (5,.1) -- ++ (.5,0) -- ++ (1,2) -- ++ (1,-2) -- ++ (.5,0);


\draw(5,0) -- ++ (3,0);
\draw[dashed] (5.5,0) -- ++ (0,2);
\draw[dashed] (7.5,0) -- ++ (0,2);
\draw[ultra thick] (5,.1) -- ++ (.5,0) -- ++ (1,2) -- ++ (1,-2) -- ++ (.5,0);


\draw(0,-3) -- ++ (3,0);
\draw[dashed] (0.5,-3) -- ++ (0,2);
\draw[dashed] (2.5,-3) -- ++ (0,2);
\draw[ultra thick] (0,-2.9) -- ++ (.5,0);
\draw[ultra thick] (2.5,-2.9) -- ++ (.5,0);
\draw[ultra thick] plot [smooth] coordinates {(0.5,-2.9) (0.7,-1.4) (1.5,-1) (2.3, -1.4) (2.5,-2.9) };

\draw(5,-3) -- ++ (3,0);
\draw[dashed] (5.5,-3) -- ++ (0,2);
\draw[dashed] (7.5,-3) -- ++ (0,2);
\draw[ultra thick] plot [smooth] coordinates {(5,-3) (5.5,-2.75) (5.7,-2.5) (6.5,-1) (7.3,-2.75) (8,-3)};

\end{tikzpicture}
\end{document}
```

Sia la larghezza dell'intervallo che la PDF si scelgono sulla base di
- conoscenza precedenti o dati di misura
- esperienza sul comportamento del misurando
- specifiche dei costruittori di materiali e strumenti coinvolti nella misura
- dati di claibrazioni
- informazioni da articoli scientifici
- incertezza sui parametri di riferimento


Quando si disponde di una PDF per la grandezza $x$ è possibile calcolare $\mu(x)$ e $\sigma(x)$ che danno rispettivamente il valore di misura e la sua incertezza
$$ x = x_{\text{MIS}} = \mu(x) $$
$$ u_{B}(x) = \text{INC}_{B}(x) = \sigma(x) $$

###### PDF Normale
$1 \sigma$ level = P $\mu - \sigma \leq x \leq \mu + \sigma \approx 68.3\%$
$2\sigma$ level = P $\mu- 2\sigma \leq x \leq \mu + 2 \sigma \approx 95.5 \%$
$3\sigma$ level = P $\mu - 3\sigma \leq x \leq \mu + 3 \sigma \approx 99.7\%$

###### PDF uniforme
$$ p(x) = \begin{cases}
0&x < a_{0} - a \\
\frac{1}{2}a & a_{0} - a \leq x \leq a_{0} + a \\
0  & x > a_{0} + a 
\end{cases} $$
Si verifica che
$$\mu(x) = E[x] = \int _{-\infty}^{+\infty} \! x p(x)  \, \mathrm{d}x  = a_{0}$$
$$ \sigma(x) = \frac{\Delta x}{\sqrt{ 12 }} $$

###### PDF triangolare
$$ \mu(x) = a_{0} $$
$$ \sigma^2(x) = \frac{a^2}{6} = \frac{(\Delta x)^2}{24}$$
$$ \sigma(x)  = \frac{\Delta x}{\sqrt{ 24 }}$$

si ha naturalmente che la PDF triangolare è meno dispersa della PDF unfirome

###### Altri metodi di stima di $u_{B}(x)$
Si può calcolare $u_{B}(x)$ partendo dalla conoscenza di un invervallo di condifenza con probabilità $P$. Si usa PDF normale con convidenza $P$, centrata sul valore centrale dell'intervallo, e si stima $$ u_{B}(x) = \sigma(x) = \sigma_{x} $$.

Si calcola $u_{B}(x)$ partendo da conoscenza di una incertezza estesa $U_{B} = ku_{B}$
Già si conosce il fattore id copertura $k$ e quindi si ricava $u_{B}(x) = U_{B}(x) /k$

#### Incertezza composta
Per comprendere l'incertezza composta è necessario definire le [[misure dirette]] e le [[misure indirette]]

I valori della relazione (equazione della misura)
$$ y = f(x_{1}, x_{2},\dots,x_{n}) $$
in un intorno del valore di misura (punto di lavoro)
$$\bar{y} = f(\bar{x}_{1},\bar{x}_{2}, \dots,\bar{x}_{n})  $$

Possiamo sviluppare in serie di taylor la relazione funzionale $f$
$$ (y-\bar{y}) \approx \frac{ \partial f }{ \partial x_{1} }_{\bar{y}} (x_{1} -\bar{x}_{1}) + \dots + \frac{ \partial f }{ \partial x_{n} } (x_{N}- \bar{x}_{N}) $$

Possiamo definire dei [[coefficienti di sensibilità]]

$$ \begin{align}
E\{ (y - \bar{y})^2 \} = E \left\{  \left[  \sum_{i=1}^n \frac{ \partial f }{ \partial x_{i}}  (x_{i} - \bar{x}) \right]  \right\}
\end{align} $$