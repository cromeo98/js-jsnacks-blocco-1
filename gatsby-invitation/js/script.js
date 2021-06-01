// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitation = ['Anna', 'Carlo', 'Davide','Emma', 'Federico','Gaia'];

var userName = prompt('La prego, inserisca il suo meraviglioso nome');

var userNameFirstUpp = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase(); 

var invited = false;

// cicle FOR
// for (var i = 0; i < invitation.length; i++){
//     if (userName == invitation[i]){
//         invited = true
//     }
// }

// cicle WHILE
var i = 0

while (i < invitation.length && !invited) {//uso il "not invited" per segnalare che non deve essere "true" per fare "terminare" il ciclo
    if (userNameFirstUpp == invitation[i]){
        invited = true
    }
    i++
}
console.log(i);

if (invited == true){
    document.getElementById('result').innerHTML = 'Mi* car* ' + userNameFirstUpp + '! Potrai partecipare agli sfarzosi festaggiamenti indetti dal Grande Gatsby.';
} else {
    document.getElementById('result').innerHTML = 'Il Grande Gatsby è amareggiato, ma il tuo invito dev\'essere andato perso nelle viette della Grande Mela, si occuperà di persona del suo invito ai prossimi festeggiamenti';
}