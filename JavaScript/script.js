/* pulsante torna sua situato a fine pagina */
const btnTornaSu = document.getElementById("tornaSu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTornaSu.classList.add("mostra");
    } else {
        btnTornaSu.classList.remove("mostra");
    }
});

btnTornaSu.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
