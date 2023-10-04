---
alias: generatore indipendente di tensione
---
Ha come equazione caratteristica
$$ v = e(t) $$
Con $e(t)$ funzione del tempo $t$, si tratta quindi di un bipolo tempo variante. Vedremo ad esempio il generatore di tensione sinusoidale $e(t) = V_{0} \cos (\omega t + \phi)$.
È un componente adinamico (non contiene derivate o integrali nelle variabili descrittive). Se $e(t) = 0$ il componente degenera in un [[cortocircuito]].
È un componente deinito solo su base corrente.
È un componente non lineare, infatti prese $i_{1}$ o $i_{2}$ abbiamo le rispettive tensioni $v_{1}$ o $v_{2}$ pari ad $e(t)$. Prendendo due costanti $\alpha_{1},\alpha_{2}$ e imponendo una corrente $\alpha_{1} i_{1}+ \alpha_{2} i_{2}$ la tensione sarà 
$$ e(t) \neq \alpha_{1}i_{1} + \alpha_{2}i_{2} = (\alpha_{1} + \alpha_{2})e(t) $$.
Si tratta di un componente attivo.

# ANKI

```anki
deck: Elettrotecnica
---
# Generatore indipendente di tensione
===
Bipolo con equazione caratteristica 
$$v = e(t)$$
È un componente adinamico, non generalmente lineare, definito solo su base corrente, attivo.

Duale del generatore indipendente di corrente.
```
<% tp.file.cursor(3) %>