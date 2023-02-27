# differenziale
$\newcommand{\d}{\mathrm d}$
	L'incremento della tangente ad una funzione in un punto $x_0$ rispetto a $x_0 + dx$ con $dx \ll 0$, il differenziale di $f$ in $x_0$ si indica col simbolo $$\fbox{$\d f(x_0) = f'(x_0)\d x$}$$
>[!esempio]
>![[72992E10-1613-4DA5-9BF5-1E2937A93B76.jpeg]]


Qual è l'errore commesso nell' approssimazione? Ossia cosa si può dire sulla differenza tra $\Delta f$ E $\mathrm df(x_0)$?
Partiamo dalla definizione di [[derivata]], ossia
$$\lim_{\d x\to0}\frac{f(x_0+\d x)-f(x_0)}{\d x} = f'(x_0)$$
Possiamo quindi scrivere
$$\frac{f(x_0+\d x)-f(x_0)}{\d x} = f'(x_0) + \varepsilon(\d x)$$
Dove $\varepsilon(\d x)$ indica una quantità che tende a $0$ se $\d x \to 0$, cioè un [[infinito|infinitesimo]] per $\d x \to 0$.
Moltiplicando per $\d x$ otteniamo infine:
$$f(x_0+\d x)-f(x_0) = f'(x_0)\d x + \d x \cdot\varepsilon(\d x)$$
Da cui ricaviamo:
$$\Delta f - \d f(x_0) = \d x\cdot\varepsilon(\d x)$$
Dove $\d x\cdot\varepsilon (\d x)$ è una quantità che divisa per $\d x$ tende a $0$, quindi $\d x\cdot\varepsilon (\d x)$ è un infinitesimo di ordine superiore rispetto a $\d x$. Per descrivere questa situazione, riutilizziamo un simbolo già incontrato:
[[o piccolo].

Con questa scrittura possiamo riformulare:
$$f(x_0+\d x)-f(x_0) = f'(x_0)\d x + o(\d x)\quad\text{ per } \d x \to 0\tag{diff1}$$
alternativamente
$$\Delta f(x_0) = \d f(x_0) + o(\d x)\quad\text{ per } \d x\to0$$
$(\text{diff1})$ descrive un'approssimazione di $\Delta f$ al primo ordine, si scrive anche
$$\Delta f \approx \d f \text{ al primo ordine, vicino a }x_0$$
## calcolo dei differenziali
Analogo al [[calcolo delle derivate]]

$$\fbox{$\begin{flalign}
&\d (f\pm g) = \d f\pm \d g \\
&\d (f \cdot g) = g\d f +f \d g \\
&\d\left(\frac{f}g\right) =\frac{g\d f - f\d g}{g^2}
\end{flalign} $}$$