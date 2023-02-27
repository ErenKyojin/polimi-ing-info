# test di monotonia
Pensando al significato geometrico di derivata, è immediato che se una funzione derivabile è crescente o decrescente in un intervallo $(a,b)$ la sua derivata è $\geq 0$ o $\leq 0$ rispettivamente. Grazie al [[Teorema del valor medio|teorema di Lagrange]] possiamo dimostrare il viceversa

>[!teorema] Test di monotonia
>Sia $f : (a,b) \longrightarrow\mathbb R$ derivabile, allora
>$$\begin{align}
>&f \text{ crescente } &&\Longleftrightarrow\quad f'(x) \geq 0 \\
>&f \text{ decrescente } &&\Longleftrightarrow\quad f'(x) \leq 0
>\end{align}
>$$
>
>>[!dim]
>>Considerata $f : (a,b)\to\mathbb R$ e due punti qualunque $x, z\in(a,b)$
>>$$f \text{ è }
>>\begin{array}d
>>\text{crescente}\\ 
>>\text{decrescente}
>>\end{array}
>>\Longleftrightarrow
>>
>>\frac{f(z) - f(x)}{z-x}\qquad\text{è}\qquad
>>\begin{array}f
>> \geq 0 \\ \leq 0
>>\end{array}$$
>>Passando al limite per $z\to x$ per il [[teorema della permanenza del segno]] si ottiene:
>>$$\begin{align}
>>&f\ \text{crescente} &\Longrightarrow f'(x)\geq 0 \\
>>&f\ \text{decrescente} &\Longrightarrow f'(X)\leq 0
>>\end{align}\qquad\forall x \in (a,b)$$
>>Viceversa, ad esempio, $f'(x)\geq 0$ per ogni $x \in (a,b)$ e proviamo che allora $f$ è crescente in $(a,b)$. Prendiamo dunque due punti qualsiasi $x_1,x_2\in(a,b),x_1 < x_2$ e mostriamo che $f(x_1) \leq f(x_2).$ Applicando il teorema di Lagrange ad $f$ sull'intervallo $[x_1,x_2]$ abbiamo che esiste $c \in (x_1,x_2)$ tale che:
>>$$\frac{f(x_2)-f(x_1)}{x_2 - x_1} = f'(c)$$
>>Poichè $f'(c) \geq 0$ e $x_2 - x_1 > 0$, ne segue $f(x_2)-f(x_1)\geq 0$, cioè la tesi.
>>
>>Analogamente dimostriamo che se $f'(x) = 0$ per ogni $x\in(a,b)$ allora $f$ è costante in $(a,b)$; l'implicazione opposta, ossia che se $f$ è costante la derivata è nulla, è ovvia.

Sia $f : (a,b)\to\mathbb R$ allora
$$f' = 0 \text{ in } (a,b)\Leftrightarrow f\text{ è costante in }(a,b)$$


