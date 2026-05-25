# PRODUCT.md

## 1. Nome progetto

Frankie Read è il nome in codice del prodotto.

Frankie Read nasce come revival mirato di una precedente app della suite Frankie.

## 2. Sintesi

Frankie Read è un'app per salvare, leggere e ascoltare articoli dal web.

È pensata per trasformare pagine web rumorose in contenuti puliti, leggibili e ascoltabili.

Il prodotto prende ispirazione da Pocket (abbandonato nel 2025) e Instapaper

Il focus non è accumulare link.

Il focus è consumare davvero contenuti lunghi: leggendo o ascoltando.

Frankie Read deve aiutare l'utente a finire articoli che altrimenti resterebbero nel backlog.

## 3. Problema

Sul web c'è troppo da leggere.

Molti articoli interessanti vengono salvati e mai aperti.

Le pagine web sono spesso piene di layout invasivi, advertising, pop-up, sidebar e distrazioni.

I bookmark non risolvono il problema del consumo.

I riassunti AI non sempre risolvono il problema: spesso sostituiscono la lettura invece di renderla possibile.

Molte persone vogliono ancora leggere o capire contenuti originali, ma non sempre hanno tempo o contesto.

Il tempo utile alla lettura si è spostato: camminate, commuting, faccende domestiche, pause, momenti offline.

Frankie Read deve rendere leggibile e ascoltabile il web personale dell'utente.

## 4. Visione

Frankie Read è un piccolo spazio personale per leggere meglio internet.

Non vuole essere un knowledge manager complesso.

Non vuole essere un agente AI autonomo.

Non vuole trasformare ogni articolo in un report.

Vuole rendere semplice salvare una pagina, leggerla in formato pulito e ascoltarla con una voce moderna.

L'AI deve servire il flusso di lettura, non sostituirlo.

Il prodotto deve restare calmo, utile, compatto e affidabile.

## 5. Posizionamento

Frankie Read è il sostituto moderno di Pocket per chi vuole leggere e ascoltare articoli.

La promessa sintetica è: salva il web, leggilo bene, ascoltalo meglio.

Una variante di positioning: turn the web into your personal audio queue.

Un'altra variante: il modo più semplice per ascoltare gli articoli che vuoi davvero finire.

Frankie Read non compete frontalmente con ChatGPT, agenti o tool di sintesi generalisti.

Compete con il caos del web, il backlog di articoli e il poco tempo per leggere.

## 6. Principi prodotto

Semplicità prima di tutto.

Lettura e ascolto sono il cuore del prodotto.

La libreria personale è importante, ma secondaria rispetto al consumo dei contenuti.

Local-first.

Offline-friendly come valore pratico e identitario.

AI contestuale, leggera e discreta.

Nessun overload di feature.

Nessuna dipendenza obbligatoria da cloud o backend complessi nella versione base.

Nessun lock-in inutile.

## 7. Funzionalità core: salvataggio articoli

L'utente può salvare articoli direttamente dal web.

Il salvataggio avviene tramite estensione browser e/o meccanismi di condivisione supportati dalla PWA.

Il target principale è Firefox e Chrome.

L'articolo viene estratto dalla pagina aperta dall'utente.

Il contenuto viene trasformato in una versione leggibile e semplificata.

Il sistema deve preservare il contenuto principale dell'articolo.

Il sistema deve preservare le immagini quando rilevanti.

Il sistema deve rimuovere pubblicità, sidebar, custom design invasivo, pop-up e rumore visivo.

Il risultato deve essere simile all'esperienza Pocket / Instapaper / reader mode.

Il prodotto salva ciò che l'utente può già accedere e visualizzare nel proprio browser.

Non deve essere progettato per aggirare paywall, login, credenziali o protezioni tecniche.

Se una pagina è accessibile nella sessione browser dell'utente, Frankie può provare a estrarne una versione leggibile.

## 8. Funzionalità core: lettura pulita

Ogni articolo salvato deve essere leggibile in un formato uniforme.

Il design della pagina originale non è importante.

È importante mantenere testo, struttura, titoli, sezioni, link e immagini utili.

La lettura deve essere calma, stabile e senza distrazioni.

La formattazione deve essere semplice e consistente.

Non serve un grande lavoro di customizzazione UI nella prima versione.

La qualità dell'estrazione è più importante di molte opzioni estetiche.

## 9. Funzionalità core: text-to-speech

Il TTS è la funzionalità distintiva principale della nuova versione.

Frankie Read deve permettere di ascoltare articoli lunghi con voci moderne e piacevoli.

La lettura audio non è un accessorio: è uno dei motivi principali per usare il prodotto.

L'utente deve poter trasformare il backlog di articoli in tempo di ascolto.

Il TTS deve funzionare bene per articoli lunghi, non solo per brevi snippet.

Il prodotto deve supportare una coda di ascolto personale.

Il prodotto deve permettere di riprendere l'ascolto dove era stato interrotto.

La voce deve essere personalizzabile.

Il provider TTS deve essere modulare.

Frankie può offrire un provider integrato economico o predefinito.

Frankie può offrire un provider premium opzionale.

Frankie deve idealmente supportare bring-your-own-key per utenti avanzati.

L'utente potrebbe usare API proprie già pagate o già configurate.

Provider possibili da valutare: OpenAI, Gemini, ElevenLabs, Azure Speech, Cartesia, soluzioni locali/open source.

La scelta finale dei provider è tema tecnico-commerciale separato.

Il principio prodotto è flessibilità, qualità e sostenibilità dei costi.

## 10. Funzionalità AI base

Frankie Read può supportare riassunti semplici.

La summarization non deve diventare il centro del prodotto.

Il riassunto serve quando l'utente vuole decidere se leggere o ascoltare un articolo.

Il riassunto può anche essere letto via TTS.

Questa funzione deve restare leggera, opzionale e non invasiva.

Frankie non deve trasformarsi subito in un generatore di digest automatici complessi.

## 11. Funzionalità avanzata: approfondimento mirato

L'approfondimento mirato è la seconda grande area AI dopo il TTS.

Durante la lettura, l'utente può selezionare una frase, una parola, un passaggio o una highlight.

Frankie genera una spiegazione breve e contestuale.

L'obiettivo è risolvere una curiosità nel momento esatto in cui nasce.

Esempi: spiegami questo riferimento, chi è questa persona, cosa significa questo termine, è vera questa affermazione, dammi il contesto minimo.

Il modello mentale è simile a un piccolo assistente inline accanto al testo.

Non deve interrompere il flusso di lettura.

Deve aiutare l'utente a continuare, non portarlo altrove.

Durante l'ascolto TTS, l'utente dovrebbe poter fermare il contenuto, chiedere chiarimento e poi riprendere.

Questa AI è contestuale, piccola e utile.

Non è un agente autonomo.

Non è un report.

Non è un sistema di ricerca pesante.

È una funzione di comprensione istantanea.

## 12. Funzionalità avanzate future

Cluster di articoli simili.

Recap settimanali o mensili.

Digest personali leggeri.

Raggruppamento per tema.

Suggerimenti su cosa ascoltare dopo.

Podcast personale generato dalla propria coda.

Sintesi audio di gruppi di articoli.

Esportazione verso note o knowledge tools.

Queste funzioni sono future e non devono appesantire il primo prodotto.

## 13. Target iniziale

Utenti orfani di Pocket.

Utenti che salvano articoli ma non li leggono mai.

Knowledge worker.

Sviluppatori.

Founder, ricercatori, designer, product people.

Persone che leggono contenuti tech, business, cultura, politica, scienza o long-form.

Persone che ascoltano podcast ma vorrebbero ascoltare anche articoli.

Utenti che camminano, viaggiano o fanno attività manuali mentre ascoltano contenuti.

Utenti privacy-conscious e local-first.

Utenti avanzati che vogliono usare le proprie API key.

```
E infatti io eviterei inizialmente:

agent autonomi
knowledge graph
RAG personale
automazioni complesse
social features
collaborative annotations

Perché ti spostano nel territorio di prodotti enormi.

Invece vedo molto bene:

save article
clean article
excellent TTS
queue/listening flow
lightweight summaries
maybe daily digest opzionale

E soprattutto:
local-first + BYOK.
```

## 14. Segmenti emotivi

Chi vuole ridurre il senso di colpa del backlog.

Chi vuole recuperare tempo morto.

Chi vuole un internet più calmo.

Chi vuole leggere senza distrazioni.

Chi vuole capire senza aprire dieci tab.

Chi vuole possedere una piccola biblioteca personale di articoli.

Chi vuole ascoltare contenuti scelti, non feed algoritmici.

Chi vuole un rituale quotidiano di lettura o ascolto.

```
persone che leggono molti articoli tech/business
utenti Pocket “orfani”
persone ADHD / backlog overload
utenti che consumano contenuti in audio
sviluppatori e knowledge workers
utenti privacy/local-first
utenti che vogliono “podcastizzare” internet
```

## 15. Hook emotivi da sviluppare

Il web finalmente leggibile.

Il tuo backlog diventa ascoltabile.

Internet al tuo ritmo.

Una coda audio personale fatta da te.

Non perdere quell'articolo.

Capisci senza uscire dal flusso.

Leggere meno in ansia, ascoltare di più con calma.

Il tuo piccolo spazio personale per il web che conta.

Questi hook vanno esplorati nel marketing, non necessariamente tutti nel prodotto iniziale.

## 16. Business model

Il prodotto deve poter nascere piccolo.

Deve avere costi operativi bassi.

Il piano free può coprire lettura locale e salvataggio base.

Un piano paid molto economico può sbloccare funzioni avanzate.

Pricing indicativo: pochi euro/dollari all'anno, ad esempio 8-10 dollari annui per una versione essenziale.

Il BYOK riduce i costi variabili e rende sostenibile il TTS avanzato.

Funzioni cloud, sync, provider premium o AI hosted possono essere monetizzate separatamente.

Non serve partire con un modello venture-scale.

Frankie Read può essere un indie product sostenibile.

## 17. Cosa non è Frankie Read

Non è un bookmark manager generico.

Non è un PKM completo.

Non è Notion.

Non è Readwise Reader.

Non è un agente AI che decide cosa devi sapere.

Non è un'app per produrre report automatici.

Non è un social reader.

Non è una piattaforma editoriale.

Non è un sistema per aggirare paywall o accessi protetti.

## 18. MVP

Estensione browser per salvare articoli.

PWA per leggere articoli salvati.

Storage locale persistente.

Estrazione contenuto in formato pulito.

Conservazione immagini rilevanti.

Lettura offline quando possibile.

TTS moderno su articolo completo.

Scelta voce/provider almeno in forma iniziale.

Ripresa dell'ascolto.

Riassunto semplice opzionale.

Approfondimento mirato su selezione o highlight.

## 19. Criterio di successo

L'utente salva un articolo e riesce davvero a consumarlo.

L'utente torna perché Frankie gli permette di leggere o ascoltare cose che altrimenti perderebbe.

L'utente percepisce Frankie come uno spazio calmo e personale.

Il TTS è abbastanza buono da diventare abitudine.

L'approfondimento mirato è abbastanza rapido da non rompere il flusso.

Il prodotto resta piccolo, chiaro e sostenibile.

## 20. Frasi guida

Frankie Read salva il web che vuoi leggere, lo pulisce, lo rende ascoltabile e ti aiuta a capirlo senza uscire dal flusso.

Oppure: “podcastizzare internet” potrebbe quasi essere il positioning più forte di tutti. Non “AI summarize the web”, ma “turn the web into your personal audio queue”.

“trasforma internet in qualcosa che posso consumare mentre cammino, guido, cucino, lavoro”.

## 21 competizione

non sei in competizione con ChatGPT o gli agent.
Sei in competizione con:

il tempo morto
il backlog di articoli
il fatto che la gente non legge più perché non riesce

Quindi il vero use case non è:
“fammi il super clustering AI”.
bensi':
“trasforma internet in qualcosa che posso consumare mentre cammino, guido, cucino, lavoro”.
