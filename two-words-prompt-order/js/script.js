// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var word1 = prompt('inserisci una parola');
var word2 = prompt('inserisci una seconda parola');

if (word1.length > word2.length){
    document.getElementById('ord-words').innerHTML = 'La parola più corta è ' + word2 + '. ' + 'La più lunga invece è ' + word1;
} else if (word1.length < word2.length){
    document.getElementById('ord-words').innerHTML = 'La parola più corta è ' + word1 + '. ' + 'La più lunga invece è ' + word2;
} else {
    document.getElementById('ord-words').innerHTML = 'Le parole sono della stessa lunghezza: ' + word2 + ' ' + word1;
}