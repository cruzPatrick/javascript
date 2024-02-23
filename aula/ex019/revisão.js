let produto = 'Arroz'
let quant = 2
let precoUni = 4.99
let precoTot = quant*precoUni

console.log(`O valor total a pagar é ${precoTot.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`) //tem percentual e decimal
console.log('--------------------------------------------------------------------------------------------------')
console.log(`O valor é ${new Intl.NumberFormat('pt-BR').format(precoTot)}`)
console.log('--------------------------------------------------------------------------------------------------')