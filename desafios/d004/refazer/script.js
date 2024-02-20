function calcular(){
    var num = document.querySelector('input#inum')
    var tab = document.getElementById('iselec')

    if(num.value.length == 0)
        alert('Erro insira um valor válido')
    else{
        tab.innerHTML = ''
        let val = Number(num.value)
        let i = 0
        for(i;i<11;i++){
            let item = document.createElement('option')
            item.text = `${i} X ${val} = ${i*val}`
            tab.appendChild(item)
        }
    }
}

