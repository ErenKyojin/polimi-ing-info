---
aliases: 
creation date: 2023-05-25 17:50
modification date: 2023-05-25 17:50
---

Forniamo due definizioni alternative
> [!def]
> Campo è una regione dello spazio in cui si studia un fenomeno fisico


> [!def]
> Campo è una [[grandezza fisica]], qualunque, [[Funzioni|funzione]] dello spazio ed eventualmente del tempo

Un campo può essere **scalare** se descritto da una funzione [[scalare]] $f(x,y,z,t)$ dello spazio ed eventualmente del tempo (ad esempio la temperatura dell'aria in una stanza è un [[campi scalari|campo scalare]]), oppure **vettoriale** se descritto da una funzione vettoriale $\tilde{A} (x,y,z,t)$ dello spazio ed eventualmente del tempo (ad esempio la velocità dell acqua di un fiume è un campo vettoriale).

```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex,thick] (0,0,0) node(o){} -- ++ (4,0,0) node[below]{x};
\draw[-latex,thick] (0,0,0) -- ++ (0,4,0) node[right]{y};
\draw[-latex,thick] (0,0,0) -- ++ (0,0,4) node[below right]{z};
\draw[dashed] (0,0,3) node[left]{$A_z$} -- (3,0,3);
\draw[dashed] (3,0,0) node[below]{$A_x$} -- (3,0,3);
\draw[dashed] (0,3,0) node[above left]{$A_y$} -- (3,3,3);
\draw[dashed] (0,0,0) -- (3,0,3);
\draw[dashed] (3,0,3) -- (3,3,3);
\draw[->,thick] (0,0,0) -- (3,3,3) node[above right]{$\tilde{A}$};

\begin{scope}[every path/.style={green, very thick,-latex}]
\draw (o) -- ++ (1,0,0) node[below]{$\hat i$};
\draw (o) -- ++ (0,1,0) node[right]{$\hat j$};
\draw (o) -- ++ (0,0,1) node[above]{$\hat k$};
\end{scope}

\end{tikzpicture}
\end{document}
```


$\tilde{A}$ è rappresentato da una terna cartesiana sinistrorsa identificata dai versori $\hat{\imath},\hat{\jmath},\hat{k}$ che indicano la direzione ed il verso degli assi $x,y$ e $z$ rispettivamente. Il vettore $\tilde{A}$ può essere espresso in funzione delle sue proiezioni sugli assi coordinati scrivendo $\tilde{A} = A_{x}\hat{\imath} + A_{y}\hat{\jmath} + A_{z}\hat{k}$. Il suo modulo, grandezza scalare che ne esprime l'intensità è $A = |\tilde{A}| = \sqrt{ A_{x}^2 + A_{y}^2 + A_{z}^2 }$.
Una linea di campo di un campo vettoriale, anche detta linea di forza nel caso di un campo di forze, è una curva ideale che ha come tangente in ogni punto la direzione del vettore del campo stesso. Per ogni punto passa una sola linea di campo che è quindi univocamente definita