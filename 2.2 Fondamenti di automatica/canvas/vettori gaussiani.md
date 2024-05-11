---
aliases: 
creation date: 2024-05-11
---

Data l'importanza delle variabili aleatorie gaussiane, è utile studiare il caso particolare dei [[vettori aleatori]] di variabili gaussiane

>[!definition]
>Il vettore aleatorio $\mathbf{Z}=(Z_{1},Z_{2},\dots,Z_{n})$ è gaussiano standard $n$-dimensionale o $n$-variato, se le variabili aleatorie $Z_{1},Z_{2},\dots,Z_{n}$ sono variabili aleatorie gaussiane standard indipendenti.

Un vettore aleatorio $\mathbf{Z} = (Z_{1},Z_{2},\dots,Z_{n})^T$ gaussiano standard $n$-dimensionale è assolutamente continuo con densità
$$ f_{\mathbf{Z}}(z_{1},z_{2},\dots,z_{n}) = \frac{1}{(2\pi)^{n/2}}e^{-1/2 \sum_{k=1}^n z^2_{k}} $$

>[!remark]
>Il vettore delle medie di $\mathbf{Z}$ è il vettore nullo, la matrice di covarianza di $\mathbf{Z}$ è la matrice identità $\mathbf{I}$ di dimensione $n$.
>
>Questo dalla definizione del vettore che prevede che le componenti siano **indipendenti** e **gaussiane standard**


>[!definition]
>Un vettore aleatorio $n$-dimensionale $\mathbf{X}$ è gaussiano (o gaussiano $n$-dimensionale o normale) se esiste una matrice $A \in M_{(n,m)}$ ed un vettore $\boldsymbol{\mu} \in \mathbb{R}^n$ ed un vettore gaussiano standard $m$-dimensionale $\mathbf{Z}$ tali che $\mathbf{X} = A\mathbf{Z} + \mu$

Non vi sono restrizioni sulla matrice $\mathbf{A}$.
