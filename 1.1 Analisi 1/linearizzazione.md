# linearizzazione
Approssimare una data quantità, che dipende in modo non lineare da una o più variabili, con una che dipende da queste in modo lineare.
Vogliamo però aggiungere informazioni sull'errore commesso, in quanto si tratta comunque di un'approssimazione.

>[!esempio]
Un esempio molto semplice di linearizzazione è approssimare l'incremento di una funzione $f$ da $x_0$ ad $x_0 + dx$ sostituendo la retta tangente in $x_0$
>Più precisamente sia $f : (a,b) \to\mathbb R$ derivabile in un punto $x_0$ e diamo a $x_0$ un incremento $dx$, molto piccolo in valore assoluto ($|dx|\ll1$)
>Di conseguenza $f$ subisce un incremento $\Delta f$:
>$$\Delta f = f(x_0 + dx) - f(x_0)$$
>![[0E9E5559-3186-4E00-B550-D40B55008CF2.jpeg]]
>L'incremento valutato lungo la tangente è pari alla lunghezza del segmento $QR$ **con segno**, e quindi uguale a $\tan\alpha dx$
>Ossia a $f'(x_0) dx$ essendo $f'(x_0) = \tan\alpha$ (vedi [[derivata]])
>Questo incremento prende il nome di [[differenziale]] di $f$ nel punto $x_0$ e si indica col simbolo $df(x_0)$
