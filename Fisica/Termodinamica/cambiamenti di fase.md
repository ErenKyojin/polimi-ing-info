---
aliases: cambiamento di fase
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

```mermaid
graph LR
	A[Solido]
	B[Liquido]
	C[Aeriforme]
	A -->|sublimazione| C
	C -->|brinamento| A
	B -->|evaporazione| C
	A -->|fusione| B
	B --> |solidificazione|A
	C -->|condensazione| B
	
```

>[!oss]
>i cambiamenti di fase avvengono a [[temperatura]] costante, il corpo che cambia fase assorbe o cede [[calore]] senza ambiare temperatura, ma cambiando la propria struttura.
>Durante i cambiamenti di fase si introduce il [[calore latente]]


```tikz
\begin{document}
\begin{tikzpicture}
\draw(0,0) -- (4,0)node[right]{Q};
\draw(0,0) -- (0,3)node[left]{T};
\draw(0,0) -- (1,1) -- (3,1) -- (4,2);
\draw(1,0) -- ++ (0,0.1);
\draw(3,0) -- ++ (0,0.1);
\node[scale = .8] at (2,-.2) {cambiamento di fase};
\end{tikzpicture}
\end{document}
```

# ANKI

```anki
deck: cambiamenti di fase
---
<% tp.file.cursor(1) %>
===
<% tp.file.cursor(2) %>
```
<% tp.file.cursor(3) %>