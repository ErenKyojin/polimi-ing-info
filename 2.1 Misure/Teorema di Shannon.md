---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

>[!teorema]
>Un filtro passa-basso ideale con frequenza di taglio pari alla [[frequenza di Nyquist]] $f_{N} = \frac{f_{c}}{2}$ permette di ricostruire il segnale originale, dal segnale campionato, se la massima frequenza $f_{max}$ del segnale d'ingresso è tale che $f_{\max} = f_{N}$

se $f_{\max} > F_{N}$ si avrà [[aliasing]] o equivocazione spaziale

Raramente si lavora al limite di campionamento di Shannon in quanto si è comunque più proni ad errori, spesso conviene stare molto "larghi" coi campioni a meno di limiti hardware o software (specialmente con interpolazione lineare)