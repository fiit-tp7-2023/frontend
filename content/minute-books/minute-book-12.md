---
title: 'minute-book-12.pdf'
---
# ZÁPISNICA

### TÍM 07

### 12. STRETNUTIE

--- 

#### 📆 Dátum: 4/3/2024

#### 🕓 Čas: 16:00

#### 📍 Miesto: FIIT STU 5.27

---

### Prítomní 👩‍👨‍👧‍👦

Christian Danížek, Braňo Hozza, Samuel Hetteš, Ctibor Kovalčík, Kristián Košťál, Adam Prísenžňák, Viktor Valaštín, Karolína Tóthová

 ---

### Poznámky zo stretnutia 📝
- debata o závislosti na kofeíne
- Adam pozýva na pivo 🙂
- treba vytvoriť BE storku navyše pre Sama
- treba zmeniť nech nie je anonymný volume (v indexeri?)
- sean.so - konkurencia? (scam??) + judging webstránok
- storka na messages vytvorená 
- na skupinový chat sa zatiaľ vykašlať -> end-to-end encrypted groupchat je problémovejší ako privátne správy
- ako matrix servery - asymetrická kryptografia, key handshake, end-to-end výmena kľúčov
- groupchat - vidia moje správy len keď sme všetci online
- na matrix serveri neexistuje šanca, že by ma niekto odhalil - matrix funguje podobne ako torrent, nezaznamenáva IP, nemáš žiadnu identitu
- protocol a messaging system - Element najznámejšia aplikácia
    - je to self hostované
    - hocikedy si s konkrétnou osobou v groupchate vieš vymeniť kľúče, alebo regeneruješ, len tí ľudia musia byť online vtedy keď ty (s offline node-om sa nedá spraviť key exchage), nemá to queue
    - vieš vďaka tomu aj vymazať správu
    - nevieme zatiaľ či to chceme takto robiť, keď tak v budúcnosti, zatiaľ sa groupchatom nezaoberať moc
- protocol signal - na githube (peer-to-peer komunikácia, nejde to cez server, odporúča sa len s ľudmi, ktorých poznáš)
- estimate novej storky
- do 7.4 treba napíasť článok a prezentáciu pre TP Cup - do ďalšieho šprintu
- Braňo robil niečo k FE (a dozvedel sa, že ekologická kríza je vymyslená), rozbehali s Adamom správy
- smutné realizácie o sučasnom stave slovenskej vlády a našej budúcnosti
- Ctibor - SSH poriešené, teraz je problém, že to žerie 50% procesoru (plus indexer čo žerie ďalších 50%) + ostatné veci - treba to poriešiť, tunneling aj neo4j vyriešené
- indexer cez localhost nešiel, ale cez IP kontajnera ano - maybe to je nejaká vec docker networkingu
- namiesto localhostu používať 127.0.0.0 - rýchlejšie
- Adam - indexer beží na serveri, ale lepšie by bolo indexovať iný token ako ERC20 lebo to trvá strašne dlho
- ERC20 sa budú jednoduchšie hľadať, dalo by sa to robiť ad-hoc live, že ak by chcela nejaká walletka odporúčanie, až potom by sa opýtal ERC20 (je to ale platené, do nejakej hranice free tier) - tým pádom netreba indexovať - obísť databázu, doplní sa to až časom, tým pádom netreba indexovať tranzakcie ERC20, iba zistiť informáciu, či táto walletka niečo mala s USDT
- podľa Vikiho je to tiež zbytočné (?) lebo tie dáta môžu byť skewed
- aplikácia, kde vieš niekomu posielať peniaze na základe graphql a keď chceš poslať USDT a klikneš na to, budeš tam mať recommended že komu si naposledy posielal (Kikovi to nepríde ako veľká pridaná hodnota)
- nechať iba info, že walletka niekedy mala USDT
- môže to ísť aj do neo4j
- Samo - skupiny recommended, s ktorými si najviac obchodoval
- maybe live by to trvalo dlho, kvôli množstvu ERC20, bolo by dobré to mať otagované ale nejako jednoduchšie
- pipelines zvlášť sa nedá spraviť bez toho, aby sa to nepúšťalo manuálne
- Viki včera vyhral Hackathon wheee (pivo tam nie je dobré)
- teambuilding - koncom marca niekedy (tour de bars a začať v Štartéri, potom Baron,... pridať tam aj Nebru, alebo ukrajinský bar)
- 21.3 - dátum teambuildingu, hlasovanie o tom, kto by čo chcel, šípky, motokáry, biliard
