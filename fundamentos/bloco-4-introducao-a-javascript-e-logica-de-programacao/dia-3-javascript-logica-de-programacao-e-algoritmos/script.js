//Exercicio 1
// let sumFactorial = 10;

// for(let index = 9; index >= 1; index -= 1){
//     console.log(sumFactorial, "*", index);
//     sumFactorial = index * sumFactorial;
//     console.log(sumFactorial);
// }

//Exercicio 2
// let str = 'tryber';letrasmaior

// let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
// console.log(reverseWordArr.join(" "));

//Exercicio 3
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let compair = array[0];
// let bigger = array[0];
// let smaller = array[0];

// for(let index = 0; index < array.length; index += 1){
//     if(array[index].length <= compair.length){
//         smaller = array[index];
//     }
//     else if (array[index].length >= compair.length){
//         bigger = array[index];
//     }
//     else {
//         smaller = smaller;
//         bigger = bigger;
//     }
//     compair = array[index];
// }

// //console.log("tamanho do javascript:", array[1].length);

// console.log("A menor é: ", smaller);
// console.log("A maior é: ", bigger);

//Exercicio 4
let numberDiv = 0;
let number = 0;

for(let index = 2; index <= 50; index += 1){
    for(let division = 2; division <= index; division += 1){
        if(index % division === 0){
            numberDiv += 1;
        }
        else {
            numberDiv = numberDiv;
        }
    }
    if(numberDiv == 1){
        number += 1;
    }
    else {
        number = number;
    }
    numberDiv = 0;
}

console.log("Existem", number,"numeros primos entre o 2 a 50");
