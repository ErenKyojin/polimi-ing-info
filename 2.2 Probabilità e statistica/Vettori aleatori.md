---
aliases: vettore aleatorio
creation date: 2024-04-17
---

 >[!def]
 >Sia $(\Omega,F,P)$ uno spazio di probabilità. Un vettore aleatorio $n$-dimensionale è una funzione vettoriale $X := (X_{1},\dots,X_{n}), X:\Omega \to \mathbb{R}^n$ tale che ogni $X_{i}$ per $i=1,\dots,n$ è una variabile aleatoria

[[funzione di ripartizione#Funzione di ripartizione multidimensionale]]

## Vettori aleatori discreti

> [!def]
> Un vettore aleatorio è detto discreto se tutte le sue componenti $X_{1},\dots,X_{n}$ sono [[Variabile aleatoria|variabili aleatorie discrete]]. 

[[Densità discreta]]

## Vettori aleatori assolutamente continui

>[!def]
>Un vettore aleatorio $\mathbf{X}$ di $n$ componenti si dice assolutamente continuo se esiste una funzione $f_{\mathbf{X}} : \mathbb{R}^n \to \mathbb{R}^+$ integrabile tale che la funzione di ripartizione di $\mathbf{X}$ si può scrivere come
>$$ F_{\mathbf{X}} = \int _{-\infty}^{\infty} \!\!\!\!\!\!\dots\int _{-\infty}^{\infty} \!f_{X}(s_{1},\dots,s_{n}) \, \mathrm{d}s_{1}  \dots \, \mathrm{d}s_n \forall \mathbf{x} = (x_{1},\dots,x_{n}) $$
>$f_{\mathbf{X}}$ è detta densità del vettore aleatorio assolutamente continuo


>[!proposizione]
>Sia $f_{\mathbf{X}}$ la densità di un vettore aleatorio assolutamente continuo $\mathbf{X}$, valgono le seguenti:
>- $\large \int _{\mathbb{R}^n} \!f(x_{1},\dots,x_{n}) \, \mathrm{d}x_{1} \dots\mathrm{d}x_{n} = 1$
>- $\large \frac{ \partial ^n F_{\mathbf{X}}(\mathbf{x}) }{ \partial x_{1}\dots\partial x_{n} }=f_{\mathbf{X}}(\mathbf{x})$
>- sia $\large B \subset \mathbb{R}^n$ dominio regolare allora
>  $$ P(\mathbf{X} \in B) = \int_{B} f_{\mathbf{X}}(x_{1},\dots,x_{n})  \! \, \mathrm{d}x_{1} \dots \mathrm{d}x_{n}  $$


>[!proposizione]
>sia $f_{\mathbf{X}}$ densità di un vettore aleatorio $n$-dimensionale assolutamente continuo $\mathbf{X}=(X_{1},\dots,X_{n})$, allora $X_{i}$ è una variabile aleatoria assolutamente continua con densità
>$$ f_{X_{i}}(x_{i}) = \int _{\mathbb{R}^{n-1}} \! f_{X}(s_{1},\dots,s_{i-1},s_{i+1},\dots,s_{n}) \, \mathrm{d}s_{1}\dots\mathrm{d}s_{i-1}\mathrm{d}s_{i+1}\dots\mathrm{ds_{n}}  $$
