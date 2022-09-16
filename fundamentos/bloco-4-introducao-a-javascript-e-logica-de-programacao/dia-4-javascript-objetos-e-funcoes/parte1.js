// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: true
// };

//Exercicio 1
//console.log("Boas vindas", info.personagem, ".");

//Exercicio 2
//console.log(info.recorrente);

//Exercicio 3
// for(let keys in info){
//     console.log(keys);
// }

//Exercicio 4
// for(let keys in info){
//     console.log(info[keys]);
// }

//Exercicio 5
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: true
// };

// for(let keys in info2){
//     if(info[keys] === info2[keys]){
//         console.log("Ambos recorrentes");
//     }
//     else{
//         console.log(info[keys],"e", info2[keys]);
//     }
// }

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    }
  ],
};

//Exercicio 6
//console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "se chama", leitor.livrosFavoritos[0].titulo);

//Exercicio 8
let cont = 0;
for (let index = 0; index < leitor.livrosFavoritos.length; index += 1) {
  cont += 1;
}
console.log(leitor.nome, "tem", cont, "livros favoritos");