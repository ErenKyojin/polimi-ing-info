---
aliases: 
creation date: 2023-05-11 10:59
modification date: 2023-05-11 10:59
---

$$ h(k,i) = (h_{1}(k) + ih_{2}(k)) \mod m $$
$h_{1}$ e $h_{2}$ sono funzioni hash ausiliarie
Perchè la sequenza prodotta sia una permutazione di (0, ..., m - 1) $h_{2}(k)$ deve essere primo rispetto a $m$ (non deve avere divisori comuni tranne l'1).
Il numero di sequenza generate è $\Theta(m^2)$ in quanto ogni coppia $(h_{1}(k),h_{2}(k))$ produce una sequenza di ispezione distinta


