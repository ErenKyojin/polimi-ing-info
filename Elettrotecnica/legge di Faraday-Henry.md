---
aliases: 
creation date: 2023-07-05 18:36
modification date: 2023-07-05 18:36
---

## Legge

>[!legge] Legge di Faraday-Henry
>In un campo magnetico variabile, in ogni circuito viene indotta una forza elettromotrice (fem) uguale alla derivata rispetto al tempo del flusso magnetico attraverso il circuito col segno cambiato.
>
> $$ V_{fem} = - \frac{d}{dt} \Phi_{B} $$

## Generalizzazione

>[!legge]
>Un campo magnetico dipendente dal tempo comporta l'esistenza di un campo elettrico, tale che la circuitazione del campo elettrico lungo un percorso chiuso arbitrario è uguale ed opposta alla derivata rispetto al tempo del flusso magnetico attraverso una superficie avente per controno quel percorso


# Applicazione della legge di Faraday-Henry ai circuiti elettri

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}[]
\draw[thick] (0,3) to[american, V,v=$E_0$,l = a] (0,0)
	   to [short] (4,0)
	   to [R, l=$R_2$, v=$V_2$] (4,3)
	   to [R, l=$R_1$, v=$V_1$, i^<= $I$] (0,3);
\end{tikzpicture}
\end{document}
```
