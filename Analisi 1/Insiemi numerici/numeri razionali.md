# Numeri razionali
Facciamo il [[Analisi 1/Insiemi numerici/Insieme|prodotto cartesiano]]  $\mathbb Z \times(\mathbb Z \setminus 0) = \{(r,s);r,s \in \mathbb Z; s \neq 0\}$ 

Attraverso la [[Analisi 1/Insiemi numerici/Relazione di equivalenza]]
$(r,s) \equiv (r',s')\quad\quad r\cdot s' = r'\cdot s$
$(r,s) \rightarrow \frac{r}{s}$

Le cui classi di equivalenza si definiscono in $\mathbb Q$
E riportando sempre alla classe di equivalenza
$$\frac{2}{5} \equiv \frac{4}{10} \equiv \frac{-2}{-5}$$
$$\frac{8}{4}\equiv\frac{6}{3}\equiv2$$
### Operazioni
- Somma
$$\frac{r}{s} + \frac{p}{q} = \frac{rq+ps}{sq}$$
- Prodotto
$$\frac{r}{s}\cdot\frac{p}{q} = \frac{rp}{sq}$$
- Reciproco
$$\frac{r}{s}\cdot\frac{s}{r} = \frac{rs}{rs}=1 \Leftrightarrow r \neq 0$$

## Proprietà di somma e prodotto in $\mathbb Q$

#### Somma
- Associativa
	$(a+b) + c = a + (b+c)$
- Commutativa
	$a+b =b + a$
- $\exists$ elemento neutro $= 0$
- $\exists$ opposto di ogni elemento

#### Prodotto
- Associativa
	$(a\cdot b)\cdot c = a\cdot(b\cdot c)$
- Commutativa
	$a\cdot b = b \cdot a$
- $\exists$ Elemento neutro $= 1$
- $\exists$ opposto di ogni elemento $\neq 0$
- Distributiva
	$a\cdot(b+c) = ab + ac$


Un #campo con queste 9 proprietà è detto #campo numerico

>[!] oss
>$\mathbb Z$ e $\mathbb N$ **<u>non</u>** sono campi numerici

## Relazione d'ordine in $\mathbb Q$
$a = \frac{m}{n},\quad b=\frac{r}{s}$
$$\begin{flalign}a \leq b \Leftrightarrow m\cdot s\leq r \cdot n \\
a \lt b \Leftrightarrow m\cdot s \lt r\cdot n\end{flalign}$$
Avendo una relazione d'ordine definita $\mathbb Q$ è un [[Analisi 1/Insiemi numerici/Campo]]

## Teoremi riguardanti $\mathbb Q$
- Proprietà di archimede:
	Dati $a, b \in \mathbb Q$ positivi $\Rightarrow$ $\exists n \in \mathbb N | n\cdot a > b$
- $\mathbb Q$ è denso:
	Dati $a,b \in \mathbb Q, a < b\quad\quad \exists\ \infty\ q \in \mathbb Q | a < q < b$
- Se $\mathbb k$ è un campo ordinato esiste un sottoinsieme di $\mathbb k$ isomorfo a $\mathbb Q$
