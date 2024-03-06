---
aliases: 
creation date: 2024-03-06
---

In una relazione, per come l'abbiamo definita, non si può assegnare un valore nullo ad un attributo di una tupla. Anche provare ad assegnare un valore del dominio specifico come valore nullo è controproducente, in primis non è ben distinguibile dal resto dei valori del dominio, in secondo luogo non è ben riconoscibile o identificabile un valore unico su diversi domini. Definiamo quindi un valore nullo `NULL`.
Il valore nullo cosí definito avrà il compito di segnalare in realtà due categorie di valori:
- valori sconosciuti: valori che esistono, ma di cui la base di dati non è al corrente
- valori inesistenti: valori che in quel contesto non possono esistere

inoltre è utile segnalare un attributo specifico che non può accettare valori nulli (per valori fondamentali, che renderebbero di fatto inutile la base di dati)