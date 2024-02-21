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
       val.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} Adicionado`
       tela.appendChild(item)
       res.innerHTML = ''
    }else{
        alert('Valor inválido ou valor já encontrado ')
    }
    num.value = ''
    num.focus()
}

function fim(){
    if(val.length == 0){
        alert('Insira um valor primeiro para depois finalizar')
    }else{
        let tot = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        
        for(let pos in val){
            soma += val[pos]
            
            if(val[pos]>maior)
                maior = val[pos]
            if(val[pos]<menor)
                menor = val[pos]
        }
        let media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`

    }
}