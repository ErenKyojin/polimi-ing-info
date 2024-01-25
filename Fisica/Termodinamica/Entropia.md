---
aliases: 
creation date: 2024-01-25
---


Sia $\gamma_{1}$ che $\gamma_{2}$ reversibili.
```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex] (0,0) -- (0,4);
\draw[-latex] (0,0) -- (4,0);
\node (A) at (1,1){$\bullet$};
\node (B) at (3,2){$\bullet$};
\node[left] at (A){A};
\node[right] at (B){B};
\draw (A.center) to[out=80] node[midway, above]{$\gamma_2$} (B.center);
\draw (A.center) to[out=320,in=270] node[midway, below]{$\gamma_1$}(B.center);
\end{tikzpicture}
\end{document}
```

Dal calcolo dell'[[integrale di Clausius]] otteniamo:
$$ \int _{A,\gamma_{1}}^B \! \frac{\partial Q}{T}  = \int _{A,\gamma_{2}}^{B} \!\frac{\partial Q}{T}  $$ infatti la trasformazione è reverisibile.

