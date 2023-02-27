# Teorema di bucherot
L'estensione nel #dominio dei fasori del [[teorema di tellegen]], notiamo che la relazione $\mathbf{\bar v}^T\mathbf{\bar\imath} = 0$ non generalizza il teorema (In questo modo <u>non</u> si descrive la potenza complessa $\hat A_k$ del k-esimo nodo non essendo semplicemente $\bar v_k \bar\imath_k$).

Potremmo allora pensare di utilizzare il vetore $\mathbf{\bar\imath^*}$ che effettivamente rappresenta un insieme di correnti compatibili con il grafo del circuito. Possiamo infatti scrivere la generica KCL al nodo j-esimo:
$$\sum_{h=1}^{N_j}\alpha_h\bar\imath_h = \sum_{h=1}^{N_j}\alpha_hRe\{\bar\imath_h\} + j\sum_{h=1}^{N_j}\alpha_hIm\{\bar\imath_h\} = 0$$
Con:
- $N_j$ numero di lati che entrano nel nodo j-esimo
- $\alpha_h$ coefficiente che vale $\pm1$ in base al verso della corrente $\bar\imath_h$

da cui deriviamo che
$$\begin{align}
	&\sum_{h=1}^{N_j}\alpha_hRe\{\bar\imath_h\} = 0 \\
	&\sum_{h = 1}^{N_j}\alpha_hIm\{\bar\imath_h\} = 0
\end{align}
$$


E quindi anche $\mathbf{\bar\imath}^*$ è compatibile con la KCL al nodo j visto che:
$$\sum_{h=1}^{N_j}\bar\imath_h^* =\sum_{h=1}^{N_j}\alpha_hRe\{\bar\imath_h\} - j\sum_{h=1}^{N_j}\alpha_hIm\{\bar\imath_h\} = 0$$
Estendendo questo ragionamento a tutti i nodi del grafo otteniamo che:
$$\frac{1}{2}\mathbf{\bar v}^T\mathbf{\bar\imath}^* =\sum_{k=1}^lP_k + j Q_k = 0$$
da cui
$$
\begin{align}
	&\sum_{k=1}^l P_k = 0 &&\\
	&\sum_{k=1}^l Q_k = 0 &&
\end{align}
$$