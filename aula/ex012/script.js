//exercicio de desejar bom dia/boa tarde/boa noite
var agr = new Date()
var hora = agr.getHours()
console.log(`Agora são exatamente ${hora} horas`)
//Meu
if(hora>=1 && hora<=4){
    console.log('Boa Madrugada!')
}else if (hora<12){
        console.log('Bom Dia!')
    }else if(hora <=18){
            console.log('Boa Tarde!')
        }else if(hora<=24){
                console.log('Boa Noite')
}



/*
Do Professor
if (hora<12){
    console.log('Bom Dia!')
}else if(hora <=18){
    console.log('Boa Tarde!')
    }else if(hora<=24){
        console.log('Boa Noite')
    }else if(hora>=1 || hora<=4){
        console.log('Boa Madrugada!')
    }

*/

