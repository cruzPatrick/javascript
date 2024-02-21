let num = document.getElementById('inum')
let tela = document.getElementById('ical')
let res = document.querySelector('div#res')

let val = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <=100 ){
        return true
    }else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1)
        return true
    else 
        return false
}

function add(){
    if(isNum(num.value) && !inList(num.value, val)){
        //fiz sozinho a partir daqui ↓
       res.innerHTML = ''
       let item = document.createElement('option')
       let n = Number(num.value)
       val.push(n)
       let pos = val.indexOf(n)
       item.text = `Adicionado ${val[pos]}`
       tela.appendChild(item)

    }else{
        alert('Valor inválido ou valor já encontrado ')
    }
    num.value = ``
    num.focus()
}

function fim(){
    if(val.length==0){
        alert('Insira um valor')
    }else{
        val.sort()
        let pos = val.length
        let soma = 0
        let cont = 0
        let maior = 0
        for(let i in val){
            soma += val[i]
            if(maior<val[i])
                maior=val[i]        
            cont++
        }
        let media = soma/cont //não precisa de contador pq o pos já tem o valor
        
        res.innerHTML += `Ao todo temos ${pos} valores digitados<br>`
        res.innerHTML += `O menor valor é ${val[0]} <br>`
        res.innerHTML += `O maior valor é ${maior} <br>`
        res.innerHTML += `A soma de todos so valores são ${soma}<br>`
        res.innerHTML += `A média é ${media}`
    }
}


/*
minhas tentativas falhas

function add(){
    let num = document.getElementById('inum')
    let tela = document.getElementById('ical')
    let fina = document.getElementById('ifi')

    if(num.value.length ==0)
        alert('Insira um valor')
    else if(num.value>100 || num.value<1)
            alert('Insira um valor de 1 a 100')
        else{
                let val = []
                let n = Number(num.value)
                let item = document.createElement('option')

                val.push(n)
                let pos = val.indexOf(n)
                item.text = `O valor digitado foi ${val[pos]}`
                item.id = val[pos]
                tela.appendChild(item)
                

            }
}

*/