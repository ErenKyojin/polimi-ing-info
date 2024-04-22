---
aliases: tuple
creation date: 2024-03-05
---

>[!def]
>Una tupla su un insieme di attributi $X$ è una funzione $t : X \to \text{dom}(A)$ tale che $x \mapsto t[x]$


$t[x]$ o $t.\!x$ indica il valore di $t$ rispetto ad $x$
$t[x,y]$ indica i valori di $t$ rispetto alle tabelle $x,y$

>[!example]
>
> |oggetto | quantità | prezzo |
> | --- | --- | --- |
> | penna | 20 | 1€ |
> | carta | 100 | 0.50€ |
> | matite | 40 | 0.70 € |
>
>Sia $t$ prima tupla di questa relazione
>$t[\text{quantità}] = t.\!\text{quantità} = 20$
>$t[\text{oggetto,prezzo}] = \text{penna, 1€}$