---
title: 'minute-book-6.pdf'
---
# ZÁPISNICA

### TÍM 07

### 6. STRETNUTIE

--- 

#### 📆 Dátum: 21/11/2023

#### 🕓 Čas: 17:00

#### 📍 Miesto: FIIT STU 5.27

---

### Prítomní 👩‍👨‍👧‍👦
Christian Danížek, Braňo Hozza, Alexandra Gurková, Samuel Hetteš, Ctibor Kovalčík, Kristián Košťál, Adam Prísenžňák, Viktor Valaštín, Karolína Tóthová

 ---

### Poznámky zo stretnutia 📝
 - nefunguje deploy
 - padla databáza, je to v procese riešenia
 - problém s tým, aby nebola adresa 2x - nechceme aby sa nám tie NFT opakovali
	 - chceme radiť podľa block_id
	 
 - ak bude server, môžeme nahodiť všetko potrebné
 - Adam sa venoval refaktoringu
 - Dizajn pre zobrazovanie NFT je v procese; FE pre to spraviť v priebehu víkendu


---

### Nápady 💡
- indexovanie podľa času; prvých 1000 blokov je nemenných potom je možné spraviť group by a sort by block_id a treba ísť po jednotlivých batchoch (Kikov návrh)
	 - je potrebné pripojiť sa priamo na Postgres a vyskúšať to tak (Viki navrhol)
	 - select je potrebné robiť nad PG, nie nad GraphQL, select *, treba groupovať celý PG, nelimitovať
 - Adam môže vytvoriť tabuľku, kde bude zoznam adries a bude tam blok kde sa tá adresa vyskytla prvýkrát