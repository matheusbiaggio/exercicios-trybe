let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1
// for(let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

//Exercicio 2
// let soma = 0;
// for(let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// console.log(soma);

//Exercicio 3
// let soma = 0;
// let media = 0;
// for(let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// media = soma/(numbers.length);
// console.log(media);

//Exercicio 4
// let soma = 0;
// let media = 0;
// for(let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// media = soma/(numbers.length);
// if(media > 20) {
//     console.log("Valor maior que 20")
// }
// else {
//     console.log("Valor menor ou igual a 20")
// }

//Exercicio 5
// let maiorNumero = 0;
// for(let index = 0; index < numbers.length; index += 1) {
//     if(maiorNumero < numbers[index]) {
//         maiorNumero = numbers[index]
//     }
//     else {
//         maiorNumero = maiorNumero;
//     }
// }
// console.log("O maior valor é ", maiorNumero);

//Exercicio 6
// let numerosImpares = 0;
// for(let index = 0; index < numbers.length; index += 1) {
//     if(numbers[index] % 2 == 0) {
//         numerosImpares += 1;
//     }
//     else {
//         numerosImpares = numerosImpares;
//     }
// }
// if(numerosImpares == 0) {
//     console.log("Não contem numeros impares")
// }
// else {
//     console.log("Existe", numerosImpares, "numeros impares");
// }

//Exercicio 7
// let menorNumero = numbers[0];
// for(let index = 0; index < numbers.length; index += 1) {
//     if(menorNumero > numbers[index]) {
//         menorNumero = numbers[index]
//     }
//     else {
//         menorNumero = menorNumero;
//     }
// }
// console.log("O menor valor é", menorNumero);

//Exercicio 8
// let array1to25 = [];

// for(let index = 0 ; index < 26 ; index += 1){
//     array1to25[index] = index;
//    console.log(array1to25[index]);
//}

//Exercicio 9
let array1to25 = [];

for(let index = 0 ; index < 26 ; index += 1){
    array1to25[index] = index/2;
    console.log(array1to25[index]);
}