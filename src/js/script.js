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

// let palpite;
// const sorteio =Math.floor(Math.random()* 10)+1;

// do{
//     palpite = parseInt(prompt("Escolha um número entre 1 e 10"));
//     if(palpite !== sorteio){
//         alert('tente novamente')
//     }
// }while(palpite !== sorteio)

// alert(`parabéns você ganhou ${palpite}`)

// // FUNÇÕES

// function saudacao(nome){
//     console.log("seja bem vindo",nome)
// }
// saudacao("fiap")

// function semafaro(){
//     let sinal1="Amarelo"
//     let sinal2="vermelho"
//     let sinal3="verde"
//     alert(`O semafaro ${sinal1}`)
//     alert(`O semafaro ${sinal2}`)
//     alert(`O semafaro ${sinal3}`)
// }
// semafaro();

//VAR -> consegue acessar fora do bloco de manipulação



// function exemplo(){
//     if(true){
//         var num=100;
//         console.log("Dentro do bloco if",num)
//     }
//     console.log("Dentro do bloco da função",num)
// }
// exemplo();

/*CRIE UM PROGRAMA QUE VERIFICA SE O NÚMERO É PAR*/

function verificaPar(numero){
    if(numero % 2 === 0){
        console.log("o numero é par")
    }
    else{
        console.log("o número é impar")
    }
}
verificaPar(0);
