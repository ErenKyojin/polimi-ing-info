---
aliases: 
creation date: 2023-04-10 11:59
modification date: 2023-04-10 11:59
---

## Momento di un vettore
Dati un vettore applicato $\vec{a}$ ed un punto $O$, detto polo, si dice momento $\vec{M}$ di $\vec{a}$ rispetto ad $O$ il vettore
$$
\vec{M}_{O} = \vec{r} \times \vec{a}
$$
dove $\vec{r}$ è il vettore che va da $O$ al punto di applicazione di $\vec{a}$. Come conseguenza della definizione, il momento è ortogonale al [[piano]] individuato da $\vec{a}$ e da $O$ ed ha per [[Modulo]] $M_{O} = r \cdot a \cdot \sin \alpha = d \cdot a$ dove $\alpha$ è l'angolo compreso tra $\vec{r}$ e $\vec{a}$, $d$ è la distanza della retta di applicazione di $\vec{a}$ dal polo $O$.

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw (-1,0) -- (5,0);
\draw[-{Stealth},thick] (0,0) node(O){} -- (0,2) node[right]{$\vec{M}$};
\node[above left] at (O){$O$};
\draw[-{Stealth},thick] (O.center) -- ++ (2,0) node(r){} node[midway,above]{$\vec{r}$};
\draw[-{Stealth},thick] (r.center)  -- ++ (2,1.5)node[midway,above left]{$\vec{a}$};
\draw (2.75,0) arc (0:40:.75) node[below right]{$\alpha$};
\draw (r.center) -- ++ (2.5,1.875);
\draw (r.center) -- ++ (-2.5,-1.875);
\begin{scope}[rotate = 35]
\draw (O.center) -- ++ (0,-1.5);
\end{scope}


\end{tikzpicture}
\end{document}
```

>[!oss]
>Se trasliamo il vettore applicato $\vec{a}$ lungo la sua [[retta]] di applicazione, il momento rispeto allo stesso polo $O$ non cambia:
>$$\begin{align}
> &\vec{M}_{O}' = \vec{r}_{2} \times \vec{a} = (\vec{r}_{1} + \vec{r}_{12}) \times \vec{a} = \\
> &= \vec{r}_{1} \times \vec{a} + \vec{r}_{12} \times \vec{a} = \vec{r}_{1} \times \vec{a} = \vec{M}_{O}
>\end{align} $$
>Essendo $\vec{r}_{12} \parallel \vec{a} \implies \vec{r}_{12} \times \vec{a} = 0$


## Momento di una forza
Dati una [[forza]] $\vec{F}$ ed un polo $O$ si definisce momento $\vec{\tau}$ della forza $\vec{F}$ rispetto ad $O$ il vettore:
$$\vec{\tau}_{O} = \vec{r} \times \vec{F}$$
dove $\vec{r}$ è il vettore che va da $O$ al punto di applicazione di $\vec{F}$. Le dimensioni del momento di forza sono:
$$
[\tau] = [r][F] = [L]^2 [M][T]^{-2}
$$
E si misura in $N \cdot m$ nel sistema di misura internazionale


# [[momento angolare]]

# momento nei [[Sistemi di punti materiali]]
Indichiamo con il simbolo $\vec{\tau}_{i}$ il momento risultante delle forze agenti sull $i$-esimo punto rispetto ad un dato polo $\text{O}$ (omettiamo il pedice $\text{O}$, assumendo ovunque il medesimo polo $\text{O}$, fisso in un sistema di riferimento inerziale); tale momento può essere scomposto nel risultante dei momenti delle forze interne e di quelle esterne, sempre rispetto al medesimo polo:
$$ \vec{\tau}_{i}= \vec{\tau}_{i}^{(I)} + \vec{\tau}_{i}^{(E)} $$
Sommando sull'indice $i$ i momenti risultanti delle forze interne otteniamo:
$$\begin{align}
 \vec{\tau}^{(I)} &= \sum_{i = 1}^n \vec{\tau}_{i}^{(I)} = \sum_{i = 1}^n \vec{r} \times \vec{F}_{i}^{(I)} = \sum_{i = 1}^n \underset{ j \neq i }{ \sum_{j = 1}^n } \vec{r}_{i} \times \vec{F}_{ij} = \\
&= \sum_{i = 1}^{n-1}\sum_{j = i + 1}^n (\vec{r}_{i} \times \vec{F}_{ij} - \vec{r}_{j} \times \vec{F}_{ij}) = \\
&= \sum_{i = 1}^{n-1} \sum_{j = i + 1}^{n} [(\vec{r}_{i} - \vec{r}_{j}) \times \vec{F}_{ij}] = 0
\end{align}$$
in quanto il vettore $\vec{r}_{i} - \vec{r}_{j}$ ed il vettore $\vec{F}_{ij}$ sono tra loro paralleli.
Le forze interne, infatti in base al terzo principio di Newton, sono a due a due uguali in modulo e direzione e contrarie in verso, ed hanno anche la stessa retta d'azione, quindi i rispettivi momenti si annullano a due a due: $\vec{r}_{i} \times \vec{F}_{ij} = -\vec{r}_{j} \times \vec{F}_{ji}$

Abbiamo quindi dimostrato la seguente proprietà:

>[!propietà]
>In un SdR inerziale, il momento risultante delle forze agenti su un sistema è pari al momento risultante delle sole forze esterne rispetto allo stesso polo:
>$$ \vec{\tau} = \sum_{i = 1}^n \vec{\tau}_{i} = \vec{\tau}^{(I)} + \vec{\tau}^{(E)} = \vec{\tau}^{(E)} = \sum_{i = 1}^{n} \vec{\tau}_{i}^{(E)} = \sum_{i = 1}^n \vec{r}_{i} \times \vec{F}_{i}^{(E)} $$