# Teorema di de l'Hospital 
Una notevole applicazione del [[Calcolo differenziale]] si ha nel calcolo dei [[Limite|limiti]] con forme di indecisione $\frac{0}{0}$ e $\frac\infty\infty$

>[!teorema]
Siano $f,g$ due funzioni derivabili in un intervallo $(a,b)$ con $g, g'\neq0$ in $(a,b)$. Se
$i)\underset{x\to a^+}{\lim}f(x) = \underset{x\to a^-}{\lim} g(x) = 0$ oppure $\pm\infty$
$ii)\underset{x\to a^+}{\lim}f'(x)/g'(x) = L \in\mathbb R^*$
Allora
$$\lim_{x\to a^+}\frac{f(x)}{g(x)} = L$$
Il teorema continua a valere se $a = -\infty$ o se si considera il limite per $x \to b^-$ con $b \leq +\infty$

>[!error] Attenzione
Il teorema di de L'Hospital è molto utile e "potente", ma anche delicato, quindi bisogna fare attenzione a questi possibili errori:
>- Il teorema è esclusivo dei quozienti (non utile ai prodotti)
>- Il teorema è esclusivo dei quozienti che sono effettivamente forme di indeterminazione
>- Bisogna calcolare il quoziente delle derivate e *non* la derivata del quoziente
>- Se il limite di $f' / g'$ non esiste non possiamo affermare niente sul limite di $f/g$, in particolare non è detto che anche quest'ultimo non esista
>
>
>Inostre bisogna fare attenzione ad un limite in particolare che già conosciamo:
>$$\lim_{x\to0} \frac{\sin x}{x} \tag{1}$$
>Si tratta di una forma indeterminata $\frac{0}{0}$ e applichiamo il teorema otteniamo che
>$$\lim_{x\to0} \frac{\cos x}{1} = 1$$
>Che, in realtà, è anche la risposta corretta ma vi verrebbe considerato errore in una prova di esame. Infatti la derivata del seno si basa già sulla conoscenza del limite $\text{(1)}$, questo limite va risolto come abbiamo fatto nei [[limiti notevoli]]

