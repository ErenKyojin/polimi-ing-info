Antitrasformazione di laplace secondo Heaviside
Il metodo si applica a trasformate di Laplace razionali fratte, cioè
$$
V(s) = \frac{N(s)}{D(s)}
$$
$N,D$ polinomio in $s$

Idea: scomponiamo $V(s)$ #todo 

$$V(S) = \frac{s+2}{s(s+1)(s+3)}\qquad v(t)?$$
1. Scrivo $v(s) = \frac{\alpha}{s } + \frac{\beta}{s+1} + \frac{\gamma}{s + 3}$
2. Facio denominatore comune, eguaglio numeratori
   $\alpha(s+1)(s+3) + \beta s(s+3) + \gamma s(s+1) = s+2$
3. Valuto nelle radici del denominatore.
  - $s = 0 \implies 3\alpha = 2 \implies \alpha = \frac{3}{2}$
  - $s = -1 \implies -2\beta = 1 \implies \beta = -\frac{1}{2}$ 
  - $s = -3 \implies 6\gamma = -1 \implies \gamma = -\frac{1}{6}$
4. $v(s) = \frac{3}{2s} -\frac{1}{2(s+1)} -\frac{1}{6(s+3)}$
