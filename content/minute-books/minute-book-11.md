---
title: 'minute-book-11.pdf'
---
# ZÁPISNICA

### TÍM 07

### 11. STRETNUTIE

--- 

#### 📆 Dátum: 26/2/2024

#### 🕓 Čas: 16:00

#### 📍 Miesto: FIIT STU 5.27

---

### Prítomní 👩‍👨‍👧‍👦

Christian Danížek, Braňo Hozza, Samuel Hetteš, Ctibor Kovalčík, Adam Prísenžňák, Karolína Tóthová

 ---

### Poznámky zo stretnutia 📝
- dokončená retrospektíva
- vytvorenie taskov na ďalší šprint + ohodnotenie
- treba spraviť to, že ktoré NFT patrí komu
- namapovať aj previous owners
- hide NFT na profile
- mapping medzi NFT a userom
- likes vyriešiť ako verejné a komentáre pre usera
- Adam - komentáre zatiaľ neriešiť, možno by sme mohli indexovať aj naming
- rozdelili sme databázy, že čo má byť v ktorej:
    - tokengram - likes, profiles
    - neo4j - vzťahy
    - indexer - index owners
- migrate from graphql to pg
- nasadiť python script na náš server - deploy data processor
- deploy BE
- trending - koľko ľudí to videlo, časť hrana a časť koľko ľudí to videlo (get request)
- recommendations - tagy, na základe nich vybrať NFTs, bude ukazovať iba také NFTs, ktoré spĺňajú okruh obľúbených tagov, malá šanca (20%) že sa zobrazí aj niečo iné
- port - tunelovanie cez SSH, v neo4j sa nedá zmeniť port na iný
- implementovať end-to-end šifrovanie správ v chattingu, maybe disappearing správy, hlavne aby boli zašifrované 

---

### Nápady 💡
- pridať Tokengram link na prezentačnú stránku
- boost this NFT - špeciálna transakcia na blockchaine a potom ho zobraziť lepšie
- vytvoriť vlastný kontrakt, mentioned above - za príplatok hihi 🙂
- maybe implementovať zdieľanie NFTčiek?
- možno pridať nejaké stickers podľa toho, koľko si boostol
- zaplatenie za viac ako 5 chatov
- achievementy za zbieranie lajkov a NFTs
- free tier na 100mb správ, za viac si zaplatiť, pay in advance
- personalizácie
- ez money 💰
