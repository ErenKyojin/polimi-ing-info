---
aliases: 
creation date: 2024-03-12
---

Il join naturale è un operatore che associa dati uguali in relazioni diverse in base ad attributi omonimi.

>[!def]
>Date due relazioni $r_{1},r_{2}$ rispettivamente su $X_{1},X_{2}$ , il **join naturale** $r_{1} \bowtie r_{2}$ è una relazione definita su $X_{1} \cup X_{2}$ tale che
>$$ r_{1} \bowtie r_{2} = \{ t \in X_{1} \cup X_{2} \} $$
>ossia con $t[X_{1}] \in r_{1}, t[X_{2}] \in r_{2}$

> [!example]
> 
>
> > [!multi-column]
> > 
> > >  $r_{1}$
> > > 
> > > | matricola | corso   |
> > > | --------- | ------- |
> > > | 0000001   | ing-inf |
> > > | 0140203   | ing-ele |
> > > | 9300230   | ing-ele |
> > > | 0300400   | arch |
> > 
> > > $r_{2}$
> > >
> > > | corso   | preside    |
> > >| ------- | ---------- |
> > > | ing-inf | A. Rossi   |
> > > | ing-ele | A. Rossi   |
> > > | arch    | W. Bianchi |
> 
> e abbiamo quindi $r_{1} \bowtie r_{2}$ 
> 
> | matricola | corso   | preside    |
> | --------- | ------- | ---------- |
> | 0000001   | ing-inf | A. Rossi   |
> | 0140203   | ing-ele | A. Rossi   |
> | 9300230   | ing-ele | A. Rossi   |
> | 0300400   | arch    | W. Bianchi | 
> 
