---
aliases: 
creation date: 2023-03-26 18:14
modification date: 2023-03-26 18:14
---

>[!def]
>Definiamo energia meccanica $E$ di un sistema la somma dell'[[energia cinetica]] e di tutte le energie potenziali delle [[forze conservative]] in gioco, cioè: $E = E_{c} + E_{p}$


Si dimostra valere un risultato estremamente importante, ossia il [[teorema di conservazione dell'energia meccanica]]


## Conservazione dell'energia meccanica nei [[sistemi di punti materiali]]

### Teorema dell'energia cinetica per i  sistemi
Per ciascuno dei punti del sistema vale il teorema delle [[forza|forze]] vive o dell'[[energia cinetica]]
$$ \mathcal{L}_{A_{i} \to B_{i},\gamma_{i}} = \int _{A_{i},\gamma_{i}}^{B_{i}} \!\vec{F}_{i} \, \cdot\mathrm{d}\vec{r} = \Delta E_{c,i}(A_{i},B_{i}) $$
dove $\vec{F}_{i} = \vec{F}_{i}^{(I)} + \vec{F}_{i}^{(E)}$ è la risultante delle forze interne ed esterne applicate al punti $i$-esimo. Sommando sull'indice $i$ si ottiene:
$$ \mathcal{L}_{A \to B,\gamma} \triangleq \sum_{i = 1}^n \mathcal{L}_{A_{i} \to B_{i},\gamma_{i}}\! =\! \sum_{i=1}^n \Delta E_{c,i}(A_{i},B_{i})\! =\! \sum_{i = 1}^n E_{c,i}(B_{i}) - \sum_{i = 1}^n E_{c,i}(A_{i})\! =\! E_{c}(B) - E_{c}(A)\! =\! \Delta E_{c}(A,B)$$
 avendo ricordato la definizione di energia cinetica totale del sistema