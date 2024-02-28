---
aliases: circuito, circuiti, circuiti elettrici
creation date: 2023-06-01 18:00
modification date: 2023-06-01 18:00
---

## Il primo circuito elettrico

```tikz
\begin{document}
\begin{tikzpicture}

\begin{scope}[rotate = 20]
\draw (0,0) circle (4 and 2);
\draw (0,0) circle (3.5 and 1.5);
\draw (3.3,.8) circle (.15 and .25);
\draw[] (-3.7,0.2) circle  (.25 and .15);
\end{scope}

\node[scale = 2] at (0,1.2){$\gamma$};

\end{tikzpicture}
\end{document}
```
Consideriamo un filo molto sottile di materiale [[conduttori|conduttore]] (detta anche spira conduttrice) di lunghezza $I$ e sezione $S$ uniforme, che identifica un percorso chiuso $\gamma$. Sarà caratterizzato da una [[resistenza]] $R$ che dipende da:
- $I$
- $S$
- Tipo di materiale

Supponiamo di poter generare un [[campo elettrico]] $\bar{E}$ stazionario all'interno del conduttore. Tale campo è conservativo e quindi $\oint_{\gamma} \bar{E} \cdot \d \bar{l} = 0$. Se ne deduce che il campo $\bar{E}$ non è in grado di generare una [[corrente]] costante $I$ all'interno della spira conduttrice dal momento che in base alla [[legge di Ohm]] è necessaria una differenza di potenziale $V = RI$ per permettere alle cariche libere di percorrere un tragitto $\gamma$ che da un punto di partenza all'interno della spira si snoda all'interno di essa per richiudersi nel punti di partenza dello stesso. In altre parole, il [[campo|campo]] nel compiere il suo [[Lavoro|lavoro]] lungo il tragitto $\gamma$ cede energia alle cariche, ma queste la perdono urtando tra loro e contro il reticolo fisso. Quindi se non viene fornita una quantità netta di energia agli elettroni, essi non possono muoversi continuamente lungo un percorso.

L'utilizzo di correnti elettriche è storicamente iniziato con l'invenzione della pila (1799) da parte di alessandro volta. All'interno della pila si genera un campo elettrico non conservativo che è in grado di produrre una [[tensione|differenza di potenziale]] costante $V$ tra i poli positivo e negativo della pila stessa. L'effetto che questo produce, quando un filamento di materiale conduttore con resistenza $R$ viene collegato tra i due morsetti, è di mettere in movimento le cariche, generando una corrente $I$, che nel tragitto lungo il filamento vedono la loro energia diminuire di una quantità $V = RI$ che viene ripristinata nell'attraversare la pila