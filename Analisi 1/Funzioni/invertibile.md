# Funzioni inverse
$f | D \rightarrow \mathbb R$ si dice che $f$ è invertibile in $D$ se  $\forall g \in f(D)\ \exists!\ x \in D|y=f(x) \Leftrightarrow\underbrace{\forall x_1x_2\in D\quad f(x_1) = f(x_2) \Rightarrow x_1 = x_2}_\text{Definizione di funzione iniettiva}$
$\Rightarrow$ tutte le funzioni iniettivi sono invertibili

Se una funzione $f$ non è inverbile su tutto $D$, potrebbe comunque esserlo in una restrizione di $D$.

Se $f : B \rightarrow \mathbb R$ è invertibile in D chiamiamo [[funzione inversa]] di f la legge che associa ad ogni $y$ di $f(D)$ la $x \in D |y=f(x)$


## Continuità e invertibiltà
Sia $f : I \to\mathbb R$ con $I$ intervallo. Occupiamoci ancora del problema dell'intertibilità di $f$, vedendo ora il problema dal punto di vista della continuità.
Sappiamo che una funzione definita su un intervallo e [[monotonia|strettamente monotona]] è invertibile. Il viceversa invece non è generalmente vero, ma se aggiungiamo l'ipotesi della continuità è invertibile.

>[!teorema] #Teorema 
>Sia $f: I \to \mathbb R$, con $I$ intervallo, una funzione continua in $I$. Allora $f$ è invertibile in $I$ se e solo se è strettamente monotona. In tal caso la sua inversa è ancora strettamente monotona e continua.
>
>>[!dim]
>>Sappiamo già che se $f$ è strettamente monotona è invertibile, mostriamo che vale il viceversa in aggiunta alle ipotesi di continuità, ossia che se è continua e invertibile, allora è strettamente monotona.
>>Per assurdo, ipotizziamo non sia strettamente monotona, allora esistono tre punti $x_1 < x_2 < x_3$ in $I$ tali che
>>$$\begin{flalign}&f(x_1) < f(x_2)\text{ e } f(x_2) > f(x_3) \\
>>&\quad\qquad\text{ alternativamente }\\
>>&f(x_1) > f(x_2) \text{ e } f(x_3) < f(x_2)
>>\end{flalign}$$
>>Supponiamo che valga la prima ipotesi, essendo analogo nel secondo caso, confrontiamo i valori di $f(x_1)$ e $f(x_3)$, sicuramente per l'ipotesi di invertibilità $f(x_1) \neq f(x_3)$, quindi $f(x_1) > f(x_3)$ o $f(x_1) < f(x_3)$, supponiamo che valga la seconda, essendo l'altro un caso analogo.
>>$$x_1 < x_2 < x_3 \text{ e } f(x_1) < f(x_3) < f(x_2)$$
>>Essendo $f$ continua, per il [[Teorema dei valori intermedi]] esiste $x_0 \in (x_1, x_2)$ tale che $f(x_0) = f(x_3)$, poichè $x_0 \neq x_3$ In quanto $x_0 < x_2 < x_3$, $f$ non può essere invertibili, assurdo. Abbiamo quindi dimostrato la prima parte del teorema.
>>Sia ora $f$ continua, strettamente monotona e quindi invertibile in $I$, e sia $g$ la sua inversa, ancora strettamente monotona e invertibile. Proviamo che $g$ è continua. Per quanto osservato dopo il [[Teorema di monotonia (funzioni)]], la funzione $g$ strettamente monotona, o è continua, oppure ha dei punti di discontinuitò a salto. In tal caso l'immagine di $g$ non è un intervallo, il che è assurdo perchè tale immagine è $I$, quindi $g$ è continua.

Si noti che nella dimostrazione del teorema precedente si sono utilizzati sia il teorema dei valore intermedi, sia il teorema di monotonia per le funzioni. E quindi ci siamo basati ancora sull'assioma di continuità di $\mathbb R$. 
Questo teorema implica inoltre che:

>==una funzione continua e invertibile su un intervallo ha inversa continua==

Queso completa la dimostrazione del teorema di [[continuità]] delle funzioni elementari:
La continuità di $a^x$ implica la continuità di $\log_a x$
La continuità di $\sin x,\cos x,\tan x$ implica la continuità di $\arcsin x, \arccos x, \arctan x$
