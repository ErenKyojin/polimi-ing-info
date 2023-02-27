# Insiemi
La scrittura
$$A = \{1,2,5\}$$
indica che l'insieme A è composto solo dagli elementi 1 2 e 5, ed è ben definito

>[!Oss]
>$$\{1,2,5\} = \{1,5,2\}$$
>Ciò che determina un insieme sono solo gli elementi che appartengono ad esso, l'ordine di questi quindi non conta.
>

### Relazioni tra insiemi
* [[Uguaglianza]]
* [[Inclusione]]


#### L'insieme vuoto
$\emptyset$ è l'insieme che non contiene alcun elemento e che per qualsiasi insieme A possiamo affermare che:
$$\emptyset \subseteq A$$
#### L'insieme delle parti
Fissiamo un insieme $X$, consideriamo ora l'insieme che ha per elementi tutti i sottoinsiemi di $X$. Questo insieme si chiama *insieme delle parti di X* e si indica col simbolo.

$$\mathcal{P}(X)$$
Ogni insieme $X$ ha due *sottoinsiemi banali* che sono lo stesso $X$ e il sottoinsieme vuoto $\emptyset$ 

>[!example]
>$$X = \{1,2,3\}$$
>$$\mathcal{P}(X) = \{\emptyset,\{1\},\{2\},\{3\},\{1,2\},\{2,3\},\{1,3\},X\}$$
>

# Insiemi numerici
- $\mathbb{N}$ è l'insieme dei *[[numeri naturali]]* 
- $\mathbb{Z}$ è l'insieme dei *[[numeri interi]]*
- $\mathbb{Q}$ è l'insieme dei *[[numeri razionali]]*
- $\mathbb{R}$ è l'insieme dei *[[numeri reali]]*
- $\mathbb{C}$ è l'insieme dei *[[numeri complessi]]*

$\mathbb N \subset \mathbb Z \subset \mathbb Q \subset \mathbb R$


### Operazioni su insiemi
- **Intersezione**: L'intersezione di due insiemi A, B è definita da:
 $$A \cap B = \{x | x \in A \text{ e } x \in B\}$$
   ossia l'insieme degli elementi che appartiene sia al primo che al secondo insieme
- **Unione**: L'unione di due insiemi A, B è definita da:
$$A \cup B = \{x|x \in A \text{ o } x \in B\}$$
Ossia l'insieme degli elementi che appartengono al primo o al secondo insieme in modo non esclusivo

- **Differenza:** La differenza tra due insiemi A, B è definita da:
$$ A \setminus B = \{x | x \in A \text{ e } x \notin B \}$$
ossia l'insieme degli elementi che appartengono al primo ma non al secondo insieme.

- **Complementare**: È un tipo particolare di differenza. Se $A \subseteq X$, il complementare di $A$ rispetto a $X$ è per definizione:
 $$\complement_\mathcal{X}A = X \setminus A $$
 Spesso $X$ è sottointeso: si usa allora il simbolo $A^c$ 

- **Prodotto cartesiano**: Dati due insiemi non necessariamente distinti $A$ e $B$, possiamo condierare un nuovo insieme cotituito da tutte le coppie ordinate $(a, b)$ con $a \in A$ e $b \in B$. Esso prende il nome di prodotto cartesiano di $A$ per $B$ e si indica col simbolo $A \times B$, osserviamo che $A \times B$ è diverso da $B \times A$. 

- L'interesezione insiemistica è definita tramite la congiunzione logica "e"
- L'unione insiemistica è definita mediante la disgiunzione logica "o"
- La differenza insiemistica e l'operazione di complementazione sono definite mediante il "non" (negazione logica).
Come si vede, linguaggio logico e linguaggio insiemistico sono due facce della stessa medaglia.

- Proprietà dell'intersezione:
	- Commutativa: $A \cap B = B \cap A$
	- Associativa: $A \cap (B \cap C) = (A \cap B) \cap C$
	- Idempotenza: $A \cap A = A$ 

- Proprietà dell'unione:
	- Commutativa: $A \cup B = B \cup A$
	- Associativa: $A \cup (B \cup C) = (A \cup B) \cup C$
	- Idempotenza: $A \cup A = A$

- Proprietà distributive (legano unione e intersezione):
	- $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$
	- $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$

- Leggi di de morgan (Legano il complementare con le altre operazioni):
	- $(A \cup B)^c = A^c \cap B^c$
	- $(A \cap B)^c = A^c \cup B^c$
	- $(A^c)^c = A$

- Operazioni con l'insieme vuoto e con l'insieme universo X:
	- $A \cap \emptyset = \emptyset$
	- $A \cap X = A$
	- $A \cup \emptyset = A$
	- $A \cup X = X$
	- $X^c = \emptyset$
	- $\emptyset^c = X$
