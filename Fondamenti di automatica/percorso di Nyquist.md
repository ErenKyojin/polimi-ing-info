---
aliases: 
creation date: 2023-03-29 11:30
modification date: 2023-03-29 11:30
---

>[!def]
>Il **percorso di Nyquist** di una FdT $G(s)$
> ```tikz
> \usepackage{amsfonts}
> \usetikzlibrary{arrows.meta}
>\begin{document}
>\begin{tikzpicture}[scale = 2, every node/.style={scale = 1.5}]
>\draw[-{Stealth[scale = 2]}] (-1, 0) -- (3,0) node[right]{$\mathbb{R}$};
>\draw[-{Stealth[scale = 2]}] (0,-2) -- (0,2) node[left]{$\Im$};
>\node[red] (O) at (0,0){$\bullet$};
>\node[red] (A) at (0,1){$\bullet$};
>\node[red] (B) at (0,-1){$\bullet$};
>\draw[dashed, blue] (0,2) arc (90:-90:2);
>\draw[blue,thick] (0,-2) -- (0,-1.1) arc (-90:90:.1) -- (0,-.1)  arc (-90:90:.1) -- (0,.9) arc (-90:90:.1) -- (0,2);
>\end{tikzpicture}
>\end{document}
>```

Il semicercio blu è infinito, le circonferenze rosse sono infinitesimi

>[!Oss]
>il percorso di nyquist circonda in senso orario il semipiano destro




