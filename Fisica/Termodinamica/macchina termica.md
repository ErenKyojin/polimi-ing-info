---
aliases: 
creation date: 2023-12-22
---

```mermaid
graph LR

T2["----T2----"] 
T1["----T1----"]
subgraph machine 
M ---> L
end
T1 ---> M
M ---> T2
```