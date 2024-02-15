//Programa de voto no Brasil -> menor que 16 não vota, 16 entre 17 ou maior que 65 é opcional, resto é obrigatório

var idade = 66
if (idade<16)
    console.log('Não Vota')
else if(idade<18 || idade > 65) //pode ser feito assim. O guanabara coloca chaves em ifs com uma linha só, eu acho desnecessário
    console.log('Voto Opcional')
else
    console.log('Voto Obrigatório')
console.log(`Você tem ${idade} anos`)
/*
if (idade<16)
    console.log('Não Vota')
else
    if(idade<18)
        console.log('Voto Opcional')
    else
        console.log('Voto Obrigatório')
*/