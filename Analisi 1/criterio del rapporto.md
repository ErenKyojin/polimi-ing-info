# Criterio del rapporto per le [[successione]]
>[!teorema]
>Data $a_n$ successione positiva ($a_n>0 \forall n$)
>$$\lim_{n\to\infty}\frac{a_n}{a_{n+1}}=l$$
>Se $l > 1\quad\Rightarrow\quad a_n \to\infty$
>Se $l < 1\quad\Rightarrow\quad a_n \to 0$ 
>
>Questo teorema ci permette di trasferire la successione di studio da $a_n$ alla successione del rapporto di $\frac{a_n}{a_n+1}$ che può essere più semplice da analizzare
>
>>[!dim]
>>Supponiamo che
>>$$\frac{a_n+1}{a_n}\to l < 1$$
>>fissato un $\varepsilon > 0$ tale che $l+\varepsilon < 1$, allora definitivamente (ossia per ogni $n > n_0$ con $n_0$ valore opportuno) si ha che $$\frac{a_n+1}{a_n}<l + \varepsilon$$
>>Da cui possiamo ricavare la seguente catena di diseguaglianze:
>>$$\begin{flalign}
>>a_{n_0 + 1} < &a_{n_0}(l+\varepsilon)\\
>>a_{n_0 + 2} < a_{n_0+1}(l+\varepsilon) < &a_{n_0}(l+\varepsilon)^2\\
>>&...\\
>>a_{n_0 + k} < &a_{n_0}(l+\varepsilon)^k
>>\end{flalign}$$
>>Essendo $l + \varepsilon < 1$ allora $\lim_{n\to\infty}(l+\varepsilon)^n \to 0$ e quindi $a_n \to 0$
>>
>>
>>Supponiamo ora che $$\frac{a_n+1}{a_n}\to l > 1$$
>>Scegliamo analogamente un $\varepsilon>0$ abbiamo definitivamente $\frac{a_n+1}{a_n} > l -\varepsilon$
>>inoltre scegliamo $\varepsilon$ abbastanza piccolo per avere $l - \varepsilon > 1$
>>analogamente a prima otteniamo
>>$$a_{n_0+k} > a_{n_0}(l-\varepsilon)^k$$  
>>ed essendo il $\lim(l-\varepsilon)^k = +\infty$ e dovendo la successione essere maggiore, $\lim a_n = +\infty$



# criterio del rapporto per le [[serie]]
Sia $\sum a_n$ una serie a termini positivi. Se esiste il limite
$$\lim_{n\to+\infty}\frac{a_{n+1}}{a_n}=l$$
e $l>1$ la serie diverge, se $l<1$ la serie converge, se $l = 1$ nulla si può dire

>[!esempio]
>$\sum \frac{1}{n!}$:
>$$\lim_{n\to+\infty}\frac{1/(n+1)!}{1/n!} = lim_{n\to+\infty}\frac{1}{n+1}=0$$
>Quindi la serie converge

>[!dim]
>Supponiamo che sia:
>$$\lim_{n\to+\infty}\frac{a_n+1}{a_n}= l < 1$$
>Poichè $\frac{a_n+1}{a_n}\to l$, allora fissato un $\varepsilon > 0$ definitivamente $\frac{a_n+1}{a_n} < l +\varepsilon/2$, essendo poi $l < 1$ e anche $l < 1 - \varepsilon$ per un opportuno $\varepsilon > 0$.
>Preso questo valore di $\varepsilon$ si ha, definitivamente
>$$\frac{a_n + 1}{a_n} \leq l + \frac{\varepsilon}{2}<(1-\varepsilon) + \frac{\varepsilon}{2} = 1 - \frac{\varepsilon}{2}$$
>Quindi ragionando iterativamente:
>$$a_{n+1} < \left(1 - \frac{\varepsilon}{2}\right)a_n < \left(1 - \frac{\varepsilon}{2}\right)\left(1 - \frac{\varepsilon}{2}\right)a_{n-1} < \ldots <  \left(1-\frac{\varepsilon}{2}\right)^n a_1$$
 per il [[criterio del confronto]] con la [[serie notevoli|serie geometrica]] convergente $\sum_{n=1}^\infty\left(1-\frac{\varepsilon}{2}\right)a_1$, la serie di partenza converge
>
>Consideriamo ora
>$$\lim_{n\to+\infty}\frac{a_n+1}{a_n} = l > 1$$
>Con un ragionamento simile si deduce che
>$$a_{n+1}>\left(1+\frac{\varepsilon}{2}\right)^n a_1$$ definitivamente, per un certo valore di $\varepsilon > 0$. Quindi  $a_n \to +\infty$ e la serie diverge

