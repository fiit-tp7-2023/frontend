---
title: 'minute-book-8.pdf'
---
# ZÁPISNICA

### TÍM 07

### 8. STRETNUTIE

--- 

#### 📆 Dátum: 05/12/2023

#### 🕓 Čas: 16:00

#### 📍 Miesto: FIIT STU 5.27

---

### Prítomní 👩‍👨‍👧‍👦

Adam, Ctibor, Samo, Braňo, Kara, Kiko (Saška + Kiko prezentujú Kotulimu :c )

 ---

### Poznámky zo stretnutia 📝
- už je server whee
- teambuilding úspešne zvládnutý, väčšina si nič nepamätá, nebolo karaoke tho -> ctibor smutný
- plánovanie budúceho teambuildingu: štartér -> baron -> karaoke

- prišiel mail na virtuálky, už sú pridelené kľúče, Samo požiadal o server (asi Linux)
- Saška veci k finálnej dokumentácii - Kiko poslal príklad dokumentu, čo všetko by tam malo byť (len ako odporučenie, napr ak nemáme git metodiku netreba ju dorábať, len pre nás relevantné veci)
- Adam včera dokončil task, indexovanie accountov do tabuliek, musí to poslať chalanom, ináč je free ak nebudú nejaké komplikácie
- na teambuilding došiel aj Viki (na stretnutie ale nie >:( ) - (16:36 už sa napojil cez dc)
- Saška bude asi potrebovať pomoc od ostatných k tej dokumentácii - všetci zdokumentovať čo robili, do nejakej formy a odovzdať Saške nech to dá dokopy
- Na NTF page chýba už len image - nainštalovať libku od Vikiho, použiť odtiaľ funkciu
- treba ešte token ID - Braňo a Ctibor s tým čakajú na Adama
- bude treba premiestniť všetko na ten server, chceme automatický deploy, treba si o tom niečo načítať
- budúci týždeň môžeme vyriešiť online hociktorý deň, prejdeme si report, spravíme poslednú retro a vyhodnotíme všetko, treba aj globálnu retrospektívu za celý semester

Viki bez otázok
- načítanie obrázka - image ipfs://hash, api gateway, minipfs, purify (?), purify single, lebo teraz vracia dva linky, image si má handlovať browser a nie js, lebo content sa cachuje (na ďalšom loade stránky to neťahá z db ale z cache), co js nevie - cez picture component, treba zadať sources
- image component má on error
- je na to metóda natívne v htmlku

- pri tabuľkách - každý riadok má ID, ak hej tak zmeniť ref any na entity, všetko v tabuľke musí potom extendovať entity
- use resize observer - namapuje si to tabuľku, vieme presne natypovať ref, že to je instance of komponent
- use resize observer - mení pagination - responzivita
- nechceme vracať query value (stratí reaktivitu) ale celé ref
- potrebujeme reaktivitu v komponente (?) - see PR AB#178

- Viki nakoniec otázka na Adama ohľadom indexovania marketov (open sea, predaji nft) - dohodli sme sa že finálny produkt bude sociálna sieť/forum
- v transakcii nevidno predaj, iba transfery, to vidno na open sea smart contract
- vidno len transfery tokenov, nie peňazí
- open sea smart contract si neberie NFT pri transakcii, je to direct
- jediný význam indexovať smart contract open sea kde prebiehajú obchody by bolo vidieť sumu za NFT, na social layer to je podľa Kika zbytočné
- v transferoch v transakciách vidím, že ako NFT zmenilo majiteľa - či bolo predané/kúpené
- necháme to na ďalšie iterácie produktu, Viki tam vidí ale ekonomickú pridanú hodnotu
- dalo by sa tam pozerať či to bol donate/gift, vieš kupovať 👍 apod.
- dá sa pozerať pridaná hodnota pri cene aj to, kedy to bolo kúpené, že akú váhu má ten transfer
- keď tak dopracovať ďalší semester

- Adam otázka na Vikiho - teraz indexujeme len tokeny, nie native currency, či sa dá cez subsquid trackovať aj internal transactions, lebo sa to dosť ťažko zachytáva
- vieš zachytávať nejaké kúsky ale nedáva to asi moc zmysel
- trebalo by potom indexovať celý chain od nuly, Viki v tom nevidí zmysel, v transfere samom o sebe

- na záver došli Saška s Kikom whee

- na budúci týždeň dohodneme call, v utorok maybe online, alebo v pondelok ráno fyzicky
- v pondelok o 10:00 - 12:00 fyzicky, kto chce tak online
- all done 🙂
