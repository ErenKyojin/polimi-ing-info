Linearizzazione di un sdnl [[SISO]], TC, nell'interno di un equilibrio

Consideriamo un SD NL (TI)
$$
S:\begin{cases}
\dot{x} = f(x,u) \\
y = g(x,u)
\end{cases}
$$
ed un suo equilibrio $(\bar{u},\bar{x},\bar{y})$

Vogliamo determinare un sistema lineare che approssima il comportamento di $S$ nell'intorno dell'equilibrio fintanto che $u(t), x(t), y(t)$ non si discostano troppo da $\bar{u},\bar{x},\bar{y}$ rispettivamente

Consideriamo l'equazione di stato, e sviluppiamola in serie fermandoci al primo ordine:
$$
f(\bar{x} + \delta x, \bar{u} + \delta u) = \cancel{ f(\bar{x},\bar{u}) } + \underbrace{ f_{x} }_{ \frac{\delta f}{\delta x}  }\bigg|_{\bar{x},\bar{u}} \delta x + f_{u}\bigg|_{\bar{x},\bar{u}}\delta u
$$
Con i $\delta$ variazioni di $x$ e $u$ rispetto all'equilibrio, $f(\bar{x}, \bar{u}) = 0$ perchè $\bar{x}$ è stato di equilibrio (lo abbiamo appositamente cercato)

$$
\dot{x}=\frac{d}{dt} (\bar{x} + \delta x) = \frac{d}{dt} \delta x = \dot{\delta x}\qquad \bar{x}\text{ costante} 
$$
Quindi $\dot{\delta x} = f_{x} \bigg|_{\bar{x},\bar{u}} \delta x + f_{u}\bigg|_{\bar{x},\bar{u}}\delta u$ equazione di stato del sistema linearizzato alle variazioni

Consideriamo l'equazione di uscita e operiamo allo stesso modo
 $$
\underbrace{ g(\bar{x} + \delta x, \bar{u} + \delta u) }_{ y } = \underbrace{ g(\bar{x}, \bar{u}) }_{ \bar{y} } + g_{x}\bigg|_{\bar{x},\bar{u}} + g_{u}\bigg|_{\bar{x},\bar{u}} \delta u
$$
$y - \bar{y}= \delta y =  g_{x}\bigg|_{\bar{x},\bar{u}} + g_{u}\bigg|_{\bar{x},\bar{u}} \delta u$



>[!conclusione]
>Dato il sistema dinamico NL $S : \begin{cases}\dot{x} = f(x,u) \\ y = g(x,u)\end{cases}$ con equilibrio $(\bar{u},\bar{x},\bar{y})$ il sistema linearizzato nell'intorno di quell'equilibrio è
> $$ S^\delta : \begin{cases}
> \delta_{x} = \underbrace{ f_{x} }_{ \frac{\delta f}{\delta x}  }\bigg|_{\bar{x},\bar{u}} \delta x + f_{u}\bigg|_{\bar{x},\bar{u}}\delta u\\
>\delta_{y} = g_{x}\bigg|_{\bar{x},\bar{u}} + g_{u}\bigg|_{\bar{x},\bar{u}} \delta u
>\end{cases}$$

Con $\delta u = u - \bar{u}, \delta x = x - \bar{x}, \delta y = y - \bar{y}$


>[!oss] Interpretazione 
>
> 
> 
> ```mermaid
> flowchart LR
> 	U((u)) --> S --> Y((y))
> ```
> Linearizzazione nell'intorno dell'equazione $(\bar{u},\bar{x},\bar{y})$
> 
> ```mermaid
> graph LR
> 	u --> u' 
> 	y' -->  y
> 	subgraph LIN
> 	u' --> S --> y'
> 	end
>```