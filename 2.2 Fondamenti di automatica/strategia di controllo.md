1. Controllo in anello aperto (AA)
 ![[Controllo in anello aperto.canvas]]

2. Controllo in anello aperto con compensazione del disturbo (supposto misurabile)
	- $Md$ misuratore del disturbo, funziona se $(u,d) \to y$ è esattamente noto
	- $d_{m} = d$

![[Anello aperto con compensazione.canvas]]

3. Controllo in anello chiuso (AC) o in retroazione o feedback
![[Controllo in anello chiuso.canvas]]
Puó contenere disturbi $d$ ed incertezza di modello (legame $(u,d) \to y$ ) non esisattamente noto. Tramite $y_{m}$ o


4. ![[Controllo in anello chiuso con compensazione.canvas]]
>[!esempio]
> Grafico molla
> 
> 1. modello statico (all'equilibrio)
>    Equilibrio $\implies$ vettore nullo $\implies$ l'attrito è $0 \implies F + F_{att} =0$
>    $$
> \bar{F} - k\bar{y} = 0 \implies \bar{y}= \frac{\bar{F}}{k}
>$$
>Quindi se voglio $y = y^o$ dovró applicare $F = ky^o$
>
>Vediamo cosa succede con un controllo in anello aperto supponendo che $k$ sia uguale ad un certo $k_{n} + \Delta k$
>Applicando $F = k_{n}y^o$ otteró
> $$
> y = \frac{F}{K_{n}+\Delta K} = \frac{k_{n}}{k_{n} + \Delta K}y^o
>$$
>Quindi un errore di modello ($\Delta K$) diventa un errore nel controllo $(y \neq y^o)$
>
>2. modello dinamico
> $m*accelerazione = \sum$ forze $\implies m \ddot{y} = F - ky - hy$ cioè $m\ddot{y} (t) + h \dot{y} (t) + ky(t) = F(t)$
> - Anello aperto: $F(t)$ non dipende da $y$, altrimenti non sarebbe termine noto
> - Anello chiuso: se per **esempio** scegliamo:
> $$F(t) = \alpha(y^O(t) - y(t)) + \beta \dot{y}(t)$$
> Otteniamo
>  $m\ddot{y}(t) + h\dot{y}(t) + ky(t) = \alpha y^o(t) - \alpha y(t) + \beta \dot{y}(t)$
>  Ossia
>   $$m\ddot{y}(t) + (h-  \beta)\dot{y}(t) + (k + \alpha)y(t) = \alpha y^o(t)$$
> Il polinomio caratteristico dipende da $\alpha$ e $\beta$, quindi possiamo **cambiare la natura delle soluzioni**


>[!esempio] di controllo in Anello chiuso
> variabile di controllo proporzionale all'errore $\to (y^o - y)$ (convenzione quello che voglio meno quello che ho)
> $$F = \alpha(y^o-y)\quad \alpha > 0$$
> otetengo
> $$y = \frac{F}{k_{n }+ \Delta k} \implies \frac{y^0-y}{y^o} = -\frac{k}{k + \alpha}$$
> 1. Anche se $k = k_{n}$ e quindi $\Delta k = 0$ ho $\neq 0$
> 2. Peró con $\alpha$ abbastanza grande posso permettermi un errore piccolo quanto voglio




>[!tldr]
>### Controllo in AA anello aperto
> Basato solo sul modello $k$, errore $e = y^o - y$ nullo se modello esatto $(Ak =0)$ non si puó contrastare l'incertezza
> 
> 
> ### Controllo in AC anello chiuso
> Basato su misure $(y^o - y)$, si puó avere $e \neq 0$ anche se modello esatto nonstante l'incertezza si puó vedere e rendere piccolo



