---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Supponiamo che l'asse di rotazione di un corpo rigido vari nel tempo, ad esempio una ruota.
Ogni elemento della ruota compie un [[roto-traslazioni|moto roto-traslatorio]] con una velocità:
$$ \vec{v} = \vec{v}_{CM} + \vec{\omega} \times (\vec{r} - \vec{r}_{CM}) $$
il moto è definito di puro rotolamento se la velocità del punto di contatto ruota-terreno $p^*$ è nulla.
Ciò significa che la ruot anon sta strisciando. Infatti, il punto di contatto cambia istante per istante, ma ogni volta la sua velocità è nulla.
Applicando la legge precedente a $p^*$
$$ \vec{v}^* = \vec{v}_{CM} + \omega \times (\vec{r}^* - \vec{r}_{CM}) $$
visto che $\vec{v}^*$ è nulla, perchè il punto di istantanea rotazione è fermo.
$$ o = \vec{v}_{CM} + \omega \times (\vec{r}_{CM} - \vec{r}^*) $$
da cui ricaviamo $\vec{v}_{CM} = \vec{w} \times (\vec{r}_{CM} - \vec{r}^*)$.
Quindi inserendo l'espressione di $\vec{v}_{CM}$ appena trovata, nella legge di composizione generale, è possibile scrivere:
$$ \begin{align}
&\vec{v} = \vec{v}_{CM} + \vec{\omega} \times (\vec{r} - \vec{r}_{CM}) \\
&\vec{v} = \vec{\omega} \times (\vec{r}_{CM} - \vec{r}^*) + \vec{\omega} \times (\vec{r} - \vec{r}_{CM}) \implies \vec{v} = \vec{\omega} \times (\vec{r} - \vec{r}_{CM})
\end{align} $$
Quindi nel moto di puro rotolamento, rispetto al punto di contatto il moto diventa da roto-traslatorio a solo rotatorio, quindi rispetto a questo asse un moto di puro rotolamento è un moto rotatorio con asse fisso.
Possiamo vedere quindi questo tipo di moto come:
- moto traslatorio più un moto rotatorio intorno al centro di massa
- moto di rotazione attorno all'asse istantanea di rotazione

possiamo quindi scrivere
$$ \begin{cases}
\vec{p} = M\vec{v}_{CM} \\
\vec{L}^* = I^*\vec{\omega} + \vec{L}_{\perp}^*
\end{cases} $$