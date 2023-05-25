---
aliases: 
creation date: 2023-05-02 10:43
modification date: 2023-05-02 10:43
---

# MODELLO

```tikz
\usetikzlibrary{chains}
\begin{document}
\begin{tikzpicture}
\tikzstyle{tmtape} = [minimum size = 0.7cm, draw]
\tikzstyle{accum} = [minimum width = 1.5cm, minimum height = 0.7cm, draw]

%Nastro di lettura
\begin{scope}[start chain = 1 going right,node distance = -0.15mm,every node/.style = {tmtape}]
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1] (n) {n};
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1]{};
 \node[on chain = 1]{...};
\end{scope}

%Macchina
\begin{scope}
 \node[minimum width = 4cm, minimum height = 2cm,draw,ultra thick] (prog) at (3,-3) {programma cablato};
 \node[minimum width = 2cm,minimum height = 1cm,draw,ultra thick,align = center] 
at (-2,-3) (PC) {program \\ counter};
 \node[minimum width = 2cm,minimum height = 1cm,draw,ultra thick, align = center] at (8,-3) (ALU) {Unità \\ aritmetica};
\end{scope}

%Accumulatore
\begin{scope}[start chain = 2 going below, node distance = -0.15mm,every node/.style = {accum}, shift ={(11,0)}]

\node[on chain = 2] (0) {};
\node[on chain = 2] (1) {};
\node[on chain = 2] (2) {};
\node[on chain = 2] (3) {};
\node[on chain = 2] {};
\node[on chain = 2] (5){};
\node[on chain = 2] {};
\node[on chain = 2] {};
\node[on chain = 2] {};
\node[on chain = 2] {$\vdots$};
\node[left = of 0,draw = none] {accumulatore};
\node[right = of 0, draw = none] {M/0};
\node[right = of 1, draw = none] {M/1};
\node[right = of 2, draw = none] {M/2};
\node[right = of 3, draw = none] {M/3};

\end{scope}

%Scrittura
\begin{scope}[start chain = 3 going right, node distance = -0.15mm, every node/.style = {tmtape}, shift = {(0,-6)}]
 \node[on chain = 3] {};
 \node[on chain = 3] {x};
 \node[on chain = 3] (xp1) {};
 \node[on chain = 3] {};
 \node[on chain = 3] {};
 \node[on chain = 3] {};
 \node[on chain = 3] {};
 \node[on chain = 3] {};
 \node[on chain = 3] {};

\end{scope}

\draw[latex-latex,ultra thick] (PC) -- (prog);
\draw[latex-latex,ultra thick] (prog) -- (ALU);
\draw[-latex] (prog.north) .. controls(4, -1) and(1, -1.2) .. (n.south);
\draw[latex-latex,ultra thick] (ALU)  -- ++ (2.25,0);
\draw[latex-latex] (prog) .. controls (4,-.5) .. (2);

\end{tikzpicture}
\end{document}
```

Ogni cella contiene un intero, non un carattere


### [[Istruzioni]] RAM


| Istruzione     | parametro | esempio                                    |
| -------------- |:---------:| ------------------------------------------ |
| `LOAD`         |     X     | `M[0] := M[X]` indirizzamento diretto      |
| `LOAD=`        |     X     | `M[0] := X` indirizzamento immediato       |
| `LOAD*`        |     X     | `M[0] := M[M[X]]` indirizzamento indiretto |
| `STORE[*]`     |     X     | `M[X] := M[0],...`                         |
| `ADD...`       |           | `M[0] := M[0] + M[X]`                      |
| `SUB,MULT,DIV` |           |                                            |
| `READ[*]`      |     X     |                                            |
| `WRITE[=,*]`   |     X     |                                            |
| `JUMP`         |   label   | `PC := b(label)`                           |
| `JZ,JGZ,...`   |   label   | `jump if M[0] = 0, > 0,...`                |
| `HALT`         |           |                                            | 

Un programma RAM che calcola la [[Funzioni|funzione]] `is_prime(n) = if n is prime then 1 else 0`:

```
		READ   1
		LOAD=  1
		SUB    1
		JZ     NO
		LOAD=  2
		STORE  2
LOOP:   LOAD   1
		SUB    2
		JZ     YES
		LOAD   1
		DIV    2
		MULT   2
		SUB    1
		JZ     NO
		LOAD   2
		ADD=   1
		STORE  2
		JUMP   LOOP
YES:    WRITE= 1
		HALT
NO:     WRITE=0
		HALT
```

Quanto costa eseguire il codice qua sopra riportato mediante una RAM?

Per ora ogni istruzione ha un [[Costo di un calcolo|costo]] costante indipendentemente dal valore degli operando, e lo possiamo indicare con $c_{i}$ il costo della $i$-esima operazione del programma.

#### Costo del programma:
Le istruzioni da 1 a 6 hanno costo costante, vengono eseguite al più una volta a testa quindi il loro costo totale è a sua volta costante ed è
$$ k_{1} = \sum_{i = 1}^6 c_{i} $$
Lo stesso vale per le istruzioni da 19 a 22 che hanno costo costante, vengono eseguite una sola volta ed il loro costo totale vale:
$$ k_{3}=\sum_{i = 19}^{22} c_{i} $$
È più complesso il caso delle istruzioni dalla 7 alla 18 che hanno costo totale
$$ k_{2}=\sum_{i = 7}^{18} c_{i} $$
ma vengono eseguite al più $n$ volte, quindi:

$$ \begin{align}
T_{R}(n) = k_{1} + k_{2}n + k_{3} = \Theta(n) \\
S_{R}(n) = 2 = \Theta(1)
\end{align} $$