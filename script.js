document.addEventListener('DOMContentLoaded', () => {
    const telaInicial = document.getElementById('tela-inicial');
    const btnIniciar = document.getElementById('btn-iniciar');
    const main = document.querySelector('main');

    btnIniciar.addEventListener('click', () => {
        telaInicial.classList.add('escondido');
        main.classList.remove('escondido');
    });

    const botoesProximo = document.querySelectorAll('.btn-proximo');
    botoesProximo.forEach((botao) => {
        botao.addEventListener('click', () => {
            const passoAtual = botao.closest('.passo');
            const proximoId = botao.getAttribute('data-proximo');
            const proximoPasso = document.getElementById(`passo-${proximoId}`);

            if (passoAtual && proximoPasso) {
                passoAtual.classList.remove('ativo');
                passoAtual.classList.add('escondido');
                proximoPasso.classList.add('ativo');
                proximoPasso.classList.remove('escondido');
            }
        });
    });
});
