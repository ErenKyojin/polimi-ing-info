# calcolo dei limiti
Approfondiamo proprietà fondamentali dei limiti e della continuità, verrà spesso utilizzata la nozione di [[definitivamente]], mentre verrà dato per scontato che $x_0$ ed $l$ siano punti appartenenti ad $\mathbb R^*$:


>[!teorema] Teorema del confronto o dei due carabinieri
>Se:
> 1. Per $x\to c, f(x) \to l$ e $g(x)\to l$
> 2. $f(x) \leq h(x)\leq g(x)$ definitivamente per $x\to c$
> Allora anche $h(x)\to l$ per $x\to c$
>
>>[!corollario]
>>1. per $x\to c, g(x)\to 0$
>>2. $|h(x)|\leq g(x)$ definitivamente per $x\to c$
>>Allora anche $h(x) \to 0$ per $x\to c$
>
>>[!corollario]
>>se $f(x)\to 0$ per $x\to 0$ e $g(x)$ è limitata definitivamente da per $x \to c$, allora $f(x)g(x)\to 0$ per $x\to 0$
>>


>[!teorema] Teorema di permanenza del segno, prima forma
>Se per $x \to c, f(x)\to l>0$ allora $f(x)>0$ definitivamente per $x \to c$

>[!teorema] Teorema di permanenza del segno, seconda forma
>Se per $x\to c$, $f(x)\to l$ e $f(x) \geq 0$ definitivamente per $x \to c$, allora $l \geq 0$

>[!teorema] Teorema di permanenza del segno per funzioni continue
>Se $f$ è continua in $c$ e $f(c)>0$, allora $f(x)>0$ definitivamente per $x \to c$
>

>[!teorema] Algebra dei limiti con limiti finiti
>Se per $x\to c, f(x)\to l_1$ e $g(x) \to l_2\qquad (l_1,l_2\in \mathbb R)$, allora per $x \to c$ si ha:
>1. $f(x) \pm g(x) \to l_1 \pm l_2$
>2. $f(x)g(x)\to l_1l_2$
>3. $f(x)/g(x)\to l_1/l_2$ (Solo se $l_2\neq0$, $g(x)\neq 0$ definitivamente per $x \to c$)
>

>[!teorema] Aritmetizzazione parziale di $\infty$
>Valgono per le funzioni allo stesso modo di quelli per le successioni, vedasi [[infinito]]

 Dimostrazione dei teoremi precedenti
Tutti questi teoremi si basano sui teoremi equivalenti delle successioni e sulla definizione succession alle di [[Limite]]

>[!dim] dimostrazione, teorema del confronto
>Sia $x_n$ una qualsiasi successione tale che $x_n\neq c\forall n$ e $x_n \to c$ per $n \to \infty$, vogliamo provare che $h(x_n)\to l$ per $n \to \infty$. Inoltre sappiamo che:
>$$\begin{flalign}
>&f(x_n) \leq h(x_n) \leq g(x_n) \text{Definitivamente, e} \\
>&f(x_n) \to l\text{ e } g(x_n \to l) 
>\end{flalign}$$
>Infatti per ipotesi $f(x) \to l$ e $g(x)\to l$, e quindi per $x_n\to c$ si ha che $f(x_n) \to l,\quad g(x_n) \to l$. E quindi, per il teorema del confronto applicato alle successioni $f(x_n), g(x_n), h(x_n)$ si conclude che $h(x_n) \to l$
>
>I corollari seguono in modo analogo al teorema successionale

>[!dim] dimostrazione, teorema di permanenza del segno
>Sia $x_n$ un qualsiasi successione tale che $x_n \neq c$ per ogni $n$ e $x_n \to c$, allora $f(x_n) \to l > 0$, quindi per il teorema di permanenza del segno per le successioni (applicato alla successione $f(x_n)$) possiamo concludere che $f(x_n) > 0$ definitivamente per $x \to c$
>
>Da questo teorema si deduce la seconda forma e anche il teorema di permanenza del segno per funzioni continue, infatti se $f$ è continua in $c$, allora $f(c) = \lim_{x\to c}f(x)$(dalla definizione di [[continuità]]), quindi l'ipotesi $f(c)>0$ significa che $\lim_{x \to c} f(x) > 0$ che per il teorema di permanenza ($1°$ forma) del segno implica $f(x) > 0$ definitivamente per $x \to c$ 

>[!dim] Teorema sull'algebra dei limiti
>Sia $x_n$ una qualsiasi successione tale che $x_n \neq c$ per ogni $n$ e $x_n \to c$, allora per l'ipotesi si ha che $f(x_n) \to l_1$ e $g(x_n) \to l_2$, dal teorema sull'algebra dei limiti per successioni concludiamo quindi che $f(x_n) \pm g(x_n)\to l_1 \pm l_2$ e quindi $f(x)+g(x) \to l_1 \pm l_2$
>In modo analogo si dimostrano prodotto e quoziente e l'aritmetizzazione parziali di $\infty$

>[!teorema] Algebra delle funzioni continue
>Siano $f, g$ due funzioni definite almeno in un intorno di $x_0\in\mathbb R$ e continue in $x_0$, allora:
>1. $f(x) \pm g(x)$ è continua in $x_0$
>2. $f(x)g(x)$ è continua in $x_0$
>3. $f(x)/g(x)$ è continua in $x_0$ se $g(x_0) \neq 0$
>
>>[!dim]
>>Proviamo il punto 3 essendo gli altri punti più semplici e intuitivi
>>Per ipotesi sappiamo già che $f$ e $g$ sono continue in $x_0$, che dalla definizione di continuità significa:
>>$$\begin{flalign}
>>f(x) \to f(x_0) \text{ per } x \to x_0 \\
>>g(x) \to g(x_0) \text{ per } x \to x_0
>>\end{flalign}$$
>>Inoltre $g(x_0) \neq 0$ e quindi per il teorema di permanenza del segno per funzioni continue $x \neq 0$ per $x \to x_0$. Allora, per il teorema sull'algebra dei limiti si conclude che
>>$$\frac{f(x)}{g(x)}\to\frac{f(x_0)}{g(x_0)}\text{ per }x \to x_0$$
>>Ossia $\frac fg$ è continua in $x_0$

>[!teorema] Teorema di continuità delle funzioni elementari
>Le seguenti funzioni elementari sono continue in tutti i punti del proprio [[insieme]] di definizione:
>1. Potenze a esponente [[numeri interi|intero]], [[Analisi 1/Insiemi numerici/numeri razionali|razionale]], o [[numeri reali|reale]].
>2. [[Funzioni notevoli|Funzioni esponenziali]].
>3. [[Logaritmo|Funzioni logaritmiche]]
>4. [[Funzioni triogonometriche]] elementari
>
>>[!oss]
>>Vedremo in seguito come combinando tra loro in vari modi queste funzioni, ci permetterà di ottenere altre funzioni continue, e quindi potremo spesso capire "a colpo d'occhio" se stiamo lavorando con una funzione continua o meno
>
>>[!dim]
>>CI limitiamo a dimostrare, come esempio, la continuità di $\sin x$ e $\cos x$ su $\mathbb R$
>>Abbiamo già mostrato in passato come $\sin x$ sia continuo in $x = 0$, possiamo invece dimostrare che anche $\cos x$ lo sia considerando che se $x$ è un angolo nel primo quadrante, $\sin x + \cos x \geq 1$, essendo $1$ l'ipotenusa di un triangolo rettangolo di cateti $\sin x, \cos x$ ($\sin^2 x + \cos^2 x = 1$). Da cui ricaviamo che
>>$$\begin{flalign}
>>&0 \leq 1 - \cos x \leq \sin x \text{ per } x \in \left(0,\frac{\pi}{2}\right) \Rightarrow\\
>>&0 \leq 1 - \cos x \leq |\sin x| \text{ per } x \in \left(-\frac{\pi}{2},\frac{\pi}{2}\right)
>>\end{flalign}$$
>>Per il teorema del confronto $1 - \cos x \to 0$ per $x \to 0$, quindi $\cos x \to 1$ per $x \to 0$ e perciò $\cos x$ è continua in $x = 0$.
>>
>>Proviamo ora la continuità di $\sin x$ in un generico punto $x_0$ considerando la catena di relazioni:
>>$$\begin{flalign}
>>&|\sin(x_0+h)-\sin x_0| = |\sin x_0\cosh + \cos x_0\sinh - \sin x_0| \leq \\
>>&\leq |\sin x_0||\cosh - 1|+|\cos x_0||\sinh| 
>>\end{flalign}$$
>>I termini $|\sinh|$ e $|\cosh - 1|$ tendono a zero per $h \to 0$, per quanto appena dimostrato.
>>I termini $|\sinx_0$ e $|\cos x_0|$ sono invece costanti
>>Quindi $\sin(x_0 + h) - \sin(x_0) \to 0$ quindi $\sin(x_0 + h)\to\sin x_0$ per $h \to 0$, e $\sin x$ è continua in $x_0$. È analoga la catena di disuguaglianze per la continuità di $\cos x$.

>[!teorema] Teorema di cambio di variabile nel limite
>Siano $f,g$ due funzioni per cui è ben definita la [[composte|composizione]] $f \circ g$, almeno definitivamente per $x \to x_0, (x_0 \in\mathbb R^*)$, e supponiamo che:
>$$\begin{flalign}
>&i)g(x)\to t_0 \text{ per } x \to x_0& \\
>&ii)\text{ esiste }\lim_{t \to t_0}f(t) = l \in\mathbb R^*& \\
>&iii)g(x)\neq t_0 \text{ definitivamente per } x \to x_0.& \\
>&\text{Allora esiste}
>\end{flalign}
>$$
>$$\lim_{x\to x_0}f(g(x)) = \lim_{t\to t_0 f(t)}$$  
> I punti $x_0,t_0\in\mathbb R^*$. L'ipotesi $iii)$ non è necessaria nel caso in cui $f$ sia continua in $t_0$. Oppure (ovviamente) nel caso in cui $t_0 = \pm\infty$
> 
>>[!dim]
>È sufficiente osservare che se $x_n$ è una qualsiasi successione tale che $x_n \neq x_0 \forall n$ e $x_n \to x_0$ per $n \to \infty$, allora $g(x_n)$ per $n\to\infty$(per l'ipotesi ($i)$) e  $g(x_n)\neq t_0$ definitivamente (per l'ipotesi ($iii$)).
>Perciò:
>$$f(g(x_n))\to l$$
>(Per l'ipotesi ($ii$)) e questo prova la tesi. Se $t_0 = \pm\infty$ la condizione $g(x) \neq \pm\infty$ è ovviamente verificata, mentre se $f$ è continua in $t_0, l=f(t_0)$, perciò nel caso risultasse $g(x_n)=t_0$ per qualche $n$ si avrebbe
>$$f(g(x_n)) = f(t_0) = l$$
>E quindi la convergenza $f(g(x_n))\to l$ sarebbe comunque garantita.

Dalla proprietà precedente, segue subito il prossimo:
>[!teorema] Teorema di continuità della funzione composta
>Siano: $g$ una funzione definita almeno in un intorno di $x_0$ e continua in $x_0, f$ una funzione definita almeno in un intorno di $t_0 = g(x_0)$ e continua in $t_0$, allora $f \circ g$ è definita almeno in un intorno di $x_0$ ed è continua in $x_0$.
>
>>[!dim]
>>Poichè $g$ è continua in $x_0$,
>>$$\lim_{x\to x_0}g(x) = g(x_0) = t_0$$
>>Allora per il teorema di cambio di variabile nel limite si ha:
>>$$\begin{flalign}
>>\lim_{x\to x_0}f(g(x)) = \lim_{t \to t_0}f(t) = \text{ essendo }f\text{ continua in } t_0 \\
>>= f(t_0) = f(g(x_0))
>>\end{flalign}$$
>>E la tesi è dimostrata.
>
>


# Esempio di calcoli dei limiti
Di seguito esempi utili di applicazioni di teoremi visti fino ad ora

>[!esempio]- limiti di polinomi
>Per calcolare il limite di un polinomio per $x \to +\infty$ è sufficiente calcolare il limite del termine di grado massimo.
>Infatti dato un polinomio 
>$$\begin{flalign}
>&P(x)=a_0x^n+a_1x^{n-1}+...+ a_n, a_0 \neq 0\\ &\qquad\text{ abbiamo}\\
>&P(x) = a_0x^n \left\lbrace1+\frac{a_1}{a_0 x}+\frac{a_2}{a_0x^2}+...+\frac{a_n}{x^n}\right\rbrace
>\end{flalign}$$

>[!esempio]- limiti di funzioni razionali
>Sia ora $f(x) = P_n(x)/Q_m(x)$ dove $P_n$ e $Q_m$ sono >polinomi rispettivamente di grado $n$ ed $m$ dati da:
>$$\begin{flalign}
P_n(x) &= a_0x^n+a_1x^{n-1}+...+a_n\\
Q_m(x) &= b_0x^m+b_1x^{m-1}+...+b_m
\end{flalign}$$
>Per calcolare il limite di $P_n(x)/Q_m(x)$ per $x\to\pm\infty$ basta calcolare il limite del rapporto di monomi di grado massimo, quindi:
>$$\lim_{x\to\pm\infty}\frac{P_n(x)}{Q_m(x)}=\lim_{x\to\pm\infty}\frac{a_0x^n}{b_0x^m}$$
>
>Infatti:
>$$\begin{flalign}
>\lim_{x\to\pm\infty}\frac{P_n(x)}{Q_m(x)} &= \lim_{x\to\pm\infty} \frac{a_0x^n(1 + \text{ termini che tendono a }0)}{b_0x^m(1+\text{ termini che tendono a }0)} =\\ &=\lim_{x\to\pm\infty}\frac{a_0x^n}{b_0x^m}
>\end{flalign}$$
>
>A titolo d'esempio
>$$\begin{flalign}\lim_{x\to-\infty}&\frac{3x^5+1}{x+4} = -\infty \qquad\lim_{x\to+\infty}\frac{6x^3+x}{x^4-6x+2} = 0\\
>&\qquad\lim_{x\to-\infty} \frac{3x^5+2x-1}{2x^5+4x^4} = \frac{3}{2}
>\end{flalign}$$
>
>Per i limiti $\to 0$ è analogo, ma in questo caso "vincono" gli esponenti più piccoli

>[!esempio]-
>$$\lim_{x\to0}x\sin\frac{1}{x} = 0$$
>Essendo $\left|\sin\frac{1}{x}\right|\leq 1$ si ha che
>$$\left|x\sin\frac{1}{x}\right|\leq |x|$$
>Quindi, per il teorema del confronto $x\sin \frac{1}{x}\to 0$, notiamo che $\sin \frac{1}{x}$ di per se non ammette limite, quindi il teorema del prodotto non è applicabile

>[!esempio]
>$$\lim_{x\to0^\pm} e^\frac{1}{x} = 
>\begin{cases}
>+\infty\\
>0
>\end{cases}$$
>Questo risultato lo si trova applicando il teorema del ambio di variabile, per $x\to\pm\infty,\frac{1}{x}\to\pm\infty$ e per $y \to \pm\infty, e^y \to \begin{cases}+\infty \\ 0\end{cases}$ (rispettivamente)











