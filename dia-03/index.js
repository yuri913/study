//let condicional = true
// condicional if(condicional){
// console.log
// } else {
// console.log(condicional)
// }else if so tentare oura condiçao se a primeira condiçao for falsa 
// == igual ! diferente | < menor que e > maior que | <=menor igual e maior igaul >=
// === igual o valor e o tipo | !== e diferente o valor e o tipo

//let idade = Number(prompt("insira sua idade "))
//if(idade <= 10 ){
//    console.log(idade)
//    console.log(" voce tem menos ou tem 10 anos ")
//}else{
//    console.log(" voce tem mais que 10 anos ")
//}

// escopo variaveis criadada  dentro do escopo maior pode ser ultilizadas no escopo e noa se consegue ultilizar uma variavel nao pode ser ultilizada fora do escopo ue dentro das {da quele escopo}

 // E e OU , &&  e ||
 //let nome = prompt(" insira seu nome ")
 //let idade = Number(prompt(" insira sua idade "))
 
 //if(nome === "yuri"&& idade === 19){
 //   console.log(" seu nome e yuri e voce tem 19 anos")
 //} else if(nome === "yuri" || idade === 19){
//    console.log(" seu nome e yuri ou voce tem 19 anos ") 
 //}else{
//    console.log(" seu nome nao e yuri e voce nao tem 19 anos ")
// }

const temfome = prompt(" voce esta com fome ")
const temdinheiro = prompt(" voce tem dinheiro ")
const estaAberto = prompt(" o restaurante esta aberto ")

if(temfome === "nao" || temdinheiro === "nao "){
    console.log(" hoje o jatar vai ser em casa")
}else if (temdinheiro === "sim" && estaAberto === "sim"){
    console.log(" hoje o jantar sera no seu retsurante preferido ")
}else{
    console.log(" peça um delivre ")
}