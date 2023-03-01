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

> [!esempio]
> 
> $$
> V(s) = \frac{2}{(s-1)^2(s+2)}\quad v(t)?
> $$
> $$
> V(s) = \frac{\alpha}{(s-1)} + \frac{\beta}{(s-1)^2} + \frac{\gamma}{(s+2)}
> $$
> $\alpha(s-1)(s+2)+\beta(s+2)+\gamma(s+1)^2 = 2$
> 
> $s = 1 \implies \beta(1 + 2)=2 \implies \beta = \frac{2}{3}$
> $s=2 \implies \gamma(-2-1)^2 = 2 \implies \gamma = \frac{2}{9}$
> $s = 0 \text{ a caso, finiti i fattori}\implies \begin{cases}s=0\\ \beta=\frac{2}{3}\\\gamma=\frac{2}{9}\end{cases} \implies \alpha =-\frac{2}{9}$
> $$
> \begin{align}
> 
> V(s) = &-\frac{\frac{2}{9}}{s-1} + &&\frac{\frac{2}{3}}{(s-1)^2} + &\frac{\frac{2}{9}}{(s+2)} \\
> & &&\mathcal{L}^-1 \\
> \bigg(&-\frac{2}{9}e^t + &&\frac{2}{3}te^t + &\frac{2}{4}e^{-2t}\bigg)\text{sca}(t)
> \end{align}$$

> [!esempio]
> ```tikz
> \begin{document}
> \begin{tikzpicture}
> \draw[->] (0,0) -- (0,2)node[left]{$v(t)$};
> \draw[->] (-1,0)-- (4,0)node[below right]{t};
> \draw[red](-1,0) -- (0,0);
> \draw[red] (0,0) -- (0,1);
> \draw[red] (0,1) -- (1,1.5);
> \draw[red] (1,1.5) -- (1,0);
> \draw[red] (1,0) -- (4,0);
> \node[below] at (0,0){$0$};
> \node[below] at (.5,0){$1$};
> \node[below] at (1,0){$2$};
> \node[left] at (0,1){$2$};
> \node[left] at (0,1.5){$3$};
> \end{tikzpicture}
> \end{document}
> ```
> Esprimo $v(t)$ come somma di scalini, rampe, parabole, cioè segnali **canonici** (= con trasformata di Laplace del tipo $\frac{k}{s^n}$ ) eventualmente ritardati.
> 
> Inizialmente scalino piu rampa, poi sottraiamo scalino e rampa per farlo tornare a 0, essendo nulli i segnali prima di t = 0, possiamo spostarli $v(t) =2sca(t) + 0.5 ram(t) -3sca(t-2) -0.5ram(t-2)$
> 
> $$V(s) = \frac{2}{s} + \frac{0.5}{s^2} - \frac{3}{2}e^{-2s} - \frac{0}{5}s^2e^{-2s}$$