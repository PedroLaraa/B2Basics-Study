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

function segundoMaiorNumero(array) {
    var maior = -Infinity;
    var segundoMaior = -Infinity;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            segundoMaior = maior;
            maior = array[i];
        } else if (array[i] > segundoMaior && array[i] !== maior) {
            segundoMaior = array[i];
        }
    }
    return segundoMaior;
}

var numeros = [10, 5, 20, 8, 15];
var segundoMaior = segundoMaiorNumero(numeros);
// console.log(segundoMaior);

// Crie uma função que receba um array de strings e retorne um novo array contendo apenas as strings que têm mais de 5 caracteres.

const strMaiorQueCinco = (arr) => {
    let novoArr = [];

    for (words in arr) {
        if (arr[words].length > 5) {
            novoArr.push(arr[words]);
        };
    };

    return novoArr;
};

const arr = ['amanha', 'depois', 'uva', 'pera'];

// console.log(strMaiorQueCinco(arr));

// Crie uma função que receba um objeto com as propriedades nome, sobrenome e idade e retorne uma string com a seguinte mensagem: "Olá, meu nome é {nome} {sobrenome} e eu tenho {idade} anos."

const saudacao = (obj) => {
    return `Olá, meu nome é ${obj.nome} ${obj.sobrenome} e eu tenho ${obj.idade} anos`
};

const dadosPessoais = {
    nome: 'José',
    sobrenome: 'Silva',
    idade: 30
};

// console.log(saudacao(dadosPessoais));

// Crie uma função que receba um array de números e retorne a mediana desses números (ou seja, o valor que está exatamente no meio do array quando ele é ordenado).

const mediana = (arrNum) => {
    let soma = 0;

    for (numeros in arrNum) {
        soma += arrNum[numeros];
    };

    return soma / arrNum.length;

};

const nums = [1, 4, 9, 12, 43, 1023];

// console.log(mediana(nums));

// Crie uma função que receba uma string e retorne um objeto contendo o número de ocorrências de cada letra da string (por exemplo, se a string for "banana", o objeto retornado deve ser {b: 1, a: 3, n: 2}).

const contadorDeRepeticoesDeLetra = (str) => {
    let obj = {}

    for (let i = 0; i < str.length; i++) {
        const letra = str[i];

        if (obj[letra]) {
            obj[letra]++
        } else {
            obj[letra] = 1;
        };
    };
    return obj;
};

const txt = 'caratinga';

// console.log(contadorDeRepeticoesDeLetra(txt));
