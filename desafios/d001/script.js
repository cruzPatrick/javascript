function carregar(){
    var msg = document.querySelector('div#msg')
    var foto = document.querySelector('img#img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if(hora>=0 && hora <=12){
        //bom dia
        foto.src = 'img/manha.png'
        document.body.style.background = 'linear-gradient(45deg, rgb(255,245,207), rgb(178,139,82))'
    }else if(hora<=18){
        //Boa tarde
        foto.src = 'img/tarde.png'
        document.body.style.background = 'linear-gradient(45deg, rgb(252,252,193), rgb(166, 236, 228))'
    }else{
        //Boa noite
        foto.src = 'img/noite.png'
        document.body.style.background = 'linear-gradient(45deg, rgb(221,156,186), rgb(95,87,111)'
    }
}

/*
manhã = rgb(255,245,207)      rgb (178, 139, 82)
tarde = rgb(248, 248, 246)     rbg(186, 195, 194)
noite = rgb(221, 156, 186)     rgb(95, 87, 111)
*/