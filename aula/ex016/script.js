let num = [5,8,2,9,3,5,8,6,8,3]
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor na posição zero é: ${num[0]}`)

console.log(`em ordem crescente é: ${num.sort()}`)
for(var i=0; i<num.length;i++)
    console.log(num[i])
