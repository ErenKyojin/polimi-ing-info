---
aliases: 
creation date: 2023-04-05 10:42
modification date: 2023-04-05 10:42
---

Nel [[moto relativo]] la velocità di trascinamento è la velocità che il punto dello spazio occupato dal nostro [[punto materiale]] ha, nel sistema relativo, rispetto a quello fisso, ossia la velocità che avrebbe se fosse fermo rispetto al sistema di riferimento mobile.


## Calcolo della velocità
Abbiamo visto che, in generale, la velocità di trascinamento varia da punto a punto del sistema mobile, vediamo ora come è possibile calcolarla, conoscendo le componenti di traslazione e di rotazione del [[moto di trascinamento]]. A tale scopo definiamo tre [[GAL/vettori|vettori]] posizione:
- $\vec{r}_{a} \equiv \overrightarrow{OP}$ vettore posizione assoluto
- $\vec{r}_{r} = \overrightarrow{O'P}$ vettore posizione relativo
- $\vec{r}_{O'}\equiv\overrightarrow{OO'}$ vettore posizione assoluto dell'origine $O'$ del sistema mobile
per i quali valgono, come diretta conseguenza della definizione, le relazioni:
$$
\vec{r}_{a} = \vec{r}_{r} + \vec{r}_{O'}\quad;\quad d\vec{r}_{a} = d\vec{r}_{r} + d\vec{r}_{O'}\quad ;\quad \Delta \vec{r}_{a} = \Delta \vec{r}_{r} + \Delta \vec{r}_{O'}
$$
Osserviamo che mentre è evidente che la variazione del vettore posizione assoluto coincida con lo spostamento assoluto sopra definito, la variazione del vettore posizione di $O'$ non coincide, in generale, con lo spostamento di trascinamento, e la variazione del vettore posizione relativo non coincide con lo spostamento relativo, cioè in generale:
- $d\vec{r}_{a} = d\vec{s}_{a} \implies \vec{v}_{a} \equiv \dfrac{d\vec{s}_{a}}{dt} = \dfrac{d\vec{r}_{a}}{dt}$
- $d\vec{r}_{r} \neq d\vec{s}_{r} \implies \vec{v}_{r} = \dfrac{d\vec{s}_{r}}{dt} \neq \dfrac{d\vec{r}_{r}}{dt}$
- $d\vec{r}_{O'} \neq d\vec{s}_{t} \implies \vec{v}_{t} \equiv \dfrac{d\vec{s}_{t}}{dt} \neq \dfrac{d\vec{r}_{O'}}{dt}$
Se allora esplicitiamo il calcolo della [[velocità assoluta]] come [[derivata]] del vettore posizione assoluto otteniamo:
$$
\begin{align}
\vec{v}_{a} &= \frac{d\vec{r}_{a}}{dt} = \frac{d(\vec{r}_{r} + \vec{r}_{O'})}{dt} = \frac{d}{dt}(x'\hat{u}_{x'} + y'\hat{y}_{y} + z'\hat{u}_{z}) + \frac{d\vec{r}_{O'}}{dt} = \\
&=  \left( \frac{dx'}{dt}\hat{u}_{x'} + \frac{dy'}{dt}\hat{u}_{y'} + \frac{dz'}{dt}\hat{u}_{z}     \right) + \left( x' \frac{d\hat{u}_{x'}}{dt}   + y'\frac{d\hat{u}_{y'}}{dt} + z' \frac{d\hat{u}_{z'}}{dt} \right) + \vec{v}_{O'}
\end{align}
$$
Nel primo termine fra parentesi dell'ultima espressione riconosciamo la velocità relativa in coordinate cartesiane e quindi per la legge di composizione delle velocità i due termini restanti costituiscono la velocità di trascinamento, ove abbiamo definito con il simbolo $\vec{v}_{O'}$ la velocità dell'origine $O'$ del sistema mobile (la derivata del vettore posizione dell'origine del sistema mobile).
Possiamo dunque scrivere la [[velocità relativa]] e quella di trascinamento come:
$$
\vec{v}_{r} = \left( \frac{dx'}{dt}\hat{u}_{x'} + \frac{dy'}{dt}\hat{u}_{y'} + \frac{dz'}{dt}\hat{u}_{z'}     \right)\quad ;\quad \vec{v}_{t}=\vec{v}_{O'} + \left( x'\frac{d\hat{u}_{x'}}{dt}  + y'\frac{d\hat{u}_{y'}}{dt} + z'\frac{d\hat{u}_{z'}}{dt}  \right)
$$

Nel caos di pura traslazione fra i due [[sistemi]] di riferimento, i versori del sistema mobile non cambiano nel tempo, quindi il termine fra parentesi nell'espressione della velocità di trascinamento scompare, ed essa va a coincidere per tutti i punti dello spazio con le velocità dell'origine, come è del resto intuitivo. Se invece è presente anche un moto di trascinamento rotatorio il termine aggiuntivo, che non si annulla, può essere riscritto in funzione della velocità angolare del sistema mobile.
Sia ora $\vec{\omega}$ il vettore velocità angolare del sistema mobile all'istante di tempo considerato: ciascuno dei suoi versori cartesiani, allora, è soggetto alla stessa velocità angolare. Calcoliamo ora le derivate di questi versori: ciascuno dei tre sta descivendo in quell'istante di tempo, un moto di precessione intorno all'asse di rotazione

È noto che, se un vettore $\vec{A}$ di modulo costante sta eseguendo un moo di precessione con velocità angolare $\vec{\omega}$ la sua derivata è pari al prodotto vettore:

> [!multi-column]
>
>>[!-]
>> $$ \frac{d\vec{A}}{dt} = \vec{\omega} \times \vec{A}  $$
>
>>[!-]
>>```tikz
>> \usetikzlibrary{arrows.meta}
>>\begin{document}
>>\begin{tikzpicture}
>>\draw (0,0) circle (2 and 1);
>> \draw[{Stealth[scale = 2]}-] (-2,0.2);
>> \draw[-{Stealth[scale = 2]}] (0,-4) -- (0,.2)node[left]{$\vec{\omega}$};
>> \draw[-{Stealth[scale = 2]}] (0,-3) -- (1.8,.4) node[left]{$\vec{A}$};
>> \end{tikzpicture}
>> \end{document}
>> ```

Questo sarà dunque vero, nel nostro caso, per ciascuno dei tre versori del sistema mobile:
$$ \frac{d\hat{u}_{x'}}{dt} = \vec{\omega} \times \hat{u}_{x'}\quad ; \quad \frac{d\hat{u}_{y'}}{dt} = \vec{\omega} \times \hat{u}_{y'}\quad;\quad \frac{d\hat{u}_{z'}}{dt} = \omega \times \hat{u}_{z'}    $$
Il termine fra parentesi, perciò, è pari a
$$
\begin{align}
x' \frac{d\hat{u}_{x'}}{dt} + y'\frac{d\hat{u}_{y'}}{dt} + z' \frac{d\hat{u}_{z'}}{dt} &= x'\vec{\omega} \times \hat{u}_{x'} + y' \vec{\omega} \times \hat{u}_{y'} + z'\vec{\omega} \times \hat{u}_{z'}    \\
&= \vec{\omega} \times (x' \hat{u}_{x'} + y'\hat{u}_{y'} + z'\hat{u}_{z'}) = \vec{\omega} \times \vec{r}_{r}
\end{align}
$$
in definitiva, la velocità di trascinamento vale: $\vec{v}_{t} = \vec{v}_{O'} + \vec{\omega} \times \vec{r}_{r}$

### CASI PARTICOLARI

1. moto traslatorio puro
   $$ \vec{\omega} = 0 \implies \vec{v}_{t} = \vec{\omega} \times \vec{r}_{r} $$
   in tutti i punti dello spazio (banalmente)

2. moto rotatiorio puro
   $$ \vec{v}_{O'} = 0 \implies \vec{v}_{t} = \vec{\omega} \times \vec{r}_{r} $$
   quindi la velocità di trascinam  