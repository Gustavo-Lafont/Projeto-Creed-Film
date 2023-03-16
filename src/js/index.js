const btnsCarrossel = document.querySelectorAll('.btn');
const imgs = document.querySelectorAll('.img');


btnsCarrossel.forEach((btn, indice) => {
    btn.addEventListener('click', () => {
        desativarBtnSelecionado();

        marcarBtnCarrossel(btn);

        esconderImgAnterior();

        mostrarImgDeFundo(indice);
    })
})


function mostrarImgDeFundo(indice) {
    imgs[indice].classList.add('ativa');
}

function marcarBtnCarrossel(btn) {
    btn.classList.add('selecionado');
}

function esconderImgAnterior() {
    const imgAtiva = document.querySelector('.ativa');
    imgAtiva.classList.remove('ativa');
}

function desativarBtnSelecionado() {
    const btnSelecionado = document.querySelector('.selecionado');
    btnSelecionado.classList.remove('selecionado');
}