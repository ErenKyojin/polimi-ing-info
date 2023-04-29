# [[Funzioni]] trigonometriche

```desmos-graph
top = 2; bottom = -2; left = -3; right = 3
---
y^2 + x^2 -1 = 0
x=y|x>0| x<1
x = \frac{\sqrt{2}}{2}|dashed|y>0| y < 0.70
x = 1|dashed
y = \frac{\sqrt{2}}{2}|dashed|x>0| x < 0.7
x = 0| y < 0.7| y > 0|red
y = 0| x <0.7| x > 0|purple
(0.7,0)|purple|label: cos(θ)
(0,0.7)|red|label:sin(θ)
x = 1| y<1 | y >0 | #4D8939
(1,1)|#4D8939|label: tan(θ)
x^2+y^2 = 0.08| y < 0.2| y > 0 | x > 0 | magenta
(0.2,0.2)|magenta|label: θ
```

Seno e coseno sono le proiezioni sull'asse $x$ ed $y$ rispettivamente di un raggio della [[circonferenza unitaria]], e quindi possiamo definirli in funzione dell'angolo $\theta$:
$\sin(\theta)$ (periodo $\pi$)
$\cos(\theta)$ (periodo $pi$)

Possiamo poi definire la funzione tangente $\tan$ sempre di periodo $\pi$
$$\tan(\theta) = \frac{\sin(\theta)}{\cos(\theta)}$$ 



>[!graph] Grafico di seno e coseno
>```desmos-graph
>top = 4; bottom = -4; left = -7; right = 7;
>---
>\sin(x)
>\cos(x)
>(0,1)|#4D8939|label: cos(x)
>(0,0)|#395C84|label: sin(x)
>```

>[!graph] Tangente
>```desmos-graph
>left = -5; right = 5;
>top = 3; bottom = -3;
>---
>y = \tan(x)
>x = \pi/2 | dashed
>x = -\pi/2|dashed
>```


# Formule trigonometriche
- $\sin(2x) = 2\sin(x)\cos(x)$
- $\cos(2x) = 2\cos^2(x)-\sin^2(x)$
- $\cos\frac{x}{2} = \pm\sqrt{\frac{1+\cos x}{2}}$
- $\sin\frac{x}{2} = \pm\sqrt{\frac{1-\cos x}{2}}$
- $T = \tan\frac{x}{2} \rightarrow \sin x = \frac{2T}{1+t^2}$


# Funzioni inverse
>[!Graph] [[Funzione inversa]] del seno - arcoseno
>$$\arcsin(x)$$
>Dominio ristretto a $[-1;1]$ altrimenti non sarebbe più una funzione
>
>```desmos-graph
>top = 3; bottom = -3; left = -4; right = 4
>---
>y = \arcsin(x)
>(-1,0)|label|purple
>(1,0)|label|purple
>(0,\pi/2)|label|orange
>(0,-\pi/2)|label|orange
>```

>[!Graph] Funzione inversa del coseno - arcocoseno
>$$\arccos(x)$$
>Dominio ristretto a $[-1;1]$ altrimenti non sarebbe più una funzione
>```desmos-graph
>top = 5; bottom = -1; left = -4; right = 4
>---
>y = \arccos(x)
>(-1,0) | label| purple  
>(1,0) | label |purple 
>(0,\pi)| label | orange
>(0,0)| label | orange
>```
>