---
aliases: 
creation date: 2024-02-27
---

L'HTTP per risorse protette richiede l'header `authorization`, l'errore se questa dovesse mancare è 401, ed in questo caso il browser chiederebbe tramite una finestra di input le credenziali. NON È UN METODO SICURO, non sono criptate. Si può sfruttare il canale criptato TCP/UDP che è quello che appare come HTTPS.