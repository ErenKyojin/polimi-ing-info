---
aliases: 
creation date: 2023-03-15 08:46
modification date: 2023-03-15 08:46
---
Vedremo la logica per descrivere [[Linguaggio|linguaggi]] formali e per specificare il comportamento di programmi.


# Logica monadica del primo ordine
Questo tipo di logica ci permette di descrivere parole su un alfabeto $I$
$$\varphi::= a(x) | x < y | \neg \varphi | \varphi \cup \varphi | \exists x(\varphi) $$
- $a \in I$, introduciamo una lettera predicativa per ogni simbolo dell'alfabeto
- $<$ corrisponde alla [[Relazioni|Relazione]] di minore
- il [[polimi-ing-info/1.1 Analisi 1/Funzioni/dominio|dominio]] delle [[variabili]] è un sottoinsieme finito di [[numeri naturali]] $[0,\dots,n-1]$, posizioni dei caratteri nella parola


- $\varphi_{1} \land \varphi_{2} := \neg(\neg \varphi_{1} \cup \neg \varphi_{2})$
- $\varphi_{1} \to \varphi_{2} := \neg \varphi_{1} \lor \neg \varphi_{2}$
- $\forall x (\varphi) := \neg \exists x (\neg \varphi)$
- $x = y := \neg(x < y) \land \neg(y < x)$
- $x \leq y := \neg(y < x)$
- la costante 0: $x = 0 := \neg \exists y (y < x)$
- successore: $\text{succ}(x,y) := x < y \land \neg \exists z(x < z \land z < y)$
- Costanti 1, 2, 3 successore di 0,1,2


### Interpretazione come parola sull'alfabeto $I$
Data una parola $w \in I^*$ ed un simbolo $a \in I$
$a(x)$ è vero se e solo se l'$x$-esimo simbolo di $w$ è $a$.

Formula che è soddisfatta da tutte e sole le parole il cui primo simbolo è $a$
$$
 \exists x ( x = 0 \cap a(x))
$$
Formula che è soddisfatta da tutte le parola in cui ogni $a$ è seguita da una $b$
$$
\forall x (a(x) \to \exists y (\text{succ(x,y)} \land b(y)))
$$
Con le seguenti abbreviazioni:
- $y = x + 1$ per $\text{succ}(x)$
- se $k$ è una costante $>1$ $y = x + k$ 
	- per $\exists z_{1} \dots z_{k-1}(y = z_{k-1} + 1 \land z_{k-1} = z_{k-2} + 1 \dots \land z_{1} = x + 1)$
- $y = x - 1$ per $\text{succ}(y,x)$ cioè $x = y + 1$
- $y = x - k$ per $x = y + k$
- $\text{last}(x)$ per $\neg \exists y (x < y)$

- Parole in cui l'ultimo simbolo è $a$: $\exists x (\text{last}(x) \land a(x))$
- Parole, di almeno 3 simboli, in cui il terzultimo simbolo è $a$:
	- $\exists x(a(x) \land \exists y(y = x + 2 \land \text{last}(y)))$

>[!remark]
>Non c'è un modo facile per passare da una formula in logica del primo ordine partendo da un linguaggio, tuttavia è utile tenere a mente che
>- quando è importante **come si susseguono le lettere** in un linguaggio si possono sfruttare formule con stringhe decomposte nella concatenazione di sottostringhe di altri linguaggi
>- Quando è importante **contare** le occorrenze di alcune lettere è utile definire funzioni ausiliarie che contano i simboli di cui abbiamo interesse

# Logica monadica MFO

$w \in I$, $w \vDash \varphi$
con $\vDash$ [[semantica]]

$a(x)$, $w = aab$, $a(0), a(1),b(2)$, monadica in quanto ha un solo argomento, in questo caso la posizione all'interno della [[stringa]].

$\forall(x)$ significa per ogni posizione nella parola
$\exists x$ significa che esiste una posizione nella parola


>[!example]
>formula che è soddisfatta da tutte le parole in cui ogni $a$ è seguita da una $b$
> $$
> \forall x(a(x) \to \exists y(\text{succ}(x,y) \cap b(y)))
>$$

Un [[Linguaggio]] sono tutte le **parole** che soddisfano una formula.

Con una formula chiusa non ci serve una valutazione:

## [[Linguaggio]] di una formula chiusa
$$L(\varphi) = \left\{ w \in I^* | w \vDash \varphi\right\}$$

>[!remark]
>La stringa vuota [[Epsilon]] non puó soddisfare [[Quantificatori|quantificazioni]] esistenziali, quindi soddisfa solo quantificazioni universali.


## Proprietà di MFO

Che linguaggi definisce questa logica? Si tratta di linguaggi molto deboli

I linguaggi esprimibili mediante MFO sono chiusi rispetto a [[Unione]], [[Intersezione]] e [[complemento]] (basta usare or, and e not)

>[!example]
>$L(\varphi) : L(\varphi_{3}) = L(\varphi_{1}) \cap L(\varphi_{2}) \iff \varphi_{3} = \varphi_{1} \land \varphi_{2}$
>analogo per unione (and)


In MFO non si può esprimere il linguaggio $L_{P}$ fatto di tutte e sole le parole di lunghezza pari con $I = \left\{ a \right\}$ (alfabeto unario).

MFO è strettamente meno potente degli FSA, data una formula MFO costruire un FSA equivalente è sempre possibile e $L_{P}$ può sempre essere riconosciuto tramite FSA

>[!example]
>$L_{pari}= \left\{ aa, aaaa, aaaaaa, \dots \right\}$
>$I = \left\{ a,b \right\}$
>$$\forall x(a(x) \implies \exists y(\text{succ}(x,y) \land b(y))) \land \forall x (b(x) \implies \exists y(\text{succ})(x,y) \land a(y)) \land a(0)$$
>$\qquad\land \exists x (b(x) \land \text{last}(x))$

Non abbiamo chiusura rispetto a $^*$:
>[!dim]
>$a(0) \land a(1) \land \text{last}(1)$ definisce il linguaggio $L_{p_{2}}$ fatto della sola parola $\left\{ aa \right\}$ di lunghezza 2
>Abbiamo che $L_{p} = L_{p_{2}}^*$


MFO definisce i cosiddetti linguaggi **star free** o **aperiodici**, definibili tramite unione, intersezione, complemento e concatenazione di linguaggi finiti, linguaggi utili per la verifica dei programmi.

# Logica monadica del secondo ordine (MSO)
Per ottenere lo stesso potere espressivo degli [[Automa a stati finiti|FSA]] serve permettere di quantificare su predicati monadici
- Logica del primo ordine, quantificazioni su posizioni:
- Logica del secondo ordine, quantificazioni su insiemi di posizioni, dove un [[insieme]] di posizioni è codificato da un predicato monadico: $P(x)$ vuol  dire che $x$ è una posizione per cui vale $P(x)$

Ammettiamo quindi formule del tipo $\exists x(\varphi)$ dove $x$ è una variabile il cui dominio è l'[[insieme|insieme]] dei predicati monadici, per convenzione usiamo le lettere maiuscole per indicare variabili con [[polimi-ing-info/1.1 Analisi 1/Funzioni/dominio|dominio]] l'[[insieme|insieme]] dei predicati monadici e lettere minuscole per indicare variabili sulle posizioni.

- minuscole per variabili del primo ordine
- maiuscole per variabili del secondo ordine

[[semantica#Semantica MSO]]

> [!example]
> Con questa logica possiamo dunque scrivere la formula per il [[Linguaggio]] $L_{pari}$
> $\exists P(\forall x (\neg P(0) \land (\neg P(x+1)) \land a(x) \land (\text{ last }(x) \implies P(x))))$


## Da FSA a MSO

In generale, grazie alle quantificazione del secondo ordine è possibile trovare, per ogni FSA, una formula MSO equivalente
> [!example]
>```tikz
> \usetikzlibrary{automata, arrows.meta,positioning}
> \begin{document}
> \begin{tikzpicture}[scale = 2,every node/.style={scale=1.5}, node distance = 3cm]
> \node(q0)[state,initial, initial left, initial text = {}]{$q0$};
> \node (q1) [state, right = of q0]{$q1$};
> \node (q2) [state,accepting, below left = of q1]{$q2$};
> \path [-stealth, thick,scale = 2]
>  (q0) edge [loop above] node{c}()
>  (q0) edge node[above] {b}(q1)
>  (q0) edge node[right]{a}(q2)
>  (q1) edge node[below]{a}(q2)
>  (q2) edge [loop below]node{a}()
>  (q2) edge [bend left] node[left]{c}(q0);
> \end{tikzpicture}
> \end{document}
> ```
> 

## Da MSO a FSA
Data una formula MSO $\varphi$, è possibile costruire un FSA che accetta esattamente il linguaggio L definito da $\varphi$ (Teorema di Büchi-Elgot-Trakhtenbrot), quindi i linguaggi definibili da formule MSO coincide con i linguaggi regolari.

# Logica per proprietà dei programmi
- Specifica di un algoritmo di ricerca:
	- La variabile logica found deve essere vera se e solo se esiste un elemento dell'array $a$ di $n$ elementi uguale all'elemento cercato $x:$
	  $$ found \leftrightarrow  \exists i (1 \leq i \leq n \land a[i] = x) $$
- Specifica di un algoritmo di inversione di un array:
  $$ \forall i (1 \leq i \leq n \to b[i] = a[n - i + 1]) $$


{Precondizione: PRE}
Programma o frammento di programma: P
{Postcondizione: POST}

Se vale PRE prima dell'esecuzione di P si vuole che P sia tale da far valere POST dopo la sua esecuzione

>[!example]
>Ordinamento di un array di $n$ elementi senza ripetizioni
>$\left\{ \neg i,j (1 \leq i \leq n  \land 1 \leq j \leq n \land i \neq j \land a[i] = a[j] = a[j]) \right\}$
>ORD
>$\left\{ \forall i(1 \leq i < n \to a[i] \leq a[i + 1])  \right\}$
>è una specifica adeugata, pensiamo all'analogia specifica = ocontratto
>```c
>for(int i = 1; i <= n, i++)
>	a[i] = i;
>```
>Rispetta il contratto, ma butta via tutti gli elementi dell'array, il problema è nel contratto.
>$\left\{ \neg i,j (1 \leq i \leq n  \land 1 \leq j \leq n \land i \neq j \land a[i] = a[j] = a[j]) \right\}$
>ORD
>$\{ \forall i(1 \leq i < n \to a[i] \leq a[i + 1])  \land$
>$\forall i(1 \leq i \leq n \to \exists j(1 \leq j \leq n \land a[i] = b[j])) \land$
>$\forall j(1 \leq j \leq n \to \exists i(1 \leq i \leq n \land a[i] = b[j] ))\}$




