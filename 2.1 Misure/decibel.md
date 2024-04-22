---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Il decibel, sottomultiplo $\frac{1}{10}$ del [[bel]], esprime il rapporto di potenze o anche ampiezze mediante il logarimto in base dieci


$$ \left( \frac{P_{2}}{P_{1}} \right)_{(dB)} = 10 \log_{10}\left( \frac{P_{2}}{P_{1}} \right) $$
I rapporti di ampiezze quando tensioni e correnti sono misurate su uno stesso carico si esprimono in decibl secondo la relazione
$$ \left( \frac{A_{2}}{A_{1}} \right)_{(dB)} = 20 \log_{10}\left( \frac{A_{2}}{A_{1}} \right) = 20 \log_{10} \left( \frac{V_{2}}{V_{1}} \right) = 20 \log_{10}\left( \frac{I_{2}}{I_{1}} \right) $$

$1 \dB = 1.25 = 1 + 25\%$.

## Alternative $dBx$"
Possiamo scegliere un livello di potenza e usarlo come livello di riferimento

$$P_{(\dB x)} = 10 \log_{10} \left(\frac{P}{P_{x}}\right)$$

> [!def] nomenclatura
> se usiamo sempre 1 mW di potenza allora $\dB m$
> se usiamo sempre 1 W di potenza allora $\dB W$
> 
>$$ P_{(\dB m)} = 10 \log_{10}\left(\frac{P}{1 \text{ mW}}\right) $$


>[!remark]
>Le potenze in $dBx$ non si sommano!
>
>$P_{1(\dB m)} + P_{2(\dB m)} \neq P_{3(\dB m)}$
>$1 W + 1 W = 2 \times 1 W = 3 \dB + 30 \dB m= 33 \dB m$


# ANKI

```anki
id: 1700212217417
deck: Misure
---
# Decibel
===
Il decibel è un sottomultiplo del bel, esprime il rapporto di potenze (o di ampiezze) mediante il logaritmo in base dieci, quindi
$$ \left(\frac{P_2}{P_1}\right)_{dB} = 10 \log_{10} \left(\frac{P_2}{P_1}\right) $$

```


```anki
id: 1700212217520
deck: Misure
---
# Decibel di potenze
===
I rapporti di ampiezze sullo stesso carico si esprimono in decibel secondo la relazione. Infatti essendo la potenza proporzionale al quadrato della tensione o al quadrato della corrente
$$\left(\frac{W_1}{W_2}\right)_{dB}= 10\log_{10} \left(\frac{W_1}{W_2}\right) = 10 \log_{10} \left(\frac{V_1}{V_2}\right)^2 = 20 \log \left(\frac{V_1}{V_2}\right)$$
(Si può dimostrare analogamente con la corrente)
```


```anki
id: 1700212217745
deck: Misure
---
# dBx
===
Se fissiamo un livello di potenza possiamo utilizzarlo come riferimento e avremo quindi
$$ P_{(\text{dB}x)} = 10\log_{10} \left(\frac{P}{P_x}\right $$

Con la x ci si riferisce al prefisso dei watt, quindi ad esempio se scegliamo 1 milliwatt come valore di riferimento ci riferiremo ai $dBm$, altrimenti per un watt direttamente $dBW$
```
