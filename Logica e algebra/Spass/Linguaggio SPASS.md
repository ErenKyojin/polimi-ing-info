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
>[!oss]
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


> [!esempio]
> axioms vuota
> $\varnothing \vDash Cong$ -> Connv valide? Proof found si, completion found no

>[!esempio]
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