// Escreva uma função que recebe um array de objetos com informações de pessoas (nome, idade, cidade) e retorna um novo array com o nome e a cidade de cada pessoa 
// em uma única string, separada por vírgula. Por exemplo, se a entrada for [{nome: "João", idade: 20, cidade: "São Paulo"}, {nome: "Maria", idade: 25, cidade: "Rio de Janeiro"}], 
// a saída deve ser ["João, São Paulo", "Maria, Rio de Janeiro"].

const retornaNomeECidade = (objDados) => {

    let arrayFiltrada = [];

    return objDados.map(v => (`${v.nome}, ${v.cidade}`));

};

const dados = [{ nome: "João", idade: 20, cidade: "São Paulo" }, { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" }];

// console.log(retornaNomeECidade(dados));

// Escreva uma função que recebe uma string como entrada e retorna o número de ocorrências de cada letra na string, em um objeto. 
// Por exemplo, se a entrada for "abacaxi", a saída deve ser {a: 2, b: 1, c: 1, x: 1, i: 1}.

const ocorrenciaDeLetras = (str) => {

    let obj = {};

    for (let i = 0; i < str.length; i++) {
        const letra = str[i]

        if (obj[letra]) {
            obj[letra]++;
        } else {
            obj[letra] = 1;
        };
    };
    return obj;
};

const txt = 'abacaxi';

console.log(ocorrenciaDeLetras(txt));
