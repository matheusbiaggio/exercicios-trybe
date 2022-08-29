//Exercicio 1
//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let body = document.getElementsByTagName('body');
let textH1 = document.createElement('h1');
textH1.innerText = 'Exercício 5.2 - JavaScript DOM';
textH1.className = 'title';
body[0].appendChild(textH1);

//Exercicio 2
//Adicione a tag main com a classe main-content como filho da tag body
let main = document.createElement('main');
main.className = 'main-content';
body[0].appendChild(main);

//Exercicio 3
//Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';
main.appendChild(sectionCenter);

//Exercicio 4
//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let p = document.createElement('p');
p.innerText = 'Este é um p criado no exercicio 4.';
sectionCenter.appendChild(p);

//Exercicio 5
//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

//Exercicio 6
//Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let sectionRight = document.createElement('section');
sectionRight.className = 'Right-content';
main.appendChild(sectionRight);

//Exercicio 7
//Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let smallImage = document.createElement('img');
smallImage.className = 'small-image';
smallImage.src = 'https://picsum.photos/200';
sectionLeft.appendChild(smallImage);

//Exercicio 8
//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let array = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let list = document.createElement('ol');
for(let index = 0; index < array.length; index += 1) {
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(array[index]));
    list.appendChild(item);
}
main.appendChild(list);

//Exercicio 9
//Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for(let index = 0; index < 3; index += 1) {
    let textH3 = document.createElement('h3');
    textH3.className = 'description';
    main.appendChild(textH3);
}

// 1 - Onde eu quero adicionar esse elemento?
// Esse elemento existe no meu JS?
// const container = document.getElementById('first');

// 2 - Como criar (5.2) um elemento HTML?
// const newDiv = document.createElement('div');

// 3 - Como adicionar classes a esse elemento?
// newDiv.className = 'red circle small';
// // newDiv.classList.add('teste', 'teste2'); toggle

// 4 - Como adicionar o elemento ao arquivo HTML?
// container.appendChild(newDiv);


// const newDiv2 = document.createElement('div');
// newDiv2.className = 'yellow square medium';
// container.appendChild(newDiv2);
// console.log(newDiv2);


// const container = document.getElementById('first');

// function createDivElement(classes) {
//   const newDiv = document.createElement('div');
//   newDiv.className = classes;
//   // container.appendChild(newDiv);
//   // console.log(newDiv);
//   return newDiv;
// }


// // console.log('caique');

// function addElement(parent, child) {
//   parent.appendChild(child);
// }


// // createDivElement('yellow square medium');
// // createDivElement('red square medium');
// addElement(container,createDivElement('yellow square medium'));
// addElement(container,createDivElement('red square small'));