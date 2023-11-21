# Metodo simbolico
Per risolvere un circuito costituito da N-terminali lineari, che ammette [[regime sinusoidale]] permanente e regime isofrequenziale (stessa $\omega$) trattiamo tutte le tensione e le correnti con gli opportuni [[fasori]], e passiamo quindi da un circuito dinamico a parametri reali ad un circuito adinamico a parametri complessi

>[!esempio]
>consideriamo il circuito
>![[Pasted image 20220523160724.png]]
>con $e(t)= E_m\cos\omega t$. L'equazione di stato è $$L\frac{d}{dt}i = e(t) - Ri \Rightarrow L\frac{d}{dt}i + Ri = e(t)$$
>
>Associamo i fasori ad ogni variabile
>$$
\displaylines{e(t) \quad \leftrightarrow \overline{E} = \quad E_m \\
i(t) \quad \leftrightarrow \quad \overline{i} \\
L\frac{d}{dt}i \quad \leftrightarrow \quad j\omega L\overline{i}}$$
>E riscriviamo l'equazione di stato come
>$$(j\omega L + R)\overline{i} = E_m$$
>$$\overline{i} =\frac{E_m}{j\omega L}$$
>E la [[corrente]] $i(t)$ è $$Re\{\overline{i}e^{j\omega t}\} = Re\left\{\frac{E_m(R - j\omega L)}{\omega^2L^2+R^2}(\cos\omega t + j\sin\omega t)\right\}$$
>e quindi
>$$i(t) = \frac{E_m}{\omega^2L^2 + R^2}(R\cos\omega t +\omega L \sin \omega t)$$
>analogamente possiamo scrivere $\overline{i} =|\overline{i}|e^{j\varphi_{\overline{i}}}$ con $|\overline{i}| = \frac{E_m}{\sqrt{\omega^2L^2+R^2}}$ e $\varphi_{\overline{i}} = -\arctan\frac{\omega L}{R}$
>e quindi
>$$i(t) = Re\left\{|\overline{i}|e^{j\varphi_{\overline{i}}}e^{j\omega t}\right\} = |\overline{i}|\cos(\omega t + \varphi_{\overline{i}})$$

In generale non dobbiamo per forza scrivere l'[[equazione di stato]] per poi passare nel dominio dei fasori, possiamo direttamente scrivere le equazioni complesse con l'equazioni dei componenti che già conosciamo come il [[resistore]], il [[condensatore]], e l'[[induttore]].


# ANKI

```anki
deck: elettrotecnica
---
Algoritmo del metodo simbolico
===
- associamo i fasori ad ogni variabile
	- $e(t) \to \bar{E} E_m e^{j\phi}$ (generatore)
	- $i(t) \to \bar{i}$ (sconosciuta)
	- $L\frac{d}{dt}i \to j\omega L \bar{i}$
	- $C\frac{d}{dt}v \to \frac{1}{j\omega C} \bar{v}$
- Riscriviamo l'equazione di stato con i fasori associati (o la calcoliamo direttamente nel dominio dei fasori)
- calcoliamo il fasore di interesse
- troviamo la parte reale del fasore di interesse moltiplicato per $e^{j \omega t}$
```
