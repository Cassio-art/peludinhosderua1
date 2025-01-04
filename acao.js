document.addEventListener("DOMContentLoaded", function () {
    // Seleção dos elementos
    const sobreLink = document.getElementById("sobre-link");
    const contatoLink = document.getElementById("contato-link");
    const sobreModal = document.getElementById("sobre-modal");
    const contatoModal = document.getElementById("contato-modal");

    // Evento para o link "Sobre"
    sobreLink.addEventListener("click", function (event) {
        event.preventDefault();
        $("#sobre-modal").modal("show");
    });

    // Evento para o link "Contato"
    contatoLink.addEventListener("click", function (event) {
        event.preventDefault();
        $("#contato-modal").modal("show");
    });
});
