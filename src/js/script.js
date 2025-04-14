// //WHILE

// let a=0;
// while(a<10){
//     console.log("o valor de a é: ")
//     a++
// }

// //do while
// let b=0;
// do{
//     console.log("do while",b);
//     b++
// }while(b <100)

//JOGO DA ADVINHAÇÃO

let palpite;
const sorteio =Math.floor(Math.random()* 10)+1;

do{
    palpite = parseInt(prompt("Escolha um número entre 1 e 10"));
    if(palpite !== sorteio){
        alert('tente novamente')
    }
}while(palpite !== sorteio)

alert("parabéns você ganhou ${palpite}")






