// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitation = ['Anna', 'Carlo', 'Davide','Emma', 'Federico','Gaia'];

var userName = prompt('La prego, inserisca il suo meraviglioso nome');

var invited = false;

// cicle FOR
for (var i = 0; i < invitation.length; i++){
    if (userName == invitation[i]){
        invited = true
    }
}

if (invited == true){
    document.getElementById('result').innerHTML = 'Mi* car* ' + userName + '! Potrai partecipare agli sfarzosi festaggiamenti indetti dal Grande Gatsby.';
} else {
    document.getElementById('result').innerHTML = 'Il Grande Gatsby è amareggiato, ma il tuo invito dev\'essere andato perso nelle viette della Grande Mela, si occuperà di persona del suo invito ai prossimi festeggiamenti';
}