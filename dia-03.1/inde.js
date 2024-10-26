// crindo variaveis 
let nome = ""
let idade = 0
let temCarta = false
let temCarro = false

// pedindo informaçoes
nome = prompt(" insira seu nome ")
idade = parseInt(prompt(" insira sua idade "))
let opcaoCarta = prompt(" voce tem carta de motorista (s/n)")
if(opcaoCarta === "s"){
    temCarta = true
}
let opcaoCarro = prompt(" voce tem carro(s/n)")
if(opcaoCarro === "s"){
    temCarro === true
}
// exibindo mensagen no console 
if(idade < 18 || !temCarta){
    console.log(nome + " voce nao pode dirigir")
}else if (idade >= 18 && temCarta && temCarro){
    console.log(nome + ", voce pode dirigir mais nao tem carro ")
}else{
    console.log(nome + ", voce sera o motorista ")
}