# massimi e minimi
>[!def]
>Si dice che $M$ è massimo di una [[Funzioni|funzione]] $f$ in $[a,b]$ è punto di massimo se
>$$f(x_0) = M \geq f(x),\quad \text{ per ogni } x \in [a,b]$$

Analogo per il minimo, ci sono poi gli estremi locali

>[!def]
>Si dice che $M$ è un massimo locale (o relativo) per $f$ e che $x_0$ è un punto di massimo locale se:
>Esiste un intervallo $(x_0-\delta, x_0 + \delta)$ tale che $M = f(x_0) \geq f(x)$ per ogni $x \in (x_0-\delta, x_0+\delta)\cap[a.b]$

Analogo per il minimo locale

Notiamo che:
- minimo e massimo globale di $f$ se esistono sono unici
- Massimi e minimi locali possono essere più di uno, ed ogni estremo globale lo è anche locale

>[!esempio]
>![[E197D5D5-E828-482F-BCDB-06CA2C452391.jpeg]]
> La funzione a sinistra ha:
> - Massimo globale in $M = f(x_2)$, $x_2$ unico punto di massimo globale
> - Minimo globale $m = f(a)$, $a$ unico punto di minimo globale
> - Un massimo locale in $x = x_0$
> - Due minimi locali in $x = x_1$ e $x = b$
> 
> La funzione a destra ha:
> - Un massimo locale in $x = x_1$
> - Un minimo globale $m = f(b) = f(x_0')$, $b$ ed $x_0'$ sono punti di minimo globale

### Teorema di Fermat

>[!teorema] #Teorema di Fermat
>Sia $f : [a,b] \to\mathbb R$, derivabile in $x \in (a,b)$. Se $x$ è estremo locale allora
>$$f'(x) = 0$$ 
>>[!dim]
>> Sia $x$ un punto di massimo locale. Allora per $z$ abbastanza vicino ad $x$ si ha $f(z) \leq f(x)$, quindi:
>> $$z < x \Rightarrow \frac{f(z)-f(x)}{z-x}\geq 0\Rightarrow f'_-(x) = \lim\frac{f(z)-f(x)}{z-x}\geq 0$$
>>$$z > x \Rightarrow \frac{f(z)-f(x)}{z-x} \leq 0 \Rightarrow f'_+(x) = \lim\frac{f(z)-f(x)}{z-x} \leq 0$$
>>(Avendo utilizzato il teorema di permanenza del segno)
>>Essendo $f$ derivabile in $x$ si ha $f'(x) = f'_-(x) = f'_+(x) = 0$

I punti di massimo e minimo sono [[punti stazionari]]

## ricerca di massimi e minimi
Supponiamo di avere la solita funzione $f : [a,b]\to\mathbb R$ e di volerne cercare i massimi e i minimi.
Se $f$ È derivabile si può procedere nel modo seguente:
1. Si calcola $f(a)$ e $f(b)$
2. Si calcola $f'(x)$ e si risolve $$f'(x) = 0$$Così ricaviamo i punti stazionari, tra i quali gli eventuali estremi locali interni (a,b)
3. Se non vi sono punti stazionari, $f(a)$ o $f(b)$ sono punti di estremo globale, se invece $x = x_0$ è un punto stazionario, bisogna però stabilirne la natura. Per farlo può essere utile studiare il segno di $f'$ in un interno di $x_0$, ricordando che $f'\geq 0$ implica $f$ crescente, $f' \leq 0$ implica $f$ decrescente. 
![[BF94DB2C-82F6-489B-92D2-7F09C9865EA1.jpeg]]
Nel primo caso $x_0$ è un [[flesso]] orizzontale
Nel secondo caso $x_0$ è massimo locale
Nel terzo caso $x_0$ è minimo locale
Nel quarto caso $x_0$ è un [[flesso]]
4. Trovati gli eventuali estremi locali si calcola il valore di $f$ in questi punti e lo si confronta con $f(a)$, $f(b)$

