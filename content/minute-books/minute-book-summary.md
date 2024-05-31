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

### Stretnutie 8 (5.12.2023)
#### Poznámky zo stretnutia 📝
- už je server
- prišiel mail na virtuálky, už sú pridelené kľúče, Samo požiadal o server
- Na NTF page chýba už len image - nainštalovať libku od Vikiho, použiť odtiaľ funkciu
- potrebujeme reaktivitu v komponente (?) - see PR AB#178
- all done 🙂

---

### Stretnutie 9 (15.2.2024)
#### Poznámky zo stretnutia 📝
- Globálny cieľ:
    - Braňo sa bavil s Vikim že potrebuje lepší cieľ, maybe fórum alebo sociálna sieť, podľa Vikiho radšej sociálna sieť, lebo fóra sú zastarané, zahrnúť gossiping system
    - Instagram na NFTs, recommendations na základe našej databázy
    - použiteľné priamo v aplikácii
    - mohli by sme implementovať nejaký chat v rámci fóra 1:1 end-to-end encrypted kanál
    - quick message bar v metamask, viem tam hodiť adresu ktorú mi vyhodilo že s ňou matchujem a môžem rovno napísať ohľadom NFTs
    - messages uchovávať bez histórie, v nejakom dočasnom úložisku, tempory memory v swarme alebo storage čo by bol scrapovaný - tu by si to ale asi mohol každý stiahnuť
    - miznúce správy, napr. ako Snapchat keď sa posielajú nudesky (13+)
    - návrh aplikácie, čo dokáže odporúčať priateľov
    - postaviť jednu appku (minimálne), kt. bude využívať logiku tagovania skrz záľuby vrámci blockchainu

- on-chain identita - nepoužívať, namiesto toho používať on-chain entita so záľubami, on-chain profile
- modelovať recommendation systém: prihlasovanie -> pridávanie priateľov -> recommendation system
---
- tasky čo robila Saška do done
- začiatok šprintu 6 - Niké
- všetci zostávajú na pozícii ako predtým, Braňo bude viac pomáhať na FE, keďže Saška odišla
- vytvorenie User Stories
- treba deploynúť DB clusters niekde
- storky vytvorené a ohodnotené
- standups vo štvrtky o 13:50

---

### Stretnutie 10 (19.2.2024)
#### Poznámky zo stretnutia 📝
- dohodli sme sa, čo je priorita na letný semester
- sociálna sieť - na štýl instagramu len s NFTs
- od meetingu sa toho veľa nezmenilo, Braňo nasetupoval repozitár + nové channels na DC
- spravili sme tasky k user stories, len nie sú priradené
- standup stanovený na 13:50
- priradení approveri k user storkám
- samo požiada o 200gb disku + dôvod

---

### Stretnutie 11 (26.2.2024)
#### Poznámky zo stretnutia 📝
- vytvorenie taskov na ďalší šprint + ohodnotenie
- treba spraviť to, že ktoré NFT patrí komu
- namapovať aj previous owners
- hide NFT na profile
- mapping medzi NFT a userom
- likes vyriešiť ako verejné a komentáre pre usera
- migrate from graphql to pg
- nasadiť python script na náš server - deploy data processor
- deploy BE
- trending - koľko ľudí to videlo
- recommendations - tagy, na základe nich vybrať NFTs, bude ukazovať iba také NFTs, ktoré spĺňajú okruh obľúbených tagov, malá šanca (20%) že sa zobrazí aj niečo iné
- port - tunelovanie cez SSH, v neo4j sa nedá zmeniť port na iný
- implementovať end-to-end šifrovanie správ v chattingu, maybe disappearing správy, hlavne aby boli zašifrované

---

### Stretnutie 12 (4.3.2024)
#### Poznámky zo stretnutia 📝
- na skupinový chat sa zatiaľ vykašlať -> end-to-end encrypted groupchat je problémovejší ako privátne správy
- ako matrix servery - asymetrická kryptografia, key handshake, end-to-end výmena kľúčov
- groupchat - vidia moje správy len keď sme všetci online
- na matrix serveri neexistuje šanca, že by ma niekto odhalil - matrix funguje podobne ako torrent, nezaznamenáva IP, nemáš žiadnu identitu
- protocol signal - na githube (peer-to-peer komunikácia, nejde to cez server, odporúča sa len s ľudmi, ktorých poznáš)
- indexer beží na serveri, ale lepšie by bolo indexovať iný token ako ERC20 lebo to trvá strašne dlho
- ERC20 sa budú jednoduchšie hľadať, dalo by sa to robiť ad-hoc live, že ak by chcela nejaká walletka odporúčanie, až potom by sa opýtal ERC20
- pipelines zvlášť sa nedá spraviť bez toho, aby sa to nepúšťalo manuálne

---

### Stretnutie 13 (11.3.2024)
#### Poznámky zo stretnutia 📝
- názov nového šprintu - Cerberus
- retrospektíva done
- napísané storky, priradení owneri
- treba napísať článok
- treba mať prístup k block-stampu
- treba ošetriť to, aby jedna query nehľadala moc veľa dát v databáze - problémy (out of shared memory)
- pridané bugy do backlogu

---

### Stretnutie 14 (18.3.2024)
#### Poznámky zo stretnutia 📝
- Samo setupoval modely na posts, likes, bude sa venovať logike ako sa to bude vytvárať atď
- Ctibor - pridáme NFTčku vektor, zložený z tagov a váh daných tagov, to isté bude mať aj user na sebe, keď nemá nič tak má 0, keď dá like na NFT tak sa mu upraví ten vektor nejakým koeficientom, keď komentuje tiež, na základe toho NFTčka, zoberie sa jeho vektor a updatne sa user vektor v neo4j, v tokengrame user
- upravuje sa vektor usera v tokengrame na základe interagovaných NFTs, váhy uložené v postgres
- cosine similarity - zoradenie všetkych NFTs, ktoré sú vhodné pre toho daného usera, porovnanie vektorov a uhlov medzi nimi
- parametre - like, comment, to čo má user v profile
- každý pridaný like - nové rozloženie váh
- mohol by sa implementovať aj block number získania NFTčka do logiky odporúčaných postov
- Adam - pozrel indexer kde bol error, zatiaľ sa mu to nepodarilo opraviť, spravil stránkovanie, došiel na ďalší bug, duplicitné ID pri jednom prípade, pridal overenie a potom už to nerobilo
- Kiko - menil port, lebo to malo konflikty s niečim iným

---

### Stretnutie 15 (25.3.2024)
#### Poznámky zo stretnutia 📝
- vymyslené tasky
- napojili sme sa na Adamovu databázu
- endpoint na searchovanie nie je hotový ešte, lebo je to náročnejšie ako sme čakali
- nehovoriť public NFT !!!
- treba vytvoriť mock peňaženky a NFTčka (3)
- váhy na like a dátum, na základe toho vypočítať - pridať stĺpec na váhu
- user vector - created at login/register, updated at: get user posts, when liked, when commented
- tých čo ja followujem mi zobrazí iba raz
- websocket proxy - cez package
- chaty - na FE
- storky vymyslené

---

### Stretnutie 16 (8.4.2024)
#### Poznámky zo stretnutia 📝
- jedna storka blocked - presunuté do ďalšieho šprintu
- pomenovaný ďalší šprint - Morpheus
- retrospektíva done
- vymyslené tasky
- fixnúť naming neo4j
- zjednotenie portov
- otestovať na reálnych dátach - čo Adam spravil mock - ďalší šprint sa zapracujú bugy
- Braňo - refactor design

---

### Stretnutie 17 (15.4.2024)
#### Poznámky zo stretnutia 📝
- v poslednom týždni by sa nemalo nič nové otvárať, len dokončovať to čo zostalo otvorené
- 3 storky sú už done, Adam začal robiť zobrazovanie postov, following mechanism
- Braňo - FE design prerobený

---

### Stretnutie 18 (22.4.2024)
#### Poznámky zo stretnutia 📝
- máme plne funkčné chaty
- dajú sa aj groupchats bez šifrovania
- na serveri to ide
- Braňo dorábal ešte notifikácie
- vieme simulovať endpoint, treba dať posty na public
- username aj profile picture budú required
- Adam spravil návrh toho, ako budú vyzerať posty
- keď user nemá description, dá tam description NFTčka - zmeniť nech to blokovo zarovná text
- meníme tento šprint na trojtýždňový namiesto dvoj
- posledný šprint - snažme sa dokončiť všetko, nech sú major bugs vyriešené, nech je to všetko v maine, v produkčnej verzii

---

### Stretnutie 19 (29.4.2024)
#### Poznámky zo stretnutia 📝
- stihlo sa všetko
- Adam - komentáre - len základ (zobrazovanie + písanie) ale na BE je pripravená väčšia funkcionalita ako odpovedanie, upravovanie, likeovanie komentárov atď - Ctibor sa na to maybe pozrie (skôr by mal na likeovanie)
- TP Cup - 31. mája (piatok o 8:00 - 14:00)
- retrospektíva za šprint aj celý tímák done

---

### Sumarizácia 💥

Stretnutia prebiehali pravidelne, sústreďovali sa na praktické úlohy a zadania.
Tímová spolupráca zahŕňala rôzne aspekty projektu, od technických úloh až po dizajn.
Diskutovalo sa o zlepšení workflow, evidencii a kritériách pre úlohy.
Návrhy a myšlienky boli systematicky zaznamenávané a diskutované na stretnutiach.
Dôležité rozhodnutia boli dokumentované, a práca bola pravidelne hodnotená na retrospektívach.
Napriek niekoľkým problémom projekt pokračoval s jasným smerovaním, s možnosťou budúceho zlepšenia výsledného produktu.
