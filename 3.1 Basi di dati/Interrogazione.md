---
aliases: 
creation date: 2024-03-13
---

>[!def]
>Dato uno schema di base di dati $\mathbf{R}$, un'interrogazione è una funzione tale che $\forall \mathbf{r}$ istanza di $\mathbf{R}$, produce una relazione su un insieme di attributi $X$.



Data la base di dati con lo schema `STUDENTI(matricola, corso, anno iscr, media)` seguente, siamo interessati a conoscere tutti i dati degli studenti con media maggiore di 25

| matricola | corso   | anno di iscrizione | media |
| --------- | ------- | ------------------ | ----- |
| 130589    | ing-inf | 2020               | 29    |
| 194027    | ing-ele | 2018               | 21    |
| 486403    | ing-ele | 2020               | 27    |
| 959594    | ing-inf | 2021               | 24    |
| 959302    | arch    | 2020               | 25    |

sfrutteremo la seguente interrogazione:
$$ \pi_{\text{matr, corso, anno iscr}}(\sigma_{\text{media} > 25}(\text{STUDENTI})) $$

che produce

| matricola | corso   | anno di iscrizione |
| --------- | ------- | ------------------ |
| 130589    | ing-inf | 2020               | 
| 486403    | ing-ele | 2020               |