// Crie uma função que receba um array de números e retorne a soma de todos os números ímpares presentes no array.

const somaImpar = (arrNum) => {

    soma = 0;

    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 !== 0) {
            soma += arrNum[i];
        };
    };

    return soma;

};

const arrImpar = [2, 1, 7, 14, 9, 12];

// console.log(somaImpar(arrImpar));

// Crie uma função que receba uma string e retorne true se a string for um palíndromo (ou seja, pode ser lida da mesma forma da esquerda para a 
// direita e da direita para a esquerda) e false caso contrário.

const verificaPalindromo = (str) => {

    return str.split('').reverse().join('') === str

}

// console.log(verificaPalindromo('pop'))

// Crie uma função que receba um array de objetos com as seguintes propriedades: nome, idade e país de origem. A função deve retornar uma nova 
// lista contendo apenas as pessoas que têm idade igual ou superior a 18 anos e são do Brasil.

const brMaiorDeIdade = (arrObj) => {

    return arrObj.filter(v => (+v.idade) >= 18 && (v.pais) == 'Brasil')

}

const objArr = [{
    nome: 'João',
    idade: 23,
    pais: 'Brasil'
}, {
    nome: 'Maria',
    idade: 17,
    pais: 'Brasil'
}, {
    nome: 'Pedro',
    idade: 20,
    pais: 'Brasil'
}]

// console.log(brMaiorDeIdade(objArr));

// Crie uma função que receba um objeto e retorne um array com os valores das propriedades desse objeto em ordem alfabética.

function obterPropriedades(objeto) {
    var propriedades = [];
    for (var propriedade in objeto) {
        if (objeto.hasOwnProperty(propriedade)) {
            propriedades.push(objeto[propriedade]);
        }
    }

    propriedades.sort((a, b) => a.toString().localeCompare(b.toString()));

    return propriedades;
}

var pessoa = {
    nome: "João",
    idade: 30,
    altura: 1.8
};

var propriedadesOrdenadas = obterPropriedades(pessoa);
// console.log(propriedadesOrdenadas);

// Crie uma função que receba um array de números e retorne o segundo maior número presente no array.


