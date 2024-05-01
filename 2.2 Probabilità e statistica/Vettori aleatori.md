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

# Vettori aleatori indipendenti
$X_{1},\dots,X_{n}$ variabili aleatorie indipendenti. Se $m < n$ consideriamo due funzioni $\mathbf{g} : \mathbb{R}^m \to \mathbb{R}^k$ ed $\mathbf{h} : \mathbb{R}^{n-m} \to \mathbb{R}^l$ tali che $\mathbf{W} = \mathbf{g}(X_{1},\dots,X_{m})$ e $\mathbf{Z} = \mathbf{h}(X_{m+1}, \dots, X_{n})$ sono vettori aleatori. Gli sprementi esprimibili attraverso $\mathbf{W}$ ed attraverso $\mathbf{Z}$ sono indipendenti. (i primi dipendono da $X_{1},\dots,X_{m}$ e i secondi dipendono da $X_{m+1},\dots,X_{n}$)

>[!def] vettori aleatori indipendenti
>Siano $\mathbf{X}_{1},\dots,\mathbf{X}_{n}$ $n$ vettori aleatori definiti sullo stesso spazio di probabilità $(\Omega, \mathcal{F}, P)$ di dimensione rispettivamente $m_{1},\dots,m_{n}$. Sono indipendenti se
>$$ P(\mathbf{X}_{1} \in B_{1},\dots,\mathbf{X}_{n} \in B_{n}) = P(\mathbf{X}_{1} \in B_{1}) \dots P(\mathbf{X}_{n} \in B_{n}) $$
>per ogni scelta di domini regolari $B_{1} \subset \mathbb{R}^{m_{1}},\dots,B_{n} \subset \mathbb{R}^M_{n}$

>[!proposizione]
>$\mathbf{X}_{1},\dots,\mathbf{X}_{n}$ $n$ vettori aleatori indipendenti di dimensione rispettivamente $m_{1},\dots,m_{n}$ e siano $\mathbf{g}_{1},\dots,\mathbf{g}_{n}$ delle funzioni definite da $\mathbf{g}_{1} : \mathbb{R}^{m_{1}} \to \mathbb{R}^{k_{1}},\dots,\mathbf{g}_{n} : \mathbb{R}^{m_{n}} \to \mathbb{R}^{k_{n}}$. Allora i vettori aleatori $\mathbf{Y}_{1} = \mathbf{g}_{1}(\mathbf{X}_{1}),\dots,\mathbf{Y}_{n} = \mathbf{g}_{n}(\mathbf{X}_{n})$  sono indipendenti


[[Valore atteso#Valore atteso di funzioni di vettori aleatori]]