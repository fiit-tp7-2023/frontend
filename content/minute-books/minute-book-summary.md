---
title: 'minute-book-summary.pdf'
---
# Sumarizácia zápisníc z jednotlivých stretnutí

### Stretnutie 1 (10.10.2023)
#### Poznámky zo stretnutia 📝
- Pripravenie Nuxt.js
- Pripravenie návrhu prezentačného webu
- Pripravenie .NET
- Pripravenie repozitárov pre projekty
- Analýza pipelines medzi GitHub a Azure
- Pripravenie Azure DevOps
- Pripravenie .NET
- Ukladanie dát do databázy
- Parsovanie a fetchovanie metadát
- Pripravenie indexeru na získanie dát ERC 721
- Rozšírenie indexeru o ERC 20, ERC 1155
- Spracovanie dát nad získanými dátami
- Pripravenie layoutu stránky
- Vymyslenie loga
- Vymyslenie popisu tímu a projektu
- Vymyslenie komponentu na zápisnice
- Vymyslenie komponentu na timeline
- Prenesenie template do Nuxt.js
- Analýza možnosti OAuth
- Pripravenie autentifikácie
- Nahodenie úloh do Azure DevOps, vytvorenie šprintu a user stories
- Pripravenie servera
- Presun dokumentov na server
- Nastavenie reverse proxy (Nginx)
- Pripravenie servera
- Presun dokumentov na server
- Nastavenie reverse proxy (Nginx)

#### Nápady 💡
- Zobrazenie dokumentov - zápisnica a pod ňou súbory → keď kliknem, tak rovno zobraziť konkrétny dokument, netreba tabuľku

---

### Stretnutie 2 (17.10.2023)
#### Poznámky zo stretnutia 📝
- Diskusia o názve tímu - "Chain Mates"
- Každý task má mať revízora
- Vytvorenie skupín na GitHub pre revíziu
- Potreba evidencie reviewerov
- Backlog ako user story
- Kritériá pre user story
- Zavedenie pravidelných stretnutí a stand-upov.
- Prioritizácia úloh - tokenizácia, popis obrázku do tagov.
- Vytvorené user stories na Azure pre projekt

---

### Stretnutie 3 (24.10.2023)
#### Poznámky zo stretnutia 📝
- kontrola definition of _ready_
- kontrola definition of _done_
- _commited_ znamená, že úlohu chceme riešiť a pridali sme stav _ready_, čo znamená, aby ju vedúci skontroloval a presunul do _done_
- **podarilo sa nám**
  - naindexovať opice
  - spracované dáta v databáze
  - frontend setup a aké knižnice použijeme - Naive UI
- Viki poslal potrebné návody Adamovi ohľadom indexovania (návody sa nachádzajú v skupinovej konverzácii v #indexing)
- je potrebné niektoré user stories rozdeliť viaceré
- backend obsahuje Google autentifikáciu
- Viki pošle farebnú škálu pre frontend

#### Nápady 💡
- Návrh prechodu na formát zápisníc v Markdown
---

### Stretnutie 4 (31.10.2023)
#### Poznámky zo stretnutia 📝
- Teambuilding naplánovaný na 13.11.2023
- Práca na tagoch a ďalšie úlohy rozdelené na viac taskov
- Riešenie responzivity, loga a ďalších aspektov dizajnu

---

### Stretnutie 6 (21.11.2023)
#### Poznámky zo stretnutia 📝
- Problémy s deployom a databázou
- Potreba riešenia opakovania adries v NFT
- Refactoring od Adama
- Práca na dizajne pre zobrazovanie NFT

#### Nápady 💡
- indexovanie podľa času; prvých 1000 blokov je nemenných potom je možné spraviť group by a sort by block_id a treba ísť po jednotlivých batchoch (Kikov návrh)
	 - je potrebné pripojiť sa priamo na Postgres a vyskúšať to tak (Viki navrhol)
	 - select je potrebné robiť nad PG, nie nad GraphQL, select *, treba groupovať celý PG, nelimitovať
 - Adam môže vytvoriť tabuľku, kde bude zoznam adries a bude tam blok kde sa tá adresa vyskytla prvýkrát
---

### Stretnutie 7 (28.11.2023)
#### Poznámky zo stretnutia 📝
- zabudnuté stretnutie s Romanom.
- Filtrovanie tagov dokončené
- Nestihnutá NFT stránka
- Plánovanie šprintu bez ohodnotenia, hodnotenie na alternatívnom stretnutí
- Lepšia moderovaná retrospektíva
- Diskusia o čase pre zvyšok tímu
- Kiko spokojný s výsledkami
- Vytvorený nový šprint - posledný na tento semester
- Rozdelenie tímu na schvaľovanie príbehov

#### Nápady 💡
- Pridanie menu a loga aj do mobilnej verzie
- Návrh od Ctibora na zobrazenie menu na ľavý klik

---

### Sumarizácia 💥

Stretnutia prebiehali pravidelne, sústreďovali sa na praktické úlohy a zadania.
Tímová spolupráca zahŕňala rôzne aspekty projektu, od technických úloh až po dizajn.
Diskutovalo sa o zlepšení workflow, evidencii a kritériách pre úlohy.
Návrhy a myšlienky boli systematicky zaznamenávané a diskutované na stretnutiach.
Dôležité rozhodnutia boli dokumentované, a práca bola pravidelne hodnotená na retrospektívach.
Napriek niekoľkým problémom projekt pokračuje s jasným smerovaním.
