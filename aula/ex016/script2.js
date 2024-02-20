let val = [1,4,5,8,9,6,3,2,2]

for(let i in val)
    console.log(val[i])
console.log(`A posição ${val.indexOf(3)} tem o número ${val[6]}`)
console.log(`${val.indexOf(10)}`)
//tambem pode ser feito assim:
let pos = val.indexOf(4)
console.log(`O valor 4 está na posição ${pos}`)