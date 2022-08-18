let nota = prompt("Digite a porcentagem");

if(nota >= 90 && nota <= 100){
    alert("A");
}
else if(nota >= 80 && nota < 90){
    alert("B");
}
else if(nota >= 70 && nota < 80){
    alert("C");
}
else if(nota >= 60 && nota < 70){
    alert("D");
}
else if(nota >= 50 && nota < 60){
    alert("E");
}
else if(nota >= 0 && nota < 50){
    alert("F");
}
else {
    alert("Nota menor que zero ou maior que 100")
}