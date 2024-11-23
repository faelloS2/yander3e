document.addEventListener("DOMContentLoaded", () => {
    const telaInicial = document.getElementById("tela-inicial");
    const estadoNormal = document.getElementById("estado-normal");
    const estadoSangrento = document.getElementById("estado-sangrento");
    const jogo = document.getElementById("jogo");
    const passos = document.querySelectorAll(".passo");
    let passoAtual = 0;

    // Transição da tela inicial
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            estadoNormal.classList.add("escondido");
            estadoSangrento.classList.remove("escondido");
        }
    });

    document.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            estadoSangrento.classList.add("escondido");
            estadoNormal.classList.remove("escondido");
            telaInicial.classList.add("escondido");
            jogo.classList.remove("escondido");
        }
    });

    document.querySelectorAll(".btn-proximo").forEach((botao) => {
        botao.addEventListener("click", () => {
            const proximoPasso = botao.dataset.proximo;
            passos[passoAtual].classList.remove("ativo");
            passos[proximoPasso].classList.add("ativo");
            passoAtual = proximoPasso;
        });
    });

    document.querySelector(".reiniciar").addEventListener("click", () => {
        location.reload();
    });
});
