---
aliases: teorema di Lagrange
---
## Teorema del valor medio
Pensiamo di fare un viaggio da $A$ a $B$, distanti tra loro $200 \text{km}$, ci impieghiamo esattamente due ore in un viaggio senza fermate, abbiamo viaggiato con una velocità media di $100 \text{km/h}$ e possiamo affermare con certezza che in un qualche istante la velocità sarà stata di $100 \text{km/h}$

>[!teorema]  #Teorema del valor medio o di lagrange
>Sia $f$ derivabile in $(a,b)$ e continua in $[a,b]$. Allora
>$$\fbox{$\text{esiste }c \in (a,b)\quad\text{tale che}\quad\frac{f(b)-f(a)}{b-a} = f'(c)$}$$
>
>>[!esempio]
>>![[FD9C7F18-AC1B-4439-87FC-0CAB69817274.jpeg]]
>>Significato grafico del teorema,
>>- $\dfrac{f(b)-f(a)}{b-a} =$ pendenza della retta $AB$ 
>>- $f'(c) =$ pendenza della retta tangente al grafico di $f$ nel unto $c, f(c)$
>>
>>Nel grafico In figura esistono due punti, $c_1,c_2$ la cui tangente $f'(c)$ è parallela ad $AB$
>
>
>>[!dim]
>Osserviamo che la rettta $AB$ ha equazione
>$$y = f(a)+\frac{f(b)-f(a)}{b-a}(x-a)$$
>E consideriamo la funzione
>$$w(x) = f(x) - \left[f(a) + \frac{f(b)-f(a)}{b-a}(x-a)\right]$$
> È semplice verificare che $w(a) = w(b) = 0$, $w$ è continua in $[a,b]$ e $w$ è derivabile in $(a,b)$, infatti:
> $$w'(x) = f'(x) - \frac{f(b)-f(a)}{b-a}$$
> Noi vogliamo dimostrare che esiste $c \in (a,b)$ tale che $w'(c) = 0$.
> Essendo $w$ continua in $[a,b]$, per il [[Teorema di Weierstrass]] esistono due punti $x_1$ e $x_2$ in $[a,b]$ tali che:
>> $$\begin{flalign}
>> w(x_1) = \text{massimo di $w$ in $[a,b] = M$}\\
>> w(x_2) = \text{minimo di $w$ in $[a,b] = m$}
>> \end{flalign}$$
>> Se $m = M, w(x)$ è costante in $[a,b]$ e quindi $w'(x) = 0 \forall x \in [a,b]$
>> Se $M > m$, almeno uno dei due punti $x_1,x_2$ non si trova agli estremi dell'intervallo, essendo $w(a) = w(b) = 0$.
>> Il teorema di Fermat implica allora che nel punto di massimo o minimo che risultato interno la derivata di $w$ si annulla ed il teorema è così dimostrato

Conseguenza del valor medio è il [[test di monotonia]]
