---
aliases: grafi
creation date: 2023-05-22 12:55
modification date: 2023-05-22 12:55
---

> [!def]
> Un grafo è una coppia $G = (V, E)$ in cui:
> - $V$ è un insieme di nodi detti anche vertici
> - $E$ è un insieme di archi deti anche lati o edges
> 

Un arco è una connessione tra due vertici, e due vertici connessi da un arco sono detti adiacenti, se un arco $e$ connette 2 vertici $u$ e $v$ può essere rappresentato dalla coppia $(u,v)$ di vertici che connette, quindi $E \subseteq V^2$

$|V|$ è il numero di vertici nel grafo, mentre $|E|$ è il numero di archi, $0 \leq |E| \leq |V|^2$

Esistono 2 tipi di grafi:

## Non orientati
In un grafo non orientato, un arco $(u,v)$ è lo stesso di $(v,u)$, non c'è alcuna nozione di direzione da un nodo all'altro