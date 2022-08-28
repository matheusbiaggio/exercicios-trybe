//Exercicio 1
let container = document.getElementById('aqui');
let textH1 = document.createElement('h1');
textH1.innerText = 'Exercício 5.2 - JavaScript DOM';
textH1.className = 'title';
container.appendChild(textH1);
console.log(textH1);


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