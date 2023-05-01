>[!def] Grandezza fisica (classe di grandezze fisiche)
>Quando possiamo individuare un [[insieme]] di enti tra i quali possiamo stabilire:
>- una relazione d'ordine
>- un'operazione di somma e differenza tra enti
>- un'operazione di prodottoscalare tra enti
>- un'operazione di prodotto tra un qualsiasi ente ed un qualsiasi numero reale
>Allora questi enti formano una classe (o tipo) di grandezze fisiche

>[!esempio]
>Esempi di classi di grandezze fisiche sono
>- lunghezza
>- massa
>- intervallo di tempo
>- forza
>- lavoro

Una grandezza fisica si definisce mediante un preciso procedimento operativo, indicando come la si puó misurare

>[!def] Procedimento di misura di una grandezza fisica
>Misurare una grandezza fisica significa mettere in atto un procedimento per caratterizzarla quantitavamente


>[!esempio]
>Per avere una precisa stima quantitvamente parlando di una grandezza fisica $G$ dobbiamo determinare il numero di volte in cui un'altra grandezza arbitraria ma omogenea (ossia della stessa classe o tipo) a $G$ 
>$U$ prende il nome di unità di misura e deve essere definita una unità di misura convenuta per ogni classe di grandezze
>G si esprime mediante il rapporto
> $$
> n \equiv \frac{G}{U}
>$$


>[!oss] Cambiamento di unità di misura
>L'unità di misura puó essere cambiata, scegliendo una $U'$ diversa da $U$, la misura di $G$ diventa
> $$
> n' \equiv \frac{G}{U'} = \frac{G}{U} \frac{U}{U'} = \frac{U}{U'}n
>$$
>Il rapporto $\frac{U}{U'}$ si chiama [[fattore di ragguaglio]] per oassare da $U$ ad $U'$

>[!oss]
>Misura di una grandezza fisica come la differenza tra i valori di [[Indice di stato fisico]]



# Tipologie di grandezze fisiche

## Fondamentali
Le grandezze fisiche di tipo fondamentali sono quelle definite direttamente attraverso una misura, il procedimento strumentale consiste nel confronto con l'unità di misura.

Nel sistema intenrazionale di unità di misura, le tre principali grandezze fondamentali della meccanica sono:
- **Lunghezza**, misurata in [[metri]]
- **massa**, misurata in [[chilogrammi]]
- **intervallo di tempo**, misurato in [[Secondi]] 
  
Questo sistema è detto MKS (dalle unità di misura), alternativamente si può utilizzare il CGS (centimetri, grammi, secondi).

## Derivate
Altre grandezze sono definite per via indiretta attraverso [[Legge fisica|leggi]] che legano alcune grandezze fondamentali, vengono quindi **derivate** dalle altre grandezze. Nel sistema internazional sono derivate:
la [[velocità]], l'[[accelerazione scalare istantanea]] misurate rispettivamente in $m / s$ e $m / s^2$ sono esempi di grandezze derivate. Ma anche la [[forza]] e il [[Fisica/Cinematica/lavoro]], misurate in newton ($\mathrm{M = kg\ m\ s^{-2}}$) ed in joule ($\mathrm{J = kg\ m^2\ s^{-2}}$).

## Supplementari
Infine ci sono altre due grandezze annoverate tra le fondamentali nel SI. Sono le grandezze supplementari che non appartengonoalla fisica in quanto tale, sono le grandezzei di angolo piano e angolo solido, misurati rispettivamente in [[radianti]] ($\mathrm{rad}$) e [[steradianti]] ($\mathrm{sr}$).


Le grandezze fisiche fondamentali si dicono scalari, in quanto possono essere descritte unicamente da uno [[scalare]].
Per altre grandezze, oltre ad associare un numero reale detto [[Modulo]] bisogna associare direzione e verso, sono le cosí dette grandezze [[Geometria e algebra lineare/Vettori|vettoriali]].  Esempi di queste grandezze sono velocità, accelerazione, forza etc.

---


>[!oss] Rapporto tra grandezze scalari e grandezze vettoriali
>È sempre possibile riguardare una grandezza scalare come una grandezza vettoriale di uno spazio geometrico euclideo unidimensionale. In un tale spazio,quello della retta dei numeri reali, la direzione è fissa, il modulo è rappresentato dal modulo algebrico della misura della grandezza, il verso può essere solo positivo o negativo, e viene individuato dal segno della misura


# Dimensioni di una grandezza fisica
In fisica la dimensione ha un significato duplice:

>[!def] Dimensione di una grandezza fisica
>La dimensione di una grandezza fisica è rappresentata dalla classe di appartenenza della grandezza in esame


>[!esempio]
>Diremo che la dimensione di una distanza, come la dimensione di un'altezza o di una profondità o del perimetro di un tavolo è una lunghezza. 
>Allo stesso modo il volume di un edificio sarà con le dimensioni di una lunghezza al cubo, è utile formalizzare queste relazioni in equazioni dimensionali, sfruttando il simbolo dimensionale della grandezza fisica


>[!def]
> Si definisce simbolo dimensionale di una grandezza il simbolo della grandezza fisica tra parentesi quadre, riferendosi all'esempio precedente:
>  $$[\text{altezza}] = [\text{profondita'}] = [\text{perimetro}] = [\text{L}]\qquad [\text{volume}]=[L]^3$$


Tuttavia ci puó essere una seconda definizione di dimensione in fisica:
>[!def]
>Dimensione di una classe di grandezze fisicherispetto ad una data classe di grandezze fondamentali.
>Si definisce dimensione di grandezze fisiche $G$ rispetto alla classe di grandezze fisiche fondamentale $A$, l'esponente della classe di grandezze fisiche fondamentali considerata nell'equazione che descrive il procedimento indiretto di misura di $G$


>[!esempio]
>Consideriamo ad esempio la velocità, essa è una classe di grandezze fisiche detivate definita dalla relazione velocità = lunghezza / intervallo di tempo, che corrisponde alla equazione imensionale $[v] = [L][T]^{-1}$, potremo quindi dire che la velocità ha dimensione $1$ rispetto alla lunghezza e dimensione $-1$ rispetto al tempo, o che la velocità ha dimensionei di una lunghezza per un tempo alla meno 1.
