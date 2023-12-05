---
aliases: Relazione di congruenza
creation date: 2023-12-05
---

>[!def]
>si considerino un insieme $A$, una legge di composizione interna $\omega$ di arità $n$ su $A$ ed una relazione di equivalenza $p$ su $A$.
>La relazione $p$ si dice compatibile con $\omega$ se per ogni $a_{1},a_{2},\dots,a_{n},b_{1},b_{2},\dots,b_{n} \in A$, $(a_{1},b_{1}) \in p$, $(a_{2},b_{2}) \in p$, $\dots(a_{n},b_{n}) \in p$implicano $(\omega(a_{1},a_{2},\dots,a_{n}),\omega  (b_{1},b_{2},\dots,b_{n})) \in p$.
>Data una struttura algebrica $\left< A, \Omega \right>$, una relazione di equivalenza p su $A$ si dice relazione di congruenza su $A$ se è compatibile con ogni $\omega \in \Omega$

>[!esempio]
>Si consideri la struttura $\left< Z,+,\cdot \right>$, la relazione di congruenza modulo 3 è una relazione di congruenza nel senso della definizione precedente, sappiamo già che è una relazione di equivlaneza, e se $n = m (\mod 3)$ ed $r = s (\mod 3)$ esistono $h,k :n-m=3h$ e $r-s=3k$
>sommando membro a membro è facile ottenre $(n+r, m+s) \in p$
>moltiplicando entrambi i membri per r della prima uguaglianza e per $m$ della seconda otteniamo.
>$nr-ms=3(hr+km) \implies (nr,ms) \in p$


>[!oss]
>È facile provare che l'intersezione di un numero qualsiasi di congruenze di $A$ è una congruenza di $A$. La relazione universale è una congruenza, dunque, data una qualsiasi relazione binaria $p$su $A$esiste sempre la minima congruenza di $A$ contenente $p$ detta congruenza generata da $p$ su $A$. Tale congruenza è l'intersezione di tuttel e congruenze di $A$ contenenti $p$.


considerando $\left< Z, +, \cdot \right>$, la relazione di congruenza modulo 3, e l'insieme quoziente $Z_{3}$ di Z rispetto alla congruenza modulo 3.
Possiamo introdurre in modo semplice una somma ed un prodotto su $Z_{3}$ definendo come somma di due classi di resti modulo 3 la classe che ha come rappresentante la somma dei rappresentanti e come prodotto di due classi di resti la classe che ha come rappresentante il prodotto dei rappresentanti.
Se invece consideriamo nella stessa struttura la relazione di equivalenza indotta dalla partizione $+, 0, -$non possiamo definire una somma tra queste tre classi.
Se affermiamo che la somma di due classe è la classe che ha come rappresentante la somma dei rappresentanti non definiremmo correttamente un'operazione, prendiamo ad esempio come rappresentanti di + e -, 1 e -1 rispettivamente.
$+ \oplus -$ = 0 
Ma se i rappresentanti fossero 3 e -1 rispettivamente avremmo 2 che è in +.
La relazione non è compatibile con la somma.

>[!def] operazione indotta
>Dati un insieme $A$, una legge di composizione interna $\omega$ di arità $n$ su $A$ ed una relazione di equivalenza $p$ su $A$ compatibile con $\omega$, la funzione $\omega' : A/p \times A / p \times \dots \times A / p$ (n volte)-> $A / p$  definita da $\omega(p_{a_{1}},p_{a_{2}},\dots,p_{a_{n}}) = p_{\omega(a_{1},a_{2},\dots,a_{n})}$ è una legge di composizione interna $\omega'$ di arità $n$ su $A / p$ detta operazione indotta da $\omega$.
>Dobbiamo verificare la definizione di $\omega'$ è ben posta, ovvero che $\omega'(p_{a_{1}},p_{a_{2}},\dots,p_{a_{n}})$ non dipende dai rappresentanti scelti per le p-classi.
>Supponendo infatti $p_{a_{1}} = p_{b_{1}}, p_{a_{2}} = p_{b_{2}},\dots,p_{a_{n}} = p_{b_{n}}$ possiamo calcolare $\omega'(p_{b_{1}},p_{b_{2}},\dots,p_{b_{b}})$ essendo p compatibile con $\omega$ abbiamo $\omega(a_{1},a_{2},\dots,a_{n}),\omega(b_{1},b_{2},\dots,b_{n}) \in p$ quindi $\omega'(p_{b_{1}},p_{b_{2}},\dots,p_{b_{n}})= p_{\omega(b_{1},b_{2},\dots,b_{n})}=p_{\omega(a_{1},a_{2},\dots,a_{n})} = \omega'(p_{a_{1}},p_{a_{2}},\dots,p_{a_{n}})$


>[!def]
>data una struttura algebrica $\left< A, \Omega \right>$ ed una relazione di congruenza $p$ su $A$ si dice struttura quoziente di $A$ rispetto a $p$ la struttura $\left< A / p, \Omega' \right>$ avente come sostengo l'insieme quoziente di $A$ rispetto a $p$ e come insieme di operazioni l'insieme delle operazioni $\omega'$ indotte dalle operazioni $\omega$ di $\Omega$


# ANKI


```anki
deck: LeA
---
ompatibilità
===
Dato un insieme $A$, una $\rho$ relazione di equivalenzasu $A$ ed una operazione $\omega$ n-aria su $A$ dico che $\rho$ è compatibile con $\omega$ se 
$\forall a_1,...,a_n \in A, \forall b_1,...,b_n \in A \implies$ da $a \rho b$ segue $\omega(a_1,a_2,...,a_n)\rho\omega(b_1,b_2,...,b_n)$
```


```anki
deck: LeA
---
congruenza
===
Sia $\left< A, \Omega \right>$ una struttura algebrica e sia $\rho$ una relazione di equivalenza su $A$. Si dice che $\rho$ è una congruenza su $A$ se è compatibile con ogni operazione $\omega \in \Omega$
```


```anki
deck: LeA
---
operazione indotta
===
Sia $A$ un insieme, sia $\omega$ un'operazione $n$-aria su $A$ e prima relazione di equivalenza si $A$ compatibile con $\omega$ allora sull'insieme quoziente $A / \rho$ è possibile definire una nuova operazione $n$-aria indotta da $\omega$ detta $\omega'$ nel seguente modo:
$\omega' : A/ \rho \times A/ \rho \times ... \times A/ \rho \longrightarrow A/\rho$
$\omega'(\rho_{a_1},\rho_{a_2},...,\rho_{a_n}) = \rho_{\omega( a_1,a_2,...,a_n)}$
```


```anki
deck: LeA
---
Struttura quoziente
===
Data una struttura algebrica $\left< A, \Omega \right>$ ed una congruenza $\rho$ su $A$. È possibile definire sull'insieme $A / \rho$ una struttura quoziente $\left< A/\rho, \Omega' \right>$ nella quale l'insieme delle operazioni $\Omega'$ è costituito dalle operazioni indotte dalle $\omega \in \Omega$ 
```
