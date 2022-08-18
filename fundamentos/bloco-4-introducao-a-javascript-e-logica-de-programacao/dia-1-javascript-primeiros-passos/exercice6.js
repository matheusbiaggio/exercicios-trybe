var chessPiece = prompt("Digite o nome da peça: ")
chessPiece = chessPiece.toLowerCase();

if(chessPiece == "peao" || chessPiece == "peão") {
    alert("Anda para frente uma casa e so pode matar peças que estão na sua diagonal em um casa.")
}
else if(chessPiece == "torre") {
    alert("Anda para frente, atraz e para o lado, quantas casas quiser.")
}
else if(chessPiece == "bispo") {
    alert("Anda na diagonal, quantas casas quiser.")
}
else if(chessPiece == "cavalo") {
    alert("Anda em L.")
}
else if(chessPiece == "rei") {
    alert("Anda na diagonal, para frente, para os lados e para traz, apenas uma casa.")
}
else if(chessPiece == "rainha") {
    alert("Anda na diagonal, para frente, para os lados e para traz, quantas casas qiser.")
}
else {
    alert("Peça inexistente.")
}