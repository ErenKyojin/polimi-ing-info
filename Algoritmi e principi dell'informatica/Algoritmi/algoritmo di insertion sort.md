---
aliases: 
creation date: 2023-05-02 10:36
modification date: 2023-05-02 10:36
---

```clike
for j := 2 to A.length
	key := A[j]
	i := j - 1
	while i > 0 and A[i] > key
		A[i + 1] := A[i]
		i := i - 1
	A[i + 1] := key
```


| Pos | 1   | 2   | 3   | 4   |
| --- | --- | --- | --- | --- |
|     |     |     |     |     |