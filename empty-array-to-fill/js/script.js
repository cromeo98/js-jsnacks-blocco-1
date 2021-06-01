// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var numbers = [];

// cicle FOR
for (var i = 0; i < 6; i++){
    var userNumber = parseInt(prompt('inserisci un numero ' + (i+1) + '/6'));
    if (userNumber % 2 != 0){
        numbers.push (userNumber);
    }
}

// cicle WHILE
// var i = 0

// while (i < 6){
//     var userNumber = parseInt(prompt('inserisci un numero ' + (i+1) + '/6'));
//     if (userNumber % 2 != 0){
//         numbers.push (userNumber);
//     }
//     i++;
// }

console.log(numbers);

