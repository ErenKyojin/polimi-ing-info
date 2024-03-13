---
aliases: 
creation date: 2024-03-13
---

>[!def]
>Il theta join è un operatore derivato da prodotto cartesiano seguito da una selezione, ossia è definito come
>$$ r_{1} \bowtie_{F} r_{2} = \sigma_{F} (r_{1} \bowtie r_{2}) $$
>dove $r_{1}$ ed $r_{2}$ non hanno attributi in comune ed $F$ è una frase proposizionale che usiamo per la selezione

> [!esempio]
> 
>
> > [!multi-column]
> > >| corso       | professore |
> > >| ----------- | ---------- |
> > >| analisi 1   | A. Rossi   |
> > >| analisi 2   | A. Rossi   |
> >> | informatica | W. Bianchi | 
> > 
> >> | materia     | iscritti |
> >> | ----------- | -------- |
> >> | analisi 1   | 200      |
> >> | analisi 2   | 150      |
> >> | informatica | 210      | 
> > 
>
> | corso       | professore | materia     | iscritti |
> | ----------- | ---------- | ----------- | -------- |
> | analisi 1   | A. Rossi   | analisi 1   | 200      |
> | analisi 2   | A. Rossi   | analisi 2   | 150      |
> | informatica | W. Bianchi | informatica | 210      | 
> 
