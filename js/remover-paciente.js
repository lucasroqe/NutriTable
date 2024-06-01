var tabela = document.querySelector('#tabela-pacientes')

tabela.addEventListener('dblclick', function (event) {

    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function () {
        //SELECIONA QUEM FOI CLICADO E REMOVE O PAI DELE
        //TARGET = TD  PARENT = TR
        event.target.parentNode.remove()
    }, 500)
})
