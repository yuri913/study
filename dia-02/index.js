//let(quando atribuido o valor a variavel let pode ser alterada o valor ao longo do tempo ) e const(qundo atribuido um valor nao pode ser trocado)

// delcaraçao de variavel \\let nome da variavel  = "valor da variavel seja um numero ou um texto "

// console.log() tem como funçao exbir o valor no console

// prompt("pode inserir um mensagen") abre uma janela para o usuario inseir um valor 

// parseInt() converte para um numero inteiro // number nao liga se tem casa deciaml e se inteiro ou nao 

// parsefloat()  converte a string recebida como argumento e a retorna como um número de ponto flutuante

// criando variveis

let nome = ""
let idade  = 0 
let altura = 0
let peso = 0 

 // atribuido valor as variaveis
nome = prompt(" insira seu nome ")
idade = parseInt(prompt(" insira sua idade "))
altura = parseFloat(prompt(" insira sua altura "))
peso = parseInt(prompt(" insira seu pesso "))

let anoNas =  0
anoNas = 2024 - idade

let imc = 0 
imc = peso / (altura * altura )

console.log("ola " + nome + ", voce tem " + idade + " anos, nasceu em " + anoNas + 
    ", tem " + altura  + " de altura, pesa " + peso + "kg e imc  e 0" + imc + "kg/m²"
)
