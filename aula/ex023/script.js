let menu = document.querySelector('menu#opcao')

let hambu = document.querySelector('span#burguer')

let bulight = document.querySelector('button#blight')

let budark = document.querySelector('button#bdark')

let bupadrao = document.querySelector('button#bpad')

let tela = document.querySelector('body')

budark.addEventListener('click', darkmode)
bulight.addEventListener('click', lightmode)
bupadrao.addEventListener('click', normmode)

function clicou(){
    if (getComputedStyle(menu).display === 'block') {
        hambu.style.backgroundColor = '';
        menu.style.display = 'none';
    }else{
        hambu.style.backgroundColor = '#9d55f5'
        menu.style.display = 'block'
    }
}



function darkmode(){
    tela.classList.add('dark')
    tela.classList.remove('light')
}

function lightmode(){
    tela.classList.add('light')
    tela.classList.remove('dark')
}

function nommode(){
    if(tela.classList=='light'){
        tela.classList.remove('light')
    }else{
        tela.classList.remove('dark')
    }
}