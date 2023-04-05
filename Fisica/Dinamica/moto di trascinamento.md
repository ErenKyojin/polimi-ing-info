---
aliases: 
creation date: 2023-03-28 15:00
modification date: 2023-03-28 15:00
---

[[Moto]] del sistema mobile rispetto a quello fisso nel caso di [[moto relativo]]



## Moto di trascinamento traslatorio puro
Considerati due istanti di tempo successivi $t_{1}$ e $t_{2}$, lo spostamento compiuto dal sistema mobile rispetto a quello fisso nell'[[intervallo]] temporale $t_{2}-t_{1}$ è lo stesso per tutti i suoi punti, e puó essere rappresentato con un vettore che prende il nome di spostamento di trascinamento

$\vec{s}_{t} = \overrightarrow{O_{1}'O_{2}'}$ detto spostamento di trascinamento

Consideriamo un punto materiale che nello stesso intervallo di tempo si muova nel sistema fisso di uno spostamento assoluto
$\vec{s}_{a} = \overrightarrow{P_{1}P_{2}}$
Nel sistema mobile lo stesso punto materiale avrà compiuto uno spostamento relativo pari a:
$$
\begin{align}
\vec{s}_{r} &= \overrightarrow{O_{2}'P_{2}} - \overrightarrow{O_{1}'P_{1}} = (\overrightarrow{-O_{1}'O_{2}'} + \overrightarrow{O_{1}'P_{2}}) - \overrightarrow{O_{1}'P_{1}} = \\
&= ( \overrightarrow{O_{1}'P_{2}} - \overrightarrow{O_{1}'P_{1}}) - \overrightarrow{O_{1}'O_{2}'} = \vec{s}_{a} - \vec{s}_{t} 
\end{align}
$$
In definitiva nel caso di moto di trascinamento traslatorio vale la legge di composizione:
$$
\fbox{$\vec{s}_{a} = \vec{s}_{r} + \vec{s}_{t}$}
$$

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}

%%SdR principale
\node (O) at (0,0,0){$\bullet$};
\draw[-{Stealth[scale = 2]}](-1,0,0) -- (5,0,0) node[below]{$y$};
\draw[-{Stealth[scale = 2]}](0,-1,0) -- (0,5,0) node[left]{$z$};
\draw[-{Stealth[scale = 2]}](0,0,-1) -- (0,0,5) node[right]{$x$};

% SdR 1
\node (Op) at (2,1,-1){$\bullet$};
\draw[-{Stealth[scale = 2]}] (Op.center) -- ++ (3,0,0)node[below]{$y_{1}'$};
\draw[-{Stealth[scale = 2]}] (Op.center) -- ++ (0,3,0)node[left]{$z_{1}'$};
\draw[-{Stealth[scale = 2]}] (Op.center) -- ++ (0,0,3)node[right]{$x_{1}'$};


%SdR 2
\draw[-{Stealth[scale = 2]}] (Op.center) -- ++ (2,.8,-.5) node[midway,above]{$\vec{s}_t$}node(Os){} node[below right]{$O'_2$};
\draw[-{Stealth[scale = 2]}] (Os.center) -- ++ (3,0,0)node[below]{$y_{2}'$};
\draw[-{Stealth[scale = 2]}] (Os.center) -- ++ (0,3,0)node[left]{$z_{2}'$};
\draw[-{Stealth[scale = 2]}] (Os.center) -- ++ (0,0,3)node[right]{$x_{2}'$};

%Punti
\node (P1) at (-1,2,1){$\bullet$};
\draw[-{Stealth[scale = 2]}] (P1.center) -- ++ (2.5,2.5,-.5) node[midway,above]{$\vec{s}_a$} node(P2){};
\draw[-{Stealth[scale = 2]}] (P1.center) -- ++ (2,.8,-.5) node[midway,below]{$\vec{s}_t$} node(Pst){};
\draw[thin] (Pst.center) -- (P2.center);
\draw[-{Stealth[scale = 2]}] (P1.center) -- ++ (.5,1.7,0) node[midway,left]{$\vec{s}_r$} node(Psr){};
\draw[thin] (Psr.center) -- (P2.center);

\node[below left] at (P1){$P_1$};
\node[above right] at (P2){$P_2$};

\end{tikzpicture}
\end{document}
```

## Moto di trascinamento rotatorio puro
Per spostare infinitesimi del sistema di riferimento, cioè se consideriamo un intervallo di tempo $t_{2}-t_{1}$ infinitesimo, vale ancora la stessa legge di composizione degli spostamenti, ma in forma differenziale
$$
\fbox{$d\vec{s}_{a} = d\vec{s}_{r} + d\vec{s}_{t}$}
$$
Dove $d\vec{s}_{t}$ rappresenta lo spostamento infinitesimo subito rispetto al sisstema fisso, dal punto del sistema mobile in cui si trova il punto materiale considerato. Al contrario che nel caso traslatorio, tale spostamento non è lo stesso per tutti i punti dello spazio e non si identifica perciò con lo spostamento subito dall'origine $O'$ del sistema mobile.
Per rotazioni finite, al contrario, questa legge non si puó applicare: le rotazioni finite non sono descritte da vettori e non sono trasformazioni commutative


## Moto di trascinamento rototraslatorio
Caso piú generale, in cui il moto del sistema mobile rispetto al sistema fisso è un