
---
alias: 
---

[[Legge di Kirchoff per le tensioni]]


# KCL magnetica
>[!def] Legge di Kirchoff magnetica per le correnti 
>La somma dei flussi entranti in un nodo è nulla, quindi
>$$\sum_{k} \Psi_{k}= 0$$

Dato poi un percorso chiuso $\gamma$ in un [[circuiti magnetici|circuito magnetico]], dalla [[legge di ampere]]:
$$
\begin{align}
\oint_{\gamma}\!\bar{H}\cdot \d l\quad&\approx \sum_kH_kL_{k}=\sum_kv_{H_k}=\\
&=\sum_{j}N_{j}i_j
\end{align}$$
Dove si è definita la tensione magnetica sul tratto $A \to B$ come
$$v_{H_{BA}} = - \int^{A}_{B} \! \bar{H} \cdot \d\bar{l} = -v_{H_{AB}}$$


>[!esempio]
>![[Pasted image 20220830175258.png]]
>Considerando il circuito in figura si ha che
>$$\oint_{\gamma}\!\bar{H} \cdot \d \bar{l} = N_{4}i_{4}$$
>In termini di tensioni magnetiche, la precedente equazione si può riscrivere come:
>$$H_1L_{1}+ H_{2}L_{2}+H_{3}L_{3}+H_{4}L_{41} + H_{4}L_{42} = N_4i_4$$
>Ossia 
>$$v_{H_1}+v_{H_2}+v_{H_3}+v_{H_{41}}+v_{H_{42}} = N_4i_4$$

Notiamo inoltre come considerata la tensione magnetica $v_{H_1}$ tra i punti 1 e 2 in figura affinchè possa essere assunta approssimativamente costante per qualsiasi scelta di $\gamma$ è necessario che $L_{1}\gg \sqrt{S_1}$, questa considerazione va generalizzata per ogni tratto di $\gamma$


# KVL magnetica
>[!def]
>La somma di cadute di tensione magnetica su un percorso chiuso è pari alla somma delle forze magnetomotrici presenti sul percorso prese con l'opportuno segno

