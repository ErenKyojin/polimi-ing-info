>[!def]
>Un sistema di riferimento $(0,\mathbf{i},\mathbf{j},\mathbf{k})$ si dice cartesiano se:
>1. $\|\mathbf{i}\| = \|\mathbf{j}\| = \|\mathbf{k}\|=1$
>2. $\mathbf{i} \perp \mathbf{j}, \mathbf{j} \perp \mathbf{k}, \mathbf{k} \perp \mathbf{i}$
>3. $\mathbf{i},\mathbf{j},\mathbf{k}$ formano una terna destra: se $\mathbf{i}$ e $\mathbf{j}$ sono dirette come il pollice e l'indice della mano destra allora $\mathbf{k}$ è diretto come il dito medio
>   
> ```tikz
> \usetikzlibrary{arrows.meta}
>\begin{document}
>\begin{tikzpicture}[scale = 2]
>\draw[-{Stealth[scale=1.5]}] (0,0,0) -- (1,0,0) node[below]{$\mathbf{j}$};
>\draw[-{Stealth[scale=1.5]}] (0,0,0) -- (0,1,0) node[right]{$\mathbf{k}$};
>\draw[-{Stealth[scale=1.5]}] (0,0,0) -- (0,0,1) node[right]{$\mathbf{i}$};
>\end{tikzpicture}
>\end{document}
>```



>[!oss]
>Una terna di vettori $\left\{ \mathbf{i},\mathbf{j},\mathbf{k} \right\}$, si chiama base ortonormale per l'insieme dei [[vettori]] liberi se:
> $$ \|\mathbf{i}\| = \|\mathbf{j}\| = \|\mathbf{k}\| = 1\quad e \quad \mathbf{i} \perp \mathbf{j} , \mathbf{j} \perp \mathbf{k},\mathbf{i} \perp \mathbf{k} $$

