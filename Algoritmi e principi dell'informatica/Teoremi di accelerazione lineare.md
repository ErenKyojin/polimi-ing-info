---
aliases: 
creation date: 2023-05-25 10:15
modification date: 2023-05-25 10:15
---

Se $L$ è accettato da una MT M a k nastri con complessità $S_{M}(n)$ per ogni $c > 0$  ( e $c \in \mathbb{R}$) si può costruire una MT $M'$ a $k$ nastri con complessità $S_{M}(n) < cS_{M}(N)$

```tikz
\usetikzlibrary{chains}
\begin{document}
\begin{tikzpicture}
\tikzstyle{every path}=[very thick]
\tikzstyle{tmtape}=[draw,minimum size = 0.7cm]

\begin{scope}[start chain = 1 going right, node distance = -0.15mm,every node/.style={tmtape}]
\node[on chain = 1] {};
\node[on chain = 1] {};
\node[on chain = 1] {};
\node[on chain = 1] {$a_1$};
\node[on chain = 1] {$a_2$};
\node[on chain = 1] {...};
\node[on chain = 1] {$a_i$};
\node[on chain = 1] {...};
\node[on chain = 1] {$a_r$};
\node[on chain = 1] {$b_1$};
\node[on chain = 1] {$b_2$};
\node[on chain = 1] {...};
\node[on chain = 1] {$b_i$};
\node[on chain = 1] {...};
\node[on chain = 1] {$b_r$};
\node[on chain = 1] {$c_1$};
\node[on chain = 1] {$c_2$};
\node[on chain = 1] {...};
\node[on chain = 1] {$c_i$};
\node[on chain = 1] {};
\end{scope}

\begin{scope}[start chain = 2 going right, node distance = -0.15mm, every node/.style={tmtape}, shift={(0,-3)}]
\node[on chain = 2] {};
\node[on chain = 2] {};
\node[on chain = 2] {};
\node[on chain = 2] {$\langle a_1,...,a_i,...,a_r\rangle$};
\node[on chain = 2] {$\langle b_1,...,b_i,...,b_r\rangle$};
\node[on chain = 2] {$\langle c_1,...,c_i,...,c_r\rangle$};
\node[on chain = 2] {};
\end{scope}

\end{tikzpicture}
\end{document}
```
Si può verificare il problema della memorizzazione della posizione della testa ma si può risolvere arricchendo l'alfabeto o memorizzando la posizione relativamente allo stato dell'organo di controllo.

Prendiamo un $r$ tale che sia $rc > 2$

Se $L$ è accettato da una MT $M$ a $k$ nastri con complessità $S_{M}(n)$ si può costruire una MT $M'$ a 1 nastro (N.B. non a nastro singolo) con complessità $S_{M'}(n) = S_{M}(N)$ mettendo le parti significative dei $k$ nastri nell'unico nastro una dietro l'altro.

Se $L$ è accettato da una MT $M$ a $k$ nastri con complessità $S_{M}(n)$ per ogni $c > 0$ (e $c \in \mathbb{R}$) si può costruire una MT $M'$ a 1 nastro con complessità $S_{M'}(n) < cS_{M}(n)$, come sopra ma aggiungendo codifica

Se $L$ è accettato da una MT $M$ a $k$ nastri con complessità $T_{M}(n)$ per ogni $c > 0$ (e $c \in \mathbb{R}$) si può custrire una MT 