---
aliases: 
creation date: 2023-03-21 12:52
modification date: 2023-03-21 12:52
---

>[!question]
>Quali [[problema|problemi]] sappiamo risolvere, con quali macchine ed in senso assoluto

Sembra una domanda troppo generica, cos'è un problema? Quali macchine dobbiamo considerare, cosa significa saperlo risolvere

In quanto ai modelli sembra che la [[potenza]] espressiva massima trovata siano le [[macchine di Turing]] e le [[grammatiche]] generali, da cui:

>[!teorema] Tesi di Curch (e Turing)
>Non esiste meccanismo di calcolo automatico superiore alla macchina di Turing o di formalismi a lei corrispondenti, ne algoritmi per risolvere problemi non risolvibili da una macchina di Turing

$\lambda$calcolo è un modello basato su funzioni ricorsive

A questo punto, per studiare i problemi risolvibili dobbiamo definire un modello, in modo che sia il piú semplice possibile

## Modello di studio
Macchina di turing a nastro singolo con:
- **ALFABETO**: $A = \left\{ 0,1,\_ \right\}$
- **PROBLEMA**: calcolo di una funzione $f : \mathbb{N} \to \mathbb{N}$
- **STATI FINALI**: tutti e soli quelli che fermano la macchina (non serve definire l'insieme $I$)
	- Una macchina di Turing generica ha sia stati di accettazione che di non accettazione che fermano la macchina
	- per non perdere generalità quando una macchina si fermerebbe in uno stato di non accettazione mandiamo in loop la macchina con un pozzo

---

## Enumerazione algoritmica
Le macchine di Turing sono **Algoritmicamente enumerabili**
Enumerazione di un insieme S:
$E : S \leftrightarrow \mathbb{N}$
Enumerazione algoritmica: E può essere calcolata mediante un algoritmo, cioè mediante una MT

>[!esempio]
> Enumerazione algoritmica di $\left\{ a,b \right\}^*$
> $$
>\begin{array}{ccc}
>\{ &\varepsilon &a &b &aa &ab &ba &bb &aaa &aab &aba &abb & \dots \} \\
> \hline \{&0 &1 &2 &3  &4  &5  &6  &7   &8   &9   &10  & \dots \}
>\end{array}
>$$


Una macchina di turing è identificata univocamente dalla tabella della sua funzine di transizioneL
$$\delta : Q \times A \to Q \times A \times \left\{ L,R,S \right\} \cup \left\{ \perp \right\}$$
Ordiniamo per numero di stati, inoltre scegliamo un ordinamento arbitrario delle tuple, ade sempio quello lessicografico.

>[!oss] $\perp$ significa indefinito, ossia non ci sono frecce

In generale, quante sono le $f : D \to R$? Sono $|R|^{|D|}$

>[!esempio]
>Con $|Q| = 1, |A|=3, (3\cdot3 + 1)^{1 \cdot 3} = 1000$ macchine di Turing ad un solo stato
>
>Mettiamo in ordine queste macchine di Turing: $\left\{ M_{0}, M_{1}, \dots, M_{999} \right\}$
T999

### |Q| = 1
 | MT0 | 0       | 1       | -       |
 | --- | ------- | ------- | ------- |
 | **q0**  | $\perp$ | $\perp$ | $\perp$ |
Funzione identità $f(x) = x$

| MT1    | 0       | 1       | -       |
| ------ | ------- | ------- | ------- |
| **q0** | $(q_{0},0,L)$ | $\perp$ | $\perp$ |

| MT2    | 0             | 1       | -       |
| ------ | ------------- | ------- | ------- |
| **q0** | $(q_{0},0,R)$ | $\perp$ | $\perp$ | 

...

| MT999  | 0             | 1             | -   |
| ------ | ------------- | ------------- | --- |
| **q0** | $(q_{0},1,S)$ | $(q_{0},1,S)$ | $(q_{0},1,S)$    |
(Funzione totalmente indefinita)

### |Q| = 2
| MT1000  | 0       | 1       | -       |
| ------- | ------- | ------- | ------- |
| **q0**      | $\perp$ | $\perp$ | $\perp$ |
| **q1** | $\perp$ | $\perp$ | $\perp$ | 
Funzione identità

| MT1001 | 0             | 1       | -       |
| ------ | ------------- | ------- | ------- |
| **q0** | $(q_{0},0,L)$ | $\perp$ | $\perp$ |
| **q1** | $\perp$       | $\perp$ | $\perp$        |
Funzione identità, infatti se non legge 0 all'inizio termina, se legge 0 all'inizio scrive 0, si sposta a sinistra e termina leggendo blank (sul nastro troviamo una stringa identica), osservare che non si va mai in q1
...

Abbiamo quindi la nostra enumerazione algoritmica $E : \left\{ \text{ MT } \right\} \leftrightarrow \mathbb{N}$

$E$ è algoritmica o effettiva, possiamo scrivere un programma (ossia una MT) tale che, dato $n$, costruisce la macchina di turing $n$-esima, e che data una tabella ci fornisca il numero della macchina di Turing $E(M)$.

$E(M)$ è detto numero di Goedel di M, ed $E$ è detta Goedelizzazione

Quindi, riassumendo
- Problema: calcolo di una funzione $f : \mathbb{N} \to \mathbb{N}$
- $f_{y}$ funzione calcolata dalla $y$-esima macchina di Turing

>[!oss]
>$f_{y}(x)=\perp$ se e solo se $M_{y}$ non si ferma quando riceve in ingresso $x$


## Macchina di Turing universale (MTU)
Esiste una macchina di Turing universale che calcola la funzione $g(y,x) = f_{y}(x)$.
Ad essere precisi la MTU così definita non appartiene a $\left\{ M_{y} \right\}$ perchè $f_{y}$ è funzione di una variabile mentre $g$ è funzione di due variabili

>[!oss]
>Non ci deve sorprendere che possiamo simulare una qualsiasi macchina di Turing con un'altra macchina di Turing, è l'equivalente di eseguire un programma su un computer.



Noi sappiamo che $\mathbb{N} \times \mathbb{N} \leftrightarrow \mathbb{N}$

>[!esempio]
>$$d(x,y) = \frac{x+y)(x+y+1}{2} + x$$
>
> ```tikz
>\begin{document}
>\begin{tikzpicture}[scale=1.5]
>\draw[->] (0,0) -- (5.5,0);
>\draw[->] (0,0) -- (0,4.5);
>\draw[step=.5,ultra thin] (0,0) grid (5.2,4.1);
>\path[thick,red] [->] (0,0.5) edge (.5,0) 
>		(.5,0) edge (0,1)
>		(0,1) edge (1,0)
>		(1,0) edge (0,1.5)
>		(0,1.5) edge (1.5,0)
>		(1.5,0) edge (0,2)
>		(0,2) edge (2,0)
>		(2,0) edge (0,2.5)
>		(0,2.5) edge (2.5,0)
>		(2.5,0) edge (0,3)
>		(0,3) edge (3,0)
>		;
>\end{tikzpicture}
>\end{document}
>```

Posiamo codificare $g(y,x)$ come una $g'(n) = g(d^{-1}(n))$

Lo schema di una MTU che calcola $g'$:
- Dato $n$ calcolo $d^{-1}(n) = (y,x)$
- Costruisco la tabella di $M_{y}$ calcolando $E^{-1}(y)$ e la memorizzo nel nastro della MTU
- In un altra porzione del nastro ne simulo la configurazione

ALla fine la MTU lascia sul nastro $f_{y}(x)$ se termina il calcolo su x.


La macchina di Turing è un modello molto astratto e semplice di un calcolate, inoltre una macchina di Turing normale esegue sempre lo stesso algoritmo, mentre una macchina di turing universale ha programmi memorizzati:
- y programma
- x dati del programma

Quanti e quali sono i problemi risolvibili algoritmicamente:

- Quante e quali sono le funzioni $f_{y} : N \to N$
	- Quante:
	  $$ \left\{ f : N \to N \right\} \supseteq \left\{ f : N \to \left\{ 0,1 \right\}  \right\} \implies |\left\{ f:N \to N \right\} | \geq  |\left\{ f : N \to \left\{ 0,1 \right\}  \right\} | = \mathcal{P}(N) = 2^{\mathcal{N}0}$$
		D'altro canto l'insieme $\left\{ f_{y} : N \to N \right\}$ è per definizione numerabile, quindi $E : \left\{ M_{y} \right\} \leftrightarrow N$ induce $E' : N \to \left\{ f_{y} \right\}$ non biunivoca (in molti casi $f_{y} = f_{z}$ con $z \neq y$) ma basta per affermare che
		  $$ |\left\{ f_{y} : N \to N \right\} | = \mathcal{N}_{0} < 2^{\mathcal{N}_{0}} $$
		  quindi la grand parte delle funzioni (quindi dei problemi non è calcolabile algoritmicamente).
		  Ma è davvero cosí grave quanto sembra? Per definire i problemi usiamo una stringa di qualche linguaggio:
		- $f(x) = x^2$
		- $f(x) = \int \!g(z)  \, \mathrm{d}z$
		- "il numero che moltiplicato per se stesso da $y$"
		  
		  Il linguaggio è un sottoinsieme di $A^*$ che è un insieme numerabile quindi,
		  l'insieme dei problemi definibili è pure numerabile come quello dei problemi risolvibili
		  e sicuramente {Problemi risolvibili} $\subseteq$ {Problemi definibili}
	- Quali:
		 - Il problema della terminazione del calcolo:
			 - Costruisco un programma
			 - Fornisco dei dati in ingresso
			 - Posso determinare se terminerà o meno (andando in loop)
			   
			   Che possiamo riscrivere in termini di macchina di Turing come:
			   data la funzione $g(y,x) = 1$ se $f_{y}(x) \neq \perp, g(y,x) = 0$ se $f_{y}(x) = \perp$, esiste una macchina di Turing che calcola $g$?
			   **NO*
			   
			   Questo risultato è molto importante, non possiamo sapere a priori se il programma andrà in loop con certi dati (ad esempio, non puó saperlo il compilatore e avvisai con un errore)
		- Stabilire se un'espressione ben parentizzata è un problema risolvibile (decidibile)
		- Stabilire se un programma andrà in loop (irrisolvibile) detto anche [[problema dell'halt]]



>[!oss]
>Se un problema è irrisolvibile può darsi che un suo caso particolare diventi risolvibile (vedremo essempi irrisolvibili per linguaggi qualsiasi, risolvibili per linguaggi regolari).
>
>Se un problema è irrisolvibile una sua generalizzazione è necessariamente irrisolvibile, se un problema è risolvibile, può darsi che una sua generalizzazione diventi irrisolvibile mentre una sua particolarizzazione rimane certamente risolvibile.

#### Vediamo un altro importante problema indecidibile:
La funzione $k(y) = \begin{cases}1 &\text{se }f_{y} \text{ totale, ossia } f_{y}(x) \neq \perp \forall x \in N\\0 &\text{altrimenti}\end{cases}$  non è calcolabile.
Dal punto di vista dell'impatto pratico, questo teorema è ancora piú significativo del problema dell'halt:
Dato un programma voglio sapere se esso terminerà l'esecuzione per qualsiasi dato in ingresso o corre il rischio pre qualche dato di andare in loop.
Nel caso precedente invece mi interessava sapere se un certo programma con certi dati avrebbe terinato o meno l'esecuzione.

>[!oss]
>È simile al problema precedente, ma la differenza è che in questo caso abbiamo dato una quantificazione rispetto a tutti i possibili dati in ingresso


In certi casi potrei essere in grado di stabilire, fissato $x$, se $f_{y}(x) \neq \perp$, inoltre poterlo fare per tutti gli infiniti $x$ senza per questo poter rispondere alla domanda $f_{y}$ è una funzione totale>


VIceversa potrei essere in grado ci concludere che $f_{y}$ non è totale eppure poitrei non decidere se $f_{y}(x) \neq \perp$ per un singolo $x$

>[!dim]
>Ipotesi: $k(y) = 1$ se $f_{y}$ è totale, ossia $f_{y}(x) \neq \perp, \forall x \in N$, altrimento $=0$ calcolabile e ovviamente totale per definizione.
>Definisco allora $g(x) = w =$ indice della $x$-esima macchina di turing in $E$ che calcola una funzione totale.
>
>*Sto enumerando le macchine di Turing che calcolano funzioni totali*
>
>Se $k$ è calcolabile e totale allora lo è anche $g$, calcolo quindi $k(0), k(1),\dots,$ e sia $w_{0}$ il primo valore tale che $k(w_{0}) = 1$ allora pongo $g(0) = w_{0}$, successivamente pongo $g(1) = w_{1}$ essendo $w_{1}$ il secondo valore tale che $k(w_{1}) = 1$.
>Il procedimento è algoritmico, inoltre essendo le funzioni totali infinite, $g(x)$ è certo definita per ogni $x$, quindi è totale.
>
>$g$ è anche strettamente monotona, passando da $x$ a $x+1$, $w_{x + 1 } > w_{x}$, quindi $g^{-1}$ è una funzione, pure strettamente monotona anche se non totale:
>$g^{-1}(w)$ è definita solo se $w$ è l'indice di una macchina di Turing che calcola una funzione totale.
>Definisco ora
>1. $h(x) = f_{g(x)} + 1 = f_{w}(x) +1$
>   $f_{w}$ è calcolabile e totale e quindi lo è anche $h$
>2. $h = f_{w_{0}}$ per qualche $w_{0}$
>   siccome $h$ è totale $g^{-1}(w_{0}) \neq \perp$, poniamo $g^{-1}(w_{0}) = x_{0}$, quanto vale $h(x_{0})$?
>   - $h(x_{0}) = f_{g(x_{0})}(x_{0}) + 1 = f_{w_{0}}(x_{0}) + 1$
>   - $h = f_{w_{0}}$ implica $h(x_{0}) = f_{w_{0}}(x_{0})$
>
>Contraddizione


>[!oss]
>Sapere che un problema è risolvibile non significa saperlo risolvere, un problema è risolvibile se esiste una MT che lo risolve. Formalmente una funzione $f : N \to N$ è calcolabile se esiste una MT che la calcola, ossia esiste $y \in N : \dots$

- È vero che il numero di molecole dell'universo è $10^{{10^{10}}^{10}}$? è risolvibile ma non calcolabile
- È vero che scacci giocato perfettamente è una patta? ""

Una funzione $f : N \to N$ è calcolabile se e solo se esiste una macchina di Turing che la calcola, ossia esiste un valore $y \in N$ taleche $f_{y} = f$

>[!esempio]
>$$ g(y,x) = \begin{cases}1\quad &\text{se }f_{y}(x) \neq 1\\0&se f_{y}(x) = 1\end{cases} $$
>$g(3,8)$ calcolabile? SI, in quanto si tratta di una funzione costante, (è un valore di fatto)

Esaminiamo casi meno banali ma istruttivi

$f(x) = x$-esima cirfra dell'espansione decimale di $\pi$, $f$ è sicuramente calcolabile e conosciamo algoritmi in grado di farlo.
Basandoci sulla possibilità di calcolare $f$ investighiamo la calcolabilità di $g(x) = 1$ se in $\pi \exists$ esattamente $\times$ 5 consegutivi, = 0 altrimenti.
calcolando la sequenza:
$$
\{ f(0) = 3, f(1) = 1, f(2) = 4, f(3)=1, f(4)= 5, f(5)\neq 5 \}
$$
otteniamo $g(1)=1$

```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) -- (4,0);
\draw (0,0) -- (0,2);
\end{tikzpicture}
\end{document}
```

#todo 

Consideriamo la seguente modifica di $g$:
$$ h(x) - 1 \text{}$$