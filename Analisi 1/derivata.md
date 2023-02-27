# Derivata
Prima di introdurre un discorso rigoroso prendiamo come esempio la pedenza di una strana in salita, che viene indicata con una percentuale, ad esempio del 10%, ma cosa signfica esattamente? Significa che ogni metro percorso, ci alziamo di 10 cm. Il 10% indica quindi il rapporto:
$$\frac{\text{variazione quota}}{\text{variazione percorso}}$$
Questo rapporto indica il tasso di variazione *in media*, inoltre se il tasso è positivo indica *salita*, se il tasso è negativo indica *discesa.*


>[!oss] approfondiamo
>Ipozziamo che il percorso sia descritto dal grafico  $y=f(x)$
>![[FCBF5F49-FD65-4D76-9CE3-8A09DE90DA07.jpeg]] 
>Consideriamo $A = (x, f(x)), B = (x+h,f(x+h))$, avremo allora
>$$\overline{AC} = h \text{ e } \overline{CB} = f(x+h) - f(x)$$
>Quindi
>$$\frac{\text{variazione quota}}{\text{variazione percorso}} = \frac{f(x+h)-f(x)}{h}$$
Questo rapporto si chiama [[rapporto incrementale]] ed indica il coefficiente angolare di $\overline{AB}$, tuttavia è facile notare che è una retta che non è più che una approssimazione.
Quindi consideriamo il rapporto visto in precedenza
$$\frac{f(x+h)-f(x)}{h} = \tan\alpha$$
E passiamo al limite (supponendo che esista) per $h\to0$. Cosa succede geometricamente? Il punto $A$, di coordinate $(x,f(x))$ rimane fisso, mentre il punto $B$, di coordinate $(x+h,f(x+h))$ si muove verso $A$,mantenendosi sul grafico.
>![[FFDAC0ED-7914-4B93-9BB0-03E14271495B.jpeg]]
>
>1. La retta limite si chiama anche retta tangente al grafico di $f$ in $x$ 
2.la sua pendenza è data dalla tangente dell'angolo $\omega$ tra la tangente e l'asse delle ascisse e si chiama **derivata prima** di $f$ nel punto $x$

>[!def] Derivata
>Sia $f : (a,b)\to\mathbb R$ si dice **derivabile** in $x_0 \in (a,b)$ se esiste finito $\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}$. Questo limite prende il nome di derivata prima (o derivata) di $f$ in $x_0$ e si indica come:
>$$f'(x_0)\quad\frac{df}{dx}\bigg\vert_{x = x_0}\quad Df(x_0)\quad \dot{f}(x_0)\quad \frac{d}{dx}f(x)$$
$$\fbox{$\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}=f'(x_0)$}$$


La retta di equazione
$$\tag{Der1}\fbox{$y = f(x_0)+f'(x_0)(x-x_0)$}$$
Si chiama retta tangente al grafico di $f$ nel punto $(x_0,f(x_0))$

Se $f$ è derivabile in ogni punto di $(a,b)$ è definita la funzione $f' : (a,b) \to\mathbb R$ derivata di $f$ data da
$$x\mapsto f'(x)$$
In questo caso è possibile chiederci se $f'(x)$ sia, a sua volta, derivabile (in un punto o in tutto l'intervallo); se è questo il caso chiamiamo derivata seconda di $f$ la derivata di $f'$ che indichiamo con:
$$f^{''}(x_0)\quad\frac{d^2 f}{dx^2}\bigg\vert_{x = x_0}\quad D^2f(x_0)\quad \ddot f(x_0)$$
Più in generale la derivata $n-$esima si indica con:
$$f^{(n)}(x_0)\qquad \frac{d^nf}{dx^n}\bigg\vert_{x = x_0}\qquad D^nf(x_0)$$


## Derivate di funzioni elementari
| $f$ | $f'$ |
| --- | --- |
|1. $e$ (costante)$\mspace{100mu}$|$\mspace{100mu}0\mspace{100mu}$|
|2. x|$\mspace{100mu}1$|
|3. $x^2$|$\mspace{100mu}2x$|
|4. $\dfrac{1}{x}$|$\mspace{90mu}-\dfrac{1}{x^2}$|
|5. $\sqrt x$|$\mspace{50mu}\dfrac{1}{2\sqrt x}$ per $x > 0$|
|6. $x^\alpha (\alpha \in\mathbb R, x > 0)$|$\mspace{90mu}\alpha x^{\alpha-1}$|
|7. $\sin x$|$$\cos x$$|
|8. $\cos(x)$|$$-\sin x$$|
|9. $\tan x$|$$1 + \tan^2 x = \frac{1}{(\cos x)^2}$$|
|10. $\cot x$|$$-(1+\cot^2 x) = -\frac{1}{\sin^2 x}$$|
|11. $e^x$|$$e^x$$|
|12. $\log x$|$$\frac{1}{x}$$|
|13. $a^x\ (a>0)$|$$a^x\log a$$
|14. $\log_a x\ (a > 0, a \neq 1)$|$$\frac{1}{x\log a}$$
|15. $\sinh x$| $$\cosh x$$|
|16. $\cosh x$|$$\sinh x$$|
|17. $\arcsin x$|$$\frac{1}{\sqrt{1-x^2}}$$|
|18. $\arccos x$| $$-\frac{1}{\sqrt{1-x^2}}$$
|19. $\arctan x$|$$\frac{1}{1+x^2}$$|

- La 1. è immediata dalla definizione.
- 2. 3. 4. 5. Sono casi particolari della 6.

>[!Dim]- proviamo la 3
>$$f(x) = x^2, f'(x) = 2x$$
>Abbiamo che 
>$$
>\begin{flalign}
>\frac{f(x+h)-f(x)}{h} &= \frac{(x+h)^2-x^2}{h}=\\ 
>=\frac{x^2+2hx+h^2-x^2}{h} &= 2x+h
>\end{flalign}
>$$
>E $2x + h \xrightarrow{h\to 0} 2x$
$$\mathit{hello} hello$$

>[!dim]- Proviamo la 6.
>sia $x > 0$, scriviamo
>$$
\begin{flalign}
>&\frac{(x+h)^\alpha-x^\alpha}{h} = x^\alpha\frac{\left(1+\frac{h}{x}\right)^\alpha-1}{h}\sim \\
>&\qquad\qquad\sim x^\alpha\frac{\alpha\frac{h}{x}}{h} = \alpha x^{\alpha - 1}
>\end{flalign}
>$$

>[!dim]- proviamo 7. ed 8.
>$$\begin{flalign}
>&\fbox{$f(x) = \sin x, f'(x) = \cos(x)\quad$}\\
>&\fbox{$f(x) = \cos x, f'(x) = -\sin(x)$} 
>\end{flalign}$$
Utilizziamo le [[formule di addizione]]:
>$$\begin{flalign}
\frac{\sin(x+h)-\sin x}{h} &= \frac{\sin x\cos h + \sin h \cos x - \sin x}{h} = \\
&= \sin x\frac{\cos h - 1}{h} + \frac{\sin h}{h}\cos x  \xrightarrow{h \to 0}\cos x
\end{flalign}$$
Per risolverlo siamo dovuti ricorrere ai [[limiti notevoli]] $\dfrac{\sin x}{x} \to 1$ e
$$\frac{\cos h - 1}{h} \sim \frac{1}{2}\frac{h^2}{h} = -\frac{1}{2}h \to 0$$
La seconda formula è analoga

>[!dim]- proviamo la 11.
>$$\fbox{$f(x) = e^x, f'(x) = e^x$}$$
>Si ha:
>$$\begin{flalign}
>\frac{e^{x + h} - e^x}{h} = e^x\frac{e^h - 1}{h}\xrightarrow{h\to 0}e^x
>\end{flalign}$$
>Dal [[limiti notevoli|limite notevole]] $\dfrac{e^h-1}{h}\to 1$ per $h \to 0$
>
>>[!oss]
>>Da questa formula notiamo che la funzione $x \mapto e^x$ soddisfa l'equazione $y' = y$. Importante tenerlo a mente

>[!dim]- Proviamo la 12.
>$$\fbox{$f(x) = \log x, f'(x) = \frac{1}{x}$}$$
>Si ha:
>$$\begin{flalign}
>\frac{\log(x+h)-\log(x)}{h} = \frac{\log \frac{1 + h}{x}}{h} \sim \frac{h}{x}\frac{1}{h} = \frac{1}{x}
>\end{flalign}$$

#### Cosa succede quando una funzione non è derivabile su tutto un intervallo?
[[punti di  non derivabilità]]

## derivabilità e [[continuità]]
Vale il seguente importante teorema:

>[!teorema] ### Relazione tra derivabilità e continuità
>Se $f$ è derivabile in un punto $x_0$ allora $f$ è continua in $x_0$
>
>>[!dim]
>>Scriviamo
>>$$f(x_0 + h) - f(x_0) = \frac{f(x_0+h)-f(x_0)}{h}\cdot h\sim f'(x_0)h$$
>>per $h \to 0$
>>Allora $\underset{h\to0}{\lim}[f(x_0+h)-f(x_0)] = 0$ da cui $\underset{h\to 0}{\lim}f(x_0+h) = f(x_0)$ che è la definizione di continuità di $f$ in $x_0$

Di conseguenza se una funzione è discontinua in $x_0$ non può essere derivabile in $x_0$.
Invece se $f$ è continua non possiamo trarre conclusioni sulla derivabilità di $f$, basti pensare ad $f(x)=|x|$ continua in $0$ ma non derivabile.

## [[calcolo delle derivate]]
## [[massimi e minimi]] e [[punti stazionari]]
## [[teorema del valor medio]] e [[test di monotonia]]
## [[Teorema di de l'Hospital]]

## Limite della derivata e derivabilità
>[!esempio]
>Ipotizziamo di voler studiare la derivabilità o meno di una funzione come
>$$f(x) = x|\log x|$$
>La funzione è definita e continua per $x > 0$ ed è certamente derivabile per $x \neq 1$, in $x = 1$, sospettiamo la presenza di un punto angoloso in quanto è dove si annulla l'argomento del modulo.
>Poichè
>$$f(x) = \begin{cases}
>x\log x\qquad &\text{per $x\geq1$}\\
>-x\log x &\text{per $0<x<1$}
>\end{cases}$$
>Possiamo calcolare
>$$f'(x) = \begin{cases}\log x + 1\qquad&\text{per $x>1$}\\
>-(\log x + 1) &\text{per $0<x<1$}
>\end{cases}$$
Rimane da studiare la derivabilità di $f$ in $x = 1$. È facile osservare che
>$$\begin{align}
>&\lim_{x\to1^+}f'(x) = \lim_{x\to1^+}(\log x + 1) = 1 \\
>&\lim_{x\to1^-}f'(x) = \lim_{x\to1^-}(-\log x - 1) = -1
>\end{align}$$
>Quindi il limite destro e sinistro sono diversi, e quindi abbiamo un punto angoloso sulla derivata
>Quindi possiamo affermare che
>$$\lim_{x\to1^+}f'(x) = f'_+(1)$$
>```desmos-graph
>
>y=x\abs(\ln x)
>```

>[!teorema]
>Sia $f : [a,b)\to\mathbb R$, continua in $a$, derivabile in $(a,b)$, ed esista finito o infinito
>$$\lim_{x\to a^+}f'(x) = m\in\mathbb R^*$$
>Allora esiste
>$$f'_+(a) = m$$
>Ossia, se la funzione è continua in $a$ ed esiste il limite destro della derivata allora esiste la derivata destra e coincide con quel limite, un analogo risultato vale per la derivata sinistra e quindi per la derivata.
# Derivata seconda
La derivata seconda ha vari significati che ci permettono di analizzare più in dettaglio una funzione

### significato geometrico della derivata seconda
Mentre la derivata prima indica la pendenza del grafico, la derivata seconda rappresenta quanto velocemente varia la pendenza stessa. ed è legata alla curvatura, ed in particolare modo con la concavità e la convessità.

Per definire la convessità possiamo considerare una funzione $f : I \to \mathbb R$ con $I$ intervallo, si chiama epigrafico di $f$ l'insieme
$$\text{epi} f = \{(x,y)\in\mathbb R^2 : x \in I \text{ e } y \geq f(x)\}$$
In questo modo definiamo l'area "sopra" al grafico di una funzione, a questo punto possiamo dire che $f$ è convessa in $I$ se il suo epigrafico è un insieme convesso, ossia se per ogni coppia di punti $P_1,P_2 \in \text{epi}f$ il segmento che le congiunge è contenuto totalmente nell'$\text{epi}f$. Alternativamente si dice concava se $-f$ è convessa.

>[!teorema]
>Una funzione convessa su un intervallo $I$ è continua in $I$ salvo al più negli estremi dell'intervallo. Inoltre possiede derivata destra e sinistra in ogni punto dell'intervallo.


### convessità e derivate
>[!teorema] sia $f : (a,b) \to\mathbb R$
>Se $f$ è derivabile in $(a,b)$ allora $f$ è convessa (concava) in $(a,b)$ se e solo se $f'$ è crescente (decrescente) in $(a,b)$
>Se $f$ è derivabile due volta in $(a,b)$ allora $f$ è convessa (concava) in $(a,b)$ se e solo se $f''(x)\geq 0$ ($\leq 0$) per ogni $x\in(a,b)$

>[!teorema]
>Una funzione $f : (a,b)\to\mathbb R$, derivabile in $(a,b)$ è convessa (concava) in $(a,b)$ se e solo se comunque si scelga un punto $x_0 \in (a,b)$ si ha che il grafico di $f$ si mantiene in tutto $(a,b)$ sopra (sotto) il grafico della retta tangente in $(x_0,f(x_0))$
### punti di [[flesso]]

# Analisi
Con tutti questi strumenti possiamo finalmente [[studio del grafico di una funzione|studiare il grafico]] di una funzione