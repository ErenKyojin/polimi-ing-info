# Integrale
$\newcommand{d}{\mathrm{d}}$
>[!esempio]
>Come si potrebbe calcolare l'area compresa tra l'asse $x$ e l'arco di parabola $y=x^2$ per $x\in[0,1]$.
>```desmos-graph
>top = 1; left = -1; right = 2; bottom = -1
>---
>y = x^2
>0<y < x^2|x>0| x<1
>0 < y < 0.01|0.1 < x < 0.2
>0< y< 0.04|0.2<x<0.3|purple
>0 < y < 0.09|0.3<x<0.4|purple
>0 < y < 0.16|0.4 <x<0.5|purple
>0 < y < 0.25|0.5<x<0.6|red
>0< y < 0.36|0.6<x<0.7|purple
>0<y< 0.49|0.7< x < 0.8|purple
>0<y< 0.64|0.8<x<0.9|purple
>0<y<0.81|0.9<x<1|purple
>(0.5,0)|label: i/n|red
>(0.6,0)|label: (i+1)/n|red
>(0,0.25)|label: (i/n)^2|red
>y = 0.25|0<x<0.5|dashed 
>```
>Dividiamo l'intervallo $[0,1]$ in $n$ segmenti uguali di estremi $x_i = \frac{i}{n}, x_{i+1} = \frac{i+1}{n}$ con $i = 0,...,n$.
>Si approssima l'area cercata con la somma delle aree dei rettangoli ombreggiati
>$$\text{Area }\approx S_n = \sum_{i = 1}^{n-1}\frac{1}{n}\cdot\left(\frac{i}{n}\right)^2 = \frac{i}{n^3}\sum_{i=1}^{n-1}i^2 = \frac{(n-1)n(2n-1)}{6n^3}$$
>Possiamo a questo punto tendere $n$ a $+\infty$ e otteniamo
>$$\frac{(n-1)n(2n-1)}{6n^3}\to\frac{1}{3}$$
E quindi
$$\text{Area } = \frac{1}{3}$$

Possiamo ora costruire la [[somma di Cauchy-Riemann]] da cui otteniamo la seguente definizione
>[!def]
>Diciamo che la funzione $f : [a,b] \to \mathbb{R}$ è integrabile in $[a,b]$ se detta $S_{n}$ una sua qualsiasi successione di Cauchy-Riemann, esiste finito il limite di $S_{n}$ e tale limite non dipende da come abbiamo scelto i punti $\xi_{j}$ ad ogni passo della costruzione iterativa. In tal caso si pone
>$$\lim_{ n \to \infty } S_{n} = \int_{b}^a \! f(x)  \, dx $$

Il simbolo 
$$
\int_{a}^b \!f(x)\, \d x 
$$
Si legge integrale da $a$ a $b$ di $f(x)$ in $\d x$. il segno $\int$ (una esse allungata) è una deformazione del simbolo di somma; la scrittura $f(x) \d x$ ricorda il prodotte del valore di $f(x)$ per la lunghezza di un piccolo intervallo sull'asse $x$.
La scrittura quindi indica in modo molto intuitivo la definizione che abbiamo dato di integrale.
$x$ è la variabile di integrazione ed è muta (ossia $\int_{a}^b  \! \,f(x) \d x = \int f(t) \! \, \d t)$.

>[!oss]
>L'integrale di una funzione su un intervallo fissato è un numero e non una funzione.

[[interpretazioni di intergrali]]


## classi di funzioni integrabili
La definizione di integrale che abbiamo dato non ci dice quali funzioni sono integrabili e come stabilirlo, valgono i seguenti teoremi:

>[!teorema]
>Se $f : [a,b] \to \mathbb{R}$ è [[continuità|continua]], allora è integrabile

>[!teorema]
>Se $f:[a,b] \to \mathbb{R}$ è [[monotonia|monotona]] e limitata, allora è integrabile

Conosciamo quindi alcune funzioni che sono certamente integrabili, inoltre ne possiamo costruire altre con varie operazioni, ad esempio:
>[!teorema]
>Se $f_{1} : [a,b]  \to \mathbb{R}$ e $f_{2}:(b,c] \to \mathbb{R}$ sono integrabili, allora la funzione
>$$
>f(x) = \begin{cases}
>f_{1}(x)\quad \text{ se } x \in [a,b) \\
>f_{2}(x)\quad \text{ se } x \in (b,c]
\end{cases} 
>$$
>è integrabile in $[a,c]$


## Proprietà dell'integrale
Dalla definizione stessa si possono dimostrare le seguenti proprietà dell'integrale

>[!teorema]
>siano $f,g$ integrabili in $[a,b]$ valgono le seguenti proprietà:
>1. **linearità dell'integrale**: se $\alpha, \beta$ sono costanti, allora anche la funzione $\alpha f(x) + \beta g(x)$ è integrabile, e vale l'identità: $$
>\int_{a}^b  \! [\alpha f(x)+\beta g(x)] \, \d x = \alpha \int_{a}^b \! f(x) \, \d x + \beta \int_{a}^b  \!g(x) \, \d x  
>$$
>2. **additività dell'integrale rispetto all'intervallo di integrazione**: se $a \leq r \leq b$ allora $f$ è integrabile anche su $[a,r]$ ed $[r,b]$ e vale l'identità: $$
> \int_{a}^b  \!f(x) \, \d x = \int_{a}^r  \!f(x) \, \d x + \int_{r}^b  \!f(x) \, \d x \tag{INT$1$}$$
>Per convenzione se $a<b$ si pone:
>$$
>\int_{b}^a  \!f(x) \, \d x  = -\int_{a}^b  \!f(x) \, \d x 
>$$
>e quindi la $\text{INT}1$ vale per qualsiasi ordine di $a,b,r$
>
>3.  **positività e monotonia dell'integrale**
>$$\begin{align}
>f \geq 0 \in [a,b]\Longrightarrow \int_{a}^b  \!f(x) \, \d x \geq 0 \\
f \geq g \in[a,b]\Longrightarrow \int_{a}^b \!f(x) \, \d x \geq \int_{a}^b  \!g(x) \, \d x 
>\end{align}
>\qquad (a < b)$$
>in particolare
>$$\fbox{$\vert\int_{a}^b \!f(x) \, \d x\vert \leq \int_{a}^b  \!|f(x)| \, \d x$}$$

>[!teorema]
>![[teorema della media]]


# Primitive

La definizione di integrale non ci è utile al proprio calcolo. Per calcolare un integrale si usa il metodo per variazione di una primitiva:

>[!def]
>Si dice che una funzione $G$, [[derivata|derivabile]] in $[a,b]$ è una primitiva di $f$ in $[a,b]$ se
>$$
>G'(x) = f(x) \quad\text{per ogni } x \in [a,b]
>$$
>
>>[!esempio]
>>$G(x)=x^2$ è una **primitiva** di $f(x)=2x$, e $G(x)=\sin x$ è una primitiva di $f(x) = \cos x$.
>
>è importante notare che se $G$ è una primitiva di $f$ lo è anche $G + c$ con $c$ costante. Invece se $G_{1}, G_{2}$ sono due primitive di $f$ in $[a,b]$ allora $G_{1}'-G_{2}' = 0$ in $[a,b]$, quindi per le proprietà delle derivate $[G_{1}-G_{2}]' = 0$ e quindi $G_{1}-G_{2}$ costante. 
>
>Da qui deduciame che se si conosce una primitiva $G$ di $f$, tutte le altre primitive sono nella forma $G + c, c \in \mathbb{R}$

#### Quali funzioni possiedono una primitiva?
Non tutte,se una funzione possiede punti di discontinuità a salto in un intervallo $[a,b]$ allora non può avere primitiva, se invece $f$ è [[continuità|continua]] in $\left[ a,b \right]$, essa possiede certamente una primitiva come proveremo in seguito

Questi risultati sulle primitive ci permettono di elaborare il **teorema fondamentale del calcolo integrale**

>[!teorema] [[teorema fondamentale del calcolo integrale]]


# [[calcolo degli integrali]]
Se $f$ è un afunzione continua e $G$ è una sua primitiva, tutte le primitive di $f$ avranno la forma
$$
G(x)+c\qquad(c\in\mathbb{R})
$$
L'insieme di tutte le primitive prende il nome di **integrale indefinito** e si indica con il simbolo
$$\int \!f(x) \, \d x $$
Che ha un significato ben diverso da
$$
\int_{a}^b \!f(x) \, \d x 
$$
Che indica l'integrale di $f$ sull'intervallo $[a,b]$, detto anche integrale **definito**

>[!error] Nota
>L'integrale definito è un **numero**
>L'integrale indefinito è un **insieme di funzioni**

# calcolo numerico approssimato di un integrale
Può capitare di non essere in grado di scrivere esplicitamente una primitiva attraverso funzioni elementari, ad esempio $e^{-x^{2}}$ non ha primitiva esprimibile attraverso funzioni elementari, pur avendone una.
Per funzioni di questo tipo dunque, il calcolo dell'integrale su un certo intervallo attraverso il [[teorema fondamentale del calcolo integrale]] risulta impossibile, è comunque utile una approssimazione del valore numerico dell'integrale in questi casi, per trovarla, utilizziamo la definizione stessa

Data una funzione continua $f : [a,b] \to \mathbb{R}$, costruiamo una successione $s_{n}$ di [[somma di Cauchy-Riemann|Cauchy-Riemann]] per $f$, sapendo che
$$
s_{n}\to \int_{a}^{b} \! f(x) \, \d x \text{ per } n \to \infty
$$
Ci aspettiamo un valore numerico di $s_n$ per $n$ "molto grande" sia una buona approssimazione dell'integrale. $S_{n}$ può essere alcolato facilmente attraverso ad esempio un computer, noti\amo però che con questa procedura otteniamo un errore incalcolabile anche in magnitudine.

>[!teorema] Calcolo numerico di un integrale col metodo del punto medio
>Sia $f : [a,b]\to \mathbb{R}$ una funzione due volte derivabile con [[continuità]] e sia $K$ una costante tale che $\vert f''(x)\vert \leq K$ per ogni $x \in [a,b]$, essendo $f''$ continua in $[a,b]$, è anche limitata, quindi una costante tale esiste certamente. Consideriamo ora, per un qualsiasi intero positivo $n$ la [[somma di Cauchy-Riemann]] $s_{n}$ per $f$ costruita scegliendo come punti $\xi_{i} \in [x_{i-1},x_{i}]$ il punto medio di $[x_{i-1},x_{i}]$ per ogni $i = 1,2,3,\dots,n$
>$$s_{n} = \sum_{i=1}^{n}f\left( \frac{x_{i-1}+x_{i}}{2} \right)\frac{(b-a)}{n}$$
>Allora vale:
>$$\left\vert \int_{a}^{b} \! f(x) \, \d x -s_{n} \right\vert\leq \frac{K}{24}\cdot \frac{(b-a)^{3}}{n^{4}}$$


# integrali generalizzati
È utile saper gestire integrali di funzioni illimitate e integrali estesi a intervalli illimitati. Occupiamoci quindi di queste situazioni:


## integrazione di funzioni non limitate

Consideriamo il caso illustrato sotto, in cui $f:[a,b]\to \mathbb{R}$ è continua e
$$
\lim_{ x \to b^{-} } f(x) = +\infty
$$
(analogo è il caso $\lim_{ x \to b^{-} }f(x)=-\infty$)

>[!esempio]
>```desmos-graph
>top = 15; bottom = -1; left = -1; right = 22; hideAxisNumbers; grid = false;
>---
>f(x) = 1/3x^2-3x+8+\abs(1/(x-8))|1<x < 8
>0<y < f(x)
>m = 1
>x = 8|dashed| y > 0
>(1,0)|black|open|label: a
>(8,0)|black|cross|label: `b`
>(7.9,0)|dred|open|label: `b - \varepsilon`
>(7.8,10)|dgreen|label:`y=f(x)`|open|
>```
>Per definire l'integrale di $f$ in $[a,b]$ l'idea è semplice: si integra tra $a$ e $b-\varepsilon (\varepsilon > 0)$ per poi passare al limite per $\varepsilon \to 0^{+}$. In simboli:
>$$\tag{INT1}\fbox{$\int_{a}^{b} \! f(x) \, \d x  = \lim_{ \varepsilon \to 0^{+} } \int_{a}^{b-\varepsilon} \! f(x)  \, \d x  $}$$
>

>[!def]
>Se il limite $\text{INT1}$ esiste finito allora $f$ si dice integrabile in $[a,b]$, alternativamente che l'integrale $\int_{a}^{b} \! f(x) \, \d x$ è [[Convergenza|convergente]]
>Se invece il limite $\text{INT1}$ è $+\infty$ o $-\infty$ si dice divergente.
>Se il limite non esiste allora l'integrale non esiste.
>
>Si definiscono analogamente nel caso in cui $f : (a,b] \to \mathbb{R}$ con $f$ continua e
>$$\lim_{ x \to a^{+} } f(x)=\pm \infty$$
>Si pone
>$$\fbox{$\int_{a}^{b} \! f(x) \, \d x = \lim_{ \varepsilon \to 0^{+} }\int_{a+\varepsilon}^{b} \! f(x) \, \d x$}$$

>[!error] Esempio importante
>Proviamo a calcolare
>$$\int_{a}^{b} \! \frac{1}{(b-x)^{\alpha}} \, \d x $$
>
>$$\begin{align}
>
>&\fbox{$\alpha=1$}&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\!
>
>\end{align}
>$$
>$$\begin{align} \\
>&\int_{a}^{b-\varepsilon} \! \frac{1}{(b-x)} \, \d x = \left[ \log(b-x)  \right]_{a}^{b-\varepsilon} = -\log \varepsilon + \log(b-a)  \\
>&\int_{a}^{b} \! \frac{1}{b-x} \, \d x = \lim_{ \varepsilon \to 0^{+}} \left[ - \log \varepsilon + \log(b-a)\right] = +\infty 
>\end{align}$$
>Quindi l'integrale è divergente
>
>$$\begin{align}
>
>&\fbox{$\alpha \neq1$}&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\!
>
>\end{align}
>$$
>
>$$\begin{align}
>&\int_{a}^{b} \! \frac{1}{(b-x)^{\alpha}} \, \d  = \frac{1}{1-\alpha} \left[-(b-x)^{1-\alpha}\right]_{a}^{b-\varepsilon} = \frac{1}{1-\alpha}[-\varepsilon^{1-\alpha}+(b-a)^{1-\alpha}] \\ \\
>&\int_{a}^{b} \! \frac{1}{(b-x)^{\alpha}} \, \d x = \lim_{ \varepsilon \to 0^{+} } \frac{1}{1-\alpha}\left[ -\varepsilon^{1-\alpha} + (b-a)^{1-\alpha}\right] =  \begin{cases}
>+\infty &\text{se $a>1$} \\
>\frac{(b-a)^{1-\alpha}}{1-\alpha}\quad &\text{se $\alpha < 1$}
>\end{cases} 
>\end{align}$$
>
>Quindi. riassumendo:
>$$\fbox{$ \int_{a}^{b} \! \frac{1}{(b-a)^{\alpha}} \, \d x \text{ è} \begin{cases}
>\text{divergente a }+ \infty\qquad &\text{se } \alpha \geq 1 \\
>\text{convergente }= \frac{(b-a)^{1-\alpha}}{1-\alpha}\quad &\text{se }\alpha < 1
>\end{cases}$}$$



## criteri di integrabilità al finito
Siano $f,g : [a,b) \to \mathbb{R}$, continue con
$$
\lim_{ x \to b^{-} } f(x) = \lim_{ x \to b^{-} } g(x) = +\infty
$$
I seguenti criteri permettono di decidere se un integrale è convergente o divergente:

### [[criterio del confronto#criterio del confronto integrale]]

>[!teorema]
>$$
>\int_{a}^{b} \! \left\vert f(x) \right\vert \, \d x \quad\text{convergente}\quad \Longrightarrow\qquad \int_{a}^{b} \! f(x) \, \d x\qquad \text{convergente}  
>$$
>Se $\left\vert f \right\vert$ è integrabile in $[a,+\infty)$ si dice che $f$ è assolutamente integrabile in $[a,+\infty)$, quindi il teorema afferma che uan funzione assolutamente integrabile è anche integrabile.




## integrazione su intervalli illimitati
Sia $f : [a,b) \to \mathbb{R}$ continua. Poniamo
$$
\fbox{$  
\int_{a}^{+\infty} \! f(x) \, \d x = \lim_{ \omega  \to +\infty }\int_{a}^{\omega} \! f(x) \, \d x  $}
$$
>[!esempio]
>```desmos-graph
>top = 2.25; bottom = -2.25; left = -0.5; right = 6.5
>---
>f(x) = \frac{a(x-2)+b(x-2)^2+c(x-2)^3+1}{e^{4.5(x-2)-4.5d}+1}|1<x<4.5|
>a = 1
>b = 0.7
>c = -0.4
>d = 0.5678
>0<y < f(x) 
>```

>[!def]
>Se il limite sopra esiste finito allora $f$ si diceintegrabile in $[a,+\infty)$ oppure che l'integrale $\int_{a}^{+\infty} \! f(x) \, \d x$ è convergente. 
>Se il limite sopra è $\pm \infty$ l'integrale si dirà divergente. Se invece il limite non esiste allora l'integrale non esiste.

Se invece $f:(+\infty,b]\to \mathbb{R}$ è continua si pone:
$$
\fbox{$ \int_{-\infty}^{b} \! f(x) \, \d x =\lim_{ \omega  \to -\infty }\int_{\omega}^{b} \! f(x) \, \d x$}
$$
Se invece $f:(-\infty,+\infty)\to \mathbb{R}$ è continua si pone:
$$
\fbox{$ \int_{-\infty}^{+\infty} \! f(x) \, \d x = \int_{-\infty}^{c} \! f(x) \, \d x +\int_{c}^{+\infty} \! f(x) \, \d x$}
$$
Con $c$ punto qualunque

>[!error] Esempio importante
>$$
>\int_{1}^{+\infty} \! \frac{1}{x^{\alpha}} \, \d x\qquad \alpha>0 
>$$
>
>$$\begin{align}
>
>&\fbox{$\alpha=1$}&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\!
>
>\end{align}
>$$
>$$
>\int_{1}^{\omega} \! \frac{1}{x^{\alpha}} \, \d x = \left[ \log \omega \right]_{1}^{\omega} = \log \omega
>$$
>Ed essendo $\underset{\omega\to+\infty}{\lim}\log \omega =+\infty$ l'integrale è divergente
>
>$$\begin{align}
>
>&\fbox{$\alpha \neq1$}&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\!
>
>\end{align}
>$$
>$$
>\begin{align}
>\int_{1}^{\omega} \! \frac{1}{x^{\alpha}} \, \d x = \frac{1}{1-\alpha}[x^{1-\alpha}]_{1}^{\omega } =\frac{1}{1-\alpha}(\omega^{1-\alpha}-1) \\
>\int_{1}^{+\infty} \! \frac{1}{x^{\alpha}} \, \d x = \lim_{ \omega ga \to \infty } \frac{1}{1-\alpha}(\omega ^{1-\alpha}-1)=\begin{cases}
>+\infty\qquad&\text{se }\alpha < 1  \\
>\frac{1}{\alpha-1}&\text{se } \alpha>1
>\end{cases}
>\end{align}
>$$
>Quindi:
>$$\fbox{$  
>\int_{1}^{+\infty} \! \frac{1}{x^{\alpha}} \, \d x \qquad\text{è}\quad \begin{cases}
>\text{divergente a }\quad &+\infty\qquad&\text{se }\alpha \leq 1 \\ \\
>\text{convergente a}&=\frac{1}{\alpha-1}\qquad &\text{se }\alpha>1
>\end{cases}
>$}
>$$



### Divergenza della [[serie]] armonica
È facile dimostrare con gli integrali la divergenza della serie armonica
$$
\sum_{n=1}^{\infty} \frac{1}{n}
$$
infatti:
>[!oss]
>```desmos-graph
>top = 1.5; bottom = -1; left = -1; right = 10;
>---
>y = 1/x
>0<y < 1|1<x<2|dred
>0<y < 1/2|2<x<3|dred
>0<y < 1/3|3<x<4|dred
>0<y < 1/4|4<x<5|dred
>0<y<1/5|5<x<6|dred
>0<y< 1/x|1<x<6|dpurple
>(8,1)|dblue|label: `y = \frac{1}{x}`
>(8,0.8)|dred|label: `\frac{1}{n}`
>
>```

Dalla figura ci si convince facilmente che fissato $N$ interno vale sempre
$$
\int_{1}^{N} \! \frac{1}{x} \, \d x < \sum_{n=1}^{N-1} \frac{1}{n}
$$
Ed avendo già dimostrato la divergenza del primo per $n \to +\infty$ , allora anche $\sum_{n=1}^{N} \frac{1}{n}\to+\infty$ per $N \to +\infty$, che dimostra la divergenza della serie armonica


# criteri di integrabilità all'infinito
### [[criterio del confronto#criterio del confronto integrale all'infinito]]
inoltre se $f$ è assolutamente integrabile in $[a,+\infty)$ è anche integrabile.
$$
\int_{a}^{+\infty} \! \left\vert f(x) \right\vert \, \d x \quad \text{convergente}\quad \Longrightarrow \int_{a}^{+\infty} \! f(x) \, \d x 
$$
La dimostrazione segue la linea di quella fata nel caso degli integrali generalizzati su intervalli limitati.

# [[funzioni integrali]]
Che assumono assoluta importanza per il [[teorema fondamentale del calcolo integrale#teorema fondamentale del calcolo integrale 2]]

