function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')


    if(fAno.value.length == 0||fAno.value > ano){
        window.alert('verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[1].checked){
            gen = 'Mulher'
            if(idade>=0 && idade<=12){
                //Criança
                img.setAttribute('src', 'img/criancaF.png')
            }else if(idade<=21){
                //jovem
                img.setAttribute('src', 'img/joveF.png')
            }else if(idade<=55){
                //adulto
                img.setAttribute('src', 'img/muie.png')
            }else{
                //idoso
                img.setAttribute('src', 'img/veia.png')
            }

        }else{
            gen = 'Homem'
            if(idade>=0 && idade<=12){
                //Criança
                img.setAttribute('src', 'img/criancaM.png')
            }else if(idade<=21){
                //jovem
                img.setAttribute('src', 'img/joveH.png')
            }else if(idade<=55){
                //adulto
                img.setAttribute('src', 'img/homi.png')
            }else{
                //idoso
                img.setAttribute('src', 'img/veio.png')
            }

        }
    }
    //res.style.textAlign = 'center' coloquei no css, mas tbm serve por aqui
    res.innerHTML = `Detectamos gênero ${gen} com ${idade} anos`
    res.appendChild(img)
}