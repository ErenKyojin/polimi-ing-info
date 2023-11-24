---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---


## Per le isobare
>[!legge] Legge di Gay-Lussac per le [[trasformazione isobara|isobare]]
>Se in un [[gas]] si mantiene la pressione costante allora il volume del gas è linearmente proporzionale alla temperatura
>$$ V = V_{0}(1 + \beta T)  $$
>Con $V_{0}$ voluem a $0^o C$ e T espressa in [[celsius]]
>in condizioni ideali $\alpha = \beta$ è una costante uguale per tutti i gas perfetti


```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex](0,0) to (4,0) node[right]{V};
\draw[-latex](0,0) to (0,3) node[left]{p};
\draw (0.5,1) to (2.5,1);
\end{tikzpicture}
\end{document}
```

## Per le isocore

>[!legge] Legge di Gay-Lussac per le [[trasformazione isocora|isocore]]
>Se in un [[gas]] si mantiene la pressione costante allora la pressione del gas è linearmente proporzionale alla temperatura
>$$ p = p_{0} (1 + \alpha T) $$
>Con $p_{0}$ pressione a $0^o C$ e T espressa in [[celsius]]
>in condizioni ideali $\alpha = \beta$ è una costante uguale per tutti i gas perfetti

```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex](0,0) to (4,0) node[right]{V};
\draw[-latex](0,0) to (0,3) node[left]{p};
\draw (1,0.5) to (1,2.5);
\end{tikzpicture}
\end{document}
```

# Per i gas ideali
Avremo 
$$ \alpha = \beta = \frac{1}{273,15} \ ^o C^{-1} $$
Possiamo scrivere
$$ \begin{align}
&V = V_{0}(1 + \beta T_{^oC}) = V_{0}\beta\left( \frac{1}{\beta} + T_{^o C}  \right) = V_{0} \beta T \\
&p = p_{0}(1 + \beta T_{^o C}) = p_{o}\beta\left( \frac{1}{\beta} +T_{^o C} \right)
\end{align} $$