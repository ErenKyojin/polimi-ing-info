```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (6,0) to[short, i>^=$i_2$] (5,0) to (2,0) to[american current source, l=$A_{nr}$] (2,-3) to (6,-3) to [open, v=$v_2$] (6,0);
\draw (4,0) to [R=$\frac{1}{G_{nr}}$] (4,-3);
\end{tikzpicture}
\end{document}
```

# Circuito equivalente di Northon
Per ricavare il circuito equivalente di thevenin imponiamo tra i due morsetti AB una [[tensione]] $v$ , ricaviamo quindi la $G_\text{nr}$ e la $E_\text{nr}$  
E abbiamo quindi la formula della [[corrente]] ai morsetti AB $i = G_\text{nr}v + A_\text{nr}$. Affinche un circuito abbia l'equivalente di Northon deve necessariamente ammettere la [[base tensione]]

# Circuito di Northon in [[regime sinusoidale]]
$\overline{i} = Y_\text{nr}(j\omega)\overline{v} + \overline{A}_\text{nr}(j\omega)$