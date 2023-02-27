# Funzioni notevoli

# $y = x^\alpha$

>[!graph]- $\alpha = 2$, parabola
>```desmos-graph
>y=x^2
>```

>[!graph]- $\alpha = 3$
>```desmos-graph
>	y=x^3
>```

>[!graph]- $\alpha = -1$
>```desmos-graph
>y=x^{-1}
>```

>[!graph]- $\alpha = \frac{1}2$
>```desmos-graph
>y = x^{1/2}
>``` 

E in generale:
>[!graph]- $\alpha > 0$
>```desmos-graph
>left= -1
>---
>	y = x
>	(5,5)| label: α = 1| #285680
>	y = x^4| #28803C
>	(1.4,4) | label: α > 1|#28803C
>	y = x^{1/2}|#802828
>	(4,2)|label: 0< α < 1|#802828
>	(1,1)|open|label: tutti passano per (1,1)|#000000
>```

>[!graph]- $\alpha < 0$
>```desmos-graph
>left = -1; right = 5;
>top = 5; bottom = -5;
>---
>x^{-1}
>(5,0.2) | #285680|label: α = -1
>x^{-8}
>(0.8,5) | #28803C|label: α < -1
>x^{-0.2}
>(3,0.8)|#583064|label:-1 < α < 0
>(1,1) | #000000|label: (1,1)|open
>```

Inoltre se $\alpha = \frac mn \in \mathbb Q \Longrightarrow x^\frac{m}{n} = \sqrt[n]{x^m}$

E in questo caso possiamo vedere se abbiamo a che fare con funzioni simmetriche immediatamente secondo la seguente tabella:

$f$|m dispari | m pari|
--- | --- | ---
n dispari  | [[dispari]] | [[pari]]
n pari | /%%non esiste%%| pari|




# Esponenziali $y = a^x$
>[!Graph] Esponenziali
>```desmos-graph
>bottom = -1; left = -5; right = 5;
>---
>y=1
>y= e^x|
>y = (1/e)^x
>(1,e) | #4D8939 | label: a > 1
>(-1,e)|#583064 | label: 0<a<1
>(2,1)| #395C84 | label: a = 1
>(0,1)| open |label 
>
>```

$y = e^x$ esponenziale fondamentale
Inoltre $y = f(x) = a^x\Longrightarrow\qquad\qquad\exists \text{ sempre}\quad x = f^{-1}(y) = \log_ay \Leftrightarrow a > 0, a \neq 1$ 

# [[Logaritmo|Logaritmi]]
$y = \log_a (x)$
$\ln(x) = \log_e(x)$
```desmos-graph
left = -2
---
\ln(x)
\log_{0.5}(x)
(e,1)|#395C84|label: a > 1
(5,-2.33)|#4D8939|label: 0 < a < 1
```

# [[Funzioni triogonometriche]]

# Altre funzioni

>[!Graph]- Parte intera di $x$
>$\lfloor x \rfloor := \max{k \in \mathbb Z | k \leq x}$
>Ossia il numero intero minore ad $x$ maggiore.
>```desmos-graph
>y = \floor(x)
>```

>[!graph]- Mantissa di $x$
>$\text{mant}(x) = x - \lfloor x \rfloor$
>```desmos-graph
>top = 2; bottom = -2; left = -3; right = 3
>---
>y = x - \floor(x)
>```

>[!Graph]- Segno di $x$
>$$y=\text{sgn}(x) = \begin{cases}1\qquad x>0 \\-1\qquad x < 0\end{cases}$$
>```desmos-graph
>top = 3; bottom = -3; left = -4; right = 4;
>---
>y = 1 | x > 0 |purple
>y = -1 | x < 0|purple
>```

>[!Graph]- Funzione di Heaviside
>$y = H(x) = \begin{cases}1\qquad x \geq 0 \\
>0\qquad x<0 \end{cases}$
>```desmos-graph
>top = 2; bottom = -2; left = -3; right = 3
>---
>y = 1 | x > 0 | purple 
>y = 0 | x < 0 | purple
>```

>[!Graph]- Funzione di Dirichlet
>$$f(x) = \begin{cases}1 \qquad x\in \mathbb Q \\
>0\qquad x\notin \mathbb Q\end{cases}$$
>Non è rappresentabile completamente, anche se sembrano essere due rette parallele
>```desmos-graph
>top = 2; bottom = -2; left = -3; right = 3; 
>---
>y = 1 | purple
>y = 0 | purple
>```

# [[Funzioni iperboliche]]
>[!Graph] Seno iperbolico
>$$\sinh(x) = \text{sh}(x) = \frac{e^x-e^{-x}}{2}$$
>Funzione [[dispari]] che condivide molte proprietà del seno
>```desmos-graph
>y = \sinh(x)
>```

>[!Graph] Coseno iperbolico
>$$\cosh(x)=\text{Ch}(x) = \frac{e^x+e^{-x}}{2}$$
>Funzione [[dispari]] che condivide molte proprietà del coseno
>```desmos-graph
>y = \cosh(x)
>```

>[!oss] 
>Il coseno iperbolico è detto anche catenaria, in quanto un filo appeso a due vincoli assumerà la forma del coseno iperbolico