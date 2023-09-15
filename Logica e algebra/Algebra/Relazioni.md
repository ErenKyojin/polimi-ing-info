---
aliases: Relazione
creation date: 2023-04-26 08:48
modification date: 2023-04-26 08:48
---
>[!def]
>dati $n$ insiemi $A_{1},A_{2},\dots,A_{n}$ si definisce relazione $n$-aria o di arità $n$ tra gli $n$ insiemi $A_{1},A_{2},\dots,A_{n}$ un qualunque sottoinsieme del prodotto cartesiano $A_{1} \times A_{2} \times \dots \times A_{n}$

Relazione vuota: $\varnothing$
Relazione universale su $A$: $\omega_{A}$ considera tutte le possibile $n$-uple ordinate

>[!def]
>Dati due [[insieme|insiemi]] $A$ e $B$, una relazione da $A$ in $B$ è:
>$$\mathfrak{R} \subseteq A \times B$$
>Diciamo che $a \in A$ è in relazione $b \in B$ se $(a,b) \in \mathfrak{R}$
>$$a \sim_\mathfrak{R} b\quad (a \sim b)$$
>
>Se $A = B$ allora $\mathfrak{R}$ è una relazione in $A$.


Casi speciali di relazione sono [[Geometria e algebra lineare/relazione di equivalenza]] e [[relazione di funzione]]

Ricordiamo la definizione di [[prodotto cartesiano]] degli $n$ insiemi $A_{1},A_{2},\dots,A_{n}$ l'[[Geometria e algebra lineare/insieme|insieme]]
$$ A_{1} \times A_{2} \times \dots \times A_{n} = \left\{ (a_{1},a_{2},\dots,a_{n}) | a_{i} \in A_{i}, i = 1,2,\dots,n \right\}  $$

Gli elementi del prodotto cartesiano sono $n$-uple ordinate ed è rilevante l'ordine in cui si considerano gli insiemi.
Se $n = 1$, il prodotto cartesiano si riduce ad $A_{1}$.

Si chiama relazione $R$ ($n$-aria o di arità $n$) fra gli $n$ insiemi $A_{1},A_{2},\dots,A_{n}$ un qualsiasi sottoinsieme di $A_{1} \times A_{2} \times \dots A_{n}$.

Siano $R \subseteq A_{1} \times A_{2} \times \dots A_{n}$ e $T \subseteq A_{1} \times A_{2} \times \dots A_{n}$ due relazioni fra gli $n$ insiemi $A_{1},A_{2},\dots,A_{n}$. Dalle definizioni insiemistiche si ha:
- $R \subseteq T$ sse per ogni $(a_{1},a_{2},\dots,a_{n}) \in R$ si ha $(a_{1},a_{2},\dots,a_{n}) \in T$
- $R = T$ sse $R \subseteq T$ e $T \subseteq R$
- $R \subset T$ sse $R \subseteq T$ ed esiste almeno una $n$-upla $(a_{1}',a_{2}',\dots,a_{n}') \in T$ tale che $(a_{1}',a_{2}',\dots,a_{n}') \notin R$
- $R \cap T = \{ (a_{1},a_{2},\dots,a_{n}) | (a_{1},a_{2},\dots,a_{n}) \in R\text{ e } (a_{1},a_{2},\dots,a_{n})\in T \}$
- $R \cup T = \{ (a_{1},a_{2},\dots,a_{n}) | (a_{1},a_{2},\dots,a_{n}) \in R \text{ o } (a_{1},a_{2},\dots,a_{n}) \in T \}$

Come è noto dalle nozioni sulla teoria degl insiemi, le definizioni di intersezione e unione si possono estendere ad una famiglia arbitraria di relazioni fra gli $n$ insiemi $A_{1},A_{2},\dots,A_{n}$. Pertanto se consideriamo una famiglia di relazioni $\{ R_{i} | i \in I \}$ fra $A_{1},A_{2},\dots,A_{n}$ dove l'indice $i$ varia in un qualsiasi [[insieme]] $I$, usiamo le seguenti notazioni
$$ \begin{align}
\bigcap_{i \in I} R_{i} &= \{ (a_{1},a_{2},\dots,a_{n}) | \forall i \in I\quad (a_{1},a_{2},\dots,a_{n}) \in R_{i}  \} \\
\bigcup_{i \in I} R_{i} &= \{ (a_{1},a_{2},\dots,a_{n}) | \exists i \in I\quad (a_{1},a_{2},\dots,a_{n}) \in R_{i}\}
\end{align} $$
Le operazioni fra relazioni godono ovviamente delle proprietà ben note per le operazioni insiemistiche.

### Proprietà
Valgono le proprietà dell'insiemistica:
- **associativa** per $\cap$ e $\cup$
- **commutativa** per $\cap$ e $\cup$
- **idempotenza**
- **leggi di assorbimento** $R \cup (R \cap T) = R, R \cap (R \cup T) = R$

Possiamo rappresentare una relazione su due insiemi finiti con un [[grafo di adiacenza]] o con una [[matrice di adiacenza]] 

### Operazioni
$R \subseteq A_{1} \times A_{2}$, $T \subseteq A_{2} \times A_{3}$ definiamo:
- $R \cdot T = \{ (a_{1},a_{3}) \in A_{1} \times A_{3} | \exists a_{2} \in A_{2} : (a_{1},a_{2}) \in R \ e\ (a_{2},a_{3}) \in T \}$
	- "Chiudo" la relazione, saltiamo $A_{2}$ 
	- Ovviamente non gode della **proprietà commutativa** 
		- prima di tutto si noti come anche solo perchè sia possibile gli insiemi devono coincidere
		- Anche con questa premessa la commutività fallisce, non si riesce a chiudere
	- Gode della **proprietà associativa**
	- Il prodotto si conserva per inclusione $R,T \subseteq A_{1} \times A_{2}; S,V \subseteq A_{2} \times A_{3} \implies R \subseteq T, S \subseteq V \implies RS \subseteq TV$

### - [[relazione inversa]]
### - [[relazione identica]]
### - [[relazioni binarie]]
### - [[Geometria e algebra lineare/relazione di equivalenza|relazione di equivalenza]]
### - [[relazione d'ordine]]
### - [[Funzioni]]


```anki
id: 1694790108974
deck: LeA
---
# Relazione
===
Dati due insiemi $n$ insiemi $A_1,A_2,...,A_n$ si definisce relazione di arità $n$ un qualsiasi sottoinsieme del prodotto scalare:
$A_1 \times A_2 \times ... \times A_n$
```
```anki
id: 1694790109058
deck: LeA
---
$R \subseteq T \iff$

$R = T \iff$

$R \subset T \ iff$

$R \cap T \iff$

$R \cup T \iff$
===
#todo
```

