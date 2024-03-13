let menu = document.querySelector('menu#opcao')

let hambu = document.querySelector('span#burguer')

let bulight = document.querySelector('button#blight')

let budark = document.querySelector('button#bdark')

let bupadrao = document.querySelector('button#bpad')

let tela = document.querySelectorAll('.change')

budark.addEventListener('click', darkmode)
bulight.addEventListener('click', lightmode)
bupadrao.addEventListener('click', normmode)

function clicou(){
    if (getComputedStyle(menu).display === 'block') {
        //hambu.style.backgroundColor = ''; -> sem cor, mas foi algo que desiste de fazer :p pois ficou feio, só tá aqui pra eu lembrar
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block'
    }
}



function darkmode(){
    for(let i=0; i<tela.length; i++){
        tela[i].classList.add('dark')
        tela[i].classList.remove('light')

    }
}

function lightmode(){
    for(let i=0; i<tela.length; i++){
    tela[i].classList.add('light')
    tela[i].classList.remove('dark')
    }
}

function normmode(){
    for(let i=0; i<tela.length; i++){
        tela[i].classList.remove('light','dark')
    }
}