---
aliases: 
creation date: 2023-03-29 11:29
modification date: 2023-03-29 11:29
---

Prima di vedere il criterio dobbiamo studiare il [[diagramma di Nyquist]] di una FdT $G(s)$


> [!definition]
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

> [!example]
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

> [!example]
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


> [!example]
> $L(s) = \frac{4}{s - 1} ( = -\frac{4}{1 - 5} \text{ come per d. Bode})$, $p_{D} = 1$ (anello aperto instabile)
> 
>  ```tikz
>   \begin{document}
>   \begin{tikzpicture}[scale = 2]
>   \draw[->,thick](-2,0) -- (3,0)node[below]{$\Re$};
>   \draw[->,thick](0,0) -- (0,2)node[right]{$\Im$};
>   \draw[<-,red,ultra thick] (0,0) arc (180:0:-.5);
>   \draw[<-,blue , ultra thick] (-1,0) arc (180:0:.5);
>   \node (4) at (-1,0){$\bullet$};
>   \node[above]at (4) {$4$};
>   \end{tikzpicture}
>   \end{document}
>   ```
> 
> N ben definito e = $P_{D} \implies$ anello chiuso asintoticamente stabile
> 
> Verifica:
> $$
> \frac{L}{1+l} = \frac{L_{n}}{L_{n} + L_{d}}=\frac{4}{s+3}\qquad \text{polo } = -3
> $$
> 

Caso particolare molto frequente è
$$
p_{D} = 0
$$
*Nessun polo della funzione di trasferimento ha parte reale positiva*

In questo caso dev'essere $N = 0$

Se $N < 0$ (L fa piú giri orari che antiorari attorno a -1) l'anello chiuso non può essere AS.


$$
L(s) = \frac{1}{s(1 + s)}\qquad p_{D} = 0
$$
```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) -- (1,-1) -- (1.5,-2);
\draw (0,-2) -- (1,-2) -- (1,-2.5) -- (1.5,-2.5); 
\end{tikzpicture}
\end{document}
```
DBM (-1 e -2) e DBF (da -90 a -180)

 ```tikz
  \begin{document}
  \begin{tikzpicture}[scale = 2]
  \draw[->,thick](0,0) -- (3,0)node[below]{$\Re$};
  \draw[->,thick](0,0) -- (0,2)node[right]{$\Im$};
  \node[red] at (0,0){$\bullet$};
  \draw[->,blue] (0,-1) -- (0,-0.1) arc (-90:90:.1) -- (0,1);
  \draw[dashed,blue] (0,2) arc (90:-90:2);
  \node (4) at (1.5,0){$\bullet$};
  \node[above]at (4) {$4$};
  \end{tikzpicture}
  \end{document}
 ```
  ```tikz
  \begin{document}
  \begin{tikzpicture}[scale = 2]
  \draw[->,thick](0,0) -- (3,0)node[below]{$\Re$};
  \draw[->,thick](0,0) -- (0,2)node[left]{$\Im$};
  \draw[->,blue,ultra thick] (-0.5,0.5)node[above]{$\omega = 0^-$} arc (180:250:.5);
  \draw[->,red , ultra thick] (-.5,-0.5)node[below]{$\omega = 0^+$} arc (180:90:.5);
  \draw[->, dashed, ultra thick, pink] (0,2) arc (90:-100:2);
  \node (4) at (1.5,0){$\bullet$};
  \node[above]at (4) {$4$};
  \end{tikzpicture}
  \end{document}
  ```
  N = $P_{D} \implies$ AC, AS
Verifico $$\frac{L}{1 + L} = \frac{1}{s^2 + s + 1}\qquad \text{ poli con }\Re < 0$$
