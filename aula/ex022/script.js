let titulo = document.querySelector('h1')
//isso aqui é uma função anônima
titulo.addEventListener('click', function (){
    alert('Você clicou :p')
})

//isso é uma função clássica
function soma(a,b){
    return `<p>${a+b} <br></p>`
}

soma (2,5) //precisa de algo para mostrar na tela
document.write(soma(2,5))

//isso é um procedure

function ola(){
    document.write('olá <br>')
}

ola()

//Arrow Function
const ola2 = () => document.write('olá com arrow function <br>')

ola2()

const ola3 = () => 'olá com arrow function, mas sem saída'

ola3()

document.write(ola3())