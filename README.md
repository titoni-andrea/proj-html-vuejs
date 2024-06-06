# Immagini
- Tutte le immagini sono salvate all'interno della cartella assets/

# Data
- Percorsi salvati all'interno dello store.js situato in data

# Struttura

## MyAppHeader
### NavBar
### CardJumbotron

## MyAppMain
- In MyAppMain ci sono tutte le sezioni che compongono il corpo della nostra pagina web.
### Specialties
- Specialties è il componente che mostra in pagina la sezione dei "punti forti",
prende in ingresso delle props che contengono i file svg.
### Founder
- Founder è il componente con il carosello che mostra il nostro fondatore, prende in ingresso come props un array di immagini del founder.
### Events
- Events è il componente che mostra in modo dinamico tutti gli eventi futuri, prende in ingresso come props un oggetto che ha i dati riguardanti l'evento.
### Stats
- Stats è il componente che mostra in pagina le barre percentuali e non prende niente in ingresso.
### News
- News è il componente che va vedere il carosello con tre card fisse che fanno girare le foto, prende in ingresso come props un array dove vengono passate le immagini.
### Testimonials
- Testimonials è il componente che fa vedere le recensioni nel sito una alla volta con un carosello, prende in ingreso come props un oggetto che passa immagine, nome e descrizione.
### Bigvideo
- BigVideo è il componente che al click del pulsante play fa partire un video, che in questo caso abbiamo importato da youtube, abbiamo creato un data per gestire se sia visibile o meno, abbiamo creato un metodo per che con un if gestisce la visibilità, e quando si clicca al di fouri del video scompare.
### Contacts
- Contacts è il componente dove si trova il for del sito, un mappamondo che mostra le sedi in giro per il mondo, e gli sponsor che fanno parte dell'azienda, nel mappamondo se si va in hover con il mouse compaiono i dettagli di ogni sede, gli sponsor sono un carosello che con un timer fa andare avanti le immagini e se si va in hover ne cambia il colore, questo componente prende come props un oggetto che passa i due tipi di immagini sponsor, normali e hovered.
## MyAppFooter
- MyAppFooter è il componente che gestisce il footer del sito, è diviso in 4 sezioni dove sono descritte tutte le varie info, nella parte inferiore c'è una barra arancione che serve per i copyright.