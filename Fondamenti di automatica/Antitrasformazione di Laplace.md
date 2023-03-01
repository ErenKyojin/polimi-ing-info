Antitrasformazione di laplace secondo Heaviside
Il metodo si applica a trasformate di Laplace razionali fratte, cioè
$$
V(s) = \frac{N(s)}{D(s)}
$$
$N,D$ polinomio in $s$

Idea: scomponiamo $V(s)$ #todo 

> [!esempio]
> 
> $$V(S) = \frac{s+2}{s(s+1)(s+3)}\qquad v(t)?$$
> 1. Scrivo $v(s) = \frac{\alpha}{s } + \frac{\beta}{s+1} + \frac{\gamma}{s + 3}$
> 2. Facio denominatore comune, eguaglio numeratori
>    $\alpha(s+1)(s+3) + \beta s(s+3) + \gamma s(s+1) = s+2$
> 3. Valuto nelle radici del denominatore.
>   - $s = 0 \implies 3\alpha = 2 \implies \alpha = \frac{3}{2}$
>   - $s = -1 \implies -2\beta = 1 \implies \beta = -\frac{1}{2}$ 
>   - $s = -3 \implies 6\gamma = -1 \implies \gamma = -\frac{1}{6}$
> 4. $v(s) = \frac{3}{2s} -\frac{1}{2(s+1)} -\frac{1}{6(s+3)} \implies \frac{2}{3} \text{sca}(t) -\frac{1}{2}e^{-t}\text{sca}(t) - \frac{1}{6}e^{-3t}\text{sca}(t)$ 
>    quindi $v(t) = (\frac{2}{3}-\frac{1}{2}e^-t -\frac{1}{6}e^{-3t})\text{sca}(t)$


Generalizziamo
$V(s) = \frac{N(s)}{D(s)}$, $N,D$ polinomi in $S$, 
radici di $N(s)$ sono zero della [[trasformata di laplace]]
radici di $D(s)$ sono poli della trasformata di Laplace

- Si fattorizza $D(s)$ che risulterà cosí espresso come prodotto di termini del tipo 
	- $s - p$ per ogni polo $\mathbb{R}$ semplice
	- $(s-p)^m$ per ogni polo multiplo
	- piú casi in $\mathbb{C}$
- Diversi casi: 
	- Polo $\mathbb{R}$ semplice, se $$v(s) = \frac{N(s)}{\dots (s-p)\dots} = \dots + \frac{\alpha}{(s-p)} +$$
	- Polo $\mathbb{R}$ multiplo, se $$V(s) = \frac{N(s)}{\dots(s-p)^m\dots}= \dots + \frac{\alpha_{1}}{s-p}+\frac{\alpha_{2}}{(s-p)^2}+\dots+\frac{\alpha_{m}}{(s-p)^m} + \dots$$
	- I casi complessi non li trattiamo
- Si antitrasformano gli addendi e si somma

