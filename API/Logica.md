---
aliases: 
creation date: 2023-03-15 08:46
modification date: 2023-03-15 08:46
---
Vedremo la logica per descrivere [[Linguaggio|linguaggi]] formali e per specificare il comportamento di programmi.


# Logica moderna del primo ordine
Questo tipo di logica ci permette di descrivere parole su un alfabeto $I$
$$\varphi::= a(x) | x < y | \neg \varphi | \varphi \cup \varphi | \exists x(\varphi) $$
- $a \in I$, introduciamo una lettera predicativa per ongi simbolo dell'alfabeto
- $<$ corrisponde alla [[relazione]] di minore
- il [[Analisi 1/Funzioni/dominio|dominio]] delle [[variabili]] è un sottoinsieme finito di [[numeri naturali]] $[0,\dots,n-1]$, posizioni dei caratteri nella parola


- $\varphi_{1} \cap \varphi_{2} := \neg(\neg \varphi_{1} \cup \neg \varphi_{2})$
- $\varphi_{1} \to \varphi_{2} := \neg \varphi_{1} \cup \neg \varphi_{2}$
- $\forall x (\varphi) := \neg \exists x (\neg \varphi)$
- $x = y := \neg(x < y) \cap \neg(y < x)$
- $x \leq y := \neg(y < x)$
- la costante 0: $x = 0 := \neg \exists y (y < x)$
- successore: $\text{succ}(x,y) := x < y \cap \neg \exists z(x < z \cap z < y)$
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
foral
$$

# Logica monadica MFO

$w \in I$
$w \vDash \varphi$
$\vDash$ [[semantica]]

$a(x)$, $w = aab$, $a(0), a(1),b(2)$, monadica in quanto ha un solo argomento, in questo caso la posizione all'interno della [[stringa]].

$\forall(x)$ significa per ogni posizione nella parola
$\exists x$ significa che esiste una posizione nella parola


valgono le classiche abbreviazioni
- $\varphi_{1} \cap \varphi_{2} := \neg(\neg \varphi_{1} \cup \neg\varphi_{2})$
- $\varphi_{1} \to \varphi_{2} := \neg\varphi_{1} \cup \neg\varphi_{2}$
- $\forall x(\varphi) := \neg Ex(\neg \varphi)$
- $x = y := \neg(x < y) \cap \neg( y < x)$
- $x \leq y := \neg(y < x)$
- costante 0: $x = 0 := \neg \exists y(y < x)$
- successore $\text{succ}(x,y) :=  x < y, \neg \exists z : (x < z \cap z < y)$
- costanti 1, 2, 3 come successori di 0, 1, 2
- $y = x + 1$ 
- #todo

>[!esempio]
>formula che è soddisfatta da tutte le parole in cui ogni $a$ è seguita da una $b$
> $$
> \forall x(a(x) \to \exists y(\text{succ}(x,y) \cap b(y)))
>$$

Un [[linguaggio]] sono tutte le **parole** che soddisfano una formula.

Con una formula chiusa non ci serve una valutazione:

## [[Linguaggio]] di una formula chiusa
$$L(\varphi) = \left\{ w \in I^* | w \vDash \varphi\right\}$$

>[!oss]
>La stringa vuota [[epsilon]] non puó soddisfare $q$, esistenziali, quindi soddisfa solo quantificazioni universali.



## Proprietà di MFO

Che linguaggi definisce questa logica? Si tratta di linguaggi molto deboli

I linguaggi esprimibili mediante MFO sono chiusi rispetto a [[unione]], [[intersezione]] e [[complemento]] (basta usare or, and e not)

>[!esempio]
>$L(\varphi) : L(\varphi_{3}) = L(\varphi_{1}) \cap L(\varphi_{2}) \iff \varphi_{3} = \varphi_{1} \land \varphi_{2}$
>analogo per unione (and)


In MFO non si puó esprimere il linguaggio $L_{P}$ fatto di tutte e sole le parole di lunghezza pari con $I = \left\{ a \right\}$ (alfabeto unario).

MFO è strettamente meno potente degli FSA, data una formula MFO costruire un FSA equivalente è sempre possibile e $L_{P}$ puó sempre essere riconosciuto tramite FSA

>[!esempio]
>$L_{pari}= \left\{ aa, aaaa, aaaaaa, \dots \right\}$
>$I = \left\{ a,b \right\}$
>$$\forall x(a(x) \implies \exists y(\text{succ}(x,y) \land b(y))) \land \forall x (b(x) \implies \exists y(\text{succ})(x,y) \land a(y)) \land a(0)$$
>$\qquad\land \exists x (b(x) \land \text{last}(x))$

Non abbiamo chiusura rispetto a $^*$:
>[!dim]
>$a(0) \land a(1) \land \text{last}(1)$ definisce il linguaggio $L_{p_{2}}$ fatto della sola parola $\left\{ aa \right\}$ di lunghezza 2
>Abbiamo che $L_{p} = L_{p_{2}}^*$


MFO definisce i cosidetti linguaggi **star free** o **aperiodici**, definibili tramite unione, intersezione, complemento e concatenazione di linguaggi finiti, linguaggi utili per la verifica dei programmi.

# Logica monaica del secondo ordine (MSO)
Per ottenere lo stesso potere espressivo degli [[Automa a stati finiti|FSA]] serve permettere di quantificare su predicati monadici
- Logica del primo ordine, quantificazioni su posizioni:
- Logica del secondo ordine, quantificazioni su insiemi di posizioni, dove un insieme di posizioni è codificato da un prediato monadico: $P(x)$ vuol  dire che $x$ è una posizione per cui vale $P(x)$

Ammettiamo quindi formule del tipo $\exists x(\varphi)$ dove $x$ è una variabile il cui dominio è l'[[GAL/insieme|insieme]] dei predicati monadici, per convenzione usiamo le lettere maiuscole per indicare variabili con [[Analisi 1/Funzioni/dominio|dominio]] l'[[GAL/insieme|insieme]] dei predicati monadici e lettere minuscole per indicare variabili sulle posizioni.

- minuscole per variabili del primo ordine
- maiuscle per variabili del secondo ordine

[[semantica#Semantica MSO]]

> [!esempio]
> Con questa logica possiamo dunque scrivere la formula per il [[linguaggio]] $L_{pari}$
> $\exists P(\forall x (\neg P(0) \land (\neg P(x+1)) \land a(x) \land (\text{ last }(x) \implies P(x))))$


## Da FSA a MSO

> [!esempio]
> ```tikz
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


# Logica per proprietà dei programmi

{Precondizione PRE}
Programma o frammento di programma
{Postocndizione POST}

Se vale PRE prima dell'esecuzione di P si vuole che P sia tale da far valere POST dopo la sua esecuzione