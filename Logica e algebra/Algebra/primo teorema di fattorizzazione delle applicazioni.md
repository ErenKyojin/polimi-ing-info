---
aliases: 
creation date: 2023-04-29 15:05
modification date: 2023-04-29 15:05
---

>[!teorema]
>Siano $f : A \to B$ una [[Funzioni|funzione]] e $h_{\ker(f)} : A \to A / \ker(f)$ la proiezione canonica di $A$ su $A / \ker(f)$ allora esiste un unica funzione $g : A / \ker(f) \to B$ tale che $h_{ker(f)} \cdot g = f$. Inoltre $g$ è [[Funzione iniettiva|iniettiva]]. In particolare $f$ è [[Funzione suriettiva|suriettiva]] se e solo se $g$ è [[Funzione biunivoca|biunivoca]].


Questo teorema viene di solito enunciato cosi:
Siano $f : A \to B$ una funzione e $h_{\ker(f)} : A \to A / \ker(f)$ la proiezione canonica di $A$ su $A / \ker(f)$. Allora esiste un unica funzione $g : A / \ker(f) \to B$ che rende commutativo il seguente diagramma

```tikz
\begin{document}
\begin{tikzpicture}

\node (a) at (0,0) {A};
\node (b) at (4,0) {B};
\node (aker) at (0,-2.5){$A / \ker (f)$};

\draw[-latex] (a) -- (b) node[midway,above]{$f$};
\draw[-latex] (a) -- (aker) node[midway,left]{$h_{\ker}$};
\draw[-latex] (aker) -- (b);
\end{tikzpicture}
\end{document}
```


