---
title: 'minute-book-14.pdf'
---
# ZÁPISNICA

### TÍM 07

### 14. STRETNUTIE

--- 

#### 📆 Dátum: 18/3/2024

#### 🕓 Čas: 16:00

#### 📍 Miesto: FIIT STU 5.27

---

### Prítomní 👩‍👨‍👧‍👦

Christian Danížek, Braňo Hozza, Samuel Hetteš, Ctibor Kovalčík, Kristián Košťál, Adam Prísenžňák, Karolína Tóthová

 ---

### Poznámky zo stretnutia 📝
- štvrtok bude teambuilding o 18:20 na Poštovej - Štartér, Baron, Piccolo, KGB, Nebra,... (Tour de Bars)
- napísali sme aj Saške 🙂
- lekári v Bratislave sú dramatickí
- Adam sa pýta, či by sa nedalo budúci týždeň presunúť stretnutie -> online 11:00
- budúci týždeň v utorok prednáška - prezentácia na TP Cup
- čo sa stihlo za týždeň:
    - Samo setupoval modely na posts, likes, bude sa venovať logike ako sa to bude vytvárať atď
    - Ctibor - pridáme NFTčku vektor, zložený z tagov a váh daných tagov, to isté bude mať aj user na sebe, keď nemá nič tak má 0, keď dá like na NFT tak sa mu upraví ten vektor nejakým koeficientom, keď komentuje tiež, na základe toho NFTčka, zoberie sa jeho vektor a updatne sa user vektor v neo4j, v tokengrame user
    - upravuje sa vektor usera v tokengrame na základe interagovaných NFTs, váhy uložené v postgres
    - cosine similarity - zoradenie všetkych NFTs, ktoré sú vhodné pre toho daného usera, porovnanie vektorov a uhlov medzi nimi
    - parametre - like, comment, to čo má user v profile
    - každý pridaný like - nové rozloženie váh
    - plán B zatiaľ nie je
    - nerieši sa tu zatiaľ počet likes
    - mohol by sa implementovať aj block number získania NFTčka do logiky odporúčaných postov
    - Adam - pozrel indexer kde bol error, zatiaľ sa mu to nepodarilo opraviť, spravil stránkovanie, došiel na ďalší bug, duplicitné ID pri jednom prípade, pridal overenie a potom už to nerobilo
    - Kiko - menil port, lebo to malo konflikty s niečim iným
