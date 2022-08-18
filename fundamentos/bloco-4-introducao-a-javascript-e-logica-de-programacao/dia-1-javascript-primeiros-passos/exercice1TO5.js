const a = 30;
const b = 60;
const c = 90;

//Programa 1
console.log('Primeiro programa:')
console.log('A soma é:', a + b);
console.log('A subtração é:', a - b);
console.log('A multiplicação é:', a * b);
console.log('A divisão é:', a / b);
console.log('O modulo é:', a % b);
console.log('------------------------------------------------')
//--------------------------------------------------

//Programa 2
console.log('  ');
console.log('Segundo programa:')
if(a > b) {
    console.log('O numero a é maior que b.');
}
else if(b > a) {
    console.log('O numero b é maior que a.');
}
else {
    console.log('Os valores são iguais.')
}
console.log('------------------------------------------------')
//--------------------------------------------------

//Programa 3
console.log('  ');
console.log('Terceiro programa:')
if(a != b && a != c && b != c){
    if(a > b && a > c) {
        console.log('O numero a é o maior.');
    }
    else if(a > b && a < c){
        console.log('O numero c é o maior.');
    }
    else if(b > a && b > c){
        console.log('O numero b é o maior.');
    }
    else if(b > a && b < c){
        console.log('O numero c é o maior.');
    }
}
else if(a != b && a == c){
    if(a > b) {
        console.log('O numero a é maior que b e igual a c.');
    }
    else if(b > a) {
        console.log('O numero b é maior que a e c.');
    }
}
else if(a == b && a != c){
    if(a > c) {
        console.log('O numero a é igual ao c, que são maiores que c.');
    }
    else if(c > a) {
        console.log('O numero c é maior que a e b.');
    }
}
else if(b != a && b == c){
    if(b > a) {
        console.log('O numero b é igual ao c, que são maiores que a.');
    }
    else if(b < a) {
        console.log('O numero a é maior que a e b.');
    }
}
else if(b == a && b != c){
    if(b > c) {
        console.log('O numero b é igual ao a, que são maiores que c.');
    }
    else if(c > b) {
        console.log('O numero c é maior que a e b.');
    }
}
else {
    console.log('Os valores são iguais.')
}
console.log('------------------------------------------------')
//--------------------------------------------------

//Programa 4
console.log('  ');
console.log('Quarto programa:')
if(a < 0) {
    console.log('Negative')
}
else if(a > 0){
    console.log('Positive')
}
else {
    console.log('Zero')
}
console.log('------------------------------------------------')
//--------------------------------------------------

//Programa 5
console.log('  ');
console.log('Quinto programa:')
if(a > 0 && b > 0 && c > 0){
    if(a + b + c == 180){
        console.log(true)
    }
    else {
        console.log(false)
    }
}
else {
    console.log('Os valores informados não podem ser negativo')
}