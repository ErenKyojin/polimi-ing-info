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
\begin{tikzpicture}[level 1/.style={sibling distance = 4cm}, level 2/.style={sibling distance = 2cm}]
\node {1:2} []
	child {node {2:3}
	 child {node {1,2,3}}
	 child {node {1:3} 
	  child {node {(1,3,2)}}
	  child {node{(1,2,3)}}}}
	  
	child {node {1:3a}
	 child {node{(2,1,3)}}
	 child {node{2:3} 
	  child {node {2,3,1}}
	  child {node{3,2,1}}}};
\end{tikzpicture}
\end{document}
```




