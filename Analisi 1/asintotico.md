# Equivalenza asintotica
#TODO successioni

# Funzioni
>[!def]
>Si dice che due [[funzioni]] $f,g$ sono asintotiche per $x\to c$ se
>$$\lim_{x\to c}\frac{f(x)}{g(x)} = 1$$
>E si scrive $f\sim g$ per $x \to c$

I [[limiti notevoli]] visti in precedenza si possono quindi riscrivere così
$$
\begin{flalign}
\sin x &\sim x\quad,\quad1 - \cos x \sim \frac{1}{2}x^2\quad,\quad e^x - 1 \sim x \\
&\log(1+x)\sim x\quad,\quad (1+x)^\alpha -1 \sim\alpha x\tag{Asin1}\\
&\qquad\qquad\qquad\text{per }x\to 0

\end{flalign}
$$

$(\text{Asin1})$ si esprimono dicendo ad esempio che $\sin x, e^x-1, \log(1+x)$ si comportano come $x$ in prima approssimazione o al primo ordine come $x$, per $x\to0$
Inoltre si possono generalizzare. Se $\varepsilon(x)$ è una funzione che tende a zero, ossia un [[infinito|infinitesimo]] si può scrivere:

$$
\boxed{
\begin{array}{clr}
&\sin \varepsilon(x) \sim \varepsilon(x) \\
&1 -\cos \varepsilon(x) \sim \frac{1}{2}\varepsilon(x)^2 \\
&e^{\varepsilon(x)}- 1 \sim \varepsilon(x)\\
&\log(1+\varepsilon(x))\sim \varepsilon (x) \\
&(1 + \varepsilon(x))^\alpha - 1 \sim \alpha\varepsilon(x)


\end{array}\qquad \varepsilon \to 0
} \tag{asin2}
$$

### Gerarchia degli [[infinito|infiniti]]
>[!teorema]
>Consideriamo le tre famiglie di funzioni
>$$(\log_a x)^\alpha\qquad x^b\qquad b^x\quad\text{con } \alpha,\beta > 0, a,b>1  $$
>Allora, per $x \to +\infty$, ognuna è un infinito di ordine maggiore della precedente (sx $\to$ dx). Esplicitamente:
>$$\lim_{x\to+\infty}\frac{(\log_a x)^\alpha}{x^B} = 0\qquad \lim_{x\to+\infty}\frac{x^\beta}{b^x} = 0\tag{asin3}$$
>Il che si può esprimere a parole dicendo che:
>Qualunque potenza positiva di $x$ prevale su qualsiasi potenza di $\log x$, e qualunque esponenziale con base $> 1$ di $x$ prevale su qualunque potenza di $x$.
>

Inoltre ponendo $y = \frac{1}{x}$ nel primo limite in $(\text{asin2})$ Si trova
$$\fbox{$\lim_{y\to0^+}y^\beta(-\log y)^\alpha = 0$}\quad (\beta > 0, \forall \alpha)$$

## Stime asintotiche e grafici
Le stime asintotiche non sono utili solo a calcolare limiti, ma anche per tracciare grafici **qualitativi** generali o attorno ad un ceto punto

>[!esempio]
>$$f(x) = \sqrt[3]{x} + x^2$$
>Osserviamo che la funzione è definita e continua in $\mathbb R$, per $x \to \infty, f(x) \sim x^2$, quindi $f(x) \to +\infty$. La funzione si annulla invece in $x = 0$ e per $x \to 0, f(x) \sim \sqrt[3]{x}$, in particolare tangente verticale nell'origine.

```desmos-graph
y = x^{\frac{1}{3}} + x^2

```

>[!oss]
>Spesso l'andamento di una funzione intorno ad un punto si può prevedere con un'opportuna stima asintotica

### Crescita di una funzione all'[[infinito]]
Supponiamo di voler tracciare il grafico di una [[funzione]] $f$ che, per $x\to+\infty$ (o $-\infty$) tende a $+\infty$ (o $-\infty$)
Vogliamo descrivere la velocità con cui la funzione $f$ tende all'infinito, diremo che, per $x \to +\infty$

$$f \text{ ha crescita} \begin{cases}\text{sopralineare} \\
\text{lineare} \\
\text{sottolineare}
\end{cases}
\quad\text{se}\quad \lim_{x\to+\infty}\frac{f(x)}{x} =
\begin{cases}
\pm \infty \\
m\ (\text{finito e } \neq0) \\
0
\end{cases}
$$
Solo nel caso di crescita lineare è possibile avere [[Asintoti|asintoto obliquo]]

