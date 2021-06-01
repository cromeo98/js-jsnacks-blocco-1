// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri   inseriti. Esegui questo programma in due versioni, con il for e con il while.
var sum = 0;

for( var i = 0 ; i < 5 ; i++){
    var userNumber = parseInt(prompt('Inserisci un numero ' + (i+1) +'/5'));
    sum += userNumber;
}

document.getElementById('sum').innerHTML = 'La somme dei numeri scelti è: ' + sum;