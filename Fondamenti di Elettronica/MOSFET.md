---
aliases: MOS transistor, transistor, transistore, transistore MOSFET
---

- **M**etal
- **O**xide
- **S**emiconductor
- **F**
- **E**
- **T**ransistor

vogliamo controllare la resistenza R tra A e B in funzione dell'ingresso di C

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw(0,0) node[below]{A} to [R] (2,0) node[below]{B};
\draw[->](1,2) node[above]{C} -- (1,.5);
\end{tikzpicture}
\end{document}
```

MOSFET unipolari
- MOS
	- A <- di nostro interesse
	- S
- $j$-fet

# MOS-A
![[Pasted image 20231002145117.png]]
- Un pozzetto leggermente drogato P
- Due pozzetti fortemente drogati N (rappresentano i due nodi A, B).
- La tensione di Gate si applica usando come riferimento un contatto inferiore (quello dello strato P) detto body

Ci sarà quindi un ingresso GB (gate body) ed un uscita AB (source e drain)

>[!oss]
>Fino ad ora il MOSFET è **totalmente simmetrico**, quindi source e drain fino ad ora possono essere scambiate 

Tuttavia per ridurre il numero di terminali possiamo collegare source a body ed avere quindi $S \equiv B$.

Smettiamo quindi di considerare la porta di body, l'ingresso sarà $GS$ e l'uscità sarà $DS$.

Avremo quindi un componente a tre porte.

Tra drain e source applichiamo $V_{DS}$

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw(0,0) to [npn] (0,3);
\end{tikzpicture}
\end{document}
```