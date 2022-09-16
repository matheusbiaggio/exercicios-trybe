window.onload = function() {
    //Declarações
    let buttonBackgroundColor = document.querySelector('#buttonBackgroundColor');
    let changeBackgroundColor = document.querySelector('#changeBackgroundColor');
    let buttonTextColor = document.querySelector('#buttonTextColor');
    let changeTextColor = document.querySelector('#changeTextColor');
    let buttonTextSize = document.querySelector('#buttonTextSize');
    let changeTextSize = document.querySelector('#changeTextSize');
    let buttonSizeLines = document.querySelector('#buttonSizeLines');
    let changeSizeLines = document.querySelector('#changeSizeLines');
    let buttonFont = document.querySelector('#buttonFont');
    let changeFont = document.querySelector('#changeFont');
    let main = document.querySelector('main')

    //Implementação das funções
    function changeBackgroundColorFunction() {
        main.style.backgroundColor = changeBackgroundColor.value;
    }

    function changeTextColorFunction() {
        main.style.color = changeTextColor.value;
    }

    function changeTextSizeFunction() {
        main.style.fontSize = changeTextSize.value;
    }

    function changeSizeLinesFunction() {
        main.style.lineHeight = changeSizeLines.value;
    }

    function changeFontFunction() {
        main.style.fontFamily = changeFont.value;
    }

    //Eventos com os botões
    buttonBackgroundColor.addEventListener('click', function () {
        changeBackgroundColorFunction();
    })
    buttonTextColor.addEventListener('click', function () {
        changeTextColorFunction();
    })
    buttonTextSize.addEventListener('click', function () {
        changeTextSizeFunction();
    })
    buttonSizeLines.addEventListener('click', function () {
        changeSizeLinesFunction();
    })
    buttonFont.addEventListener('click', function () {
        changeFontFunction();
    })

    //Chamando as funções
    changeBackgroundColorFunction();
    changeTextColorFunction();
    changeTextSizeFunction();
    changeSizeLinesFunction();
    changeFontFunction();
}