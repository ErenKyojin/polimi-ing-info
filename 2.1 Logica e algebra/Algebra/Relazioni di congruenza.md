---
aliases: Relazione di congruenza
creation date: 2023-12-05
---

>[!def]
>si considerino un insieme $A$, una legge di composizione interna $\omega$ di arità $n$ su $A$ ed una relazione di equivalenza $p$ su $A$.
>La relazione $p$ si dice compatibile con $\omega$ se per ogni $a_{1},a_{2},\dots,a_{n},b_{1},b_{2},\dots,b_{n} \in A$, $(a_{1},b_{1}) \in p$, $(a_{2},b_{2}) \in p$, $\dots(a_{n},b_{n}) \in p$implicano $(\omega(a_{1},a_{2},\dots,a_{n}),\omega  (b_{1},b_{2},\dots,b_{n})) \in p$.
>Data una struttura algebrica $\left< A, \Omega \right>$, una relazione di equivalenza p su $A$ si dice relazione di congruenza su $A$ se è compatibile con ogni $\omega \in \Omega$

>[!example]

```anki
id: 1705831173626
deck: LeA
---
compatibilità
===
Dato un insieme $A$, una $\rho$ relazione di equivalenzasu $A$ ed una operazione $\omega$ n-aria su $A$ dico che $\rho$ è compatibile con $\omega$ se 
$\forall a_1,...,a_n \in A, \forall b_1,...,b_n \in A \implies$ da $a \rho b$ segue $\omega(a_1,a_2,...,a_n)\rho\omega(b_1,b_2,...,b_n)$
```


```anki
id: 1705831181552
deck: LeA
---
congruenza
===
Sia $\left< A, \Omega \right>$ una struttura algebrica e sia $\rho$ una relazione di equivalenza su $A$. Si dice che $\rho$ è una congruenza su $A$ se è compatibile con ogni operazione $\omega \in \Omega$
```


```anki
id: 1705831184852
deck: LeA
---
operazione indotta
===
Sia $A$ un insieme, sia $\omega$ un'operazione $n$-aria su $A$ e prima relazione di equivalenza si $A$ compatibile con $\omega$ allora sull'insieme quoziente $A / \rho$ è possibile definire una nuova operazione $n$-aria indotta da $\omega$ detta $\omega'$ nel seguente modo:
$\omega' : A/ \rho \times A/ \rho \times ... \times A/ \rho \longrightarrow A/\rho$
$\omega'(\rho_{a_1},\rho_{a_2},...,\rho_{a_n}) = \rho_{\omega( a_1,a_2,...,a_n)}$
```


```anki
id: 1705831186727
deck: LeA
---
Struttura quoziente
===
Data una struttura algebrica $\left< A, \Omega \right>$ ed una congruenza $\rho$ su $A$. È possibile definire sull'insieme $A / \rho$ una struttura quoziente $\left< A/\rho, \Omega' \right>$ nella quale l'insieme delle operazioni $\Omega'$ è costituito dalle operazioni indotte dalle $\omega \in \Omega$ 
```

