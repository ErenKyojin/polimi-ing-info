---
aliases: 
creation date: 2023-03-21 10:38
modification date: 2023-03-21 10:38
---

Siano $w \in I^*$ e $V_{1}$ l'insieme delle variabili; un assegnamento è una funzione $v_{1} : V_{1} \to [0\dots|w|-1]$
- $w,v_{1} \vDash a(x)$ se e solo se $w = \text{uav}$ e $|u| = v_{1}(x)$
- $w,v_{1} \vDash x < y$ se e solo se $v_{1}(x) < v_{1}(y)$
- $w,v_{1} \vDash \neg \varphi$ se e soo se $w,v_{1} \vDash \varphi$
- $w,v_{1} \vDash \varphi_{1} \cup \varphi_{2}$ se e solo se $w,v_{1} \vDash \varphi_{1}$ o $w,v_{1} \vDash \varphi_{2}$
- $w,v_{1} \vDash \exists x(\varphi)$ se e solo se $|w| > 0$ ed esiste $i \in [0,\dots,|w|-1]$ tale che $w,v_{1}[i/x] \vDash \varphi$
  dove $v_{1}[i/x]$ è come $v_{1}$ ma assegna ad $x$ il valore $i$, questo per la [[stringa]] [[epsilon]]


