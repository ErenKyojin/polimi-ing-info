# integrali immediati
$\newcommand{d}{\mathrm{d}}$
Prima di occuparci di tecniche di integrazione complesse, partiamo con le basi di integrazione, ossia costruiamo una tabella inverendo quella delle [[derivata|derivate elementari]] 

|funzione|primitiva|
|---| --- |
|$$k$$|$$kx$$|
|$$x^\alpha$$|$$\frac{x^{\alpha-1}}{\alpha-1}\qquad\alpha \neq-1$$
|$$\frac{1}{x}$$|$$\log x$$
|$$\sin x$$| $$-\cos x$$
|$$\cos x$$|$$\sin x$$
|$$\frac{1}{\cos^2x}=1+\tan^2x$$|$$\tan x$$
|$$\frac{1}{\sin^2x}$$|$$-\cot x$$
|$$e^x$$|$$e^x$$
|$$a^x$$|$$\frac{a^x}{\log a}\quad a > 0, a \neq 1$$
|$$\frac{1}{1+x^2}$$|$$\arctan x$$
|$$\frac{1}{\sqrt{ 1-x^2 }}$$|$$\arcsin x$$
|$$\sinh x$$|$$\cosh x$$
|$$\cosh x$$|$$\sinh x$$
|$$\frac{1}{\cosh^2x}$$|$$\tanh x$$
|$$\frac{1}{\sinh^2 x}$$|$$\coth x$$


>[!oss]
>Quella fornita in questa tabella è **una** primitiva, per scrivere la soluzione di un integrale definito, essendo questo un [[insieme]] di [[funzioni]], dobbiamo sempre aggiungere una costante, solitamente $c$, quindi ad esempio:
>$$\int \!x^2 \, \d x = \frac{x^3}{3} \fbox{$+c$}$$

# regole elementari
Alla tabella sopra riportata, dobbiamo aggiungere un altro pezzo per poter lavorare in modo approfondito con gli integrali

#### integrazione per scomposizione
$$\int \![\alpha f(x)+\beta g(x)] \, \d x = \int \![\alpha f(x)] \, \d x + \int \![\beta g(x)] \, \d x   $$
Dalla linearità della derivata

### integrazione per sostituzione
Sia $G$ una primitiva di $f$ in un intervallo $I$, cioè $G'(t) = f(t)$ per ogni $t \in I$. Sia ora $t = \phi(x)$ una funzione derivabile con [[continuità]] su un intervallo $[a,b]$ tale che $\varphi([a,b]) \subset I$. Dal teorema di derivazione delle funzioni composte abbiamo:
$$\frac{d}{dt} G(\varphi(x)) = G'(\varphi(x))\cdot$$
e quindi:
$$
\begin{align}
&G(t)\qquad&\Phi(x)=G(\varphi(x))\\
&\text{primitiva di}\qquad \Longleftrightarrow\qquad&\text{primitiva di} \\
&f(t)&f(\varphi(x))\cdot \varphi'(x)
\end{align}
$$
Da cui segue le formula
$$
\int \!f(\varphi(x))\varphi'(x) \, \d x = \int \!f(t) \, \d t\qquad(t=\varphi(x)) \tag{CI1}
$$
Per ricordarci questa formula descriviamo il seguente procedimento:
Sostituiamo $t = \varphi(x)$ nell'integrale a primo membro, e si calcola $\d t = \varphi'(x) \d x$ 


Per l'integrale definito la formula $\text{CI1}$ diventa invece:
$$
    \int_{a}^b \!f(\varphi(t))\varphi'(t) \, \d t = \int_{\varphi(a)}^{\varphi(b)} \!f(x) \, \d x\qquad(\varphi (t) = x)  
$$
Che è possibile ricordarsi ancora una volta con lostesso procedimento.
Poniamo $t = \varphi(x)$ nell'integrale a primo membro e calcoliamo $\d t = \varphi'(x) \d x$; in aggiunta modifichiamo gli estremi di integrazione:
$$x \in [a,b]\Longrightarrow t = \varphi(x) \in [\varphi(a),\varphi(b)]$$
Dove la scrittura $[\varphi(a),\varphi(b)]$ indica che $\varphi(a),\varphi(b)$ sono gli estremi di integrazion del nuovo integrale in ordine, anche se eventualmente, $\varphi(a)>\varphi(b)$


# simmetrie
Consideriamo l'integrale di una funzione simmetrica ([[pari]] o [[dispari]]) su un intervallo simmetrico $[-k,k]$, ad esempio:

>[!esempio] Funzione pari
>```desmos-graph
>top = 7; bottom = -2; left = -6; right = 6;hideAxisNumbers
>---
>f(x)=(1/7.2(2x)^2 - 1/720(2x)^4) + 2|x > -5.31| x < 5.31
>0<y < f(x) |
>(5.31,0)|#43835c|label: k
>(-5.31,0)|#43835c|label: -k
>```

>[!esempio] Funzione dispari
>```desmos-graph
>top = 3; bottom = -3;left = -4; right = 4; hideAxisNumbers
>---
>f(x)=-\sin(2/3x)|x > -\pi| x < \pi
>0<y < f(x)|x < 0|#3072da
>f(x)<y < 0|x>0|#3072da
>(\pi,0)|#3072da|label: k
>(-\pi,0)|#3072da|label: -k
>
>```

Proviamo quindi a calolare:
$$
\int_{-\pi /2}^{\pi/2} \!\cos x \, \d x = \text{integranda pari} = 2 \int_{0}^{\pi/2} \!\cos(x) \, \d x = [2\sin x]_{0}^{\pi/2} = 2
$$
Invece
$$
\int_{-\pi/2}^{\pi / 2} \!\sin(x) \, \d x = \text{integranda dispari} = 0
$$

Consideriamo infine un esempio:
>[!esempio]
>$$\int_{-1}^1 \!e^{-\vert x\vert} \, \d x =2\int_{0}^1 \!e^{-\vert x \vert} \, \d x = \int_{0}^1 \!e^{-x} \, \d x =\left[-e^{-x}\right]_{0}^{1} $$
>In cui attraverso la simmetria abbiamo spostato l'intervallo di integrazione in $[0,1]$ trattandosi di una funzione pari.
> Questo cambio ci ha permesso di rimuovere il valore assoluto, in quanto stavamo già considerando solo $x \geq 0$

## Valori assoluti
Vogliamo trovare un modo, in generale, si può calcolare l'integrale definito di una funzione con valore assoluto, quindi consideriamo il prossimo esempio

>[!esempio]
>$$
>\int_{0}^{2} \!\vert(x-1)(x+3)\vert \, \d x 
>$$
>per $x \in[0,2]$ abbiamo
>$$
>\vert(x-1)(x+3)\vert = \begin{cases}
>(x-1)(x+3)\qquad\text{se } x \in[1,2] \\
>(1-x)(x+3)\qquad\text{se } x \in[0,1]
>\end{cases}
>$$
>Non ci interessano invece i casi in qui $x \neq [0,2]$. Per l'additività dell'integrale:
>$$
>\begin{align}
>\int_{0}^{2} \!\vert(x-1)(x+3)\vert \, \d x &= \int_{0}^{1} \!(1-x)(x+3) \, \d x + \int_{1}^{2} \!(x-1)(x+3) \, \d x \\
 & =\left[ -\frac{x^{3}}{3}-x^{2}+3x \right]_{0}^{1}+\left[ \frac{x^{3}}{3}+x^{2}-3x \right]_{1}^{2}    \\
>&=\left( \frac{5}{3}-0 \right)+\left( \frac{2}{3}+\frac{5}{3} \right) = \frac{10}{3}
>\end{align}
>$$

>[!oss]
>Per calcolare l'integrale indefinito di una funzione contenente uno o più valori assoluti, si spezza l'integrale nella somma di integrali su sottointervalli, in modo che in ogni sottointervallo l'argomento di ogni valore assoluto abbia segno costante, e che quindi possano essere evitati nell'interanda

# Funzioni razionali
Concentriamoci ora sul trovare un modo per calcolare la primitiva di una funzione razionale:
$$
\int \!\frac{(P_{n}(x))}{Q_{m}(x)} \, \d x 
$$

Se il grado del numeratore è $\geq$ del grado del denominatore si esegue la [[divisione tra polinomi]], quindi riscriviamo l'integranda come somma di un polinomio più una funzione razionale con lo stesso denominatore di quello di partenza

>[!esempio]
>$$
>\int \!\frac{x^{3}+x}{x^{2}+x+1} \, \d x 
>$$
Per la divisione dei polinomi
$$x^{3}+x = (x^{2}+x+1)(x-1)+(x+1)$$
>Quindi
>$$\int \! \frac{x^{3}+x}{x^{2}+x+1} \, \d x = \int \! (x-1) \, \d x + \int \! \frac{x+1}{x^{2}+x+1} \, \d x  $$

Grazie a questa osservazione possiamo sempre ipotizzare di star lavorando con polinomi della forma $\dfrac{P_{n}(x)}{Q_{m}(x)}$ con il grado $m>n$, altrimenti ci si riduce a questo caso tramite divisione.

Distinguiamo a questo punto vari casi:
## denominatore di primo grado
È immediato in questo caso, attraverso logaritmo, tramite la seguente formula:

$$
\int \! \frac{1}{ax+b} \, \d x = \frac{1}{a}\log|ax+b|+c
$$
>[!esempio]
>$$\int \! \frac{3}{4x+2} \, \d x = \frac{3}{4}\log|4x+2| + c $$

## denominatore di secondo grado e numeratore di grado $\leq 1$
Dobbiamo distinguerlo a sua volta in 3 diversi casi, in base al segno del discriminante del denominatore:

1. Il denominatore ha due radici distinte. La frazione si scompone in fratti semplici e si integra mediante somma di logaritmi

>[!esempio]
>$$\int \! \frac{x+2}{x^{2}+5x+6} \, \d x \xRightarrow{\Delta > 0} \int \! \frac{x+2}{(x-2)(x+3)} \, \d x $$
>
>Per risolverla dobbiamo scrivere:
>$$\int \! \frac{x+2}{(x-2)(x+3)} \, \d x = \frac{a}{x-2} + \frac{b}{x+3}$$
>Per opportuni coefficienti $a,b$ che noi vogliamo determinare eseguento la somma al secondo membro e facendo denominatore comune, imponiamo che la frazione trovata si uguale a quella al primo membro. Otteniamo quindi
>$$\frac{x+(a+b)+(3a+2b)}{(x-2)(x+3)}=\frac{x+2}{(x-2)(x+3)}$$
>Che è vero se e solo se
>$$\begin{cases}
>a+b = 1 \\
>3a+2b = 2
>\end{cases} \Longrightarrow
>\begin{cases}
>a = \frac{4}{5} \\
>b = \frac{1}{5}
>\end{cases}
>$$
Quindi la soluzione dell'integrale è:
>
>$$\int \! \left( \frac{ \frac{4}{5}}{x-2} + \frac{\frac{1}{5}}{x+3}\right) \, \d x = \frac{4}{5}\log |x-2| + \frac{1}{5}\log|x+3| + c$$

2. il denominatore è un quadrato perfetto, mediante sostituzione si torna alla somma di potenze che si integra immediatamente:

>[!esempio]
>$$\begin{align}
> &\int \! \frac{x+1}{(3x+2)^{2}} \, \d x = \left[ 3x+2=t, 3dx = dt, x = \frac{t-2}{3} \right] =  \\
> &= \int \! \frac{\left( \frac{t-2}{3}+1 \right)}{t^{2}} \, \frac{\d t}{3} = \frac{1}{9} \int \!\frac{(t+1)}{t^{2}}  \, \d t  =\frac{1}{9} \int \! \left( \frac{1}{t} + \frac{1}{t^{2}} \right) \, \d t = \\
>&=\frac{1}{9}\left( \log \vert t\vert -\frac{1}{t} \right)  + c = \frac{1}{9}\left( \log |3x+2| - \frac{1}{3x+2} \right) + c
>
>\end{align}$$

3. Il denominatore non si annulla mai $(\Delta < 0)$. Vediamo alcuni esempi:

>[!esempio]
>$$\int \! \frac{1}{x^{2}+3} \, \d x = \frac{1}{3} \int \! \frac{1}{\left( \frac{x}{\sqrt{ 3 }}\right)^{2}+1} \, \d x = \frac{\sqrt{ 3 }}{3} \arctan\left( \frac{x}{\sqrt{ 3 }} \right)+c$$

In generale

$$
\fbox{$\int \! \frac{1}{x^{2}+a^{2}} \, \d x = \frac{1}{a}\arctan\left( \frac{x}{a} \right)+c$}
$$
Per verificarlo è sufficiente calcolare la derivata al secondo membro.

#TODO 

# Integrazione per parti

Se $f$ e $g$ sono [[derivata|derivabili]] in $[a,b]$ si ha:
$$
(fg)' =f'g +fg'
$$
Quindi
$$
fg'=(fg)'-f'g
$$
E prendendo l'integrale indefinito ad entrambi i membri si ha
$$
\int \! fg' \, \d x = \int \! (fg)' +f'g\, \d x 
$$
Che con semplici operazioni diventa la formula per l'integrazione per parti:
$$
\fbox{$\int \! f(x)g'(x) \, \d x = f(x)g(x) - \int \! f'(x)g(x) \, \d x$} 
$$
Nel caso di integrale definito:
$$
\fbox{$\int_{a}^{b} \! f(x)g'(x) \, \d x = \left[ f(x)g(x) \right]_{a}^{b}-\int_{a}^{b} \! f'(x)g(x) \, \d x$}
$$

>[!esempio]
>$$\int \! x\sin x \, \d x $$
>$x =f, \sin x=g'$ (è solitamente utile ridurre il grado dell'integranda piuttoto che aumentarlo)
>$$\int \! x\sin x \, \d x = -x\cos x - \int \! -\cos x \, \d x  = -x\cos x+\sin x + c$$

In effetti questo ultimo esempio racchiude un processo molto utile, se dobbiamo calcolare
$$
\int \! x^{n} f(x) \, \d x \qquad\text{con}\qquad f(x) = \cos x, \sin x, \cosh x, \sinh x, e^{x} 
$$
(Ossia funzioni che si integrano in modo ciclico) Possiamo utilizzare l'integrazione per parti derivando $x^{n}$ (facendola quindi abbassare di grado), ed integrando $f(x)$, non aumentando la [[complessità]].
Più in generale sempre calcolare, per la linearità dell'integrale:
$$
\int \! P_{n}(x)f(x) \, \d x 
$$
Con $P_{n}(x)$ polinomio di grado $n$



## integrazione delle [[Funzioni triogonometriche]]


#TODO 
