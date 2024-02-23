let titulo = document.querySelector('h1#titulo')
//pode ser só h1 ou titulo

//para acessar é só usar titulo.textContent

titulo.textContent = 'DOM'
//o resultado do querryselectall é um array então tem que ter alguns cuidados

let box = document.querySelectorAll('div.box')

document.write(box[0].textContent)

box[0].textContent= 'Arroz, Feijão e Batata'