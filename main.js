

/* Palidroma
- Chiedere all’utente di inserire una parola 
- Creare una funzione per capire se la parola inserita è palindroma */

function palindrome_word() {
    let word = prompt('Inserisci la tua parola')
    console.log(word);
    let splitWord = word.split('')
    let reverseSplitWord = splitWord.reverse()
    let reverseWord = reverseSplitWord.join('')

    if (word === reverseWord) {
        alert('La tua parola è palindroma')
    } else {
        alert('La tua parola non è palindroma')
    }
}
    
palindrome_word()









/* Pari e Dispari
- L’utente sceglie pari o dispari
- inserisce un numero da 1 a 5. 
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
- Sommiamo i due numeri 
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
- Dichiariamo chi ha vinto. */

let user_even_odd = prompt('Pari o Dispari ?')
console.log(user_even_odd);

let user_number = Number(prompt('Scegli un numero da 1 a 5'))
console.log(user_number);


function cpu_number() {
    return Math.floor(Math.random() * 5) +1;
    
}

let sum = user_number + cpu_number()
console.log(sum);

function winner() {
    if (sum % 2 == 0 && user_even_odd == 'pari' || user_even_odd == 'Pari') {
        console.log('Hai vinto');
    } else {
        console.log('Hai perso');
    }
}

winner()