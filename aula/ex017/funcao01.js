function parimp(n){
    if(n==0){
        console.log('insira um valor válido')
        do{
            parimp(n)
        }while(n==0)
    }else if(n%2==0)
            return 'Par'
        else
            return 'Impar'
    
}

/*
let res = parimp(3)
console.log(res)
*/

console.log(parimp(4))