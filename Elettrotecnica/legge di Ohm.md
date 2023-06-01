---
aliases: 
creation date: 2023-06-01 17:36
modification date: 2023-06-01 17:36
---

Consideriamo un cilindro $\d V$ di materiale conduttore caratterizzato da una densità volumetrica di carica mobile $\rho_{V} < 0$. La carica negativa degli elettroni mobili in $\d V$ sarà pari a $\rho_{V}\d V$. Assumiamo la presenza di un campo elettrico uniforme $\bar{E}$, all'interno del conduttore, diretto da $A$ verso $B$. Le sezioni $\d S$ in $A$ e $B$ saranno dunque caratterizzate da un potenziale $V_{A}$ e $V_{B}$, rispettivamente, con $\Delta V = V_{A} - V_{B} > 0$. Data la lunghezza $\d l = \mu E \Delta t$ del cilindretto (con $\mu E = |\bar{v}_{drift}|$ ), la quantità di carica libera contenuta nella regione limitata da $A$ e $B$ che in $\Delta t$, ad opera dell'azione del campo $\bar{E}$, è in grado di oltrepassare la sezione $\d S$ in $A$, è pari a $\Delta Q = \rho_{V} \mu E \Delta t\d S = \rho_{V} \d V$. Il lavoro normalizzato rispetto alla carica compiuto dal campo $\bar{E}$ per portare la carica da $A$ a $B$ è pari a
$$ \int _{B}^A \!\bar{E} \cdot \, \mathrm{d}\bar{l} = -\int _{A}^B \!\bar{E} \cdot\, \mathrm{d}\bar{l} = V_{B} - V_{A} = -\Delta V  $$
Da questa equazione, essendo $E$ costante in $\d V$, otteniamo $V_{B} - V_{A} = - E \d l$ da cui si ricava banalmente $E = \frac{\Delta V}{\d l}$. Possiamo dunque scrivere la relazione
$$ \frac{\Delta Q}{\Delta t} = \mu \rho_{V} \d S \frac{\Delta V}{\d l} = -\gamma \frac{dS}{dt} \Delta V  $$
dove $\gamma$ è la conducibilità del materiale. Questa formula ci fornisce la quantità di carica negativa che fluisce attraverso la sezione $\d S$ in $A$ e che proviene da $B$. In base alla convenzione sul verso della corrente,