---
aliases: 
creation date: 2023-05-25 10:15
modification date: 2023-05-25 10:15
---

Se $L$ è accettato da una [[Macchine di Turing|MT]] M a k nastri con [[complessità]] $S_{M}(n)$ per ogni $c > 0$  ( e $c \in \mathbb{R}$) si può costruire una MT $M'$ a $k$ nastri con complessità $S_{M}(n) < cS_{M}(N)$

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
Si può verificare il [[problema]] della memorizzazione della posizione della testa ma si può risolvere arricchendo l'alfabeto o memorizzando la posizione relativamente allo [[stato]] dell'organo di controllo.

Prendiamo un $r$ tale che sia $rc > 2$

Se $L$ è accettato da una MT $M$ a $k$ nastri con complessità $S_{M}(n)$ si può costruire una MT $M'$ a 1 nastro (N.B. non a nastro singolo) con complessità $S_{M'}(n) = S_{M}(N)$ mettendo le parti significative dei $k$ nastri nell'unico nastro una dietro l'altro.

Se $L$ è accettato da una MT $M$ a $k$ nastri con complessità $S_{M}(n)$ per ogni $c > 0$ (e $c \in \mathbb{R}$) si può costruire una MT $M'$ a 1 nastro con complessità $S_{M'}(n) < cS_{M}(n)$, come sopra ma aggiungendo codifica

Se $L$ è accettato da una MT $M$ a $k$ nastri con complessità $T_{M}(n)$ per ogni $c > 0$ (e $c \in \mathbb{R}$) si può costruire una MT $M'$ a $k+1$ nastri con complessità:
$$ T_{M}(n) = \max\{ n+1, c T_{M}(n) \} $$

Lo schema di dimostrazione è analogo a quello usato per la [[complessità spaziale]] ma con qualche dettaglio tecnico in più:
- occorre per prima cosa leggere e tradurre tutto l'input (n mosse)
- Questo crea qualche problema all'interno della classe $n$, per cui prendiamo $\max$
- Nel caso pessimo occorrono 3 mosse per simulare almeno $r + 1$ mosse di M

>[!esempio]
>$\left< a_{1},\dots,a_{r} \right>\left< b_{1},\dots,b_{r} \right> \left< c_{1},\dots,c_{r} \right>$
>Il caso pessimo è da $a_{r}$ arrivo a $b_{r}$ con $r$ mosse, con una mossa in più sono riuscito a toccare 3 celle, ossia a fare 3 mosse della $M'$


## Conseguenze pratiche
Lo schema di dimostrazione è valido per qualsiasi tipo di modello di calcolo, quindi anche per calcolatori reali.
Pure di aumentare la potenza di calcolo in termini di risorse disponibili si può aumentare a piacere la velocità di esecuzione.
Tale aumento di prestazioni rimane confinato nell'ambito di miglioramenti al più lineari, miglioramenti di ordini di grandezza possono essere ottenuti solo cambiando [[algoritmo]] e in modo non automatico. 

