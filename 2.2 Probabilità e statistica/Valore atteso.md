---
aliases: media
creation date: 2023-03-20 14:56
modification date: 2023-03-20 14:56
---

Per le variabili aleatorie discrete:
>[!definition]
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

>[!proposition]
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

la prima proprietà ci dice che il valore atteso di una costante è la costante stessa, la seconda sottolinia un legame tra valore atteso e probabilità, la 3 e la 4 dicono come si comporta il valore atteso con operazioni lineari, la 5 è la positività del valore atteso e la 6 è l'internalità del valore atteso

### Valore atteso della somma di variabili aleatorie
Il valore atteso della somma di un numero finito di variabili aleatorie è uguale alla somma dei loro valori attesi

Sia $p(s) = P(\{ s \})$ con $s \in \Omega$ la probabilità che l'esperimento abbia $s$ come esito, per gli assiomi della probabilità abbiamo che:
$$ P(A) = \sum_{s \in A}p(s) $$
In particolare, se $A = \Omega$
$$ 1 = \sum_{s \in S} p(s) $$
Consideriamo $X$ variabile aleatoria con valore atteso $E[X]$, $X(s)$ è il valore di $X$ quando avviene $s$ vale la seguente
>[!proposition]
>$$ E[X] = \sum_{s \in S} X(s)p(s) $$
>
>>[!dim]
>>$X$ assumerà valore $x_{i}$, possiamo definire quindi l'evento $S_{i} = \{ s : X(s) = x_{i} \}$, avremo:
>>$$ \begin{align}
E[X] &= \sum_{i} x_{i}P\{ X=x_{i} \} \\
&= \sum_{i}x_{i}P(S_{i}) \\
&=\sum_{i}x_{i}\sum_{s \in S_{i}}p(s) \\
&=\sum_{i}\sum_{s \in S}x_{i}p(s) \\
&=\sum_{i}\sum_{s \in S}X(s)p(s) \\
&=\sum_{s \in S} X(s)p(s)
\end{align} $$
>dove $S$ è l'unione di tutti gli eventi disgiunti $S_{1},S_{2},\dots$

>[!corollary]
>siano $X_{1},\dots,X_{n}$ variabili aleatorie
>$$ E\left[ \sum_{i}X_{i} \right] = \sum_{i}E[X_{i}] $$
>
>>[!dim]
>>poniamo $Z = X_{1} + X_{2} + \dots + X_{n} = \sum_{i} X_{i}$, avremo quindi
>>$$ \begin{align}
E[Z] &= \sum_{s \in S} Z(s)p(s) \\
&= \sum_{s \in S} (X_{1}(s) + X_{2}(s) +\dots + X_{n}(s))p(s) \\
&=\sum_{s \in S} X_{1}(s)p(s) + \sum_{s \in S} X_{2}(s)p(s) + \dots + \sum_{s \in S} X_{n}(s)p(s) \\
&=E[X_{1}] + E[X_{2}] + \dots + E[X_{n}]
\end{align} $$





# Valore atteso di una [[Variabile aleatoria#^a0cf7e|variabile aleatoria continua]]

> [!definition]
> Considerata una variabile aleatoria continua $X$ con funzione di densità $f(x)$, definiamo il valore atteso come 
> $$ E[x] = \int _{-\infty}^{\infty} \! xf(x) \, \mathrm{d}x  $$ ^9f67c7

Se $X$ è una variabile aleatoria con funzione di densità $f(x)$, per qualsiasi funzione $g$ a valori reali vale
$$ E[g(x)] = \int _{-\infty}^{\infty} \!g(x)f(x) \, \mathrm{d}x  $$ ^93c68b

Se $Y$ è una variabile aleatoria non negativa:
$$ E[Y]= \int   \! P\{ Y > y \}\, \mathrm{d}y  $$

Se $a,b$ costanti
$$ E[aX + b] = aE[X] + b $$
analogamente a quanto visto per le variabili aleatoriee discrete.


# Valore atteso di funzioni di vettori aleatori
Siamo interessati a calcolare il valore atteso di una variabile $Y$ tale che $Y := g(\mathbf{X})$, dove $\mathbf{X}$ è un vettore aleatorio e $Y$ è una variabile aleatoria.

>[!proposition]
>Sia $\mathbf{X}$ un vettore aleatorio **discreto**, sia $g : \mathbb{R}^n \to \mathbb{R}$ e sia $Y := g(\mathbf{X})$, se abbiamo che $\sum_{\mathbf{x} \in S} |g(\mathbf{x})|p_{\mathbf{X}}(\mathbf{x}) < \infty$, allora:
>$$ E(Y) =\sum_{\mathbf{x} \in S} g(\mathbf{x})p_{X}(\mathbf{x}) $$


>[!proposition]
>Sia $\mathbf{X}$ vettore aleatorio **assolutamente continuo** con densità $f_{\mathbf{X}}$, considerati $g : \mathbb{R}^n \to \mathbb{R}$ e $Y = g(\mathbf{X})$ variabile aleatoria. Se abbiamo che $\int _{\mathbb{R}^n} \!|g(x_{1},\dots,x_{n})|f_{\mathbf{X}}(x_{1},\dots,x_{n}) \, \mathrm{d}x_{1}\dots x_{n} < \infty$ allora
>$$ E(Y) =\int _{\mathbb{R}^n} \! g(x_{1},\dots,x_{n})f_{\mathbf{X}}(x_{1},\dots,x_{n})\, \mathrm{d}x_{1}\dots x_{n}  $$


>[!cor]
>$X_{1}$ e $X_{2}$ variabili aleatorie definite sul medesimo spazio di probabilità e che ammettono media. ALlora $X_{1} + X_{2}$ ammette media e si ha
>$$ E(X_{1} + X_{2}) = E(X_{1}) + E(X_{2}) $$

in generale la media della somma di $n$ variabili aleatorie dipende unicamente dalle densità marginale.

> [!corollary]
> $X_{1}$ ed $X_{2}$ variabili aleatorie indipendenti che ammettono media. Allora anche $X_{1}X_{2}$ ammette media e
> $$ E(X_{1}X_{2}) =E(X_{1})E(X_{2}) $$

>[!corollary]
>Se $X_{1}$ e $X_{2}$ hanno varianza finita, rispettivamente $\text{var}(X_{1}), \text{var}(X_{2})$ allora $X_{1} + X_{2}$ ha varianza finita e vale che
>$$ \text{var}(X_{1} + X_{2}) = \text{var}(X_{1}) + \text{var}(X_{2}) + 2E[(X_{1} - E(X_{1}))(X_{2} - E(X_{2}))] $$
>se inoltre $X_{1}$ ed $X_{2}$ sono indipendenti, allora
>$$ \text{var}(X_{1} + X_{2}) = \text{var}(X_{1}) + \text{var}(X_{2})$$

^da9cb5