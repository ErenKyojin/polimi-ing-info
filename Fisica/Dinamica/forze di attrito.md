---
aliases: attrito
creation date: 2023-03-23 16:42
modification date: 2023-03-23 16:42
---

Sono [[forza|forze]] che si oppongono al [[moto]] relativo di due corpi in contatto meccanico tra loro. Esistono molteplici modelli fenomenologici dell'attrito. Riveste un ruolo particolarmente importante l'attrito radente tra corpi solidi, vi sono quattro tipi di attrito:

- **Attrito radente**: si manifesta tra le sue superfici di due corpi solidi a contatto. Si distingue a sua volta in attrito radente **statico** e attrito radente **dinamico**
- **Attrito volvente**: si manifesta quando un corpo solido rotola su un altro corpo solido
- **Attrito del mezzo** o **attrito viscoso**: resistenza opposta da un fluido al moto di un corpo solido
- **Attrito interno**: agisce fra diversi strati di un fluido viscoso in moto

Vediamo in dettaglio l'attrito radente

>[!oss]
>Nel caso di un [[punto materiale]] vincolato a muoversi sulla superficie di un corpo solido, l'attrito radente sperimentato dal punto materiale per effetto del contatto con tale superficie puó essere riguardato a tutti gli effetti come una relazione vincolare della superficie stessa, diretta tangenzialmente alla superficie invece che lungo la normale.


## Attrito radente statico
Consideriamo un corpo di massa $m$ avente una superficie $S$ appoggiata su un piano orizzontale. Se applichiamo al corpo una forza $\vec{F}$ orizzontalmente si verifica che:
- Se il modulo di $F$ della forza è inferiore ad un certo valore $F_{\text{max}}$ il corpo non si sposta, mentre se $F > F_{\text{max}}$ il corpo si sposta nella direzione di $\vec{F}$
- Il valore limite per l'equilibrio $F_{\text{max}}$ risulta indipendente, almeno entro ampi limiti, dall'area della superficie di appoggio $S$
- Variando invece il peso $W = mg = R_{N}$ del corpo (forza attiva verticale) e quindi la reazione vincolare normale del piano $F_{\text{max}}$ cresce proporzionalmente secondo la legge $F_{\text{max}} = \mu_{s} \cdot R_{N}$

Il coefficiente di proporzionalità $\mu_{s}$ è detto **coefficiente di attrito statico**, è una caratteristica dei due mezzi posti in contatto e dipende fortemente dallo stato delle superfici (è minori piú sono lisce)

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[scale = 1.5]
\draw (-2.5,-.25) -- (-2.5,0) -- (2.5,0) -- (2.5,-.25);
\filldraw[color = black,fill = black!70,thick] (-1,0) -- (1,0) -- (1,1) -- (-1,1) -- (-1,0);
\node(c) at (0,.5){$\bullet$}; 
\draw[-{Stealth[length = 2.5mm]}] (c.center) -- (0,1.5)node[left]{$\vec{R}_N$};
\draw[-{Stealth[length = 2.5mm]}] (c.center) -- (2,.5)node[right]{$\vec{R}_T$};
\draw[-{Stealth[length = 2.5mm]}] (c.center) -- (-2,.5)node[above]{$\vec{F}$};
\draw[-{Stealth[length = 2.5mm]}] (c.center) -- (0,-.5)node[below]{$\vec{W}$};
\draw[dashed] (0,1.5) -- (2,1.5) -- (2,.5);
\draw[-{Stealth[length = 2.5mm]}] (c.center) -- (2,1.5)node[above]{$\vec{R}$};
\end{tikzpicture}
\end{document}
```
## Origine delle forze di attrito
La superfice di contatto effettiva fra i due corpi non dipende dalla superficie di appoggio che è di norma molto maggiore della prima, ma dalla forza che tende ad avvicinare i corpi.
Sulla sperfice di contatto effettiva avvengono infatti delle microfusioni tra i due corpi simili a legami chimici che si oppongono al vuoto

Lo studio dell'attrito è fondamentale per lo studio del [[piano inclinato]]

## attrito randente dinamico
Se un corpo si muove su una superfice piana, la forza di attrito $\vec{R}_{T}$ risulta proporzionale alla forza attiva normale al piano stesso ed indipendente dalla superficie di contatto e dalla velocità del corpo
$$
\fbox{$R_{T} = \mu_{d}\cdot R_{N}$}
$$
  
Il coefficiente di proporzionalità $\mu_{d}$ è il coefficiente di attrito dinaimco

>[!oss]
>Si verifica che $\mu_{d} \leq \mu_{s}$

>[!oss]
>La forza necessaria per mantenere in moto un corpo vincendo le forze di attrito è sempre minore di quella necessaria per metterlo in moto

# ANKI

```anki
deck: Fisica
---
Forze di attrito
===
Forze che si oppongono al moto relativo di due corpi in contatto meccanico tra loro. Esistono molteplici modelli fenomenologici dell'attrito
- **attrito radente** si manifestra tra le sue superfici di due corpi solidi a contatto, a sua volta si divide in attrito statico e dinamico
- **attrito volvente** quando un corpo solido rotola su un altro corpo solido
- **atrito del mezzo** o **attrito viscoso**: resistenza opposta da un fluido  al moto di un corpo solido
- **attrito interno** agisce fra diversi strati di un fluido viscoso in moto
```


```anki
deck: Fisica
---
Attrito radente statico
===
Considerando un corpo di massa $m$, avente una superficie $S$ appoggiata su un piano orizzontale. Se applichiamo al corpo una Forza $\vec{F}$ orizzontalmente si verifica che
- Se il modulo di $F$ della forza è inferiore ad un certo valore $F_{\max}$ il corpo non si sposta, mentre se $F >F_{\max}$ il corpo si sposta nella direzione di $\vec{F}$
- Il valore limite per equilibrio $F_{\max}$ risulta indipendente, almeno entro ampi limiti, dall'area della superficie di appoggio $S$
- Variando invece il peso $W = mg = R_N$ del corpo e quindi la reazione vincolare normale del piano $F_{\max}$ cresce proporzionalmente secondo la legge $F_{\max} = \mu_s \cdot R_N$

Il coefficiente di proporzionalità $\mu_s$ è detto coefficiente di attrito statico, è una caratteristica dei due mezzi posti in contatto e dipende fortemente dallo stato delle superfici
```
<% tp.file.cursor(3) %>