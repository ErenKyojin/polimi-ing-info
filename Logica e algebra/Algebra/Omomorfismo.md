---
aliases: Omomorfismi, morfismi, morfismo
creation date: 2023-12-05
---


> [!def] 
> Date due strutture algebrica $\left< A_{1},\Omega_{2} \right>,\left< A_{2},\Omega_{2} \right>$ [[Strutture simili|simili]], si dice **omorfismo** di $\left< A_{1},\Omega_{1} \right>$ in $\left< A_{2},\Omega_{2} \right>$ una funzione $f$ di $A_{1}$ in $A_{2}$ che conserva le operazioni.
> Un omorfismo $f$ si dice **monomorfismo** se $f$ è una funzione iniettiva
> Un omorfismo $f$ si dice **epiformisfmo** se $f$ è una funzione suriettiva
> Un omorfismo $f$ si dice **isomorfismo** se $f$ è una funzione biunivoca


>[!esempio]
>$f : \left< \mathbb{N}_{0} , + \right> \to \left< R_{0}, + \right>$
>$f: n \mapsto 2n$
>devo controllare che
>$f(n_{1} + n_{2}) = f(n_{1}) + f(n_{2})$
>$2(n_{1}+n_{2})=2n_{1} + 2n_{2} \quad\forall n_{1}n_{2} \in \mathbb{N}_{0}$
>Si per il +, non lo sarebbe ad esempio per il $\cdot$
>
>Se avessi un monomio al posto del gruppo devo controllare **anche** che si conservi l'operazione 0-aria, ossia l'elemento neutro

>[!oss]
>Consideriando tre strutture simili $\left< A_{1},\Omega_{1} \right>,\left< A_{2},\Omega_{2} \right>,\left< A_{3},\Omega_{3} \right>$ e due omorfismi $f$ e $g$ di $\left< A_{1},\Omega_{1} \right>$ in $\left< A_{2},\Omega_{2} \right>$, e di $\left< A_{2},\Omega_{2} \right>$ in $\left< A_{3},\Omega_{3} \right>$ rispettivamente. Allora la composizione $f\cdot g$ come funzione è un omorfismo di $\left< A_{1}, \Omega_{1} \right>$ in $\left< A_{3},\Omega_{3} \right>$.
>Se f è isomorfismo di $\left< A_{1},\Omega_{1} \right>$ in $\left< A_{2},\Omega_{2} \right>$ le funzione inversa di $f$ è un isomorfismo di $\left< A_{2},\Omega_{2} \right>$ in $\left< A_{1},\Omega_{1}z \right>$


# ANKI

```anki
deck: LeA
---
Omomorfismo
===
Date due strutture algebriche $\left< A, \Omega_1 \right>, \left< A', \Omega', \right>$ simili una funzione $f : A \to A$ è detta morfismo se $\forall \omega \in \Omega$ $\forall a_1,a_2,...,a_n \in A$ si ha
$$ f(\omega(a_1,a_2,...,a_n)) = \omega' (f(a_1),f(a_2),...,f(a_n))$$
con $\omega' = f(\omega)$
```
