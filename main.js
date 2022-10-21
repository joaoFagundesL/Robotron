const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        const controle = evento.target.parentNode
        manipulaDados(evento.target.textContent, controle);
    })
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('.controle-contador');

    if(operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}