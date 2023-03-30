---
aliases: 
creation date: 2023-03-29 11:29
modification date: 2023-03-29 11:29
---

Prima di vedere il criterio dobbiamo studiare il [[diagramma di Nyquist]] di una FdT $G(s)$


> [!def]
> 
> Si consideri il sistema dinamico
> ```tikz
> \usetikzlibrary{arrows.meta}
> \begin{document}
> \begin{tikzpicture}
> \draw (-1,-.5) rectangle (1,.5);
> \node (o) at (0,0){$-WO$};
> \draw[-{Stealth[scale = 2]}] (1,0) -- (1.5,0) -- (1.5,-1) -- (-1.5,-1) -- (-1.5,0) -- (-1,0);
> \end{tikzpicture}
> \end{document}
> ```
> - Si tracci il [[diagramma di Nyquist|DN]] di L(s)
> - Sia $p_{D}$ o; numero di poli di $L(s)$ con parte reale positiva
> - Sia $N$ il numero di giri del DN di $L(s)$ attorno al punto $-1$ contatoi con segno positivo se antiorari e negativo se orari; se il DN di $L(s)$ passa per il punto -1 si dice che $N$ non è ben definito
> 
> criterio:
> $$
> \text{sistema in AC AS} \iff \text{N ben definito uguale a }p_{D}
> $$
> ### caso non ben definito:
> N non ben definito $\iff$ il DN di $L(s)$ passa per -1 $\implies \exists \bar{\omega}$ tale che $L(j\bar{\omega}) = -1$ e quindi $L(j\bar{\omega}) + 1 = 0$  e quindi il sistema in AC ha poli con Re = 0 $\implies$ non AS

Proviamo ad applicarlo:

> [!esempio]
> 
> $$
> L(s) = \frac{1}{s+1}\qquad p_{D}=0\ (\text{anello aperto non ha poli con }\Re>0)
> $$
> 
> ```tikz
> \begin{document}
> \begin{tikzpicture}[scale = 2]
> \draw[->,thick](0,0) -- (3,0)node[below]{$R$};
> \draw[->,thick](0,0) -- (0,2)node[right]{$I$};
> \draw[->,blue,ultra thick] (0,0) arc (180:0:.5);
> \draw[->,red , ultra thick] (1,0) arc (360:180:.5);
> \node[above] at (1.5,0){$1$};
> \end{tikzpicture}
> \end{document}
> ```
> 
> N = 0 DN di anello aperto non circolare -1
> 
> N tale che $F$ = $P_{D} \implies$ anello chiuso asint stabile
> 
> Verifica $$\frac{L}{1+L} = \frac{1/S+1}{1 + 1 / s + 1} = \frac{1}{S +2}$$
> polo -2
> 

> [!esempio]
> 
> 
> $L(s) = \frac{4}{1 - S}$ e $p_{D} = 1$
> 
>  ```tikz
>  \begin{document}
>  \begin{tikzpicture}[scale = 2]
>  \draw[->,thick](0,0) -- (3,0)node[below]{$\Re$};
>  \draw[->,thick](0,0) -- (0,2)node[right]{$\Im$};
>  \draw[<-,red,ultra thick] (0,0) arc (180:0:.5);
>  \draw[<-,blue , ultra thick] (1,0) arc (360:180:.5);
>  \node (4) at (1.5,0){$\bullet$};
>  \node[above]at (4) {$4$};
>  \end{tikzpicture}
>  \end{document}
>  ```
> 
> 
> N ben definito ma $\neq P_{D} \implies$ AC non AS
> 
> Verifica $$\frac{1}{1 + L} = \frac{1}{1 + \frac{4}{1 - s}} = \frac{1 - s}{5 - s}$$
> polo $+5$
>  Instabile?


$L(s) = \frac{4}{s - 1} ( = -\frac{4}{1 - 5} \text{ come per d. Bode})$, $p_{D} = 1$ (anello aperto instabile)

 ```tikz
  \begin{document}
  \begin{tikzpicture}[scale = 2]
  \draw[->,thick](0,0) -- (3,0)node[below]{$\Re$};
  \draw[->,thick](0,0) -- (0,2)node[right]{$\Im$};
  \draw[<-,red,ultra thick] (0,0) arc (180:0:.5);
  \draw[<-,blue , ultra thick] (1,0) arc (360:180:.5);
  \node (4) at (1.5,0){$\bullet$};
  \node[above]at (4) {$4$};
  \end{tikzpicture}
  \end{document}
  ```
  