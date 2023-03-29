---
aliases: 
creation date: 2023-03-23 16:43
modification date: 2023-03-23 16:43
---
## Statica del punto materiale
Consideriamo un [[punto materiale]] con velocità iniziale nulla in un riferimento inerziale, se allora la risultante delle [[forza|forze]] applicate è nulla il punto materiale resta fermo. Ovvero vale la seguente

>[!proposizione]
>Condizione necessaria e sufficiente affinchè un punto materiale resti in quiete in una certa posizione è che
>- Sia nulla la velocità all'istante considerato e
>- Sia nulla la risultante delle forze applicate

>[!oss]
>In coordinate cartesiane la condizione vettoriale $\vec{R}= 0$ equivale alle tre equazioni scalari
>$$ \begin{cases}
>R_{x} = \sum_{i} F_{i,x} = 0 \\
>R_{y} = \sum_{i} F_{i,y} = 0 \\
>R_{z} = \sum_{i}F_{i,z} = 0
>\end{cases} $$
>
> ```tikz
> \usetikzlibrary{arrows.meta}
>\begin{document}
>\begin{tikzpicture}[scale = 1.5,auto]
>\path[-{Stealth[scale=1.5]}]  (0,0) edge node[midway]{$\vec{F}_{7}$} (0,1)
>		(0,1) edge node[midway]{$\vec{F}_{1}$} (1,1.25)
>		(1,1.25) edge node[midway]{$\vec{F}_{2}$} (2,1.1)
>		(2,1.1) edge node[midway]{$\vec{F}_{3}$} (2.2,.5)
>		(2.2,.5) edge node[midway]{$\vec{F}_{4}$} (1.8,-.5)
>		(1.8,-.5) edge node[midway]{$\vec{F}_{5}$} (1,-.7)
>		(1,-.7) edge node[midway]{$\vec{F}_{6}$} (0,0);
>
>\end{tikzpicture}
>\end{document}
>```
>$\vec{R} =0$
> 
>Se le forze  agenti sono soltanto due la risultante è nulla se queste sono uguali ed opposte, se sono piú di due la condizione di equilibrio si ottiene se i vettori che le rappresentano formano un poligono chiuso.
>
>>[!warning]
>>Anche la velocità iniziale deve essere nulla
>
>

### Misura statica delle forze
Una misura della forza alternativa a quella dinamica si ottiene equilibrando la forza da misurare con forza note. SU questo principio si basa il dinamometro che sfrutta la forz elastica di una molla per bilanzare la forza incognita, dalla misura della deformazione indotta si ricava l'intensità della forza

$0 = \vec{R} = \vec{F} + \vec{F}_{el} = \vec{F} + (-kx\hat{u}_{x}) \implies \vec{F} = kx\hat{u}$

