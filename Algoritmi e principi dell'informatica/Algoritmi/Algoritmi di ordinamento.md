---
aliases: 
creation date: 2023-05-09 12:02
modification date: 2023-05-09 12:02
---

Quanto veloce può andare una lgoritmo di ordinamento? Possiamo far meglio di $n \log(n)$?
Un limite inferiore banale è $\Omega(n)$ in quanto devo almeno leggere tutti gli elementi, tuttavia non siamo mai riusciti ad andare sotto un efficienza di $n \log (n)$


Consideriamo gli algoritmi di confronto binario ed otteniamo un albero di decisione:

[[algoritmo di insertion sort]]:

```tikz
\begin{document}
\begin{tikzpicture}
\node {1:2} 
	child {node {2:3}
	 child {node {1,2,3}}
	 child {node {1:3} 
	  child {node {}}}}
	  
	child {node {1:3a}};
\end{tikzpicture}
\end{document}
```




