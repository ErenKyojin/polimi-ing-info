---
aliases: MOS transistor, transistor, transistore, transistore MOSFET
---

- **M**etal
- **O**xide
- **S**emiconductor
- **F**
- **E**
- **T**ransistor

vogliamo controllare la resistenza R tra A e B in funzione dell'ingresso di C

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw(0,0) node[below]{A} to [R] (2,0) node[below]{B};
\draw[->](1,2) node[above]{C} -- (1,.5);
\end{tikzpicture}
\end{document}
```

MOSFET unipolari
- MOS
	- A <- di nostro interesse
	- S
- $j$-fet

Un pozzetto leggermente drogato P
Due pozzetti fortemente drogati N