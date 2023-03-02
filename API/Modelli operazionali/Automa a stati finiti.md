Detti anche FSA, sono macchine deterministiche con un insieme finito di stati:
{Acceso, Spento}, {1,2,3,4,...,k}, {on,off}

Che si possono cosí rappresentare:
```mermaid
graph TB
	A
	B
	
```


>[!multi-column]
>
>>[!esempio]
>>```mermaid
>>graph LR
>> On -->|T| Off -->|T| On
>> 
>>
>>```
>
>>[!esempio]
>>```mermaid
>>graph LR
>>	On -->|R| Off -->|S| On
>>	On -->|s| On
>>	Off -->|R| Off
>>```


Quindi un automa a stato finito è costituito da:
- un insieme finito di stati $Q = \left\{ q_{1},q_{2},\dots,q_{n} \right\}$
- un insieme finito ([[Linguaggio|alfabeto]]) di ingressi 
- una [[funzione di transizione]] (parziale) $\gamma:Q \times I \to Q$

>[!esempio]
Possiamo rappresentarlo cosí:
>```mermaid
>graph LR
>	A --->|1| B
>	B --->|1| A((A))
>	A --->|0| A
>	B --->|0| B
>	i -..-> A
>```
>Abbiamo due stati che si scambiano per ogni 1 in ingresso e rimangono su se stessi se l'ingresso vale 0.
>L'ingresso i è in $A$ e termina su $A$ (indicato con il nodo circolare).
>In questo caso il linguaggio accettato è 
>L = {un numero pari di 1 ed un numero qualsiasi di 0}

definiamo una [[sequenza di mosse]] induttivamente tramite $\delta$ (funzione di transizione)

Un tipo notevole di automi FSA, sono gli automi traduttori

>[!tldr]
>Se $A$ automa a stati finiti:
> $$
>A = (Q,I,\delta,q_{0},F)
>$$
>
>- $Q$: insieme finito non vuoto, gli elementi di Q sono detti stati
>- $I$: Insieme finito non vuoto detto alfabeto, costituito da simboli
>- $q_{0}$: elemento di q, (che c'è perforza in quanto $Q$ non vuoto), stato iniziale
>- $F$ insieme degli stati finali, sottoinsieme di $Q$, puó essere vuoto, sottoinsieme generico, o tutto $Q$. La computazione non termina nello lo stato finale, non è l'automa a decidere se la computazione finisca.
>- $\delta$: funzione $Q\times I \to Q$, prende uno stato e una lettera e butta fuori uno stato ($q \xrightarrow{a}q'$)
>  
> Automa è completo se per ogni combinazione stato lettera c'è uno stato risultato.
> Sono deterministici, il comportamento è prevedibile in anticipo.
> Gli automi sono in [[GAL/relazione di equivalenza]]

# FAS come accettori di linguaggio
Problemi di:
- -> **Analisi**, hai l'automa, dammi il linguaggio accettato
- -> **Sintesi**, hai un linguaggio, costruisci un automa che lo accetta

**Automa minimo del linguaggio**: automa che riconosce un linguaggio col minor numero di stati



# Traduttori
![[Traduttore|traduttori]]

![[Ciclo]]


Visualizzamo meglio gli automi a stati finiti:

![[FSA.canvas]]
Possiamo aggiungere un ulteriore nastro detto pila, che funzionerà da memoria, questo tipo di automi si chiama [[Automa a pila]]


# Automa a stati finiti non deterministico

```mermaid
graph LR
	q1 -->|a| q2
	q1 -->|a| q3
```
Formalmente $\delta(q_{1},a) = \left\{ q_{2},q_{3} \right\}$
$\delta : Q \times I \to \mathcal{P}(Q)$

Praticamente l'automa è in q1, legge 'a' e decide se andare in q2 o in q3, sono un sovrainsieme dei FSA deterministici, se l'automa non legge niente rimaniamo nello stesso stato, se dobbiamo leggere una stringa $x$ chiadiamo $y$ la prima parte della stringa e $i$ l'ultimo carattere

$\delta^*(q,x) = \delta^*(q,y.i)$