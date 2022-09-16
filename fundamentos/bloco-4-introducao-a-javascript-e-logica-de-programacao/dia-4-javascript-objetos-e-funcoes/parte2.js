//Exercicio 1
// function verificaPalindromo(palavra) {
//     let palavraInversa = palavra.split("").reverse().join("");
//     console.log(palavraInversa);
//     if(palavraInversa === palavra){
//         return console.log(true);
//     }
//     console.log(false);
// }

// let palavra = 'arara';
// verificaPalindromo(palavra);

//Exercicio 2
// function verificaMaiorValor(array) {
//     let maior = array[0];
//     for(let index = 0; index < array.length; index += 1){
//         if(array[index] > maior){
//             maior = index;
//         }
        // else{
        //     menor = menor;
        // }
//     }
//     console.log(maior);
// }

// let array = [2, 3, 6, 7, 10, 1];
// verificaMaiorValor(array);

//Exercicio 3
// function verificaMenorValor(array) {
//     let menor = array[0];
//     for(let index = 0; index < array.length; index += 1){
//         if(array[index] < menor){
//             menor = index;
//         }
//         else{
//             menor = menor;
//         }
//     }
//     console.log(menor);
// }

// let array = [2, 4, 6, 7, 10, 0, -3];
// verificaMenorValor(array);

//Exercicio 4
// function verificaMaiorNome(array){
//     let maior = array[0];
//     for(let index = 0; index < array.length; index += 1){
//         if(array[index].length < maior.length){
//             maior = maior;
//         }
//         else{
//             maior = array[index];
//         }
//     }
//     console.log(maior);
// }

// let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// verificaMaiorNome(array);

//Exercicio 5
function verificaMaiorRepeticao(array){
    let numeroIguais = 0;
    let aux = 0;
    let indice = 0;
    for(let index = 0; index < array.length; index += 1){
        for(let index2 = array[index] + 1; index2 < array.length; index2 += 1){
            if(array[index] == array[index2]){
                numeroIguais = numeroIguais;
            }
            else{
                numeroIguais += 1;
            }
        }
        if(aux > numeroIguais){
            aux = aux;
        }
        else {
            aux = numeroIguais;
            indice = index;
        }
        numeroIguais = 0;
    }
    console.log(array[indice]);
}

let array = [2, 3, 2, 5, 8, 2, 3]
verificaMaiorRepeticao(array);