>[!def]
>Un evento è un sottoinsieme di $\Omega$

>[!danger]
>non tutti i sottoinsiemi di $\Omega$ sono eventi! Lo sono se
>1. $\Omega = \left\{ \omega_{1},\omega_{2},\dots,\omega_{n} \right\}$ con $\begin{cases}n < +\infty\quad\Omega\text{ è finito} \\n = +\infty\quad\Omega\text{ è numerabile}\end{cases}$
>   In questo caso ogni $E \subseteq \Omega$ è un evento
>
>2. $\Omega \subseteq \mathbb{R}^n$ è continuo
>   Non tutti i sottoinsiemi sono eventi, ma sono eventi tutti i sottoinsiemi per cui puoi definire una lunghezza (in $\mathbb{R}^2$ superfice, in $\mathbb{R}^3$ volume). Caso speciale è il singolo elemento che ha lunghezza zero e quindi è un evento.
>   Non importa se l'intervallo è aperto, chiuso o ne aperto ne chiuso, la topologia non importa per determinare un tipo di evento



Quindi ottengiamo $E \subseteq \mathbb{R}$   attraverso $\cap, \cup, \neg$ piú numerabili di intervalli.


# Eventi speciali

Partiamo dal sottoinsieme che li comprende tutti $\Omega$ (spazio campionario), che è detto **evento certo**, è sempre vero in quanto contiene tutti i possibili risultati, l'opposto è $\varnothing$ che è detto **evento impossibile**, abbiamo poi gli **eventi elementari** $\left\{ w_{i} \right\}$ ossia i singoli eventi (nucleo dello spazio); infine abbiamo l'evento somma $A \cup B$, $\neg A$, $B \setminus A = B \cap \neg A$ 

>[!teorema] leggi di de morgan
>1. Qual è il contrario di tutto vero? Qualcosa falso $\implies \neg[\bigcap_{i}A_{i}] = \bigcup_{i}\neg A_{i}$
>2. Contrario di qualcosa vero? tutto falso $\implies \neg[\bigcup_{i}A_{i}] = \bigcap_{i}\neg A_{i}$
>


