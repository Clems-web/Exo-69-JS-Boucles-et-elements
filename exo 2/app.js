let liste = document.getElementById("liste-commissions");
let input = document.getElementById("ingredients");
let bouton = document.getElementById("bouton");
let boutonSupp = document.getElementById("boutonsupp");


bouton.addEventListener("click", function () {
    let creation = document.createElement("li");
    creation.innerHTML = input.value;
    liste.appendChild(creation);
});

boutonSupp.addEventListener("click", function () {
    let elements = document.querySelectorAll("#liste-commissions > li");
    if (elements.length > 0) {
        elements[elements.length - 1].remove();
    }
});




