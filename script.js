let passos = document.querySelectorAll('.passo');
let botaoProximo = document.querySelectorAll('.btn-proximo');
let telaInicial = document.getElementById('tela-inicial');
let telaSangrenta = document.getElementById('tela-sangrenta');

let passoAtual = 0;

botaoProximo.forEach(botao => {
    botao.addEventListener('click', () => {
        let proximoPasso = botao.getAttribute('data-proximo');
        showPasso(proximoPasso);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        telaInicial.style.display = 'none';
        telaSangrenta.style.display = 'block';
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        telaSangrenta.style.display = 'none';
        showPasso(passoAtual);
    }
});

function showPasso(pass) {
    passoAtual = pass;
    passos.forEach(passo => {
        passo.classList.remove('ativo');
    });
    document.getElementById(`passo-${pass}`).classList.add('ativo');
}
