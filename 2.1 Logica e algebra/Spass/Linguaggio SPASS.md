---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Le istruzioni terminano col punto.
SPASS è composto da 4 liste, contenute in un comando `begin_problem("nome")` e terminate dal comando `end_problem`:
- `list_of_descriptions.`
	- `name({* ... *})`
	- `%commento`
- `list_of_symbols()`.
	- `functions`
	- `predicates`
- `list_of_formulae(axioms)`
- `list_of_formulae(conjectures)`

```SPASS
begin_problem("a").

list_of_descriptors.

list_of_symbols.
	%%%%%%%%%%%%%%%%%%%%%%%%%%%
	%singole lettere come nome (forse multiple)
	%numeri come arità
	%%%%%%%%%%%%%%%%%%%%%%%%%%%
	functions[(nome_1, arità),(nome_2, arità),...].
	predicates[(nome_1, arità), (...,...),....].
end_of_list.

end_problem.

```
>[!remark]
>Sembrano mancare le costanti, in quanto formalmente sono funzioni di arità zero


Funzioni e predicati possono essere insiemi vuoti, inoltre vuole prima le funzioni e poi i predicati


# Formule
notazione prefissa
- $\sim A \to$ `not(A)`
- $A \land B \to$ `and(A,B)` e `and(A,B,C)`
- $A \lor B \to$ `or(A,B)` e `or(A,B,C)`
- $A \implies B \to$ `implies(A,B)`
- $A \iff B \to$ `equiv(A,B)`
- $\forall x \to$ `forall([x], ...)`
- $\exists x \to$ `exists([x], ...)`
- $\exists x \exists y \exists z \to$ `exists([x,y,z], ...)`
- $a = b \to$`equal(A,B)`

`PProblem=1` importante(?)


# Output
`sk c5` <- skolemizzazione

`SPASS beiseite`
- proof found
- completion found


> [!example]
> axioms vuota
> $\varnothing \vDash Cong$ -> Connv valide? Proof found si, completion found no

>[!example]
>cong vuota
>$\text{ axioms  }\vdash \square$ -> axioms insodd
>completion found, prrof no


# Esercizi
verificare che siano tautologie (valide)
(3 di logica proposizionale, 1 di logica del primo orine)

1. $\sim(\sim P) \implies P$
2. $P \lor \sim(\sim P)$
3. $(P \implies Q) \iff \sim P \lor Q$
4. $\exists x \forall y (F(x) \implies F(y))$
5. tutti gli uomini sono animali e alcuni animali sono carnivori, allora alcuni uomini sono carnivori
	- A(x) x è animale
	- C(y) x è carnivoro
	- U(x) x è umano
6. ogni barbiere rade tutti coloro che non si radono da soli; nessun barbiere rade alcuna persona che si rade da sola
	1. $\forall x (B(x) \implies \forall y(\sim R(y,y) \implies R(x,y))$
	2. $\sim \exists x (B(x) \land \exists y(B(y,y) \implies R(x,y))$

...
#### Esercizio 7
una rete di comunicazione è fatta in modo tale da avere esattamente un nodo d'inizio, ossia un nodo con almeno un collegamento in uscita ma nessun collegamento in entrata, ed almeno un nodo di fine, ossia un nodo con almeno un collegamento in entratà ma nessuno in uscita.
Nodi che non sono ne d'inizio nè di fine si dicono nodi centrali, mentre un hub è un nodo collegato in entrata e uscita con tutti gli altri nodi centrali.
Ogni hub è centrale?


- I(x) x è nodo iniziale
- L(x,y) collegamento tra x e y

$\exists x (  I(x) \land \forall y (I(y) \implies y = x)$
$\forall x (I (x) \iff (\exists y(L(x,y) \land \sim \exists y(L(y,x)))))$
$\forall (x)(F(x) \iff( \exists y(L(y,x))\land\sim \exists y(L(x,y))))$
$\exists x(F(x))$
$\forall x(C(x) \iff (\sim I(x) \land F(x))$
$\forall y(C(y) \implies (L(x,y) \land L(y,x)))$
$\forall x(H(x) \implies C(x))$