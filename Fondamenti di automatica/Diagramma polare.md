---
aliases: 
creation date: 2023-03-23 17:38
modification date: 2023-03-23 17:38
---

```tikz
\usepackage{amsfonts}
\begin{document}
\begin{tikzpicture}
\draw[->] (-2,0) -- (2,0)node[below]{$\mathbb{R}$};
\draw[->] (0,-2) -- (0,2)node[left]{$\mathbb{I}$};
\draw[->,red] (0,0) -- (0,1.5)node{$j\omega$}; 
\end{tikzpicture}
\begin{tikzpicture}
\draw[->] (0,5) -- (5,5)node[midway]{$G(s)$};
\end{tikzpicture}
\begin{tikzpicture}
\draw[->] (-2,0) -- (2,0)node[below]{$\mathbb{R}$};
\draw[->] (0,-2) -- (0,2)node[left]{$\mathbb{I}$};
\draw plot [smooth] coordinates {(0,0)  (-1,-.5)  (-.6,-1)};
\end{tikzpicture}
\end{document}
```
Scriviamo $G(s) = \frac{\mu}{S^g} \frac{1 + \dots}{1 + \dots}$ com per bode,
e del diagramma polare DP analizziamo
- comportamento [[asintotico]] per $\omega \to 0^+$ e $\omega \to + \infty$
- aspetto qualitativo


Comportamento per $\omega \to 0$ se $G(0)$ è definito o asintoticamente per $\omega \to 0^+$
- $g = 0$, $G(0) = \mu$
  ```tikz
\usepackage{amsfonts}
\begin{document}
\begin{tikzpicture}
\draw[->] (-2,0) -- (2,0)node[below]{$\mathbb{R}$};
\draw[->] (0,-2) -- (0,2)node[left]{$\mathbb{I}$};
\node (a) at (-1,0){$\bullet$};
\node (b) at (1,0){$\bullet$};
\node[below,blue] at (a){$\mu < 0$};
\node[below,red] at (b){$\mu > 0$};
\end{tikzpicture}
\end{document}
```
- $g < 0$, $G(0) = 0$ $\qquad$ il diagramma polare parte nell'origine
- $g > 0, G(0)$ non è definita $\qquad$ il diagramma polare parte all'[[infinito]] con fase $-g 90^o$

>[!oss]
>non vuole dire che il diagramma polare all [[infinito]] si appoggia su uno degli assi

  ```tikz
\usepackage{amsfonts}
\begin{document}
\begin{tikzpicture}[scale = 1.5, every node/.style = {scale = 1.5}]
\draw[->] (-2,0) -- (2,0)node[below]{$\mathbb{R}$};
\draw[->] (0,-2) -- (0,2)node[left]{$\mathbb{I}$};
\draw[blue,dashed] (-2,-1) -- (2,-1);
\draw[red,dashed] (-1,-2) -- (-1,2);
\node[red] at (-3,1){$g = 2$};
\node[blue] at (2,-2) {$g=1$};
\end{tikzpicture}
\end{document}
```

- comportamento per $\omega \to +\infty$
	- $\#$ zeri = $\#$ poli 
		=> $|G(j\omega)| \to \cost$
		$\angle^o G(j\omega) \to$ multiplo intero di $180^o$ perchè $\#$ zeri + $\#$ poli è pari (0 incluso)
		Arriviamo ai due $\mu$

	- $\#$ poli > $\#$ zeri:
		$|G(j\omega)| \to 0$
		$\angle^o G(j\omega) \to$ multiplo intero di $90^o$  (0 incluso)
		arriviamo nell'origine (con fase 90, quindi appoggiandomi su uno degli assi)


## Aspetto qualitativo
Lo si puó dedurre dai diagrammi di bode:
- l'andamento del modulo mi da la distanza dall'origine
- l'andamento della fase mi da la distanza dell'argomento

>[!esempio]-
>$G(s) = \frac{1}{1+s}$
>
>DBM sopram
>DBF sotto
> ```tikz
> \usepackage{amsfonts}
>\begin{document}
>\begin{tikzpicture}
>\draw (0,0) -- (2,0) -- (3,-1);
>\draw(0,-2) -- (2,-2) -- (2,-3) -- (3,-3);
>\draw[thin,dashed] (2,-4) -- (2,1);
>\end{tikzpicture}
>\begin{tikzpicture}
>\draw(0,0) -- (5,0);
>\end{tikzpicture}
>\begin{tikzpicture}[auto]
>\draw[->] (0,0) -- (0,5)node{$\mathbb{I}$};
>\draw[->] (0,0) -- (5,0)node{$\mathbb{R}$};
>\draw[red] (0,0) arc (-180:0:2);
>\end{tikzpicture}
>\end{document}
>```


