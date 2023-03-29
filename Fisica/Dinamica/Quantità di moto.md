---
aliases: 
creation date: 2023-03-23 14:05
modification date: 2023-03-23 14:05
---

Si definisce quantità di moto $\vec{p}$ di un punto materiale la grandezza vettoriale data dal prodotto della massa per la velocità istantanea (vettoriale) del punto materiale:
$\vec{p} = m\vec{v}$

```tikz
\begin{document}
\begin{tikzpicture}[scale = 2,every node/.style = {scale = 1.3}]
\draw plot [smooth] coordinates {(0,.2) (0.5, .4) (1,.5) (2,.5) (3, .4) (3.5,.2) (4, -.3)};
\draw[->,thick] (1,.5) node{$\bullet$} node[below]{$m$} -- (1.7,.55)node[midway,above]{$\vec{v}$};
\draw[->,thick] (5,.5) node{$\bullet$} -- (5.7, 0.55)node[midway][above]{$\vec{p}$};
\end{tikzpicture}
\end{document}
```



>[!def]
>Un sistema di $n$ punti materiali si dice isolato quando non è soggetto a interazioni con l'esterno, cioè gli $n$ punti materiali interagiscono solo fra di loro e non con altri. Diciamo anche che essi sono soggetti alla mutua interazione


$$\frac{m_{2}}{m_{1}} = \left| \frac{\vec{a}_{1}}{\vec{a}_{2}} \right| = \left| \frac{\Delta \vec{v}_{1} / \Delta \vec{v}_{1}}{\Delta \vec{v}_{2} / \Delta t} \right| = \left| \frac{\Delta \vec{v}_{1}}{\Delta \vec{v}_{2}} \right| $$
quindi possiamo scriere $m_{1}\Delta \vec{v}_{1} = -m_{2}\Delta \vec{v}_{2}$
dove il segno negativo tiene conto del fatto che le due accelerazioni subite hanno la stessa direzione ma verso opposto.
La variazione della quantità di moto di tali punti materiali è sempre uguale in module e direzione ed opposta in verso:
$\Delta \vec{p}_{1} = -\Delta \vec{p}_{2} \implies \Delta \vec{p}_{1} + \Delta \vec{p}_{2} = 0$
In altri termini indicando con $\vec{p}_{1}$ e $\vec{p}_{2}$ le quantità di moto dei corpi prima dell'interazione con $\vec{p}_{1}'$ e con $\vec{p}_{2}'$ quelle dopo l'interazione avremo:
$$
	(\vec{p}_{1}'-\vec{p}_{1}) + (\vec{p}_{2}' -\vec{p}_{2}) = 0 \iff \vec{p}_{1}' +\vec{p}_{2}' \iff \vec{p}_{\text{ tot }} = \vec{p}_{\text{ tot }}'
$$
Quanto osservato per due corpi si verifica sperimentalmente anche per un sistema di piú corpi e perciò si assume il seguenti:

## Principio di conservazione della quantità di moto
La quantità di moto di un sistema isolato di $n$ punti materiali rimane costante nel tempo
$$
\fbox{$\vec{p}_{\text{ tot }} \equiv \sum_{i=1}^n \vec{p}_{i} = \cost$}
$$
In un sistema inerziale un punto materiale non soggetto ad interazioni si muove con velocità costante e quindi ha anche quantità di moto costante, essendo costante la sua massa.
Se invece la quantità di moto di un punto materiale varia, significa che esso è soggetto ad interazioni

