
// 1 - Escreva uma função em JavaScript que recebe um array de números inteiros e retorna a soma desses números.

const somaArray = (arr) => {

    let soma = 0

    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
    };

    return soma
};

const arTst = [1, 2, 3]

// console.log(somaArray(arTst))

// 2 - Escreva uma função em JavaScript que recebe uma string como entrada e retorna a string invertida. Por exemplo, se a entrada for "Olá, mundo!", a saída deve ser "!odnum ,álO".

const inverteString = (str) => {
    return str.split('').reverse().join('')
}

// console.log(inverteString('Olá, Mundo!'))

// 3- Escreva uma função em JavaScript que recebe um array de strings e retorna um novo array contendo apenas as strings que começam com a letra "a". Por exemplo,
// se a entrada for ["amor", "banana", "carro", "avião"], a saída deve ser ["amor", "avião"].

const letraInicialA = (arr) => {

    let arrNova = []

    for (let i = 0; i < arr.length; i++) {
        arr[i].toLowerCase().charAt(0) === 'a' ? arrNova.push(arr[i]) : ''
    }

    return arrNova
}

const arrayTeste = ["Amor", "banana", "carro", "avião"]

// console.log(letraInicialA(arrayTeste))

// 4 - Escreva uma função em JavaScript que recebe um array de objetos e retorna um novo array contendo apenas os objetos cujo valor da chave "idade" seja maior do que 18. Por exemplo,
// se a entrada for [{nome: "João", idade: 20}, {nome: "Maria", idade: 17}, {nome: "Pedro", idade: 25}], a saída deve ser [{nome: "João", idade: 20}, {nome: "Pedro", idade: 25}].

const maiorDeIdade = (objDePessoas) => {

    return objDePessoas.filter(v => (+v.idade) >= 18)

}

const objDePessoasIdade = [{"nome": "João", "idade": 20}, {"nome": "Maria", "idade": 17}, {"nome": "Pedro", "idade": 25}]

// console.log(maiorDeIdade(objDePessoasIdade))

// Escreva uma função em Python que recebe uma lista de números inteiros e retorna uma lista contendo apenas os números pares da lista original. 
// Por exemplo, se a entrada for [1, 2, 3, 4, 5, 6], a saída deve ser [2, 4, 6].

const numerosPares = (arrDeNumeros = []) => {

    return arrDeNumeros.filter(v => v % 2 == 0);

};

const arrNum = [2, 4, 5, 8, 9]

// console.log(numerosPares(arrNum))
