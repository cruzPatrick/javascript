function calcular(){
    var ini = document.getElementById('iini')
    var fim = document.getElementById('ifim')
    var pas = document.getElementById('ipass')
    var res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0|| pas.value.length == 0){
        alert('Escreva um valor possível')
    }else if(pas.value <=0){
            alert('Insira um valor de passagem')
        }else{
            res.innerHTML = "Contando... <br>"
            let num1 = Number(ini.value)
            let num2 = Number(fim.value)
            let num3 = Number(pas.value)

            if(num1>num2){
                for(let i=num1;i>=num2;i-=num3){
                    res.innerHTML += `&#x1F449 ${num1} `
                    num1-=num3
                }
                res.innerHTML += ` &#x1F6A9`
                
            }else{
                for(let i = num1;i<=num2;i+=num3){
                    res.innerHTML += `&#x1F449 ${num1} `
                    num1+=num3
                }
                res.innerHTML += ` &#x1F6A9`
            }
        }
}