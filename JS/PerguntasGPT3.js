// Escreva uma função em JavaScript que recebe um array de números inteiros e retorna a média desses números.

const numerosInteiros = (arr) => {

    let soma = 0;

    for(let i = 0; i < arr.length; i++){
        soma += arr[i];
    };

    return soma / arr.length;

};

const arr = [2, 5, 9, 12];

// console.log(numerosInteiros(arr));

// Escreva uma função em JavaScript que recebe uma string como entrada e retorna o número de vogais presentes na string. 
// Por exemplo, se a entrada for "Olá, mundo!", a saída deve ser 4.

const vogaisNaString = (str) => {
    
    let cont = 0;
    let vowels = ['a','e','i','o','u'];

    for (let char of str) {
        if (vowels.includes(char)) {
            cont++;
        }
    }

    return cont;

};

const strTest = 'abracadabra';

// console.log(vogaisNaString(strTest));

// Escreva uma função em JavaScript que recebe um array de números inteiros e retorna o maior e o menor número desse array 
// em um objeto com as chaves "maior" e "menor". Por exemplo, se a entrada for [5, 10, 3, 7, 2], a saída deve ser {maior: 10, menor: 2}.

const highAndLow = (arrOfNum) => {
    let maior = Math.max(...arrOfNum);
    let menor = Math.min(...arrOfNum);

    return {'maior': maior, 'menor': menor};
};

const arrNum = [12, 14, 8, 7];

// console.log(highAndLow(arrNum));

// Escreva uma função em JavaScript que recebe um número inteiro como entrada e retorna "Fizz" se o número for divisível por 3, "Buzz" se o número for divisível por 5 e "FizzBuzz" 
// se o número for divisível por 3 e 5. Caso contrário, a função deve retornar o próprio número.

const Fizzbuzz = (num) => {
    return num % 3 == 0 ? 'Fizz' : num % 5 == 0 ? 'FizzBuzz' : num;
};

// console.log(Fizzbuzz(7));

// Escreva uma função em JavaScript que recebe um array de objetos com as chaves "nome" e "idade" e retorna um novo array contendo apenas os nomes das pessoas que têm idade par. Por exemplo, 
// se a entrada for [{nome: "João", idade: 20}, {nome: "Maria", idade: 17}, {nome: "Pedro", idade: 25}], a saída deve ser ["João"].

const idadePar = (obj) => {
    return obj.filter(v => (+v.idade) % 2 == 0).map(v => v.nome)
}

const objTeste = [{nome: "João", idade: 20}, {nome: "Maria", idade: 17}, {nome: "Pedro", idade: 25}];

// console.log(idadePar(objTeste));
