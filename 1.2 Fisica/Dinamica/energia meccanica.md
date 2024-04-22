---
aliases: 
creation date: 2023-03-26 18:14
modification date: 2023-03-26 18:14
---

>[!def]
>Definiamo energia meccanica $E$ di un sistema la somma dell'[[Energia cinetica]] e di tutte le energie potenziali delle [[forze conservative]] in gioco, cioè: $E = E_{c} + E_{p}$


Si dimostra valere un risultato estremamente importante, ossia il [[teorema di conservazione dell'energia meccanica]]


## Conservazione dell'energia meccanica nei [[Sistemi di punti materiali]]

### Teorema dell'energia cinetica per i sistemi
Per ciascuno dei punti del sistema vale il teorema delle [[forza|forze]] vive o dell'[[Energia cinetica]]
$$ \mathcal{L}_{A_{i} \to B_{i},\gamma_{i}} = \int _{A_{i},\gamma_{i}}^{B_{i}} \!\vec{F}_{i} \, \cdot\mathrm{d}\vec{r} = \Delta E_{c,i}(A_{i},B_{i}) $$
dove $\vec{F}_{i} = \vec{F}_{i}^{(I)} + \vec{F}_{i}^{(E)}$ è la risultante delle [[forze interne]] ed esterne applicate al punti $i$-esimo. Sommando sull'indice $i$ si ottiene:
$$ \mathcal{L}_{A \to B,\gamma} \triangleq \sum_{i = 1}^n \mathcal{L}_{A_{i} \to B_{i},\gamma_{i}}\! =\! \sum_{i=1}^n \Delta E_{c,i}(A_{i},B_{i})\! =\! \sum_{i = 1}^n E_{c,i}(B_{i}) - \sum_{i = 1}^n E_{c,i}(A_{i})\! =\! E_{c}(B) - E_{c}(A)\! =\! \Delta E_{c}(A,B)$$
avendo ricordato la definizione di energia cinetica totale del sistema, data in precedenza.

Concludiamo quindi che anche per i sistemi di punti materiali vale il seguente:

>[!teorema] Teorema dell'energia cinetica
>Se un sistema di punti passa da una configurazione $A$ ad una configurazione $B$, il lavoro compiuto da tutte le forze applicate (interne ed esterne) è pari alla variazione di energia cinetica totale del sistema tra le configurazioni $A$ e $B$
>$$ \mathcal{L}_{A \to B,\gamma} = \Delta E_{c} (A,B) $$


## Energia potenziale interne
Consideriamo un sistema di due punti materiali interagenti fra di loro e con l'esterno:
$$ \vec{F}_{1} = \vec{F}_{12} + \vec{F}_{1}^{(E)}\qquad \vec{F}_{2} = \vec{F}_{21} + \vec{F}_{2}^{(E)}\qquad \vec{F}_{21} = -\vec{F}_{12} $$
Il lavoro compiuto dalle ferze $\vec{F}_{1}$ e $\vec{F}_{2}$ è
$$ L\! \equiv\! \mathcal{L}_{1} + \mathcal{L}_{2}\! =\!\!\! \int _{A}^B \!\!\!\! (f_{1} \cdot\mathrm{d}\vec{r}_{1} + \vec{F}_{2} \cdot \mathrm{d}\vec{r}_{2}) \!=\!\!\!\int _{A}^B \!\!\!\!(\vec{F}_{12} \cdot \mathrm{d}\vec{r}_{1} + \vec{F}_{21} \cdot \mathrm{d}\vec{r}_{2}) + \!\!\int_{A}^B \!\!\!\!\! (\vec{F}_{1}^{(E)} \cdot \mathrm{d}\vec{r}_{1} + \vec{F}_{2}^{(E)} \cdot \mathrm{d}\vec{r}_{2})\! =\! \mathcal{L}^{(I)} + \mathcal{L}^{(E)}    $$
Il lavoro compiuto dalle forze interne è:
$$\mathcal{L}^{(I)} = \mathcal{L}_{1,2}^{(I)} = \int _{A}^{B} \!\vec{F}_{12} \cdot (\mathrm{d}\vec{r}_{1} - \mathrm{d}\vec{r}_{2}) = \int _{A}^B \!\vec{F}_{12} \cdot \, \mathrm{d}\vec{r}_{12} $$
Se le forze interne sono conservative avremo
$$ \mathcal{L}_{1,2}^{(I)} = \int _{A}^B \!\vec{F}_{12} \cdot \mathrm{d}\vec{r}_{12} = E_{p_{12}}(A) - E_{p_{12}}(B)  $$
Più in generale, in un sistema di $n$ punti materiali, il lavoro compiuto dalle forze interne è una sommatoria (doppia) del tipo
$$ \mathcal{L}^{(I)} - \underset{ j > i }{ \sum_{i,j} } \mathcal{L}_{ij}^{(I)} = \underset{j > i}{\sum_{i,j}} \int _{A}^B  \! \vec{F}_{ij} \cdot \, \mathrm{d}\vec{r}_{ij}  $$


>[!oss]
>Per un sistema
## Conservazione dell'energia meccanica per un [[corpo rigido]]

Si consideri il teorema dell'energia cinetica, suddividendo le forze esterne in forze conservative e non conservative
$$ \d E_{c} = \delta \mathcal{L}^{(\text{ext})} = \delta \mathcal{L}_{cons}^{(ext)} + \delta \mathcal{L}^{\text{(ext)}}_{ncons} $$

Sappiamo che una [[forze conservative|forza conservativa]] ammetet un [[Energia potenziale]] $\delta \mathcal{L}_{cons}^{\text{(ext)}} = \d U^{\text{(ext)}}$

Sostituendo
$$ \d\underbrace{ (E_{c} + U^{\text{(ext)}}) }_{ E_{m} } = \delta \mathcal{L}_{\text{non cons}}^{(\text{ext})} \implies \d E_{m} = \delta \mathcal{L}_{\text{non cons}}^{\text{(ext)}}$$
Dove l'energia meccanica per un corpo rigido può essere scritta come
$$ E_{m} = \frac{1}{2} Mv_{cm}^2 + \frac{1}{2}I_{cm} \omega^2 + U^{\text{(ext)}} $$
e le forze non conservative non compiono lavoro allora l'energia meccanica si conserva:
$$ \d E_{m} = \delta \mathcal{L}_{\text{non cons}}^{\text{(ext)}} \ \text{se}\ \delta \mathcal{L}_{\text{non cons}}^{(\text{ext})} = 0 \implies \d E_{m} = 0 \implies E_{m} = \cost$$


# ANKI

```anki
id: 1705511622377
deck: Fisica
---
Energia meccanica
===
L'energia meccanica $E$ di un sistema è la somma dell'energia cinetica e di tutte le energie potenziali delle forze conservative in gioco, cioè:
$$ E = E_c + E_p $$
```


```anki
id: 1705511626426
deck: Fisica
---
Teorema dell'energia cinetica
===
Se un sistema di punti passa da una configurazione $A$ ad una configurazione $B$, il lavoro compiuo da tutte le forze applicate (interne ed esterne) è pari alla variazione di energia cinetica totale del sistema tra le configurazioni $A$ e $B$
$$
\mathcal{L}_{A \to B,\gamma} = \Delta E_c(A,B)
$$
```


```anki
id: 1705511628601
deck: Fisica
---
Energia meccanica e conservazione dell'energia per un corpo rigido
===
L'energia meccanica per un corpo rigido può essere scritta come
$$ E_m = \frac{1}{2} M v^2_{cm} + \frac{1}{2}I_{cm}\omega^2 + U^{\text{(ext)})} $$
```
<% tp.file.cursor(3) %>
