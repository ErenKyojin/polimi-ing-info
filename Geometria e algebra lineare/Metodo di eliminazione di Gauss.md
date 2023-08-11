---
aliases: MEG
creation date: 2023-04-27 14:14
modification date: 2023-04-27 14:14
---
Il **Metodo di eliminazione di Gauss** (M.E.G.) afferma che attraverso due semplici operazioni elementari è sempre possibile ridurre a scala una matrice, in termini di sistemi è sempre possibile ridurre un sistema lineare ad un sistema lineare ridotto a scala **equivalente**


>[!def]
>Le operazioni elementari sulle righe di una matrice sono
>1. Sostituire a una riga la somma tra la riga stessa e il multiplo di un'altra riga
>2. Scambiarsi di posto due righe


Entrambe queste operazioni sono reversibili:
- Se scambio di posto due righe, posso semplicemente scambiarle di nuovo
- Se sommo ad una riga il multiplo di un altra riga, mi è sufficiente moltiplicare per l'inverso del multiplo della medesima altra riga

>[!proposizione]
>Dati i sistemi lineari $A \cdot \mathbf{x} = \mathbf{b}$ e $A' \cdot \mathbf{x} = \mathbf{b}'$ con $[A'|\mathbf{b}']$ ottenuta da $[A | \mathbf{b}]$ tramite operazioni elementari. Allora i due sistemi sono equivalenti.
>
>>[!dim]
>>La dimostrazione si fa per induzione sul numero di operazioni elementari. Analizziamo il caso base in cui $[A'|\mathbf{b}']$ è ottenuta da $[A|\mathbf{b}]$ con una operazione elementare.
>>Se è uno scambio i sistemi lineari sono equivalenti, se $A'_{j} = A_{j} + tA_{i}$ e $\mathbf{b}'_{j} = b_{j}+tb_{i}$ e $\mathbf{v}$ è soluzione di $A \cdot \mathbf{x} = \mathbf{b}$ allora $A_{j}\cdot \mathbf{v}  = b_{j}$ e $A_{i} \cdot \mathbf{v} = b_{i}$.
>>Quindi $A_{j}' \cdot \mathbf{v} = A_{j} \cdot \mathbf{v} + t \cdot A_{i} \cdot \mathbf{v} = b_{j} + tb_{i} = b_{j}'$

zz