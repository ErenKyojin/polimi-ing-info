---
aliases: 
creation date: 2023-04-10 18:19
modification date: 2023-04-10 18:19
---

Dati un punto materiale $P$, avente quantità di moto $\vec{p}$ ed un polo $O$ si definisce momento della quantità di moto o momento angolare $\vec{L}_{O}$ di $P$ rispetto ad $O$ il vettore
$\vec{L}_{O} = \vec{r} \times \vec{p}$ 
dove $\vec{r}$ è il vettore che va da $O$ a $P$


![[Seconda equazione cardinale della dinamica]] per un singolo punto materiale



# Momento angolare a planarità del moto
Osserviamo che, per le proprietà del prodotto vettore, il momento angolare risulta sempre ortogonale al piano individuato dal vettore $\vec{p}$ (ovvero da $\vec{v}$, ad esso parallelo) e dal punto $O$. In generale tale piano non è fisso durante il moto del punto materiale, ma è, per così dire, un piano locale, diverso in punti diversi della traiettoria del moto. Ne consegue che, sempre in generalem la direzione del momento angolare di un punto materiale rispetto ad un dato polo $O$ varia nel tempo.
Vi sono casi però in cui il punto materiale compie un moto piano. Se anche il polo $O$ viene scelto nel piano del moto, allora ilmomento angolare è sempre ortogonale al piano del moto, e quindi la sua direzione resta costante nel tempo.
Viceversa, se il momento angolare $\vec{L}$ di un punto materiale $P$ ha una direzione costante, allora il moto di $P$ è un moto piano, infatti sarà costante la direzione del prodotto vettore $\vec{r} \times \vec{p}$, cioè il piano in cui giacciono $\vec{r}$ e $\vec{p}$ è lo stesso in tutti gli istanti del moto.


>[!esempio] Moto circolare
>Consideriamo il moto lungo una circonferenza di raggio $r$ e centro $O$: il momento angolare di $P$ rispetto al centro $O$ vale
>$$ \vec{L} = m\vec{r} \times \vec{v}= mr^2\vec{\omega}$$
>
> ```tikz
> \usetikzlibrary{arrows.meta}
>\begin{document}
>\begin{tikzpicture}
>\node (O) at (0,0,0){};
>\draw (0,0,0) circle (2 and 1);
>\draw[thick,-{Stealth[scale = 1.3]}] (O.center) -- ++ (0,2,0) node[below right]{$\vec{\omega}$};
>\draw[thick,-{Stealth[scale = 1.3]}] (O.center) -- ++(2,0,2)node[midway, above]{$\vec{r}$}node(P){};
>\draw[thick,-{Stealth[scale = 1.3]}] (P.center) -- ++ (1,0,-3) node[above left]{$\vec{p}$};
>\draw (-1.5,0,0) arc [start angle=180, end angle = 270, x radius = 1.5, y radius = 0.75];
>\end{tikzpicture}
>\end{document}
>```

