# Teorema degli zeri
Riguarda la soluzione di un equazione del tipo
$$f(x) = 0\tag{TZ1}$$
Quando $f(x)$ è un polinomio con grado $\leq 4$ esistono formule per calcolarne la soluzione, ma se $f$ ha grado $>$ 4 o è una funzione più complicata non esistono formule per le soluzioni.
Graficamente la $\text{TZ1}$ significa trovare tutte le intersezioni di $f$ con l'asse delle ascisse, ogni soluzione si chiama zero di $f$

Questo teorema ci permette di garantire uno zero di $f$ ed un modo per calcolarlo in una funzione [[continuità|continua]] su un intervallo e di segno opposto sugli estremi di tale intervallo.

>[!teorema] Teorema degli zeri
>Sia
>$$\begin{flalign}
>&i)\ f \text{ continua in }[a,b]\\
>&ii)\ f(a)\cdot f(b) < 0
>\end{flalign}$$
>Allora esiste $c\in(a,b)$ tale che $f(c) = 0$
>Se $f$ è anche strettamente monotona, lo zero è unico.
>>[!dim]
>>Vogliamo costruire una successione che tende ad uno zero di $f$.
>>Poniamo $c_1 = \frac{a+b}{2}$ punto medio dell'intervallo $[a,b]$
>>Se $f(c_1) = 0$ il teorema è dimostrato
>>Se $f(c_1) \neq 0$ guardiamo il segno di $f(a)\cdot f(c_1)$
>>$$\text{se} 
>>\begin{cases}
>>f(a) \cdot f(c_1) < 0 \\
>>f(a) \cdot f(c_1) > 0
>>\end{cases}
>>\text{ consideriamo l'intervallo } [a_1, b_1]$$
>> con $a_1 = a \quad b_1 = c_1$ nel primo caso
>> o $a_1 = c_1 \quad b_1 = b$ nel secondo caso
>>
>>Poniamo adesso $c_2 = \frac{b_1 + a_1}{2}$, punto medio dell'intervallo $[a_1,b_1]$, calcoliamo quindi $f(c_2)$ e procediamo come prima:
>>
>>Se $f(c_2) = 0$ lo zero cercato è $c_2$ ed il teorema è dimostrato, se $f(c_2) \neq 0$ guardiamo il segno di $f(a_1)\cdot f(c_2)$
>>$$\begin{cases}
>>f(a_1) \cdot f(c_2) < 0 \\
>>f(a_1) \cdot f(c_2) > 0
>>\end{cases}
>>\xRightarrow{[a_1,b_1]}
>>\begin{cases}
>>a_2 = a_1,\quad b_2 = c_2 \\
>>a_2 = c_2,\quad b_2 = b_1
>>\end{cases}$$
>>
>>Continuando così troviamo una sequenza di intervalli $[a_n, b_n]$ che ha le seguenti proprietà
>> 1. $a_n \leq a_{n+1}$ e $b_n \geq b_{n+1}$ quindi $a_n$ cresce e $b_n$ decresce
>> 2.  $b_n - a_n = \frac{b-a}{2^n}$ ogni intervallo viene dimezzato rispetto al precedente
>> 3. $f(a_n)\cdot f(b_n) < 0$ per come vengono scelti $a_n, b_n$
>> 
>> Per la 1 possiamo dedurre, per il teorema di esistenza del limite delle successioni [[monotone]], quindi
>> $$a_n \to l_1\quad \text{e}\quad b_n\to l_2\quad n\to+\infty$$
>> 
>> Dalla 2 abbiamo che $b_n - a_n = \frac{b-a}{2^n} \to 0$ se $n\to+\infty$, quindi $l_1 = l_2 = l$ per la continuità di $f$, abbiamo allora che
>> $$f(a_n)\cdot f(b_n)\to f(l)^2$$
>> 
>> Mentre dalla 3 e dal teorema di permanenza del segno deduciamo che
>> $f(l)^2 \geq 0$ e quindi $f(l) = 0$ e quindi $l$ è lo zero cercato



