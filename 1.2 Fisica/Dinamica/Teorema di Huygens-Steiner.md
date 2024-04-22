---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Si consideriun [[corpo rigido]] e due rette parallele, a distanza d tra di loro, di cui una passante per il centro di massa. Si consideri il centro di massa e un punto nello stesso piano appartenente alla seconda retta. Si centrino in questi punti due sistemi di riferimento con asse x lungo la congiungente dei due punti e l'asse z lungo la retta considerata per il calcolo del momento di inerzia.

$I_{CM}$ è il momento di inerzia rispetto all'asse passante per il centro di massa e $\rho'$ è la distanza dell'elemento $dm$ dall'asse $z'$.
$I_{o}$ è il momento di inerzia rispetto all'asse passante per il centro di massa e $\rho$ è la distanza dell'elemento $dm$ dall'asse z

>[!theorem]
>In un corpo rigido, il momento di inerzia calcolato rispetto ad un asse passante per O è uguale al momento di inerzia calcolate rispetto ad un asse parallelo al primo e passante per il centro di massa più la massa totale M del corpo moltiplicata per la distanza al quadrato tra i due assi paralleli:
>$$ I_{o} = I_{CM} + d^2 M $$
>
>>[!dim]
>>Si noti come le seguenti equazioni permettano di passare da un sistema di riferimento ad un altro
>>$$x' = x-d; y' = y; z' =z$$
>>mentre le distanze di $dm$ dagli assi z e z' possono essere scritte come:
>>$$ p^2 = x^2 + y^2 \ ; \ p'^2 = x'^2 + y'^2 $$
>>Consideriamo il momento di inerzia rispetto all'asse passante per O:
>>$$ I_{o} = \iiint_{V} \rho^2 \ \d m= \iiint_{V} (x^2 + y^2)\ \d m $$
>>Si cambino le variabile $x \to x'$, $y \to y'$, $z \to z'$ nell'equazione:
>>$$ \begin{align}
>>I_{o} &= \iiint_{V} (x^2 + y^2) \d m = \iiint_{V} [(x' + d)^2 + y^2] \d m = \\ 
>>&= \iiint_{V} (x'^2 + 2x'd + d^2 + y'^2) \d m = \iiint_{V} (p'^2 + 2x'd + d^2)\d m
\end{align}$$
>>Si sviluppi il prodotto
>>$$ \begin{align}
>> I_{o} &= \iiint_{V} (p'^2 + 2x'd + d^2)\d m =  \\
>> &= \iiint_{V} (p'^2 \d m) + \iiint_{V } 2x'd\ \d m + \iiint_{V} d^2 \ \d m = \\
>>&= I_{CM} + 2d \iiint_{V}x' \ \d m + d^2 M
>>\end{align} $$
>>Moltiplicando e dividendo  per M il secondo elemento a destra dell'equazione:
>>$$ I_{o} = I_{CM} + 2d \frac{M}{M} \iiint_{V} x' \ \d m + d^2M $$
>>ma $\displaystyle\frac{1}{M} \iiint_{V} x' \ \d m = x'_{CM} = 0$ quindi abbiamo
>>$$ I_{o} = I_{CM} + d^2M $$