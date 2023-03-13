---
aliases: 
creation date: 2023-03-13 12:46
modification date: 2023-03-13 12:46
---

Sono sistemi ottenuti componendoni altri e li rappresentiamo con schemi a blocchi SB GHU da

Blocchi
```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) -- (1,0) -- (1,1) -- (0,1) -- (0,0); 
\draw[->] (-.95,0.5) -- (0,0.5);
\draw[->] (2.05, 0.5) -- (1.05,0.5);
\end{tikzpicture}
\end{document}
```

$\large D


Problema

```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) circle(3);
\draw (0,0) -- (0,1) -- (1,1) -- (1,0) -- (0,0);
\node at (.5,.5){$G(s)$};
\end{tikzpicture}
\end{document}
```

Ipotesi,  tutti i blocchi sono Raggiungibili e osservabili, ossia privi di parti nascoste, ovvero tutte le loro Funziolni di trasferimento hanno num e denominatore coprimi

domande:
come ottengo 