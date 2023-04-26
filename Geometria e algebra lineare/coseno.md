> [!def]
> Sia $(0,\mathbf{i},\mathbf{j})$ un sistema di riferimento cartesiano nel piano e sia $\mathcal{C}$ la circonferenza unitaria centrata in $0$. Sia $\alpha$ l'angolo formato da $\mathbf{v}$ vettore con origine in $O$ che punta su $P \in \mathcal{C}$ e $\mathbf{i}$. Allora si ha che $\mathbf{v} = x \mathbf{i} + y \mathbf{j}$ e diremo che $x = \cos(\alpha)$
> ```tikz
>\begin{document}
>\begin{tikzpicture}[scale =2]
>\draw[->] (-1,0) -- (1.5,0);
>\draw[->] (0,-1) -- (0,1.5);
>\draw[->,green,thick] (0,0) -- (0,.7) node[below left]{$\mathbf{j}$};
>\draw[->,green,thick] (0,0) -- (.7,0) node[below left]{$\mathbf{i}$};
>\draw[->,red,thick] (0,0) -- (.5,.5) node[left]{$\mathbf{v}$} node[above right, cyan]{$P$};
>\draw[cyan] (0.2,0) arc (0:50:0.2) node[below right,cyan]{$\alpha$};
>\draw (.7,0) arc (0:360:.7); 
>\node[below left](0,0){o};
>\end{tikzpicture}
>\end{document}
>```
>
> ---
>Sia $\overset{\triangle}{ABC}$ un triangolo rettangolo in $B$. Se $\alpha$ è l'angolo compreso tra $\overrightarrow{CA}$ e $\overrightarrow{CB}$ allora $\cos(\alpha) = \dfrac{\|\overrightarrow{CB}\|}{\|\overrightarrow{CA}\|}$


