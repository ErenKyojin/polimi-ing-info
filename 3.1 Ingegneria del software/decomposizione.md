---
aliases: 
creation date: 2024-03-06
---

Una decomposizione in moduli è la divisione di un problema in una serie di sottoproblemi tali che:
- semplifichi lo sviluppo concorrente e le modifiche al modulo stesso
- modifica indipendente dagli altri moduli
- devo poter esprimere cosa offre ogni modulo, ossia la sua interfaccia

Per effettuare una decomposizione si usa il principio di [[information hiding]]. Un modulo è caratterizzato da ciò che può essere modificato senza che gli altri moduli ne risentano, quindi un modulo è una scatola che al suo esterno deve mostrare il minimo indispensabile per gli altri moduli. Inoltre deve essere coerente (non includere due funzioni estremamente diverse nello stesso modulo se possono essere separate in altri moduli)