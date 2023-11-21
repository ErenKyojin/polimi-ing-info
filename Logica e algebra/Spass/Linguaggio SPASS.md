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

```SPASS
list_of_descriptors.

list_of_symbols.
	%%%%%%%%%%%%%%%%%%%%%%%%%%%
	%singole lettere come nome (forse multiple)
	%numeri come arità
	%%%%%%%%%%%%%%%%%%%%%%%%%%%
	functions[(nome_1, arità),(nome_2, arità),...]  
	predicates[(nome_1, arità), (...,...),....]
end_of_list
```
>[!oss]
>Sembrano mancare le costanti, in quanto formalmente sono funzioni di arità zero
>Funzioni e predicati possono essere insiem
>