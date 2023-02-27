# Calcolo delle derivate
La relazione tra l'operazione di derivata e le principali operazioni già note ossia operazioni algebriche, composizione ed inversione

### algebra delle derivate
>[!teorema]
>Siano $f,g : (a,b) \to\mathbb R$ derivabili in $(a,b)$; allora $f \pm g,f\cdot g, f / g (g \neq 0)$ sono derivabili in $(a,b)$ e valgono le seguenti formule:
>$$\begin{flalign}
>&\tag{CDV1}\fbox{$(f\pm g)' = f' \pm g'\qquad\qquad$} \\
>&\tag{CDV2}\fbox{$(f\cdot g)' = f' \cdot g + f \cdot g'\qquad$} \\
>&\tag{CDV3}\fbox{$(f / g)' = f'\cdot g - f \cdot g' / g^2\quad$}
>\end{flalign}$$
>In particolare dalla $\text{(CDV3)}$ si deduce
>$$\tag{CDV4}\mspace{-50mu}\fbox{$(k\cdot f)' = k\cdot f'\qquad k\text{ costante}$}$$
>Sapendo inoltre che la derivata di una costante è $0$, dalla $\text{(CVD3)}$ otteniamo per $f  = 1$:
>$$\mspace{-50mu}\fbox{$\left(\frac{1}{g}\right)'=-\frac{g'}{g^2}$}\tag{CDV5}$$ 
>La $\text{CVD2}$ è detta regola di Leibniz e si estende al prodotto di $n$ fattori:
>$$(f_1f_2\ldots f_n) = f_1'f_2\ldots f_n+f_1f_2'\ldots f_n + \ldots + f_1f_2 \ldots f_n'$$
>
>>[!dim]
>>$\text{CDV1 e CDV4}$ sono immediate dalla definizione di derivata
>>
>>Dimostriamo $\text{CDV2}$:
>>Si ha, fissato $x \in (a,b)$
>>$$\begin{flalign}
>>&f(x+h)g(x+h) - f(x)g(x) = \\
>>&=f(x+h)g(x+h) \underbrace{- f(x+h)g(x)+f(x+h)g(x)}_{=0}-f(x)g(x)
>>\end{flalign}$$
>>Quindi
>>$$\begin{flalign}
>>&\frac{f(x+h)g(x+h)-f(x)g(x)}{h} = \\
>>&=f(x+h)\cdot\frac{g(x+h)-g(x)}{h}+g(x)\frac{f(x+h)-f(x)}{h}\to \\
>>&\to f(x)g'(x)+f'(x)g(x)
>>\end{flalign}$$
>>Poichè $f(x+h)\to f(x)$ quando $h\to0$ essendo $f$ continua in quanto derivabile
>>
>>Proviamo ora la $\text{CDV5}$
>>$$\begin{flalign}
>>&\frac{1}{h}[\frac{1}{g(x+h)}-\frac{1}{g(x)}] = \frac{g(x)-g(x+h)}{hg(x)g(x+h)} = \\
>>=&\frac{g(x+h)-g(x)}{h}\cdot\frac{1}{g(x)g(x+h)}\to-\frac{g'(x)}{g^2(x)}
>>\end{flalign}$$
>Dove sfruttiamo ancora il fatto che $g$ è continua in quanto derivabile, quindi $g(x+h)\to g(x)$ per $h\to0$
>
>Notiamo infine che dalle $\text{CDV2 e CDV5}$ si deduce anche la $\text{CDV3}$ infatti:
>$$\begin{flalign}
>\left(\frac{f}{g}\right)' &= \left(f\cdot\frac{1}{g}\right)' = \text{ per la CDV2 applicata a } f, \frac{1}{g} \\
>&= f' \cdot \frac{1}{g}+f\cdot\left(\frac{1}{g}\right) = \text{ per la CDV5} \\
>&=f' \cdot \frac{1}{g} + f\cdot\left(-\frac{g'}{g^2}\right) = \frac{f'g-fg'}{g^2}, \text{ cioè la CDV3}
>\end{flalign}$$


### derivata di una funzione composta

>[!teorema] Regola della catena
>Sia $g\circ f$ la composta di due funzioni $f$ e $g$. Se $f$ è derivabile in un punto $x$ e $g$ è derivabile in $y=f(x)$ allora $g \circ f$ è derivabile in $x$e vale la formula:
>$$\fbox{$(g\circ f)'(x) = g'(f(x))\cdot f'(x)$}$$

La regola della catena può essere meglio apprezzate con la notazione di Leibniz $\frac{df}{dx}$ e $\frac{dg}{dx}$, infatti, ponendo $w = g(y)$ abbiamo:
$$\fbox{$\frac{dw}{dx} = \frac{dw}{dy}\cdot\frac{dy}{dx}$}$$
Ed è quindi *come se* $dy$ si semplificasse.
Possiamo generalizzare per un numero qualunque di composte:
$$[f(g(h(x)))]' =f'(g(h(x)))\cdot g'(h(x)) \cdot h'(x)$$

### derivata di un inversa
 >[!teorema]
 >$f : (a,b) \to \mathbb R$ continua e invertibile in $(a,b)$ e $g=f^{-1}$ la sua inversa, definita in $f(a,b)$. Supponiamo inoltre che esista $f'(x_0)\neq0$ per un certo $x\in(a,b)$. Allora $g$ è derivabile in $y_0 = f(x_0)$ e
 >$$g'(y_0) = \frac{1}{f'(x_0)}$$
 