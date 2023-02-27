# Connessione in parallelo
Due bipoli sono in parallelo se collegati alla stessa coppia di nodi, ossia i due bipoli hanno la medesima soluzione ai propri capi.
Sono diversi i casi:
- entrambi in base tensione
	
	$i_1 = g_1(v_1)$, $i_2 = g_2(v_2)$, allora $i=g_1(v) + g_2(v)$
- solo uno ammette base tensione
	$b_1$ ammette base tensione, allora $b_{eq} = b_2$

- nessuno dei due ammette base tensione
	indeterminato
	
	inoltre le singole correnti si ricavano tramite il [[partitore di corrente]]
	
	La [[conduttanza]] equivalente è $G_{eq}=\sum_{K=1}^MG_k$
	E quindi la [[resistenza|resistore]] equivalente è $$R_{eq} = \frac{1}{\sum_{K=1}^MR_k^{-1}}$$
	
	
	# Connessione in parallelo di ammettenze
	È banale che $\overline i = \overline i_R + \overline i_C$ e:
	$$\overline{i} = G\overline{v} + j\omega C \overline{v} = \underbrace{(G + j\omega C)\overline{v}}_{Y_{eq}(j\omega)}$$
	
	L'[[ammettenza]] equivalente di M ammettenze commesse in parallelo è invece uguale alla somma delle ammettenze cioè
	$$Y_eq(j\omega) = \sum_{k=1}^MY_k(j\omega)$$
	
	