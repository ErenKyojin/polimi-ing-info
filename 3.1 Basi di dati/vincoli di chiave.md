---
aliases: 
creation date: 2024-03-06
---

> [!definition]
> Dato un insieme $K$ di attributi, lo definiamo **superchiave** di una relazione $r$ se quest'ultimo non contiene tuple distinte $t_{1},t_{2} : t_{1}(K) = t_{2}(K)$.
> Altrimenti lo definiamo **chiave** di $r$ se è una superchiave minimale di $r$ (quindi non esiste $K'$ di $r$ tale che $K' \subset K$ )

>[!example]
>
>| id   | username | email               | data di nascita | nome     |
>| ---- | -------- | ------------------- | --------------- | -------- |
>| 1254 | ame      | antonio@example.com | 1/1/1970        | antonio  |
>| 5959 | bk       | user@exampl3.com    | 2/4/2020        | beatrice | 
>| 0400 | kyo      | m.f@exampl3.com     | 2/4/2020                 |  beatrice        |
>
>- Considerato $K = \{ \text{id} \}$, $K$ è 
>	- superchiave (`id` identifica unicamente l'utente per definizione)  
>	- chiave (non c'è un sottoinsieme di $K$ escludendo l'insieme vuoto)
>- Considerato $K = \{ \text{username, data di nascità} \}$ è 
>	- superchiave 
>	- non è chiave, infatti $K' = \{ \text{username} \}$ è superchiave (e chiave)
>- Considerato $K = \{ \text{data di nascita, nome} \}$ 
>	- non è superchiave, quindi non è neanche chiave


