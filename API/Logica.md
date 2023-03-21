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
- $<$ corrisponde alla relazione di minore
- il [[Analisi 1/Funzioni/dominio|dominio]] delle variabili è un sottoinsieme finito di [[numeri naturali]] $[0,\dots,n-1]$, posizioni dei caratteri nella parola


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

## Logica monadica MFO

$w \in I$
$w \vDash \varphi$
$\vDash$ [[semantica]]

$a(x)$, $w = aab$, $a(0), a(1),b(2)$, monadica in quanto ha un solo argomento, in questo caso la posizione all'interno della stringa.

$\forall(x)$ significa per ogni posizione nella parola
$\exists x$ significa che esiste una posizione nella parola


valgono le classiche abbreviazioni
- $\phi_{1} \cap \phi_{2} := \neg(\neg \varphi_{1} \cup \neg\varphi_{2})$
- $\varphi_{1} \to \varphi_{2} := \neg\varphi_{1} \cup \neg\varphi_{2}$
- $\forall x(\varphi) := \neg Ex(\neg \varphi)$
- $x = y := \neg(x < y) \cap \neg( y < x)$
- $x \leq y := \neg(y < x)$
- costante 0: $x = 0 := \neg \exists y(y < x)$
- successore $\text{succ}(x,y) :=  x < y, \neg \exists z : (x < z \cap z < y)$
- costanti 1, 2, 3 come successori di 0, 1, 2
- 

