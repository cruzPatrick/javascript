function calcular(){
    var ini = document.querySelector('input#iini')
    var fim = document.querySelector('input#ifim')
    var pass = document.querySelector('input#ipass')

    var res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0)
        res.innerHTML = 'Insira um valor válido'
    else if(pass.value <= 0){
            res.innerHTML = 'Insira um valor válido'
        }else{
            res.innerHTML = 'Contado...'
            let i = Number(ini.value) //ao sair desse else let deixa de existir
            let f = Number(fim.value)
            let p = Number(pass.value)

            if(i>f){ //f é menor que i
                for(let c = i; c >= f; c-=p){
                    res.innerHTML += ` &#x1F449 ${i}`
                    i-=p
                }
            }else{
                for(let c = i; c<=f; c+=p){ //ao sair desse for, se c fosse let ele deixaria de existir
                    res.innerHTML += ` &#x1F449 ${i}`
                    i+=p       
                }
            }
            res.innerHTML += ` &#x1F6A9;`
        }
    

    
    
    
    /*
    Eu quebrando a cabeça
    if(numI.value.length == 0 || numF.value.lenght == 0 || pass.value.lenght == 0)


            
        res.innerHTML = 'Insira um valor válido'
    else{
        res.innerHTML = 'Contando...'
        for(Number(numI);Number(numI)<=Number(numF);Number(numI)+Number(pass)){ -> imaginando que numI = c o erro está no fato de que ele só executaria uma vez porque está c+p e não c+=p (o pior é que eu pensei nisso, mas não escrevi)
            var valor = Number(numI)+Number(numF)
            res.innerHTML += `${valor}`
        }
        if(valor!=Number(numF)){
            res.innerHTML += '<br>FIM'
        }
    }
    
    
    */
}