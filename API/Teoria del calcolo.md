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

>[!oss] $\perp$

In generale, quante sono le $f : D \to R$? Sono $|R|^{|D|}$

>[!esempio]
>Con $|Q| = 1, |A|=3, (3\cdot3 + 1)^{1 \cdot 3} = 1000$ macchine di Turing ad un solo stato
>
>Mettiamo in ordine queste macchine di Turing: $\left\{ M_{0}, M_{1}, \dots, M_{999} \right\}$