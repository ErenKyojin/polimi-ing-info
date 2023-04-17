---
aliases: 
creation date: 2023-03-29 09:41
modification date: 2023-03-29 09:41
---

Stabilire se, dato un programam con un dato in ingresso andrà in loop  è un [[problema]] irrisolvibile algoritmicamente (ne vedremo molti altri, sono molte anche in termini qualitativi, le cose che il calcolatore non può fare)

>[!dim]
>Per dimostrare cosa un calcolatore possa fare sfruttiamo una tecnica diagonale (usata anche nel teorema di cantor, ossia prendere x = y) pe rdimostrare che $\mathcal{N}_{0} < 2^{\mathcal{N_{0}}}$
>
>Ipotesi assurda: $g(y,x) = 1$ se $f_{y}(x) \neq \perp, g(y,x) = 0$ se $f_{y}(x) = \perp$ calcolabile. Allora anche $h(x)= 1$ se $g(x,x) = 0 (f_{x}(x)=\perp),\perp$ altrimenti $(f_{x}(x) \neq \perp)$ è calcolabile
>
>Ci siamo posti sulla diagonale $y = x$ e abbiamo scambiato il si col no, poi abbiamo fatto si che il no diventasse una non terminazione
>
>Se $h$ è calcolabile allora essite $x_{0}$ tale che $h = f_{x_{0}}$. quindi ci chiediamo se $h(x_{0}) = 1$ o se $h(x_{0}) = \perp$
>
>*Stiamo facendo ragionare la macchina su se stessa*
>
>Se $h(x_{0}) = f_{x_{0}}(x_{0}) = 1$, quindi $g(x_{0},x_{0}) = 0$, quindi $f_{x_{0}}(x_{0}) = \perp$ che è una contraddizione. 
>Supponiamo il contrario $h(x_{0}) = f_{x_{0}}(x_{0}) = \perp$, ciò significa $g(x_{0},x_{0}) = 1$ quindi $f_{x_{0}}(x_{0}) \neq \perp$ che è una contraddizione.
>Abbiamo due contraddizioni quindi il teorema è dimostrato.
>$\CVD$
>

```cpp
#include G

//Esempio di programma che calcola h data g
int h(int x){
	if( g(x,x) == 0) {
		return 1;
	}
	else {
		while(True);
	}
}

//...
```


>[!corollario]
>La funzione $h'(x) = g(x,x)\quad\begin{align}=1\ \text{se}\ f_{x}(x) \neq \perp\\=0\ \text{se }f_{x}(x) = \perp\end{align}$ non è calcolabile
>
>In realtà, rigorosamente parlando, si tratta piuttosto di un lemma che di un corollario, esso costituisce il cuore della dimostrazione del teorema precedente. Di per se l'enunciato non significa molto, è però importante menzionarlo per sottolineare che il suo enunciato non può essere ricavato come conseguenza immediata del teorema precedent.e

Non possiamo calcolare quindi in alcun modo se un programma termini o meno sotto ogni circostanz