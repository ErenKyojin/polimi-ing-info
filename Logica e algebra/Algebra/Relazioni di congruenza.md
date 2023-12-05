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