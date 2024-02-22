//Criar objeto

let pessoa = {
    nome: 'Patrick',
    idade: 21,
    altura: 1.82,
    peso: 62,
    profissao: 'Dev. Jr'
}

let produto = {
    descricao: [],
    preco: []
}

const carro = {
    marca: ['Ford', 'Fiat', 'GM'],
    modelo: ['Ka', 'Uno', 'Corsa'],
    ano: [1999,2005,2010]
}

console.log(`A marca ${carro.marca[0]} tem o carro ${carro.modelo[0]} do ano de ${carro.ano[0]}`)


//tem duas formas de acessa, a primeira como está acima e a segunda é assim:
console.log(pessoa['nome'])
let imc = pessoa.peso/(pessoa.altura*pessoa.altura)
console.log(imc)

//pode-se atualizar o valor de um objeto ->

produto.descricao = ['Arroz']
produto.preco = [4.99] //precisa de parenteses se não deixa de ser um array

console.log(`O produto ${produto.descricao} custa ${produto.preco}`)

//Não se pode usar produto.preco = [2.25] para colocar mais um valor, assim vai substituir, para isso, usar essas opções:

produto.preco = [...produto.preco, 2.25]
produto.descricao = [...produto.descricao, 'Batata']

produto.preco.push(25)
produto.descricao.push('Panetone')

console.log(produto)

//Spreed operator tbm serve para mudar constantes

carro.ano = [...carro.ano, 1990]
carro.marca = [...carro.marca, 'Chevrolet']
carro.modelo = [...carro.modelo, 'Chevet']
console.log(carro)