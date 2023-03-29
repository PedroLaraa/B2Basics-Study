// Escreva uma função em JavaScript que recebe um objeto com informações de uma pessoa (nome, idade e profissão) e retorne uma string no seguinte formato: "Nome: 
// {nome}, Idade: {idade}, Profissão: {profissão}". Se alguma das informações não estiver presente no objeto, retorne a string "Informação não encontrada".

const objToStr = (obj) => {

    let str = "";
    if (obj.nome) {
        str += `Nome: ${obj.nome}, `;
    }
    if (obj.idade) {
        str += `Idade: ${obj.idade}, `;
    }
    if (obj.profissao) {
        str += `Profissão: ${obj.profissao}`;
    }
    return str;
}

const obj = {
    nome: "João",
    idade: 23,
    profissao: "Engenheiro"
};

// console.log(objToStr(obj))

// Escreva uma função em JavaScript que recebe um array de objetos que representam produtos (cada objeto tem nome, preço e quantidade) e retorne o valor total do estoque.

const totalDoEstoque = (obj) => {

    let total = 0;

    for(let i = 0; i < obj.length; i++){
        total += +obj[i].preco * +obj[i].quantidade
    }

    return total;

};

const objTest = [{
    nome: "Chocolate",
    preco: 2.50,
    quantidade: 100
}, {
    nome: "Coca-cola",
    preco: 1.50,
    quantidade: 100
}, {
    nome: "Cerveja",
    preco: 1.50,
    quantidade: 100
}];

// console.log(totalDoEstoque(objTest));

// Escreva uma função em JavaScript que recebe um número inteiro e retorna um booleano indicando se o número é primo ou não.

const numeroPrimos = (num) => {
    for(let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }

    return num > 1
}

console.log(numeroPrimos(8))
