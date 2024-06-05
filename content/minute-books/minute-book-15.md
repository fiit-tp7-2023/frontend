---
title: 'minute-book-15.pdf'
---
# ZÁPISNICA

### TÍM 07

### 15. STRETNUTIE

--- 

#### 📆 Dátum: 25/3/2024

#### 🕓 Čas: 16:00

#### 📍 Miesto: FIIT STU 5.27

---

### Prítomní 👩‍👨‍👧‍👦

Christian Danížek, Braňo Hozza, Samuel Hetteš, Ctibor Kovalčík, Kristián Košťál, Adam Prísenžňák, Karolína Tóthová

 ---

### Poznámky zo stretnutia 📝
- vymyslené tasky
- napojili sme sa na Adamovu databázu
- Ctibor - cosine similarity - treba o tom ešte pokecať, v neo4j sú vektory, na BE sa porovnáva similarity
- endpoint na searchovanie nie je hotový ešte, lebo je to náročnejšie ako sme čakali
- nedá sa to tak ako sme chceli cez FE, posty, kt. sú public a private, natiahnuť len public, cosine similarity, nechceme aby sa jednému userovi ukazovali stále tie isté - randomizer alebo tag keď už NFT videl
- dá sa to zobraziť ešte podľa toho, že kedy sa vytvoril post - owneri od Adama (nech sa nezobrazujú moje -> z tokengramu vytiahnuť public posty, ale nie ktoré vlastním ja -> subset (na základe dátumu, podľa pagination) -> najnovšie hore -> vytiahneme 1000 postov (najnovšie), sort ktorý vybalancuje dátum a likes -> array adries, vytiahneme si info odtiaľ -> get info z neo4j -> cosine similarity (tu vchádza user) -> na pozadí sa stále updatuje user vector -> ked nie sú žiadne NFTs - random, keď nie je prihlásený - random)
- nehovoriť public NFT !!!
- treba vytvoriť mock peňaženky a NFTčka (3)
- váhy na like a dátum, na základe toho vypočítať - pridať stĺpec na váhu
- váha by sa musela updatovať tiež - zatiaľ to tam ale nedávame, idea do budúcnosti
- cosine similarity - user sa logne prvýkrát, nemá žiadne NFTs a nič nerobil - random, v momente keď si pridá niečo alebo má NFTs - vytvorí sa vektor, keď niečo lajkne - updatuje sa vektor a váhy, na základe toho sa zobrazujú posty
- euclidean similarity - rieši aj že akú váhu má celkovo - na to čo robíme my sa hodí viac cosine similarity
- dá sa to aj cez hashmap namiesto vektora - ukladať si json, keď chcem porovnať dve NFT tak cez kľúče -> cosine similarity, porovnať uhly
- user vector - created at login/register, updated at: get user posts, when liked, when commented
- tých čo ja followujem mi zobrazí iba raz
- websocket proxy - cez package
- chaty - na FE
- storky vymyslené
- retrospektíva done
- spísať rozsahy portov
- budúci týždeň - conversation o tom, že ako kto vidí tento tímák
