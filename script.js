function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});

document.querySelectorAll(".modal a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});
