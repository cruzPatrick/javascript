let titulo = document.querySelector('h1')

titulo.textContent = 'Aula 09 Manipulando Elementos das CSS com JS'

let img = document.querySelector('img#foto')

img.setAttribute('src', 'imagem/neeko.jpg')
img.setAttribute('width', '250px')


//Manipulçao de CSS começa aqui

//document.querySelector('h1').style.color = 'red' é o mesmo que o abaixo
titulo.style.color = 'lightblue'
titulo.style.backgroundColor = 'rgb(50,50,50)'
titulo.style.padding = '.30em'
titulo.style.borderRadius = '10px'
titulo.style.borderBottom = '3px solid purple'
//a de cima é interessante quando se tem poucas propriedades para aplicar, quando se tem muitas, melhor ir para outra abordagem


//---------------------

let box = document.querySelectorAll('article.box')

//pesquei dentro das CSS a classe dark, da para com outras e essa é uma das opções quqe se tem para não fazer a parte de cima
box[0].setAttribute('class', 'dark')
box[0].removeAttribute('class')

//Troca de cor do Site
let tela = document.querySelector('main')
let btdark = document.getElementById('bdark')
let btlight = document.getElementById('blight')

btdark.addEventListener('click', darkmode)
btlight.addEventListener('click', lightmode)

function darkmode(){
    console.log('modo dark')
    tela.classList.add("dark")
    tela.classList.remove("light")
}

function lightmode(){
    console.log('Light mode')
    tela.classList.add("light")
    tela.classList.remove("dark")
}