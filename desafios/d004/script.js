function calcular(){
    var num = document.querySelector('input#inum')
    var res = document.getElementById('iselec')


    if(num.value.length == 0)
        alert ('Insira um valor')
    else{
        var val = Number(num.value)
        let i=0
        res.innerHTML = ''
        for(i;i<11;i++){
            let item = document.createElement('option')
            item.text = `${i} X ${val} = ${val*i}`
            item.value = `tabuada${c}`
            res.appendChild(item)
        }

    }

}