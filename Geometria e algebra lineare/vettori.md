
# Vettori geometrici
>[!def] vettore applicato
>Un vettore applicato è un segmento orientato e si rappresenta con una freccia


```tikz
\usepackage{tikz}
\usetikzlibrary{calc}
\usetikzlibrary{patterns,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[-{Stealth[scale=2]},thick] (1,4) -- (3,3) node[above right] {$\mathbf{v}$};
\draw[-{Stealth[scale=2]},thick] (1,4) -- (-3,3) node[above] {$\mathbf{v}$};
\draw[-{Stealth[scale=2]},thick] (1,4) -- (1,6) node[above] {$\mathbf{v}$};
\end{tikzpicture}
\end{document}
```



## Verso
Per capire la nozione di vettore bisogna definire il verso di una retta, che intuitivamente possiamo pensare a "in che direzione percorriamo questa retta". Per poi provare a dare una definizione più precisa, possiamo notare che esistono due ordinamenti di punti di una retta che rispettano la seguente proprietà: se $P < Q$ e $R \in PQ$, allora $P  < R < Q$. Un verso della retta è uno di questi ordinamenti.

Per distinguere se due vettori $\vec{AB},\vec{CD}$ con la stessa direzione hanno lo stesso verso, possiamo sfruttare il fatto che giacciono nello stesso piano $\mathbf{H}$ essendo paralleli. Dividere quindi il [[piano]] con la retta AC ottenendo così due semipiani. Se $\vec{AB}$ e $\vec{CD}$ sono nello stesso semipiano hanno lo stesso verso, altrimenti hanno verso opposto:

```tikz
\begin{document}
\begin{tikzpicture}
\draw (-5,0) -- (5,0);
\draw[->] (-3,0)node[above left] {$A$} -- (-1,2) node[right] {$B$};
\draw[->] (-1,0)node[above left] {$C$} -- (1,2) node[right] {$D$};
\draw[->] (3,0)node[below right] {$C'$} -- (1,-2) node[left] {$D'$};
\draw (0,0);
\end{tikzpicture}
\end{document}
```


## Punto di applicazione
Un vettore applicato è un segmento $AB$ insieme al verso della retta per $A$ e $B$, per cui $A$ precede $B$. Assegnare un vettore applicato è la stessa cosa che assegnare una coppia ordinata di punti $(A,B)$, con $A$ primo estremo e $B$ secondo estremo 

```tikz
\begin{document}
\begin{tikzpicture}
 \draw[->] node[left]{$A$} (0,0) -- (4,1) node[above right] {$B$};
\end{tikzpicture}
\end{document}
```

Si definisce punto di applicazione del vettore applicato $\overrightarrow{AB}$ il punto $A$


## [[Modulo]]
Il modulo del vettore è la lunghezza del vettore

## Direzione
La direzione di $\vec{AB}$ è la direzione della retta che passa per $A$ e $B$: due vettori $\vec{AB}$ e $\vec{CD}$ hanno la stessa direzione se e solo se $AB \parallel CD$


Da tutte queste definizioni possiamo tradurre l'[[Assioma delle parallele]] per i vettori, esiste un solo vettore applicato con punto di applicazione, modulo, direzione e verso assegnati.

>[!esempio]
>I vettori sono stati utilizzati per la prima volta in fisica, ad esempio per una forza applicata su una particella, dove il punto di applicazione è la posizione della particella, il modulo l'intensità della forza, e la direzione ed il verso sono le rispettive della forza.

# Vettore libero
>[!def] 
>Un vettore libero è una grandezza dotata di modulo, direzione, e verso. Si perde però l'informazione sul punto di applicazione.
>I vettori liberi in realtà si possono definire come una [[Geometria e algebra lineare/relazione di equivalenza|classe di equivalenza]] dei vettori applicati, infatti due vettori applicati $\vec{AB}$ si definiscono equivalenti se hanno stesso modulo, direzione e verso.
>
>Quindi un vettore libero è un [[insieme]] di vettori applicati equivalenti, e li indicheremo con $\mathbf{v}$, mentre l'insieme dei vettori liberi sarà $\mathbf{V}$



Per indicare un vettore libero si scrive $\mathbf{v} = \vec{AB}$ per indicare che $\vec{AB}$ è il vettore che descrive la classe, si scrive anche $\mathbf{v} = B - A$.
Questo assoccia ad un vettore $\mathbf{v}$ una [[trasformazione]] (traslazione) $\tau_{\mathbf{v}}$ nello spazio, ossia per definizione $\tau_{\mathbf{v}}(A) = B$ significa $\mathbf{v} \equiv \vec{AB}$. Come vuole l'intuizione, una traslazione è una trasformazione dello spazio che sposta tutti i punti di una distanza fissa nella stessa direzione e verso. Una traslazione è una trasformazione dello spazio che sposta tutti i punti di una distanza fissa nella stessa direzione e verso indicati da $\mathbf{v}$.

Fissato un punto $O$ nello spazio, detto origine, si possono identificare:
1. L'insieme dei punti $P$ dello spazio
2. L'insieme dei vettori $\vec{OP}$ applicati in $O$
3. L'insieme dei vettori liberi $\mathbf{v}$
Il punto $P$ è identificato tramite il vettore posizione $\vec{OP}$


## Somma
>[!esempio]
>Considerati due vettori applicati $\vec{OP}$ e $\vec{PQ}$ tali che il secondo estremo del primo vettore coincida con il punto di applicazione del secondo vettore. La loro somma è per definizione, il vettore $\vec{OQ}$. 

```tikz
\begin{document}
\begin{tikzpicture}
 \draw[->] (-1,0) node[left]{$O$} -- (2,0.2);
 \draw[->] (2,0.2) node[below]{$P$} -- (4,1) node[right]{$Q$};
 \draw[color=red, thick, ->] (-1,0) -- (4,1);
\end{tikzpicture}
\end{document}
```

Dati due vettori liberi qualsiasi $\mathbf{v}, \mathbf{w}$. Fissiamo un punto $O$, sia $\overrightarrow{OP} \equiv \mathbf{v}$ il vettore $\mathbf{v}$ applicato in $O$ e sia $\overrightarrow{PQ} \equiv \mathbf{w}$ il vettore $\mathbf{w}$ applicato in $P$. La somma $\mathbf{v}+\mathbf{w}$ è per definizione il vettore libero rappresentato da $\overrightarrow{OQ}$. Ovviamente questa somma non dipende dal punto di applicazione, il vettore libero sarà sempre equivalente ad $\overrightarrow{OQ}$ rispetto a qualsiasi punti di applicazione. 

Il metodo più semplice per calcolare la somma di vettori è attraverso la regola del parallelogramma, si costruisce il parallelogramma $OPQR$, con $\overrightarrow{OR}$ l'equivalente del vettore $\overrightarrow{PQ}$ in $O$ e $\overrightarrow{RQ}$ l'equivalente del vettore $\overrightarrow{OP}$ in $R$.


Possiamo vedere la somma di vettori come la somma delle trasformazioni associate, quindi la traslazione $\tau_{\mathbf{v}+\mathbf{w}}$ è definita dal vettore somma $\mathbf{v}+\mathbf{w}$ ed è equivalente alla raslazione $\tau_{\mathbf{v}}$ seguita dalla traslazione $\tau_{\mathbf{w}}$.
$$ \tau_{\mathbf{w}} \circ \tau_{\mathbf{v}} = \tau_{\mathbf{v}+\mathbf{w}}$$
Dove $\circ$ denota la composizione delle funzioni $\tau_{\mathbf{v}}$ e $\tau_{\mathbf{w}}$
$$ \tau_{\mathbf{w}} \circ \tau_{\mathbf{v}} (O) = \tau_{\mathbf{w}}(\tau_{\mathbf{v}}(O)) $$


### Proprietà della somma
Sull'insieme $\mathbf{V}$ deiv ettori liberi abbiamo definito l'operazione somma. Rispetto a ttale operazione, $\mathbf{V}$ è un [[gruppo abeliano]], gode quindi delle seguenti proprietà
1. Commutativa
   $$ \mathbf{v} + \mathbf{w} = \mathbf{w}+\mathbf{v} $$
2. Associativa
   $$ (\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w}) $$
3. Esiste l'elemento neutro
   L'elemento neutro è denotato col simbolo $\mathbf{0}$ ed è detto **vettore nullo**, è l'unico vettore con modulo nullo, e
   $$ \mathbf{v} + \mathbf{0} = \mathbf{v}\qquad \forall \mathbf{v} \in \mathbf{V} $$
4. Esiste l'elemento opposto
   Esiste per ogni vettore $\mathbf{v}$ uno ed un solo vettore $-\mathbf{v}$ detto opposto di $\mathbf{v}$ tale che:
   $$ \mathbf{v}+(-\mathbf{v}) = 0 $$
  [[legge di cancellazzione della somma]] #TODO 

## Prodotto per uno [[scalare]]
A differenza della somma, il prodotto non è completamente trasponibile dai numeri ai vettori, il *prodotto per uno scalare* invece conserva molte proprietà del prodotto "classico".
Dato uno scalare $t \in \mathbb{R}$ ed un vettore $\mathbf{v \in V}$ il prodotto del vettore $\mathbf{v}$ per lo scalare $t$ è il vettore $t\mathbf{v}$ definito come:
- Il modulo ti $t\mathbf{v}$ è il $|t|$ volte il modulo di $\mathbf{v}$, ossia
 $$ ||t\mathbf{v}|| = |t|\ ||\mathbf{v}|| $$
- La direzione di $t\mathbf{v}$ è uguale a quella di $\mathbf{v}$
- Il verso di $t \mathbf{v}$ è uguale per $t > 0$ e opposto per $t < 0$, per $t = 0$ $t\mathbf{v} = \mathbf{0}$
  
Ovviamente definito il prodotto possiamo anche dividere per uno scalare $t \neq 0$.



### Proprietà del prodotto

5. Proprietà distributiva del prodotto per scalare rispetto alla somma di vettori
   $$ t(\mathbf{v}+\mathbf{w}) = t\mathbf{v}+t\mathbf{w}\quad \forall t \in \mathbb{R}, \forall \mathbf{v,w} \in \mathbf{V} $$
6. Proprietà distributiva del prodotto per uno scalare rispetto alla somma di scalari
$$ (s+t)\mathbf{v} = s\mathbf{v} + t\mathbf{v}\quad \forall t,s \in \mathbb{R}, \forall \mathbf{v} \in \mathbf{V} $$
7. Proprietà associativa del prodotto scalare
$$ s(t\mathbf{v}) = (st)\mathbf{v}\quad \forall s,t \in \mathbb{R}, \forall \mathbf{v} \in \mathbf{V}  $$
8. Normalizzazione del prodotto scalare
 $$ 1\mathbf{v} = \mathbf{v}\quad \forall \mathbf{v} \in \mathbf{V} $$
#TODO  DIM 5/6