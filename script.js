document.addEventListener("DOMContentLoaded", function() {
    let telaInicial = document.getElementById('tela-inicial');
    let telaSangrenta = document.getElementById('tela-sangrenta');
    let imgInicial = document.getElementById('img-inicial');
    let main = document.querySelector('main');
    
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            telaInicial.style.display = 'none';
            telaSangrenta.style.display = 'block';
            main.classList.remove('escondido');
            imgInicial.src = 'img/tela-inicial/protagonista-normal.png'; // Troca imagem da tela inicial
        }
    });

    main.classList.add('escondido');
});
