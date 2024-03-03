---
aliases: media
creation date: 2023-03-20 14:56
modification date: 2023-03-20 14:56
---

Per le variabili aleatorie discrete:
>[!def]
>Sia $X$ una variabile aleatoria discreta a valori in $S = \left\{ x_{k} : k \in I \right\}$ con $I \subset \mathbb{Z}$ e sia $p_{X}$ la sua densità. Se
> $$
> \sum_{k \in I} |x_{k}|p_{X}(x_{k}) < +\infty
>$$
>Si definisce edia di $X$ o valore atteso di $X$ il numero
> $$
>E(X) := \sum_{k \in I} x_{k}p_{X}(x_{k})
>$$
>
>Altrimenti si dice che $X$ non amette valore atteso

Il valore atteso è la media pesata della probabilità di ogni valore che X può assumere, ognuno pesato per la probabilità che X lo assuma.

Facciamo qualche osservazione su questa definizione. Se $X$ è una [[Variabile aleatoria]] discreta non è detto che $X$ abbia valore atteso. Questo dipende dalla [[polimi-ing-info/2.1 Analisi 2/convergenza|convergenza]] della [[Connessione in serie|serie]] $\sum_{k \in I} |x_{k}|p_{X}(x_{k})$.
Se $X$ assume un numero finito di valori questa serie è la somma finita sicuramente convergente e la media esiste, se la sommatoria precedente converge allora, passando dalla [[Convergenza assoluta]] alla [[polimi-ing-info/1.1 Analisi 1/Successioni/Convergenza|convergenza]] anche il valore atteso converge, ed quindi $E(x)$ è finito.


## Valore atteso di funzioni di variabili aleatorie
Sia $X$ una variabile aleatoria, g una funzione reale e $Y:= g(X)$. Ci poniamo il problema di calcolare $E(Y)$. Supponiamo che $X$ sia discreta, possiamo calcolare la densita $p_{Y}$ di $Y$ e affermare in seguito che $E(Y) = \sum_{y}yp_{Y}(y)$. In realtà se siamo interessati solamente a $E(Y)$ e non alla densità di $Y$ possiamo evitare di determinare esplicitamente $p_{Y}$.

>[!proposizione]
> Siano $X$ una variabile aleatoria discreta a valori in $S = \left\{ x_{k} : k \in I \right\}$ con $I \subset \mathbb{Z}$ e densità $p_{X}$. $g$ una funzione reale e $Y :=g(X)$. Se $\sum_{k \in I}|g(x_{k})|p_{X}(x_{k}) < +\infty$ allora $Y$ ammette valore atteso e
> $$
> E(Y) = \sum_{k \in I}g(x_{k})p_{X}(x_{k})
>$$
>Siano $X$ una variabile aleatoria assolutamente continua con densità $f_{X}$ e $g$ una funzione reale tale che $Y := g(X)$ è una variabile aleatoria. Se $\int _{\mathbb{R}}  \!|g(x)|p_{X}(x_{k}) \, \mathrm{d}x$ allora $Y$ ammette valore atteso e
> $$
> E(Y) = \int _{\mathbb{R}} \!g(x)f_{X}(x) \, \mathrm{d}x 
>$$


## Proprietà del valore atteso
Sia $X$ una variabile aleatoria definita sullo [[Spazio di probabilità]] $(\Omega,\mathcal{F},P)$.
1. se $P(X=c)=1 \implies E(X)=c$ 
2. se $X$ è una variabile aleatoria e $B \subset \mathbb{R}$ tale che $\left\{ X \in B \right\} \in \mathcal{F}$ allora $E(\mathbb{1}_{B}(X)) = P(X \in B)$
3. Se $X$ è una variabile aleatoria tale che $E(X)$ esiste e $\alpha$ è una costante allora $E(\alpha X)=\alpha E(X)$
4. Se $X$ è una variabile aleatoria, $g$ e $h$ sono funzioni tali che $E(g(X))$ e $E(h(X))$ esistono allora $E(g(X)+h(x)) = E(g(X)) + E(h(X))$a
	1. se $X$ è una variabile aleatoria e $a,b$ sono costanti, $E(aX + b) = aE(X) + b$ 
5. Se $X$ è una variabile aleatore tale che $P(X \geq 0) = 1$ e $E(X)$ esiste, allora $E(X) \geq 0$. Se in aggiunta $E(X) = 0$ allora $P(X =0)=1$
6. se $a,b \in \mathbb{R}$ sono tali che $P(a \leq X \leq b) = 1$allora $a \leq E(X) \leq b$
7. siano $g$ e $h$ funzioni tali che $E(g(X))$ e $E(h(x))$ esistono. Se $P(h(X) \geq g(x)) = 1$ allora $E(h(X)) \geq E(g(x))$
la prima proprietà ci dice chei l valore atteso di una costante è la costante stessa, la seconda sottolinia un legame tra valore atteso e probabilità, la 3 e la 4 dicono come si comporta il valore atteso con operazioni lineari, la 5 è la positività del valore atteso e la 6 è l'internalità del valore atteso

# Valore atteso di una [[Variabile aleatoria#^a0cf7e|variabile aleatoria continua]]

Considerata una variabile aleatoria continua $X$ con funzione di densità $f(x)$, definiamo il valore atteso come 
$$ E[x] = \int _{-\infty}^{\infty} \! xf(x) \, \mathrm{d}x  $$

Se $X$ è una variabile aleatoria con funzione di densità $f(x)$, per qualsiasi funzione $g$ a valori reali vale
$$ E[g(x)] = \int _{-\infty}^{\infty} \!g(x)f(x) \, \mathrm{d}x  $$

Se $Y$ è una variabile aleatoria non negativa:
$$ E[Y]= \int   \! P\{ Y > y \}\, \mathrm{d}y  $$

Se $a,b$ costanti
$$ E[aX + b] = aE[X] + b $$
analogamente a quanto visto per le variabili aleatoriee discrete.