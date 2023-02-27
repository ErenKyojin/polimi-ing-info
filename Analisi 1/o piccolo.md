# O piccolo
>[!def]
>$$\lim \frac{a_n}{b_n} = 0\Rightarrow a_n = o(b_n)$$
>Questo significa che $a_n$ è trascurabile rispetto a $b_n$

## [[calcolo differenziale]]
Nel calcolo differenziale il simbolo di $o$ è utile per comparare due funzioni che tendono ad $x_0$

>[!def]
>Date due [[Funzioni|funzioni]] $f(x), g(x)$ definite in un [[intorno]] di $x_0$, si dice che
>$$f(x) = o(g(x)) \text{ per } x \to x_0$$
>Se
>$$\frac{f(x)}{g(x)}\to 0 \text{ per } x \to x_0$$
>Se $g(x)$ è un infinitesimo dire che $f(x) = o(g(x))$ significa che $f(x)$ è un [[infinito|infinitesimo]] di ordine superiore rispetto a $g(x)$
>
>>[!esempio]
>>$f(x) = x^2, g(x) = x$
>>		$\Rightarrow f(x) = o(g(x))$ per $x \to 0$

### Relazione tra o piccolo e [[asintotico]]
>[!teorema]
>$$\text{Per } x\to x_0, f(x)\sim g(x) \text{ se e solo se } f(x) = g(x) + o(g(x))$$

Questo teorema ci permette di rivedere tutti i [[limiti notevoli]].

## Proprietà di o piccolo
Quando si opera su [[formule di Taylor-MacLaurin|sviluppi di Taylor-MacLaurin] con resto secondo Peano ci si ritrova a coinvolgere nei calcoli $o(x^n)$,
Ricordando che
$$f(x) = o(g(x))\text{ per }x\to x_0\text{ se }\lim_{x\to x_0}\frac{f(x)}{g(x)}=0$$

$o()$ detonata quindi qualsiasi funzione abbia la proprietà espressa dalla definizione one, quindi ha un comportamento particolare in molti casi:
- $o(x)-o(x) = o(x)\Longrightarrow$  non fa zero
- $o(-3x^2) = o(x^2)$ oppure $-o(x) = o(x)\Longrightarrow$ i coefficienti sono irrilevanti 
- per $x\to0, o(x) + o(x^2) = o(x)$ Quello di grado minore ingloba gli altri, essendo il più rilevante
- Per $x\to+\infty,$ $o(x) + o(x^2) = o(x^2)$  

Per somme e prodotti invece 
$$f \cdot o(g) = o(f\cdot g)$$
>[!esempio]
>$$xo(x^2) = o(x^3)\qquad\frac{o(x^3)}{x}=o(x^2)\qquad\frac{o(x^2)}{x^2} = o(1)$$
>Ed anche
>$$o(x)o(x^2)=o(x^3)$$


