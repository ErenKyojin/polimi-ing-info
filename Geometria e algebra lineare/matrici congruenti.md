Se una [[Forme quadratiche reali|forma quadratica]] reale è del tipo:
 $$ 
(*)\quad q(\mathbf{x}) =d_{1}x_{1}^2 + d_{2}x_{2}^2 + \dots + d_{n}x_{n}^2
$$
 La matrice associata è diagonale, è subito possibile stabilire il segno di $q(\mathbf{x})$ in base ai segni di $d_{1},\dots,d_{n}$


Esiste un cambiamento di coordinate chhe trasferisce una forma quadratica in una del tipo $(*)$ forma quadratica data in una del tipo $(*)$?
Sia $S \in M_{\mathbb{R}(n,n)}$ invertibile. Posto $\mathbf{x} = S\mathbf{y}$ si ha che
 $$ q(\mathbf{x}) = \mathbf{x}^TA\mathbf{x} = (S\mathbf{y})^T A (S\mathbf{y}) = \mathbf{y}^T (S^TAS)\mathbf{y}B = \overline{q}(\mathbf{y})$$
>[!def]
>Una matrice simmetrica $B \in M_{\mathbb{R}}(n,n)$ si dice congruente ad $A$ se esiste $S \in M_{\mathbb{R}(n,n)}$ invertibile tale che $B = S^TAS$


>[!oss]
>Due matrici simmetriche congruenti rappresentano la stessa forma quadratica rispetto a coordinate diverse, quindi hanno lo stesso segno. La congruenza è una [[Geometria e algebra lineare/relazione di equivalenza]]. In generale due matrici simili non sono congruenti e viceversa, Tuttavia se la matrice di passaggio è ortogonale allora $S^T = S^{-1}$ e $B =S^TAS = S^{-1}AS$ quindi $B$ è sia congruente che simile ad $A$. Il [[teorema spettrale]] cgarantisce l'esistena di una matrice di passaggio ortogoanle che fornisce il cambiamento di coordinate per trasformare una forma quadratica assegnata in una forma qudaratica del tipo $(*)$ ove $d_{1},\dots,d_{n}$ sono gli [[Autovalori e Autovettori|autovalori]] della matrice associata alla forma quadratica, quindi il segno di tali autovalori determina il segno della forma quadratica


>[!Proposizione]
>Sia $A \in M_{\mathbb{R}(n,n)}$ simmetrica e $q(\mathbf{x}) = \mathbf{x}^TA\mathbf{x} \forall \mathbf{x} \in \mathbb{R}$ allora
>1. se $\mathbf{v}$ è autovettore di $A$ allora $q(\mathbf{v}) = \lambda \|\mathbf{v}\|^2$
>2. se $\lambda_{\min}$ e $\lambda_{\max}$ sono gli autovalori minimo e massimo di $A$ allora $\lambda_{min} \|\mathbf{x}\|^2 \leq(\mathbf{x}) \leq \lambda_{\max}\|\mathbf{x}\|^2$ 
>
>>[!dim]
>
>>[!corollario]
>>Sia $A \in M_{\mathbb{R}(n,n)}$ simmetrica e $q(\mathbf{x}) = \mathbf{x}^TA\mathbf{x}$ allora
>>1. $q(\mathbf{x})$ è definita positiva (rispettivamente definita negativa) se e solo se tutti gli autovalori di $A$ sono strettamente positivi (rispettivamente negativi)
>>2. $q(\mathbf{x})$ è semidefinita positiva se e solo se gli autovalori di $A$ sono $\geq 0$ e uno di essi è nullo
>>3. $q(x)$ è indefinita se e solo se $A$ ha almeno un autovalore negativo ed almeno un autovalore positivo

Ci sono altri metodi per stabilire il segno di una forma quadratica reale:

### Regola di Cartesio
Sia $p(x) = a_{n}x^n + a_{n-1}x^{n-1} + \dots +a_{1}x + a_{0}$ un polinomio che ammette $n$ radici reali contate con la loro [[molteplicità]] algebrica.
1. Se $a_{0} \neq 0$ allora il numero di radici nulle è $0$, il numero di radici positive è uguale al numero di variazioni di segno nella successione dei coefficienti non nulli $a_{0},a_{1},\dots,a_{n},$ il numero di radici negative è: $n - \hat{n}$ con $\hat{n}$ numero di radici positive.
2. Se $a_{0} = 0$ allora $p(x) = x^kg(x)$ e $g(0) \neq 0$ con $1 \leq k \leq n$. $0$ è un radice con molteplicità algebrica $k$ e $g(x)$ è un polinomio con temrine noto diverso da ${0}$ a cui si puó applicare il primo caso per determinare il numero di radici positive

### Completamento dei quadrati
Vediamo come funziona con un esempio. Sia in $\mathbb{R}^3$:
$$ \begin{align}
q(x) &= x_{1}^2 + 2x_{2}^2 -3x_{1}x_{3} + x_{2}x_{3}  \\
&=(x_{1}^2 -3x_{1}x_{3}) + 2x_{2}^2 + x_{2} x_{3} \\
&=\left( x_{1}^2 - 3x_{1}x_{3} + \frac{9}{4}x_{3}^2 \right) - \frac{9}{4}x_{3}^2 + 2x_{2}^2 + x_{2}x_{3} \\
&=\left( x_{1} -\frac{3}{2}x_{3} \right)^2 + \left( \sqrt{ 2 }x_{2}+\frac{x_{3}}{2\sqrt{ 2 }}  \right)^2 - \frac{19}{8}x_{3}^2 \\
&= \hat{x}_{1}^2 + \hat{x}_{2}^2 - \frac{19}{8}\hat{x}_{3}^2
\end{align}$$
$q(\mathbf{x})$ è indefinita. Consideriamo il caso particolare in cui non ci sono termini al quadrato: $q(\mathbf{x}) = x_{1}x_{2}+x_{2}x_{3}$
Applichiamo il cambiamento di coordinate:
$x_{1} = \hat{x}_{1} + \hat{x}_{2}, x_{2} = \hat{x}_{1}-\hat{x}_{2}, x_{3}=\hat{x}_{3}$, quindi otteniamo:
$$ \begin{align}
\hat{q}(\hat{\mathbf{x}}) &= \hat{x}_{1}^2 - \hat{x}_{2}^2 + (\hat{x}_{1} - \hat{x}_{2})\hat{x}_{3} = \\
&\vdots \\
&= (\hat{x}_{1} + \hat{x}_{3/2})^2 - (\hat{x}_{2} + \hat{x}_{3 / 2})^2
\end{align} $$
$q(\mathbf{x})$ è indefinita



### metodo dei minori di nord ovest

* Caso $n = 2$, $A = \begin{bmatrix}a & b\\b & c\end{bmatrix}$ allora
	1. Se $a > 0$ e $\det(A) > 0 \implies A$ definita positiva
	2. Se $a < 0$ e $\det(A) >0 \implies A$ definita negativa
	3. Se $\det(A) < 0 \implies A$ indefinita
	4. Se $a + c \geq 0$ e $\det(A)=0 \implies A$ è semidefinita positiva
	5. Se $a + c \leq 0$ e $\det(A) = 0 \implies A$ è semidefinita negativa

* Caso $n \geq 3$. Data $A \in M_{\mathbb{R}(n,n)}$, un minore principale è il determinante di una sottomatrice che si ottiene eliminando da $A$ le stesse righe e colonne. Un minore principale di nord-ovest di ordine $k$ è il determinante della sottomatrice che si ottiene elmininando le ultime $n -k$ righe e colonne di $A$

>[!proposizione] Segno di una matrice e minori principali
>Sia $A \in M_{\mathbb{R}(n,n)}$ simmetria allora
>1. $A$ è definita positiva $\iff$ tutti i minori principali di N.O. sono positivi
>2. $A$ è semidefinita positiva se tutti i minori principali sono $\geq 0$ ed almeno un minore di N.O. è nullo
>3. $A$ è semidefinita positiva se tutti i minori principali sono $\geq 0$ ed almeno un minore di N.O. è nullo
>4. $A$ è semidefinita negativa se i minori principali di ordine $k$ sono nulli e hanno segno $(-1)^k$ ed almeno un minore di N.O. è nullo


>[!teorema]
>1. Due matrici simmetriche sono congruenti se e solo se hanno lo stesso numero di autovalori negativi
>2. Una matrice simmetrica $A \in M_{\mathbb{R}(n,n)}$ che abbia $t$ autovalori negativi, $s$ autovalori negativi e dunque $n-s-t$ autovalori nulli è congruente ad una matrice diagonale di ordine $n$ con:
>	* 1 nei primi $s$ termini della diagonale
>	* -1 nei successivi $t$ termini della diagonale principale
>	* 0 nei restanti $n-t-s$ termini della diagonale principa;e
>
>La terna $(s,t,n-t-s)$ si chiama **segnatura** di $A$ o della forma quadratica $q(\mathbf{x}) = \mathbf{x}^TA\mathbf{x}$. Se $\sigma(A) = (s,t,n-t-s)$ allora esiste $S \in M_{\mathbb{R}(n,n)}$ invertibile tale che posto $\mathbf{x} = S\mathbf{y}$ si ha:
> $$ q(\mathbf{x}) = \mathbf{x}^TA\mathbf{x} = (S\mathbf{y})^TA(S\mathbf{y}) = \mathbf{y}^T S^T AS \mathbf{y} = y_{1}^2 + \dots + y_{s}^2 - y_{s+1}^2 - \dots - y^2_{s+t}$$

>[!oss]
> Determinare la segnatura di una matrice significa simmetrica significa stabilire il suo segno. Data $A \in M_{\mathbb{K}(n,n)}$ simmetrica:
> 1. $A$ è definita positiva se $\sigma(A) = (n,0,0)$
> 2. $A$ è definita negativa se $\sigma(A) = (0,n,0)$
> 3. $A$ è semidefinita positiva se $\sigma(A) = (s,0,n-s)$ con $s < n$ con $t < n$
> 4. $A$ è indefinita se $\sigma(A) = (s,t,n-t-s)$ con $s > 0$ e $t > 0$


>[!oss]
>Il sottospazio generato dagli autovettori associati ed autovalori positivi è tale per cui $q(\mathbf{x})$ ristretta a questo sottospazio è positiva. La dimensione di tale sottospazio è $s$. Non esistono sottospazi che abbiano dimensione maggiore di $s$ sopra i quali $q(\mathbf{x})$ è definita positiva. Tuttavia il sottospazio di dimensione $s$ sopra cui $q(\mathbf{x})$ ë definita positiva puó non essere unico.
>Ad esempio: $q(x,y) = x^2 - y^2$ è definita positiva su tutte le rette $y = mx$ con $|m| < 1 (q(x,mx)=(1-m^2)x^2)$. Un ragionamento analogo vale per il sottospazio generato dagli autovettori relativi ad autovalori negativi 