let amigo = {nome:'José', 
sexo: 'M', 
peso: 85.4, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
console.log(`O nome dele é ${amigo.nome} e seu peso é ${amigo.peso}Kg`)
amigo.engordar(2)
console.log(`O nome dele é ${amigo.nome} e seu peso é ${amigo.peso}Kg`)
